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
class DaffMagentoCartPaymentTransformer {
    /**
     * Transforms the magento CartPayment from the magento cart query into a DaffCartPaymentMethod.
     * @param {?} responsePayment
     * @return {?}
     */
    transform(responsePayment) {
        return responsePayment ? Object.assign({ magento_payment_method: responsePayment }, { method: responsePayment.code }) : null;
    }
}
DaffMagentoCartPaymentTransformer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoCartPaymentTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartPaymentTransformer_Factory() { return new DaffMagentoCartPaymentTransformer(); }, token: DaffMagentoCartPaymentTransformer, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms magento cart shipping methods into an object usable by daffodil.
 */
class DaffMagentoCartShippingRateTransformer {
    /**
     * Transforms the magento shipping method from the magento cart query into a DaffCartShippingRate.
     * @param {?} shippingMethod the shippingMethod from a magento cart query.
     * @return {?}
     */
    transform(shippingMethod) {
        return shippingMethod ? Object.assign({ magento_shipping_method: shippingMethod }, { carrier: shippingMethod.carrier_code, carrier_title: shippingMethod.carrier_title, price: shippingMethod.amount.value, method_code: shippingMethod.method_code, method_title: shippingMethod.method_title, id: null, method_description: null }) : null;
    }
}
DaffMagentoCartShippingRateTransformer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoCartShippingRateTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingRateTransformer_Factory() { return new DaffMagentoCartShippingRateTransformer(); }, token: DaffMagentoCartShippingRateTransformer, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms magento cart shipping methods into an object usable by daffodil.
 */
class DaffMagentoCartShippingInformationTransformer {
    /**
     * @param {?} shippingRateTransformer
     */
    constructor(shippingRateTransformer) {
        this.shippingRateTransformer = shippingRateTransformer;
    }
    /**
     * Transforms the magento shipping method from the magento cart query into a DaffCartShippingInformation.
     * @param {?} shippingMethod the shippingMethod from a magento cart query.
     * @return {?}
     */
    transform(shippingMethod) {
        return shippingMethod ? Object.assign({}, this.shippingRateTransformer.transform(shippingMethod), { address_id: 0 }) : null;
    }
}
DaffMagentoCartShippingInformationTransformer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartShippingInformationTransformer.ctorParameters = () => [
    { type: DaffMagentoCartShippingRateTransformer }
];
/** @nocollapse */ DaffMagentoCartShippingInformationTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingInformationTransformer_Factory() { return new DaffMagentoCartShippingInformationTransformer(ɵɵinject(DaffMagentoCartShippingRateTransformer)); }, token: DaffMagentoCartShippingInformationTransformer, providedIn: "root" });
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
class DaffMagentoCartAddressTransformer {
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param {?} address the address from a magento cart query.
     * @return {?}
     */
    transform(address) {
        return address ? Object.assign({ magento_address: address }, { street: address.street[0], city: address.city, region: address.region.code, country: address.country.label, country_id: address.country.code, postcode: address.postcode, firstname: address.firstname, lastname: address.lastname, telephone: address.telephone, email: address.email, address_id: null, suffix: null, middlename: null, prefix: null, address_type: null }) : null;
    }
}
DaffMagentoCartAddressTransformer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoCartAddressTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartAddressTransformer_Factory() { return new DaffMagentoCartAddressTransformer(); }, token: DaffMagentoCartAddressTransformer, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms magento addresses into an object usable by daffodil.
 */
