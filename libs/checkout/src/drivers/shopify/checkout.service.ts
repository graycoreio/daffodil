import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffDriverConfigService } from '@daffodil/driver';

import { Order } from '../../models/order/order';
import { DaffCheckoutServiceInterface } from '../interfaces/checkout-service.interface';

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
