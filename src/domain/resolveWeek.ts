import { EMPLEADOS } from "../data/empleados";
import { TURNOS } from "../data/turnos";
import type { Day as DiaSemana } from "../data/types";
import { EDIFICIOS } from "../data/edificios";
import { resolveTurnoActual } from "./rotation";
import { startOfWeek } from "./calendar";
import { resolveDaySchedule } from "./schedule";
import { resolveBuilding } from "./building";

const DAYS: DiaSemana[] = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

export function resolveWeek(targetDate: Date) {
  const weekStart = startOfWeek(targetDate);

  return EMPLEADOS.map((emp) => {
    // Turno correcto según fecha base
    const turno = resolveTurnoActual(emp.turnoInicial, weekStart);

    const shift = TURNOS[turno];
    if (!shift) {
      throw new Error(`Turno ${turno} no definido en TURNOS`);
    }

// Resolver días de la semana
    const dias: Record<DiaSemana, any> = {} as any;

    for (const day of DAYS) {
      const daySchedule = resolveDaySchedule(shift, day);
      const edificio = resolveBuilding(turno, day, EDIFICIOS);
      
      dias[day] = {
        ...daySchedule,
        edificio
      };
    }

    return {
      empleado: emp.nombre,
      turno,
      dias,
      weekStart,
    };
  });
}