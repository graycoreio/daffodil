import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product, DaffProductServiceInterface } from '@daffodil/product';

import { DaffProductFactory } from '../../factories/product.factory';
import { DaffProductImageFactory } from '../../factories/product-image.factory';

/**
 * Product service for the product testing driver
 * 
 * @param productFactory - A DaffProductFactory instance
 * @param productImageFactory - A DaffProductImageFactory instance
 */
@Injectable({
  providedIn: 'root'
})
export class DaffTestingProductService implements DaffProductServiceInterface {
 
  constructor(
    private productFactory: DaffProductFactory,
    private productImageFactory: DaffProductImageFactory) {}

  /**
   * Get all Products.
   * 
   * @returns An Observable of Product[]
   */
  getAll(): Observable<Product[]> {
    return of([
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)})
    ]);
  }

  /**
   * Get all best selling products.
   * 
   * @returns An Observable of Product[]
   */
  getBestSellers(): Observable<Product[]> {
    return of([
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)}),
      this.productFactory.create({ images: this.productImageFactory.createMany(5)})
    ]);
  }

  /**
   * Get product by ID
   * 
   * @param productId product ID
   * @returns An Observable of a Product
   */
  get(productId: string): Observable<Product> {
    return of(this.productFactory.create({ images: this.productImageFactory.createMany(5)}));
  }
}
