import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
  DaffToggleCategoryFilterRequest,
} from '../../models/public_api';
import { DaffCategoryFilterNotFound } from '../errors/request-not-found.error';

/**
 * Ensures that the names of the filter and the filter request match.
 *
 * @throws {@link DaffCategoryFilterNotFound} if the names do not match.
 */
export const daffCategoryValidateFilterRequestNameMatch = (
  request: DaffCategoryFilterRequest | DaffToggleCategoryFilterRequest,
  filter: DaffCategoryFilter,
): void => {
  if (!filter) {
    throw new DaffCategoryFilterNotFound('Filter does not exist');
  }
  if (request.name !== filter.name) {
    throw new DaffCategoryFilterNotFound('Filter name does not match request name');
  }
};
