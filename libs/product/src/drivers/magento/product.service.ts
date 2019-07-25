import { Injectable, Inject } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Apollo } from 'apollo-angular';

import { DaffProduct } from '../../models/product';
import { DaffProductServiceInterface } from '../interfaces/product-service.interface';
import { MagentoGetAllProductsQuery, MagentoGetAProductQuery } from './queries/queries';
import { DaffProductTransformer } from '../injection-tokens/product-transformer.token';
import { DaffProductTransformerInterface } from '../interfaces/product-transformer.interface';

@Injectable({
  providedIn: 'root'
})
export class DaffMagentoProductService implements DaffProductServiceInterface {  
  constructor(
    private apollo: Apollo, 
    @Inject(DaffProductTransformer) public transformer: DaffProductTransformerInterface) {}

  getAll(): Observable<DaffProduct[]> {
    return this.apollo.query<any>({
      query: MagentoGetAllProductsQuery,
      variables: {
        pageSize: 10
      }
    }).pipe(
      map(result => this.transformer.transformMany(result.data.products))
    );
  }

  //todo: add actual getBestSellers apollo call. Right now, it just makes the getAll() call
  getBestSellers(): Observable<DaffProduct[]> {
    return of(null);
  //   return this.apollo.query<GetAllProductsResponse>({
  //     query: GetAllProductsQuery,
  //     variables: {
  //       length: this.defaultLength
  //     }
  //   }).pipe(
  //     map(result => {
  //       return result.data.shop.products.edges.map(edge => DaffMagentoProductTransformer(edge.node))
  //     })
  //   );
  }

  get(productId: string): Observable<DaffProduct> {
    return this.apollo.query<any>({
      query: MagentoGetAProductQuery,
      variables: {
        sku: productId
      }
    }).pipe(
      map(result => this.transformer.transform(result.data.products.items[0]))
    );
  }
}
