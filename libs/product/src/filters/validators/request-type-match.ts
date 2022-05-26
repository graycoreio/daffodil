import {
  DaffProductFilterRequest,
  DaffProductFilter,
  DaffProductFilterToggleRequest,
} from '../../models/public_api';
import { DaffProductFilterRequestTypeMismatch } from '../errors/request-type-mismatch.error';

/**
 * Ensures that the types of the filter and the filter request match.
 *
 * @throws {@link DaffProductFilterRequestTypeMismatch} if the types do not match.
 */
export const daffProductValidateFilterRequestTypeMatch = (
  request: DaffProductFilterRequest | DaffProductFilterToggleRequest,
  filter: DaffProductFilter,
): void => {
  if (request.type !== filter.type) {
    throw new DaffProductFilterRequestTypeMismatch('Filter types don\'t match');
  }
};
