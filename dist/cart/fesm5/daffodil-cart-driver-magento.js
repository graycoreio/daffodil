import { __assign, __spread, __makeTemplateObject } from 'tslib';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, InjectionToken, inject, Inject, NgModule } from '@angular/core';
import { DaffCartItemInputType, DaffCartTotalTypeEnum } from '@daffodil/cart';
import { MagentoProductStockStatusEnum, magentoProductFragment } from '@daffodil/product';
import { daffAdd } from '@daffodil/core';
import gql from 'graphql-tag';
import { daffBuildFragmentNameSpread, daffBuildFragmentDefinition, DaffQueuedApollo } from '@daffodil/core/graphql';
import { Apollo } from 'apollo-angular';
import { throwError, forkJoin } from 'rxjs';
import { catchError, map, switchMap, mapTo } from 'rxjs/operators';
import { DaffCartNotFoundError, DaffCartDriverErrorCodes, DaffCartDriverErrorMap, DaffCartItemDriver, DaffCartDriver, DaffCartAddressDriver, DaffCartBillingAddressDriver, DaffCartShippingAddressDriver, DaffCartShippingMethodsDriver, DaffCartShippingInformationDriver, DaffCartPaymentDriver, DaffCartPaymentMethodsDriver, DaffCartOrderDriver, DaffCartCouponDriver } from '@daffodil/cart/driver';
import { daffTransformMagentoError } from '@daffodil/driver/magento';
import { DaffBadInputError } from '@daffodil/driver';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms magento carts into an object usable by daffodil.
 */
var DaffMagentoCartPaymentTransformer = /** @class */ (function () {
    function DaffMagentoCartPaymentTransformer() {
    }
    /**
     * Transforms the magento CartPayment from the magento cart query into a DaffCartPaymentMethod.
     * @param response the response from a magento cart query.
     */
    /**
     * Transforms the magento CartPayment from the magento cart query into a DaffCartPaymentMethod.
     * @param {?} responsePayment
     * @return {?}
     */
    DaffMagentoCartPaymentTransformer.prototype.transform = /**
     * Transforms the magento CartPayment from the magento cart query into a DaffCartPaymentMethod.
     * @param {?} responsePayment
     * @return {?}
     */
    function (responsePayment) {
        return responsePayment ? __assign({ magento_payment_method: responsePayment }, { method: responsePayment.code }) : null;
    };
    DaffMagentoCartPaymentTransformer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoCartPaymentTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartPaymentTransformer_Factory() { return new DaffMagentoCartPaymentTransformer(); }, token: DaffMagentoCartPaymentTransformer, providedIn: "root" });
    return DaffMagentoCartPaymentTransformer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms magento cart shipping methods into an object usable by daffodil.
 */
var DaffMagentoCartShippingRateTransformer = /** @class */ (function () {
    function DaffMagentoCartShippingRateTransformer() {
    }
    /**
     * Transforms the magento shipping method from the magento cart query into a DaffCartShippingRate.
     * @param shippingMethod the shippingMethod from a magento cart query.
     */
    /**
     * Transforms the magento shipping method from the magento cart query into a DaffCartShippingRate.
     * @param {?} shippingMethod the shippingMethod from a magento cart query.
     * @return {?}
     */
    DaffMagentoCartShippingRateTransformer.prototype.transform = /**
     * Transforms the magento shipping method from the magento cart query into a DaffCartShippingRate.
     * @param {?} shippingMethod the shippingMethod from a magento cart query.
     * @return {?}
     */
    function (shippingMethod) {
        return shippingMethod ? __assign({ magento_shipping_method: shippingMethod }, { carrier: shippingMethod.carrier_code, carrier_title: shippingMethod.carrier_title, price: shippingMethod.amount.value, method_code: shippingMethod.method_code, method_title: shippingMethod.method_title, id: null, method_description: null }) : null;
    };
    DaffMagentoCartShippingRateTransformer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoCartShippingRateTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingRateTransformer_Factory() { return new DaffMagentoCartShippingRateTransformer(); }, token: DaffMagentoCartShippingRateTransformer, providedIn: "root" });
    return DaffMagentoCartShippingRateTransformer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms magento cart shipping methods into an object usable by daffodil.
 */
