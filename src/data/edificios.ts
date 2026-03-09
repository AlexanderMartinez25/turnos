import type { BuildingAssignment } from "./types";

export const EDIFICIOS: BuildingAssignment[] = [
  {
    turnoId: 1,
    asignacion: { lunes: "C2", jueves: "C1", viernes: "C5" },
  },
  {
    turnoId: 2,
    asignacion: { martes: "C2", miercoles: "C5", jueves: "CA", viernes: "C1" },
  },
  {
    turnoId: 3,
    asignacion: {
      lunes: "C7",
      martes: "C1",
      miercoles: "C4-7-9",
      jueves: "C2",
      viernes: "C6",
    },
  },
  {
    turnoId: 4,
    asignacion: {
      lunes: "Apoyo",
      martes: "Apoyo",
      miercoles: "Apoyo",
      jueves: "Apoyo",
      viernes: "Apoyo",
    },
  },
  {
    turnoId: 5,
    asignacion: { lunes: "C1", martes: "C5", miercoles: "C6" },
  },
  {
    turnoId: 6,
    asignacion: {
      martes: "CA",
      miercoles: "C4-9",
      jueves: "C6",
      viernes: "C2",
    },
  },
  {
    turnoId: 7,
    asignacion: {
      lunes: "C5",
      martes: "C6",
      miercoles: "C1",
      jueves: "C4-7-9",
      viernes: "CA",
    },
  },
  {
    turnoId: 8,
    asignacion: {
      lunes: "C6",
      martes: "CA",
      miercoles: "CA",
      jueves: "C5",
      viernes: "C4-7-9",
    },
  },
  {
    turnoId: 9,
    asignacion: {
      lunes: "C4–C9",
      martes: "C7",
      miercoles: "CA",
      jueves: "Apoyo",
      viernes: "Apoyo",
    },
  },
];
