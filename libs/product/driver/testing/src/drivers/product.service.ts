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
 * @inheritdoc
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

  getAll(): Observable<DaffProduct[]> {
    return of([
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
    ]);
  }

  getBestSellers(): Observable<DaffProduct[]> {
    return of([
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
      this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
    ]);
  }

  get(productId: DaffProduct['id']): Observable<DaffProduct> {
    return of(this.productFactory.create({ images: this.productImageFactory.createMany(5) }));
  }

  getByUrl(url: DaffProduct['url']): Observable<DaffProduct> {
    return of(this.productFactory.create({ url, images: this.productImageFactory.createMany(5) }));
  }
}
