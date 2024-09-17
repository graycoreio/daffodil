import {
  DaffError,
  DaffInheritableError,
} from '../errors/public_api';

export const DAFF_COLLECTION_PAGE_OUT_OF_BOUNDS_ERROR_CODE = 'DAFF_COLLECTION_PAGE_OUT_OF_BOUNDS';

/**
 * An error thrown when the requested page is greater than the number of available pages.
 */
export class DaffCollectionPageOutOfBoundsError extends DaffInheritableError implements DaffError {
  public readonly code: string = DAFF_COLLECTION_PAGE_OUT_OF_BOUNDS_ERROR_CODE;

  constructor(message?: string) {
    super(message);
  }
}
