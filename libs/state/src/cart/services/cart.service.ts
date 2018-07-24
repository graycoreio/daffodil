import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Cart } from '@daffodil/core';
import { DaffodilConfigService } from '../../config/daffodil-config.service';

@Injectable()
export class CartService {

  url = this.daffodilConfigService.config.BASE_URL + 'api/cart';

  constructor(
    private http: HttpClient,
    private daffodilConfigService: DaffodilConfigService
  ) {}

  get(): Observable<Cart> {
    return this.http.get<Cart>(this.url);
  }

  addToCart(productId: string, qty: number): Observable<Cart> {
    return this.http.post<Cart>(this.url + '/addToCart', {productId, qty});
  }
}
