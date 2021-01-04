import { MagentoGraycoreOrder } from '../../models/responses/order';

export interface MagentoGetGuestOrdersResponse {
  graycoreGuestOrders: {
    __typename?: string;
    orders: MagentoGraycoreOrder[] | null;
  }
}
