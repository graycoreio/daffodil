import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product, DaffProductServiceInterface } from '@daffodil/product';

/**
 * Product service for the product inmemory driver.
 * 
 * @Param HttpClient
 */
@Injectable({
  providedIn: 'root'
})
export class DaffInMemoryProductService implements DaffProductServiceInterface {
  url = '/api/products/';

  constructor(private http: HttpClient) {}

  /**
   * Gets all products.
   * 
   * @returns An Observable of Product[]
   */
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  /**
   * Gets all best selling products.
   * 
   * @returns An Observable of Product[]
   */
  getBestSellers(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + 'best-sellers');
  }

  /**
   * Get product by ID.
   * 
   * @param productId string - product ID
   * @returns An Observable of a Product
   */
  get(productId: string): Observable<Product> {
    return this.http.get<Product>(this.url + productId);
  }
}
