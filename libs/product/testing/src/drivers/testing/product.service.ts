import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product, DaffProductServiceInterface } from '@daffodil/product';

import { DaffProductFactory } from '../../factories/product.factory';
import { DaffProductImageFactory } from '../../factories/product-image.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingProductService implements DaffProductServiceInterface {
 
  constructor(
    private productFactory: DaffProductFactory,
    private productImageFactory: DaffProductImageFactory) {}

  getAll(): Observable<Product[]> {
    return of([
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)})
    ]);
  }

  getBestSellers(): Observable<Product[]> {
    return of([
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)})
    ]);
  }

  get(productId: string): Observable<Product> {
    return of(this.productFactory.create({ images: this.productImageFactory.createMany(5)}));
  }
}
