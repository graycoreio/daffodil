import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Product } from '@core/product/model/product';
import { coreEnvironment } from '@core/environment-importer';

@Injectable()
export class ProductService {

  url = coreEnvironment.API_BASE + "api/products";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
