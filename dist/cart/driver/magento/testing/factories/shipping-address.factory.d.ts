import { MagentoShippingAddress } from '@daffodil/cart/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';
import { MockMagentoCartAddress } from './cart-address.factory';
export declare class MockMagentoShippingAddress extends MockMagentoCartAddress implements MagentoShippingAddress {
    __typename: string;
    available_shipping_methods: any[];
    selected_shipping_method: any;
}
export declare class MagentoShippingAddressFactory extends DaffModelFactory<MagentoShippingAddress> {
    constructor();
}
