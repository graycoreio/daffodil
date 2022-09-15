import {
  DaffFilterRequest,
  DaffFilter,
  DaffFilterToggleRequest,
} from '../../filterable/public_api';
import { DaffFilterRequestTypeMismatch } from '../errors/request-type-mismatch.error';

/**
 * Ensures that the types of the filter and the filter request match.
 *
 * @throws {@link DaffFilterRequestTypeMismatch} if the types do not match.
 */
export const daffFilterValidateRequestTypeMatch = (
  request: DaffFilterRequest | DaffFilterToggleRequest,
  filter: DaffFilter,
): void => {
  if (request.type !== filter.type) {
    throw new DaffFilterRequestTypeMismatch('Filter types don\'t match');
  }
};
