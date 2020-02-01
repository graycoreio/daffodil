import { Injectable } from '@angular/core';
import gql from 'graphql-tag';
import { QueryOptions, MutationOptions } from 'apollo-client';
import { CheckoutLineItemInput } from '../models/checkout-line-item-input';
import { DaffShopifyCartQueryManagerInterface } from '../interfaces/shopify-cart-query-manager.interface';
import { CheckoutCreateInput } from '../models/checkout-create-input';
import { GetCreateCartMutationResponse } from './queries';

/**
 * The query manager for making shopify product graphQL queries.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffShopifyCartGraphQlQueryManagerService implements DaffShopifyCartQueryManagerInterface {
  getCheckoutLineItemInputsQuery(checkoutId: string): QueryOptions {
    return {
      query:  gql`
        query GetCheckoutLineItemsInputs($checkoutId: String!) {
          node (id: $checkoutId) {
            lineItems {
              edges {
                node {
                  quantity,
                  variant {
                    id,
                  }
                }
              }
            },
          }
        }
      `,
      variables: {
        checkoutId
      }
    };
  }

  getTheCartQuery(customerAccessToken: string, checkoutId: string) : QueryOptions {
    return {
      query:  gql`
        query GetTheCart($customerAccessToken: String!, $checkoutId: String!) {
          customer(customerAccessToken: $customerAccessToken) {
            id,
          },
          node (id: $checkoutId) {
            id,
            createdAt,
            updatedAt,
            shippingAddress {
              id,
              address1,
              address2,
              city,
              company,
              country,
              firstName,
              lastName,
              phone,
              province,
              zip,
            },
            shippingLine,
            currencyCode,
            totalPriceV2 {
              amount,
            },
            subtotalPriceV2 {
              amount,
            },
            lineItemsSubtotalPrice {
              amount,
            },

            lineItems {
              edges {
                node {
                  id,
                  quantity,
                  title,
                  variant {
                    id,
                    image,
                    priceV2,
                    sku,
                    weight,
                    product {
                      id,
                      description,
                    }
                  }
                }
              }
            },
          }
        }
      `,
      variables: {
        customerAccessToken,
        checkoutId
      }
    };
  }

  setCartItemsMutation(lineItems: CheckoutLineItemInput[], checkoutId: string) : MutationOptions {
    return {
      mutation: gql`
        mutation addToCart($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
          checkoutLineItemsReplace(lineItems: $lineItems, checkoutId: $checkoutId)
        }
      `,
      variables: {
        lineItems,
        checkoutId
      }
    }
  }

  getCreateCartMutation(input: CheckoutCreateInput): MutationOptions<GetCreateCartMutationResponse> {
    return {
      mutation: gql`
        mutation createCart($input: CheckoutCreateInput!) {
          checkoutCreate(input: $input) {
            checkout {
              id
            }
          }
        }
      `,
      variables: {
        input
      }
    }
  }
}
