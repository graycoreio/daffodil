/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffOrderItemType = {
    Simple: 'simple',
    Composite: 'composite',
    Configurable: 'configurable',
};
/**
 * @record
 */
function DaffOrderItem() { }
if (false) {
    /** @type {?} */
    DaffOrderItem.prototype.type;
    /** @type {?} */
    DaffOrderItem.prototype.item_id;
    /** @type {?} */
    DaffOrderItem.prototype.qty_ordered;
    /** @type {?} */
    DaffOrderItem.prototype.qty_canceled;
    /** @type {?} */
    DaffOrderItem.prototype.qty_fulfilled;
    /** @type {?} */
    DaffOrderItem.prototype.image;
    /** @type {?} */
    DaffOrderItem.prototype.order_id;
    /** @type {?} */
    DaffOrderItem.prototype.created_at;
    /** @type {?} */
    DaffOrderItem.prototype.updated_at;
    /** @type {?} */
    DaffOrderItem.prototype.product_id;
    /** @type {?} */
    DaffOrderItem.prototype.parent_item_id;
    /** @type {?} */
    DaffOrderItem.prototype.sku;
    /** @type {?} */
    DaffOrderItem.prototype.name;
    /** @type {?} */
    DaffOrderItem.prototype.weight;
    /** @type {?} */
    DaffOrderItem.prototype.qty;
    /** @type {?} */
    DaffOrderItem.prototype.price;
    /** @type {?} */
    DaffOrderItem.prototype.discount_percent;
    /** @type {?} */
    DaffOrderItem.prototype.discount_amount;
    /** @type {?} */
    DaffOrderItem.prototype.tax_percent;
    /** @type {?} */
    DaffOrderItem.prototype.tax_amount;
    /** @type {?} */
    DaffOrderItem.prototype.row_total;
    /** @type {?} */
    DaffOrderItem.prototype.row_total_with_discount;
    /** @type {?} */
    DaffOrderItem.prototype.row_weight;
    /** @type {?} */
    DaffOrderItem.prototype.tax_before_discount;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffOrderTotalTypeEnum = {
    GrandTotal: 'grand_total',
    Subtotal: 'subtotal',
    Discount: 'discount',
    Tax: 'tax',
    Shipping: 'shipping',
};
/**
 * @record
 */
function DaffOrderTotal() { }
if (false) {
    /** @type {?} */
    DaffOrderTotal.prototype.label;
    /** @type {?} */
    DaffOrderTotal.prototype.value;
    /** @type {?} */
    DaffOrderTotal.prototype.sort_order;
    /** @type {?} */
    DaffOrderTotal.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffOrderItemType, DaffOrderTotalTypeEnum };
//# sourceMappingURL=daffodil-order.js.map
