import {
  DaffFilterRequest,
  DaffFilter,
  DaffFilterToggleRequest,
} from '../../filterable/public_api';
import { DaffFilterNotFound } from '../errors/filter-not-found.error';
import { DaffFilterRequestNameMismatch } from '../errors/request-name-mismatch.error';

/**
 * Ensures that the names of the filter and the filter request match.
 *
 * @throws {@link DaffFilterNotFound} if the names do not match.
 */
export const daffFilterValidateRequestNameMatch = (
  request: DaffFilterRequest | DaffFilterToggleRequest,
  filter: DaffFilter,
): void => {
  if (!filter) {
    throw new DaffFilterNotFound('Filter does not exist');
  }
  if (request.name !== filter.name) {
    throw new DaffFilterRequestNameMismatch('Filter name does not match request name');
  }
};
