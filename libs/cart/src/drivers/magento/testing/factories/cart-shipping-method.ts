export function cartShippingMethodFactory () {
  return {
    carrier_code: '',
    method_code: '',
    carrier_title: '',
    method_title: '',
    amount: 0,
    base_amount: 0,
    available: true,
    extension_attributes: { },
    error_message: '',
    price_excl_tax: 0,
    price_incl_tax: 0
    }
}
