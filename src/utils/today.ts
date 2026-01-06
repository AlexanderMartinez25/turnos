/**
 * Retorna el día actual SIN acentos
 * Usado para:
 * - URLs
 * - estado UI
 * - comparaciones seguras
 */
export function getTodayDay():
  | "lunes"
  | "martes"
  | "miercoles"
  | "jueves"
  | "viernes"
  | "sabado"
  | "domingo" {
  const days = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ] as const;

  return days[new Date().getDay()];
}
