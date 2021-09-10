import { Injectable } from '@angular/core';
import {
  Observable,
  of,
} from 'rxjs';

import { randomSubset } from '@daffodil/core';
import { DaffModelFactory } from '@daffodil/core/testing';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriverResponse,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';
import {
  DaffProductImageFactory,
  DaffProductExtensionFactory,
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
    private productFactory: DaffProductExtensionFactory,
    private productImageFactory: DaffProductImageFactory,
  ) {}

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

  get(productId: DaffProduct['id']): Observable<DaffProductDriverResponse> {
    return of({
      id: productId,
      products: [
        this.productFactory.create({ images: this.productImageFactory.createMany(5) }),
      ],
    });
  }

  getByUrl(url: DaffProduct['url']): Observable<DaffProductDriverResponse> {
    const product = this.productFactory.create({ images: this.productImageFactory.createMany(5), url });
    return of({
      id: product.id,
      products: [product],
    });
  }
}
