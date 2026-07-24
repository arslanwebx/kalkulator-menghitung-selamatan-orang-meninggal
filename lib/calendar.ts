export const PASARAN = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"] as const;

export type Pasaran = (typeof PASARAN)[number];
export type CountingMethod = "inclusive" | "next-day";

export type CalendarDate = {
  year: number;
  month: number;
  day: number;
};

export type EventDefinition = {
  id:
    | "geblag"
    | "nelung-dina"
    | "mitung-dina"
    | "matangpuluh"
    | "nyatus"
    | "pendhak-pisan"
    | "pendhak-pindho"
    | "nyewu";
  name: string;
  dayNumber: number | null;
  inclusiveOffset: number;
  description: string;
  approximate?: boolean;
};

export type EventResult = EventDefinition & {
  date: CalendarDate;
  weekday: string;
  pasaran: Pasaran;
  formattedDate: string;
  longDate: string;
  dayLabel: string;
};

const DAY_MS = 86_400_000;
const PASARAN_REFERENCE = Date.UTC(1945, 7, 17);
const WEEKDAY_FORMATTER = new Intl.DateTimeFormat("id-ID", {
  weekday: "long",
  timeZone: "UTC",
});
const DATE_FORMATTER = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export const EVENT_DEFINITIONS: readonly EventDefinition[] = [
  {
    id: "geblag",
    name: "Geblag",
    dayNumber: 1,
    inclusiveOffset: 0,
    description: "Hari wafat atau peringatan awal.",
  },
  {
    id: "nelung-dina",
    name: "Nelung Dina",
    dayNumber: 3,
    inclusiveOffset: 2,
    description: "Peringatan hari ketiga.",
  },
  {
    id: "mitung-dina",
    name: "Mitung Dina",
    dayNumber: 7,
    inclusiveOffset: 6,
    description: "Peringatan hari ketujuh.",
  },
  {
    id: "matangpuluh",
    name: "Matangpuluh",
    dayNumber: 40,
    inclusiveOffset: 39,
    description: "Peringatan hari ke-40.",
  },
  {
    id: "nyatus",
    name: "Nyatus",
    dayNumber: 100,
    inclusiveOffset: 99,
    description: "Peringatan hari ke-100.",
  },
  {
    id: "pendhak-pisan",
    name: "Perkiraan Pendhak Pisan",
    dayNumber: null,
    inclusiveOffset: 354,
    description: "Perkiraan satu tahun Jawa.",
    approximate: true,
  },
  {
    id: "pendhak-pindho",
    name: "Perkiraan Pendhak Pindho",
    dayNumber: null,
    inclusiveOffset: 708,
    description: "Perkiraan dua tahun Jawa.",
    approximate: true,
  },
  {
    id: "nyewu",
    name: "Nyewu",
    dayNumber: 1000,
    inclusiveOffset: 999,
    description: "Peringatan hari ke-1000.",
  },
] as const;

export function modulo(value: number, divisor: number): number {
  return ((value % divisor) + divisor) % divisor;
}

export function parseDateInput(value: string): CalendarDate | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const utcDate = new Date(Date.UTC(year, month - 1, day));

  if (
    utcDate.getUTCFullYear() !== year ||
    utcDate.getUTCMonth() !== month - 1 ||
    utcDate.getUTCDate() !== day
  ) {
    return null;
  }

  return { year, month, day };
}

export function toIsoDate(date: CalendarDate): string {
  return `${String(date.year).padStart(4, "0")}-${String(date.month).padStart(
    2,
    "0",
  )}-${String(date.day).padStart(2, "0")}`;
}

export function toUtcMilliseconds(date: CalendarDate): number {
  return Date.UTC(date.year, date.month - 1, date.day);
}

export function fromUtcMilliseconds(value: number): CalendarDate {
  const date = new Date(value);
  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
  };
}

export function addCalendarDays(
  date: CalendarDate,
  days: number,
): CalendarDate {
  return fromUtcMilliseconds(toUtcMilliseconds(date) + days * DAY_MS);
}

export function compareCalendarDates(
  first: CalendarDate,
  second: CalendarDate,
): number {
  return Math.sign(toUtcMilliseconds(first) - toUtcMilliseconds(second));
}

export function getPasaran(date: CalendarDate): Pasaran {
  const daysFromReference = Math.round(
    (toUtcMilliseconds(date) - PASARAN_REFERENCE) / DAY_MS,
  );
  return PASARAN[modulo(daysFromReference, PASARAN.length)];
}

export function getWeekday(date: CalendarDate): string {
  return WEEKDAY_FORMATTER.format(new Date(toUtcMilliseconds(date)));
}

export function formatDate(date: CalendarDate): string {
  return DATE_FORMATTER.format(new Date(toUtcMilliseconds(date)));
}

export function calculateSchedule(
  deathDate: CalendarDate,
  method: CountingMethod = "inclusive",
): EventResult[] {
  return EVENT_DEFINITIONS.map((event) => {
    const offset =
      event.approximate || method === "inclusive"
        ? event.inclusiveOffset
        : event.inclusiveOffset + 1;
    const date = addCalendarDays(deathDate, offset);
    const weekday = getWeekday(date);

    return {
      ...event,
      date,
      weekday,
      pasaran: getPasaran(date),
      formattedDate: formatDate(date),
      longDate: `${weekday}, ${formatDate(date)}`,
      dayLabel: event.dayNumber ? String(event.dayNumber) : "Perkiraan",
    };
  });
}

export function getMethodLabel(method: CountingMethod): string {
  return method === "inclusive"
    ? "Tanggal wafat dihitung sebagai hari pertama"
    : "Mulai menghitung dari hari berikutnya";
}

export function buildShareText({
  deathDate,
  method,
  name,
  results,
}: {
  deathDate: CalendarDate;
  method: CountingMethod;
  name: string;
  results: readonly EventResult[];
}): string {
  const heading = name.trim()
    ? `Jadwal Selamatan untuk ${name.trim()}`
    : "Jadwal Selamatan";
  const rows = results.map(
    (result) =>
      `${result.name}: ${result.longDate} (${result.weekday} ${result.pasaran})`,
  );

  return [
    heading,
    `Tanggal wafat: ${formatDate(deathDate)}`,
    `Metode: ${getMethodLabel(method)}`,
    "",
    ...rows,
    "",
    "Catatan: Tanggal Pendhak merupakan perkiraan 354 dan 708 hari. Cocokkan kembali dengan kalender Jawa atau rujukan keluarga.",
    "kalkulatorselamatanorangmeninggal.pro",
  ].join("\n");
}
