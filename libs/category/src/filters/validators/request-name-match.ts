import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
  DaffToggleCategoryFilterRequest,
} from '../../models/public_api';
import { DaffCategoryFilterRequestNameMismatch } from '../errors/request-name-mismatch.error';

/**
 * Ensures that the names of the filter and the filter request match.
 *
 * @throws {@link DaffCategoryFilterRequestNameMismatch} if the names do not match.
 */
export const daffCategoryValidateFilterRequestNameMatch = (
  request: DaffCategoryFilterRequest | DaffToggleCategoryFilterRequest,
  filter: DaffCategoryFilter,
): void => {
  if (request.name !== filter.name) {
    throw new DaffCategoryFilterRequestNameMismatch('Filter names aren\'t equal');
  }
};
