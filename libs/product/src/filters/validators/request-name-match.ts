import {
  DaffProductFilterRequest,
  DaffProductFilter,
  DaffProductFilterToggleRequest,
} from '../../models/public_api';
import { DaffProductFilterNotFound } from '../errors/filter-not-found.error';
import { DaffProductFilterRequestNameMismatch } from '../errors/request-name-mismatch.error';

/**
 * Ensures that the names of the filter and the filter request match.
 *
 * @throws {@link DaffProductFilterNotFound} if the names do not match.
 */
export const daffProductValidateFilterRequestNameMatch = (
  request: DaffProductFilterRequest | DaffProductFilterToggleRequest,
  filter: DaffProductFilter,
): void => {
  if (!filter) {
    throw new DaffProductFilterNotFound('Filter does not exist');
  }
  if (request.name !== filter.name) {
    throw new DaffProductFilterRequestNameMismatch('Filter name does not match request name');
  }
};
