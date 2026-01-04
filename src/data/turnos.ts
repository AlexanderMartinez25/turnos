import type { Shift } from "./types";

export const TURNOS: Shift[] = [
  {
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
  {
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
  {
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
  {
    id: 4,
    diasLibres: ["sabado", "domingo"],
    horarios: {
      lunes: { entrada: "10:30", salida: "20:30" },
      martes: { entrada: "10:30", salida: "20:30" },
      miercoles: { entrada: "10:30", salida: "20:30" },
      jueves: { entrada: "10:30", salida: "20:30" },
      viernes: { entrada: "13:00", salida: "22:00" },
    },
  },
  {
    id: 5,
    diasLibres: ["martes", "miercoles"],
    horarios: {
      lunes: { entrada: "08:00", salida: "18:00" },
      jueves: { entrada: "08:00", salida: "18:00" },
      viernes: { entrada: "08:00", salida: "18:00" },
      sabado: { entrada: "08:00", salida: "18:00" },
      domingo: { entrada: "08:00", salida: "18:00" },
    },
  },
  {
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
  {
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
  {
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
  {
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
];
