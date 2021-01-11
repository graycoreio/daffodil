import { MagentoOrder } from '../../models/responses/order';

export interface MagentoGetGuestOrdersResponse {
  graycoreGuestOrders: {
    __typename?: string;
    items: MagentoOrder[] | null;
  }
}
