import { Injectable } from '@angular/core';

import { DaffPersistenceService } from '../persistence.interface';
import { DaffServerStorageServiceError } from './server-error';

@Injectable({
  providedIn: 'root'
})
export class DaffErrorServerStorageService implements DaffPersistenceService {
  static readonly ERROR_MESSAGE = 'The DaffErrorServerStorageService always throws an error.';

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
    throw new DaffServerStorageServiceError(DaffErrorServerStorageService.ERROR_MESSAGE);
  }
}
