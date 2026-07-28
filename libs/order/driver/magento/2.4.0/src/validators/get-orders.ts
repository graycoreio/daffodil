import { Apollo } from 'apollo-angular';

import { DaffOrderInvalidAPIResponseError } from '@daffodil/order/driver';

import { MagentoGetGuestOrdersResponse } from '../queries/public_api';

export const validateGetOrdersResponse = (response: Apollo.QueryResult<MagentoGetGuestOrdersResponse>) => {
  if (response.data?.graycoreGuestOrders?.orders) {
    if (response.data.graycoreGuestOrders.orders.reduce((acc, order) => acc && !!(
      order.billing_address
        && order.shipping_address
        && order.payment
    ), true)) {
      return response;
    } else {
      throw new DaffOrderInvalidAPIResponseError('One of the orders does not contain required fields.');
    }
  } else {
    throw new DaffOrderInvalidAPIResponseError('Get orders response does not contain a valid list of orders.');
  }
};
