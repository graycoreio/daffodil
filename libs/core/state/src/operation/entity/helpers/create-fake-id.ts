/**
 * Generate a fake ID for use with placeholder entities.
 *
 * @param key An optional key that can augment the randomly generated ID.
 * @returns A string cont
 */
export function daffOperationEntityCreateFakeId(key: string = ''): string {
  return `ε-${Date.now()}-${key}`;
}
