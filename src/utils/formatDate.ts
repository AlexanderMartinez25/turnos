const DAYS_LABEL: Record<string, string> = {
  lunes: 'Lunes',
  martes: 'Martes',
  miercoles: 'Miércoles',
  jueves: 'Jueves',
  viernes: 'Viernes',
  sabado: 'Sábado',
  domingo: 'Domingo',
};

const MONTHS = [
  'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic',
];

export function formatDayLabel(
  date: Date,
  dayKey: keyof typeof DAYS_LABEL
) {
  const day = date.getDate();
  const month = MONTHS[date.getMonth()];
  return `${DAYS_LABEL[dayKey]} · ${day} ${month}`;
}
