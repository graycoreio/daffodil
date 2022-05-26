import { DaffProductFilterErrorCodes } from '../filters/errors/codes.enum';

/**
 *
 * The available error codes of the @daffodil/product package.
 *
 * Note that this only contains errors in the root @daffodil/product package, not
 * any of its subpackages e.g. `@daffodil/product/testing`.
 */
export const DaffProductErrorCodes = {
  ...DaffProductFilterErrorCodes,
};
export type DaffProductErrorCodes = DaffProductFilterErrorCodes;
