/** Insert a `-small` suffix before the file extension. */
export function toSmallPath(path: string): string {
  const dot = path.lastIndexOf(".");
  if (dot === -1) return `${path}-small`;
  return `${path.slice(0, dot)}-small${path.slice(dot)}`;
}
