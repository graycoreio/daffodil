import { CartNode } from '../models/cart-node';
import { CheckoutLineItemNode } from '../models/checkout-line-item-node';

export interface GetCheckoutLineItemInputsQueryResponse {
  node: {
    lineItems: {
      edges: {
        node: CheckoutLineItemNode;
      }[]
    }
  }
}

export interface GetTheCartQueryResponse {
  customer: {
    id: string;
  }
  node: CartNode;
}

export interface GetCreateCartMutationResponse {
  checkoutCreate: {
    checkout: {
      id: string;
    }
  }
}
