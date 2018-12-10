import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Product, DaffProductFactory } from '../../../../../index';
import { DaffProductServiceInterface } from '../../../../src/service-interfaces/product-service.interface';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingProductService implements DaffProductServiceInterface {
 
  constructor(private productFactory: DaffProductFactory) {}

  getAll(): Observable<Product[]> {
    return of(this.productFactory.createMany(5));
  }

  getBestSellers(): Observable<Product[]> {
    return of(this.productFactory.createMany(4));
  }

  get(productId: string): Observable<Product> {
    return of(this.productFactory.create());
  }
}
