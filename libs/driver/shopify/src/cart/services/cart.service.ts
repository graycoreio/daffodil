import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Cart } from '@daffodil/core';
import { DaffCartServiceInterface, DaffDriverConfigService } from '@daffodil/driver';
import { DaffShopifyDriverModule } from '../../shopify.module';

@Injectable({
  providedIn: 'root'
})
export class DaffShopifyCartService implements DaffCartServiceInterface {
  url = this.daffodilConfigService.config.BASE_URL + 'api/cart';

  constructor(
    private http: HttpClient,
    private daffodilConfigService: DaffDriverConfigService
  ) {}

  get(): Observable<Cart> {
    return this.http.get<Cart>(this.url);
  }

  addToCart(productId: string, qty: number): Observable<Cart> {
    return this.http.post<Cart>(this.url + '/addToCart', { productId, qty });
  }
}
