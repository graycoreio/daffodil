export function cartTotalsResponseFactory() {
  return {
    grand_total: 0,
    base_grand_total: 0,
    subtotal: 0,
    base_subtotal: 0,
    discount_amount: 0,
    base_discount_amount: 0,
    subtotal_with_discount: 0,
    base_subtotal_with_discount: 0,
    shipping_amount: 0,
    base_shipping_amount: 0,
    shipping_discount_amount: 0,
    base_shipping_discount_amount: 0,
    tax_amount: 0,
    base_tax_amount: 0,
    weee_tax_applied_amount: 0,
    shipping_tax_amount: 0,
    base_shipping_tax_amount: 0,
    subtotal_incl_tax: 0,
    base_subtotal_incl_tax: 0,
    shipping_incl_tax: 0,
    base_shipping_incl_tax: 0,
    base_currency_code: '',
    quote_currency_code: '',
    coupon_code: '',
    items_qty: 0,
    items: [
      {
        item_id: 0,
        price: 0,
        base_price: 0,
        qty: 0,
        row_total: 0,
        base_row_total: 0,
        row_total_with_discount: 0,
        tax_amount: 0,
        base_tax_amount: 0,
        tax_percent: 0,
        discount_amount: 0,
        base_discount_amount: 0,
        discount_percent: 0,
        price_incl_tax: 0,
        base_price_incl_tax: 0,
        row_total_incl_tax: 0,
        base_row_total_incl_tax: 0,
        options: '',
        weee_tax_applied_amount: 0,
        weee_tax_applied: '',
        extension_attributes: {
          negotiable_quote_item_totals: {
            cost: 0,
            catalog_price: 0,
            base_catalog_price: 0,
            catalog_price_incl_tax: 0,
            base_catalog_price_incl_tax: 0,
            cart_price: 0,
            base_cart_price: 0,
            cart_tax: 0,
            base_cart_tax: 0,
            cart_price_incl_tax: 0,
            base_cart_price_incl_tax: 0,
            extension_attributes: {}
          }
        },
        name: ''
      }
    ],
    total_segments: [
      {
        code: '',
        title: '',
        value: 0,
        area: '',
        extension_attributes: {
          tax_grandtotal_details: [
            {
              amount: 0,
              rates: [
                {
                  percent: '',
                  title: ''
                }
              ],
              group_id: 0
            }
          ],
          gift_cards: '',
          gw_order_id: '',
          gw_item_ids: [
            ''
          ],
          gw_allow_gift_receipt: '',
          gw_add_card: '',
          gw_price: '',
          gw_base_price: '',
          gw_items_price: '',
          gw_items_base_price: '',
          gw_card_price: '',
          gw_card_base_price: '',
          gw_base_tax_amount: '',
          gw_tax_amount: '',
          gw_items_base_tax_amount: '',
          gw_items_tax_amount: '',
          gw_card_base_tax_amount: '',
          gw_card_tax_amount: '',
          gw_price_incl_tax: '',
          gw_base_price_incl_tax: '',
          gw_card_price_incl_tax: '',
          gw_card_base_price_incl_tax: '',
          gw_items_price_incl_tax: '',
          gw_items_base_price_incl_tax: '',
          vertex_tax_calculation_messages: [
            ''
          ]
        }
      }
    ],
    extension_attributes: {
      coupon_label: '',
      base_customer_balance_amount: 0,
      customer_balance_amount: 0,
      negotiable_quote_totals: {
        items_count: 0,
        quote_status: '',
        created_at: '',
        updated_at: '',
        customer_group: 0,
        base_to_quote_rate: 0,
        cost_total: 0,
        base_cost_total: 0,
        original_total: 0,
        base_original_total: 0,
        original_tax: 0,
        base_original_tax: 0,
        original_price_incl_tax: 0,
        base_original_price_incl_tax: 0,
        negotiated_price_type: 0,
        negotiated_price_value: 0
      },
      reward_points_balance: 0,
      reward_currency_amount: 0,
      base_reward_currency_amount: 0
    }
  }
}
