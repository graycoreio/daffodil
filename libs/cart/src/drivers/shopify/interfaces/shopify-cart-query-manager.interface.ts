import { QueryOptions, MutationOptions } from 'apollo-client';

import { DaffCartQueryManagerInterface } from '../../interfaces/cart-query-manager.interface';
import { CheckoutCreateInput } from '../models/checkout-create-input';
import { GetCreateCartMutationResponse } from '../queries/queries';

/**
 * Interface that must be implemented by the shopify cart query manager, ultimately, because sort fields cannot be
 * retrieved via the category cart call.
 */
export interface DaffShopifyCartQueryManagerInterface extends DaffCartQueryManagerInterface {
  getCheckoutLineItemInputsQuery(checkoutId: string): QueryOptions;
  getCreateCartMutation(input: CheckoutCreateInput): MutationOptions<GetCreateCartMutationResponse>;
}
