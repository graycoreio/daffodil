import {
  DaffError,
  DaffInheritableError,
} from '../../errors/public_api';

/**
 * @inheritdoc
 */
export class DaffStorageServiceError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_STORAGE_FAILURE';

  constructor(public message: string) {
    super(message);
  }
}
