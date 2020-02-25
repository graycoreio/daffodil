import { Injectable, Inject } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Apollo } from 'apollo-angular';

import { DaffProductServiceInterface } from '../interfaces/product-service.interface';
import { DaffProductTransformer } from '../injection-tokens/product-transformer.token';
import { DaffProductTransformerInterface } from '../interfaces/product-transformer.interface';
import { DaffProductUnion } from '../../models/product-union';
import { DaffSortField } from './models/sort-field';
import { GetSortFieldsAndFiltersByCategory } from './queries/get-sort-fields-and-filters-by-category';
import { GetAllProductsQuery } from './queries/get-all-products';
import { GetProductQuery } from './queries/get-product';

/**
 * A service for making magento apollo queries for products of type, DaffProductUnion.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoProductService implements DaffProductServiceInterface<DaffProductUnion> {  
  constructor(
    private apollo: Apollo,
    @Inject(DaffProductTransformer) public transformer: DaffProductTransformerInterface<DaffProductUnion>) {}

  /**
   * Get an Observable of a DaffProductUnion by id.
   * @param productId a product Id
   */
  get(productId: string): Observable<DaffProductUnion> {
    return this.apollo.query<any>({
			query: GetProductQuery,
			variables: {
				sku: productId
			}
		}).pipe(
      map(result => this.transformer.transform(result.data))
    );
  }

  /**
   * Get an Observable of an array of DaffProductUnions.
   */
  getAll(): Observable<DaffProductUnion[]> {
    return this.apollo.query<any>({
			query: GetAllProductsQuery
		}).pipe(
      map(result => this.transformer.transformMany(result.data.products.items))
    );
  }

  getSortFieldsAndFiltersByCategory(categoryId: string): Observable<DaffSortField[]> {
    return this.apollo.query<any>({
			query: GetSortFieldsAndFiltersByCategory,
			variables: {
				categoryId: categoryId
			}
		}).pipe(
      map(result => result.data.products.sort_fields.options)
    );
  }

  //todo: add actual getBestSellers apollo call for Magento.
  //todo: move to a different bestsellers module.
  getBestSellers(): Observable<DaffProductUnion[]> {
    return of(null);
  }
}
