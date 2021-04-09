import { DaffCategoryFilterEqual } from '../../../../../models/public_api';
import { DaffCategoryFilterEqualToggleRequest } from '../../../../../models/public_api';

/**
 * Toggles an equal type filter option.
 */
export const daffToggleFilterEqual = (
  request: DaffCategoryFilterEqualToggleRequest,
  filter: DaffCategoryFilterEqual,
): DaffCategoryFilterEqual => {
  const option = filter.options[request.value];

  return option
    ? {
      ...filter,
      options: {
        ...filter.options,
        [option.value]: {
          ...option,
          applied: !option.applied,
        },
      },
    }
    : filter;
};
