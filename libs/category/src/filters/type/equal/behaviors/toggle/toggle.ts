import { DaffCategoryEqualFilter } from '../../../../../models/public_api';
import {
  DaffCategoryFilterEqualRequest,
  DaffToggleCategoryFilterEqualRequest,
} from '../../../../../models/public_api';

/**
 * Toggles an equal type filter option.
 */
export const daffToggleFilterEqual = (
  request: DaffToggleCategoryFilterEqualRequest,
  filter: DaffCategoryEqualFilter,
): DaffCategoryEqualFilter => {
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
