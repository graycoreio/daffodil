export function cartItemResponseFactory () {
  return {
    item_id: 0,
    sku: '',
    qty: 0,
    name: '',
    price: 0,
    product_type: '',
    quote_id: '',
    product_option: {
    extension_attributes: {
    custom_options: [
    {
    option_id: '',
    option_value: '',
    extension_attributes: {
    file_info: {
    base64_encoded_data: '',
    type: '',
    name: ''
    }
    }
    }
    ],
    bundle_options: [
    {
    option_id: 0,
    option_qty: 0,
    option_selections: [
    0
    ],
    extension_attributes: { }
    }
    ],
    configurable_item_options: [
    {
    option_id: '',
    option_value: 0,
    extension_attributes: { }
    }
    ],
    downloadable_option: {
    downloadable_links: [
    0
    ]
    },
    giftcard_item_option: {
    giftcard_amount: '',
    custom_giftcard_amount: 0,
    giftcard_sender_name: '',
    giftcard_recipient_name: '',
    giftcard_sender_email: '',
    giftcard_recipient_email: '',
    giftcard_message: '',
    extension_attributes: { }
    }
    }
    },
    extension_attributes: {
    negotiable_quote_item: {
    item_id: 0,
    original_price: 0,
    original_tax_amount: 0,
    original_discount_amount: 0,
    extension_attributes: { }
    }
    }
    }
}
