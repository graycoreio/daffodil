import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Order } from '@daffodil/core';

import { DaffCheckoutServiceInterface, DaffDriverConfigService } from '@daffodil/driver';

@Injectable({
  providedIn: 'root'
})
export class DaffShopifyCheckoutService implements DaffCheckoutServiceInterface {
  url = this.daffodilConfigService.config.BASE_URL + 'api/checkout';

  constructor(
    private http: HttpClient,
    private daffodilConfigService: DaffDriverConfigService
  ) {}

  placeOrder(cartId: string): Observable<Order> {
    return this.http.post<Order>(this.url + '/placeOrder', { cartId });
  }
}
