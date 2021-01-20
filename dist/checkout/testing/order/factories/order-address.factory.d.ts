import { DaffOrderAddress } from '@daffodil/checkout';
import { DaffModelFactory } from '@daffodil/core/testing';
/**
 * @deprecated
 */
export declare class MockOrderAddress implements DaffOrderAddress {
    address_id: any;
    quote_id: any;
    created_at: Date;
    updated_at: Date;
    customer_id: any;
    customer_address_id: any;
    address_type: string;
    email: string;
    prefix: string;
    firstname: string;
    middlename: string;
    lastname: string;
    suffix: string;
    company: string;
    street: string;
    city: string;
    state: string;
    region: string;
    region_id: any;
    postcode: string;
    country_id: string;
    telephone: string;
    fax: string;
    shipping_method: string;
    shipping_description: string;
    shipping_rate: any;
}
/**
 * @deprecated
 */
export declare class DaffOrderAddressFactory extends DaffModelFactory<DaffOrderAddress> {
    constructor();
}
