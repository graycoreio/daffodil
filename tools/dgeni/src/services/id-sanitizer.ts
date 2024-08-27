/**
 * Removes segments from IDs.
 */
export class IdSanitizer {
  segmentsToRemove: Array<string | RegExp> = [];

  sanitize(id: string): string {
    return this.segmentsToRemove.reduce<string>((acc, test) => {
      try {
        return acc.replaceAll(test, '');
      } catch {
        return acc.replace(test, '');
      }
    }, id);
  }
}
