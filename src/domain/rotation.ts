// function getWeekDiff(baseDate, targetDate): number
// return floor((targetDate - baseDate) / 7 días)

// function getTurnoActual(turnoInicial, weekDiff): number
// return ((turnoInicial - 1 + weekDiff) % 9) + 1

export function resolveTurnoActual(
  turnoInicial: number,
  weekDiff: number
): number {
  return ((turnoInicial - 1 + weekDiff) % 9) + 1;
}
