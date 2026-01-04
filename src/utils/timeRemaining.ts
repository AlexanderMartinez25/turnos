export function getTimeRemaining(
  entrada?: string,
  salida?: string
): { hours: number; minutes: number } | null {
  if (!entrada || !salida) return null;

  const now = new Date();

  const [outH, outM] = salida.split(":").map(Number);
  const end = new Date(now);
  end.setHours(outH, outM, 0, 0);

  const diffMs = end.getTime() - now.getTime();
  if (diffMs <= 0) return null;

  const totalMinutes = Math.ceil(diffMs / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return { hours, minutes };
}
