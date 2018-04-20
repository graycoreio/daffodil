import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';
import { Product } from '@daffodil/product/model/product';
import { DaffodilConfigService } from '@daffodil/config/daffodil-config.service';

@Injectable()
export class ProductService {

  url = this.daffodilConfigService.config.BASE_URL + 'api/products';

  constructor(
    private http: HttpClient,
    private daffodilConfigService: DaffodilConfigService
  ) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
