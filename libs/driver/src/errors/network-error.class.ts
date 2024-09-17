import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

export const DAFF_DRIVER_NETWORK_ERROR_CODE = 'DAFF_DRIVER_NETWORK_ERROR';

/**
 * An error thrown when the a driver encounters a problem with network connectivity.
 */
export class DaffDriverNetworkError extends DaffInheritableError implements DaffError {
  public readonly code: string = DAFF_DRIVER_NETWORK_ERROR_CODE;

  constructor(message?: string) {
    super(message);
  }
}
