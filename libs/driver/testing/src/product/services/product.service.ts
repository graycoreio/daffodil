import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Product } from '@daffodil/core';
import { ProductFactory } from '@daffodil/core/testing';

import { DaffProductServiceInterface, DaffDriverConfigService } from '@daffodil/driver';

import { DaffDriverTestingModule } from '../../testing.module';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingProductService implements DaffProductServiceInterface {
 
  constructor(private productFactory: ProductFactory) {}

  getAll(): Observable<Product[]> {
    return of(this.productFactory.createMany(5));
  }

  get(productId: string): Observable<Product> {
    return of(this.productFactory.create());
  }
}
