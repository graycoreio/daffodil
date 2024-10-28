import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * @deprecated use {@link DaffDriverNetworkError} instead. Deprecated in version 0.78.0. Will be removed in version 0.81.0.
 */
export const DAFF_DRIVER_MAGENTO_NETWORK_ERROR_CODE = 'DAFF_DRIVER_MAGENTO_NETWORK_ERROR';

/**
 * An error thrown when the Magento driver encountered a problem with network connectivity.
 *
 * @deprecated use {@link DaffDriverNetworkError} instead. Deprecated in version 0.78.0. Will be removed in version 0.81.0.
 */
export class DaffDriverMagentoNetworkError extends DaffInheritableError implements DaffError {
  public readonly code: string = DAFF_DRIVER_MAGENTO_NETWORK_ERROR_CODE;

  constructor(message?: string) {
    super(message);
  }
}
