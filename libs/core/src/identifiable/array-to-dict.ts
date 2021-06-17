import { daffArrayToDict } from '../utils/array-to-dict';
import { DaffIdentifiable } from './identifiable.interface';

export const daffIdentifiableArrayToDict =
  <T extends DaffIdentifiable = DaffIdentifiable>(items: T[]) =>
    daffArrayToDict(items, e => e.id);
