export type Day =
  | "lunes"
  | "martes"
  | "miercoles"
  | "jueves"
  | "viernes"
  | "sabado"
  | "domingo";

export interface Employee {
  id: number;
  nombre: string;
  turnoInicial: number;
}

export interface Schedule {
  entrada: string;
  salida: string;
}

export interface Shift {
  id: number;
  diasLibres: Day[];
  horarios?: Partial<Record<Day, Schedule>>;
}

export interface BuildingAssignment {
  turnoId: number;
  asignacion: Partial<Record<Day, string>>;
}
