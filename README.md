# Turnos App

Aplicación web para la **visualización de turnos rotativos** de empleados, diseñada con foco en **claridad**, **mobile-first** y **arquitectura escalable**.

La aplicación es **100 % visual**, sin autenticación ni edición desde la UI. Toda la información se gestiona desde código.

---

## 🚀 Demo local

```bash
npm install
npm run dev
```

Abrir:
- `http://localhost:4321/` → Vista semanal
- `http://localhost:4321/hoy` → Vista operativa diaria
- `http://localhost:4321/dia` → Agenda por día
- `http://localhost:4321/dashboard` → Modo TV / Monitor

---

## 🧱 Stack tecnológico

- **Framework:** Astro
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Arquitectura:** Dominio desacoplado del UI
- **Estado:** Derivado de fecha y URL (sin estado global)

---

## 🎯 Funcionalidades

- Turnos rotativos automáticos (semanales)
- Vista semanal por empleado
- Vista “Hoy” (solo quienes trabajan hoy)
- Vista por día (agenda diaria)
- Modo Dashboard / TV
- Indicadores visuales:
  - Día actual
  - Días libres
  - Entrada tardía (10:30)
  - Salida anticipada (17:00)
  - Trabajando ahora
  - Tiempo restante del turno

---

## 📁 Estructura del proyecto

```
src/
├── data/            # Datos estáticos (empleados, turnos, edificios)
├── domain/          # Lógica de negocio pura
├── components/      # Componentes UI
├── pages/           # Rutas Astro
├── layouts/         # Layouts base
├── utils/           # Utilidades
└── styles/          # Tailwind CSS v4
```

---

## 🧠 Arquitectura

- **Dominio**: contiene toda la lógica de negocio (rotación, horarios, reglas)
- **UI**: componentes presentacionales, sin lógica
- **Datos**: definidos de forma estática y versionable
- **Use case central**: `resolveWeek(date)`

La UI **solo consume datos ya resueltos**.

---

## 🗓️ Lógica de turnos

- 9 turnos rotativos
- Cada turno dura 1 semana
- Rotación automática y continua
- Semana base definida por fecha inicial
- Viernes siempre sale a las **17:00** (regla global)

---

## 🎨 Estilos (Tailwind v4)

Los colores y tokens se definen mediante `@theme`:

```css
@theme {
  --color-base: #0f172a;
  --color-surface: #020617;
  --color-accent: #22d3ee;
}
```

No se utiliza `extend.colors` (Tailwind v3).

---

## 🧪 Scripts disponibles

```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm run preview  # Preview build
```

---

## 📈 Escalabilidad futura

El proyecto está preparado para:
- Backend / API
- Autenticación
- Edición de turnos
- Feriados
- Múltiples sedes
- Exportación (PDF / calendario)

---

## 📌 Reglas de mantenimiento

- No agregar lógica de negocio en componentes
- Toda regla nueva va en `/domain`
- La UI no debe recalcular datos
- Mantener el dominio framework-agnóstico

---

## 👤 Autor

Proyecto diseñado con foco en **claridad, mantenibilidad y uso real en producción**.

---

> Este README resume la documentación técnica completa del proyecto.

