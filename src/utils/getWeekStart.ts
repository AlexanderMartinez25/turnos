export function getWeekStart(date: Date) {
  const d = new Date(date);
  const day = d.getDay(); // 0 = domingo, 1 = lunes

  // convertir domingo (0) a 7
  const diff = day === 0 ? -6 : 1 - day;

  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);

  return d;
}
