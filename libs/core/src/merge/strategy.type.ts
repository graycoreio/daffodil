import { DaffMerger } from './mergers/public_api';

/**
 * A strategy for merging objects of the same structure.
 * Each key can contain a merger function for handling collisions.
 */
export type DaffMergeStrategy<T extends Record<string, unknown> = Record<string, unknown>> = {
  [k in keyof T]?: DaffMerger<T[k]>
};
