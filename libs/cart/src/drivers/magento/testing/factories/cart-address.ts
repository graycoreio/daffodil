import { cartShippingMethodFactory } from './cart-shipping-method';

export function cartAddressFactory () {
  return {
    id: 0,
    region: '',
    region_id: 0,
    region_code: '',
    country_id: '',
    street: [
    ''
    ],
    company: '',
    telephone: '',
    fax: '',
    postcode: '',
    city: '',
    firstname: '',
    lastname: '',
    middlename: '',
    prefix: '',
    suffix: '',
    vat_id: '',
    customer_id: 0,
    email: '',
    same_as_billing: 0,
    customer_address_id: 0,
    save_in_address_book: 0,
    extension_attributes: {
    gift_registry_id: 0,
    checkout_fields: [
    {
    attribute_code: '',
    value: ''
    }
    ]
    },
    custom_attributes: [
    {
    attribute_code: '',
    value: ''
    }
    ],
    method: cartShippingMethodFactory(),
    type: '',
  }
}
