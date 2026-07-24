import assert from "node:assert/strict";
import test from "node:test";

import {
  addCalendarDays,
  calculateSchedule,
  getPasaran,
  getWeekday,
  parseDateInput,
  toIsoDate,
} from "./calendar.ts";

const reference = parseDateInput("1945-08-17");
assert.ok(reference);

test("validates and parses date-only input", () => {
  assert.deepEqual(parseDateInput("2024-02-29"), {
    year: 2024,
    month: 2,
    day: 29,
  });
  assert.equal(parseDateInput("2023-02-29"), null);
  assert.equal(parseDateInput(""), null);
  assert.equal(parseDateInput("2024-13-01"), null);
});

test("handles leap years and calendar boundaries", () => {
  assert.equal(
    toIsoDate(addCalendarDays({ year: 2023, month: 2, day: 28 }, 1)),
    "2023-03-01",
  );
  assert.equal(
    toIsoDate(addCalendarDays({ year: 2024, month: 2, day: 28 }, 1)),
    "2024-02-29",
  );
  assert.equal(
    toIsoDate(addCalendarDays({ year: 2024, month: 2, day: 29 }, 1)),
    "2024-03-01",
  );
  assert.equal(
    toIsoDate(addCalendarDays({ year: 2024, month: 12, day: 31 }, 1)),
    "2025-01-01",
  );
});

test("matches the supplied 17 August 1945 fixture", () => {
  const results = calculateSchedule(reference);
  const byId = Object.fromEntries(results.map((result) => [result.id, result]));

  assert.equal(getWeekday(reference), "Jumat");
  assert.equal(getPasaran(reference), "Legi");
  const actual = [
    "geblag",
    "nelung-dina",
    "mitung-dina",
    "matangpuluh",
    "nyatus",
    "nyewu",
  ].map((id) => [
    id,
    toIsoDate(byId[id].date),
    byId[id].weekday,
    byId[id].pasaran,
  ]);

  assert.deepEqual(actual, [
    ["geblag", "1945-08-17", "Jumat", "Legi"],
    ["nelung-dina", "1945-08-19", "Minggu", "Pon"],
    ["mitung-dina", "1945-08-23", "Kamis", "Pahing"],
    ["matangpuluh", "1945-09-25", "Selasa", "Kliwon"],
    ["nyatus", "1945-11-24", "Sabtu", "Kliwon"],
    ["nyewu", "1948-05-12", "Rabu", "Kliwon"],
  ]);
});

test("keeps inclusive offsets and long-event Pasaran consistent", () => {
  const results = calculateSchedule({ year: 2026, month: 1, day: 31 });
  const byId = Object.fromEntries(results.map((result) => [result.id, result]));

  assert.equal(toIsoDate(byId["nelung-dina"].date), "2026-02-02");
  assert.equal(toIsoDate(byId["mitung-dina"].date), "2026-02-06");
  assert.equal(toIsoDate(byId.matangpuluh.date), "2026-03-11");
  assert.equal(toIsoDate(byId.nyatus.date), "2026-05-10");
  assert.equal(toIsoDate(byId.nyewu.date), "2028-10-26");
  assert.equal(byId.matangpuluh.pasaran, byId.nyatus.pasaran);
  assert.equal(byId.nyatus.pasaran, byId.nyewu.pasaran);
});

test("supports dates before the reference and a 35-day weton repetition", () => {
  const before = { year: 1900, month: 1, day: 1 };
  const repeated = addCalendarDays(before, 35);

  assert.equal(getPasaran(before), getPasaran(repeated));
  assert.equal(getWeekday(before), getWeekday(repeated));
});

test("calculates labelled Pendhak estimates", () => {
  const results = calculateSchedule({ year: 2025, month: 6, day: 10 });
  const pisan = results.find((result) => result.id === "pendhak-pisan");
  const pindho = results.find((result) => result.id === "pendhak-pindho");

  assert.ok(pisan?.approximate);
  assert.ok(pindho?.approximate);
  assert.equal(toIsoDate(pisan.date), "2026-05-30");
  assert.equal(toIsoDate(pindho.date), "2027-05-19");
});

test("applies the alternate counting method consistently", () => {
  const inclusive = calculateSchedule(reference, "inclusive");
  const nextDay = calculateSchedule(reference, "next-day");

  for (const result of inclusive.filter((item) => !item.approximate)) {
    const alternate = nextDay.find((item) => item.id === result.id);
    assert.ok(alternate);
    assert.equal(
      toIsoDate(alternate.date),
      toIsoDate(addCalendarDays(result.date, 1)),
    );
  }
});
