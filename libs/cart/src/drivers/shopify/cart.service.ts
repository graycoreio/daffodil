import { Injectable, Inject } from '@angular/core';

import { Observable, pipe, combineLatest, of } from 'rxjs';
import { map, mergeMap, mergeMapTo } from 'rxjs/operators';

import { Apollo } from 'apollo-angular';

// import { DaffCheckoutDriver, DaffCheckoutServiceInterface } from '@daffodil/checkout';

import { DaffCart } from '../../models/cart';
import { DaffCartServiceInterface } from '../interfaces/cart-service.interface';
import { DaffShopifyCartQueryManagerInterface } from './interfaces/shopify-cart-query-manager.interface';
import { DaffCartQueryManager } from '../injection-tokens/cart-query-manager.token';
import { DaffCartTransformerInterface } from '../interfaces/cart-transformer.interface';
import { DaffCartTransformer } from '../injection-tokens/cart-transformer.token';
import { CheckoutLineItemInput } from './models/checkout-line-item-input';
import { GetCheckoutLineItemInputsQueryResponse, GetTheCartQueryResponse, GetCreateCartMutationResponse } from './queries/queries';

/**
 * Util pipe to get the data from an apollo result
 */
const unwrapResult = pipe(
  map((res: {data}) =>
    res.data
  )
);

/**
 * A service for getting DaffCarts from apollo shopify cart requests.
 *
 * @Param apollo
 */
@Injectable({
  providedIn: 'root'
})
export class DaffShopifyCartService implements DaffCartServiceInterface {
  /**
   * The customer's access token.
   *
   * @public
   * @type {string}
   * @memberof DaffShopifyCartService
   */
  public accessToken: string = null;

  /**
   * The ID of the checkout.
   *
   * @protected
   * @type {Observable<string>}
   * @memberof DaffShopifyCartService
   */
  protected checkoutId: Observable<string> = null;

  constructor(
    private apollo: Apollo,
    @Inject(DaffCartQueryManager) public queryManager: DaffShopifyCartQueryManagerInterface,
    @Inject(DaffCartTransformer) public cartTransformer: DaffCartTransformerInterface<DaffCart>,
    // @Inject(DaffCheckoutDriver) public checkoutService: DaffCheckoutServiceInterface
  ) {
    this.checkoutId = this.createCart()
  }

  /**
   * Creates a checkout object.
   * The checkout is essentially equivalent to the cart in the shopify storefront API.
   *
   * @protected
   * @returns {Observable<string>} The ID of the checkout.
   * @memberof DaffShopifyCartService
   */
  protected createCart (): Observable<string> {
    return this.apollo.mutate<GetCreateCartMutationResponse>(this.queryManager.getCreateCartMutation({
      // TODO: get actual customer data
      allowPartialAddresses: true,
      customAttributes: [],
      email: '',
      lineItems: [],
      note: '',
      presentmentCurrencyCode: '',
      shippingAddress: null,
    })).pipe(
      unwrapResult,
      map(({checkoutCreate}: GetCreateCartMutationResponse) =>
        checkoutCreate.checkout.id
      )
    )
  }

  /**
   * Gets a list of line items currently in the cart.
   *
   * @protected
   * @returns {Observable<CheckoutLineItemInput[]>}
   * @memberof DaffShopifyCartService
   */
  protected getCheckoutLineItemInputs (): Observable<CheckoutLineItemInput[]> {
    return this.checkoutId.pipe(
      mergeMap(checkoutId =>
        this.apollo.query<GetCheckoutLineItemInputsQueryResponse>(this.queryManager.getCheckoutLineItemInputsQuery(checkoutId))
      ),
      unwrapResult,
      map((res: GetCheckoutLineItemInputsQueryResponse) =>
        res.node.lineItems.edges.map(({node}) => ({
          variantId: node.variant.id,
          quantity: node.quantity
        }))
      )
    )
  }

  /**
   * Sets the line items in the cart.
   *
   * @protected
   * @param {CheckoutLineItemInput[]} lineItems
   * @returns {Observable<any>}
   * @memberof DaffShopifyCartService
   */
  protected setCartItems (lineItems: CheckoutLineItemInput[]): Observable<any> {
    return this.checkoutId.pipe(
      mergeMap(checkoutId =>
        this.apollo.mutate<any>(this.queryManager.setCartItemsMutation(
          lineItems,
          checkoutId
        )),
      ),
      unwrapResult
    )
  }

  get(): Observable<DaffCart> {
    return this.checkoutId.pipe(
      mergeMap(checkoutId =>
        this.apollo.query<GetTheCartQueryResponse>(this.queryManager.getTheCartQuery(this.accessToken, checkoutId))
      ),
      unwrapResult,
      map((res: GetTheCartQueryResponse) => ({
        ...res.node,
        customer_id: res.customer.id,
      })),
      map(this.cartTransformer.transform)
    )
  }

  addToCart(productId: string, qty: number): Observable<DaffCart> {
    return this.getCheckoutLineItemInputs().pipe(
      mergeMap((lineItems) =>
        this.setCartItems(
          // combine the line items already in the cart with the new one
          [
            ...lineItems,
            {
              variantId: productId,
              quantity: qty
            }
          ],
        )
      ),
      mergeMap(() =>
        this.get()
      )
    )
  }

  clear(): Observable<void> {
    return this.setCartItems([])
  }
}
