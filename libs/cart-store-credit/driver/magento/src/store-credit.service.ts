import {
  Inject,
  Injectable,
} from '@angular/core';
import { DocumentNode } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  map,
  catchError,
} from 'rxjs/operators';

import { DaffCartWithStoreCredit } from '@daffodil/cart-store-credit';
import { DaffCartStoreCreditDriverInterface } from '@daffodil/cart-store-credit/driver';
import {
  DaffMagentoCartTransformer,
  DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,
} from '@daffodil/cart/driver/magento';
import { DaffQueuedApollo } from '@daffodil/core/graphql';

import { transformMagentoReviewsError } from './errors/transform';
import {
  MagentoApplyStoreCreditResponse,
  MagentoCartWithStoreCredit,
  MagentoRemoveStoreCreditResponse,
} from './models/public_api';
import {
  magentoApplyStoreCredit,
  magentoRemoveStoreCredit,
} from './queries/public_api';
import { magentoCartWithStoreCreditTransform } from './transforms/public_api';
import {
  validateApplyStoreCreditResponse,
  validateRemoveStoreCreditResponse,
} from './validators/public_api';

/**
 * A service for making Magento GraphQL queries for carts.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCartStoreCreditMagentoService implements DaffCartStoreCreditDriverInterface {
  constructor(
    private mutationQueue: DaffQueuedApollo,
    private cartTransformer: DaffMagentoCartTransformer<MagentoCartWithStoreCredit, DaffCartWithStoreCredit>,
    @Inject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS) private extraCartFragments: DocumentNode[],
  ) {}

  apply(cartId: DaffCartWithStoreCredit['id']): Observable<DaffCartWithStoreCredit> {
    return this.mutationQueue.mutate<MagentoApplyStoreCreditResponse>({
      mutation: magentoApplyStoreCredit(this.extraCartFragments),
      variables: {
        id: cartId,
      },
    }).pipe(
      map(validateApplyStoreCreditResponse),
      map((response) => this.cartTransformer.transform(response.data.applyStoreCreditToCart.cart)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }

  remove(cartId: DaffCartWithStoreCredit['id']): Observable<DaffCartWithStoreCredit> {
    return this.mutationQueue.mutate<MagentoRemoveStoreCreditResponse>({
      mutation: magentoRemoveStoreCredit(this.extraCartFragments),
      variables: {
        id: cartId,
      },
    }).pipe(
      map(validateRemoveStoreCreditResponse),
      map((response) => this.cartTransformer.transform(response.data.removeStoreCreditFromCart.cart)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }
}
