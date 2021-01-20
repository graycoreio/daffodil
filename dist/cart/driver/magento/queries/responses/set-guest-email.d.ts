import { MagentoGetCartResponse } from './get-cart';
export interface MagentoSetGuestEmailResponse {
    setGuestEmailOnCart: {
        cart: {
            email: MagentoGetCartResponse['cart']['email'];
        };
    };
}
