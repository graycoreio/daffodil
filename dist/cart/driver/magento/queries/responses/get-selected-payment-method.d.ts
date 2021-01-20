import { MagentoCartPaymentMethod } from '../../models/responses/cart-payment-method';
export interface MagentoGetSelectedPaymentMethodResponse {
    cart: {
        __typename: string;
        selected_payment_method: MagentoCartPaymentMethod;
    };
}
