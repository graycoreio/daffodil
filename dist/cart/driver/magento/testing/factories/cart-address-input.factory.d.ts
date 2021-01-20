import { MagentoCartAddressInput } from '@daffodil/cart/driver/magento';
import { DaffModelFactory } from '@daffodil/core/testing';
export declare class MockMagentoCartAddressInput implements MagentoCartAddressInput {
    region: any;
    country_code: any;
    street: any[];
    company: any;
    telephone: any;
    postcode: any;
    city: any;
    firstname: any;
    lastname: any;
    save_in_address_book: any;
}
export declare class MagentoCartAddressInputFactory extends DaffModelFactory<MagentoCartAddressInput> {
    constructor();
}
