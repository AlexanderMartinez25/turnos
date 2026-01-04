import { DEFAULT_SCHEDULE } from "../data/config";
import type { Shift, Day } from "../data/types";

interface DayResult {
  trabaja: boolean;
  entrada?: string;
  salida?: string;
  flags: Array<"LATE_ENTRY" | "EARLY_EXIT">;
}

export function resolveDaySchedule(shift: Shift, day: Day): DayResult {
  // 1. Día libre
  if (shift.diasLibres.includes(day)) {
    return { trabaja: false, flags: [] };
  }

  // 2. Horario base o específico
  const base = shift.horarios?.[day] ?? DEFAULT_SCHEDULE;
  let entrada = base.entrada;
  let salida = base.salida;

  const flags: DayResult["flags"] = [];

  // 3. Flags visuales
  if (entrada === "10:30") flags.push("LATE_ENTRY");

  // 4. Regla global: viernes salida 17:00
  if (day === "viernes") {
    salida = "17:00";
    flags.push("EARLY_EXIT");
  }

  return {
    trabaja: true,
    entrada,
    salida,
    flags,
  };
}
