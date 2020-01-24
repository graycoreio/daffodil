import { QueryOptions, MutationOptions } from 'apollo-client';
import { CheckoutLineItemInput } from '../shopify/models/checkout-line-item-input';

/**
 * Interface that must be implemented by Cart query managers.
 */
export interface DaffCartQueryManagerInterface {
  /**
   * Get a single cart by identifier.
   * @param identifier cart identifier
   */
  getTheCartQuery(customerAccessToken: string, checkoutId: string): QueryOptions;

  /**
   * Adds a product to the cart.
   */
  setCartItemsMutation(lineItems: CheckoutLineItemInput[], checkoutId: string) : MutationOptions;
}
