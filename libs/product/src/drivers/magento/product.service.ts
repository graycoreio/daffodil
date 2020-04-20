import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Apollo } from 'apollo-angular';

import { DaffProductServiceInterface } from '../interfaces/product-service.interface';
import { GetAllProductsQuery } from './queries/get-all-products';
import { GetProductQuery } from './queries/get-product';
import { DaffMagentoProductTransformerService } from './transforms/product-transformer.service';
import { DaffProduct } from '../../models/product';

/**
 * A service for making magento apollo queries for products of type, DaffProduct.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoProductService implements DaffProductServiceInterface {  
  constructor(
    private apollo: Apollo,
    public productTransformer: DaffMagentoProductTransformerService) {}

  /**
   * Get an Observable of a DaffProduct by id.
   * @param productId a product Id
   */
  get(productId: string): Observable<DaffProduct> {
    return this.apollo.query<any>({
			query: GetProductQuery,
			variables: {
				sku: productId
			}
		}).pipe(
      map(result => this.productTransformer.transform(result.data.products.items[0], result.data.storeConfig.secure_base_media_url))
    );
  }

  /**
   * Get an Observable of an array of DaffProducts.
   */
  getAll(): Observable<DaffProduct[]> {
    return this.apollo.query<any>({
			query: GetAllProductsQuery
		}).pipe(
      map(result => this.productTransformer.transformMany(result.data.products.items, result.data.storeConfig.secure_base_media_url))
    );
  }

  //todo: add actual getBestSellers apollo call for Magento.
  //todo: move to a different bestsellers module.
  getBestSellers(): Observable<DaffProduct[]> {
    return of(null);
  }
}
