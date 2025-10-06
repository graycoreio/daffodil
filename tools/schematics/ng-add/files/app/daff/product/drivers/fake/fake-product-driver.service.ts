import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriverResponse,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';

import { FakeProduct } from './fake-product';
import { transformFakeProduct } from './transform';

@Injectable({
  providedIn: 'root',
})
export class FakeProductDriverService implements DaffProductServiceInterface {
  readonly url: string = 'https://fakestoreapi.com';

  constructor(private client: HttpClient) { }

  getAll(): Observable<DaffProduct[]> {
    return this.client.get<FakeProduct[]>(this.url + '/products').pipe(
      map((fakeProducts: FakeProduct[]): DaffProduct[] => fakeProducts.map(transformFakeProduct)),
    );
  }

  get(productId: string): Observable<DaffProductDriverResponse<DaffProduct>> {
    return this.client.get<FakeProduct>(`${this.url}/products/${productId}`).pipe(
      map((fakeProduct: FakeProduct): DaffProductDriverResponse<DaffProduct> => {
        const transformedProduct = transformFakeProduct(fakeProduct);
        return {
          id: transformedProduct.id,
          products: [transformedProduct],
        };
      }),
    );
  }

  getByUrl(url: string): Observable<DaffProductDriverResponse<DaffProduct>> {
    // Extract product ID from URL that begins with /product or product
    const productId = url.replace(/^\/?product\/?/, '');
    return this.get(productId);
  }
}
