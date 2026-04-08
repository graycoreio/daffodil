import { DaffCreateable } from './type';

/**
 * Finds and returns the most recently created entity.
 */
export function daffCreateableMostRecent<T extends DaffCreateable = DaffCreateable>(createables: T[]): T | null | undefined {
  return createables.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];
}
