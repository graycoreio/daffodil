import { Injectable, Inject } from '@angular/core';

import { DaffPersistenceService, DaffPersistenceServiceToken } from '@daffodil/core';

@Injectable({
  providedIn: 'root'
})
export class DaffAuthStorageService {
  private readonly AUTH_STORAGE_TOKEN = 'DAFF_AUTH_TOKEN';

  constructor(@Inject(DaffPersistenceServiceToken) private storageService: DaffPersistenceService) {}

  getAuthToken(): string {
    return this.storageService.getItem(this.AUTH_STORAGE_TOKEN);
  }

  setAuthToken(value: string): void {
    this.storageService.setItem(this.AUTH_STORAGE_TOKEN, value);
  }

  removeAuthToken(): void {
    this.storageService.removeItem(this.AUTH_STORAGE_TOKEN);
  }
}
