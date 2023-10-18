import { DaffIdentifiable } from './identifiable.interface';
import { daffArrayToDict } from '../utils/public_api';

/**
 * Transforms an array of {@link DaffIdentifiable} objects to a dictionary of those objects keyed by ID.
 */
export const daffIdentifiableArrayToDict = <T extends DaffIdentifiable = DaffIdentifiable>(ary: T[]): Record<T['id'], T> =>
  daffArrayToDict(ary, ({ id }) => id);
