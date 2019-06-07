import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DaffProduct, DaffProductServiceInterface } from '@daffodil/product';

import { DaffProductFactory } from '../../factories/product.factory';
import { DaffProductImageFactory } from '../../factories/product-image.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingProductService implements DaffProductServiceInterface {
 
  constructor(
    private productFactory: DaffProductFactory,
    private productImageFactory: DaffProductImageFactory) {}

  getAll(): Observable<DaffProduct[]> {
    return of([
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)})
    ]);
  }

  getBestSellers(): Observable<DaffProduct[]> {
    return of([
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)})
    ]);
  }

  get(productId: string): Observable<DaffProduct> {
    return of(this.productFactory.create({ images: this.productImageFactory.createMany(5)}));
  }
}
