export function cartResponseFactory() {
  return {
    id: 0,
    created_at: '',
    updated_at: '',
    converted_at: '',
    is_active: true,
    is_virtual: true,
    items: [
      {
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
                extension_attributes: {}
              }
            ],
            configurable_item_options: [
              {
                option_id: '',
                option_value: 0,
                extension_attributes: {}
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
              extension_attributes: {}
            }
          }
        },
        extension_attributes: {
          negotiable_quote_item: {
            item_id: 0,
            original_price: 0,
            original_tax_amount: 0,
            original_discount_amount: 0,
            extension_attributes: {}
          }
        }
      }
    ],
    items_count: 0,
    items_qty: 0,
    customer: {
      id: 0,
      group_id: 0,
      default_billing: '',
      default_shipping: '',
      confirmation: '',
      created_at: '',
      updated_at: '',
      created_in: '',
      dob: '',
      email: '',
      firstname: '',
      lastname: '',
      middlename: '',
      prefix: '',
      suffix: '',
      gender: 0,
      store_id: 0,
      taxvat: '',
      website_id: 0,
      addresses: [
        {
          id: 0,
          customer_id: 0,
          region: {
            region_code: '',
            region: '',
            region_id: 0,
            extension_attributes: {}
          },
          region_id: 0,
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
          default_shipping: true,
          default_billing: true,
          extension_attributes: {},
          custom_attributes: [
            {
              attribute_code: '',
              value: ''
            }
          ]
        }
      ],
      disable_auto_group_change: 0,
      extension_attributes: {
        company_attributes: {
          customer_id: 0,
          company_id: 0,
          job_title: '',
          status: 0,
          telephone: '',
          extension_attributes: {}
        },
        is_subscribed: true,
        amazon_id: '',
        vertex_customer_code: ''
      },
      custom_attributes: [
        {
          attribute_code: '',
          value: ''
        }
      ]
    },
    billing_address: {
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
      ]
    },
    reserved_order_id: '',
    orig_order_id: 0,
    currency: {
      global_currency_code: '',
      base_currency_code: '',
      store_currency_code: '',
      quote_currency_code: '',
      store_to_base_rate: 0,
      store_to_quote_rate: 0,
      base_to_global_rate: 0,
      base_to_quote_rate: 0,
      extension_attributes: {}
    },
    customer_is_guest: true,
    customer_note: '',
    customer_note_notify: true,
    customer_tax_class_id: 0,
    store_id: 0,
    extension_attributes: {
      shipping_assignments: [
        {
          shipping: {
            address: {
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
              ]
            },
            method: '',
            extension_attributes: {}
          },
          items: [
            {
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
                      extension_attributes: {}
                    }
                  ],
                  configurable_item_options: [
                    {
                      option_id: '',
                      option_value: 0,
                      extension_attributes: {}
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
                    extension_attributes: {}
                  }
                }
              },
              extension_attributes: {
                negotiable_quote_item: {
                  item_id: 0,
                  original_price: 0,
                  original_tax_amount: 0,
                  original_discount_amount: 0,
                  extension_attributes: {}
                }
              }
            }
          ],
          extension_attributes: {}
        }
      ],
      negotiable_quote: {
        quote_id: 0,
        is_regular_quote: true,
        status: '',
        negotiated_price_type: 0,
        negotiated_price_value: 0,
        shipping_price: 0,
        quote_name: '',
        expiration_period: '',
        email_notification_status: 0,
        has_unconfirmed_changes: true,
        is_shipping_tax_changed: true,
        is_customer_price_changed: true,
        notifications: 0,
        applied_rule_ids: '',
        is_address_draft: true,
        deleted_sku: '',
        creator_id: 0,
        creator_type: 0,
        original_total_price: 0,
        base_original_total_price: 0,
        negotiated_total_price: 0,
        base_negotiated_total_price: 0,
        extension_attributes: {}
      },
      amazon_order_reference_id: {
        id: '',
        amazon_order_reference_id: '',
        quote_id: 0,
        sandbox_simulation_reference: '',
        confirmed: true
      }
    }
  }
}
