import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Product } from '@daffodil/core';
import { DaffProductServiceInterface, DaffDriverConfigService } from '@daffodil/driver';
import { DaffShopifyDriverModule } from '../../shopify.module';

@Injectable({
  providedIn: 'root'
})
export class DaffShopifyProductService implements DaffProductServiceInterface {
  url = this.configService.config.BASE_URL + 'api/products/';

  constructor(
    private http: HttpClient,
    private configService: DaffDriverConfigService
  ) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  get(productId: string): Observable<Product> {
    return this.http.get<Product>(this.url + productId);
  }
}
