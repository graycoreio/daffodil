import { Injectable } from '@angular/core';

import { DaffStorageServiceError } from './error';
import { DaffPersistenceService } from '../persistence.interface';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffErrorStorageService implements DaffPersistenceService {
  static readonly ERROR_MESSAGE = 'The DaffErrorStorageService always throws an error.';

  setItem(key: string, value: any): void {
    this.throwError();
  }

  getItem(key: string): any {
    this.throwError();
  }

  removeItem(key: string): any {
    this.throwError();
  }

  clear(){
    this.throwError();
  }

  private throwError() {
    throw new DaffStorageServiceError(DaffErrorStorageService.ERROR_MESSAGE);
  }
}
