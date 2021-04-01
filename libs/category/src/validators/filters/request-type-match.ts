import { DaffCategoryFilterRequestTypeMismatch } from '../../errors/public_api';
import {
  DaffCategoryFilterRequest,
  DaffCategoryFilter,
  DaffToggleCategoryFilterRequest,
} from '../../models/public_api';

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
    throw new DaffCategoryFilterRequestTypeMismatch('Filter types aren\'t equal');
  }
};
