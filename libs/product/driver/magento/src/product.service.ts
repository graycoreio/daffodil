import {
  Injectable,
  Inject,
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Observable,
  of,
} from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffProduct } from '@daffodil/product';
import {
  DaffProductDriverResponse,
  DaffProductServiceInterface,
} from '@daffodil/product/driver';

import { MAGENTO_PRODUCT_RESPONSE_TRANSFORM } from './injection-tokens/public_api';
import {
  MAGENTO_PRO  CT_CONFIG_TOKEN,
  DaffProduct  gentoDriverConfig,
  DaffMagento  oductResponseTransform,
} from './interfaces/public_api';
import { GetAllProductsQuery } from './queries/get-all-products';
import { GetProductQuery } from './queries/get-product';
import { GetProductByUrlQuery } from './queries/get-product-by-url';
import { transformManyMagentoProducts } from './transforms/public_api';

/**
 * A service for making magento apollo queries for products of type, {@link DaffProduct}.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn:  root',
})
export class DaffMagentoProductService implements DaffProductServiceInterface {
  constructor      private apollo: Apollo,
    @Inject(MAGENTO_PRODUCT_CONFIG_TOKEN) private config: DaffProductMagentoDriverConfig,
    @Inject(MAGENTO_PRODUCT_RESPONSE_TRANSFORM) private responseTransform: DaffMagentoProductResponseTransform,
  ) {}

  get(productId: D  fProdu  ['id']): Observable<DaffProductDriverResponse> {
    return this.apollo.que    ny>({
      query: GetProductQue          variables: {
             productId,
             }).pipe(
          res    => this.r      eTransform(result.data.products.items[0], this.config.baseMediaUrl)),
    );
  }

  getByUrl(url    ffP  duc  'url']): Observable<DaffProductDriverResponse> {
    return this.apollo.que    ny>({
      query: GetProductByU      y,
      variables: {
             this.config.u        tionStrategy(url),
      },
    }).pipe(
          res    => this.r      eTransform(result.data.products.items[0], this.config.baseMediaUrl)),
    );
  }

  getAll(): Ob    abl  Daf  roduct[]> {
    return this.apollo.que    ny>({
      query: GetAllProduct      ,
    }).pipe(
      map(res    => transf      yMagentoProducts(result.data.products.items, this.config.baseMediaUrl)),
    );
  }

  //todo: add     al   tBe  Sellers apollo call for Magento.
  //todo: move to a differ  t bestsellers module.
  getBestSellers(): Observ  le<DaffProduct[]> {
    return of(null);
  }
}
