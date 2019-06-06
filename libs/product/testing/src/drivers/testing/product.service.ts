import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product, DaffProductServiceInterface } from 'product/src';

import { DaffProductFactory } from 'product/testing/src/factories/product.factory';
import { DaffProductImageFactory } from 'product/testing/src/factories/product-image.factory';

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
