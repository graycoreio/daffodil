import { DaffOrderShippingRate } from './order-shipping-rate';
import { DaffAddress } from '@daffodil/geography';
/**
 * @deprecated
 */
export interface DaffOrderAddress extends DaffAddress {
    address_id: number;
    quote_id: number;
    created_at: Date;
    updated_at: Date;
    customer_id: number;
    customer_address_id: number;
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
    region: string;
    region_id: number;
    postcode: string;
    country_id: string;
    telephone: string;
    fax: string;
    shipping_method?: string | null;
    shipping_description?: string | null;
    shipping_rate?: DaffOrderShippingRate | null;
}
