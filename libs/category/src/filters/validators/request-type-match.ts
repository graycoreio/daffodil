import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
  DaffToggleCategoryFilterRequest,
} from '../../models/public_api';
import { DaffCategoryFilterRequestTypeMismatch } from '../errors/request-type-mismatch.error';

/**
 * Ensures that the types of the filter and the filter request match.
 *
 * @throws {@link DaffCategoryFilterRequestTypeMismatch} if the types do not match.
 */
export const daffCategoryValidateFilterRequestTypeMatch = (
  request: DaffCategoryFilterRequest | DaffToggleCategoryFilterRequest,
  filter: DaffCategoryFilter,
): void => {
  if (request.type !== filter.type) {
    throw new DaffCategoryFilterRequestTypeMismatch('Filter types don\'t match');
  }
};
