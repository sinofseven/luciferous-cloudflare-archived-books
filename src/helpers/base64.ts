export function encodeUrlSafeBase64(value: string): string {
  const binary = encodeText(value);
  const decoded = decodeBinaryString(binary);
  const base64 = btoa(decoded);
  return base64.replace("+", "-").replace("=", "_").replace("/", "~");
}

function encodeText(text: string): Uint8Array {
  const encoder = new TextEncoder();
  return encoder.encode(text);
}

function decodeBinaryString(binary: Uint8Array): string {
  return binary.reduce((text, uint8) => text + String.fromCharCode(uint8), '');
}
