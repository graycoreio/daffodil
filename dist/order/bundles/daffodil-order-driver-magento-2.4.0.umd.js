(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@daffodil/order'), require('graphql-tag'), require('@daffodil/core/graphql'), require('@angular/core'), require('apollo-angular'), require('rxjs'), require('rxjs/operators'), require('@daffodil/order/driver'), require('@daffodil/driver/magento'), require('@daffodil/cart/driver'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@daffodil/order/driver/magento/2.4.0', ['exports', '@daffodil/order', 'graphql-tag', '@daffodil/core/graphql', '@angular/core', 'apollo-angular', 'rxjs', 'rxjs/operators', '@daffodil/order/driver', '@daffodil/driver/magento', '@daffodil/cart/driver', '@angular/common'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.order = global.daffodil.order || {}, global.daffodil.order.driver = global.daffodil.order.driver || {}, global.daffodil.order.driver.magento = global.daffodil.order.driver.magento || {}, global.daffodil.order.driver.magento['2'] = global.daffodil.order.driver.magento['2'] || {}, global.daffodil.order.driver.magento['2']['4'] = global.daffodil.order.driver.magento['2']['4'] || {}, global.daffodil.order.driver.magento['2']['4']['0'] = {}), global.daffodil.order, global.gql, global.graphql, global.ng.core, global.apolloAngular, global.rxjs, global.rxjs.operators, global.daffodil.order.driver, global.magento, global.driver$1, global.ng.common));
}(this, function (exports, order, gql, graphql, core, apolloAngular, rxjs, operators, driver, magento, driver$1, common) { 'use strict';

    gql = gql && gql.hasOwnProperty('default') ? gql['default'] : gql;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} totals
     * @return {?}
     */
    function transformTotals(totals) {
        return [
            {
                label: 'Grand Total',
                type: order.DaffOrderTotalTypeEnum.GrandTotal,
                value: totals.grand_total,
                sort_order: 1
            },
            {
                label: 'Subtotal',
                type: order.DaffOrderTotalTypeEnum.Subtotal,
                value: totals.subtotal,
                sort_order: 0
            },
            {
                label: 'Shipping',
                type: order.DaffOrderTotalTypeEnum.Shipping,
                value: totals.shipping,
                sort_order: 2
            },
            {
                label: 'Tax',
                type: order.DaffOrderTotalTypeEnum.Tax,
                value: totals.tax,
                sort_order: 3
            },
            {
                label: 'Discount',
                type: order.DaffOrderTotalTypeEnum.Discount,
                value: totals.discount,
                sort_order: 4
            }
        ];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    function transformItem(item) {
        return {
            item_id: null,
            type: order.DaffOrderItemType.Simple,
            qty_ordered: item.qty_ordered,
            qty_canceled: item.qty_canceled,
            qty_fulfilled: item.qty_fulfilled,
            qty: item.qty,
            image: {
                url: item.image,
                id: null,
                label: null
            },
            order_id: Number(item.order_id),
            created_at: item.created_at,
            updated_at: item.updated_at,
            product_id: item.product_id,
            parent_item_id: null,
            sku: item.sku,
            name: item.name,
            weight: item.weight,
            price: item.price,
            discount_percent: item.discount_percent,
            discount_amount: item.discount_amount,
            tax_percent: item.tax_percent,
            tax_amount: item.tax_amount,
            row_total: item.row_total,
            row_total_with_discount: item.row_total_with_discount,
            row_weight: item.row_weight,
            tax_before_discount: item.tax_before_discount
        };
    }
    /**
     * @param {?} address
     * @return {?}
     */
    function transformAddress(address) {
        return {
            order_id: address.order_id,
            prefix: address.prefix,
            suffix: address.suffix,
            firstname: address.firstname,
            middlename: address.middlename,
            lastname: address.lastname,
            telephone: address.telephone,
            email: address.email,
            street: address.street[0],
            street2: address.street[1],
            city: address.city,
            region: address.region_id,
            country: address.country_code,
            postcode: address.postcode
        };
    }
    /**
     * @param {?} shipmentItem
     * @return {?}
     */
    function transformShipmentItem(shipmentItem) {
        return {
            item: transformItem(shipmentItem.item),
            qty: shipmentItem.qty
        };
    }
    /**
     * @param {?} tracking
     * @return {?}
     */
    function transformShipmentTracking(tracking) {
        return {
            tracking_number: tracking.tracking_number,
            tracking_url: null,
            carrier: tracking.carrier,
            title: tracking.title,
            carrier_logo: null,
        };
    }
    /**
     * @param {?} shipment
     * @return {?}
     */
    function transformShipment(shipment) {
        return {
            carrier: null,
            carrier_title: null,
            code: null,
            method: null,
            method_description: null,
            tracking: shipment.tracking.map(transformShipmentTracking),
            items: shipment.items.map(transformShipmentItem)
        };
    }
    /**
     * @param {?} payment
     * @return {?}
     */
    function transformPayment(payment) {
        return {
            payment_id: payment.payment_id,
            order_id: payment.order_id,
            created_at: null,
            updated_at: null,
            method: payment.method,
            cc_type: payment.cc_type,
            cc_last4: payment.cc_last4,
            cc_owner: payment.cc_owner,
            cc_exp_month: payment.cc_exp_month,
            cc_exp_year: payment.cc_exp_year
        };
    }
    /**
     * @param {?} invoice
     * @return {?}
     */
    function transformInvoice(invoice) {
        return {
            totals: transformTotals(invoice),
            billing_address: transformAddress(invoice.billing_address),
            shipping_address: transformAddress(invoice.shipping_address),
            payment: transformPayment(invoice.payment),
            items: invoice.items.map(transformShipmentItem),
            shipping_method: null
        };
    }
    /**
     * Transforms the MagentoGraycoreOrder from the magento order query into a DaffOrder.
     * @param {?} order
     * @return {?}
     */
    function daffMagentoTransformOrder(order) {
        return {
            extra_attributes: order,
            id: order.order_number,
            customer_id: order.customer_id,
            created_at: order.created_at,
            updated_at: order.updated_at,
            status: order.status,
            totals: transformTotals(order),
            applied_codes: order.applied_codes.map((/**
             * @param {?} code
             * @return {?}
             */
            function (code) { return ({ code: code }); })),
            items: order.items.map(transformItem),
            billing_addresses: [
                transformAddress(order.billing_address)
            ],
            shipping_addresses: [
                transformAddress(order.shipping_address)
            ],
            shipments: order.shipments.map(transformShipment),
            payment: transformPayment(order.payment),
            invoices: order.invoices.map(transformInvoice),
            credits: order.credits.map(transformInvoice),
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderItemFragment = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment orderItem on GraycoreOrderItem {\n    qty_ordered\n    image\n    qty_canceled\n    qty_fulfilled\n    order_id\n    created_at\n    updated_at\n    product_id\n    sku\n    name\n    weight\n    qty\n    price\n    discount_percent\n    discount_amount\n    tax_percent\n    tax_amount\n    row_total\n    row_total_with_discount\n    row_weight\n    tax_before_discount\n  }\n"], ["\n  fragment orderItem on GraycoreOrderItem {\n    qty_ordered\n    image\n    qty_canceled\n    qty_fulfilled\n    order_id\n    created_at\n    updated_at\n    product_id\n    sku\n    name\n    weight\n    qty\n    price\n    discount_percent\n    discount_amount\n    tax_percent\n    tax_amount\n    row_total\n    row_total_with_discount\n    row_weight\n    tax_before_discount\n  }\n"])));
    var templateObject_1;

    var __makeTemplateObject$1 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderAddressFragment = gql(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject$1(["\n  fragment orderAddress on GraycoreOrderAddress {\n    order_id\n    prefix\n    suffix\n    firstname\n    middlename\n    lastname\n    telephone\n    email\n    street\n    city\n    region\n    region_id\n    country_code\n    postcode\n  }\n"], ["\n  fragment orderAddress on GraycoreOrderAddress {\n    order_id\n    prefix\n    suffix\n    firstname\n    middlename\n    lastname\n    telephone\n    email\n    street\n    city\n    region\n    region_id\n    country_code\n    postcode\n  }\n"])));
    var templateObject_1$1;

    var __makeTemplateObject$2 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderShipmentItemFragment = gql(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject$2(["\n  fragment orderShipmentItem on GraycoreOrderShipmentItem {\n    qty\n    item {\n      ...orderItem\n    }\n  }\n  ", "\n"], ["\n  fragment orderShipmentItem on GraycoreOrderShipmentItem {\n    qty\n    item {\n      ...orderItem\n    }\n  }\n  ", "\n"])), orderItemFragment);
    var templateObject_1$2;

    var __makeTemplateObject$3 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderShipmentTrackingFragment = gql(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject$3(["\n  fragment orderShipmentTracking on GraycoreOrderShipmentTracking {\n    tracking_number\n    carrier\n    title\n  }\n"], ["\n  fragment orderShipmentTracking on GraycoreOrderShipmentTracking {\n    tracking_number\n    carrier\n    title\n  }\n"])));
    var templateObject_1$3;

    var __makeTemplateObject$4 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderShipmentFragment = gql(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject$4(["\n  fragment orderShipment on GraycoreOrderShipment {\n    tracking {\n      ...orderShipmentTracking\n    }\n    items {\n      ...orderShipmentItem\n    }\n  }\n  ", "\n  ", "\n"], ["\n  fragment orderShipment on GraycoreOrderShipment {\n    tracking {\n      ...orderShipmentTracking\n    }\n    items {\n      ...orderShipmentItem\n    }\n  }\n  ", "\n  ", "\n"])), orderShipmentItemFragment, orderShipmentTrackingFragment);
    var templateObject_1$4;

    var __makeTemplateObject$5 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderPaymentFragment = gql(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject$5(["\n  fragment orderPayment on GraycoreOrderPayment {\n    payment_id\n    order_id\n    method\n    cc_type\n    cc_last4\n    cc_owner\n    cc_exp_month\n    cc_exp_year\n  }\n"], ["\n  fragment orderPayment on GraycoreOrderPayment {\n    payment_id\n    order_id\n    method\n    cc_type\n    cc_last4\n    cc_owner\n    cc_exp_month\n    cc_exp_year\n  }\n"])));
    var templateObject_1$5;

    var __makeTemplateObject$6 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderInvoiceFragment = gql(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject$6(["\n  fragment orderInvoice on GraycoreOrderInvoice {\n    items {\n      ...orderShipmentItem\n    }\n    grand_total\n    subtotal\n    shipping\n    discount\n    tax\n    billing_address {\n      ...orderAddress\n    }\n    shipping_address {\n      ...orderAddress\n\t\t}\n\t\tpayment {\n\t\t\t...orderPayment\n\t\t}\n  }\n  ", "\n  ", "\n  ", "\n"], ["\n  fragment orderInvoice on GraycoreOrderInvoice {\n    items {\n      ...orderShipmentItem\n    }\n    grand_total\n    subtotal\n    shipping\n    discount\n    tax\n    billing_address {\n      ...orderAddress\n    }\n    shipping_address {\n      ...orderAddress\n\t\t}\n\t\tpayment {\n\t\t\t...orderPayment\n\t\t}\n  }\n  ", "\n  ", "\n  ", "\n"])), orderShipmentItemFragment, orderAddressFragment, orderPaymentFragment);
    var templateObject_1$6;

    var __makeTemplateObject$7 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderFragment = gql(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject$7(["\n  fragment order on GraycoreOrder {\n    id\n    order_number\n    customer_id\n    created_at\n    updated_at\n    grand_total\n    subtotal\n    shipping\n    discount\n    tax\n    status\n    applied_codes\n    items {\n      ...orderItem\n    }\n    billing_address {\n      ...orderAddress\n    }\n    shipping_address {\n      ...orderAddress\n    }\n    shipments {\n      ...orderShipment\n    }\n    payment {\n      ...orderPayment\n    }\n    invoices {\n      ...orderInvoice\n    }\n    credits {\n      ...orderInvoice\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  fragment order on GraycoreOrder {\n    id\n    order_number\n    customer_id\n    created_at\n    updated_at\n    grand_total\n    subtotal\n    shipping\n    discount\n    tax\n    status\n    applied_codes\n    items {\n      ...orderItem\n    }\n    billing_address {\n      ...orderAddress\n    }\n    shipping_address {\n      ...orderAddress\n    }\n    shipments {\n      ...orderShipment\n    }\n    payment {\n      ...orderPayment\n    }\n    invoices {\n      ...orderInvoice\n    }\n    credits {\n      ...orderInvoice\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), orderItemFragment, orderShipmentFragment, orderPaymentFragment, orderInvoiceFragment, orderAddressFragment);
    var templateObject_1$7;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var __makeTemplateObject$8 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    var __read = (this && this.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread = (this && this.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
        return ar;
    };
    /** @type {?} */
    var getGuestOrders = (/**
     * @param {?=} extraOrderFragments
     * @return {?}
     */
    function (extraOrderFragments) {
        if (extraOrderFragments === void 0) { extraOrderFragments = []; }
        return gql(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject$8(["\n  query GetGuestOrders($cartId: String!) {\n    graycoreGuestOrders(cartId: $cartId) {\n      orders {\n        ...order\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query GetGuestOrders($cartId: String!) {\n    graycoreGuestOrders(cartId: $cartId) {\n      orders {\n        ...order\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), graphql.daffBuildFragmentNameSpread.apply(void 0, __spread(extraOrderFragments)), orderFragment, graphql.daffBuildFragmentDefinition.apply(void 0, __spread(extraOrderFragments)));
    });
    var templateObject_1$8;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * An multi-provider injection token for providing extra GraphQL fragments that will be spread into order queries.
     * This can be used to retrieve additional data that is not covered by the standard Daffodil interfaces.
     * The data will appear in DaffOrder#extra_attributes.
     *
     * Fragment structure is platform-specific and this feature should be used with care.
     * @type {?}
     */
    var DaffMagentoExtraOrderFragments = new core.InjectionToken('DaffMagentoExtraOrderFragments', { factory: (/**
         * @return {?}
         */
        function () { return []; }) });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var validateGetOrdersResponse = (/**
     * @param {?} response
     * @return {?}
     */
    function (response) {
        if (response.data.graycoreGuestOrders.orders) {
            if (response.data.graycoreGuestOrders.orders.reduce((/**
             * @param {?} acc
             * @param {?} order
             * @return {?}
             */
            function (acc, order) { return acc && !!(order.billing_address
                && order.shipping_address
                && order.payment); }), true)) {
                return response;
            }
            else {
                throw new driver.DaffOrderInvalidAPIResponseError('One of the orders does not contain required fields.');
            }
        }
        else {
            throw new driver.DaffOrderInvalidAPIResponseError('Get orders response does not contain a valid list of orders.');
        }
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var MagentoOrderGraphQlErrorCode = {
        CART_NOT_FOUND: 'graphql-no-such-entity',
    };

    var _a;
    /** @type {?} */
    var DaffOrderMagentoErrorMap = (_a = {},
        _a[MagentoOrderGraphQlErrorCode.CART_NOT_FOUND] = driver$1.DaffCartNotFoundError,
        _a);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} error
     * @return {?}
     */
    function transformMagentoOrderError(error) {
        return magento.daffTransformMagentoError(error, DaffOrderMagentoErrorMap);
    }

    var __values = (this && this.__values) || function (o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    };
    /**
     * A service for making Magento GraphQL queries for orders.
     */
    var DaffOrderMagentoService = /** @class */ (function () {
        function DaffOrderMagentoService(apollo, extraOrderFragments) {
            this.apollo = apollo;
            this.extraOrderFragments = extraOrderFragments;
        }
        /**
         * @param {?=} cartId
         * @return {?}
         */
        DaffOrderMagentoService.prototype.list = /**
         * @param {?=} cartId
         * @return {?}
         */
        function (cartId) {
            return this.apollo.query({
                query: getGuestOrders(this.extraOrderFragments),
                variables: {
                    cartId: cartId
                }
            }).pipe(operators.map(validateGetOrdersResponse), operators.map((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return result.data.graycoreGuestOrders.orders.map(daffMagentoTransformOrder); })), operators.catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) { return rxjs.throwError(transformMagentoOrderError(err)); })));
        };
        /**
         * @param {?} orderId
         * @param {?=} cartId
         * @return {?}
         */
        DaffOrderMagentoService.prototype.get = /**
         * @param {?} orderId
         * @param {?=} cartId
         * @return {?}
         */
        function (orderId, cartId) {
            return this.list(cartId).pipe(operators.map((/**
             * @param {?} orders
             * @return {?}
             */
            function (orders) {
                var e_1, _a;
                try {
                    for (var orders_1 = __values(orders), orders_1_1 = orders_1.next(); !orders_1_1.done; orders_1_1 = orders_1.next()) {
                        var order = orders_1_1.value;
                        if (String(order.id) === String(orderId)) {
                            return order;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (orders_1_1 && !orders_1_1.done && (_a = orders_1.return)) _a.call(orders_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                // order not found
                throw new driver.DaffOrderNotFoundError("Could not find an order with ID " + orderId);
            })));
        };
        DaffOrderMagentoService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffOrderMagentoService.ctorParameters = function () { return [
            { type: apolloAngular.Apollo },
            { type: Array, decorators: [{ type: core.Inject, args: [DaffMagentoExtraOrderFragments,] }] }
        ]; };
        /** @nocollapse */ DaffOrderMagentoService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffOrderMagentoService_Factory() { return new DaffOrderMagentoService(core.ɵɵinject(apolloAngular.Apollo), core.ɵɵinject(DaffMagentoExtraOrderFragments)); }, token: DaffOrderMagentoService, providedIn: "root" });
        return DaffOrderMagentoService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffOrderMagentoService.prototype.apollo;
        /** @type {?} */
        DaffOrderMagentoService.prototype.extraOrderFragments;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DaffOrderMagentoDriverModule = /** @class */ (function () {
        function DaffOrderMagentoDriverModule() {
        }
        /**
         * @return {?}
         */
        DaffOrderMagentoDriverModule.forRoot = /**
         * @return {?}
         */
        function () {
            return {
                ngModule: DaffOrderMagentoDriverModule,
                providers: [
                    {
                        provide: driver.DaffOrderDriver,
                        useExisting: DaffOrderMagentoService
                    },
                ]
            };
        };
        DaffOrderMagentoDriverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ]
                    },] }
        ];
        return DaffOrderMagentoDriverModule;
    }());

    exports.DaffMagentoExtraOrderFragments = DaffMagentoExtraOrderFragments;
    exports.DaffOrderMagentoDriverModule = DaffOrderMagentoDriverModule;
    exports.DaffOrderMagentoService = DaffOrderMagentoService;
    exports.daffMagentoTransformOrder = daffMagentoTransformOrder;
    exports.getGuestOrders = getGuestOrders;
    exports.orderAddressFragment = orderAddressFragment;
    exports.orderFragment = orderFragment;
    exports.orderInvoiceFragment = orderInvoiceFragment;
    exports.orderItemFragment = orderItemFragment;
    exports.orderPaymentFragment = orderPaymentFragment;
    exports.orderShipmentFragment = orderShipmentFragment;
    exports.orderShipmentItemFragment = orderShipmentItemFragment;
    exports.orderShipmentTrackingFragment = orderShipmentTrackingFragment;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-order-driver-magento-2.4.0.umd.js.map
