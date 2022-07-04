import { daffArrayToDict } from '../utils/public_api';
import { DaffIdentifiable } from './identifiable.interface';

/**
 * Transforms an array of {@link DaffIdentifiable} objects to a dictionary of those objects keyed by ID.
 */
export const daffIdentifiableArrayToDict = <T extends DaffIdentifiable = DaffIdentifiable>(ary: T[]): Record<T['id'], T> =>
  daffArrayToDict(ary, ({ id }) => id);
