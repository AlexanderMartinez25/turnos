import type { TurnoDef } from "./types";

/**
 * Diccionario de turnos por ID
 * IMPORTANTE:
 * - NO usar arrays
 * - Acceso siempre por TURNOS[id]
 */
export const TURNOS: Record<number, TurnoDef> = {
  1: {
    id: 1,
    diasLibres: ["martes", "miercoles"],
    horarios: {
      lunes: { entrada: "08:00", salida: "18:00" },
      jueves: { entrada: "08:00", salida: "18:00" },
      viernes: { entrada: "08:00", salida: "18:00" },
      sabado: { entrada: "10:30", salida: "20:30" },
      domingo: { entrada: "10:30", salida: "20:30" },
    },
  },

  2: {
    id: 2,
    diasLibres: ["lunes", "domingo"],
    horarios: {
      martes: { entrada: "08:00", salida: "18:00" },
      miercoles: { entrada: "08:00", salida: "18:00" },
      jueves: { entrada: "08:00", salida: "18:00" },
      viernes: { entrada: "08:00", salida: "18:00" },
      sabado: { entrada: "08:00", salida: "18:00" },
    },
  },

  3: {
    id: 3,
    diasLibres: ["sabado", "domingo"],
    horarios: {
      lunes: { entrada: "08:00", salida: "18:00" },
      martes: { entrada: "08:00", salida: "18:00" },
      miercoles: { entrada: "08:00", salida: "18:00" },
      jueves: { entrada: "08:00", salida: "18:00" },
      viernes: { entrada: "08:00", salida: "18:00" },
    },
  },

  4: {
    id: 4,
    diasLibres: [],
    horarios: {
      lunes: { entrada: "10:30", salida: "20:30" },
      martes: { entrada: "10:30", salida: "20:30" },
      miercoles: { entrada: "10:30", salida: "20:30" },
      jueves: { entrada: "10:30", salida: "20:30" },
      viernes: { entrada: "13:00", salida: "22:00" },
    },
  },

  5: {
    id: 5,
    diasLibres: ["jueves", "viernes"],
    horarios: {
      lunes: { entrada: "08:00", salida: "18:00" },
      martes: { entrada: "08:00", salida: "18:00" },
      miercoles: { entrada: "08:00", salida: "17:00" }, // salida anticipada
      sabado: { entrada: "08:00", salida: "18:00" },
      domingo: { entrada: "08:00", salida: "18:00" },
    },
  },

  6: {
    id: 6,
    diasLibres: ["lunes", "sabado"],
    horarios: {
      martes: { entrada: "08:00", salida: "18:00" },
      miercoles: { entrada: "08:00", salida: "18:00" },
      jueves: { entrada: "08:00", salida: "18:00" },
      viernes: { entrada: "08:00", salida: "18:00" },
      domingo: { entrada: "08:00", salida: "18:00" },
    },
  },

  7: {
    id: 7,
    diasLibres: ["sabado", "domingo"],
    horarios: {
      lunes: { entrada: "08:00", salida: "18:00" },
      martes: { entrada: "08:00", salida: "18:00" },
      miercoles: { entrada: "08:00", salida: "18:00" },
      jueves: { entrada: "08:00", salida: "18:00" },
      viernes: { entrada: "08:00", salida: "18:00" },
    },
  },

  8: {
    id: 8,
    diasLibres: ["sabado", "domingo"],
    horarios: {
      lunes: { entrada: "08:00", salida: "18:00" },
      martes: { entrada: "08:00", salida: "18:00" },
      miercoles: { entrada: "08:00", salida: "18:00" },
      jueves: { entrada: "08:00", salida: "18:00" },
      viernes: { entrada: "08:00", salida: "18:00" },
    },
  },

  9: {
    id: 9,
    diasLibres: ["sabado", "domingo"],
    horarios: {
      lunes: { entrada: "08:00", salida: "18:00" },
      martes: { entrada: "08:00", salida: "18:00" },
      miercoles: { entrada: "08:00", salida: "18:00" },
      jueves: { entrada: "10:30", salida: "20:30" },
      viernes: { entrada: "13:00", salida: "22:00" },
    },
  },
};