import { MagentoOrder } from '../../models/responses/order';
export interface MagentoGetGuestOrdersResponse {
    graycoreGuestOrders: {
        items: MagentoOrder[];
    };
}
