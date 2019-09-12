import { Injectable, Inject } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Apollo } from 'apollo-angular';

import { DaffProductServiceInterface } from '../interfaces/product-service.interface';
import { DaffProductTransformer } from '../injection-tokens/product-transformer.token';
import { DaffProductTransformerInterface } from '../interfaces/product-transformer.interface';
import { DaffProductQueryManagerInterface } from '../interfaces/product-query-manager.interface';
import { DaffProductQueryManager } from '../injection-tokens/product-query-manager.token';
import { DaffProductUnion } from '../../models/product-union';
import { DaffProductMagentoDriverModule } from './product-driver.module';

/**
 * A service for making magento apollo queries for products of type, DaffProductUnion.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoProductService implements DaffProductServiceInterface<DaffProductUnion> {  
  constructor(
    private apollo: Apollo, 
    @Inject(DaffProductQueryManager) public queryManager: DaffProductQueryManagerInterface,
    @Inject(DaffProductTransformer) public transformer: DaffProductTransformerInterface<DaffProductUnion>) {}

  /**
   * Get an Observable of a DaffProductUnion by id.
   * @param productId a product Id
   */
  get(productId: string): Observable<DaffProductUnion> {
    return this.apollo.query<any>(this.queryManager.getAProductQuery(productId)).pipe(
      map(result => this.transformer.transform(result.data))
    );
  }

  /**
   * Get an Observable of an array of DaffProductUnions.
   */
  getAll(): Observable<DaffProductUnion[]> {
    return this.apollo.query<any>(this.queryManager.getAllProductsQuery()).pipe(
      map(result => this.transformer.transformMany(result.data.products.items))
    );
  }

  //todo: add actual getBestSellers apollo call for Magento.
  //todo: move to a different bestsellers module.
  getBestSellers(): Observable<DaffProductUnion[]> {
    return of(null);
  }
}
