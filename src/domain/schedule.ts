import type { TurnoDef } from "../data/types";

export type DayResult = {
  trabaja: boolean;
  entrada?: string;
  salida?: string;
  edificio?: string | null;
  flags: string[];
};

/**
 * Resuelve el estado de UN día para un turno específico
 */
export function resolveDaySchedule(
  shift: TurnoDef,
  day: DiaSemana
): DayResult {
  // Día libre
  if (shift.diasLibres.includes(day)) {
    return {
      trabaja: false,
      flags: [],
      edificio: null,
    };
  }

  const horario = shift.horarios[day];

  if (!horario) {
    return {
      trabaja: false,
      flags: [],
      edificio: null,
    };
  }

  const flags: string[] = [];

  if (horario.entrada === "10:30") {
    flags.push("LATE_ENTRY");
  }

  if (horario.salida === "17:00") {
    flags.push("EARLY_EXIT");
  }

  return {
    trabaja: true,
    entrada: horario.entrada,
    salida: horario.salida,
    flags,
    edificio: null, // se asigna luego
  };
}
