// This executes once when the Next.js server boots up
const SERVER_BOOT_TIME = Date.now();

export function getServerBootTime() {
  return SERVER_BOOT_TIME;
}