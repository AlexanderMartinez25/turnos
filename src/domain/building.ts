import type { BuildingAssignment, Day } from "../data/types";

export function resolveBuilding(
  turnoId: number,
  day: Day,
  buildings: BuildingAssignment[]
): string | null {
  if (day === "sábado" || day === "domingo") return null;

  const entry = buildings.find((b) => b.turnoId === turnoId);
  return entry?.asignacion[day] ?? null;
}
