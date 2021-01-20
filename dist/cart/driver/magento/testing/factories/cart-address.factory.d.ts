import { MagentoCartAddress } from '@daffodil/cart/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockMagentoCartAddress implements MagentoCartAddress {
    __typename: string;
    region: {
        __typename: string;
        code: any;
        label: any;
    };
    country: {
        __typename: string;
        code: any;
        label: any;
    };
    street: any[];
    company: any;
    telephone: any;
    postcode: any;
    city: any;
    firstname: any;
    lastname: any;
    email: any;
}
export declare class MagentoCartAddressFactory extends DaffModelFactory<MagentoCartAddress> {
    constructor();
}
