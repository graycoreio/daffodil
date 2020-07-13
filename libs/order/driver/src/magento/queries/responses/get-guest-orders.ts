import { MagentoGraycoreOrder } from '../../models/responses/order';

export interface MagentoGetGuestOrdersResponse {
  graycoreGuestOrders: {
    orders: MagentoGraycoreOrder[];
  }
}
