import { DaffCategoryFilterErrorCodes } from '../filters/errors/codes.enum';

/**
 *
 * The available error codes of the @daffodil/category package.
 *
 * Note that this only contains errors in the root @daffodil/category package, not
 * any of its subpackages e.g. `@daffodil/category/testing`.
 */
export const DaffCategoryErrorCodes = {
  ...DaffCategoryFilterErrorCodes,
};
export type DaffCategoryErrorCodes = DaffCategoryFilterErrorCodes;
