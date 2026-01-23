export function getLastSegment(path: string): string {
  return path.split("/").pop() ?? ""
}
