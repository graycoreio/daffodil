import { DaffCategoryFiltersErrorMap } from '../filters/errors/map';

/**
 * A mapping from error codes to error class constructors.
 */
export const DaffCategoryErrorMap = {
  ...DaffCategoryFiltersErrorMap,
} as const;
