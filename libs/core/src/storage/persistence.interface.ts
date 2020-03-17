import { InjectionToken, inject, PLATFORM_ID } from '@angular/core';

import { DaffLocalStorageService } from './localstorage/localstorage.service';

export interface DaffPersistenceService {
  setItem(key : string, value: any): void;
  getItem(key: string): any;
  clear(): void;
  removeItem(key: string): void;
}

export const DaffPersistenceServiceToken = new InjectionToken<DaffPersistenceService>('DaffPersistenceService', {
  providedIn: 'root',
  factory: () => new DaffLocalStorageService(inject<string>(PLATFORM_ID)),
});
