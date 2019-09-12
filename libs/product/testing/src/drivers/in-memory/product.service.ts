import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DaffProduct, DaffProductServiceInterface, DaffProductUnion } from '@daffodil/product';

/**
 * The product inmemory driver to mock the product backend service.
 * 
 * @Param HttpClient
 */
@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryProductService implements DaffProductServiceInterface<DaffProductUnion> {
  url = '/api/products/';

  constructor(private http: HttpClient) {}

  /**
   * Gets all products.
   * 
   * @returns An Observable of DaffProductUnion[]
   */
  getAll(): Observable<DaffProductUnion[]> {
    return this.http.get<DaffProduct[]>(this.url);
  }

  /**
   * Gets all best selling products.
   * 
   * @returns An Observable of DaffProductUnion[]
   */
  getBestSellers(): Observable<DaffProductUnion[]> {
    return this.http.get<DaffProduct[]>(this.url + 'best-sellers');
  }

  /**
   * Get a product by ID.
   * 
   * @param productId string - product ID
   * @returns An Observable of a DaffProductUnion
   */
  get(productId: string): Observable<DaffProductUnion> {
    return this.http.get<DaffProduct>(this.url + productId);
  }
}
