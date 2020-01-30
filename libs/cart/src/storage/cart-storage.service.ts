import { Injectable } from '@angular/core';

import { DaffLocalStorageService } from '@daffodil/core';

@Injectable({
  providedIn: 'root'
})
export class DaffCartStorageService {
  private readonly CART_STORAGE_ID = 'DAFF_CART_ID';

  constructor(private storageService: DaffLocalStorageService){}

  getCartId(): string {
    return this.storageService.getItem(this.CART_STORAGE_ID);
  }

  setCartId(value: string): void {
    this.storageService.setItem(this.CART_STORAGE_ID, value);
  }

  removeCartId(): void {
    this.storageService.removeItem(this.CART_STORAGE_ID);
  }
}
