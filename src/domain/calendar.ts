import { BASE_DATE } from "../data/config";

export function startOfWeek(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay() === 0 ? 7 : d.getDay(); // domingo = 7
  d.setDate(d.getDate() - (day - 1));
  d.setHours(0, 0, 0, 0);
  return d;
}

export function weekDiff(targetDate: Date): number {
  const base = startOfWeek(BASE_DATE);
  const target = startOfWeek(targetDate);
  const diffMs = target.getTime() - base.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7));
}
