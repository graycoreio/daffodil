import { ApolloQueryResult } from 'apollo-client';

import { DaffInvalidAPIResponseError } from '@daffodil/order';

import { MagentoGetGuestOrdersResponse } from '../queries/public_api';

export const validateGetOrdersResponse = (response: ApolloQueryResult<MagentoGetGuestOrdersResponse>) => {
  if (response.data.graycoreGuestOrders.orders) {
    if (response.data.graycoreGuestOrders.orders.reduce((acc, order) => acc && !!(
      order.billing_address
        && order.shipping_address
        && order.payment
    ), true)) {
      return response
    } else {
      throw new DaffInvalidAPIResponseError('One of the orders does not contain required fields.')
    }
  } else {
    throw new DaffInvalidAPIResponseError('Get orders response does not contain a valid list of orders.')
  }
}
