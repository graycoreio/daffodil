import { DaffCategoryFilterErrorCodes } from '../filters/errors/codes.enum';

export const DaffCategoryErrorCodes = {
  ...DaffCategoryFilterErrorCodes,
} as const;
export type DaffCategoryErrorCodes = typeof DaffCategoryErrorCodes;
