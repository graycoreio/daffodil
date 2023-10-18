import { Injectable } from '@angular/core';

import { DaffServerSideStorageError } from './server-error';
import { DaffPersistenceService } from '../persistence.interface';

/**
 * A storage service meant to be loaded into SSR contexts.
 * It will always throw the {@link DaffServerSideStorageError}.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffServerErrorStorageService implements DaffPersistenceService {
  static readonly ERROR_MESSAGE = 'The DaffServerErrorStorageService always throws an error.';

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
    throw new DaffServerSideStorageError(DaffServerErrorStorageService.ERROR_MESSAGE);
  }
}
