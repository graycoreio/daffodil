import {
  DaffFilter,
  DaffFilters,
} from '../../filterable/public_api';
import { daffArrayToDict } from '../../utils/public_api';

/**
 * Converts a list of filters into a dictionary of filters keyed by filter name.
 */
export const daffFilterArrayToDict = <T extends DaffFilter = DaffFilter>(filters: Array<T>): DaffFilters<T> =>
  daffArrayToDict<T, T['name']>(filters, filter => filter.name);
