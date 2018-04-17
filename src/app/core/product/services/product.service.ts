import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import { Product } from '@core/product/model/product';

@Injectable()
export class ProductService {

  url = environment.API_BASE + "api/products";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
