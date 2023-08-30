import {
  DaffError,
  DaffInheritableError,
} from '../../errors/public_api';

export const DAFF_STORAGE_SERVICE_ERROR_CODE = 'DAFF_STORAGE_FAILURE';

export class DaffStorageServiceError extends DaffInheritableError implements DaffError {
  public readonly code: string = DAFF_STORAGE_SERVICE_ERROR_CODE;

  constructor(public message: string) {
    super(message);
  }
}
