import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { DaffProduct } from '@daffodil/product';
import { DaffProductServiceInterface } from '@daffodil/product/driver';
import {
  DaffProductFactory,
  DaffProductImageFactory,
} from '@daffodil/product/testing';

/**
 * The product testing driver to mock the backend product service.
 *
 * @param productFactory - A DaffProductFactory instance
 * @param productImageFactory - A DaffProductImageFactory instance
 */
@Injectable({
  providedIn: 'root',
})
export class DaffTestingProductService implements DaffProductServiceInterface {

  constructor(
    private productFactory: DaffProductFactory,
    private productImageFactory: DaffProductImageFactory) {}

  /**
   * Get all products as DaffProduct[].
   *
   * @returns An Observable of Product[]
   */
  getAll(): Observable<DaffProduct[]> {
    return of([
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
    ]);
  }

  /**
   * Get all best selling products.
   *
   * @returns An Observable of Product[]
   */
  getBestSellers(): Observable<DaffProduct[]> {
    return of([
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
    ]);
  }

  /**
   * Get product by ID
   *
   * @param productId product ID
   * @returns An Observable of a Product
   */
  get(productId: DaffProduct['id']): Observable<DaffProduct> {
    return of(this.productFactory.create({ images: this.productImageFactory.createMany(5) }));
  }
}
