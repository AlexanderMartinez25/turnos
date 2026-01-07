import { BASE_DATE } from "./constants";
import { weekDiff } from "./calendar";

export function resolveTurnoActual(
  turnoInicial: number,
  targetDate: Date
) {
  const diff = weekDiff(BASE_DATE, targetDate);
  return ((turnoInicial - 1 + diff) % 9) + 1;
}
