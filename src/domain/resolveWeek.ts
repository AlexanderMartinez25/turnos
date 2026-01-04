import { EMPLEADOS } from "../data/empleados";
import { TURNOS } from "../data/turnos";
import { EDIFICIOS } from "../data/edificios";
import type { Day } from "../data/types";

import { startOfWeek, weekDiff } from "./calendar";
import { resolveTurnoActual } from "./rotation";
import { resolveDaySchedule } from "./schedule";
import { resolveBuilding } from "./building";

const DAYS: Day[] = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

export function resolveWeek(date: Date) {
  const diff = weekDiff(date);
  const weekStart = startOfWeek(date);

  return EMPLEADOS.map((emp) => {
    const turno = resolveTurnoActual(emp.turnoInicial, diff);
    const shift = TURNOS.find((t) => t.id === turno)!;

    const dias = Object.fromEntries(
      DAYS.map((day) => {
        const schedule = resolveDaySchedule(shift, day);
        const edificio = schedule.trabaja
          ? resolveBuilding(turno, day, EDIFICIOS)
          : null;

        return [day, { ...schedule, edificio }];
      })
    );

    return {
      empleado: emp.nombre,
      turno,
      semana: weekStart,
      dias,
    };
  });
}
