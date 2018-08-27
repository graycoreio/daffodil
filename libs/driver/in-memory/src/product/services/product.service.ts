import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Product } from '@daffodil/core';
import { DaffProductServiceInterface } from '@daffodil/driver';

@Injectable()
export class DaffInMemoryProductService implements DaffProductServiceInterface {
  url = '/api/products/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  get(productId: string): Observable<Product> {
    return this.http.get<Product>(this.url + productId);
  }
}
