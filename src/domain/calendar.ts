/**
 * Retorna el lunes de la semana correspondiente a la fecha dada.
 * La semana siempre comienza en lunes y termina en domingo.
 */
export function startOfWeek(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay(); // 0 = domingo, 1 = lunes, ..., 6 = sábado

  // Si es domingo (0), retrocede 6 días, si no, retrocede hasta lunes
  const diff = day === 0 ? -6 : 1 - day;

  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);

  return d;
}

/**
 * Calcula la diferencia en semanas completas entre dos fechas,
 * usando siempre el lunes como inicio de semana.
 *
 * Ejemplo:
 * - misma semana → 0
 * - semana siguiente → 1
 * - semana anterior → -1
 */
export function weekDiff(from: Date, to: Date): number {
  const fromWeekStart = startOfWeek(from).getTime();
  const toWeekStart = startOfWeek(to).getTime();

  const MS_IN_WEEK = 1000 * 60 * 60 * 24 * 7;

  return Math.floor((toWeekStart - fromWeekStart) / MS_IN_WEEK);
}
