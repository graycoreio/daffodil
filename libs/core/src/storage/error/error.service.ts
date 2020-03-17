import { Injectable } from '@angular/core';

import { DaffPersistenceService } from '../persistence.interface';

@Injectable({
  providedIn: 'root'
})
export class DaffErrorStorageService implements DaffPersistenceService {
  static ERROR_MESSAGE = 'The DaffErrorStorageService always throws an error.';

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
    throw new Error(DaffErrorStorageService.ERROR_MESSAGE);
  }
}
