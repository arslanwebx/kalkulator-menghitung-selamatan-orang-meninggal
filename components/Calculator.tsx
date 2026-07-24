"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  buildShareText,
  calculateSchedule,
  compareCalendarDates,
  formatDate,
  getMethodLabel,
  parseDateInput,
  type CalendarDate,
  type CountingMethod,
  type EventResult,
} from "@/lib/calendar";
import {
  CalculatorIcon,
  CheckIcon,
  CopyIcon,
  PrintIcon,
  RefreshIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { Logo } from "@/components/Logo";

type Calculation = {
  deathDate: CalendarDate;
  method: CountingMethod;
  name: string;
  results: EventResult[];
};

function getToday(): CalendarDate {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
  };
}

function getTodayInputValue(): string {
  const today = getToday();
  return `${today.year}-${String(today.month).padStart(2, "0")}-${String(
    today.day,
  ).padStart(2, "0")}`;
}

function fallbackCopy(text: string): boolean {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);
  return copied;
}

export function Calculator() {
  const [dateValue, setDateValue] = useState("");
  const [name, setName] = useState("");
  const [method, setMethod] = useState<CountingMethod>("inclusive");
  const [error, setError] = useState("");
  const [calculation, setCalculation] = useState<Calculation | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const dateInputRef = useRef<HTMLInputElement>(null);
  const resultHeadingRef = useRef<HTMLHeadingElement>(null);

  const shareText = useMemo(() => {
    if (!calculation) return "";
    return buildShareText(calculation);
  }, [calculation]);

  function setDateMaximum(element: HTMLInputElement | null) {
    dateInputRef.current = element;
    if (element) element.max = getTodayInputValue();
  }

  function validateDate(): CalendarDate | null {
    if (!dateValue) {
      setError("Pilih tanggal wafat terlebih dahulu.");
      dateInputRef.current?.focus();
      return null;
    }

    const parsed = parseDateInput(dateValue);
    if (!parsed) {
      setError("Masukkan tanggal wafat yang valid.");
      dateInputRef.current?.focus();
      return null;
    }

    if (compareCalendarDates(parsed, getToday()) > 0) {
      setError("Tanggal wafat tidak boleh berada di masa depan.");
      dateInputRef.current?.focus();
      return null;
    }

    setError("");
    return parsed;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const deathDate = validateDate();
    if (!deathDate) return;

    setIsCalculating(true);
    setCopyMessage("");

    window.requestAnimationFrame(() => {
      setCalculation({
        deathDate,
        method,
        name: name.trim(),
        results: calculateSchedule(deathDate, method),
      });
      setIsCalculating(false);
      window.requestAnimationFrame(() => {
        resultHeadingRef.current?.focus();
        resultHeadingRef.current?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
          block: "start",
        });
      });
    });
  }

  function handleDateChange(event: ChangeEvent<HTMLInputElement>) {
    setDateValue(event.target.value);
    if (error) setError("");
  }

  function reset() {
    setDateValue("");
    setName("");
    setMethod("inclusive");
    setCalculation(null);
    setError("");
    setCopyMessage("");
    dateInputRef.current?.focus();
  }

  async function copyResults() {
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareText);
        copied = true;
      } else {
        copied = fallbackCopy(shareText);
      }
    } catch {
      copied = fallbackCopy(shareText);
    }
    setCopyMessage(
      copied
        ? "Hasil berhasil disalin."
        : "Hasil belum dapat disalin. Silakan pilih dan salin teks secara manual.",
    );
  }

  const hasInput =
    Boolean(dateValue || name || calculation) || method !== "inclusive";

  return (
    <>
      <section id="kalkulator" className="calculator-card" aria-labelledby="calculator-title">
        <div className="calculator-heading">
          <span className="calculator-heading-icon">
            <CalculatorIcon />
          </span>
          <div>
            <h2 id="calculator-title">Hitung Jadwal Selamatan</h2>
            <p>Isi tanggal wafat untuk melihat jadwal lengkap.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="death-date">
              Tanggal Wafat <span aria-hidden="true">*</span>
            </label>
            <input
              ref={setDateMaximum}
              id="death-date"
              name="death-date"
              type="date"
              required
              value={dateValue}
              onChange={handleDateChange}
              aria-describedby={`date-help${error ? " date-error" : ""}`}
              aria-invalid={Boolean(error)}
            />
            <p id="date-help" className="field-help">
              Tanggal ini diperlakukan sebagai tanggal kalender, tanpa jam.
            </p>
            {error && (
              <p id="date-error" className="field-error" role="alert">
                {error}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="deceased-name">
              Nama Almarhum/Almarhumah <span>(opsional)</span>
            </label>
            <input
              id="deceased-name"
              name="deceased-name"
              type="text"
              autoComplete="off"
              maxLength={80}
              value={name}
              onChange={(event) => setName(event.target.value)}
              aria-describedby="name-help"
            />
            <p id="name-help" className="field-help">
              Hanya digunakan untuk hasil salin dan cetak. Maksimal 80 karakter.
            </p>
          </div>

          <fieldset className="method-fieldset">
            <legend>Metode Perhitungan</legend>
            <label className="method-option">
              <input
                type="radio"
                name="counting-method"
                value="inclusive"
                checked={method === "inclusive"}
                onChange={() => setMethod("inclusive")}
              />
              <span>
                <strong>Tanggal wafat dihitung sebagai hari pertama</strong>
                <small>
                  Metode inklusif ini menghitung hari ke-3 sebagai tanggal wafat
                  ditambah 2 hari.
                </small>
              </span>
            </label>
            <label className="method-option">
              <input
                type="radio"
                name="counting-method"
                value="next-day"
                checked={method === "next-day"}
                onChange={() => setMethod("next-day")}
              />
              <span>
                <strong>Mulai menghitung dari hari berikutnya</strong>
                <small>
                  Gunakan pilihan ini hanya jika keluarga atau tradisi setempat
                  memakai cara hitung yang berbeda.
                </small>
              </span>
            </label>
          </fieldset>

          <div className="form-actions">
            <button
              className="button button-primary"
              type="submit"
              disabled={isCalculating}
              aria-pressed={isCalculating}
            >
              <CalculatorIcon />
              {isCalculating ? "Menghitung…" : "Hitung Jadwal Selamatan"}
            </button>
            {hasInput && (
              <button className="button button-secondary" type="button" onClick={reset}>
                <RefreshIcon />
                Atur Ulang
              </button>
            )}
          </div>
        </form>

        <p className="privacy-note">
          <CheckIcon />
          Perhitungan dilakukan langsung di perangkat Anda. Tanggal dan nama yang
          dimasukkan tidak disimpan.
        </p>
      </section>

      {calculation && (
        <section
          className="results-card"
          aria-labelledby="results-title"
          aria-live="polite"
        >
          <div className="print-header">
            <Logo />
          </div>
          <div className="result-heading-row">
            <div>
              <h2 id="results-title" ref={resultHeadingRef} tabIndex={-1}>
                Jadwal Selamatan
              </h2>
              <p className="result-status">
                <CheckIcon /> Perhitungan selesai
              </p>
            </div>
            <span className="method-pill">{getMethodLabel(calculation.method)}</span>
          </div>

          <p className="result-summary">
            {calculation.name
              ? `Berikut jadwal selamatan untuk ${calculation.name}, berdasarkan tanggal wafat ${formatDate(calculation.deathDate)} dan metode ${getMethodLabel(calculation.method).toLowerCase()}.`
              : `Berdasarkan tanggal wafat ${formatDate(calculation.deathDate)}, berikut perkiraan jadwal selamatan yang dihitung dengan metode ${getMethodLabel(calculation.method).toLowerCase()}.`}
          </p>

          <div className="table-wrap">
            <table className="result-table">
              <caption className="sr-only">
                Hasil perhitungan tanggal selamatan
              </caption>
              <thead>
                <tr>
                  <th scope="col">Tahapan</th>
                  <th scope="col">Hari ke-</th>
                  <th scope="col">Tanggal</th>
                  <th scope="col">Hari dan Pasaran</th>
                  <th scope="col">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {calculation.results.map((result) => (
                  <tr key={result.id} className={result.approximate ? "approximate" : ""}>
                    <th scope="row" data-label="Tahapan">
                      {result.name}
                    </th>
                    <td data-label="Hari ke-">{result.dayLabel}</td>
                    <td data-label="Tanggal">{result.longDate}</td>
                    <td data-label="Hari dan Pasaran">
                      <strong>{result.weekday} {result.pasaran}</strong>
                    </td>
                    <td data-label="Keterangan">{result.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="pendhak-note">
            <strong>Catatan Pendhak:</strong> Tanggal Pendhak mengikuti tahun Jawa
            dan dapat berbeda karena panjang tahun serta kebiasaan setempat. Cocokkan
            kembali dengan kalender Jawa atau sesepuh keluarga.
          </p>

          <div className="result-actions">
            <button className="button button-secondary" type="button" onClick={copyResults}>
              <CopyIcon /> Salin Hasil
            </button>
            <a
              className="button button-secondary whatsapp"
              href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> Bagikan ke WhatsApp
            </a>
            <button
              className="button button-secondary"
              type="button"
              onClick={() => window.print()}
            >
              <PrintIcon /> Cetak Hasil
            </button>
            <button className="button button-quiet" type="button" onClick={reset}>
              <RefreshIcon /> Hitung Tanggal Lain
            </button>
          </div>
          <p className="copy-feedback" aria-live="polite">
            {copyMessage}
          </p>
        </section>
      )}
    </>
  );
}
