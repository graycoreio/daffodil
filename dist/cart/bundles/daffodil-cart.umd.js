(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@daffodil/core/state'), require('@daffodil/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@daffodil/cart', ['exports', '@angular/core', '@daffodil/core/state', '@daffodil/core', '@angular/common'], factory) :
    (global = global || self, factory((global.daffodil = global.daffodil || {}, global.daffodil.cart = {}), global.ng.core, global.state, global.core$1, global.ng.common));
}(this, function (exports, core, state, core$1, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffCart() { }
    if (false) {
        /** @type {?} */
        DaffCart.prototype.id;
        /**
         * @deprecated use totals instead
         * @type {?}
         */
        DaffCart.prototype.subtotal;
        /**
         * @deprecated use totals instead
         * @type {?}
         */
        DaffCart.prototype.grand_total;
        /** @type {?} */
        DaffCart.prototype.coupons;
        /** @type {?|undefined} */
        DaffCart.prototype.items;
        /** @type {?} */
        DaffCart.prototype.billing_address;
        /** @type {?} */
        DaffCart.prototype.shipping_address;
        /** @type {?|undefined} */
        DaffCart.prototype.payment;
        /** @type {?} */
        DaffCart.prototype.totals;
        /** @type {?} */
        DaffCart.prototype.shipping_information;
        /** @type {?} */
        DaffCart.prototype.available_shipping_methods;
        /** @type {?} */
        DaffCart.prototype.available_payment_methods;
        /**
         * The field is set to the platform cart object returned by the most recent driver call.
         * No fields are guaranteed here.
         * @type {?|undefined}
         */
        DaffCart.prototype.extra_attributes;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffCartItem() { }
    if (false) {
        /** @type {?} */
        DaffCartItem.prototype.item_id;
        /** @type {?} */
        DaffCartItem.prototype.type;
        /** @type {?|undefined} */
        DaffCartItem.prototype.image;
        /** @type {?} */
        DaffCartItem.prototype.product_id;
        /** @type {?} */
        DaffCartItem.prototype.parent_item_id;
        /** @type {?} */
        DaffCartItem.prototype.sku;
        /** @type {?} */
        DaffCartItem.prototype.name;
        /** @type {?} */
        DaffCartItem.prototype.qty;
        /** @type {?} */
        DaffCartItem.prototype.price;
        /** @type {?} */
        DaffCartItem.prototype.row_total;
        /** @type {?} */
        DaffCartItem.prototype.total_discount;
        /** @type {?} */
        DaffCartItem.prototype.in_stock;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffCompositeCartItem() { }
    if (false) {
        /** @type {?} */
        DaffCompositeCartItem.prototype.options;
    }
    /**
     * @record
     */
    function DaffCompositeCartItemOption() { }
    if (false) {
        /** @type {?} */
        DaffCompositeCartItemOption.prototype.option_id;
        /** @type {?} */
        DaffCompositeCartItemOption.prototype.option_label;
        /** @type {?} */
        DaffCompositeCartItemOption.prototype.value_label;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function DaffConfigurableCartItem() { }
    if (false) {
        /** @type {?} */
        DaffConfigurableCartItem.prototype.attributes;
    }
    /**
     * @record
     */
    function DaffConfigurableCartItemAttribute() { }
    if (false) {
        /** @type {?} */
        DaffConfigurableCartItemAttribute.prototype.attribute_label;
        /** @type {?} */
        DaffConfigurableCartItemAttribute.prototype.value_label;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DaffCartItemInputType = {
        Simple: 'simple',
        Composite: 'composite',
        Configurable: 'configurable',
    };
    /**
     * @record
     */
    function DaffCartItemInput() { }
    if (false) {
        /** @type {?} */
        DaffCartItemInput.prototype.type;
        /** @type {?} */
        DaffCartItemInput.prototype.productId;
        /** @type {?} */
        DaffCartItemInput.prototype.qty;
    }
    /**
     * @record
     */
    function DaffSimpleCartItemInput() { }
    if (false) {
        /** @type {?} */
        DaffSimpleCartItemInput.prototype.type;
    }
    /**
     * @record
     */
    function DaffCompositeCartItemInput() { }
    if (false) {
        /** @type {?} */
        DaffCompositeCartItemInput.prototype.type;
        /** @type {?} */
        DaffCompositeCartItemInput.prototype.options;
    }
    /**
     * @record
     */
    function DaffCompositeCartItemInputOption() { }
    if (false) {
        /** @type {?} */
        DaffCompositeCartItemInputOption.prototype.code;
        /** @type {?} */
        DaffCompositeCartItemInputOption.prototype.quantity;
        /** @type {?} */
        DaffCompositeCartItemInputOption.prototype.value;
    }
    /**
     * @record
     */
    function DaffConfigurableCartItemInput() { }
    if (false) {
        /** @type {?} */
        DaffConfigurableCartItemInput.prototype.type;
        /** @type {?} */
        DaffConfigurableCartItemInput.prototype.variantId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {string} */
    var DaffCartTotalTypeEnum = {
        grandTotal: 'grand_total',
        subtotalExcludingTax: 'subtotal_excluding_tax',
        subtotalIncludingTax: 'subtotal_including_tax',
        subtotalWithDiscountExcludingTax: 'subtotal_with_discount_excluding_tax',
        subtotalWithDiscountIncludingTax: 'subtotal_with_discount_including_tax',
        discount: 'discount',
        tax: 'tax',
        shipping: 'shipping',
    };
    /**
     * Since some cart totals might not have a value defined at all times, like shipping, the values of these totals
     * can be null. Allowing their values to be null differentiates a non-existent value from a zero value. In the case of
     * shipping, this would mean the difference between a cart with no selected shipping method and a cart with a selected shipping
     * method that costs zero.
     * @record
     */
    function DaffCartTotal() { }
    if (false) {
        /** @type {?} */
        DaffCartTotal.prototype.value;
        /** @type {?} */
        DaffCartTotal.prototype.label;
        /** @type {?} */
        DaffCartTotal.prototype.name;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO: refactor to upper snake case
    /**
     * An injection token for a mapping from the platform-specific cart payment method
     * to a user-defined platform-agnostic payment ID.
     * It should be an object whose keys are the cart payment's method and whose values are strings.
     * Defaults to an empty object.
     * @type {?}
     */
    var DaffCartPaymentMethodIdMap = new core.InjectionToken('DaffCartPaymentMethodIdMap', {
        factory: (/**
         * @return {?}
         */
        function () { return ({}); })
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Transforms `DaffError`s into `DaffStateError`s before they are serialized into state.
     * Can be used to further refine Daffodil errors into more specific app errors.
     * @type {?}
     */
    var DAFF_CART_ERROR_MATCHER = new core.InjectionToken('DAFF_CART_ERROR_MATCHER', { factory: (/**
         * @return {?}
         */
        function () { return state.daffTransformErrorToStateError; }) });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * The DaffCartStorageService is responsible for storing the cart id of a customer
     * in storage when necessary. For some ecommerce platforms, where cart information
     * is stored in a cookie instead of storage accessible via javsacript, this service
     * isn't explicitly necessary, so be sure to use this service only in the driver
     * layer for platforms that require it.
     */
    var DaffCartStorageService = /** @class */ (function () {
        function DaffCartStorageService(storageService) {
            this.storageService = storageService;
            this.CART_STORAGE_ID = 'DAFF_CART_ID';
        }
        /**
         * @return {?}
         */
        DaffCartStorageService.prototype.getCartId = /**
         * @return {?}
         */
        function () {
            return this.storageService.getItem(this.CART_STORAGE_ID);
        };
        /**
         * @param {?} value
         * @return {?}
         */
        DaffCartStorageService.prototype.setCartId = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.storageService.setItem(this.CART_STORAGE_ID, value);
        };
        /**
         * @return {?}
         */
        DaffCartStorageService.prototype.removeCartId = /**
         * @return {?}
         */
        function () {
            this.storageService.removeItem(this.CART_STORAGE_ID);
        };
        DaffCartStorageService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root',
                        useFactory: daffCartStorageServiceFactory,
                        deps: [
                            core.PLATFORM_ID,
                            core$1.DaffPersistenceServiceToken,
                            core$1.DaffServerErrorStorageService
                        ]
                    },] }
        ];
        /** @nocollapse */
        DaffCartStorageService.ctorParameters = function () { return [
            { type: undefined }
        ]; };
        /** @nocollapse */ DaffCartStorageService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function DaffCartStorageService_Factory() { return daffCartStorageServiceFactory(core.ɵɵinject(core.PLATFORM_ID), core.ɵɵinject(core$1.DaffPersistenceServiceToken), core.ɵɵinject(core$1.DaffServerErrorStorageService)); }, token: DaffCartStorageService, providedIn: "root" });
        return DaffCartStorageService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        DaffCartStorageService.prototype.CART_STORAGE_ID;
        /**
         * @type {?}
         * @private
         */
        DaffCartStorageService.prototype.storageService;
    }
    /**
     * The factory that describe construction of a DaffCartStorageService
     * @param {?} platformId
     * @param {?} persistenceService
     * @param {?} serverStorage
     * @return {?}
     */
    function daffCartStorageServiceFactory(platformId, persistenceService, serverStorage) {
        return common.isPlatformBrowser(platformId)
            ? new DaffCartStorageService(persistenceService)
            : new DaffCartStorageService(serverStorage);
    }

    exports.DAFF_CART_ERROR_MATCHER = DAFF_CART_ERROR_MATCHER;
    exports.DaffCartItemInputType = DaffCartItemInputType;
    exports.DaffCartPaymentMethodIdMap = DaffCartPaymentMethodIdMap;
    exports.DaffCartStorageService = DaffCartStorageService;
    exports.DaffCartTotalTypeEnum = DaffCartTotalTypeEnum;
    exports.ɵa = daffCartStorageServiceFactory;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=daffodil-cart.umd.js.map
