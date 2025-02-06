export function htmlEncodeBrackets(str: string): string {
  return str.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

export function htmlDecodeBrackets(str: string): string {
  return str.replaceAll('&lt;', '<').replaceAll('&gt;', '>');
}
