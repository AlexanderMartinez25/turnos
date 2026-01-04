export function isWorkingNow(entrada?: string, salida?: string): boolean {
  if (!entrada || !salida) return false;

  const now = new Date();

  const [inH, inM] = entrada.split(":").map(Number);
  const [outH, outM] = salida.split(":").map(Number);

  const start = new Date(now);
  start.setHours(inH, inM, 0, 0);

  const end = new Date(now);
  end.setHours(outH, outM, 0, 0);

  return now >= start && now <= end;
}
