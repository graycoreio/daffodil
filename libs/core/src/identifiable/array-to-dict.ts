import { Dict } from '../types/dict.type';
import { daffArrayToDict } from '../utils/array-to-dict';
import { DaffIdentifiable } from './identifiable.interface';

export const daffIdentifiableArrayToDict =
  <T extends DaffIdentifiable = DaffIdentifiable>(items: T[]): Dict<T> =>
    daffArrayToDict(items, e => e.id);