var DaffMagentoCartShippingInformationTransformer = /** @class */ (function () {
    function DaffMagentoCartShippingInformationTransformer(shippingRateTransformer) {
        this.shippingRateTransformer = shippingRateTransformer;
    }
    /**
     * Transforms the magento shipping method from the magento cart query into a DaffCartShippingInformation.
     * @param shippingMethod the shippingMethod from a magento cart query.
     */
    /**
     * Transforms the magento shipping method from the magento cart query into a DaffCartShippingInformation.
     * @param {?} shippingMethod the shippingMethod from a magento cart query.
     * @return {?}
     */
    DaffMagentoCartShippingInformationTransformer.prototype.transform = /**
     * Transforms the magento shipping method from the magento cart query into a DaffCartShippingInformation.
     * @param {?} shippingMethod the shippingMethod from a magento cart query.
     * @return {?}
     */
    function (shippingMethod) {
        return shippingMethod ? __assign({}, this.shippingRateTransformer.transform(shippingMethod), { address_id: 0 }) : null;
    };
    DaffMagentoCartShippingInformationTransformer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartShippingInformationTransformer.ctorParameters = function () { return [
        { type: DaffMagentoCartShippingRateTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartShippingInformationTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingInformationTransformer_Factory() { return new DaffMagentoCartShippingInformationTransformer(ɵɵinject(DaffMagentoCartShippingRateTransformer)); }, token: DaffMagentoCartShippingInformationTransformer, providedIn: "root" });
    return DaffMagentoCartShippingInformationTransformer;
}());
if (false) {
    /** @type {?} */
    DaffMagentoCartShippingInformationTransformer.prototype.shippingRateTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms magento addresses into an object usable by daffodil.
 */
var DaffMagentoCartAddressTransformer = /** @class */ (function () {
    function DaffMagentoCartAddressTransformer() {
    }
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param address the address from a magento cart query.
     */
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param {?} address the address from a magento cart query.
     * @return {?}
     */
    DaffMagentoCartAddressTransformer.prototype.transform = /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param {?} address the address from a magento cart query.
     * @return {?}
     */
    function (address) {
        return address ? __assign({ magento_address: address }, { street: address.street[0], city: address.city, region: address.region.code, country: address.country.label, country_id: address.country.code, postcode: address.postcode, firstname: address.firstname, lastname: address.lastname, telephone: address.telephone, email: address.email, address_id: null, suffix: null, middlename: null, prefix: null, address_type: null }) : null;
    };
    DaffMagentoCartAddressTransformer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoCartAddressTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartAddressTransformer_Factory() { return new DaffMagentoCartAddressTransformer(); }, token: DaffMagentoCartAddressTransformer, providedIn: "root" });
    return DaffMagentoCartAddressTransformer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms magento addresses into an object usable by daffodil.
 */
var DaffMagentoShippingAddressTransformer = /** @class */ (function () {
    function DaffMagentoShippingAddressTransformer(addressTransformer) {
        this.addressTransformer = addressTransformer;
    }
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param address the address from a magento cart query.
     */
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param {?} address the address from a magento cart query.
     * @return {?}
     */
    DaffMagentoShippingAddressTransformer.prototype.transform = /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param {?} address the address from a magento cart query.
     * @return {?}
     */
    function (address) {
        return address ? __assign({}, this.addressTransformer.transform(address), { address_type: 'shipping' }) : null;
    };
    DaffMagentoShippingAddressTransformer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoShippingAddressTransformer.ctorParameters = function () { return [
        { type: DaffMagentoCartAddressTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoShippingAddressTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoShippingAddressTransformer_Factory() { return new DaffMagentoShippingAddressTransformer(ɵɵinject(DaffMagentoCartAddressTransformer)); }, token: DaffMagentoShippingAddressTransformer, providedIn: "root" });
    return DaffMagentoShippingAddressTransformer;
}());
if (false) {
    /** @type {?} */
    DaffMagentoShippingAddressTransformer.prototype.addressTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms magento addresses into an object usable by daffodil.
 */
var DaffMagentoBillingAddressTransformer = /** @class */ (function () {
    function DaffMagentoBillingAddressTransformer(addressTransformer) {
        this.addressTransformer = addressTransformer;
    }
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param address the address from a magento cart query.
     */
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param {?} address the address from a magento cart query.
     * @return {?}
     */
    DaffMagentoBillingAddressTransformer.prototype.transform = /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param {?} address the address from a magento cart query.
     * @return {?}
     */
    function (address) {
        return address ? __assign({}, this.addressTransformer.transform(address), { address_type: 'billing' }) : null;
    };
    DaffMagentoBillingAddressTransformer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoBillingAddressTransformer.ctorParameters = function () { return [
        { type: DaffMagentoCartAddressTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoBillingAddressTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoBillingAddressTransformer_Factory() { return new DaffMagentoBillingAddressTransformer(ɵɵinject(DaffMagentoCartAddressTransformer)); }, token: DaffMagentoBillingAddressTransformer, providedIn: "root" });
    return DaffMagentoBillingAddressTransformer;
}());
if (false) {
    /** @type {?} */
    DaffMagentoBillingAddressTransformer.prototype.addressTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} coupon
 * @return {?}
 */
function daffMagentoCouponTransform(coupon) {
    return __assign({ magento_coupon: coupon }, { code: coupon.code });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var MagentoCartItemTypeEnum = {
    Simple: 'SimpleCartItem',
    Bundle: 'BundleCartItem',
    Configurable: 'ConfigurableCartItem',
};
/**
 * An object for defining what the cart service requests and retrieves from a magento backend.
 * @record
 */
function MagentoCartItem() { }
if (false) {
    /** @type {?} */
    MagentoCartItem.prototype.__typename;
    /** @type {?} */
    MagentoCartItem.prototype.id;
    /** @type {?} */
    MagentoCartItem.prototype.prices;
    /** @type {?} */
    MagentoCartItem.prototype.product;
    /** @type {?} */
    MagentoCartItem.prototype.quantity;
}
/**
 * An interface for magento bundled cart items.
 * @record
 */
function MagentoBundleCartItem() { }
if (false) {
    /** @type {?} */
    MagentoBundleCartItem.prototype.bundle_options;
}
/**
 * An interface for magento configurable cart items.
 * @record
 */
function MagentoConfigurableCartItem() { }
if (false) {
    /** @type {?} */
    MagentoConfigurableCartItem.prototype.configurable_options;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms the magento MagentoCartItem from the magento cart query into a DaffCartItem.
 * @param {?} cartItem
 * @return {?}
 */
function transformMagentoSimpleCartItem(cartItem) {
    return cartItem ? __assign({ magento_cart_item: cartItem }, { type: DaffCartItemInputType.Simple, item_id: cartItem.id, sku: cartItem.product.sku, name: cartItem.product.name, qty: cartItem.quantity, price: cartItem.prices.price.value, row_total: cartItem.prices.row_total.value, product_id: String(cartItem.product.id), image: {
            id: cartItem.product.thumbnail.label,
            url: cartItem.product.thumbnail.url,
            label: cartItem.product.thumbnail.label
        }, total_discount: cartItem.prices.total_item_discount.value, in_stock: cartItem.product.stock_status === MagentoProductStockStatusEnum.InStock, parent_item_id: 0 }) : null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms a MagentoBundleCartItem into a DaffCartItem.
 * @param {?} bundleCartItem
 * @return {?}
 */
function transformMagentoBundleCartItem(bundleCartItem) {
    return bundleCartItem ? __assign({}, transformMagentoSimpleCartItem(bundleCartItem), { type: DaffCartItemInputType.Composite, options: bundleCartItem.bundle_options.map(transformBundleCartItemOption) }) : null;
}
/**
 * @param {?} option
 * @return {?}
 */
function transformBundleCartItemOption(option) {
    return {
        option_id: option.values[0].id,
        option_label: option.label,
        value_label: option.values[0].label
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms a MagentoConfigurableCartItem into a DaffCartItem.
 * @param {?} configurableCartItem
 * @return {?}
 */
function transformMagentoConfigurableCartItem(configurableCartItem) {
    return configurableCartItem ? __assign({}, transformMagentoSimpleCartItem(configurableCartItem), { type: DaffCartItemInputType.Configurable, attributes: configurableCartItem.configurable_options.map(transformConfigurableCartItemAttribute) }) : null;
}
/**
 * @param {?} option
 * @return {?}
 */
function transformConfigurableCartItemAttribute(option) {
    return {
        attribute_label: option.option_label,
        value_label: option.value_label
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms the MagentoCartItem into a DaffCartItem.
 * @param {?} cartItem a MagentoCartItem
 * @return {?}
 */
function transformMagentoCartItem(cartItem) {
    switch (cartItem.__typename) {
        case MagentoCartItemTypeEnum.Bundle:
            return transformMagentoBundleCartItem((/** @type {?} */ (cartItem)));
        case MagentoCartItemTypeEnum.Configurable:
            return transformMagentoConfigurableCartItem((/** @type {?} */ (cartItem)));
        default:
            return transformMagentoSimpleCartItem(cartItem);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} cart
 * @return {?}
 */
function transformCartTotals(cart) {
    /** @type {?} */
    var totalTax = cart.prices.applied_taxes ? cart.prices.applied_taxes.reduce((/**
     * @param {?} acc
     * @param {?} tax
     * @return {?}
     */
    function (acc, tax) { return (daffAdd(acc, tax.amount.value)); }), 0) : 0;
    return {
        totals: __spread([
            {
                name: DaffCartTotalTypeEnum.grandTotal,
                label: 'Grand Total',
                value: cart.prices.grand_total.value
            },
            {
                name: DaffCartTotalTypeEnum.subtotalExcludingTax,
                label: 'Subtotal Excluding Tax',
                value: cart.prices.subtotal_excluding_tax.value
            },
            {
                name: DaffCartTotalTypeEnum.subtotalIncludingTax,
                label: 'Subtotal Including Tax',
                value: cart.prices.subtotal_including_tax.value
            },
            {
                name: DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax,
                label: 'Subtotal with Discount Excluding Tax',
                value: cart.prices.subtotal_with_discount_excluding_tax.value
            },
            {
                name: DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax,
                label: 'Subtotal with Discount Including Tax',
                value: cart.prices.subtotal_with_discount_excluding_tax.value ?
                    daffAdd(cart.prices.subtotal_with_discount_excluding_tax.value, totalTax) :
                    cart.prices.subtotal_with_discount_excluding_tax.value
            },
            {
                name: DaffCartTotalTypeEnum.tax,
                label: 'Tax',
                value: totalTax
            }
        ], transformDiscounts(cart.prices.discounts), [
            {
                name: DaffCartTotalTypeEnum.shipping,
                label: 'Shipping',
                value: validateSelectedShippingAddress(cart) ? cart.shipping_addresses[0].selected_shipping_method.amount.value : null
            }
        ]),
    };
}
/**
 * @param {?} discounts
 * @return {?}
 */
function transformDiscounts(discounts) {
    return discounts ? discounts.map((/**
     * @param {?} discount
     * @return {?}
     */
    function (discount) { return ({
        name: DaffCartTotalTypeEnum.discount,
        label: discount.label,
        value: discount.amount.value
    }); })) : [];
}
/**
 * @param {?} cart
 * @return {?}
 */
function validateSelectedShippingAddress(cart) {
    // TODO: optional chaining
    return !!cart.shipping_addresses && !!cart.shipping_addresses[0] && !!cart.shipping_addresses[0].selected_shipping_method &&
        !!cart.shipping_addresses[0].selected_shipping_method.amount;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms magento carts into an object usable by daffodil.
 */
var DaffMagentoCartTransformer = /** @class */ (function () {
    function DaffMagentoCartTransformer(shippingAddressTransformer, billingAddressTransformer, paymentTransformer, shippingInformationTransformer, shippingRateTransformer) {
        this.shippingAddressTransformer = shippingAddressTransformer;
        this.billingAddressTransformer = billingAddressTransformer;
        this.paymentTransformer = paymentTransformer;
        this.shippingInformationTransformer = shippingInformationTransformer;
        this.shippingRateTransformer = shippingRateTransformer;
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transformShippingAddress = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            shipping_address: cart.shipping_addresses[0]
                ? this.shippingAddressTransformer.transform(__assign({}, cart.shipping_addresses[0], { email: cart.email }))
                : null
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transformBillingAddress = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            billing_address: cart.billing_address
                ? this.billingAddressTransformer.transform(__assign({}, cart.billing_address, { email: cart.email }))
                : null
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transformCartItems = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            items: cart.items.map(transformMagentoCartItem),
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transformTotals = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            grand_total: cart.prices.grand_total.value,
            subtotal: cart.prices.subtotal_excluding_tax.value,
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transformCoupons = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            coupons: cart.applied_coupons
                ? cart.applied_coupons.map(daffMagentoCouponTransform)
                : []
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transformPayment = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            payment: this.paymentTransformer.transform(cart.selected_payment_method),
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transformShippingInformation = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            shipping_information: cart.shipping_addresses[0]
                ? this.shippingInformationTransformer.transform(cart.shipping_addresses[0].selected_shipping_method)
                : null
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transformShippingMethods = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        var _this = this;
        return {
            available_shipping_methods: cart.shipping_addresses[0] && cart.shipping_addresses[0].available_shipping_methods
                ? cart.shipping_addresses[0].available_shipping_methods.map((/**
                 * @param {?} method
                 * @return {?}
                 */
                function (method) {
                    return _this.shippingRateTransformer.transform(method);
                }))
                : []
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transformPaymentMethods = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        var _this = this;
        return {
            available_payment_methods: cart.available_payment_methods.map((/**
             * @param {?} method
             * @return {?}
             */
            function (method) {
                return _this.paymentTransformer.transform(method);
            }))
        };
    };
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCart.
     * @param cart the cart from a magento cart query.
     */
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCart.
     * @param {?} cart the cart from a magento cart query.
     * @return {?}
     */
    DaffMagentoCartTransformer.prototype.transform = /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCart.
     * @param {?} cart the cart from a magento cart query.
     * @return {?}
     */
    function (cart) {
        return cart ? __assign({ extra_attributes: cart }, this.transformCartItems(cart), this.transformBillingAddress(cart), this.transformShippingAddress(cart), this.transformCoupons(cart), this.transformPayment(cart), this.transformTotals(cart), transformCartTotals(cart), this.transformShippingInformation(cart), this.transformShippingMethods(cart), this.transformPaymentMethods(cart), { id: cart.id }) : null;
    };
    DaffMagentoCartTransformer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartTransformer.ctorParameters = function () { return [
        { type: DaffMagentoShippingAddressTransformer },
        { type: DaffMagentoBillingAddressTransformer },
        { type: DaffMagentoCartPaymentTransformer },
        { type: DaffMagentoCartShippingInformationTransformer },
        { type: DaffMagentoCartShippingRateTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartTransformer_Factory() { return new DaffMagentoCartTransformer(ɵɵinject(DaffMagentoShippingAddressTransformer), ɵɵinject(DaffMagentoBillingAddressTransformer), ɵɵinject(DaffMagentoCartPaymentTransformer), ɵɵinject(DaffMagentoCartShippingInformationTransformer), ɵɵinject(DaffMagentoCartShippingRateTransformer)); }, token: DaffMagentoCartTransformer, providedIn: "root" });
    return DaffMagentoCartTransformer;
}());
if (false) {
    /** @type {?} */
    DaffMagentoCartTransformer.prototype.shippingAddressTransformer;
    /** @type {?} */
    DaffMagentoCartTransformer.prototype.billingAddressTransformer;
    /** @type {?} */
    DaffMagentoCartTransformer.prototype.paymentTransformer;
    /** @type {?} */
    DaffMagentoCartTransformer.prototype.shippingInformationTransformer;
    /** @type {?} */
    DaffMagentoCartTransformer.prototype.shippingRateTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoCartAddressInputTransformer = /** @class */ (function () {
    function DaffMagentoCartAddressInputTransformer() {
    }
    /**
     * @param {?} cartAddress
     * @return {?}
     */
    DaffMagentoCartAddressInputTransformer.prototype.transform = /**
     * @param {?} cartAddress
     * @return {?}
     */
    function (cartAddress) {
        return {
            city: cartAddress.city,
            country_code: cartAddress.country,
            firstname: cartAddress.firstname,
            lastname: cartAddress.lastname,
            postcode: cartAddress.postcode,
            region: String(cartAddress.region),
            save_in_address_book: false,
            street: [cartAddress.street],
            telephone: cartAddress.telephone,
        };
    };
    DaffMagentoCartAddressInputTransformer.decorators = [
        { type: Injectable }
    ];
    return DaffMagentoCartAddressInputTransformer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoShippingAddressInputTransformer = /** @class */ (function () {
    function DaffMagentoShippingAddressInputTransformer(cartAddressTransformer) {
        this.cartAddressTransformer = cartAddressTransformer;
    }
    /**
     * @param {?} cartAddress
     * @return {?}
     */
    DaffMagentoShippingAddressInputTransformer.prototype.transform = /**
     * @param {?} cartAddress
     * @return {?}
     */
    function (cartAddress) {
        return cartAddress.address_id
            ? {
                address: null,
                customer_address_id: cartAddress.address_id,
            }
            : {
                address: this.cartAddressTransformer.transform(cartAddress),
                customer_address_id: null,
            };
    };
    DaffMagentoShippingAddressInputTransformer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffMagentoShippingAddressInputTransformer.ctorParameters = function () { return [
        { type: DaffMagentoCartAddressInputTransformer }
    ]; };
    return DaffMagentoShippingAddressInputTransformer;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoShippingAddressInputTransformer.prototype.cartAddressTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoBillingAddressInputTransformer = /** @class */ (function () {
    function DaffMagentoBillingAddressInputTransformer(cartAddressTransformer) {
        this.cartAddressTransformer = cartAddressTransformer;
    }
    /**
     * @param {?} cartAddress
     * @return {?}
     */
    DaffMagentoBillingAddressInputTransformer.prototype.transform = /**
     * @param {?} cartAddress
     * @return {?}
     */
    function (cartAddress) {
        return cartAddress.address_id
            ? {
                address: null,
                customer_address_id: cartAddress.address_id,
            }
            : {
                address: this.cartAddressTransformer.transform(cartAddress),
                customer_address_id: null,
            };
    };
    DaffMagentoBillingAddressInputTransformer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffMagentoBillingAddressInputTransformer.ctorParameters = function () { return [
        { type: DaffMagentoCartAddressInputTransformer }
    ]; };
    return DaffMagentoBillingAddressInputTransformer;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoBillingAddressInputTransformer.prototype.cartAddressTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoCartItemUpdateInputTransformer = /** @class */ (function () {
    function DaffMagentoCartItemUpdateInputTransformer() {
    }
    /**
     * @param {?} item
     * @return {?}
     */
    DaffMagentoCartItemUpdateInputTransformer.prototype.transform = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return {
            quantity: item.qty,
            cart_item_id: Number(item.item_id)
        };
    };
    DaffMagentoCartItemUpdateInputTransformer.decorators = [
        { type: Injectable }
    ];
    return DaffMagentoCartItemUpdateInputTransformer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoPaymentMethodInputTransformer = /** @class */ (function () {
    function DaffMagentoPaymentMethodInputTransformer() {
    }
    /**
     * @param {?} payment
     * @return {?}
     */
    DaffMagentoPaymentMethodInputTransformer.prototype.transform = /**
     * @param {?} payment
     * @return {?}
     */
    function (payment) {
        return __assign({}, payment.payment_info);
    };
    DaffMagentoPaymentMethodInputTransformer.decorators = [
        { type: Injectable }
    ];
    return DaffMagentoPaymentMethodInputTransformer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffMagentoShippingMethodInputTransformer = /** @class */ (function () {
    function DaffMagentoShippingMethodInputTransformer() {
    }
    /**
     * @param {?} method
     * @return {?}
     */
    DaffMagentoShippingMethodInputTransformer.prototype.transform = /**
     * @param {?} method
     * @return {?}
     */
    function (method) {
        return {
            carrier_code: method.carrier,
            method_code: method.method_code
        };
    };
    DaffMagentoShippingMethodInputTransformer.decorators = [
        { type: Injectable }
    ];
    return DaffMagentoShippingMethodInputTransformer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MagentoCartItemInput() { }
if (false) {
    /** @type {?} */
    MagentoCartItemInput.prototype.quantity;
    /** @type {?} */
    MagentoCartItemInput.prototype.sku;
}
/**
 * @record
 */
function MagentoBundledCartItemInput() { }
if (false) {
    /** @type {?} */
    MagentoBundledCartItemInput.prototype.input;
    /** @type {?} */
    MagentoBundledCartItemInput.prototype.options;
}
/**
 * @record
 */
function MagentoBundledCartItemOption() { }
if (false) {
    /** @type {?} */
    MagentoBundledCartItemOption.prototype.id;
    /** @type {?} */
    MagentoBundledCartItemOption.prototype.quantity;
    /** @type {?} */
    MagentoBundledCartItemOption.prototype.value;
}
/**
 * @record
 */
function MagentoConfigurableCartItemInput() { }
if (false) {
    /** @type {?} */
    MagentoConfigurableCartItemInput.prototype.parentSku;
    /** @type {?} */
    MagentoConfigurableCartItemInput.prototype.data;
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
/**
 * An multi-provider injection token for providing extra GraphQL fragments that will be spread into cart queries.
 * This can be used to retrieve additional data that is not covered by the standard Daffodil interfaces.
 * The data will appear in DaffCart#extra_attributes.
 *
 * Fragment structure is platform-specific and this feature should be used with care.
 * @type {?}
 */
var DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS = new InjectionToken('DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS', { factory: (/**
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
var moneyFragment = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fragment money on Money {\n    value\n    currency\n  }\n"], ["\n  fragment money on Money {\n    value\n    currency\n  }\n"])));
var templateObject_1;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var cartCouponFragment = gql(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  fragment cartCoupon on AppliedCoupon {\n    code\n  }\n"], ["\n  fragment cartCoupon on AppliedCoupon {\n    code\n  }\n"])));
var templateObject_1$1;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var cartAddressFragment = gql(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  fragment cartAddress on CartAddressInterface {\n    city\n    country {\n      code\n      label\n    }\n    firstname\n    lastname\n    postcode\n    region {\n      code\n      label\n    }\n    street\n    telephone\n    company\n  }\n"], ["\n  fragment cartAddress on CartAddressInterface {\n    city\n    country {\n      code\n      label\n    }\n    firstname\n    lastname\n    postcode\n    region {\n      code\n      label\n    }\n    street\n    telephone\n    company\n  }\n"])));
var templateObject_1$2;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var cartItemFragment = gql(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  fragment cartItem on CartItemInterface {\n\t\t__typename\n    id\n    product {\n      ...product\n    }\n    quantity\n    prices {\n      price {\n        ...money\n      }\n      row_total {\n        ...money\n      }\n      row_total_including_tax {\n        ...money\n      }\n      total_item_discount {\n        ...money\n      }\n\t\t}\n\t\t...on ConfigurableCartItem {\n\t\t\tconfigurable_options {\n\t\t\t\toption_label\n\t\t\t\tvalue_label\n\t\t\t}\n\t\t}\n\t\t...on BundleCartItem {\n\t\t\tbundle_options {\n\t\t\t\tid\n\t\t\t\tlabel\n\t\t\t\ttype\n\t\t\t\tvalues {\n\t\t\t\t\tid\n\t\t\t\t\tlabel\n\t\t\t\t\tprice\n\t\t\t\t\tquantity\n\t\t\t\t}\n\t\t\t}\n\t\t}\n  }\n  ", "\n  ", "\n"], ["\n  fragment cartItem on CartItemInterface {\n\t\t__typename\n    id\n    product {\n      ...product\n    }\n    quantity\n    prices {\n      price {\n        ...money\n      }\n      row_total {\n        ...money\n      }\n      row_total_including_tax {\n        ...money\n      }\n      total_item_discount {\n        ...money\n      }\n\t\t}\n\t\t...on ConfigurableCartItem {\n\t\t\tconfigurable_options {\n\t\t\t\toption_label\n\t\t\t\tvalue_label\n\t\t\t}\n\t\t}\n\t\t...on BundleCartItem {\n\t\t\tbundle_options {\n\t\t\t\tid\n\t\t\t\tlabel\n\t\t\t\ttype\n\t\t\t\tvalues {\n\t\t\t\t\tid\n\t\t\t\t\tlabel\n\t\t\t\t\tprice\n\t\t\t\t\tquantity\n\t\t\t\t}\n\t\t\t}\n\t\t}\n  }\n  ", "\n  ", "\n"])), magentoProductFragment, moneyFragment);
var templateObject_1$3;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var availablePaymentMethodFragment = gql(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  fragment availablePaymentMethod on AvailablePaymentMethod {\n    code\n    title\n  }\n"], ["\n  fragment availablePaymentMethod on AvailablePaymentMethod {\n    code\n    title\n  }\n"])));
var templateObject_1$4;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var selectedPaymentMethodFragment = gql(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  fragment selectedPaymentMethod on SelectedPaymentMethod {\n    code\n    title\n    purchase_order_number\n  }\n"], ["\n  fragment selectedPaymentMethod on SelectedPaymentMethod {\n    code\n    title\n    purchase_order_number\n  }\n"])));
var templateObject_1$5;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var availableShippingMethodFragment = gql(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  fragment availableShippingMethod on AvailableShippingMethod {\n    carrier_code\n    method_code\n    carrier_title\n    method_title\n    amount {\n      ...money\n    }\n  }\n  ", "\n"], ["\n  fragment availableShippingMethod on AvailableShippingMethod {\n    carrier_code\n    method_code\n    carrier_title\n    method_title\n    amount {\n      ...money\n    }\n  }\n  ", "\n"])), moneyFragment);
var templateObject_1$6;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var selectedShippingMethodFragment = gql(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  fragment selectedShippingMethod on SelectedShippingMethod {\n    carrier_code\n    method_code\n    carrier_title\n    method_title\n    amount {\n      ...money\n    }\n  }\n  ", "\n"], ["\n  fragment selectedShippingMethod on SelectedShippingMethod {\n    carrier_code\n    method_code\n    carrier_title\n    method_title\n    amount {\n      ...money\n    }\n  }\n  ", "\n"])), moneyFragment);
var templateObject_1$7;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var pricesFragment = gql(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  fragment prices on CartPrices {\n\t\tgrand_total {\n\t\t\t...money\n\t\t}\n\t\tsubtotal_excluding_tax {\n\t\t\t...money\n\t\t}\n\t\tsubtotal_including_tax {\n\t\t\t...money\n\t\t}\n\t\tsubtotal_with_discount_excluding_tax {\n\t\t\t...money\n\t\t}\n\t\tapplied_taxes {\n\t\t\tamount {\n\t\t\t\t...money\n\t\t\t}\n\t\t\tlabel\n\t\t}\n\t\tdiscounts {\n\t\t\tamount {\n\t\t\t\t...money\n\t\t\t}\n\t\t\tlabel\n\t\t}\n\t}\n  ", "\n"], ["\n  fragment prices on CartPrices {\n\t\tgrand_total {\n\t\t\t...money\n\t\t}\n\t\tsubtotal_excluding_tax {\n\t\t\t...money\n\t\t}\n\t\tsubtotal_including_tax {\n\t\t\t...money\n\t\t}\n\t\tsubtotal_with_discount_excluding_tax {\n\t\t\t...money\n\t\t}\n\t\tapplied_taxes {\n\t\t\tamount {\n\t\t\t\t...money\n\t\t\t}\n\t\t\tlabel\n\t\t}\n\t\tdiscounts {\n\t\t\tamount {\n\t\t\t\t...money\n\t\t\t}\n\t\t\tlabel\n\t\t}\n\t}\n  ", "\n"])), moneyFragment);
var templateObject_1$8;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var cartFragment = gql(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  fragment cart on Cart {\n    id\n    email\n    billing_address {\n      ...cartAddress\n    }\n    shipping_addresses {\n      ...cartAddress\n      ... on ShippingCartAddress {\n        selected_shipping_method {\n          ...selectedShippingMethod\n        }\n      }\n    }\n    items {\n      ...cartItem\n    }\n    available_payment_methods {\n      ...availablePaymentMethod\n    }\n    selected_payment_method {\n      ...selectedPaymentMethod\n    }\n    applied_coupons {\n      ...cartCoupon\n    }\n    prices {\n      ...prices\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  fragment cart on Cart {\n    id\n    email\n    billing_address {\n      ...cartAddress\n    }\n    shipping_addresses {\n      ...cartAddress\n      ... on ShippingCartAddress {\n        selected_shipping_method {\n          ...selectedShippingMethod\n        }\n      }\n    }\n    items {\n      ...cartItem\n    }\n    available_payment_methods {\n      ...availablePaymentMethod\n    }\n    selected_payment_method {\n      ...selectedPaymentMethod\n    }\n    applied_coupons {\n      ...cartCoupon\n    }\n    prices {\n      ...prices\n    }\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), cartAddressFragment, availablePaymentMethodFragment, selectedPaymentMethodFragment, selectedShippingMethodFragment, cartItemFragment, pricesFragment, cartCouponFragment);
var templateObject_1$9;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MagentoAddSimpleCartItemResponse() { }
if (false) {
    /** @type {?} */
    MagentoAddSimpleCartItemResponse.prototype.addSimpleProductsToCart;
}
/**
 * @record
 */
function MagentoAddBundleCartItemResponse() { }
if (false) {
    /** @type {?} */
    MagentoAddBundleCartItemResponse.prototype.addBundleProductsToCart;
}
/**
 * @record
 */
function MagentoAddConfigurableCartItemResponse() { }
if (false) {
    /** @type {?} */
    MagentoAddConfigurableCartItemResponse.prototype.addConfigurableProductsToCart;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var listCartItems = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  query ListCartItems($cartId: String!) {\n    cart(cart_id: $cartId) {\n      items {\n        ...cartItem\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query ListCartItems($cartId: String!) {\n    cart(cart_id: $cartId) {\n      items {\n        ...cartItem\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartItemFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$a;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var addSimpleCartItem = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  mutation AddSimpleCartItem($cartId: String!, $input: CartItemInput!) {\n    addSimpleProductsToCart(input: {\n      cart_id: $cartId,\n      cart_items: [{\n        data: $input\n      }]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation AddSimpleCartItem($cartId: String!, $input: CartItemInput!) {\n    addSimpleProductsToCart(input: {\n      cart_id: $cartId,\n      cart_items: [{\n        data: $input\n      }]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
/** @type {?} */
var addBundleCartItem = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  mutation AddBundleCartItem($cartId: String!, $input: CartItemInput!, $options: [BundleOptionInput]!) {\n    addBundleProductsToCart(input: {\n      cart_id: $cartId,\n      cart_items: [{\n\t\t\t\tdata: $input,\n\t\t\t\tbundle_options: $options\n      }]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation AddBundleCartItem($cartId: String!, $input: CartItemInput!, $options: [BundleOptionInput]!) {\n    addBundleProductsToCart(input: {\n      cart_id: $cartId,\n      cart_items: [{\n\t\t\t\tdata: $input,\n\t\t\t\tbundle_options: $options\n      }]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
/** @type {?} */
var addConfigurableCartItem = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  mutation AddConfigurableCartItem($cartId: String!, $parentSku: String, $data: CartItemInput!) {\n    addConfigurableProductsToCart(input: {\n      cart_id: $cartId,\n      cart_items: [{\n\t\t\t\tparent_sku: $parentSku\n\t\t\t\tdata: $data,\n      }]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation AddConfigurableCartItem($cartId: String!, $parentSku: String, $data: CartItemInput!) {\n    addConfigurableProductsToCart(input: {\n      cart_id: $cartId,\n      cart_items: [{\n\t\t\t\tparent_sku: $parentSku\n\t\t\t\tdata: $data,\n      }]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$b, templateObject_2, templateObject_3;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var removeCartItem = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  mutation RemoveCartItem($cartId: String!, $itemId: Int!) {\n    removeItemFromCart(input: {\n      cart_id: $cartId,\n      cart_item_id: $itemId\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation RemoveCartItem($cartId: String!, $itemId: Int!) {\n    removeItemFromCart(input: {\n      cart_id: $cartId,\n      cart_item_id: $itemId\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$c;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var updateCartItem = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  mutation UpdateCartItem($cartId: String!, $input: CartItemUpdateInput!) {\n    updateCartItems(input: {\n      cart_id: $cartId\n      cart_items: [$input]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation UpdateCartItem($cartId: String!, $input: CartItemUpdateInput!) {\n    updateCartItems(input: {\n      cart_id: $cartId\n      cart_items: [$input]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$d;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var listPaymentMethods = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  query ListPaymentMethods($cartId: String!) {\n    cart(cart_id: $cartId) {\n      available_payment_methods {\n        ...availablePaymentMethod\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query ListPaymentMethods($cartId: String!) {\n    cart(cart_id: $cartId) {\n      available_payment_methods {\n        ...availablePaymentMethod\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), availablePaymentMethodFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$e;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getSelectedPaymentMethod = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  query GetSelectedPaymentMethod($cartId: String!) {\n    cart(cart_id: $cartId) {\n      selected_payment_method {\n        ...selectedPaymentMethod\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query GetSelectedPaymentMethod($cartId: String!) {\n    cart(cart_id: $cartId) {\n      selected_payment_method {\n        ...selectedPaymentMethod\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), selectedPaymentMethodFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$f;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var setSelectedPaymentMethod = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  mutation SetSelectedPaymentMethod($cartId: String!, $payment: PaymentMethodInput!) {\n    setPaymentMethodOnCart(input: {\n      cart_id: $cartId\n      payment_method: $payment\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation SetSelectedPaymentMethod($cartId: String!, $payment: PaymentMethodInput!) {\n    setPaymentMethodOnCart(input: {\n      cart_id: $cartId\n      payment_method: $payment\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$g;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var setSelectedPaymentMethodWithBilling = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  mutation SetSelectedPaymentMethodWithBilling(\n    $cartId: String!,\n    $payment: PaymentMethodInput!,\n    $address: BillingAddressInput!\n  ) {\n    setBillingAddressOnCart(input: {\n      cart_id: $cartId\n      billing_address: $address\n    }) {\n      cart {\n        id\n      }\n    }\n    setPaymentMethodOnCart(input: {\n      cart_id: $cartId\n      payment_method: $payment\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation SetSelectedPaymentMethodWithBilling(\n    $cartId: String!,\n    $payment: PaymentMethodInput!,\n    $address: BillingAddressInput!\n  ) {\n    setBillingAddressOnCart(input: {\n      cart_id: $cartId\n      billing_address: $address\n    }) {\n      cart {\n        id\n      }\n    }\n    setPaymentMethodOnCart(input: {\n      cart_id: $cartId\n      payment_method: $payment\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$h;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var setSelectedPaymentMethodWithBillingAndEmail = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  mutation SetSelectedPaymentMethodWithBillingAndEmail(\n    $cartId: String!,\n    $payment: PaymentMethodInput!,\n    $address: BillingAddressInput!,\n    $email: String!\n  ) {\n    setBillingAddressOnCart(input: {\n      cart_id: $cartId\n      billing_address: $address\n    }) {\n      cart {\n        id\n      }\n    }\n    setPaymentMethodOnCart(input: {\n      cart_id: $cartId\n      payment_method: $payment\n    }) {\n      cart {\n        id\n      }\n    }\n    setGuestEmailOnCart(input: {\n      cart_id: $cartId,\n      email: $email\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation SetSelectedPaymentMethodWithBillingAndEmail(\n    $cartId: String!,\n    $payment: PaymentMethodInput!,\n    $address: BillingAddressInput!,\n    $email: String!\n  ) {\n    setBillingAddressOnCart(input: {\n      cart_id: $cartId\n      billing_address: $address\n    }) {\n      cart {\n        id\n      }\n    }\n    setPaymentMethodOnCart(input: {\n      cart_id: $cartId\n      payment_method: $payment\n    }) {\n      cart {\n        id\n      }\n    }\n    setGuestEmailOnCart(input: {\n      cart_id: $cartId,\n      email: $email\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$i;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var listShippingMethods = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  query ListShippingMethods($cartId: String!) {\n    cart(cart_id: $cartId) {\n      id\n      shipping_addresses {\n        available_shipping_methods {\n          ...availableShippingMethod\n        }\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query ListShippingMethods($cartId: String!) {\n    cart(cart_id: $cartId) {\n      id\n      shipping_addresses {\n        available_shipping_methods {\n          ...availableShippingMethod\n        }\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), availableShippingMethodFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$j;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getSelectedShippingMethod = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  query GetSelectedShippingMethod($cartId: String!) {\n    cart(cart_id: $cartId) {\n      shipping_addresses {\n        selected_shipping_method {\n          ...selectedShippingMethod\n        }\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query GetSelectedShippingMethod($cartId: String!) {\n    cart(cart_id: $cartId) {\n      shipping_addresses {\n        selected_shipping_method {\n          ...selectedShippingMethod\n        }\n      }\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), selectedShippingMethodFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$k;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var setSelectedShippingMethod = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  mutation SetSelectedShippingMethod($cartId: String!, $method: ShippingMethodInput!) {\n    setShippingMethodsOnCart(input: {\n      cart_id: $cartId\n      shipping_methods: [$method]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation SetSelectedShippingMethod($cartId: String!, $method: ShippingMethodInput!) {\n    setShippingMethodsOnCart(input: {\n      cart_id: $cartId\n      shipping_methods: [$method]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$l;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getBillingAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  query GetBillingAddress($cartId: String!) {\n    cart(cart_id: $cartId) {\n      billing_address {\n        ...cartAddress\n      }\n      email\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query GetBillingAddress($cartId: String!) {\n    cart(cart_id: $cartId) {\n      billing_address {\n        ...cartAddress\n      }\n      email\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartAddressFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$m;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var updateBillingAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  mutation UpdateBillingAddress(\n    $cartId: String!,\n    $address: BillingAddressInput!\n  ) {\n    setBillingAddressOnCart(input: {\n      cart_id: $cartId\n      billing_address: $address\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation UpdateBillingAddress(\n    $cartId: String!,\n    $address: BillingAddressInput!\n  ) {\n    setBillingAddressOnCart(input: {\n      cart_id: $cartId\n      billing_address: $address\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$n;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var updateBillingAddressWithEmail = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  mutation UpdateBillingAddress(\n    $cartId: String!,\n    $address: BillingAddressInput!,\n    $email: String!\n  ) {\n    setBillingAddressOnCart(input: {\n      cart_id: $cartId\n      billing_address: $address\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n    setGuestEmailOnCart(input: {\n      cart_id: $cartId,\n      email: $email\n    }) {\n      cart {\n        email\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation UpdateBillingAddress(\n    $cartId: String!,\n    $address: BillingAddressInput!,\n    $email: String!\n  ) {\n    setBillingAddressOnCart(input: {\n      cart_id: $cartId\n      billing_address: $address\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n    setGuestEmailOnCart(input: {\n      cart_id: $cartId,\n      email: $email\n    }) {\n      cart {\n        email\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$o;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getShippingAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  query GetShippingAddress($cartId: String!) {\n    cart(cart_id: $cartId) {\n      shipping_addresses {\n        ...cartAddress\n      }\n      email\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query GetShippingAddress($cartId: String!) {\n    cart(cart_id: $cartId) {\n      shipping_addresses {\n        ...cartAddress\n      }\n      email\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartAddressFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$p;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var updateShippingAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  mutation UpdateShippingAddress(\n    $cartId: String!,\n    $address: ShippingAddressInput!\n  ) {\n    setShippingAddressesOnCart(input: {\n      cart_id: $cartId\n      shipping_addresses: [$address]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation UpdateShippingAddress(\n    $cartId: String!,\n    $address: ShippingAddressInput!\n  ) {\n    setShippingAddressesOnCart(input: {\n      cart_id: $cartId\n      shipping_addresses: [$address]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$q;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var updateShippingAddressWithEmail = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  mutation UpdateShippingAddress(\n    $cartId: String!,\n    $address: ShippingAddressInput!,\n    $email: String!\n  ) {\n    setShippingAddressesOnCart(input: {\n      cart_id: $cartId\n      shipping_addresses: [$address]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n    setGuestEmailOnCart(input: {\n      cart_id: $cartId,\n      email: $email\n    }) {\n      cart {\n        email\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation UpdateShippingAddress(\n    $cartId: String!,\n    $address: ShippingAddressInput!,\n    $email: String!\n  ) {\n    setShippingAddressesOnCart(input: {\n      cart_id: $cartId\n      shipping_addresses: [$address]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n    setGuestEmailOnCart(input: {\n      cart_id: $cartId,\n      email: $email\n    }) {\n      cart {\n        email\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$r;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Update the shipping and billing address of the cart.
 * At the time of writing, Magento 2 processes compound queries in the order they are defined.
 * We rely on this fact and only use the return of the last query.
 * This helps us keep query complexity down and save some server CPU cycles.
 * Driver behavior is not guaranteed if Magento no longer processes compound queries in the order they are defined.
 * @type {?}
 */
var updateAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  mutation UpdateAddress($cartId: String!, $address: CartAddressInput!) {\n    setBillingAddressOnCart(input: {\n      cart_id: $cartId\n      billing_address: {\n        address: $address\n      }\n    }) {\n      cart {\n        id\n      }\n    }\n    setShippingAddressesOnCart(input: {\n      cart_id: $cartId\n      shipping_addresses: [{\n        address: $address\n      }]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation UpdateAddress($cartId: String!, $address: CartAddressInput!) {\n    setBillingAddressOnCart(input: {\n      cart_id: $cartId\n      billing_address: {\n        address: $address\n      }\n    }) {\n      cart {\n        id\n      }\n    }\n    setShippingAddressesOnCart(input: {\n      cart_id: $cartId\n      shipping_addresses: [{\n        address: $address\n      }]\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$s;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Update the shipping and billing address of the cart.
 * At the time of writing, Magento 2 processes compound queries in the order they are defined.
 * We rely on this fact and only use the return of the last query.
 * This helps us keep query complexity down and save some server CPU cycles.
 * Driver behavior is not guaranteed if Magento no longer processes compound queries in the order they are defined.
 * @type {?}
 */
var updateAddressWithEmail = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  mutation UpdateAddress($cartId: String!, $address: CartAddressInput!, $email: String!) {\n    setBillingAddressOnCart(input: {\n      cart_id: $cartId\n      billing_address: {\n        address: $address\n      }\n    }) {\n      cart {\n        id\n      }\n    }\n    setShippingAddressesOnCart(input: {\n      cart_id: $cartId\n      shipping_addresses: [{\n        address: $address\n      }]\n    }) {\n      cart {\n        id\n      }\n    }\n    setGuestEmailOnCart(input: {\n      cart_id: $cartId,\n      email: $email\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"], ["\n  mutation UpdateAddress($cartId: String!, $address: CartAddressInput!, $email: String!) {\n    setBillingAddressOnCart(input: {\n      cart_id: $cartId\n      billing_address: {\n        address: $address\n      }\n    }) {\n      cart {\n        id\n      }\n    }\n    setShippingAddressesOnCart(input: {\n      cart_id: $cartId\n      shipping_addresses: [{\n        address: $address\n      }]\n    }) {\n      cart {\n        id\n      }\n    }\n    setGuestEmailOnCart(input: {\n      cart_id: $cartId,\n      email: $email\n    }) {\n      cart {\n        ...cart\n        ", "\n      }\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$t;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getCart = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  query GetCart($cartId: String!) {\n    cart(cart_id: $cartId) {\n      ...cart\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query GetCart($cartId: String!) {\n    cart(cart_id: $cartId) {\n      ...cart\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$u;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var createCart = gql(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  mutation CreateCart {\n    createEmptyCart\n  }\n"], ["\n  mutation CreateCart {\n    createEmptyCart\n  }\n"])));
var templateObject_1$v;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var placeOrder = gql(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  mutation PlaceOrder($cartId: String!) {\n    placeOrder(\n      input: {\n        cart_id: $cartId\n      }\n    ) {\n      order {\n        order_number\n      }\n    }\n  }\n"], ["\n  mutation PlaceOrder($cartId: String!) {\n    placeOrder(\n      input: {\n        cart_id: $cartId\n      }\n    ) {\n      order {\n        order_number\n      }\n    }\n  }\n"])));
var templateObject_1$w;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var cartTotalsFragment = gql(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  fragment cartTotals on Cart {\n    id\n    shipping_addresses {\n      ...cartAddress\n      ... on ShippingCartAddress {\n        selected_shipping_method {\n          ...selectedShippingMethod\n        }\n      }\n    }\n    prices {\n      ...prices\n    }\n  }\n  ", "\n  ", "\n  ", "\n"], ["\n  fragment cartTotals on Cart {\n    id\n    shipping_addresses {\n      ...cartAddress\n      ... on ShippingCartAddress {\n        selected_shipping_method {\n          ...selectedShippingMethod\n        }\n      }\n    }\n    prices {\n      ...prices\n    }\n  }\n  ", "\n  ", "\n  ", "\n"])), cartAddressFragment, selectedShippingMethodFragment, pricesFragment);
var templateObject_1$x;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var applyCoupon = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  mutation ApplyCoupon($cartId: String!, $couponCode: String!) {\n    applyCouponToCart(\n      input: {\n        cart_id: $cartId,\n        coupon_code: $couponCode\n      }\n    ) {\n      cart {\n        id\n        items {\n          ...cartItem\n        }\n        applied_coupons {\n          ...cartCoupon\n\t\t\t\t}\n\t\t\t\t...cartTotals\n        ", "\n      }\n    }\n  }\n  ", "\n\t", "\n\t", "\n  ", "\n"], ["\n  mutation ApplyCoupon($cartId: String!, $couponCode: String!) {\n    applyCouponToCart(\n      input: {\n        cart_id: $cartId,\n        coupon_code: $couponCode\n      }\n    ) {\n      cart {\n        id\n        items {\n          ...cartItem\n        }\n        applied_coupons {\n          ...cartCoupon\n\t\t\t\t}\n\t\t\t\t...cartTotals\n        ", "\n      }\n    }\n  }\n  ", "\n\t", "\n\t", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartItemFragment, cartCouponFragment, cartTotalsFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$y;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var listCartCoupons = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  query listCartCoupons($cartId: String!) {\n    cart(cart_id: $cartId) {\n      applied_coupons {\n\t\t\t\t...cartCoupon\n\t\t\t}\n      ", "\n    }\n  }\n  ", "\n  ", "\n"], ["\n  query listCartCoupons($cartId: String!) {\n    cart(cart_id: $cartId) {\n      applied_coupons {\n\t\t\t\t...cartCoupon\n\t\t\t}\n      ", "\n    }\n  }\n  ", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartCouponFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$z;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var removeAllCoupons = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
function (extraCartFragments) {
    if (extraCartFragments === void 0) { extraCartFragments = []; }
    return gql(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  mutation RemoveAllCoupons($cartId: String!) {\n    removeCouponFromCart(\n      input: {\n        cart_id: $cartId\n      }\n    ) {\n      cart {\n        id\n        items {\n          ...cartItem\n        }\n        applied_coupons {\n          ...cartCoupon\n\t\t\t\t}\n\t\t\t\t...cartTotals\n        ", "\n      }\n    }\n  }\n  ", "\n\t", "\n\t", "\n  ", "\n"], ["\n  mutation RemoveAllCoupons($cartId: String!) {\n    removeCouponFromCart(\n      input: {\n        cart_id: $cartId\n      }\n    ) {\n      cart {\n        id\n        items {\n          ...cartItem\n        }\n        applied_coupons {\n          ...cartCoupon\n\t\t\t\t}\n\t\t\t\t...cartTotals\n        ", "\n      }\n    }\n  }\n  ", "\n\t", "\n\t", "\n  ", "\n"])), daffBuildFragmentNameSpread.apply(void 0, __spread(extraCartFragments)), cartItemFragment, cartCouponFragment, cartTotalsFragment, daffBuildFragmentDefinition.apply(void 0, __spread(extraCartFragments)));
});
var templateObject_1$A;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var MagentoCartGraphQlErrorCode = {
    CART_NOT_FOUND: 'graphql-no-such-entity',
    BAD_INPUT: 'graphql-input',
};

var _a, _b;
/** @type {?} */
var DaffCartMagentoErrorMap = (_a = {},
    _a[MagentoCartGraphQlErrorCode.CART_NOT_FOUND] = DaffCartNotFoundError,
    _a[MagentoCartGraphQlErrorCode.BAD_INPUT] = DaffBadInputError,
    _a);
/** @type {?} */
var DaffCartMagentoErrorMessageRegexMap = (_b = {},
    _b[DaffCartDriverErrorCodes.INVALID_COUPON_CODE] = /The coupon code isn\'t valid/,
    _b);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} error
 * @return {?}
 */
function transformMagentoCartGraphQlError(error) {
    // TODO: readdress this when we move to eslint
    // tslint:disable-next-line
    for (var code in DaffCartMagentoErrorMessageRegexMap) {
        /** @type {?} */
        var matchIndex = error.graphQLErrors[0].message.search(DaffCartMagentoErrorMessageRegexMap[code]);
        if (matchIndex > -1 && DaffCartDriverErrorMap[code]) {
            return new DaffCartDriverErrorMap[code](error.message);
        }
    }
    return daffTransformMagentoError(error, DaffCartMagentoErrorMap);
}
;
/**
 * @param {?} error
 * @return {?}
 */
function transformCartMagentoError(error) {
    // TODO: optional chaining
    if (error.graphQLErrors && error.graphQLErrors.length) {
        return transformMagentoCartGraphQlError(error);
    }
    else {
        return daffTransformMagentoError(error, DaffCartMagentoErrorMap);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DAFF_MAGENTO_CART_MUTATION_QUEUE = new InjectionToken('DAFF_MAGENTO_CART_MUTATION_QUEUE', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    function () { return new DaffQueuedApollo(inject(Apollo)); })
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for making Magento GraphQL queries for carts.
 */
var DaffMagentoCartService = /** @class */ (function () {
    function DaffMagentoCartService(apollo, mutationQueue, cartTransformer, cartItemDriver, extraCartFragments) {
        this.apollo = apollo;
        this.mutationQueue = mutationQueue;
        this.cartTransformer = cartTransformer;
        this.cartItemDriver = cartItemDriver;
        this.extraCartFragments = extraCartFragments;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.apollo.query({
            query: getCart(this.extraCartFragments),
            variables: { cartId: cartId }
        }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(transformCartMagentoError(error)); })), map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.cart); })));
    };
    /**
     * @return {?}
     */
    DaffMagentoCartService.prototype.create = /**
     * @return {?}
     */
    function () {
        return this.mutationQueue.mutate({ mutation: createCart }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return ({ id: result.data.createEmptyCart }); })));
    };
    /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    DaffMagentoCartService.prototype.addToCart = /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    function (productId, qty) {
        throw new Error('Method is deprecated. Use DaffCartItemServiceInterface#add instead.');
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartService.prototype.clear = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.cartItemDriver.list(cartId).pipe(switchMap((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            return forkJoin.apply(void 0, __spread(items.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return _this.cartItemDriver.delete(cartId, item.item_id);
            }))));
        })), switchMap((/**
         * @return {?}
         */
        function () { return _this.get(cartId); })));
    };
    DaffMagentoCartService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: DaffMagentoCartTransformer },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartItemDriver,] }] },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] }
    ]; };
    /** @nocollapse */ DaffMagentoCartService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartService_Factory() { return new DaffMagentoCartService(ɵɵinject(Apollo), ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DaffMagentoCartTransformer), ɵɵinject(DaffCartItemDriver), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS)); }, token: DaffMagentoCartService, providedIn: "root" });
    return DaffMagentoCartService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartService.prototype.cartTransformer;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartService.prototype.cartItemDriver;
    /** @type {?} */
    DaffMagentoCartService.prototype.extraCartFragments;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} item
 * @return {?}
 */
function transformCompositeCartItem(item) {
    return {
        input: transformSimpleCartItem(item),
        options: item.options ? item.options.map(transformCompositeCartItemOption) : []
    };
}
/**
 * @param {?} item
 * @return {?}
 */
function transformSimpleCartItem(item) {
    return {
        quantity: item.qty,
        sku: item.productId
    };
}
/**
 * @param {?} item
 * @return {?}
 */
function transformConfigurableCartItem(item) {
    return {
        parentSku: item.productId,
        data: {
            quantity: item.qty,
            sku: String(item.variantId)
        },
    };
}
/**
 * @param {?} option
 * @return {?}
 */
function transformCompositeCartItemOption(option) {
    return {
        id: Number(option.code),
        quantity: option.quantity,
        value: [option.value]
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for making Magento GraphQL queries for carts.
 */
var DaffMagentoCartItemService = /** @class */ (function () {
    function DaffMagentoCartItemService(apollo, mutationQueue, extraCartFragments, cartTransformer, cartItemUpdateInputTransformer) {
        this.apollo = apollo;
        this.mutationQueue = mutationQueue;
        this.extraCartFragments = extraCartFragments;
        this.cartTransformer = cartTransformer;
        this.cartItemUpdateInputTransformer = cartItemUpdateInputTransformer;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartItemService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.apollo.query({
            query: listCartItems(this.extraCartFragments),
            variables: { cartId: cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.data.cart.items.map(transformMagentoCartItem); })));
    };
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    DaffMagentoCartItemService.prototype.get = /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    function (cartId, itemId) {
        return this.list(cartId).pipe(map((/**
         * @param {?} items
         * @return {?}
         */
        function (items) { return items.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return Number(item.item_id) === itemId; })); })));
    };
    /**
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    DaffMagentoCartItemService.prototype.add = /**
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    function (cartId, cartItemInput) {
        switch (cartItemInput.type) {
            case (DaffCartItemInputType.Composite):
                return this.addBundledProduct(cartId, (/** @type {?} */ (cartItemInput)));
            case (DaffCartItemInputType.Configurable):
                return this.addConfigurableProduct(cartId, (/** @type {?} */ (cartItemInput)));
            default:
                return this.addSimpleProduct(cartId, cartItemInput);
        }
    };
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} changes
     * @return {?}
     */
    DaffMagentoCartItemService.prototype.update = /**
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} changes
     * @return {?}
     */
    function (cartId, itemId, changes) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: updateCartItem(this.extraCartFragments),
            variables: {
                cartId: cartId,
                input: this.cartItemUpdateInputTransformer.transform(__assign({}, changes, { item_id: itemId }))
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.updateCartItems.cart); })));
    };
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    DaffMagentoCartItemService.prototype.delete = /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    function (cartId, itemId) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: removeCartItem(this.extraCartFragments),
            variables: {
                cartId: cartId,
                itemId: itemId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.removeItemFromCart.cart); })));
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    DaffMagentoCartItemService.prototype.addBundledProduct = /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    function (cartId, cartItemInput) {
        var _this = this;
        /** @type {?} */
        var bundleInput = transformCompositeCartItem(cartItemInput);
        return this.mutationQueue.mutate({
            mutation: addBundleCartItem(this.extraCartFragments),
            variables: {
                cartId: cartId,
                input: bundleInput.input,
                options: bundleInput.options
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.addBundleProductsToCart.cart); })));
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    DaffMagentoCartItemService.prototype.addConfigurableProduct = /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    function (cartId, cartItemInput) {
        var _this = this;
        /** @type {?} */
        var configurableInput = transformConfigurableCartItem(cartItemInput);
        return this.mutationQueue.mutate({
            mutation: addConfigurableCartItem(this.extraCartFragments),
            variables: {
                cartId: cartId,
                parentSku: configurableInput.parentSku,
                data: configurableInput.data
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.addConfigurableProductsToCart.cart); })));
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    DaffMagentoCartItemService.prototype.addSimpleProduct = /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    function (cartId, cartItemInput) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: addSimpleCartItem(this.extraCartFragments),
            variables: {
                cartId: cartId,
                input: transformSimpleCartItem(cartItemInput)
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.addSimpleProductsToCart.cart); })));
    };
    DaffMagentoCartItemService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartItemService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
        { type: DaffMagentoCartTransformer },
        { type: DaffMagentoCartItemUpdateInputTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartItemService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartItemService_Factory() { return new DaffMagentoCartItemService(ɵɵinject(Apollo), ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), ɵɵinject(DaffMagentoCartTransformer), ɵɵinject(DaffMagentoCartItemUpdateInputTransformer)); }, token: DaffMagentoCartItemService, providedIn: "root" });
    return DaffMagentoCartItemService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartItemService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartItemService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartItemService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartItemService.prototype.cartTransformer;
    /** @type {?} */
    DaffMagentoCartItemService.prototype.cartItemUpdateInputTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for making Magento GraphQL queries for carts.
 */
var DaffMagentoCartPaymentService = /** @class */ (function () {
    function DaffMagentoCartPaymentService(apollo, mutationQueue, cartTransformer, paymentTransformer, paymentInputTransformer, cartAddressInputTransformer, extraCartFragments) {
        this.apollo = apollo;
        this.mutationQueue = mutationQueue;
        this.cartTransformer = cartTransformer;
        this.paymentTransformer = paymentTransformer;
        this.paymentInputTransformer = paymentInputTransformer;
        this.cartAddressInputTransformer = cartAddressInputTransformer;
        this.extraCartFragments = extraCartFragments;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartPaymentService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.apollo.query({
            query: getSelectedPaymentMethod(this.extraCartFragments),
            variables: { cartId: cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.paymentTransformer.transform(result.data.cart.selected_payment_method); })));
    };
    /**
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    DaffMagentoCartPaymentService.prototype.update = /**
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    function (cartId, payment) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: setSelectedPaymentMethod(this.extraCartFragments),
            variables: {
                cartId: cartId,
                payment: this.paymentInputTransformer.transform(payment)
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.setPaymentMethodOnCart.cart); })));
    };
    /**
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartPaymentService.prototype.updateWithBilling = /**
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    function (cartId, payment, address) {
        return address.email
            ? this.updateWithBillingAddressAndEmail(cartId, payment, address)
            : this.updateWithBillingAddress(cartId, payment, address);
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartPaymentService.prototype.remove = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.mutationQueue.mutate({
            mutation: setSelectedPaymentMethod(this.extraCartFragments),
            variables: {
                cartId: cartId,
                payment: { code: '' }
            }
        }).pipe(mapTo(undefined));
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartPaymentService.prototype.updateWithBillingAddress = /**
     * @private
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    function (cartId, payment, address) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: setSelectedPaymentMethodWithBilling(this.extraCartFragments),
            variables: {
                cartId: cartId,
                payment: this.paymentInputTransformer.transform(payment),
                address: this.cartAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return _this.cartTransformer.transform(resp.data.setPaymentMethodOnCart.cart); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(transformCartMagentoError(error)); })));
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartPaymentService.prototype.updateWithBillingAddressAndEmail = /**
     * @private
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    function (cartId, payment, address) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: setSelectedPaymentMethodWithBillingAndEmail(this.extraCartFragments),
            variables: {
                cartId: cartId,
                email: address.email,
                payment: this.paymentInputTransformer.transform(payment),
                address: this.cartAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return _this.cartTransformer.transform(resp.data.setGuestEmailOnCart.cart); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(transformCartMagentoError(error)); })));
    };
    DaffMagentoCartPaymentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartPaymentService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: DaffMagentoCartTransformer },
        { type: DaffMagentoCartPaymentTransformer },
        { type: DaffMagentoPaymentMethodInputTransformer },
        { type: DaffMagentoBillingAddressInputTransformer },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] }
    ]; };
    /** @nocollapse */ DaffMagentoCartPaymentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartPaymentService_Factory() { return new DaffMagentoCartPaymentService(ɵɵinject(Apollo), ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DaffMagentoCartTransformer), ɵɵinject(DaffMagentoCartPaymentTransformer), ɵɵinject(DaffMagentoPaymentMethodInputTransformer), ɵɵinject(DaffMagentoBillingAddressInputTransformer), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS)); }, token: DaffMagentoCartPaymentService, providedIn: "root" });
    return DaffMagentoCartPaymentService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartPaymentService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartPaymentService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartPaymentService.prototype.cartTransformer;
    /** @type {?} */
    DaffMagentoCartPaymentService.prototype.paymentTransformer;
    /** @type {?} */
    DaffMagentoCartPaymentService.prototype.paymentInputTransformer;
    /** @type {?} */
    DaffMagentoCartPaymentService.prototype.cartAddressInputTransformer;
    /** @type {?} */
    DaffMagentoCartPaymentService.prototype.extraCartFragments;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for making Magento GraphQL queries for carts.
 */
var DaffMagentoCartPaymentMethodsService = /** @class */ (function () {
    function DaffMagentoCartPaymentMethodsService(apollo, extraCartFragments, paymentTransformer) {
        this.apollo = apollo;
        this.extraCartFragments = extraCartFragments;
        this.paymentTransformer = paymentTransformer;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartPaymentMethodsService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.apollo.query({
            query: listPaymentMethods(this.extraCartFragments),
            variables: { cartId: cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.data.cart.available_payment_methods.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return _this.paymentTransformer.transform(item); })); })));
    };
    DaffMagentoCartPaymentMethodsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartPaymentMethodsService.ctorParameters = function () { return [
        { type: Apollo },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
        { type: DaffMagentoCartPaymentTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartPaymentMethodsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartPaymentMethodsService_Factory() { return new DaffMagentoCartPaymentMethodsService(ɵɵinject(Apollo), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), ɵɵinject(DaffMagentoCartPaymentTransformer)); }, token: DaffMagentoCartPaymentMethodsService, providedIn: "root" });
    return DaffMagentoCartPaymentMethodsService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartPaymentMethodsService.prototype.apollo;
    /** @type {?} */
    DaffMagentoCartPaymentMethodsService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartPaymentMethodsService.prototype.paymentTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for making Magento GraphQL queries for carts.
 */
var DaffMagentoCartBillingAddressService = /** @class */ (function () {
    function DaffMagentoCartBillingAddressService(apollo, mutationQueue, extraCartFragments, cartTransformer, billingAddressTransformer, billingAddressInputTransformer) {
        this.apollo = apollo;
        this.mutationQueue = mutationQueue;
        this.extraCartFragments = extraCartFragments;
        this.cartTransformer = cartTransformer;
        this.billingAddressTransformer = billingAddressTransformer;
        this.billingAddressInputTransformer = billingAddressInputTransformer;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartBillingAddressService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.apollo.query({
            query: getBillingAddress(this.extraCartFragments),
            variables: { cartId: cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.data.cart.billing_address
            ? _this.billingAddressTransformer.transform(__assign({}, result.data.cart.billing_address, { email: result.data.cart.email }))
            : null; })));
    };
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartBillingAddressService.prototype.update = /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        return address.email ? this.updateAddressWithEmail(cartId, address) : this.updateAddress(cartId, address);
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartBillingAddressService.prototype.updateAddress = /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: updateBillingAddress(this.extraCartFragments),
            variables: {
                cartId: cartId,
                address: this.billingAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return _this.cartTransformer.transform(resp.data.setBillingAddressOnCart.cart); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(transformCartMagentoError(error)); })));
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartBillingAddressService.prototype.updateAddressWithEmail = /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: updateBillingAddressWithEmail(this.extraCartFragments),
            variables: {
                cartId: cartId,
                email: address.email,
                address: this.billingAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return _this.cartTransformer.transform(__assign({}, resp.data.setBillingAddressOnCart.cart, { email: resp.data.setGuestEmailOnCart.cart.email })); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(transformCartMagentoError(error)); })));
    };
    DaffMagentoCartBillingAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartBillingAddressService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
        { type: DaffMagentoCartTransformer },
        { type: DaffMagentoBillingAddressTransformer },
        { type: DaffMagentoBillingAddressInputTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartBillingAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartBillingAddressService_Factory() { return new DaffMagentoCartBillingAddressService(ɵɵinject(Apollo), ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), ɵɵinject(DaffMagentoCartTransformer), ɵɵinject(DaffMagentoBillingAddressTransformer), ɵɵinject(DaffMagentoBillingAddressInputTransformer)); }, token: DaffMagentoCartBillingAddressService, providedIn: "root" });
    return DaffMagentoCartBillingAddressService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartBillingAddressService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartBillingAddressService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartBillingAddressService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartBillingAddressService.prototype.cartTransformer;
    /** @type {?} */
    DaffMagentoCartBillingAddressService.prototype.billingAddressTransformer;
    /** @type {?} */
    DaffMagentoCartBillingAddressService.prototype.billingAddressInputTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for making Magento GraphQL queries for a cart's shipping address.
 */
var DaffMagentoCartShippingAddressService = /** @class */ (function () {
    function DaffMagentoCartShippingAddressService(apollo, mutationQueue, extraCartFragments, cartTransformer, shippingAddressTransformer, shippingAddressInputTransformer) {
        this.apollo = apollo;
        this.mutationQueue = mutationQueue;
        this.extraCartFragments = extraCartFragments;
        this.cartTransformer = cartTransformer;
        this.shippingAddressTransformer = shippingAddressTransformer;
        this.shippingAddressInputTransformer = shippingAddressInputTransformer;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartShippingAddressService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.apollo.query({
            query: getShippingAddress(this.extraCartFragments),
            variables: { cartId: cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.data.cart.shipping_addresses[0]
            ? _this.shippingAddressTransformer.transform(__assign({}, result.data.cart.shipping_addresses[0], { email: result.data.cart.email }))
            : null; })));
    };
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartShippingAddressService.prototype.update = /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        return address.email ? this.updateAddressWithEmail(cartId, address) : this.updateAddress(cartId, address);
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartShippingAddressService.prototype.updateAddress = /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: updateShippingAddress(this.extraCartFragments),
            variables: {
                cartId: cartId,
                address: this.shippingAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return _this.cartTransformer.transform(resp.data.setShippingAddressesOnCart.cart); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(transformCartMagentoError(error)); })));
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartShippingAddressService.prototype.updateAddressWithEmail = /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: updateShippingAddressWithEmail(this.extraCartFragments),
            variables: {
                cartId: cartId,
                email: address.email,
                address: this.shippingAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return _this.cartTransformer.transform(__assign({}, resp.data.setShippingAddressesOnCart.cart, { email: resp.data.setGuestEmailOnCart.cart.email })); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(transformCartMagentoError(error)); })));
    };
    DaffMagentoCartShippingAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartShippingAddressService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
        { type: DaffMagentoCartTransformer },
        { type: DaffMagentoShippingAddressTransformer },
        { type: DaffMagentoShippingAddressInputTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartShippingAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingAddressService_Factory() { return new DaffMagentoCartShippingAddressService(ɵɵinject(Apollo), ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), ɵɵinject(DaffMagentoCartTransformer), ɵɵinject(DaffMagentoShippingAddressTransformer), ɵɵinject(DaffMagentoShippingAddressInputTransformer)); }, token: DaffMagentoCartShippingAddressService, providedIn: "root" });
    return DaffMagentoCartShippingAddressService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartShippingAddressService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartShippingAddressService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartShippingAddressService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartShippingAddressService.prototype.cartTransformer;
    /** @type {?} */
    DaffMagentoCartShippingAddressService.prototype.shippingAddressTransformer;
    /** @type {?} */
    DaffMagentoCartShippingAddressService.prototype.shippingAddressInputTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for making Magento GraphQL queries for carts' shipping methods.
 */
var DaffMagentoCartShippingMethodsService = /** @class */ (function () {
    function DaffMagentoCartShippingMethodsService(apollo, extraCartFragments, shippingRateTransformer) {
        this.apollo = apollo;
        this.extraCartFragments = extraCartFragments;
        this.shippingRateTransformer = shippingRateTransformer;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartShippingMethodsService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.apollo.query({
            query: listShippingMethods(this.extraCartFragments),
            variables: { cartId: cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.data.cart.shipping_addresses[0].available_shipping_methods.map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            return _this.shippingRateTransformer.transform(item);
        })); })));
    };
    DaffMagentoCartShippingMethodsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartShippingMethodsService.ctorParameters = function () { return [
        { type: Apollo },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
        { type: DaffMagentoCartShippingRateTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartShippingMethodsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingMethodsService_Factory() { return new DaffMagentoCartShippingMethodsService(ɵɵinject(Apollo), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), ɵɵinject(DaffMagentoCartShippingRateTransformer)); }, token: DaffMagentoCartShippingMethodsService, providedIn: "root" });
    return DaffMagentoCartShippingMethodsService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartShippingMethodsService.prototype.apollo;
    /** @type {?} */
    DaffMagentoCartShippingMethodsService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartShippingMethodsService.prototype.shippingRateTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for making Magento GraphQL queries for carts.
 */
var DaffMagentoCartShippingInformationService = /** @class */ (function () {
    function DaffMagentoCartShippingInformationService(apollo, mutationQueue, extraCartFragments, cartTransformer, shippingRateTransformer, shippingMethodInputTransformer) {
        this.apollo = apollo;
        this.mutationQueue = mutationQueue;
        this.extraCartFragments = extraCartFragments;
        this.cartTransformer = cartTransformer;
        this.shippingRateTransformer = shippingRateTransformer;
        this.shippingMethodInputTransformer = shippingMethodInputTransformer;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartShippingInformationService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.apollo.query({
            query: getSelectedShippingMethod(this.extraCartFragments),
            variables: { cartId: cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.data.cart.shipping_addresses[0]
            ? _this.shippingRateTransformer.transform(result.data.cart.shipping_addresses[0].selected_shipping_method)
            : null; })));
    };
    /**
     * @param {?} cartId
     * @param {?} shippingInfo
     * @return {?}
     */
    DaffMagentoCartShippingInformationService.prototype.update = /**
     * @param {?} cartId
     * @param {?} shippingInfo
     * @return {?}
     */
    function (cartId, shippingInfo) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: setSelectedShippingMethod(this.extraCartFragments),
            variables: {
                cartId: cartId,
                method: this.shippingMethodInputTransformer.transform(shippingInfo)
            }
        }).pipe(switchMap((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            // because Magento only returns the selected shipping method for the mutation
            // we have to manually refetch the available shipping methods
            // with fetchPolicy: 'network-only' in order to skip the cache
            return _this.apollo.query({
                query: listShippingMethods(_this.extraCartFragments),
                variables: { cartId: cartId },
                fetchPolicy: 'network-only'
            }).pipe(map((/**
             * @param {?} shippingMethods
             * @return {?}
             */
            function (shippingMethods) { return (__assign({}, _this.cartTransformer.transform(result.data.setShippingMethodsOnCart.cart), { available_shipping_methods: shippingMethods.data.cart.shipping_addresses[0].available_shipping_methods.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    return _this.shippingRateTransformer.transform(item);
                })) })); })));
        })));
    };
    /**
     * @param {?} cartId
     * @param {?=} id
     * @return {?}
     */
    DaffMagentoCartShippingInformationService.prototype.delete = /**
     * @param {?} cartId
     * @param {?=} id
     * @return {?}
     */
    function (cartId, id) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: setSelectedShippingMethod(this.extraCartFragments),
            variables: {
                cartId: cartId,
                method: {
                    carrier_code: '',
                    method_code: ''
                }
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.setShippingMethodsOnCart.cart); })));
    };
    DaffMagentoCartShippingInformationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartShippingInformationService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
        { type: DaffMagentoCartTransformer },
        { type: DaffMagentoCartShippingRateTransformer },
        { type: DaffMagentoShippingMethodInputTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartShippingInformationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingInformationService_Factory() { return new DaffMagentoCartShippingInformationService(ɵɵinject(Apollo), ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), ɵɵinject(DaffMagentoCartTransformer), ɵɵinject(DaffMagentoCartShippingRateTransformer), ɵɵinject(DaffMagentoShippingMethodInputTransformer)); }, token: DaffMagentoCartShippingInformationService, providedIn: "root" });
    return DaffMagentoCartShippingInformationService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartShippingInformationService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartShippingInformationService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartShippingInformationService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartShippingInformationService.prototype.cartTransformer;
    /** @type {?} */
    DaffMagentoCartShippingInformationService.prototype.shippingRateTransformer;
    /** @type {?} */
    DaffMagentoCartShippingInformationService.prototype.shippingMethodInputTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for making Magento GraphQL queries for carts.
 */
var DaffMagentoCartAddressService = /** @class */ (function () {
    function DaffMagentoCartAddressService(mutationQueue, extraCartFragments, cartTransformer, cartAddressTransformer, cartAddressInputTransformer) {
        this.mutationQueue = mutationQueue;
        this.extraCartFragments = extraCartFragments;
        this.cartTransformer = cartTransformer;
        this.cartAddressTransformer = cartAddressTransformer;
        this.cartAddressInputTransformer = cartAddressInputTransformer;
    }
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartAddressService.prototype.update = /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        return address.email ? this.updateAddressWithEmail(cartId, address) : this.updateAddress(cartId, address);
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartAddressService.prototype.updateAddress = /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: updateAddress(this.extraCartFragments),
            variables: {
                cartId: cartId,
                address: this.cartAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return _this.cartTransformer.transform(resp.data.setShippingAddressesOnCart.cart); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(transformCartMagentoError(error)); })));
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartAddressService.prototype.updateAddressWithEmail = /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (cartId, address) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: updateAddressWithEmail(this.extraCartFragments),
            variables: {
                cartId: cartId,
                email: address.email,
                address: this.cartAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return _this.cartTransformer.transform(resp.data.setGuestEmailOnCart.cart); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(transformCartMagentoError(error)); })));
    };
    DaffMagentoCartAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartAddressService.ctorParameters = function () { return [
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
        { type: DaffMagentoCartTransformer },
        { type: DaffMagentoShippingAddressTransformer },
        { type: DaffMagentoCartAddressInputTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartAddressService_Factory() { return new DaffMagentoCartAddressService(ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), ɵɵinject(DaffMagentoCartTransformer), ɵɵinject(DaffMagentoShippingAddressTransformer), ɵɵinject(DaffMagentoCartAddressInputTransformer)); }, token: DaffMagentoCartAddressService, providedIn: "root" });
    return DaffMagentoCartAddressService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartAddressService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartAddressService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartAddressService.prototype.cartTransformer;
    /** @type {?} */
    DaffMagentoCartAddressService.prototype.cartAddressTransformer;
    /** @type {?} */
    DaffMagentoCartAddressService.prototype.cartAddressInputTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for making Magento GraphQL queries for carts.
 */
var DaffMagentoCartOrderService = /** @class */ (function () {
    function DaffMagentoCartOrderService(mutationQueue, cartTransformer) {
        this.mutationQueue = mutationQueue;
        this.cartTransformer = cartTransformer;
    }
    /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    DaffMagentoCartOrderService.prototype.placeOrder = /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    function (cartId, payment) {
        return this.mutationQueue.mutate({
            mutation: placeOrder,
            variables: {
                cartId: cartId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return ({
            id: result.data.placeOrder.order.order_number,
            orderId: result.data.placeOrder.order.order_number,
            cartId: cartId
        }); })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformCartMagentoError(err)); })));
    };
    DaffMagentoCartOrderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartOrderService.ctorParameters = function () { return [
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: DaffMagentoCartTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartOrderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartOrderService_Factory() { return new DaffMagentoCartOrderService(ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DaffMagentoCartTransformer)); }, token: DaffMagentoCartOrderService, providedIn: "root" });
    return DaffMagentoCartOrderService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartOrderService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartOrderService.prototype.cartTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms magento carts into an object usable by daffodil.
 */
var DaffMagentoCartCouponResponseTransformer = /** @class */ (function () {
    function DaffMagentoCartCouponResponseTransformer() {
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartCouponResponseTransformer.prototype.transformCartItems = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            items: cart.items.map(transformMagentoCartItem),
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartCouponResponseTransformer.prototype.transformTotals = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            grand_total: cart.prices.grand_total.value,
            subtotal: cart.prices.subtotal_excluding_tax.value,
        };
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    DaffMagentoCartCouponResponseTransformer.prototype.transformCoupons = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        return {
            coupons: cart.applied_coupons
                ? cart.applied_coupons.map(daffMagentoCouponTransform)
                : []
        };
    };
    /**
     * Transforms the MagentoCart from the cart coupon operations into a DaffCart partial.
     * @param cart the cart from a magento cart query.
     */
    /**
     * Transforms the MagentoCart from the cart coupon operations into a DaffCart partial.
     * @param {?} cart the cart from a magento cart query.
     * @return {?}
     */
    DaffMagentoCartCouponResponseTransformer.prototype.transform = /**
     * Transforms the MagentoCart from the cart coupon operations into a DaffCart partial.
     * @param {?} cart the cart from a magento cart query.
     * @return {?}
     */
    function (cart) {
        return cart ? __assign({}, this.transformCartItems(cart), this.transformCoupons(cart), this.transformTotals(cart), transformCartTotals(cart), { id: cart.id }) : null;
    };
    DaffMagentoCartCouponResponseTransformer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoCartCouponResponseTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartCouponResponseTransformer_Factory() { return new DaffMagentoCartCouponResponseTransformer(); }, token: DaffMagentoCartCouponResponseTransformer, providedIn: "root" });
    return DaffMagentoCartCouponResponseTransformer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for making Magento GraphQL queries for carts.
 */
var DaffMagentoCartCouponService = /** @class */ (function () {
    function DaffMagentoCartCouponService(mutationQueue, extraCartFragments, cartTransformer) {
        this.mutationQueue = mutationQueue;
        this.extraCartFragments = extraCartFragments;
        this.cartTransformer = cartTransformer;
    }
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    DaffMagentoCartCouponService.prototype.apply = /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    function (cartId, coupon) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: applyCoupon(this.extraCartFragments),
            variables: {
                cartId: cartId,
                couponCode: coupon.code
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.applyCouponToCart.cart); })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformCartMagentoError(err)); })));
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartCouponService.prototype.list = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.mutationQueue.mutate({
            mutation: listCartCoupons(this.extraCartFragments),
            variables: {
                cartId: cartId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return result.data.cart.applied_coupons.map(daffMagentoCouponTransform); })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformCartMagentoError(err)); })));
    };
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    DaffMagentoCartCouponService.prototype.remove = /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    function (cartId, coupon) {
        return this.removeAll(cartId);
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartCouponService.prototype.removeAll = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: removeAllCoupons(this.extraCartFragments),
            variables: {
                cartId: cartId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.removeCouponFromCart.cart); })), catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return throwError(transformCartMagentoError(err)); })));
    };
    DaffMagentoCartCouponService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartCouponService.ctorParameters = function () { return [
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
        { type: DaffMagentoCartCouponResponseTransformer }
    ]; };
    /** @nocollapse */ DaffMagentoCartCouponService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartCouponService_Factory() { return new DaffMagentoCartCouponService(ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), ɵɵinject(DaffMagentoCartCouponResponseTransformer)); }, token: DaffMagentoCartCouponService, providedIn: "root" });
    return DaffMagentoCartCouponService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartCouponService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartCouponService.prototype.extraCartFragments;
    /** @type {?} */
    DaffMagentoCartCouponService.prototype.cartTransformer;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffCartMagentoDriverModule = /** @class */ (function () {
    function DaffCartMagentoDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffCartMagentoDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffCartMagentoDriverModule,
            providers: [
                {
                    provide: DaffCartDriver,
                    useExisting: DaffMagentoCartService
                },
                {
                    provide: DaffCartItemDriver,
                    useExisting: DaffMagentoCartItemService
                },
                {
                    provide: DaffCartAddressDriver,
                    useExisting: DaffMagentoCartAddressService
                },
                {
                    provide: DaffCartBillingAddressDriver,
                    useExisting: DaffMagentoCartBillingAddressService
                },
                {
                    provide: DaffCartShippingAddressDriver,
                    useExisting: DaffMagentoCartShippingAddressService
                },
                {
                    provide: DaffCartShippingMethodsDriver,
                    useExisting: DaffMagentoCartShippingMethodsService
                },
                {
                    provide: DaffCartShippingInformationDriver,
                    useExisting: DaffMagentoCartShippingInformationService
                },
                {
                    provide: DaffCartPaymentDriver,
                    useExisting: DaffMagentoCartPaymentService
                },
                {
                    provide: DaffCartPaymentMethodsDriver,
                    useExisting: DaffMagentoCartPaymentMethodsService
                },
                {
                    provide: DaffCartOrderDriver,
                    useExisting: DaffMagentoCartOrderService
                },
                {
                    provide: DaffCartCouponDriver,
                    useExisting: DaffMagentoCartCouponService
                },
                // output transformers
                DaffMagentoBillingAddressTransformer,
                DaffMagentoCartAddressTransformer,
                DaffMagentoCartPaymentTransformer,
                DaffMagentoCartShippingInformationTransformer,
                DaffMagentoCartShippingRateTransformer,
                DaffMagentoCartTransformer,
                DaffMagentoShippingAddressTransformer,
                DaffMagentoCartCouponResponseTransformer,
                // input transformers
                DaffMagentoCartAddressInputTransformer,
                DaffMagentoShippingAddressInputTransformer,
                DaffMagentoBillingAddressInputTransformer,
                DaffMagentoCartItemUpdateInputTransformer,
                DaffMagentoPaymentMethodInputTransformer,
                DaffMagentoShippingMethodInputTransformer,
            ]
        };
    };
    DaffCartMagentoDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ]
                },] }
    ];
    return DaffCartMagentoDriverModule;
}());

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

export { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS, DaffCartMagentoDriverModule, DaffMagentoBillingAddressInputTransformer, DaffMagentoBillingAddressTransformer, DaffMagentoCartAddressInputTransformer, DaffMagentoCartAddressTransformer, DaffMagentoCartBillingAddressService, DaffMagentoCartItemService, DaffMagentoCartItemUpdateInputTransformer, DaffMagentoCartPaymentMethodsService, DaffMagentoCartPaymentService, DaffMagentoCartPaymentTransformer, DaffMagentoCartService, DaffMagentoCartShippingAddressService, DaffMagentoCartShippingInformationService, DaffMagentoCartShippingInformationTransformer, DaffMagentoCartShippingMethodsService, DaffMagentoCartShippingRateTransformer, DaffMagentoCartTransformer, DaffMagentoPaymentMethodInputTransformer, DaffMagentoShippingAddressInputTransformer, DaffMagentoShippingAddressTransformer, DaffMagentoShippingMethodInputTransformer, MagentoCartItemTypeEnum, addBundleCartItem, addConfigurableCartItem, addSimpleCartItem, applyCoupon, availablePaymentMethodFragment, availableShippingMethodFragment, cartAddressFragment, cartCouponFragment, cartFragment, cartItemFragment, createCart, getBillingAddress, getCart, getSelectedPaymentMethod, getSelectedShippingMethod, getShippingAddress, listCartCoupons, listCartItems, listPaymentMethods, listShippingMethods, moneyFragment, placeOrder, pricesFragment, removeAllCoupons, removeCartItem, selectedPaymentMethodFragment, selectedShippingMethodFragment, setSelectedPaymentMethod, setSelectedPaymentMethodWithBilling, setSelectedPaymentMethodWithBillingAndEmail, setSelectedShippingMethod, updateAddress, updateAddressWithEmail, updateBillingAddress, updateBillingAddressWithEmail, updateCartItem, updateShippingAddress, updateShippingAddressWithEmail, DAFF_MAGENTO_CART_MUTATION_QUEUE as ɵa, DaffMagentoCartAddressService as ɵb, DaffMagentoCartOrderService as ɵc, DaffMagentoCartCouponService as ɵd, DaffMagentoCartCouponResponseTransformer as ɵe };
//# sourceMappingURL=daffodil-cart-driver-magento.js.map
