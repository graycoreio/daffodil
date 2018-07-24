import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Product } from '../model/product';
import { DaffodilConfigService } from '../../config/daffodil-config.service';

@Injectable()
export class ProductService {

  url = this.daffodilConfigService.config.BASE_URL + 'api/products/';

  constructor(
    private http: HttpClient,
    private daffodilConfigService: DaffodilConfigService
  ) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  get(productId: string): Observable<Product> {
    return this.http.get<Product>(this.url + productId);
  }
}
