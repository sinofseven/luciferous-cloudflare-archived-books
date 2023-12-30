import { encodeUrlSafeBase64 } from "./base64.ts";

export function encodeFilename(filename: string): string {
  const base = encodeUrlSafeBase64(filename);
  const part = filename.split(".");
  if (part.length === 1) {
    return base;
  }
  return `${base}.${part[part.length - 1]}`;
}
