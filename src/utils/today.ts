import type { Day } from "../data/types";

export function getTodayDay(): Day {
  const map: Day[] = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];
  return map[new Date().getDay()];
}
