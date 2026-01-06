import type { BuildingAssignment } from "./types";

export const EDIFICIOS: BuildingAssignment[] = [
  {
    turnoId: 1,
    asignacion: { lunes: "C2", jueves: "C6", viernes: "C1" },
  },
  {
    turnoId: 2,
    asignacion: { martes: "C2", miercoles: "C6", jueves: "C1", viernes: "C5" },
  },
  {
    turnoId: 3,
    asignacion: {
      lunes: "C7",
      martes: "C1",
      miercoles: "C4–C9",
      jueves: "C5",
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
    asignacion: { lunes: "C1", martes: "C5", miercoles: "C2" },
  },
  {
    turnoId: 6,
    asignacion: {
      martes: "C4–C9",
      miercoles: "C5",
      jueves: "C7",
      viernes: "C2",
    },
  },
  {
    turnoId: 7,
    asignacion: {
      lunes: "C5",
      martes: "C6",
      miercoles: "C7",
      jueves: "C4–C9",
      viernes: "C7",
    },
  },
  {
    turnoId: 8,
    asignacion: {
      lunes: "C6",
      martes: "Apoyo",
      miercoles: "C1",
      jueves: "C2",
      viernes: "C4–C9",
    },
  },
  {
    turnoId: 9,
    asignacion: {
      lunes: "C4–C9",
      martes: "C7",
      miercoles: "Apoyo",
      jueves: "Apoyo",
      viernes: "Apoyo",
    },
  },
];