class DaffMagentoShippingAddressTransformer {
    /**
     * @param {?} addressTransformer
     */
    constructor(addressTransformer) {
        this.addressTransformer = addressTransformer;
    }
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param {?} address the address from a magento cart query.
     * @return {?}
     */
    transform(address) {
        return address ? Object.assign({}, this.addressTransformer.transform(address), { address_type: 'shipping' }) : null;
    }
}
DaffMagentoShippingAddressTransformer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoShippingAddressTransformer.ctorParameters = () => [
    { type: DaffMagentoCartAddressTransformer }
];
/** @nocollapse */ DaffMagentoShippingAddressTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoShippingAddressTransformer_Factory() { return new DaffMagentoShippingAddressTransformer(ɵɵinject(DaffMagentoCartAddressTransformer)); }, token: DaffMagentoShippingAddressTransformer, providedIn: "root" });
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
class DaffMagentoBillingAddressTransformer {
    /**
     * @param {?} addressTransformer
     */
    constructor(addressTransformer) {
        this.addressTransformer = addressTransformer;
    }
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param {?} address the address from a magento cart query.
     * @return {?}
     */
    transform(address) {
        return address ? Object.assign({}, this.addressTransformer.transform(address), { address_type: 'billing' }) : null;
    }
}
DaffMagentoBillingAddressTransformer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoBillingAddressTransformer.ctorParameters = () => [
    { type: DaffMagentoCartAddressTransformer }
];
/** @nocollapse */ DaffMagentoBillingAddressTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoBillingAddressTransformer_Factory() { return new DaffMagentoBillingAddressTransformer(ɵɵinject(DaffMagentoCartAddressTransformer)); }, token: DaffMagentoBillingAddressTransformer, providedIn: "root" });
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
    return Object.assign({ magento_coupon: coupon }, { code: coupon.code });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const MagentoCartItemTypeEnum = {
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
    return cartItem ? Object.assign({ magento_cart_item: cartItem }, { type: DaffCartItemInputType.Simple, item_id: cartItem.id, sku: cartItem.product.sku, name: cartItem.product.name, qty: cartItem.quantity, price: cartItem.prices.price.value, row_total: cartItem.prices.row_total.value, product_id: String(cartItem.product.id), image: {
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
    return bundleCartItem ? Object.assign({}, transformMagentoSimpleCartItem(bundleCartItem), { type: DaffCartItemInputType.Composite, options: bundleCartItem.bundle_options.map(transformBundleCartItemOption) }) : null;
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
    return configurableCartItem ? Object.assign({}, transformMagentoSimpleCartItem(configurableCartItem), { type: DaffCartItemInputType.Configurable, attributes: configurableCartItem.configurable_options.map(transformConfigurableCartItemAttribute) }) : null;
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
    const totalTax = cart.prices.applied_taxes ? cart.prices.applied_taxes.reduce((/**
     * @param {?} acc
     * @param {?} tax
     * @return {?}
     */
    (acc, tax) => (daffAdd(acc, tax.amount.value))), 0) : 0;
    return {
        totals: [
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
            },
            ...transformDiscounts(cart.prices.discounts),
            {
                name: DaffCartTotalTypeEnum.shipping,
                label: 'Shipping',
                value: validateSelectedShippingAddress(cart) ? cart.shipping_addresses[0].selected_shipping_method.amount.value : null
            }
        ],
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
    discount => ({
        name: DaffCartTotalTypeEnum.discount,
        label: discount.label,
        value: discount.amount.value
    }))) : [];
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
class DaffMagentoCartTransformer {
    /**
     * @param {?} shippingAddressTransformer
     * @param {?} billingAddressTransformer
     * @param {?} paymentTransformer
     * @param {?} shippingInformationTransformer
     * @param {?} shippingRateTransformer
     */
    constructor(shippingAddressTransformer, billingAddressTransformer, paymentTransformer, shippingInformationTransformer, shippingRateTransformer) {
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
    transformShippingAddress(cart) {
        return {
            shipping_address: cart.shipping_addresses[0]
                ? this.shippingAddressTransformer.transform(Object.assign({}, cart.shipping_addresses[0], { email: cart.email }))
                : null
        };
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    transformBillingAddress(cart) {
        return {
            billing_address: cart.billing_address
                ? this.billingAddressTransformer.transform(Object.assign({}, cart.billing_address, { email: cart.email }))
                : null
        };
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    transformCartItems(cart) {
        return {
            items: cart.items.map(transformMagentoCartItem),
        };
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    transformTotals(cart) {
        return {
            grand_total: cart.prices.grand_total.value,
            subtotal: cart.prices.subtotal_excluding_tax.value,
        };
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    transformCoupons(cart) {
        return {
            coupons: cart.applied_coupons
                ? cart.applied_coupons.map(daffMagentoCouponTransform)
                : []
        };
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    transformPayment(cart) {
        return {
            payment: this.paymentTransformer.transform(cart.selected_payment_method),
        };
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    transformShippingInformation(cart) {
        return {
            shipping_information: cart.shipping_addresses[0]
                ? this.shippingInformationTransformer.transform(cart.shipping_addresses[0].selected_shipping_method)
                : null
        };
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    transformShippingMethods(cart) {
        return {
            available_shipping_methods: cart.shipping_addresses[0] && cart.shipping_addresses[0].available_shipping_methods
                ? cart.shipping_addresses[0].available_shipping_methods.map((/**
                 * @param {?} method
                 * @return {?}
                 */
                method => this.shippingRateTransformer.transform(method)))
                : []
        };
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    transformPaymentMethods(cart) {
        return {
            available_payment_methods: cart.available_payment_methods.map((/**
             * @param {?} method
             * @return {?}
             */
            method => this.paymentTransformer.transform(method)))
        };
    }
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCart.
     * @param {?} cart the cart from a magento cart query.
     * @return {?}
     */
    transform(cart) {
        return cart ? Object.assign({ extra_attributes: cart }, this.transformCartItems(cart), this.transformBillingAddress(cart), this.transformShippingAddress(cart), this.transformCoupons(cart), this.transformPayment(cart), this.transformTotals(cart), transformCartTotals(cart), this.transformShippingInformation(cart), this.transformShippingMethods(cart), this.transformPaymentMethods(cart), { id: cart.id }) : null;
    }
}
DaffMagentoCartTransformer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartTransformer.ctorParameters = () => [
    { type: DaffMagentoShippingAddressTransformer },
    { type: DaffMagentoBillingAddressTransformer },
    { type: DaffMagentoCartPaymentTransformer },
    { type: DaffMagentoCartShippingInformationTransformer },
    { type: DaffMagentoCartShippingRateTransformer }
];
/** @nocollapse */ DaffMagentoCartTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartTransformer_Factory() { return new DaffMagentoCartTransformer(ɵɵinject(DaffMagentoShippingAddressTransformer), ɵɵinject(DaffMagentoBillingAddressTransformer), ɵɵinject(DaffMagentoCartPaymentTransformer), ɵɵinject(DaffMagentoCartShippingInformationTransformer), ɵɵinject(DaffMagentoCartShippingRateTransformer)); }, token: DaffMagentoCartTransformer, providedIn: "root" });
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
class DaffMagentoCartAddressInputTransformer {
    /**
     * @param {?} cartAddress
     * @return {?}
     */
    transform(cartAddress) {
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
    }
}
DaffMagentoCartAddressInputTransformer.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMagentoShippingAddressInputTransformer {
    /**
     * @param {?} cartAddressTransformer
     */
    constructor(cartAddressTransformer) {
        this.cartAddressTransformer = cartAddressTransformer;
    }
    /**
     * @param {?} cartAddress
     * @return {?}
     */
    transform(cartAddress) {
        return cartAddress.address_id
            ? {
                address: null,
                customer_address_id: cartAddress.address_id,
            }
            : {
                address: this.cartAddressTransformer.transform(cartAddress),
                customer_address_id: null,
            };
    }
}
DaffMagentoShippingAddressInputTransformer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffMagentoShippingAddressInputTransformer.ctorParameters = () => [
    { type: DaffMagentoCartAddressInputTransformer }
];
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
class DaffMagentoBillingAddressInputTransformer {
    /**
     * @param {?} cartAddressTransformer
     */
    constructor(cartAddressTransformer) {
        this.cartAddressTransformer = cartAddressTransformer;
    }
    /**
     * @param {?} cartAddress
     * @return {?}
     */
    transform(cartAddress) {
        return cartAddress.address_id
            ? {
                address: null,
                customer_address_id: cartAddress.address_id,
            }
            : {
                address: this.cartAddressTransformer.transform(cartAddress),
                customer_address_id: null,
            };
    }
}
DaffMagentoBillingAddressInputTransformer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffMagentoBillingAddressInputTransformer.ctorParameters = () => [
    { type: DaffMagentoCartAddressInputTransformer }
];
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
class DaffMagentoCartItemUpdateInputTransformer {
    /**
     * @param {?} item
     * @return {?}
     */
    transform(item) {
        return {
            quantity: item.qty,
            cart_item_id: Number(item.item_id)
        };
    }
}
DaffMagentoCartItemUpdateInputTransformer.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMagentoPaymentMethodInputTransformer {
    /**
     * @param {?} payment
     * @return {?}
     */
    transform(payment) {
        return Object.assign({}, payment.payment_info);
    }
}
DaffMagentoPaymentMethodInputTransformer.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffMagentoShippingMethodInputTransformer {
    /**
     * @param {?} method
     * @return {?}
     */
    transform(method) {
        return {
            carrier_code: method.carrier,
            method_code: method.method_code
        };
    }
}
DaffMagentoShippingMethodInputTransformer.decorators = [
    { type: Injectable }
];

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
const DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS = new InjectionToken('DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS', { factory: (/**
     * @return {?}
     */
    () => []) });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moneyFragment = gql `
  fragment money on Money {
    value
    currency
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const cartCouponFragment = gql `
  fragment cartCoupon on AppliedCoupon {
    code
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const cartAddressFragment = gql `
  fragment cartAddress on CartAddressInterface {
    city
    country {
      code
      label
    }
    firstname
    lastname
    postcode
    region {
      code
      label
    }
    street
    telephone
    company
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const cartItemFragment = gql `
  fragment cartItem on CartItemInterface {
		__typename
    id
    product {
      ...product
    }
    quantity
    prices {
      price {
        ...money
      }
      row_total {
        ...money
      }
      row_total_including_tax {
        ...money
      }
      total_item_discount {
        ...money
      }
		}
		...on ConfigurableCartItem {
			configurable_options {
				option_label
				value_label
			}
		}
		...on BundleCartItem {
			bundle_options {
				id
				label
				type
				values {
					id
					label
					price
					quantity
				}
			}
		}
  }
  ${magentoProductFragment}
  ${moneyFragment}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const availablePaymentMethodFragment = gql `
  fragment availablePaymentMethod on AvailablePaymentMethod {
    code
    title
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const selectedPaymentMethodFragment = gql `
  fragment selectedPaymentMethod on SelectedPaymentMethod {
    code
    title
    purchase_order_number
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const availableShippingMethodFragment = gql `
  fragment availableShippingMethod on AvailableShippingMethod {
    carrier_code
    method_code
    carrier_title
    method_title
    amount {
      ...money
    }
  }
  ${moneyFragment}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const selectedShippingMethodFragment = gql `
  fragment selectedShippingMethod on SelectedShippingMethod {
    carrier_code
    method_code
    carrier_title
    method_title
    amount {
      ...money
    }
  }
  ${moneyFragment}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const pricesFragment = gql `
  fragment prices on CartPrices {
		grand_total {
			...money
		}
		subtotal_excluding_tax {
			...money
		}
		subtotal_including_tax {
			...money
		}
		subtotal_with_discount_excluding_tax {
			...money
		}
		applied_taxes {
			amount {
				...money
			}
			label
		}
		discounts {
			amount {
				...money
			}
			label
		}
	}
  ${moneyFragment}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const cartFragment = gql `
  fragment cart on Cart {
    id
    email
    billing_address {
      ...cartAddress
    }
    shipping_addresses {
      ...cartAddress
      ... on ShippingCartAddress {
        selected_shipping_method {
          ...selectedShippingMethod
        }
      }
    }
    items {
      ...cartItem
    }
    available_payment_methods {
      ...availablePaymentMethod
    }
    selected_payment_method {
      ...selectedPaymentMethod
    }
    applied_coupons {
      ...cartCoupon
    }
    prices {
      ...prices
    }
  }
  ${cartAddressFragment}
  ${availablePaymentMethodFragment}
  ${selectedPaymentMethodFragment}
  ${selectedShippingMethodFragment}
  ${cartItemFragment}
  ${pricesFragment}
  ${cartCouponFragment}
`;

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
const listCartItems = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  query ListCartItems($cartId: String!) {
    cart(cart_id: $cartId) {
      items {
        ...cartItem
      }
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${cartItemFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const addSimpleCartItem = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation AddSimpleCartItem($cartId: String!, $input: CartItemInput!) {
    addSimpleProductsToCart(input: {
      cart_id: $cartId,
      cart_items: [{
        data: $input
      }]
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);
/** @type {?} */
const addBundleCartItem = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation AddBundleCartItem($cartId: String!, $input: CartItemInput!, $options: [BundleOptionInput]!) {
    addBundleProductsToCart(input: {
      cart_id: $cartId,
      cart_items: [{
				data: $input,
				bundle_options: $options
      }]
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);
/** @type {?} */
const addConfigurableCartItem = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation AddConfigurableCartItem($cartId: String!, $parentSku: String, $data: CartItemInput!) {
    addConfigurableProductsToCart(input: {
      cart_id: $cartId,
      cart_items: [{
				parent_sku: $parentSku
				data: $data,
      }]
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const removeCartItem = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation RemoveCartItem($cartId: String!, $itemId: Int!) {
    removeItemFromCart(input: {
      cart_id: $cartId,
      cart_item_id: $itemId
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const updateCartItem = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation UpdateCartItem($cartId: String!, $input: CartItemUpdateInput!) {
    updateCartItems(input: {
      cart_id: $cartId
      cart_items: [$input]
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const listPaymentMethods = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  query ListPaymentMethods($cartId: String!) {
    cart(cart_id: $cartId) {
      available_payment_methods {
        ...availablePaymentMethod
      }
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${availablePaymentMethodFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getSelectedPaymentMethod = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  query GetSelectedPaymentMethod($cartId: String!) {
    cart(cart_id: $cartId) {
      selected_payment_method {
        ...selectedPaymentMethod
      }
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${selectedPaymentMethodFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const setSelectedPaymentMethod = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation SetSelectedPaymentMethod($cartId: String!, $payment: PaymentMethodInput!) {
    setPaymentMethodOnCart(input: {
      cart_id: $cartId
      payment_method: $payment
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const setSelectedPaymentMethodWithBilling = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation SetSelectedPaymentMethodWithBilling(
    $cartId: String!,
    $payment: PaymentMethodInput!,
    $address: BillingAddressInput!
  ) {
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: $address
    }) {
      cart {
        id
      }
    }
    setPaymentMethodOnCart(input: {
      cart_id: $cartId
      payment_method: $payment
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const setSelectedPaymentMethodWithBillingAndEmail = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation SetSelectedPaymentMethodWithBillingAndEmail(
    $cartId: String!,
    $payment: PaymentMethodInput!,
    $address: BillingAddressInput!,
    $email: String!
  ) {
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: $address
    }) {
      cart {
        id
      }
    }
    setPaymentMethodOnCart(input: {
      cart_id: $cartId
      payment_method: $payment
    }) {
      cart {
        id
      }
    }
    setGuestEmailOnCart(input: {
      cart_id: $cartId,
      email: $email
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const listShippingMethods = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  query ListShippingMethods($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      shipping_addresses {
        available_shipping_methods {
          ...availableShippingMethod
        }
      }
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${availableShippingMethodFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getSelectedShippingMethod = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  query GetSelectedShippingMethod($cartId: String!) {
    cart(cart_id: $cartId) {
      shipping_addresses {
        selected_shipping_method {
          ...selectedShippingMethod
        }
      }
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${selectedShippingMethodFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const setSelectedShippingMethod = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation SetSelectedShippingMethod($cartId: String!, $method: ShippingMethodInput!) {
    setShippingMethodsOnCart(input: {
      cart_id: $cartId
      shipping_methods: [$method]
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getBillingAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  query GetBillingAddress($cartId: String!) {
    cart(cart_id: $cartId) {
      billing_address {
        ...cartAddress
      }
      email
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${cartAddressFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const updateBillingAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation UpdateBillingAddress(
    $cartId: String!,
    $address: BillingAddressInput!
  ) {
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: $address
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const updateBillingAddressWithEmail = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation UpdateBillingAddress(
    $cartId: String!,
    $address: BillingAddressInput!,
    $email: String!
  ) {
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: $address
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
    setGuestEmailOnCart(input: {
      cart_id: $cartId,
      email: $email
    }) {
      cart {
        email
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getShippingAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  query GetShippingAddress($cartId: String!) {
    cart(cart_id: $cartId) {
      shipping_addresses {
        ...cartAddress
      }
      email
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${cartAddressFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const updateShippingAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation UpdateShippingAddress(
    $cartId: String!,
    $address: ShippingAddressInput!
  ) {
    setShippingAddressesOnCart(input: {
      cart_id: $cartId
      shipping_addresses: [$address]
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const updateShippingAddressWithEmail = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation UpdateShippingAddress(
    $cartId: String!,
    $address: ShippingAddressInput!,
    $email: String!
  ) {
    setShippingAddressesOnCart(input: {
      cart_id: $cartId
      shipping_addresses: [$address]
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
    setGuestEmailOnCart(input: {
      cart_id: $cartId,
      email: $email
    }) {
      cart {
        email
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

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
const updateAddress = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation UpdateAddress($cartId: String!, $address: CartAddressInput!) {
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: {
        address: $address
      }
    }) {
      cart {
        id
      }
    }
    setShippingAddressesOnCart(input: {
      cart_id: $cartId
      shipping_addresses: [{
        address: $address
      }]
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

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
const updateAddressWithEmail = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation UpdateAddress($cartId: String!, $address: CartAddressInput!, $email: String!) {
    setBillingAddressOnCart(input: {
      cart_id: $cartId
      billing_address: {
        address: $address
      }
    }) {
      cart {
        id
      }
    }
    setShippingAddressesOnCart(input: {
      cart_id: $cartId
      shipping_addresses: [{
        address: $address
      }]
    }) {
      cart {
        id
      }
    }
    setGuestEmailOnCart(input: {
      cart_id: $cartId,
      email: $email
    }) {
      cart {
        ...cart
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getCart = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  query GetCart($cartId: String!) {
    cart(cart_id: $cartId) {
      ...cart
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${cartFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const createCart = gql `
  mutation CreateCart {
    createEmptyCart
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const placeOrder = gql `
  mutation PlaceOrder($cartId: String!) {
    placeOrder(
      input: {
        cart_id: $cartId
      }
    ) {
      order {
        order_number
      }
    }
  }
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const cartTotalsFragment = gql `
  fragment cartTotals on Cart {
    id
    shipping_addresses {
      ...cartAddress
      ... on ShippingCartAddress {
        selected_shipping_method {
          ...selectedShippingMethod
        }
      }
    }
    prices {
      ...prices
    }
  }
  ${cartAddressFragment}
  ${selectedShippingMethodFragment}
  ${pricesFragment}
`;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const applyCoupon = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation ApplyCoupon($cartId: String!, $couponCode: String!) {
    applyCouponToCart(
      input: {
        cart_id: $cartId,
        coupon_code: $couponCode
      }
    ) {
      cart {
        id
        items {
          ...cartItem
        }
        applied_coupons {
          ...cartCoupon
				}
				...cartTotals
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartItemFragment}
	${cartCouponFragment}
	${cartTotalsFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const listCartCoupons = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  query listCartCoupons($cartId: String!) {
    cart(cart_id: $cartId) {
      applied_coupons {
				...cartCoupon
			}
      ${daffBuildFragmentNameSpread(...extraCartFragments)}
    }
  }
  ${cartCouponFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const removeAllCoupons = (/**
 * @param {?=} extraCartFragments
 * @return {?}
 */
(extraCartFragments = []) => gql `
  mutation RemoveAllCoupons($cartId: String!) {
    removeCouponFromCart(
      input: {
        cart_id: $cartId
      }
    ) {
      cart {
        id
        items {
          ...cartItem
        }
        applied_coupons {
          ...cartCoupon
				}
				...cartTotals
        ${daffBuildFragmentNameSpread(...extraCartFragments)}
      }
    }
  }
  ${cartItemFragment}
	${cartCouponFragment}
	${cartTotalsFragment}
  ${daffBuildFragmentDefinition(...extraCartFragments)}
`);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const MagentoCartGraphQlErrorCode = {
    CART_NOT_FOUND: 'graphql-no-such-entity',
    BAD_INPUT: 'graphql-input',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffCartMagentoErrorMap = {
    [MagentoCartGraphQlErrorCode.CART_NOT_FOUND]: DaffCartNotFoundError,
    [MagentoCartGraphQlErrorCode.BAD_INPUT]: DaffBadInputError,
};
/** @type {?} */
const DaffCartMagentoErrorMessageRegexMap = {
    [DaffCartDriverErrorCodes.INVALID_COUPON_CODE]: /The coupon code isn\'t valid/
};

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
    for (const code in DaffCartMagentoErrorMessageRegexMap) {
        /** @type {?} */
        const matchIndex = error.graphQLErrors[0].message.search(DaffCartMagentoErrorMessageRegexMap[code]);
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
const DAFF_MAGENTO_CART_MUTATION_QUEUE = new InjectionToken('DAFF_MAGENTO_CART_MUTATION_QUEUE', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    () => new DaffQueuedApollo(inject(Apollo)))
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for making Magento GraphQL queries for carts.
 */
class DaffMagentoCartService {
    /**
     * @param {?} apollo
     * @param {?} mutationQueue
     * @param {?} cartTransformer
     * @param {?} cartItemDriver
     * @param {?} extraCartFragments
     */
    constructor(apollo, mutationQueue, cartTransformer, cartItemDriver, extraCartFragments) {
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
    get(cartId) {
        return this.apollo.query({
            query: getCart(this.extraCartFragments),
            variables: { cartId }
        }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(transformCartMagentoError(error)))), map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.cart))));
    }
    /**
     * @return {?}
     */
    create() {
        return this.mutationQueue.mutate({ mutation: createCart }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => ({ id: result.data.createEmptyCart }))));
    }
    /**
     * @param {?} productId
     * @param {?} qty
     * @return {?}
     */
    addToCart(productId, qty) {
        throw new Error('Method is deprecated. Use DaffCartItemServiceInterface#add instead.');
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    clear(cartId) {
        return this.cartItemDriver.list(cartId).pipe(switchMap((/**
         * @param {?} items
         * @return {?}
         */
        items => forkJoin(...items.map((/**
         * @param {?} item
         * @return {?}
         */
        item => this.cartItemDriver.delete(cartId, item.item_id)))))), switchMap((/**
         * @return {?}
         */
        () => this.get(cartId))));
    }
}
DaffMagentoCartService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: DaffMagentoCartTransformer },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartItemDriver,] }] },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] }
];
/** @nocollapse */ DaffMagentoCartService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartService_Factory() { return new DaffMagentoCartService(ɵɵinject(Apollo), ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DaffMagentoCartTransformer), ɵɵinject(DaffCartItemDriver), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS)); }, token: DaffMagentoCartService, providedIn: "root" });
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
class DaffMagentoCartItemService {
    /**
     * @param {?} apollo
     * @param {?} mutationQueue
     * @param {?} extraCartFragments
     * @param {?} cartTransformer
     * @param {?} cartItemUpdateInputTransformer
     */
    constructor(apollo, mutationQueue, extraCartFragments, cartTransformer, cartItemUpdateInputTransformer) {
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
    list(cartId) {
        return this.apollo.query({
            query: listCartItems(this.extraCartFragments),
            variables: { cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.data.cart.items.map(transformMagentoCartItem))));
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    get(cartId, itemId) {
        return this.list(cartId).pipe(map((/**
         * @param {?} items
         * @return {?}
         */
        items => items.find((/**
         * @param {?} item
         * @return {?}
         */
        item => Number(item.item_id) === itemId)))));
    }
    /**
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    add(cartId, cartItemInput) {
        switch (cartItemInput.type) {
            case (DaffCartItemInputType.Composite):
                return this.addBundledProduct(cartId, (/** @type {?} */ (cartItemInput)));
            case (DaffCartItemInputType.Configurable):
                return this.addConfigurableProduct(cartId, (/** @type {?} */ (cartItemInput)));
            default:
                return this.addSimpleProduct(cartId, cartItemInput);
        }
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @param {?} changes
     * @return {?}
     */
    update(cartId, itemId, changes) {
        return this.mutationQueue.mutate({
            mutation: updateCartItem(this.extraCartFragments),
            variables: {
                cartId,
                input: this.cartItemUpdateInputTransformer.transform(Object.assign({}, changes, { item_id: itemId }))
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.updateCartItems.cart))));
    }
    /**
     * @param {?} cartId
     * @param {?} itemId
     * @return {?}
     */
    delete(cartId, itemId) {
        return this.mutationQueue.mutate({
            mutation: removeCartItem(this.extraCartFragments),
            variables: {
                cartId,
                itemId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.removeItemFromCart.cart))));
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    addBundledProduct(cartId, cartItemInput) {
        /** @type {?} */
        const bundleInput = transformCompositeCartItem(cartItemInput);
        return this.mutationQueue.mutate({
            mutation: addBundleCartItem(this.extraCartFragments),
            variables: {
                cartId,
                input: bundleInput.input,
                options: bundleInput.options
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.addBundleProductsToCart.cart))));
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    addConfigurableProduct(cartId, cartItemInput) {
        /** @type {?} */
        const configurableInput = transformConfigurableCartItem(cartItemInput);
        return this.mutationQueue.mutate({
            mutation: addConfigurableCartItem(this.extraCartFragments),
            variables: {
                cartId,
                parentSku: configurableInput.parentSku,
                data: configurableInput.data
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.addConfigurableProductsToCart.cart))));
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} cartItemInput
     * @return {?}
     */
    addSimpleProduct(cartId, cartItemInput) {
        return this.mutationQueue.mutate({
            mutation: addSimpleCartItem(this.extraCartFragments),
            variables: {
                cartId,
                input: transformSimpleCartItem(cartItemInput)
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.addSimpleProductsToCart.cart))));
    }
}
DaffMagentoCartItemService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartItemService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
    { type: DaffMagentoCartTransformer },
    { type: DaffMagentoCartItemUpdateInputTransformer }
];
/** @nocollapse */ DaffMagentoCartItemService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartItemService_Factory() { return new DaffMagentoCartItemService(ɵɵinject(Apollo), ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), ɵɵinject(DaffMagentoCartTransformer), ɵɵinject(DaffMagentoCartItemUpdateInputTransformer)); }, token: DaffMagentoCartItemService, providedIn: "root" });
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
class DaffMagentoCartPaymentService {
    /**
     * @param {?} apollo
     * @param {?} mutationQueue
     * @param {?} cartTransformer
     * @param {?} paymentTransformer
     * @param {?} paymentInputTransformer
     * @param {?} cartAddressInputTransformer
     * @param {?} extraCartFragments
     */
    constructor(apollo, mutationQueue, cartTransformer, paymentTransformer, paymentInputTransformer, cartAddressInputTransformer, extraCartFragments) {
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
    get(cartId) {
        return this.apollo.query({
            query: getSelectedPaymentMethod(this.extraCartFragments),
            variables: { cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.paymentTransformer.transform(result.data.cart.selected_payment_method))));
    }
    /**
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    update(cartId, payment) {
        return this.mutationQueue.mutate({
            mutation: setSelectedPaymentMethod(this.extraCartFragments),
            variables: {
                cartId,
                payment: this.paymentInputTransformer.transform(payment)
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.setPaymentMethodOnCart.cart))));
    }
    /**
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    updateWithBilling(cartId, payment, address) {
        return address.email
            ? this.updateWithBillingAddressAndEmail(cartId, payment, address)
            : this.updateWithBillingAddress(cartId, payment, address);
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    remove(cartId) {
        return this.mutationQueue.mutate({
            mutation: setSelectedPaymentMethod(this.extraCartFragments),
            variables: {
                cartId,
                payment: { code: '' }
            }
        }).pipe(mapTo(undefined));
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    updateWithBillingAddress(cartId, payment, address) {
        return this.mutationQueue.mutate({
            mutation: setSelectedPaymentMethodWithBilling(this.extraCartFragments),
            variables: {
                cartId,
                payment: this.paymentInputTransformer.transform(payment),
                address: this.cartAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.cartTransformer.transform(resp.data.setPaymentMethodOnCart.cart))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(transformCartMagentoError(error)))));
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    updateWithBillingAddressAndEmail(cartId, payment, address) {
        return this.mutationQueue.mutate({
            mutation: setSelectedPaymentMethodWithBillingAndEmail(this.extraCartFragments),
            variables: {
                cartId,
                email: address.email,
                payment: this.paymentInputTransformer.transform(payment),
                address: this.cartAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.cartTransformer.transform(resp.data.setGuestEmailOnCart.cart))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(transformCartMagentoError(error)))));
    }
}
DaffMagentoCartPaymentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartPaymentService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: DaffMagentoCartTransformer },
    { type: DaffMagentoCartPaymentTransformer },
    { type: DaffMagentoPaymentMethodInputTransformer },
    { type: DaffMagentoBillingAddressInputTransformer },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] }
];
/** @nocollapse */ DaffMagentoCartPaymentService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartPaymentService_Factory() { return new DaffMagentoCartPaymentService(ɵɵinject(Apollo), ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DaffMagentoCartTransformer), ɵɵinject(DaffMagentoCartPaymentTransformer), ɵɵinject(DaffMagentoPaymentMethodInputTransformer), ɵɵinject(DaffMagentoBillingAddressInputTransformer), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS)); }, token: DaffMagentoCartPaymentService, providedIn: "root" });
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
class DaffMagentoCartPaymentMethodsService {
    /**
     * @param {?} apollo
     * @param {?} extraCartFragments
     * @param {?} paymentTransformer
     */
    constructor(apollo, extraCartFragments, paymentTransformer) {
        this.apollo = apollo;
        this.extraCartFragments = extraCartFragments;
        this.paymentTransformer = paymentTransformer;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return this.apollo.query({
            query: listPaymentMethods(this.extraCartFragments),
            variables: { cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.data.cart.available_payment_methods.map((/**
         * @param {?} item
         * @return {?}
         */
        item => this.paymentTransformer.transform(item))))));
    }
}
DaffMagentoCartPaymentMethodsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartPaymentMethodsService.ctorParameters = () => [
    { type: Apollo },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
    { type: DaffMagentoCartPaymentTransformer }
];
/** @nocollapse */ DaffMagentoCartPaymentMethodsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartPaymentMethodsService_Factory() { return new DaffMagentoCartPaymentMethodsService(ɵɵinject(Apollo), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), ɵɵinject(DaffMagentoCartPaymentTransformer)); }, token: DaffMagentoCartPaymentMethodsService, providedIn: "root" });
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
class DaffMagentoCartBillingAddressService {
    /**
     * @param {?} apollo
     * @param {?} mutationQueue
     * @param {?} extraCartFragments
     * @param {?} cartTransformer
     * @param {?} billingAddressTransformer
     * @param {?} billingAddressInputTransformer
     */
    constructor(apollo, mutationQueue, extraCartFragments, cartTransformer, billingAddressTransformer, billingAddressInputTransformer) {
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
    get(cartId) {
        return this.apollo.query({
            query: getBillingAddress(this.extraCartFragments),
            variables: { cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.data.cart.billing_address
            ? this.billingAddressTransformer.transform(Object.assign({}, result.data.cart.billing_address, { email: result.data.cart.email }))
            : null)));
    }
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    update(cartId, address) {
        return address.email ? this.updateAddressWithEmail(cartId, address) : this.updateAddress(cartId, address);
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    updateAddress(cartId, address) {
        return this.mutationQueue.mutate({
            mutation: updateBillingAddress(this.extraCartFragments),
            variables: {
                cartId,
                address: this.billingAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.cartTransformer.transform(resp.data.setBillingAddressOnCart.cart))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(transformCartMagentoError(error)))));
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    updateAddressWithEmail(cartId, address) {
        return this.mutationQueue.mutate({
            mutation: updateBillingAddressWithEmail(this.extraCartFragments),
            variables: {
                cartId,
                email: address.email,
                address: this.billingAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.cartTransformer.transform(Object.assign({}, resp.data.setBillingAddressOnCart.cart, { email: resp.data.setGuestEmailOnCart.cart.email })))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(transformCartMagentoError(error)))));
    }
}
DaffMagentoCartBillingAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartBillingAddressService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
    { type: DaffMagentoCartTransformer },
    { type: DaffMagentoBillingAddressTransformer },
    { type: DaffMagentoBillingAddressInputTransformer }
];
/** @nocollapse */ DaffMagentoCartBillingAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartBillingAddressService_Factory() { return new DaffMagentoCartBillingAddressService(ɵɵinject(Apollo), ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), ɵɵinject(DaffMagentoCartTransformer), ɵɵinject(DaffMagentoBillingAddressTransformer), ɵɵinject(DaffMagentoBillingAddressInputTransformer)); }, token: DaffMagentoCartBillingAddressService, providedIn: "root" });
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
class DaffMagentoCartShippingAddressService {
    /**
     * @param {?} apollo
     * @param {?} mutationQueue
     * @param {?} extraCartFragments
     * @param {?} cartTransformer
     * @param {?} shippingAddressTransformer
     * @param {?} shippingAddressInputTransformer
     */
    constructor(apollo, mutationQueue, extraCartFragments, cartTransformer, shippingAddressTransformer, shippingAddressInputTransformer) {
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
    get(cartId) {
        return this.apollo.query({
            query: getShippingAddress(this.extraCartFragments),
            variables: { cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.data.cart.shipping_addresses[0]
            ? this.shippingAddressTransformer.transform(Object.assign({}, result.data.cart.shipping_addresses[0], { email: result.data.cart.email }))
            : null)));
    }
    /**
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    update(cartId, address) {
        return address.email ? this.updateAddressWithEmail(cartId, address) : this.updateAddress(cartId, address);
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    updateAddress(cartId, address) {
        return this.mutationQueue.mutate({
            mutation: updateShippingAddress(this.extraCartFragments),
            variables: {
                cartId,
                address: this.shippingAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.cartTransformer.transform(resp.data.setShippingAddressesOnCart.cart))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(transformCartMagentoError(error)))));
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    updateAddressWithEmail(cartId, address) {
        return this.mutationQueue.mutate({
            mutation: updateShippingAddressWithEmail(this.extraCartFragments),
            variables: {
                cartId,
                email: address.email,
                address: this.shippingAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.cartTransformer.transform(Object.assign({}, resp.data.setShippingAddressesOnCart.cart, { email: resp.data.setGuestEmailOnCart.cart.email })))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(transformCartMagentoError(error)))));
    }
}
DaffMagentoCartShippingAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartShippingAddressService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
    { type: DaffMagentoCartTransformer },
    { type: DaffMagentoShippingAddressTransformer },
    { type: DaffMagentoShippingAddressInputTransformer }
];
/** @nocollapse */ DaffMagentoCartShippingAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingAddressService_Factory() { return new DaffMagentoCartShippingAddressService(ɵɵinject(Apollo), ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), ɵɵinject(DaffMagentoCartTransformer), ɵɵinject(DaffMagentoShippingAddressTransformer), ɵɵinject(DaffMagentoShippingAddressInputTransformer)); }, token: DaffMagentoCartShippingAddressService, providedIn: "root" });
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
class DaffMagentoCartShippingMethodsService {
    /**
     * @param {?} apollo
     * @param {?} extraCartFragments
     * @param {?} shippingRateTransformer
     */
    constructor(apollo, extraCartFragments, shippingRateTransformer) {
        this.apollo = apollo;
        this.extraCartFragments = extraCartFragments;
        this.shippingRateTransformer = shippingRateTransformer;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return this.apollo.query({
            query: listShippingMethods(this.extraCartFragments),
            variables: { cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.data.cart.shipping_addresses[0].available_shipping_methods.map((/**
         * @param {?} item
         * @return {?}
         */
        item => this.shippingRateTransformer.transform(item))))));
    }
}
DaffMagentoCartShippingMethodsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartShippingMethodsService.ctorParameters = () => [
    { type: Apollo },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
    { type: DaffMagentoCartShippingRateTransformer }
];
/** @nocollapse */ DaffMagentoCartShippingMethodsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingMethodsService_Factory() { return new DaffMagentoCartShippingMethodsService(ɵɵinject(Apollo), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), ɵɵinject(DaffMagentoCartShippingRateTransformer)); }, token: DaffMagentoCartShippingMethodsService, providedIn: "root" });
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
class DaffMagentoCartShippingInformationService {
    /**
     * @param {?} apollo
     * @param {?} mutationQueue
     * @param {?} extraCartFragments
     * @param {?} cartTransformer
     * @param {?} shippingRateTransformer
     * @param {?} shippingMethodInputTransformer
     */
    constructor(apollo, mutationQueue, extraCartFragments, cartTransformer, shippingRateTransformer, shippingMethodInputTransformer) {
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
    get(cartId) {
        return this.apollo.query({
            query: getSelectedShippingMethod(this.extraCartFragments),
            variables: { cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.data.cart.shipping_addresses[0]
            ? this.shippingRateTransformer.transform(result.data.cart.shipping_addresses[0].selected_shipping_method)
            : null)));
    }
    /**
     * @param {?} cartId
     * @param {?} shippingInfo
     * @return {?}
     */
    update(cartId, shippingInfo) {
        return this.mutationQueue.mutate({
            mutation: setSelectedShippingMethod(this.extraCartFragments),
            variables: {
                cartId,
                method: this.shippingMethodInputTransformer.transform(shippingInfo)
            }
        }).pipe(switchMap((/**
         * @param {?} result
         * @return {?}
         */
        result => 
        // because Magento only returns the selected shipping method for the mutation
        // we have to manually refetch the available shipping methods
        // with fetchPolicy: 'network-only' in order to skip the cache
        this.apollo.query({
            query: listShippingMethods(this.extraCartFragments),
            variables: { cartId },
            fetchPolicy: 'network-only'
        }).pipe(map((/**
         * @param {?} shippingMethods
         * @return {?}
         */
        shippingMethods => (Object.assign({}, this.cartTransformer.transform(result.data.setShippingMethodsOnCart.cart), { available_shipping_methods: shippingMethods.data.cart.shipping_addresses[0].available_shipping_methods.map((/**
             * @param {?} item
             * @return {?}
             */
            item => this.shippingRateTransformer.transform(item))) }))))))));
    }
    /**
     * @param {?} cartId
     * @param {?=} id
     * @return {?}
     */
    delete(cartId, id) {
        return this.mutationQueue.mutate({
            mutation: setSelectedShippingMethod(this.extraCartFragments),
            variables: {
                cartId,
                method: {
                    carrier_code: '',
                    method_code: ''
                }
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.setShippingMethodsOnCart.cart))));
    }
}
DaffMagentoCartShippingInformationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartShippingInformationService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
    { type: DaffMagentoCartTransformer },
    { type: DaffMagentoCartShippingRateTransformer },
    { type: DaffMagentoShippingMethodInputTransformer }
];
/** @nocollapse */ DaffMagentoCartShippingInformationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingInformationService_Factory() { return new DaffMagentoCartShippingInformationService(ɵɵinject(Apollo), ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), ɵɵinject(DaffMagentoCartTransformer), ɵɵinject(DaffMagentoCartShippingRateTransformer), ɵɵinject(DaffMagentoShippingMethodInputTransformer)); }, token: DaffMagentoCartShippingInformationService, providedIn: "root" });
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
class DaffMagentoCartAddressService {
    /**
     * @param {?} mutationQueue
     * @param {?} extraCartFragments
     * @param {?} cartTransformer
     * @param {?} cartAddressTransformer
     * @param {?} cartAddressInputTransformer
     */
    constructor(mutationQueue, extraCartFragments, cartTransformer, cartAddressTransformer, cartAddressInputTransformer) {
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
    update(cartId, address) {
        return address.email ? this.updateAddressWithEmail(cartId, address) : this.updateAddress(cartId, address);
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    updateAddress(cartId, address) {
        return this.mutationQueue.mutate({
            mutation: updateAddress(this.extraCartFragments),
            variables: {
                cartId,
                address: this.cartAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.cartTransformer.transform(resp.data.setShippingAddressesOnCart.cart))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(transformCartMagentoError(error)))));
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    updateAddressWithEmail(cartId, address) {
        return this.mutationQueue.mutate({
            mutation: updateAddressWithEmail(this.extraCartFragments),
            variables: {
                cartId,
                email: address.email,
                address: this.cartAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.cartTransformer.transform(resp.data.setGuestEmailOnCart.cart))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(transformCartMagentoError(error)))));
    }
}
DaffMagentoCartAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartAddressService.ctorParameters = () => [
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
    { type: DaffMagentoCartTransformer },
    { type: DaffMagentoShippingAddressTransformer },
    { type: DaffMagentoCartAddressInputTransformer }
];
/** @nocollapse */ DaffMagentoCartAddressService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartAddressService_Factory() { return new DaffMagentoCartAddressService(ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), ɵɵinject(DaffMagentoCartTransformer), ɵɵinject(DaffMagentoShippingAddressTransformer), ɵɵinject(DaffMagentoCartAddressInputTransformer)); }, token: DaffMagentoCartAddressService, providedIn: "root" });
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
class DaffMagentoCartOrderService {
    /**
     * @param {?} mutationQueue
     * @param {?} cartTransformer
     */
    constructor(mutationQueue, cartTransformer) {
        this.mutationQueue = mutationQueue;
        this.cartTransformer = cartTransformer;
    }
    /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    placeOrder(cartId, payment) {
        return this.mutationQueue.mutate({
            mutation: placeOrder,
            variables: {
                cartId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => ({
            id: result.data.placeOrder.order.order_number,
            orderId: result.data.placeOrder.order.order_number,
            cartId
        }))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformCartMagentoError(err)))));
    }
}
DaffMagentoCartOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartOrderService.ctorParameters = () => [
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: DaffMagentoCartTransformer }
];
/** @nocollapse */ DaffMagentoCartOrderService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartOrderService_Factory() { return new DaffMagentoCartOrderService(ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DaffMagentoCartTransformer)); }, token: DaffMagentoCartOrderService, providedIn: "root" });
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
class DaffMagentoCartCouponResponseTransformer {
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    transformCartItems(cart) {
        return {
            items: cart.items.map(transformMagentoCartItem),
        };
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    transformTotals(cart) {
        return {
            grand_total: cart.prices.grand_total.value,
            subtotal: cart.prices.subtotal_excluding_tax.value,
        };
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    transformCoupons(cart) {
        return {
            coupons: cart.applied_coupons
                ? cart.applied_coupons.map(daffMagentoCouponTransform)
                : []
        };
    }
    /**
     * Transforms the MagentoCart from the cart coupon operations into a DaffCart partial.
     * @param {?} cart the cart from a magento cart query.
     * @return {?}
     */
    transform(cart) {
        return cart ? Object.assign({}, this.transformCartItems(cart), this.transformCoupons(cart), this.transformTotals(cart), transformCartTotals(cart), { id: cart.id }) : null;
    }
}
DaffMagentoCartCouponResponseTransformer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoCartCouponResponseTransformer.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartCouponResponseTransformer_Factory() { return new DaffMagentoCartCouponResponseTransformer(); }, token: DaffMagentoCartCouponResponseTransformer, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service for making Magento GraphQL queries for carts.
 */
class DaffMagentoCartCouponService {
    /**
     * @param {?} mutationQueue
     * @param {?} extraCartFragments
     * @param {?} cartTransformer
     */
    constructor(mutationQueue, extraCartFragments, cartTransformer) {
        this.mutationQueue = mutationQueue;
        this.extraCartFragments = extraCartFragments;
        this.cartTransformer = cartTransformer;
    }
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    apply(cartId, coupon) {
        return this.mutationQueue.mutate({
            mutation: applyCoupon(this.extraCartFragments),
            variables: {
                cartId,
                couponCode: coupon.code
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.applyCouponToCart.cart))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformCartMagentoError(err)))));
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    list(cartId) {
        return this.mutationQueue.mutate({
            mutation: listCartCoupons(this.extraCartFragments),
            variables: {
                cartId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => result.data.cart.applied_coupons.map(daffMagentoCouponTransform))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformCartMagentoError(err)))));
    }
    /**
     * @param {?} cartId
     * @param {?} coupon
     * @return {?}
     */
    remove(cartId, coupon) {
        return this.removeAll(cartId);
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    removeAll(cartId) {
        return this.mutationQueue.mutate({
            mutation: removeAllCoupons(this.extraCartFragments),
            variables: {
                cartId
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.removeCouponFromCart.cart))), catchError((/**
         * @param {?} err
         * @return {?}
         */
        err => throwError(transformCartMagentoError(err)))));
    }
}
DaffMagentoCartCouponService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartCouponService.ctorParameters = () => [
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] },
    { type: DaffMagentoCartCouponResponseTransformer }
];
/** @nocollapse */ DaffMagentoCartCouponService.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffMagentoCartCouponService_Factory() { return new DaffMagentoCartCouponService(ɵɵinject(DAFF_MAGENTO_CART_MUTATION_QUEUE), ɵɵinject(DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS), ɵɵinject(DaffMagentoCartCouponResponseTransformer)); }, token: DaffMagentoCartCouponService, providedIn: "root" });
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
class DaffCartMagentoDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
DaffCartMagentoDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ]
            },] }
];

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
