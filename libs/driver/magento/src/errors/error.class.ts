import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

export const DAFF_DRIVER_MAGENTO_ERROR_CODE = 'DAFF_DRIVER_MAGENTO_ERROR';

/**
 * A very general error thrown when a more specific error type cannot be determined.
 */
export class DaffDriverMagentoError extends DaffInheritableError implements DaffError {
  public readonly code: string = DAFF_DRIVER_MAGENTO_ERROR_CODE;

  constructor(message?: string) {
    super(message);
  }
}
