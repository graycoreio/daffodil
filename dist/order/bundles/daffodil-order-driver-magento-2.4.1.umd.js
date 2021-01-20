(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@daffodil/core'), require('@daffodil/order'), require('graphql-tag'), require('@daffodil/core/graphql'), require('@angular/core'), require('apollo-angular'), require('rxjs'), require('rxjs/operators'), require('@daffodil/order/driver'), require('@daffodil/driver/magento'), require('@daffodil/cart/driver'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@daffodil/order/driver/magento/2.4.1', ['exports', '@daffodil/core', '@daffodil/order', 'graphql-tag', '@daffodil/core/graphql', '@angular/core', 'apollo-angular', 'rxjs', 'rxjs/operators', '@daffodil/order/driver', '@daffodil/driver/magento', '@daffodil/cart/driver', '@angular/common'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.order = global.daffodil.order || {}, global.daffodil.order.driver = global.daffodil.order.driver || {}, global.daffodil.order.driver.magento = global.daffodil.order.driver.magento || {}, global.daffodil.order.driver.magento['2'] = global.daffodil.order.driver.magento['2'] || {}, global.daffodil.order.driver.magento['2']['4'] = global.daffodil.order.driver.magento['2']['4'] || {}, global.daffodil.order.driver.magento['2']['4']['1'] = {}), global.core, global.daffodil.order, global.gql, global.graphql, global.ng.core, global.apolloAngular, global.rxjs, global.rxjs.operators, global.daffodil.order.driver, global.magento, global.driver$1, global.ng.common));
}(this, function (exports, core, order, gql, graphql, core$1, apolloAngular, rxjs, operators, driver, magento, driver$1, common) { 'use strict';

    gql = gql && gql.hasOwnProperty('default') ? gql['default'] : gql;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var MagentoOrderItemType = {
        Simple: 'simple',
        Configurable: 'configurable',
        Bundle: 'bundle',
    };
    ;
    /**
     * @record
     */
    function MagentoOrderItemOption() { }
    if (false) {
        /** @type {?} */
        MagentoOrderItemOption.prototype.label;
        /** @type {?} */
        MagentoOrderItemOption.prototype.value;
    }
    ;
    /**
     * @record
     */
    function MagentoOrderItem() { }
    if (false) {
        /** @type {?} */
        MagentoOrderItem.prototype.id;
        /** @type {?} */
        MagentoOrderItem.prototype.discounts;
        /** @type {?} */
        MagentoOrderItem.prototype.product_name;
        /** @type {?} */
        MagentoOrderItem.prototype.product_sale_price;
        /** @type {?} */
        MagentoOrderItem.prototype.product_sku;
        /** @type {?} */
        MagentoOrderItem.prototype.product_type;
        /** @type {?} */
        MagentoOrderItem.prototype.product_url_key;
        /** @type {?} */
        MagentoOrderItem.prototype.quantity_canceled;
        /** @type {?} */
        MagentoOrderItem.prototype.quantity_invoiced;
        /** @type {?} */
        MagentoOrderItem.prototype.quantity_ordered;
        /** @type {?} */
        MagentoOrderItem.prototype.quantity_refunded;
        /** @type {?} */
        MagentoOrderItem.prototype.quantity_returned;
        /** @type {?} */
        MagentoOrderItem.prototype.quantity_shipped;
        /** @type {?} */
        MagentoOrderItem.prototype.selected_options;
        /** @type {?} */
        MagentoOrderItem.prototype.entered_options;
        /** @type {?} */
        MagentoOrderItem.prototype.status;
    }
    /**
     * @record
     */
    function MagentoOrderBundleItemSelectedOption() { }
    if (false) {
        /** @type {?} */
        MagentoOrderBundleItemSelectedOption.prototype.id;
        /** @type {?} */
        MagentoOrderBundleItemSelectedOption.prototype.label;
        /** @type {?} */
        MagentoOrderBundleItemSelectedOption.prototype.values;
    }
    ;
    /**
     * @record
     */
    function MagentoOrderBundleItemSelectedOptionValue() { }
    if (false) {
        /** @type {?} */
        MagentoOrderBundleItemSelectedOptionValue.prototype.id;
        /** @type {?} */
        MagentoOrderBundleItemSelectedOptionValue.prototype.price;
        /** @type {?} */
        MagentoOrderBundleItemSelectedOptionValue.prototype.product_name;
        /** @type {?} */
        MagentoOrderBundleItemSelectedOptionValue.prototype.product_sku;
        /** @type {?} */
        MagentoOrderBundleItemSelectedOptionValue.prototype.quantity;
    }
    ;
    /**
     * @record
     */
    function MagentoOrderBundleItem() { }
    if (false) {
        /** @type {?} */
        MagentoOrderBundleItem.prototype.bundle_options;
    }
    ;

    var __assign = (this && this.__assign) || function () {
        __assign = Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    /**
     * @param {?} totals
     * @return {?}
     */
    function transformTotals(totals) {
        return [
            {
                label: 'Grand Total',
                type: order.DaffOrderTotalTypeEnum.GrandTotal,
                value: totals.grand_total.value,
                sort_order: 1
            },
            {
                label: 'Subtotal',
                type: order.DaffOrderTotalTypeEnum.Subtotal,
                value: totals.subtotal.value,
                sort_order: 0
            },
            {
                label: 'Shipping',
                type: order.DaffOrderTotalTypeEnum.Shipping,
                value: totals.total_shipping.value,
                sort_order: 2
            },
            {
                label: 'Tax',
                type: order.DaffOrderTotalTypeEnum.Tax,
                value: totals.total_tax.value,
                sort_order: 3
            },
            {
                label: 'Discount',
                type: order.DaffOrderTotalTypeEnum.Discount,
                value: totals.discounts.reduce((/**
                 * @param {?} acc
                 * @param {?} discount
                 * @return {?}
                 */
                function (acc, discount) { return core.daffAdd(acc, discount.amount.value); }), 0),
                sort_order: 4
            }
        ];
    }
    /**
     * @param {?} discount
     * @return {?}
     */
    function transformCouponDiscount(discount) {
        return {
            code: discount.label,
        };
    }
    /**
     * @param {?} option
     * @return {?}
     */
    function transformConfigurableOption(option) {
        return {
            attribute_label: option.label,
            value_label: option.value
        };
    }
    /**
     * @param {?} option
     * @return {?}
     */
    function transformBundleOption(option) {
        return {
            option_label: option.label,
            value_label: option.values && option.values[0] && option.values[0].product_name
        };
    }
    /**
     * @param {?} item
     * @return {?}
     */
    function transformAdditionalItemFields(item) {
        switch (item.product_type) {
            case MagentoOrderItemType.Bundle:
                return {
                    type: order.DaffOrderItemType.Composite,
                    options: ((/** @type {?} */ (item))).bundle_options.map(transformBundleOption)
                };
            case MagentoOrderItemType.Configurable:
                return {
                    type: order.DaffOrderItemType.Configurable,
                    attributes: item.selected_options.map(transformConfigurableOption)
                };
            case MagentoOrderItemType.Simple:
                return {
                    type: order.DaffOrderItemType.Simple
                };
            default:
                return {};
        }
    }
    /**
     * @param {?} item
     * @param {?} order
     * @param {?} qty
     * @return {?}
     */
    function transformItem(item, order$1, qty) {
        /** @type {?} */
        var discount = item.discounts.reduce((/**
         * @param {?} acc
         * @param {?} d
         * @return {?}
         */
        function (acc, d) { return core.daffAdd(acc, d.amount.value); }), 0);
        /** @type {?} */
        var rowTotal = qty * item.product_sale_price.value;
        /** @type {?} */
        var rowTotalWithDiscount = qty * core.daffSubtract(item.product_sale_price.value, discount);
        return __assign({ type: order.DaffOrderItemType.Simple, item_id: null, qty_ordered: item.quantity_ordered, qty_canceled: item.quantity_canceled, qty_fulfilled: item.quantity_shipped, qty: qty, image: {
                url: item.product_url_key,
                id: null,
                label: null
            }, order_id: order$1.id, created_at: null, updated_at: null, product_id: null, parent_item_id: null, sku: item.product_sku, name: item.product_name, weight: null, price: item.product_sale_price.value, discount_percent: Math.floor(discount / item.product_sale_price.value * 100), discount_amount: discount, tax_percent: null, tax_amount: null, row_total: rowTotal, row_total_with_discount: rowTotalWithDiscount, row_weight: null, tax_before_discount: null }, transformAdditionalItemFields(item));
    }
    /**
     * @param {?} address
     * @param {?} order
     * @return {?}
     */
    function transformAddress(address, order) {
        return {
            order_id: order.id,
            prefix: address.prefix,
            suffix: address.suffix,
            firstname: address.firstname,
            middlename: address.middlename,
            lastname: address.lastname,
            telephone: address.telephone,
            email: null,
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
     * @param {?} order
     * @return {?}
     */
    function transformShipmentItem(shipmentItem, order) {
        return {
            item: transformItem(shipmentItem.order_item, order, shipmentItem.quantity_shipped),
            qty: shipmentItem.quantity_shipped
        };
    }
    /**
     * @param {?} tracking
     * @return {?}
     */
    function transformShipmentTracking(tracking) {
        return {
            tracking_number: tracking.number,
            tracking_url: null,
            carrier: tracking.carrier,
            title: tracking.title,
            carrier_logo: null,
        };
    }
    /**
     * @param {?} shipment
     * @param {?} order
     * @return {?}
     */
    function transformShipment(shipment, order) {
        return {
            carrier: order.carrier,
            carrier_title: null,
            code: null,
            method: order.shipping_method,
            method_description: null,
            tracking: shipment.tracking.map(transformShipmentTracking),
            items: shipment.items.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return transformShipmentItem(item, order); }))
        };
    }
    /**
     * @param {?} payment
     * @param {?} order
     * @return {?}
     */
    function transformPayment(payment, order) {
        /** @type {?} */
        var findAdditionalData = (/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var index = payment.additional_data.findIndex((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var name = _a.name;
                return name === key;
            }));
            return index > -1 ? payment.additional_data[index].value : null;
        });
        return {
            payment_id: null,
            order_id: order.id,
            created_at: null,
            updated_at: null,
            method: payment.type,
            cc_type: findAdditionalData('cc_type'),
            cc_last4: findAdditionalData('cc_last4'),
            cc_owner: findAdditionalData('cc_owner'),
            cc_exp_month: findAdditionalData('cc_exp_month'),
            cc_exp_year: findAdditionalData('cc_exp_year')
        };
    }
    /**
     * @param {?} invoiceItem
     * @param {?} order
     * @return {?}
     */
    function transformInvoiceItem(invoiceItem, order) {
        return {
            item: transformItem(invoiceItem.order_item, order, invoiceItem.quantity_invoiced),
            qty: invoiceItem.quantity_invoiced
        };
    }
    /**
     * @param {?} invoice
     * @param {?} order
     * @param {?} payment
     * @return {?}
     */
    function transformInvoice(invoice, order, payment) {
        return {
            totals: transformTotals(invoice.total),
            billing_address: transformAddress(order.billing_address, order),
            shipping_address: transformAddress(order.shipping_address, order),
            payment: transformPayment(payment, order),
            items: invoice.items.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return transformInvoiceItem(item, order); })),
            shipping_method: null
        };
    }
    /**
     * @param {?} creditItem
     * @param {?} order
     * @return {?}
     */
    function transformCreditItem(creditItem, order) {
        return {
            item: transformItem(creditItem.order_item, order, creditItem.quantity_refunded),
            qty: creditItem.quantity_refunded
        };
    }
    /**
     * @param {?} credit
     * @param {?} order
     * @return {?}
     */
    function transformCredit(credit, order) {
        return {
            totals: transformTotals(credit.total),
            billing_address: transformAddress(order.billing_address, order),
            shipping_address: transformAddress(order.shipping_address, order),
            payment: transformPayment(order.payment_methods[0], order),
            items: credit.items.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return transformCreditItem(item, order); })),
            shipping_method: null
        };
    }
    /**
     * Transforms the MagentoOrder from the magento order query into a DaffOrder.
     * @param {?} order
     * @return {?}
     */
    function daffMagentoTransformOrder(order) {
        return {
            extra_attributes: order,
            id: order.number,
            customer_id: null,
            updated_at: null,
            created_at: order.order_date,
            status: order.status,
            totals: transformTotals(order.total),
            applied_codes: order.total.discounts.map(transformCouponDiscount),
            items: order.items.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return transformItem(item, order, item.quantity_ordered); })),
            billing_addresses: [
                transformAddress(order.billing_address, order)
            ],
            shipping_addresses: [
                transformAddress(order.shipping_address, order)
            ],
            shipments: order.shipments.map((/**
             * @param {?} shipment
             * @return {?}
             */
            function (shipment) { return transformShipment(shipment, order); })),
            payment: transformPayment(order.payment_methods[0], order),
            // TODO: find out if the index is the correct payment for invoice
            invoices: order.invoices.map((/**
             * @param {?} invoice
             * @param {?} index
             * @return {?}
             */
            function (invoice, index) { return transformInvoice(invoice, order, order.payment_methods[index]); })),
            credits: order.credit_memos.map((/**
             * @param {?} credit
             * @return {?}
             */
            function (credit) { return transformCredit(credit, order); })),
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function MagentoOrderInvoiceItem() { }
    if (false) {
        /** @type {?} */
        MagentoOrderInvoiceItem.prototype.order_item;
        /** @type {?} */
        MagentoOrderInvoiceItem.prototype.quantity_invoiced;
    }
    ;
    /**
     * @record
     */
    function MagentoOrderInvoiceBundleItem() { }
    if (false) {
        /** @type {?} */
        MagentoOrderInvoiceBundleItem.prototype.bundle_options;
    }
    ;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function MagentoOrderShipmentItem() { }
    if (false) {
        /** @type {?} */
        MagentoOrderShipmentItem.prototype.order_item;
        /** @type {?} */
        MagentoOrderShipmentItem.prototype.quantity_shipped;
    }
    ;
    /**
     * @record
     */
    function MagentoOrderShipmentBundleItem() { }
    if (false) {
        /** @type {?} */
        MagentoOrderShipmentBundleItem.prototype.bundle_options;
    }
    ;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderBundleItemSelectedOptionFragment = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment orderBundleItemSelectedOption on ItemSelectedBundleOption {\n    __typename\n    id\n    label\n    values {\n      __typename\n      id\n      product_name\n    }\n  }\n"], ["\n  fragment orderBundleItemSelectedOption on ItemSelectedBundleOption {\n    __typename\n    id\n    label\n    values {\n      __typename\n      id\n      product_name\n    }\n  }\n"])));
    /** @type {?} */
    var orderItemFragment = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  fragment orderItem on OrderItemInterface {\n    __typename\n    id\n    quantity_ordered\n    quantity_canceled\n    quantity_shipped\n    quantity_invoiced\n    product_url_key\n    product_sku\n    product_name\n    product_type\n    product_sale_price {\n      value\n    }\n    discounts {\n      amount {\n        value\n      }\n    }\n    selected_options {\n      label\n      value\n    }\n    ... on BundleOrderItem {\n      bundle_options {\n        ...orderBundleItemSelectedOption\n      }\n    }\n  }\n  ", "\n"], ["\n  fragment orderItem on OrderItemInterface {\n    __typename\n    id\n    quantity_ordered\n    quantity_canceled\n    quantity_shipped\n    quantity_invoiced\n    product_url_key\n    product_sku\n    product_name\n    product_type\n    product_sale_price {\n      value\n    }\n    discounts {\n      amount {\n        value\n      }\n    }\n    selected_options {\n      label\n      value\n    }\n    ... on BundleOrderItem {\n      bundle_options {\n        ...orderBundleItemSelectedOption\n      }\n    }\n  }\n  ", "\n"])), orderBundleItemSelectedOptionFragment);
    var templateObject_1, templateObject_2;

    var __makeTemplateObject$1 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderAddressFragment = gql(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject$1(["\n  fragment orderAddress on OrderAddress {\n    __typename\n    city\n    company\n    country_code\n    fax\n    firstname\n    middlename\n    lastname\n    postcode\n    prefix\n    region\n    region_id\n    street\n    suffix\n    telephone\n  }\n"], ["\n  fragment orderAddress on OrderAddress {\n    __typename\n    city\n    company\n    country_code\n    fax\n    firstname\n    middlename\n    lastname\n    postcode\n    prefix\n    region\n    region_id\n    street\n    suffix\n    telephone\n  }\n"])));
    var templateObject_1$1;

    var __makeTemplateObject$2 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderShipmentItemFragment = gql(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject$2(["\n  fragment orderShipmentItem on ShipmentItemInterface {\n    __typename\n    id\n    quantity_shipped\n    order_item {\n      ...orderItem\n    }\n  }\n  ", "\n"], ["\n  fragment orderShipmentItem on ShipmentItemInterface {\n    __typename\n    id\n    quantity_shipped\n    order_item {\n      ...orderItem\n    }\n  }\n  ", "\n"])), orderItemFragment);
    var templateObject_1$2;

    var __makeTemplateObject$3 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderShipmentTrackingFragment = gql(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject$3(["\n  fragment orderShipmentTracking on ShipmentTracking {\n    __typename\n    number\n    carrier\n    title\n  }\n"], ["\n  fragment orderShipmentTracking on ShipmentTracking {\n    __typename\n    number\n    carrier\n    title\n  }\n"])));
    var templateObject_1$3;

    var __makeTemplateObject$4 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderShipmentFragment = gql(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject$4(["\n  fragment orderShipment on OrderShipment {\n    __typename\n    id\n    tracking {\n      ...orderShipmentTracking\n    }\n    items {\n      ...orderShipmentItem\n    }\n  }\n  ", "\n  ", "\n"], ["\n  fragment orderShipment on OrderShipment {\n    __typename\n    id\n    tracking {\n      ...orderShipmentTracking\n    }\n    items {\n      ...orderShipmentItem\n    }\n  }\n  ", "\n  ", "\n"])), orderShipmentItemFragment, orderShipmentTrackingFragment);
    var templateObject_1$4;

    var __makeTemplateObject$5 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderPaymentFragment = gql(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject$5(["\n  fragment orderPayment on OrderPaymentMethod {\n    __typename\n    name\n    type\n    additional_data {\n      name\n      value\n    }\n  }\n"], ["\n  fragment orderPayment on OrderPaymentMethod {\n    __typename\n    name\n    type\n    additional_data {\n      name\n      value\n    }\n  }\n"])));
    var templateObject_1$5;

    var __makeTemplateObject$6 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderInvoiceItemFragment = gql(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject$6(["\n  fragment orderInvoiceItem on InvoiceItemInterface {\n    __typename\n    id\n    quantity_invoiced\n    order_item {\n      ...orderItem\n    }\n  }\n  ", "\n"], ["\n  fragment orderInvoiceItem on InvoiceItemInterface {\n    __typename\n    id\n    quantity_invoiced\n    order_item {\n      ...orderItem\n    }\n  }\n  ", "\n"])), orderItemFragment);
    var templateObject_1$6;

    var __makeTemplateObject$7 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderInvoiceTotalFragment = gql(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject$7(["\n  fragment orderInvoiceTotal on InvoiceTotal {\n    __typename\n    discounts {\n      amount {\n        value\n      }\n      label\n    }\n    grand_total {\n      value\n    }\n    subtotal {\n      value\n    }\n    total_tax {\n      value\n    }\n    total_shipping {\n      value\n    }\n  }\n"], ["\n  fragment orderInvoiceTotal on InvoiceTotal {\n    __typename\n    discounts {\n      amount {\n        value\n      }\n      label\n    }\n    grand_total {\n      value\n    }\n    subtotal {\n      value\n    }\n    total_tax {\n      value\n    }\n    total_shipping {\n      value\n    }\n  }\n"])));
    var templateObject_1$7;

    var __makeTemplateObject$8 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderInvoiceFragment = gql(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject$8(["\n  fragment orderInvoice on Invoice {\n    __typename\n    id\n    items {\n      ...orderInvoiceItem\n    }\n    total {\n      ...orderInvoiceTotal\n    }\n  }\n  ", "\n  ", "\n"], ["\n  fragment orderInvoice on Invoice {\n    __typename\n    id\n    items {\n      ...orderInvoiceItem\n    }\n    total {\n      ...orderInvoiceTotal\n    }\n  }\n  ", "\n  ", "\n"])), orderInvoiceItemFragment, orderInvoiceTotalFragment);
    var templateObject_1$8;

    var __makeTemplateObject$9 = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderCreditItemFragment = gql(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject$9(["\n  fragment orderCreditItem on CreditMemoItemInterface {\n    __typename\n    id\n    quantity_refunded\n    order_item {\n      ...orderItem\n    }\n  }\n  ", "\n"], ["\n  fragment orderCreditItem on CreditMemoItemInterface {\n    __typename\n    id\n    quantity_refunded\n    order_item {\n      ...orderItem\n    }\n  }\n  ", "\n"])), orderItemFragment);
    var templateObject_1$9;

    var __makeTemplateObject$a = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderCreditTotalFragment = gql(templateObject_1$a || (templateObject_1$a = __makeTemplateObject$a(["\n  fragment orderCreditTotal on CreditMemoTotal {\n    __typename\n    discounts {\n      amount {\n        value\n      }\n      label\n    }\n    grand_total {\n      value\n    }\n    subtotal {\n      value\n    }\n    total_tax {\n      value\n    }\n    total_shipping {\n      value\n    }\n  }\n"], ["\n  fragment orderCreditTotal on CreditMemoTotal {\n    __typename\n    discounts {\n      amount {\n        value\n      }\n      label\n    }\n    grand_total {\n      value\n    }\n    subtotal {\n      value\n    }\n    total_tax {\n      value\n    }\n    total_shipping {\n      value\n    }\n  }\n"])));
    var templateObject_1$a;

    var __makeTemplateObject$b = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderCreditFragment = gql(templateObject_1$b || (templateObject_1$b = __makeTemplateObject$b(["\n  fragment orderCredit on CreditMemo {\n    __typename\n    id\n    items {\n      ...orderCreditItem\n    }\n    total {\n      ...orderCreditTotal\n    }\n  }\n  ", "\n  ", "\n"], ["\n  fragment orderCredit on CreditMemo {\n    __typename\n    id\n    items {\n      ...orderCreditItem\n    }\n    total {\n      ...orderCreditTotal\n    }\n  }\n  ", "\n  ", "\n"])), orderCreditItemFragment, orderCreditTotalFragment);
    var templateObject_1$b;

    var __makeTemplateObject$c = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderTotalFragment = gql(templateObject_1$c || (templateObject_1$c = __makeTemplateObject$c(["\n  fragment orderTotal on OrderTotal {\n    __typename\n    discounts {\n      amount {\n        value\n      }\n      label\n    }\n    grand_total {\n      value\n    }\n    subtotal {\n      value\n    }\n    total_tax {\n      value\n    }\n    total_shipping {\n      value\n    }\n  }\n"], ["\n  fragment orderTotal on OrderTotal {\n    __typename\n    discounts {\n      amount {\n        value\n      }\n      label\n    }\n    grand_total {\n      value\n    }\n    subtotal {\n      value\n    }\n    total_tax {\n      value\n    }\n    total_shipping {\n      value\n    }\n  }\n"])));
    var templateObject_1$c;

    var __makeTemplateObject$d = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    /** @type {?} */
    var orderFragment = gql(templateObject_1$d || (templateObject_1$d = __makeTemplateObject$d(["\n  fragment order on GraycoreGuestOrder {\n    __typename\n    id\n    order_date\n    status\n    carrier\n    number\n    shipping_method\n    items {\n      ...orderItem\n    }\n    billing_address {\n      ...orderAddress\n    }\n    shipping_address {\n      ...orderAddress\n    }\n    shipments {\n      ...orderShipment\n    }\n    payment_methods {\n      ...orderPayment\n    }\n    invoices {\n      ...orderInvoice\n    }\n    credit_memos {\n      ...orderCredit\n    }\n    total {\n      ...orderTotal\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  fragment order on GraycoreGuestOrder {\n    __typename\n    id\n    order_date\n    status\n    carrier\n    number\n    shipping_method\n    items {\n      ...orderItem\n    }\n    billing_address {\n      ...orderAddress\n    }\n    shipping_address {\n      ...orderAddress\n    }\n    shipments {\n      ...orderShipment\n    }\n    payment_methods {\n      ...orderPayment\n    }\n    invoices {\n      ...orderInvoice\n    }\n    credit_memos {\n      ...orderCredit\n    }\n    total {\n      ...orderTotal\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), orderItemFragment, orderShipmentFragment, orderPaymentFragment, orderInvoiceFragment, orderCreditFragment, orderAddressFragment, orderTotalFragment);
    var templateObject_1$d;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var __makeTemplateObject$e = (this && this.__makeTemplateObject) || function (cooked, raw) {
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
        return gql(templateObject_1$e || (templateObject_1$e = __makeTemplateObject$e(["\n  query GetGuestOrders($cartId: String!) {\n    graycoreGuestOrders(cartId: $cartId) {\n      items {\n        ...order\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query GetGuestOrders($cartId: String!) {\n    graycoreGuestOrders(cartId: $cartId) {\n      items {\n        ...order\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), graphql.daffBuildFragmentNameSpread.apply(void 0, __spread(extraOrderFragments)), orderFragment, graphql.daffBuildFragmentDefinition.apply(void 0, __spread(extraOrderFragments)));
    });
    var templateObject_1$e;

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
    var DaffMagentoExtraOrderFragments = new core$1.InjectionToken('DaffMagentoExtraOrderFragments', { factory: (/**
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
        if (response.data.graycoreGuestOrders.items) {
            if (response.data.graycoreGuestOrders.items.reduce((/**
             * @param {?} acc
             * @param {?} order
             * @return {?}
             */
            function (acc, order) { return acc && !!(order.billing_address
                && order.shipping_address
                && order.payment_methods); }), true)) {
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
            function (result) { return result.data.graycoreGuestOrders.items.map(daffMagentoTransformOrder); })), operators.catchError((/**
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
            { type: core$1.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        DaffOrderMagentoService.ctorParameters = function () { return [
            { type: apolloAngular.Apollo },
            { type: Array, decorators: [{ type: core$1.Inject, args: [DaffMagentoExtraOrderFragments,] }] }
        ]; };
        /** @nocollapse */ DaffOrderMagentoService.ngInjectableDef = core$1.ɵɵdefineInjectable({ factory: function DaffOrderMagentoService_Factory() { return new DaffOrderMagentoService(core$1.ɵɵinject(apolloAngular.Apollo), core$1.ɵɵinject(DaffMagentoExtraOrderFragments)); }, token: DaffOrderMagentoService, providedIn: "root" });
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
            { type: core$1.NgModule, args: [{
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
    exports.MagentoOrderItemType = MagentoOrderItemType;
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
//# sourceMappingURL=daffodil-order-driver-magento-2.4.1.umd.js.map
