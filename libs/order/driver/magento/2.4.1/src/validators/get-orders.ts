import {ApolloQueryResult} from '@apollo/client/core';

import { DaffOrderInvalidAPIResponseError } from '@daffodil/order/driver';

import { MagentoGetGuestOrdersResponse } from '../queries/public_api';

export const validateGetOrdersResponse = (response: ApolloQueryResult<MagentoGetGuestOrdersResponse>) => {
  if (response.data?.graycoreGuestOrders?.items) {
    if (response.data.graycoreGuestOrders.items.reduce((acc, order) => acc && !!(
      order.billing_address
        && order.shipping_address
        && order.payment_methods
    ), true)) {
      return response
    } else {
      throw new DaffOrderInvalidAPIResponseError('One of the orders does not contain required fields.')
    }
  } else {
    throw new DaffOrderInvalidAPIResponseError('Get orders response does not contain a valid list of orders.')
  }
}
