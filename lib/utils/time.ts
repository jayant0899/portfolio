/**
 * Calculates seconds elapsed since a given timestamp
 */
export function calculateElapsedSeconds(startTimeMs: number): number {
  return Math.floor((Date.now() - startTimeMs) / 1000);
}

/**
 * Pure JS formatter for nerdy uptime strings (e.g., "01h 45m 12s")
 */
export function formatUptime(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  const parts = [];
  if (h > 0) parts.push(`${h.toString().padStart(2, "0")}h`);
  if (m > 0 || h > 0) parts.push(`${m.toString().padStart(2, "0")}m`);
  parts.push(`${s.toString().padStart(2, "0")}s`);

  return parts.join(" ");
}

/**
 * Pure JS 24-hour clock formatter
 */
export function formatLocalTime(date: Date): string {
  return date.toLocaleTimeString([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}