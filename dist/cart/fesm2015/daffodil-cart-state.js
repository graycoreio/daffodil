import { createFeatureSelector, createSelector, select, Store, ActionsSubject, StoreModule } from '@ngrx/store';
import { DaffLoadingState } from '@daffodil/core/state';
import { daffSubtract, DaffStorageServiceError, DaffServerSideStorageError } from '@daffodil/core';
import { daffComparePersonalAddresses } from '@daffodil/geography';
import { DaffCartItemInputType, DaffCartTotalTypeEnum, DaffCartPaymentMethodIdMap, DAFF_CART_ERROR_MATCHER, DaffCartStorageService } from '@daffodil/cart';
import { createEntityAdapter } from '@ngrx/entity';
import { Router } from '@angular/router';
import { Injectable, Inject, ɵɵdefineInjectable, ɵɵinject, InjectionToken, NgModule } from '@angular/core';
import { map, take, tap, filter, switchMap, catchError, switchMapTo, mergeMap, debounceTime, mapTo } from 'rxjs/operators';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { __decorate, __metadata } from 'tslib';
import { of, EMPTY } from 'rxjs';
import { DaffCartDriver, DaffCartItemDriver, DaffCartBillingAddressDriver, DaffCartShippingAddressDriver, DaffCartShippingInformationDriver, DaffCartShippingMethodsDriver, DaffCartPaymentDriver, DaffCartPaymentMethodsDriver, DaffCartOrderDriver, DaffCartCouponDriver, DaffCartAddressDriver, DaffCartNotFoundError } from '@daffodil/cart/driver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartActionTypes = {
    CartStorageFailureAction: '[DaffCart] Cart Storage Failure Action',
    CartLoadAction: '[DaffCart] Cart Load Action',
    CartLoadSuccessAction: '[DaffCart] Cart Load Success Action',
    CartLoadFailureAction: '[DaffCart] Cart Load Failure Action',
    CartCreateAction: '[DaffCart] Cart Create Action',
    CartCreateSuccessAction: '[DaffCart] Cart Create Success Action',
    CartCreateFailureAction: '[DaffCart] Cart Create Failure Action',
    AddToCartAction: '[DaffCart] Cart Add To Cart Action',
    AddToCartSuccessAction: '[DaffCart] Cart Add to Cart Success Action',
    AddToCartFailureAction: '[DaffCart] Cart Add to Cart Failure Action',
    CartClearAction: '[DaffCart] Cart Reset Action',
    CartClearSuccessAction: '[DaffCart] Cart Reset Success Action',
    CartClearFailureAction: '[DaffCart] Cart Reset Failure Action',
    ResolveCartAction: '[DaffCart] Resolve Cart Action',
    ResolveCartSuccessAction: '[DaffCart] Resolve Cart Success Action',
    ResolveCartServerSideAction: '[DaffCart] Resolve Cart Server Side Action',
    ResolveCartFailureAction: '[DaffCart] Resolve Cart Failure Action',
};
class DaffCartStorageFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartStorageFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartStorageFailure.prototype.type;
    /** @type {?} */
    DaffCartStorageFailure.prototype.payload;
}
class DaffCartLoad {
    constructor() {
        this.type = DaffCartActionTypes.CartLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartLoad.prototype.type;
}
/**
 * @template T
 */
class DaffCartLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartLoadSuccess.prototype.payload;
}
class DaffCartLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartLoadFailure.prototype.payload;
}
class DaffCartCreate {
    constructor() {
        this.type = DaffCartActionTypes.CartCreateAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartCreate.prototype.type;
}
/**
 * @template T
 */
class DaffCartCreateSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartCreateSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartCreateSuccess.prototype.type;
    /** @type {?} */
    DaffCartCreateSuccess.prototype.payload;
}
class DaffCartCreateFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartCreateFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartCreateFailure.prototype.type;
    /** @type {?} */
    DaffCartCreateFailure.prototype.payload;
}
class DaffAddToCart {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.AddToCartAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAddToCart.prototype.type;
    /** @type {?} */
    DaffAddToCart.prototype.payload;
}
class DaffAddToCartSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.AddToCartSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAddToCartSuccess.prototype.type;
    /** @type {?} */
    DaffAddToCartSuccess.prototype.payload;
}
class DaffAddToCartFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.AddToCartFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffAddToCartFailure.prototype.type;
    /** @type {?} */
    DaffAddToCartFailure.prototype.payload;
}
class DaffCartClear {
    constructor() {
        this.type = DaffCartActionTypes.CartClearAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartClear.prototype.type;
}
/**
 * @template T
 */
class DaffCartClearSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartClearSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartClearSuccess.prototype.type;
    /** @type {?} */
    DaffCartClearSuccess.prototype.payload;
}
class DaffCartClearFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartClearFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartClearFailure.prototype.type;
    /** @type {?} */
    DaffCartClearFailure.prototype.payload;
}
/**
 * An action indicating that cart resolution begins.
 */
class DaffResolveCart {
    constructor() {
        this.type = DaffCartActionTypes.ResolveCartAction;
    }
}
if (false) {
    /** @type {?} */
    DaffResolveCart.prototype.type;
}
/**
 * An action that indicates a user's cart is resolved successfully.
 * @template T
 */
class DaffResolveCartSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.ResolveCartSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffResolveCartSuccess.prototype.type;
    /** @type {?} */
    DaffResolveCartSuccess.prototype.payload;
}
/**
 * An action that indicates that a cart failed to resolve.
 */
class DaffResolveCartFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.ResolveCartFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffResolveCartFailure.prototype.type;
    /** @type {?} */
    DaffResolveCartFailure.prototype.payload;
}
/**
 * An action indicating that the cart resolution terminated as a result
 * of an attempted resolution on the server.
 */
class DaffResolveCartServerSide {
    constructor() {
        this.type = DaffCartActionTypes.ResolveCartServerSideAction;
    }
}
if (false) {
    /** @type {?} */
    DaffResolveCartServerSide.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartItemActionTypes = {
    CartItemListAction: '[DaffCart] Cart Items List Action',
    CartItemListSuccessAction: '[DaffCart] Cart Items List Success Action',
    CartItemListFailureAction: '[DaffCart] Cart Items List Failure Action',
    CartItemLoadAction: '[DaffCart] Cart Item Load Action',
    CartItemLoadSuccessAction: '[DaffCart] Cart Item Load Success Action',
    CartItemLoadFailureAction: '[DaffCart] Cart Item Load Failure Action',
    CartItemUpdateAction: '[DaffCart] Cart Item Update Action',
    CartItemUpdateSuccessAction: '[DaffCart] Cart Item Update Success Action',
    CartItemUpdateFailureAction: '[DaffCart] Cart Item Update Failure Action',
    CartItemAddAction: '[DaffCart] Cart Item Add Action',
    CartItemAddSuccessAction: '[DaffCart] Cart Item Add Success Action',
    CartItemAddFailureAction: '[DaffCart] Cart Item Add Failure Action',
    CartItemDeleteAction: '[DaffCart] Cart Item Remove Action',
    CartItemDeleteSuccessAction: '[DaffCart] Cart Item Remove Success Action',
    CartItemDeleteFailureAction: '[DaffCart] Cart Item Remove Failure Action',
    CartItemStateResetAction: '[DaffCart] Cart Item State Reset Action',
};
class DaffCartItemList {
    constructor() {
        this.type = DaffCartItemActionTypes.CartItemListAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemList.prototype.type;
}
/**
 * @template T
 */
class DaffCartItemListSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemListSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemListSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemListSuccess.prototype.payload;
}
class DaffCartItemListFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemListFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemListFailure.prototype.type;
    /** @type {?} */
    DaffCartItemListFailure.prototype.payload;
}
/**
 * @template T
 */
class DaffCartItemLoad {
    /**
     * @param {?} itemId
     */
    constructor(itemId) {
        this.itemId = itemId;
        this.type = DaffCartItemActionTypes.CartItemLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemLoad.prototype.type;
    /** @type {?} */
    DaffCartItemLoad.prototype.itemId;
}
/**
 * @template T
 */
class DaffCartItemLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemLoadSuccess.prototype.payload;
}
class DaffCartItemLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartItemLoadFailure.prototype.payload;
}
/**
 * @template T
 */
class DaffCartItemUpdate {
    /**
     * @param {?} itemId
     * @param {?} changes
     */
    constructor(itemId, changes) {
        this.itemId = itemId;
        this.changes = changes;
        this.type = DaffCartItemActionTypes.CartItemUpdateAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemUpdate.prototype.type;
    /** @type {?} */
    DaffCartItemUpdate.prototype.itemId;
    /** @type {?} */
    DaffCartItemUpdate.prototype.changes;
}
/**
 * @template T, V
 */
class DaffCartItemUpdateSuccess {
    /**
     * @param {?} payload
     * @param {?} itemId
     */
    constructor(payload, itemId) {
        this.payload = payload;
        this.itemId = itemId;
        this.type = DaffCartItemActionTypes.CartItemUpdateSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemUpdateSuccess.prototype.payload;
    /** @type {?} */
    DaffCartItemUpdateSuccess.prototype.itemId;
}
class DaffCartItemUpdateFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemUpdateFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartItemUpdateFailure.prototype.payload;
}
/**
 * @template T
 */
class DaffCartItemAdd {
    /**
     * @param {?} input
     */
    constructor(input) {
        this.input = input;
        this.type = DaffCartItemActionTypes.CartItemAddAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemAdd.prototype.type;
    /** @type {?} */
    DaffCartItemAdd.prototype.input;
}
/**
 * @template T
 */
class DaffCartItemAddSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemAddSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemAddSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemAddSuccess.prototype.payload;
}
class DaffCartItemAddFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemAddFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemAddFailure.prototype.type;
    /** @type {?} */
    DaffCartItemAddFailure.prototype.payload;
}
/**
 * @template T
 */
class DaffCartItemDelete {
    /**
     * @param {?} itemId
     */
    constructor(itemId) {
        this.itemId = itemId;
        this.type = DaffCartItemActionTypes.CartItemDeleteAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemDelete.prototype.type;
    /** @type {?} */
    DaffCartItemDelete.prototype.itemId;
}
/**
 * @template T
 */
class DaffCartItemDeleteSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemDeleteSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemDeleteSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemDeleteSuccess.prototype.payload;
}
class DaffCartItemDeleteFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemDeleteFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemDeleteFailure.prototype.type;
    /** @type {?} */
    DaffCartItemDeleteFailure.prototype.payload;
}
class DaffCartItemStateReset {
    constructor() {
        this.type = DaffCartItemActionTypes.CartItemStateResetAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartItemStateReset.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartBillingAddressActionTypes = {
    CartBillingAddressLoadAction: '[DaffCart] Billing Address Load Action',
    CartBillingAddressLoadSuccessAction: '[DaffCart] Billing Address Load Success Action',
    CartBillingAddressLoadFailureAction: '[DaffCart] Billing Address Load Failure Action',
    CartBillingAddressUpdateAction: '[DaffCart] Billing Address Update Action',
    CartBillingAddressUpdateSuccessAction: '[DaffCart] Billing Address Update Success Action',
    CartBillingAddressUpdateFailureAction: '[DaffCart] Billing Address Update Failure Action',
};
class DaffCartBillingAddressLoad {
    constructor() {
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartBillingAddressLoad.prototype.type;
}
/**
 * @template T
 */
class DaffCartBillingAddressLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartBillingAddressLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressLoadSuccess.prototype.payload;
}
class DaffCartBillingAddressLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartBillingAddressLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressLoadFailure.prototype.payload;
}
/**
 * @template T
 */
class DaffCartBillingAddressUpdate {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartBillingAddressUpdate.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressUpdate.prototype.payload;
}
/**
 * @template T
 */
class DaffCartBillingAddressUpdateSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartBillingAddressUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressUpdateSuccess.prototype.payload;
}
class DaffCartBillingAddressUpdateFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartBillingAddressUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressUpdateFailure.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartShippingAddressActionTypes = {
    CartShippingAddressLoadAction: '[DaffCart] Shipping Address Load Action',
    CartShippingAddressLoadSuccessAction: '[DaffCart] Shipping Address Load Success Action',
    CartShippingAddressLoadFailureAction: '[DaffCart] Shipping Address Load Failure Action',
    CartShippingAddressUpdateAction: '[DaffCart] Shipping Address Update Action',
    CartShippingAddressUpdateSuccessAction: '[DaffCart] Shipping Address Update Success Action',
    CartShippingAddressUpdateFailureAction: '[DaffCart] Shipping Address Update Failure Action',
};
class DaffCartShippingAddressLoad {
    constructor() {
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingAddressLoad.prototype.type;
}
/**
 * @template T
 */
class DaffCartShippingAddressLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingAddressLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressLoadSuccess.prototype.payload;
}
class DaffCartShippingAddressLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingAddressLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressLoadFailure.prototype.payload;
}
/**
 * @template T
 */
class DaffCartShippingAddressUpdate {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingAddressUpdate.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressUpdate.prototype.payload;
}
/**
 * @template T
 */
class DaffCartShippingAddressUpdateSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingAddressUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressUpdateSuccess.prototype.payload;
}
class DaffCartShippingAddressUpdateFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingAddressUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressUpdateFailure.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartAddressActionTypes = {
    CartAddressUpdateAction: '[DaffCart] Cart Address Update Action',
    CartAddressUpdateSuccessAction: '[DaffCart] Cart Address Update Success Action',
    CartAddressUpdateFailureAction: '[DaffCart] Cart Address Update Failure Action',
};
/**
 * Triggers the update of both the shipping and billing address of the cart.
 * @template T
 */
class DaffCartAddressUpdate {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartAddressActionTypes.CartAddressUpdateAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartAddressUpdate.prototype.type;
    /** @type {?} */
    DaffCartAddressUpdate.prototype.payload;
}
/**
 * Indicates the successful update of both the shipping and billing address of the cart.
 * @template T
 */
class DaffCartAddressUpdateSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartAddressActionTypes.CartAddressUpdateSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartAddressUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartAddressUpdateSuccess.prototype.payload;
}
/**
 * Indicates the failed update of either the shipping or billing address of the cart.
 */
class DaffCartAddressUpdateFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartAddressActionTypes.CartAddressUpdateFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartAddressUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartAddressUpdateFailure.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartShippingInformationActionTypes = {
    CartShippingInformationLoadAction: '[DaffCart] Shipping Information Load Action',
    CartShippingInformationLoadSuccessAction: '[DaffCart] Shipping Information Load Success Action',
    CartShippingInformationLoadFailureAction: '[DaffCart] Shipping Information Load Failure Action',
    CartShippingInformationUpdateAction: '[DaffCart] Shipping Information Update Action',
    CartShippingInformationUpdateSuccessAction: '[DaffCart] Shipping Information Update Success Action',
    CartShippingInformationUpdateFailureAction: '[DaffCart] Shipping Information Update Failure Action',
    CartShippingInformationDeleteAction: '[DaffCart] Shipping Information Remove Action',
    CartShippingInformationDeleteSuccessAction: '[DaffCart] Shipping Information Remove Success Action',
    CartShippingInformationDeleteFailureAction: '[DaffCart] Shipping Information Remove Failure Action',
};
class DaffCartShippingInformationLoad {
    constructor() {
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationLoad.prototype.type;
}
/**
 * @template T
 */
class DaffCartShippingInformationLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationLoadSuccess.prototype.payload;
}
class DaffCartShippingInformationLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationLoadFailure.prototype.payload;
}
/**
 * @template T
 */
class DaffCartShippingInformationUpdate {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationUpdate.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationUpdate.prototype.payload;
}
/**
 * @template T
 */
class DaffCartShippingInformationUpdateSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationUpdateSuccess.prototype.payload;
}
class DaffCartShippingInformationUpdateFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationUpdateFailure.prototype.payload;
}
/**
 * @template T
 */
class DaffCartShippingInformationDelete {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationDelete.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationDelete.prototype.id;
}
/**
 * @template T
 */
class DaffCartShippingInformationDeleteSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationDeleteSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationDeleteSuccess.prototype.payload;
}
class DaffCartShippingInformationDeleteFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationDeleteFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationDeleteFailure.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartShippingMethodsActionTypes = {
    CartShippingMethodsLoadAction: '[DaffCart] Shipping Methods Load Action',
    CartShippingMethodsLoadSuccessAction: '[DaffCart] Shipping Methods Load Success Action',
    CartShippingMethodsLoadFailureAction: '[DaffCart] Shipping Methods Load Failure Action',
};
class DaffCartShippingMethodsLoad {
    constructor() {
        this.type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingMethodsLoad.prototype.type;
}
/**
 * @template T
 */
class DaffCartShippingMethodsLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingMethodsLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingMethodsLoadSuccess.prototype.payload;
}
class DaffCartShippingMethodsLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingMethodsLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingMethodsLoadFailure.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartPaymentActionTypes = {
    CartPaymentLoadAction: '[DaffCart] Payment Load Action',
    CartPaymentLoadSuccessAction: '[DaffCart] Payment Load Success Action',
    CartPaymentLoadFailureAction: '[DaffCart] Payment Load Failure Action',
    CartPaymentUpdateAction: '[DaffCart] Payment Update Action',
    CartPaymentUpdateSuccessAction: '[DaffCart] Payment Update Success Action',
    CartPaymentUpdateFailureAction: '[DaffCart] Payment Update Failure Action',
    CartPaymentUpdateWithBillingAction: '[DaffCart] Payment Update With Billing Action',
    CartPaymentUpdateWithBillingSuccessAction: '[DaffCart] Payment Update With Billing Success Action',
    CartPaymentUpdateWithBillingFailureAction: '[DaffCart] Payment Update With Billing Failure Action',
    CartPaymentRemoveAction: '[DaffCart] Payment Remove Action',
    CartPaymentRemoveSuccessAction: '[DaffCart] Payment Remove Success Action',
    CartPaymentRemoveFailureAction: '[DaffCart] Payment Remove Failure Action',
    CartPaymentMethodAddAction: '[DaffCart] Payment Method Add Action',
};
class DaffCartPaymentLoad {
    constructor() {
        this.type = DaffCartPaymentActionTypes.CartPaymentLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentLoad.prototype.type;
}
/**
 * @template T
 */
class DaffCartPaymentLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartPaymentLoadSuccess.prototype.payload;
}
class DaffCartPaymentLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartPaymentLoadFailure.prototype.payload;
}
/**
 * @template T
 */
class DaffCartPaymentUpdate {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdate.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdate.prototype.payload;
}
/**
 * @template T
 */
class DaffCartPaymentUpdateSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdateSuccess.prototype.payload;
}
class DaffCartPaymentUpdateFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdateFailure.prototype.payload;
}
/**
 * Triggers an update of the cart's selected payment method and billing address.
 *
 * @param payment The payment method.
 * @param address The billing address.
 * @template T, R
 */
class DaffCartPaymentUpdateWithBilling {
    /**
     * @param {?} payment
     * @param {?} address
     */
    constructor(payment, address) {
        this.payment = payment;
        this.address = address;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdateWithBilling.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdateWithBilling.prototype.payment;
    /** @type {?} */
    DaffCartPaymentUpdateWithBilling.prototype.address;
}
/**
 * Indicates the success of an update of the cart's selected payment method and billing address.
 *
 * @param payload The updated cart.
 * @template T
 */
class DaffCartPaymentUpdateWithBillingSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdateWithBillingSuccess.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdateWithBillingSuccess.prototype.payload;
}
/**
 * Indicates the failure of an update of the cart's selected payment method and billing address.
 *
 * @param payload The error message.
 */
class DaffCartPaymentUpdateWithBillingFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdateWithBillingFailure.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdateWithBillingFailure.prototype.payload;
}
class DaffCartPaymentRemove {
    constructor() {
        this.type = DaffCartPaymentActionTypes.CartPaymentRemoveAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentRemove.prototype.type;
}
class DaffCartPaymentRemoveSuccess {
    constructor() {
        this.type = DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentRemoveSuccess.prototype.type;
}
class DaffCartPaymentRemoveFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentRemoveFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentRemoveFailure.prototype.type;
    /** @type {?} */
    DaffCartPaymentRemoveFailure.prototype.payload;
}
/**
 * This action is temporary until custom reducers can be injected by the \@daffodil/paymentSource modules. Right now,
 * the payment modules need a way to update cart state with a payment token.
 *
 * todo: remove when possible.
 * @template T
 */
class DaffCartPaymentMethodAdd {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentMethodAddAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentMethodAdd.prototype.type;
    /** @type {?} */
    DaffCartPaymentMethodAdd.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartPaymentMethodsActionTypes = {
    CartPaymentMethodsLoadAction: '[DaffCart] Payment Methods Load Action',
    CartPaymentMethodsLoadSuccessAction: '[DaffCart] Payment Methods Load Success Action',
    CartPaymentMethodsLoadFailureAction: '[DaffCart] Payment Methods Load Failure Action',
};
class DaffCartPaymentMethodsLoad {
    constructor() {
        this.type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentMethodsLoad.prototype.type;
}
/**
 * @template T
 */
class DaffCartPaymentMethodsLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentMethodsLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartPaymentMethodsLoadSuccess.prototype.payload;
}
class DaffCartPaymentMethodsLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPaymentMethodsLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartPaymentMethodsLoadFailure.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartOrderActionTypes = {
    CartPlaceOrderAction: '[DaffCart] Cart Place Order Action',
    CartPlaceOrderSuccessAction: '[DaffCart] Cart Place Order Success Action',
    CartPlaceOrderFailureAction: '[DaffCart] Cart Place Order Failure Action',
};
/**
 * @template T
 */
class DaffCartPlaceOrder {
    /**
     * @param {?=} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartOrderActionTypes.CartPlaceOrderAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPlaceOrder.prototype.type;
    /** @type {?} */
    DaffCartPlaceOrder.prototype.payload;
}
/**
 * @template T
 */
class DaffCartPlaceOrderSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartOrderActionTypes.CartPlaceOrderSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPlaceOrderSuccess.prototype.type;
    /** @type {?} */
    DaffCartPlaceOrderSuccess.prototype.payload;
}
class DaffCartPlaceOrderFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartOrderActionTypes.CartPlaceOrderFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartPlaceOrderFailure.prototype.type;
    /** @type {?} */
    DaffCartPlaceOrderFailure.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartCouponActionTypes = {
    CartCouponApplyAction: '[DaffCart] Cart Coupon Apply Action',
    CartCouponApplySuccessAction: '[DaffCart] Cart Coupon Apply Success Action',
    CartCouponApplyFailureAction: '[DaffCart] Cart Coupon Apply Failure Action',
    CartCouponListAction: '[DaffCart] Cart Coupon List Action',
    CartCouponListSuccessAction: '[DaffCart] Cart Coupon List Success Action',
    CartCouponListFailureAction: '[DaffCart] Cart Coupon List Failure Action',
    CartCouponRemoveAction: '[DaffCart] Cart Coupon Remove Action',
    CartCouponRemoveSuccessAction: '[DaffCart] Cart Coupon Remove Success Action',
    CartCouponRemoveFailureAction: '[DaffCart] Cart Coupon Remove Failure Action',
    CartCouponRemoveAllAction: '[DaffCart] Cart Coupon Remove All Action',
    CartCouponRemoveAllSuccessAction: '[DaffCart] Cart Coupon Remove All Success Action',
    CartCouponRemoveAllFailureAction: '[DaffCart] Cart Coupon Remove All Failure Action',
};
/**
 * @template T
 */
class DaffCartCouponApply {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponApplyAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartCouponApply.prototype.type;
    /** @type {?} */
    DaffCartCouponApply.prototype.payload;
}
/**
 * @template T
 */
class DaffCartCouponApplySuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponApplySuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartCouponApplySuccess.prototype.type;
    /** @type {?} */
    DaffCartCouponApplySuccess.prototype.payload;
}
class DaffCartCouponApplyFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponApplyFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartCouponApplyFailure.prototype.type;
    /** @type {?} */
    DaffCartCouponApplyFailure.prototype.payload;
}
class DaffCartCouponList {
    constructor() {
        this.type = DaffCartCouponActionTypes.CartCouponListAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartCouponList.prototype.type;
}
/**
 * @template T
 */
class DaffCartCouponListSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponListSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartCouponListSuccess.prototype.type;
    /** @type {?} */
    DaffCartCouponListSuccess.prototype.payload;
}
class DaffCartCouponListFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponListFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartCouponListFailure.prototype.type;
    /** @type {?} */
    DaffCartCouponListFailure.prototype.payload;
}
/**
 * @template T
 */
class DaffCartCouponRemove {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponRemoveAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartCouponRemove.prototype.type;
    /** @type {?} */
    DaffCartCouponRemove.prototype.payload;
}
/**
 * @template T
 */
class DaffCartCouponRemoveSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponRemoveSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartCouponRemoveSuccess.prototype.type;
    /** @type {?} */
    DaffCartCouponRemoveSuccess.prototype.payload;
}
class DaffCartCouponRemoveFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponRemoveFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartCouponRemoveFailure.prototype.type;
    /** @type {?} */
    DaffCartCouponRemoveFailure.prototype.payload;
}
class DaffCartCouponRemoveAll {
    constructor() {
        this.type = DaffCartCouponActionTypes.CartCouponRemoveAllAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartCouponRemoveAll.prototype.type;
}
/**
 * @template T
 */
class DaffCartCouponRemoveAllSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponRemoveAllSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartCouponRemoveAllSuccess.prototype.type;
    /** @type {?} */
    DaffCartCouponRemoveAllSuccess.prototype.payload;
}
class DaffCartCouponRemoveAllFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponRemoveAllFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartCouponRemoveAllFailure.prototype.type;
    /** @type {?} */
    DaffCartCouponRemoveAllFailure.prototype.payload;
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
 * @record
 * @template T, V, U
 */
function DaffCartFeatureMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffCartFeatureMemoizedSelectors.prototype.selectCartFeatureState;
}
const ɵ0 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    () => cache = cache
        ? cache
        : { selectCartFeatureState: createFeatureSelector('cart') });
};
/** @type {?} */
const getDaffCartFeatureSelector = ((ɵ0))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DaffCartOrderMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffCartOrderMemoizedSelectors.prototype.selectCartOrderState;
    /**
     * Selects whether there is a cart order operation in progress.
     * @type {?}
     */
    DaffCartOrderMemoizedSelectors.prototype.selectCartOrderLoading;
    /**
     * Selects whether there is a place order operation in progress.
     * @type {?}
     */
    DaffCartOrderMemoizedSelectors.prototype.selectCartOrderMutating;
    /** @type {?} */
    DaffCartOrderMemoizedSelectors.prototype.selectCartOrderErrors;
    /** @type {?} */
    DaffCartOrderMemoizedSelectors.prototype.selectCartOrderValue;
    /** @type {?} */
    DaffCartOrderMemoizedSelectors.prototype.selectCartOrderId;
    /** @type {?} */
    DaffCartOrderMemoizedSelectors.prototype.selectCartOrderCartId;
    /** @type {?} */
    DaffCartOrderMemoizedSelectors.prototype.selectHasOrderResult;
}
/** @type {?} */
const createCartOrderSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
() => {
    /** @type {?} */
    const selectCartFeatureState = getDaffCartFeatureSelector().selectCartFeatureState;
    /** @type {?} */
    const selectCartOrderState = createSelector(selectCartFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.order));
    /** @type {?} */
    const selectCartOrderValue = createSelector(selectCartOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.cartOrderResult));
    /** @type {?} */
    const selectCartOrderId = createSelector(selectCartOrderValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.orderId));
    /** @type {?} */
    const selectCartOrderCartId = createSelector(selectCartOrderValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.cartId));
    /** @type {?} */
    const selectCartOrderLoading = createSelector(selectCartOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.loading !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectCartOrderMutating = createSelector(selectCartOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.loading === DaffLoadingState.Mutating));
    /** @type {?} */
    const selectCartOrderErrors = createSelector(selectCartOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.errors));
    /** @type {?} */
    const selectHasOrderResult = createSelector(selectCartOrderValue, (/**
     * @param {?} orderResult
     * @return {?}
     */
    orderResult => !!(orderResult && orderResult.orderId && orderResult.cartId)));
    return {
        selectCartOrderState,
        selectCartOrderLoading,
        selectCartOrderMutating,
        selectCartOrderErrors,
        selectCartOrderValue,
        selectCartOrderId,
        selectCartOrderCartId,
        selectHasOrderResult
    };
});
const ɵ0$1 = createCartOrderSelectors;
const ɵ1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createCartOrderSelectors());
};
/** @type {?} */
const getCartOrderSelectors = ((ɵ1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartOperationType = {
    Cart: 'Cart',
    Item: 'Item',
    BillingAddress: 'Billing Address',
    ShippingAddress: 'Shipping Address',
    Payment: 'Payment',
    PaymentMethods: 'Payment Methods',
    ShippingInformation: 'Shipping Information',
    ShippingMethods: 'Shipping Methods',
    Coupon: 'Coupon',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DaffCartLoading() { }
if (false) {
    /* Skipping unnamed member:
    [DaffCartOperationType.Cart]: DaffLoadingState;*/
    /* Skipping unnamed member:
    [DaffCartOperationType.Item]: DaffCartItemLoadingState;*/
    /* Skipping unnamed member:
    [DaffCartOperationType.BillingAddress]: DaffLoadingState;*/
    /* Skipping unnamed member:
    [DaffCartOperationType.ShippingAddress]: DaffLoadingState;*/
    /* Skipping unnamed member:
    [DaffCartOperationType.Payment]: DaffLoadingState;*/
    /* Skipping unnamed member:
    [DaffCartOperationType.PaymentMethods]: DaffLoadingState;*/
    /* Skipping unnamed member:
    [DaffCartOperationType.ShippingInformation]: DaffLoadingState;*/
    /* Skipping unnamed member:
    [DaffCartOperationType.ShippingMethods]: DaffLoadingState;*/
    /* Skipping unnamed member:
    [DaffCartOperationType.Coupon]: DaffLoadingState;*/
}
/** @enum {string} */
const DaffCartItemLoadingState = {
    Resolving: 'Resolving',
    Adding: 'Adding',
    Complete: 'Complete',
};
/** @type {?} */
const initializeLoadingSetter = (/**
 * @param {?} loadingSpace
 * @return {?}
 */
(loadingSpace) => (/**
 * @param {?} loadingObj
 * @param {?} loading
 * @return {?}
 */
(loadingObj, loading) => ({
    loading: Object.assign({}, loadingObj, { [loadingSpace]: loading })
})));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartResolveState = {
    Default: 'default',
    Resolving: 'resolving',
    Succeeded: 'succeeded',
    Failed: 'failed',
    ServerSide: 'server',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState = Object.freeze({
    cart: {
        id: null,
        subtotal: null,
        grand_total: null,
        coupons: [],
        items: [],
        billing_address: null,
        shipping_address: null,
        payment: null,
        totals: [],
        shipping_information: null,
        available_shipping_methods: [],
        available_payment_methods: [],
    },
    loading: {
        [DaffCartOperationType.Cart]: DaffLoadingState.Complete,
        [DaffCartOperationType.Item]: DaffCartItemLoadingState.Complete,
        [DaffCartOperationType.ShippingAddress]: DaffLoadingState.Complete,
        [DaffCartOperationType.BillingAddress]: DaffLoadingState.Complete,
        [DaffCartOperationType.ShippingInformation]: DaffLoadingState.Complete,
        [DaffCartOperationType.ShippingMethods]: DaffLoadingState.Complete,
        [DaffCartOperationType.Payment]: DaffLoadingState.Complete,
        [DaffCartOperationType.PaymentMethods]: DaffLoadingState.Complete,
        [DaffCartOperationType.Coupon]: DaffLoadingState.Complete,
    },
    errors: {
        [DaffCartOperationType.Cart]: [],
        [DaffCartOperationType.Item]: [],
        [DaffCartOperationType.ShippingAddress]: [],
        [DaffCartOperationType.BillingAddress]: [],
        [DaffCartOperationType.ShippingInformation]: [],
        [DaffCartOperationType.ShippingMethods]: [],
        [DaffCartOperationType.Payment]: [],
        [DaffCartOperationType.PaymentMethods]: [],
        [DaffCartOperationType.Coupon]: [],
    },
    resolved: DaffCartResolveState.Default
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initializeErrorAdder = (/**
 * @param {?} errorSpace
 * @return {?}
 */
(errorSpace) => (/**
 * @param {?} errors
 * @param {?} error
 * @return {?}
 */
(errors, error) => ({
    errors: Object.assign({}, errors, { [errorSpace]: errors[errorSpace].concat(new Array(error)) })
})));
/** @type {?} */
const initializeErrorResetter = (/**
 * @param {?} errorSpace
 * @return {?}
 */
(errorSpace) => (/**
 * @param {?} errors
 * @return {?}
 */
(errors) => ({
    errors: Object.assign({}, errors, { [errorSpace]: [] })
})));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const addError = initializeErrorAdder(DaffCartOperationType.Cart);
/** @type {?} */
const resetErrors = initializeErrorResetter(DaffCartOperationType.Cart);
/** @type {?} */
const setLoading = initializeLoadingSetter(DaffCartOperationType.Cart);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartReducer(state = initialState, action) {
    switch (action.type) {
        case DaffCartActionTypes.ResolveCartAction:
        case DaffCartActionTypes.CartLoadAction:
            return Object.assign({}, state, setLoading(state.loading, DaffLoadingState.Resolving));
        case DaffCartActionTypes.CartClearAction:
        case DaffCartActionTypes.AddToCartAction:
        case DaffCartActionTypes.CartCreateAction:
            return Object.assign({}, state, setLoading(state.loading, DaffLoadingState.Mutating));
        case DaffCartActionTypes.CartLoadSuccessAction:
        case DaffCartActionTypes.CartClearSuccessAction:
        case DaffCartActionTypes.AddToCartSuccessAction:
        case DaffCartActionTypes.CartCreateSuccessAction:
        case DaffCartActionTypes.ResolveCartSuccessAction:
            return Object.assign({}, state, resetErrors(state.errors), { cart: Object.assign({}, state.cart, action.payload) }, setLoading(state.loading, DaffLoadingState.Complete));
        case DaffCartActionTypes.CartCreateSuccessAction:
            return Object.assign({}, state, resetErrors(state.errors), { cart: Object.assign({}, initialState.cart, action.payload) }, setLoading(state.loading, DaffLoadingState.Complete));
        case DaffCartActionTypes.CartLoadFailureAction:
        case DaffCartActionTypes.CartClearFailureAction:
        case DaffCartActionTypes.AddToCartFailureAction:
        case DaffCartActionTypes.CartCreateFailureAction:
        case DaffCartActionTypes.CartStorageFailureAction:
        case DaffCartActionTypes.ResolveCartFailureAction:
            return Object.assign({}, state, addError(state.errors, action.payload), setLoading(state.loading, DaffLoadingState.Complete));
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const addError$1 = initializeErrorAdder(DaffCartOperationType.Item);
/** @type {?} */
const resetErrors$1 = initializeErrorResetter(DaffCartOperationType.Item);
/** @type {?} */
const setLoading$1 = initializeLoadingSetter(DaffCartOperationType.Item);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartItemReducer(state = initialState, action) {
    switch (action.type) {
        case DaffCartItemActionTypes.CartItemListAction:
        case DaffCartItemActionTypes.CartItemLoadAction:
            return Object.assign({}, state, setLoading$1(state.loading, DaffCartItemLoadingState.Resolving));
        case DaffCartItemActionTypes.CartItemAddAction:
            return Object.assign({}, state, setLoading$1(state.loading, DaffCartItemLoadingState.Adding));
        case DaffCartItemActionTypes.CartItemListSuccessAction:
            return Object.assign({}, state, resetErrors$1(state.errors), { cart: Object.assign({}, state.cart, { items: action.payload }) }, setLoading$1(state.loading, DaffCartItemLoadingState.Complete));
        case DaffCartItemActionTypes.CartItemLoadSuccessAction:
            return Object.assign({}, state, resetErrors$1(state.errors), { cart: Object.assign({}, state.cart, { items: state.cart.items.map((/**
                     * @param {?} item
                     * @return {?}
                     */
                    item => item.item_id === action.payload.item_id
                        ? action.payload
                        : item)) }) }, setLoading$1(state.loading, DaffCartItemLoadingState.Complete));
        case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
        case DaffCartItemActionTypes.CartItemAddSuccessAction:
        case DaffCartItemActionTypes.CartItemDeleteSuccessAction:
            return Object.assign({}, state, resetErrors$1(state.errors), { cart: Object.assign({}, state.cart, action.payload) }, setLoading$1(state.loading, DaffCartItemLoadingState.Complete));
        case DaffCartItemActionTypes.CartItemListFailureAction:
        case DaffCartItemActionTypes.CartItemLoadFailureAction:
        case DaffCartItemActionTypes.CartItemUpdateFailureAction:
        case DaffCartItemActionTypes.CartItemAddFailureAction:
        case DaffCartItemActionTypes.CartItemDeleteFailureAction:
            return Object.assign({}, state, addError$1(state.errors, action.payload), setLoading$1(state.loading, DaffCartItemLoadingState.Complete));
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const addError$2 = initializeErrorAdder(DaffCartOperationType.BillingAddress);
/** @type {?} */
const resetErrors$2 = initializeErrorResetter(DaffCartOperationType.BillingAddress);
/** @type {?} */
const setLoading$2 = initializeLoadingSetter(DaffCartOperationType.BillingAddress);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartBillingAddressReducer(state = initialState, action) {
    switch (action.type) {
        case DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction:
            return Object.assign({}, state, setLoading$2(state.loading, DaffLoadingState.Resolving));
        case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction:
        case DaffCartAddressActionTypes.CartAddressUpdateAction:
            return Object.assign({}, state, setLoading$2(state.loading, DaffLoadingState.Mutating));
        case DaffCartBillingAddressActionTypes.CartBillingAddressLoadSuccessAction:
            return Object.assign({}, state, resetErrors$2(state.errors), { cart: Object.assign({}, state.cart, { billing_address: action.payload }) }, setLoading$2(state.loading, DaffLoadingState.Complete));
        case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction:
        case DaffCartAddressActionTypes.CartAddressUpdateSuccessAction:
            return Object.assign({}, state, resetErrors$2(state.errors), { cart: Object.assign({}, state.cart, action.payload) }, setLoading$2(state.loading, DaffLoadingState.Complete));
        case DaffCartBillingAddressActionTypes.CartBillingAddressLoadFailureAction:
        case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateFailureAction:
        case DaffCartAddressActionTypes.CartAddressUpdateFailureAction:
            return Object.assign({}, state, addError$2(state.errors, action.payload), setLoading$2(state.loading, DaffLoadingState.Complete));
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const addError$3 = initializeErrorAdder(DaffCartOperationType.ShippingAddress);
/** @type {?} */
const resetErrors$3 = initializeErrorResetter(DaffCartOperationType.ShippingAddress);
/** @type {?} */
const setLoading$3 = initializeLoadingSetter(DaffCartOperationType.ShippingAddress);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartShippingAddressReducer(state = initialState, action) {
    switch (action.type) {
        case DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction:
            return Object.assign({}, state, setLoading$3(state.loading, DaffLoadingState.Resolving));
        case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction:
        case DaffCartAddressActionTypes.CartAddressUpdateAction:
            return Object.assign({}, state, setLoading$3(state.loading, DaffLoadingState.Mutating));
        case DaffCartShippingAddressActionTypes.CartShippingAddressLoadSuccessAction:
            return Object.assign({}, state, resetErrors$3(state.errors), { cart: Object.assign({}, state.cart, { shipping_address: action.payload }) }, setLoading$3(state.loading, DaffLoadingState.Complete));
        case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction:
        case DaffCartAddressActionTypes.CartAddressUpdateSuccessAction:
            return Object.assign({}, state, resetErrors$3(state.errors), { cart: Object.assign({}, state.cart, action.payload) }, setLoading$3(state.loading, DaffLoadingState.Complete));
        case DaffCartShippingAddressActionTypes.CartShippingAddressLoadFailureAction:
        case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateFailureAction:
        case DaffCartAddressActionTypes.CartAddressUpdateFailureAction:
            return Object.assign({}, state, addError$3(state.errors, action.payload), setLoading$3(state.loading, DaffLoadingState.Complete));
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const addError$4 = initializeErrorAdder(DaffCartOperationType.ShippingMethods);
/** @type {?} */
const resetErrors$4 = initializeErrorResetter(DaffCartOperationType.ShippingMethods);
/** @type {?} */
const setLoading$4 = initializeLoadingSetter(DaffCartOperationType.ShippingMethods);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartShippingMethodsReducer(state = initialState, action) {
    switch (action.type) {
        case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction:
            return Object.assign({}, state, setLoading$4(state.loading, DaffLoadingState.Resolving));
        case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadSuccessAction:
            return Object.assign({}, state, resetErrors$4(state.errors), { cart: Object.assign({}, state.cart, { available_shipping_methods: action.payload }) }, setLoading$4(state.loading, DaffLoadingState.Complete));
        case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadFailureAction:
            return Object.assign({}, state, addError$4(state.errors, action.payload), setLoading$4(state.loading, DaffLoadingState.Complete));
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const addError$5 = initializeErrorAdder(DaffCartOperationType.ShippingInformation);
/** @type {?} */
const resetErrors$5 = initializeErrorResetter(DaffCartOperationType.ShippingInformation);
/** @type {?} */
const setLoading$5 = initializeLoadingSetter(DaffCartOperationType.ShippingInformation);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartShippingInformationReducer(state = initialState, action) {
    switch (action.type) {
        case DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction:
            return Object.assign({}, state, setLoading$5(state.loading, DaffLoadingState.Resolving));
        case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction:
        case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction:
            return Object.assign({}, state, setLoading$5(state.loading, DaffLoadingState.Mutating));
        case DaffCartShippingInformationActionTypes.CartShippingInformationLoadSuccessAction:
            return Object.assign({}, state, resetErrors$5(state.errors), { cart: Object.assign({}, state.cart, { shipping_information: Object.assign({}, action.payload, { address_id: null }) }) }, setLoading$5(state.loading, DaffLoadingState.Complete));
        case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction:
        case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction:
            return Object.assign({}, state, resetErrors$5(state.errors), { cart: Object.assign({}, state.cart, { shipping_information: null }, action.payload) }, setLoading$5(state.loading, DaffLoadingState.Complete));
        case DaffCartShippingInformationActionTypes.CartShippingInformationLoadFailureAction:
        case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateFailureAction:
        case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteFailureAction:
            return Object.assign({}, state, addError$5(state.errors, action.payload), setLoading$5(state.loading, DaffLoadingState.Complete));
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const addError$6 = initializeErrorAdder(DaffCartOperationType.Payment);
/** @type {?} */
const resetErrors$6 = initializeErrorResetter(DaffCartOperationType.Payment);
/** @type {?} */
const setLoading$6 = initializeLoadingSetter(DaffCartOperationType.Payment);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartPaymentReducer(state = initialState, action) {
    switch (action.type) {
        case DaffCartPaymentActionTypes.CartPaymentLoadAction:
            return Object.assign({}, state, setLoading$6(state.loading, DaffLoadingState.Resolving));
        case DaffCartPaymentActionTypes.CartPaymentUpdateAction:
        case DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingAction:
        case DaffCartPaymentActionTypes.CartPaymentRemoveAction:
            return Object.assign({}, state, setLoading$6(state.loading, DaffLoadingState.Mutating));
        case DaffCartPaymentActionTypes.CartPaymentLoadSuccessAction:
            return Object.assign({}, state, resetErrors$6(state.errors), { cart: Object.assign({}, state.cart, { payment: action.payload }) }, setLoading$6(state.loading, DaffLoadingState.Complete));
        case DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction:
            return Object.assign({}, state, resetErrors$6(state.errors), { cart: Object.assign({}, state.cart, { payment: null }) }, setLoading$6(state.loading, DaffLoadingState.Complete));
        case DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction:
        case DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction:
            return Object.assign({}, state, resetErrors$6(state.errors), { cart: Object.assign({}, state.cart, action.payload) }, setLoading$6(state.loading, DaffLoadingState.Complete));
        case DaffCartPaymentActionTypes.CartPaymentLoadFailureAction:
        case DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction:
        case DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction:
        case DaffCartPaymentActionTypes.CartPaymentRemoveFailureAction:
            return Object.assign({}, state, addError$6(state.errors, action.payload), setLoading$6(state.loading, DaffLoadingState.Complete));
        /**
         * This reducer is temporary until custom reducers can be injected by the @daffodil/paymentSource modules. Right now,
         * the payment modules need a way to update cart state with a payment token.
         *
         * todo: remove when possible.
         */
        case DaffCartPaymentActionTypes.CartPaymentMethodAddAction:
            return Object.assign({}, state, { cart: Object.assign({}, state.cart, { payment: Object.assign({}, action.payload) }) });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const addError$7 = initializeErrorAdder(DaffCartOperationType.PaymentMethods);
/** @type {?} */
const resetErrors$7 = initializeErrorResetter(DaffCartOperationType.PaymentMethods);
/** @type {?} */
const setLoading$7 = initializeLoadingSetter(DaffCartOperationType.PaymentMethods);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartPaymentMethodsReducer(state = initialState, action) {
    switch (action.type) {
        case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction:
            return Object.assign({}, state, setLoading$7(state.loading, DaffLoadingState.Resolving));
        case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadSuccessAction:
            return Object.assign({}, state, resetErrors$7(state.errors), { cart: Object.assign({}, state.cart, { available_payment_methods: action.payload }) }, setLoading$7(state.loading, DaffLoadingState.Complete));
        case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadFailureAction:
            return Object.assign({}, state, addError$7(state.errors, action.payload), setLoading$7(state.loading, DaffLoadingState.Complete));
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const addError$8 = initializeErrorAdder(DaffCartOperationType.Coupon);
/** @type {?} */
const resetErrors$8 = initializeErrorResetter(DaffCartOperationType.Coupon);
/** @type {?} */
const setLoading$8 = initializeLoadingSetter(DaffCartOperationType.Coupon);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartCouponReducer(state = initialState, action) {
    switch (action.type) {
        case DaffCartCouponActionTypes.CartCouponListAction:
            return Object.assign({}, state, setLoading$8(state.loading, DaffLoadingState.Resolving));
        case DaffCartCouponActionTypes.CartCouponApplyAction:
        case DaffCartCouponActionTypes.CartCouponRemoveAction:
        case DaffCartCouponActionTypes.CartCouponRemoveAllAction:
            return Object.assign({}, state, setLoading$8(state.loading, DaffLoadingState.Mutating));
        case DaffCartCouponActionTypes.CartCouponApplySuccessAction:
        case DaffCartCouponActionTypes.CartCouponRemoveSuccessAction:
        case DaffCartCouponActionTypes.CartCouponRemoveAllSuccessAction:
            return Object.assign({}, state, resetErrors$8(state.errors), { cart: Object.assign({}, state.cart, action.payload) }, setLoading$8(state.loading, DaffLoadingState.Complete));
        case DaffCartCouponActionTypes.CartCouponListSuccessAction:
            return Object.assign({}, state, resetErrors$8(state.errors), { cart: Object.assign({}, state.cart, { coupons: action.payload }) }, setLoading$8(state.loading, DaffLoadingState.Complete));
        case DaffCartCouponActionTypes.CartCouponApplyFailureAction:
        case DaffCartCouponActionTypes.CartCouponListFailureAction:
        case DaffCartCouponActionTypes.CartCouponRemoveAllFailureAction:
        case DaffCartCouponActionTypes.CartCouponRemoveFailureAction:
            return Object.assign({}, state, addError$8(state.errors, action.payload), setLoading$8(state.loading, DaffLoadingState.Complete));
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartResolveReducer(state = initialState, action) {
    switch (action.type) {
        case DaffCartActionTypes.ResolveCartAction:
            return Object.assign({}, state, { resolved: DaffCartResolveState.Resolving });
        case DaffCartActionTypes.ResolveCartServerSideAction:
            return Object.assign({}, state, { resolved: DaffCartResolveState.ServerSide });
        case DaffCartActionTypes.ResolveCartSuccessAction:
            return Object.assign({}, state, { resolved: DaffCartResolveState.Succeeded });
        case DaffCartActionTypes.ResolveCartFailureAction:
            return Object.assign({}, state, { resolved: DaffCartResolveState.Failed });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Recursively invoke reducers, passing the returned state from one into the next.
 * @param {?} state
 * @param {?} action
 * @param {?} reducers
 * @return {?}
 */
function composeReducers(state, action, reducers) {
    return reducers.length > 0
        // if there are still more reducers, invoke the first one and recurse on the remaining ones
        ? composeReducers(reducers[0](state, action), action, reducers.slice(1))
        // if there are no more reducers, just return state
        : state;
}
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffCartReducer(state = initialState, action) {
    return composeReducers(state, action, [
        cartReducer,
        cartItemReducer,
        cartBillingAddressReducer,
        cartShippingAddressReducer,
        cartShippingMethodsReducer,
        cartShippingInformationReducer,
        cartPaymentReducer,
        cartPaymentMethodsReducer,
        cartCouponReducer,
        cartResolveReducer
    ]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$2 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || createEntityAdapter({ selectId: (/**
         * @param {?} item
         * @return {?}
         */
        item => String(item.item_id)) }));
};
/**
 * Cart Item Entities Adapter for changing/overwriting entity state.
 * @type {?}
 */
const daffCartItemEntitiesAdapter = ((ɵ0$2))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The state of the cart item is intended to enhance the client side UX like indicating when a cart
 * item was recently added/updated. For states that indicate the completion of some process, the state is given
 * a decay time based on the DaffCartItemStateDebounceTime injection token. For example when a cart item is
 * added to the cart, the state of that item will be "New" for a designated time then will revert to the default state.
 * @record
 */
function DaffStatefulCartItem() { }
if (false) {
    /** @type {?} */
    DaffStatefulCartItem.prototype.daffState;
}
/** @enum {string} */
const DaffCartItemStateEnum = {
    New: 'new',
    Updated: 'updated',
    Mutating: 'mutating',
    Default: 'default',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Reducer function that catches actions and changes/overwrites product entities state.
 *
 * @template T, U, V
 * @param {?=} state current State of the redux store
 * @param {?=} action CartItemGrid, BestSellers, or CartItem actions
 * @return {?} CartItem entities state
 */
function daffCartItemEntitiesReducer(state = daffCartItemEntitiesAdapter().getInitialState(), action) {
    /** @type {?} */
    const adapter = daffCartItemEntitiesAdapter();
    switch (action.type) {
        case DaffCartItemActionTypes.CartItemListSuccessAction:
            return adapter.addAll(action.payload.map((/**
             * @param {?} item
             * @return {?}
             */
            item => (Object.assign({}, item, { daffState: getDaffState(state.entities[item.item_id]) || DaffCartItemStateEnum.Default })))), state);
        case DaffCartItemActionTypes.CartItemLoadSuccessAction:
            return adapter.upsertOne(Object.assign({}, action.payload, { daffState: getDaffState(state.entities[action.payload.item_id]) || DaffCartItemStateEnum.Default }), state);
        case DaffCartItemActionTypes.CartItemAddSuccessAction:
            return adapter.addAll(updateAddedCartItemState(state.entities, (/** @type {?} */ (action.payload.items))), state);
        case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
            return adapter.addAll(updateMutatedCartItemState((/** @type {?} */ (action.payload.items)), state.entities, action.itemId), state);
        case DaffCartItemActionTypes.CartItemDeleteSuccessAction:
        case DaffCartActionTypes.CartLoadSuccessAction:
        case DaffCartActionTypes.ResolveCartSuccessAction:
        case DaffCartActionTypes.CartClearSuccessAction:
            return adapter.addAll((/** @type {?} */ ((/** @type {?} */ (action.payload.items.map((/**
             * @param {?} item
             * @return {?}
             */
            item => (Object.assign({}, item, { daffState: getDaffState(state.entities[item.item_id]) || DaffCartItemStateEnum.Default })))))))), state);
        case DaffCartItemActionTypes.CartItemStateResetAction:
            return adapter.addAll(Object.keys(state.entities).map((/**
             * @param {?} key
             * @return {?}
             */
            key => (Object.assign({}, state.entities[key], { daffState: DaffCartItemStateEnum.Default })))), state);
        case DaffCartItemActionTypes.CartItemUpdateAction:
        case DaffCartItemActionTypes.CartItemDeleteAction:
            return adapter.upsertOne(Object.assign({}, state.entities[action.itemId], { daffState: DaffCartItemStateEnum.Mutating }), state);
        default:
            return state;
    }
}
//todo: use optional chaining when possible
/**
 * @template T
 * @param {?} item
 * @return {?}
 */
function getDaffState(item) {
    return item && item.daffState;
}
/**
 * @template T
 * @param {?} oldCartItems
 * @param {?} newCartItems
 * @return {?}
 */
function updateAddedCartItemState(oldCartItems, newCartItems) {
    return newCartItems.map((/**
     * @param {?} newItem
     * @return {?}
     */
    newItem => {
        /** @type {?} */
        const oldItem = oldCartItems[newItem.item_id];
        switch (true) {
            case !oldItem:
                return Object.assign({}, newItem, { daffState: DaffCartItemStateEnum.New });
            //todo: add optional chaining when possible
            case oldItem && oldItem.qty !== newItem.qty:
                return Object.assign({}, newItem, { daffState: DaffCartItemStateEnum.Updated });
            default:
                return newItem;
        }
    }));
}
/**
 * @template T
 * @param {?} responseItems
 * @param {?} stateItems
 * @param {?} itemId
 * @return {?}
 */
function updateMutatedCartItemState(responseItems, stateItems, itemId) {
    return responseItems.map((/**
     * @param {?} item
     * @return {?}
     */
    item => item.item_id === itemId ? Object.assign({}, item, { daffState: DaffCartItemStateEnum.Updated }) : Object.assign({}, item, { daffState: getDaffState(stateItems[item.item_id]) || DaffCartItemStateEnum.Default })));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffCartOrderInitialState = {
    cartOrderResult: {
        id: null,
        orderId: null,
        cartId: null
    },
    loading: DaffLoadingState.Complete,
    errors: []
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffCartOrderReducer(state = daffCartOrderInitialState, action) {
    switch (action.type) {
        case DaffCartOrderActionTypes.CartPlaceOrderAction:
            return Object.assign({}, state, { loading: DaffLoadingState.Mutating });
        case DaffCartOrderActionTypes.CartPlaceOrderSuccessAction:
            return Object.assign({}, state, { errors: [], loading: DaffLoadingState.Complete, cartOrderResult: action.payload });
        case DaffCartOrderActionTypes.CartPlaceOrderFailureAction:
            return Object.assign({}, state, { loading: DaffLoadingState.Complete, errors: [
                    ...state.errors,
                    action.payload
                ] });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffCartReducers = {
    cart: daffCartReducer,
    cartItems: daffCartItemEntitiesReducer,
    order: daffCartOrderReducer
};

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
 * @template T
 */
function DaffCartItemEntitiesMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItemEntitiesState;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItemIds;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItemEntities;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectAllCartItems;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItemTotal;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItem;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectTotalNumberOfCartItems;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItemConfiguredAttributes;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItemCompositeOptions;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectIsCartItemOutOfStock;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItemMutating;
    /** @type {?} */
    DaffCartItemEntitiesMemoizedSelectors.prototype.selectCartItemState;
}
/** @type {?} */
const createCartItemEntitiesSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
() => {
    const { selectCartFeatureState } = getDaffCartFeatureSelector();
    /** @type {?} */
    const adapterSelectors = daffCartItemEntitiesAdapter().getSelectors();
    /**
     * CartItem Entities State
     * @type {?}
     */
    const selectCartItemEntitiesState = createSelector(selectCartFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.cartItems));
    /**
     * Selector for product IDs.
     * @type {?}
     */
    const selectCartItemIds = createSelector(selectCartItemEntitiesState, adapterSelectors.selectIds);
    /**
     * Selector for all product entities (see ngrx/entity).
     * @type {?}
     */
    const selectCartItemEntities = createSelector(selectCartItemEntitiesState, adapterSelectors.selectEntities);
    /**
     * Selector for all products on state.
     * @type {?}
     */
    const selectAllCartItems = createSelector(selectCartItemEntitiesState, adapterSelectors.selectAll);
    /**
     * Selector for the total number of products.
     * @type {?}
     */
    const selectCartItemTotal = createSelector(selectCartItemEntitiesState, adapterSelectors.selectTotal);
    /** @type {?} */
    const selectCartItem = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    (cartItems, props) => cartItems[props.id]));
    /**
     * Selector for the total number of cart items that takes into account the qty on each cart item.
     * @type {?}
     */
    const selectTotalNumberOfCartItems = createSelector(selectAllCartItems, (/**
     * @param {?} cartItems
     * @return {?}
     */
    (cartItems) => cartItems.reduce((/**
     * @param {?} acc
     * @param {?} cartItem
     * @return {?}
     */
    (acc, cartItem) => acc + cartItem.qty), 0)));
    /** @type {?} */
    const selectCartItemConfiguredAttributes = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    (cartItems, props) => {
        /** @type {?} */
        const cartItem = selectCartItem.projector(cartItems, { id: props.id });
        if (cartItem.type !== DaffCartItemInputType.Configurable) {
            return null;
        }
        return ((/** @type {?} */ (cartItem))).attributes;
    }));
    /** @type {?} */
    const selectCartItemCompositeOptions = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    (cartItems, props) => {
        /** @type {?} */
        const cartItem = selectCartItem.projector(cartItems, { id: props.id });
        if (cartItem.type !== DaffCartItemInputType.Composite) {
            return null;
        }
        return ((/** @type {?} */ (cartItem))).options;
    }));
    /** @type {?} */
    const selectIsCartItemOutOfStock = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    (cartItems, props) => {
        /** @type {?} */
        const cartItem = selectCartItem.projector(cartItems, { id: props.id });
        return cartItem ? !cartItem.in_stock : null;
    }));
    //todo optional chaining
    /** @type {?} */
    const selectCartItemMutating = createSelector(selectAllCartItems, (/**
     * @param {?} cartItems
     * @return {?}
     */
    (cartItems) => cartItems && cartItems.reduce((/**
     * @param {?} acc
     * @param {?} item
     * @return {?}
     */
    (acc, item) => acc || item.daffState === DaffCartItemStateEnum.Mutating), false)));
    /** @type {?} */
    const selectCartItemState = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    (cartItems, props) => {
        /** @type {?} */
        const cartItem = selectCartItem.projector(cartItems, { id: props.id });
        //todo use optional chaining when possible
        return cartItem ? cartItem.daffState : null;
    }));
    return {
        selectCartItemEntitiesState,
        selectCartItemIds,
        selectCartItemEntities,
        selectAllCartItems,
        selectCartItemTotal,
        selectCartItem,
        selectTotalNumberOfCartItems,
        selectCartItemConfiguredAttributes,
        selectCartItemCompositeOptions,
        selectIsCartItemOutOfStock,
        selectCartItemMutating,
        selectCartItemState
    };
});
const ɵ0$3 = createCartItemEntitiesSelectors;
const ɵ1$1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createCartItemEntitiesSelectors());
};
/** @type {?} */
const getDaffCartItemEntitiesSelectors = ((ɵ1$1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DaffCartStateMemoizedSelectors() { }
if (false) {
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartState;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartValue;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartResolved;
    /**
     * The object that holds all the loading states for cart operations.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartLoadingObject;
    /**
     * Selects whether there is any cart operation in progress.
     * This includes operations specifically for cart subfields.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartFeatureLoading;
    /**
     * Selects whether there is any cart resolve operation in progress.
     * This includes operations for cart subfields.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartFeatureResolving;
    /**
     * Selects whether there is any cart mutate operation in progress.
     * This includes operations for cart subfields.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartFeatureMutating;
    /**
     * Selects whether there is a cart operation in progress.
     * This does not include operations specifically for cart subfields.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartLoading;
    /**
     * Selects whether there is a cart resolve operation in progress.
     * This does not include operations specifically for cart subfields.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartResolving;
    /**
     * Selects whether there is a cart mutate operation in progress.
     * This does not include operations specifically for cart subfields.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartMutating;
    /**
     * Selects whether there is a cart billing address operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectBillingAddressLoading;
    /**
     * Selects whether there is a cart billing address resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectBillingAddressResolving;
    /**
     * Selects whether there is a cart billing address mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectBillingAddressMutating;
    /**
     * Selects whether there is a cart shipping address operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectShippingAddressLoading;
    /**
     * Selects whether there is a cart shipping address resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectShippingAddressResolving;
    /**
     * Selects whether there is a cart shipping address mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectShippingAddressMutating;
    /**
     * Selects whether there is a cart shipping information operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectShippingInformationLoading;
    /**
     * Selects whether there is a cart shipping information resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectShippingInformationResolving;
    /**
     * Selects whether there is a cart shipping information mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectShippingInformationMutating;
    /**
     * Selects whether there is a cart shipping methods operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectShippingMethodsLoading;
    /**
     * Selects whether there is a cart shipping methods resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectShippingMethodsResolving;
    /**
     * Selects whether there is a cart payment operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectPaymentLoading;
    /**
     * Selects whether there is a cart payment resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectPaymentResolving;
    /**
     * Selects whether there is a cart payment mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectPaymentMutating;
    /**
     * Selects whether there is a cart payment methods operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectPaymentMethodsLoading;
    /**
     * Selects whether there is a cart payment methods resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectPaymentMethodsResolving;
    /**
     * Selects whether there is a cart coupon operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCouponLoading;
    /**
     * Selects whether there is a cart coupon resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCouponResolving;
    /**
     * Selects whether there is a cart coupon mutate operation in progress.
     * This pertains only to requests that mutate data such as "update".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCouponMutating;
    /**
     * Selects whether there is a cart item operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectItemLoading;
    /**
     * Selects whether there is a cart item add operation in progress.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectItemAdding;
    /**
     * Selects whether there is a cart item resolve operation in progress.
     * This pertains only to requests that do not mutate data such as "load" or "list".
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectItemResolving;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartErrorsObject;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectBillingAddressErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectShippingAddressErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectShippingInformationErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectShippingMethodsErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectPaymentErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectPaymentMethodsErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCouponErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectItemErrors;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartId;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartSubtotal;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartGrandTotal;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartSubtotalExcludingTax;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartSubtotalIncludingTax;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartSubtotalWithDiscountExcludingTax;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartSubtotalWithDiscountIncludingTax;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartTotalTax;
    /**
     * Selects the DaffCartTotals for cart discounts. These are discounts associated with coupon codes.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartDiscountTotals;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartShippingTotal;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartCoupons;
    /**
     * @deprecated use getDaffCartItemEntitiesSelectors().selectAllCartItems instead.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectCartItems;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartHasOutOfStockItems;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartBillingAddress;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartShippingAddress;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartPayment;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartTotals;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartShippingInformation;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartAvailableShippingMethods;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartAvailablePaymentMethods;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectIsCartEmpty;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCartItemDiscountedRowTotal;
    /**
     * Selects whether the cart's shipping address equals the billing address.
     * Returns false if either address is null or undefined.
     * @type {?}
     */
    DaffCartStateMemoizedSelectors.prototype.selectIsBillingSameAsShipping;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectHasBillingAddress;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectHasShippingAddress;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectHasShippingMethod;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectHasPaymentMethod;
    /** @type {?} */
    DaffCartStateMemoizedSelectors.prototype.selectCanPlaceOrder;
}
/** @type {?} */
const createCartSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
() => {
    /** @type {?} */
    const selectCartFeatureState = getDaffCartFeatureSelector().selectCartFeatureState;
    const { selectCartItemMutating } = getDaffCartItemEntitiesSelectors();
    /** @type {?} */
    const selectCartState = createSelector(selectCartFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.cart));
    /** @type {?} */
    const selectCartValue = createSelector(selectCartState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.cart));
    /** @type {?} */
    const selectCartResolved = createSelector(selectCartState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.resolved));
    /** @type {?} */
    const selectCartLoadingObject = createSelector(selectCartState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.loading));
    /** @type {?} */
    const selectCartLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Cart] !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectCartResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Cart] === DaffLoadingState.Resolving));
    /** @type {?} */
    const selectCartMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Cart] === DaffLoadingState.Mutating));
    /** @type {?} */
    const selectBillingAddressLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.BillingAddress] !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectBillingAddressResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.BillingAddress] === DaffLoadingState.Resolving));
    /** @type {?} */
    const selectBillingAddressMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.BillingAddress] === DaffLoadingState.Mutating));
    /** @type {?} */
    const selectShippingAddressLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.ShippingAddress] !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectShippingAddressResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.ShippingAddress] === DaffLoadingState.Resolving));
    /** @type {?} */
    const selectShippingAddressMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.ShippingAddress] === DaffLoadingState.Mutating));
    /** @type {?} */
    const selectShippingInformationLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.ShippingInformation] !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectShippingInformationResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.ShippingInformation] === DaffLoadingState.Resolving));
    /** @type {?} */
    const selectShippingInformationMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.ShippingInformation] === DaffLoadingState.Mutating));
    /** @type {?} */
    const selectShippingMethodsLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.ShippingMethods] !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectShippingMethodsResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.ShippingMethods] === DaffLoadingState.Resolving));
    /** @type {?} */
    const selectPaymentLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Payment] !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectPaymentResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Payment] === DaffLoadingState.Resolving));
    /** @type {?} */
    const selectPaymentMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Payment] === DaffLoadingState.Mutating));
    /** @type {?} */
    const selectPaymentMethodsLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.PaymentMethods] !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectPaymentMethodsResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.PaymentMethods] === DaffLoadingState.Resolving));
    /** @type {?} */
    const selectItemLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Item] !== DaffCartItemLoadingState.Complete));
    /** @type {?} */
    const selectItemAdding = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Item] === DaffCartItemLoadingState.Adding));
    /** @type {?} */
    const selectItemResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Item] === DaffCartItemLoadingState.Resolving));
    /** @type {?} */
    const selectCouponLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Coupon] !== DaffLoadingState.Complete));
    /** @type {?} */
    const selectCouponResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Coupon] === DaffLoadingState.Resolving));
    /** @type {?} */
    const selectCouponMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => loadingObject[DaffCartOperationType.Coupon] === DaffLoadingState.Mutating));
    /** @type {?} */
    const selectCartFeatureLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => [
        selectCartLoading,
        selectBillingAddressLoading,
        selectShippingAddressLoading,
        selectShippingInformationLoading,
        selectShippingMethodsLoading,
        selectPaymentLoading,
        selectPaymentMethodsLoading,
        selectCouponLoading,
        selectItemLoading,
    ].map((/**
     * @param {?} selector
     * @return {?}
     */
    selector => selector.projector(loadingObject))).reduce((/**
     * @param {?} acc
     * @param {?} loading
     * @return {?}
     */
    (acc, loading) => acc || loading), false)));
    /** @type {?} */
    const selectCartFeatureResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    loadingObject => [
        selectCartResolving,
        selectBillingAddressResolving,
        selectShippingAddressResolving,
        selectShippingInformationResolving,
        selectShippingMethodsResolving,
        selectPaymentResolving,
        selectPaymentMethodsResolving,
        selectCouponResolving,
        selectItemResolving,
    ].map((/**
     * @param {?} selector
     * @return {?}
     */
    selector => selector.projector(loadingObject))).reduce((/**
     * @param {?} acc
     * @param {?} resolving
     * @return {?}
     */
    (acc, resolving) => acc || resolving), false)));
    /** @type {?} */
    const selectCartFeatureMutating = createSelector(selectCartLoadingObject, selectCartItemMutating, (/**
     * @param {?} loadingObject
     * @param {?} cartItemMutating
     * @return {?}
     */
    (loadingObject, cartItemMutating) => [
        selectCartMutating,
        selectBillingAddressMutating,
        selectShippingAddressMutating,
        selectShippingInformationMutating,
        selectPaymentMutating,
        selectCouponMutating,
        selectItemAdding
    ].map((/**
     * @param {?} selector
     * @return {?}
     */
    selector => selector.projector(loadingObject))).reduce((/**
     * @param {?} acc
     * @param {?} mutating
     * @return {?}
     */
    (acc, mutating) => acc || mutating), false) || cartItemMutating));
    /** @type {?} */
    const selectCartErrorsObject = createSelector(selectCartState, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.errors));
    /** @type {?} */
    const selectCartErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.Cart]));
    /** @type {?} */
    const selectBillingAddressErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.BillingAddress]));
    /** @type {?} */
    const selectShippingAddressErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.ShippingAddress]));
    /** @type {?} */
    const selectShippingInformationErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.ShippingInformation]));
    /** @type {?} */
    const selectShippingMethodsErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.ShippingMethods]));
    /** @type {?} */
    const selectPaymentErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.Payment]));
    /** @type {?} */
    const selectPaymentMethodsErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.PaymentMethods]));
    /** @type {?} */
    const selectItemErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.Item]));
    /** @type {?} */
    const selectCouponErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state[DaffCartOperationType.Coupon]));
    /** @type {?} */
    const selectCartId = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.id));
    /**
     * @deprecated use selectCartSubtotalExcludingTax selector instead.
     * @type {?}
     */
    const selectCartSubtotal = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const subtotalObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.subtotalExcludingTax));
        return subtotalObject ? subtotalObject.value : null;
    }));
    /** @type {?} */
    const selectCartGrandTotal = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const grandTotalObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.grandTotal));
        return grandTotalObject ? grandTotalObject.value : null;
    }));
    /** @type {?} */
    const selectCartSubtotalExcludingTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const subtotalExcludingTaxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.subtotalExcludingTax));
        return subtotalExcludingTaxObject ? subtotalExcludingTaxObject.value : null;
    }));
    /** @type {?} */
    const selectCartSubtotalIncludingTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const subtotalIncludingTaxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.subtotalIncludingTax));
        return subtotalIncludingTaxObject ? subtotalIncludingTaxObject.value : null;
    }));
    /** @type {?} */
    const selectCartSubtotalWithDiscountExcludingTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const subtotalWithDiscountExcludingTaxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax));
        return subtotalWithDiscountExcludingTaxObject ? subtotalWithDiscountExcludingTaxObject.value : null;
    }));
    /** @type {?} */
    const selectCartSubtotalWithDiscountIncludingTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const subtotalWithDiscountIncludingTaxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax));
        return subtotalWithDiscountIncludingTaxObject ? subtotalWithDiscountIncludingTaxObject.value : null;
    }));
    /** @type {?} */
    const selectCartTotalTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const taxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.tax));
        return taxObject ? taxObject.value : null;
    }));
    /** @type {?} */
    const selectCartDiscountTotals = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const discounts = state.totals.filter((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.discount));
        return discounts ? discounts : [];
    }));
    /** @type {?} */
    const selectCartShippingTotal = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => {
        /** @type {?} */
        const shippingTotalObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        total => total.name === DaffCartTotalTypeEnum.shipping));
        return shippingTotalObject ? shippingTotalObject.value : null;
    }));
    /** @type {?} */
    const selectCartCoupons = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.coupons));
    /** @type {?} */
    const selectCartItems = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.items));
    /** @type {?} */
    const selectCartHasOutOfStockItems = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.items.reduce((/**
     * @param {?} acc
     * @param {?} item
     * @return {?}
     */
    (acc, item) => (acc || !item.in_stock)), false)));
    /** @type {?} */
    const selectCartBillingAddress = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.billing_address));
    /** @type {?} */
    const selectCartShippingAddress = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.shipping_address));
    /** @type {?} */
    const selectCartPayment = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.payment));
    /** @type {?} */
    const selectCartTotals = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.totals));
    /** @type {?} */
    const selectCartShippingInformation = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.shipping_information));
    /** @type {?} */
    const selectCartAvailableShippingMethods = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.available_shipping_methods));
    /** @type {?} */
    const selectCartAvailablePaymentMethods = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    (state) => state.available_payment_methods));
    /** @type {?} */
    const selectIsCartEmpty = createSelector(selectCartValue, (/**
     * @param {?} cart
     * @return {?}
     */
    cart => !cart || !cart.items || cart.items.length === 0));
    /** @type {?} */
    const selectCartItemDiscountedRowTotal = createSelector(selectCartItems, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    (cartItems, props) => {
        /** @type {?} */
        const cartItem = cartItems.find((/**
         * @param {?} item
         * @return {?}
         */
        item => item.item_id === props.id));
        return daffSubtract(cartItem.row_total, cartItem.total_discount);
    }));
    /** @type {?} */
    const selectIsBillingSameAsShipping = createSelector(selectCartShippingAddress, selectCartBillingAddress, (/**
     * @param {?} shippingAddress
     * @param {?} billingAddress
     * @return {?}
     */
    (shippingAddress, billingAddress) => daffComparePersonalAddresses(shippingAddress, billingAddress)));
    /** @type {?} */
    const selectHasBillingAddress = createSelector(selectCartBillingAddress, (/**
     * @param {?} billingAddress
     * @return {?}
     */
    billingAddress => !!billingAddress));
    /** @type {?} */
    const selectHasShippingAddress = createSelector(selectCartShippingAddress, (/**
     * @param {?} shippingAddress
     * @return {?}
     */
    shippingAddress => !!shippingAddress));
    /** @type {?} */
    const selectHasShippingMethod = createSelector(selectCartShippingInformation, (/**
     * @param {?} shippingMethod
     * @return {?}
     */
    shippingMethod => !!shippingMethod));
    /** @type {?} */
    const selectHasPaymentMethod = createSelector(selectCartPayment, (/**
     * @param {?} paymentMethod
     * @return {?}
     */
    paymentMethod => !!paymentMethod && paymentMethod.method !== ''));
    /** @type {?} */
    const selectCanPlaceOrder = createSelector(selectIsCartEmpty, selectHasBillingAddress, selectHasShippingAddress, selectHasShippingMethod, selectHasPaymentMethod, (/**
     * @param {?} isCartEmpty
     * @param {?} hasBillingAddress
     * @param {?} hasShippingAddress
     * @param {?} hasShippingMethod
     * @param {?} hasPaymentMethod
     * @return {?}
     */
    (isCartEmpty, hasBillingAddress, hasShippingAddress, hasShippingMethod, hasPaymentMethod) => !isCartEmpty
        && hasBillingAddress
        && hasShippingAddress
        && hasShippingMethod
        && hasPaymentMethod));
    return {
        selectCartState,
        selectCartValue,
        selectCartResolved,
        selectCartLoadingObject,
        selectCartFeatureLoading,
        selectCartFeatureResolving,
        selectCartFeatureMutating,
        selectCartLoading,
        selectCartResolving,
        selectCartMutating,
        selectBillingAddressLoading,
        selectBillingAddressResolving,
        selectBillingAddressMutating,
        selectShippingAddressLoading,
        selectShippingAddressResolving,
        selectShippingAddressMutating,
        selectShippingInformationLoading,
        selectShippingInformationResolving,
        selectShippingInformationMutating,
        selectShippingMethodsLoading,
        selectShippingMethodsResolving,
        selectPaymentLoading,
        selectPaymentResolving,
        selectPaymentMutating,
        selectPaymentMethodsLoading,
        selectPaymentMethodsResolving,
        selectCouponLoading,
        selectCouponResolving,
        selectCouponMutating,
        selectItemLoading,
        selectItemAdding,
        selectItemResolving,
        selectCartErrorsObject,
        selectCartErrors,
        selectBillingAddressErrors,
        selectShippingAddressErrors,
        selectShippingInformationErrors,
        selectShippingMethodsErrors,
        selectPaymentErrors,
        selectPaymentMethodsErrors,
        selectItemErrors,
        selectCouponErrors,
        selectCartId,
        selectCartSubtotal,
        selectCartGrandTotal,
        selectCartSubtotalExcludingTax,
        selectCartSubtotalIncludingTax,
        selectCartSubtotalWithDiscountExcludingTax,
        selectCartSubtotalWithDiscountIncludingTax,
        selectCartDiscountTotals,
        selectCartTotalTax,
        selectCartShippingTotal,
        selectCartCoupons,
        selectCartItems,
        selectCartHasOutOfStockItems,
        selectCartBillingAddress,
        selectCartShippingAddress,
        selectCartPayment,
        selectCartTotals,
        selectCartShippingInformation,
        selectCartAvailableShippingMethods,
        selectCartAvailablePaymentMethods,
        selectIsCartEmpty,
        selectCartItemDiscountedRowTotal,
        selectIsBillingSameAsShipping,
        selectHasBillingAddress,
        selectHasShippingAddress,
        selectHasShippingMethod,
        selectHasPaymentMethod,
        selectCanPlaceOrder
    };
});
const ɵ0$4 = createCartSelectors;
const ɵ1$2 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createCartSelectors());
};
/** @type {?} */
const getCartSelectors = ((ɵ1$2))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T, V, U
 */
function DaffCartMemoizedSelectors() { }
/** @type {?} */
const createCartSelectors$1 = (/**
 * @template T, V, U
 * @return {?}
 */
() => {
    return Object.assign({}, getDaffCartFeatureSelector(), getCartOrderSelectors(), getCartSelectors(), getDaffCartItemEntitiesSelectors());
});
const ɵ0$5 = createCartSelectors$1;
const ɵ1$3 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    () => cache = cache
        ? cache
        : createCartSelectors$1());
};
/** @type {?} */
const getDaffCartSelectors = ((ɵ1$3))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, V, U
 */
class DaffCartFacade {
    /**
     * @param {?} store
     * @param {?} paymentMethodMap
     */
    constructor(store, paymentMethodMap) {
        this.store = store;
        this.paymentMethodMap = paymentMethodMap;
        const { selectCartValue, selectCartResolved, selectCartLoadingObject, selectCartFeatureLoading, selectCartFeatureResolving, selectCartFeatureMutating, selectCartLoading, selectCartResolving, selectCartMutating, selectBillingAddressLoading, selectBillingAddressResolving, selectBillingAddressMutating, selectShippingAddressLoading, selectShippingAddressResolving, selectShippingAddressMutating, selectShippingInformationLoading, selectShippingInformationResolving, selectShippingInformationMutating, selectShippingMethodsLoading, selectShippingMethodsResolving, selectPaymentLoading, selectPaymentResolving, selectPaymentMutating, selectPaymentMethodsLoading, selectPaymentMethodsResolving, selectCouponLoading, selectCouponResolving, selectCouponMutating, selectItemLoading, selectItemAdding, selectItemResolving, selectCartItemMutating, selectCartErrorsObject, selectCartErrors, selectItemErrors, selectBillingAddressErrors, selectShippingAddressErrors, selectShippingInformationErrors, selectShippingMethodsErrors, selectPaymentErrors, selectPaymentMethodsErrors, selectCouponErrors, selectCartId, selectCartSubtotal, selectCartGrandTotal, selectCartSubtotalExcludingTax, selectCartSubtotalIncludingTax, selectCartSubtotalWithDiscountExcludingTax, selectCartSubtotalWithDiscountIncludingTax, selectCartDiscountTotals, selectCartTotalTax, selectCartShippingTotal, selectCartCoupons, selectCartItems, selectCartHasOutOfStockItems, selectCartItemEntities, selectTotalNumberOfCartItems, selectCartItemConfiguredAttributes, selectCartItemCompositeOptions, selectCartBillingAddress, selectCartShippingAddress, selectCartPayment, selectCartTotals, selectCartShippingInformation, selectCartAvailableShippingMethods, selectCartAvailablePaymentMethods, selectIsCartEmpty, selectIsBillingSameAsShipping, selectCartOrderLoading, selectCartOrderErrors, selectCartOrderValue, selectCartOrderId, selectCartOrderCartId, selectHasOrderResult, selectCartItemDiscountedRowTotal, selectIsCartItemOutOfStock, selectCartItemState, selectHasBillingAddress, selectHasShippingAddress, selectHasShippingMethod, selectHasPaymentMethod, selectCanPlaceOrder } = getDaffCartSelectors();
        this._selectCartItemDiscountedRowTotal = selectCartItemDiscountedRowTotal;
        this._selectCartItemConfiguredAttributes = selectCartItemConfiguredAttributes;
        this._selectCartItemCompositeOptions = selectCartItemCompositeOptions;
        this._selectIsCartItemOutOfStock = selectIsCartItemOutOfStock;
        this._selectCartItemState = selectCartItemState;
        this.cart$ = this.store.pipe(select(selectCartValue));
        this.resolved$ = this.store.pipe(select(selectCartResolved));
        this.loadingObject$ = this.store.pipe(select(selectCartLoadingObject));
        this.featureLoading$ = this.store.pipe(select(selectCartFeatureLoading));
        this.featureResolving$ = this.store.pipe(select(selectCartFeatureResolving));
        this.featureMutating$ = this.store.pipe(select(selectCartFeatureMutating));
        this.loading$ = this.store.pipe(select(selectCartLoading));
        this.resolving$ = this.store.pipe(select(selectCartResolving));
        this.mutating$ = this.store.pipe(select(selectCartMutating));
        this.billingAddressLoading$ = this.store.pipe(select(selectBillingAddressLoading));
        this.billingAddressResolving$ = this.store.pipe(select(selectBillingAddressResolving));
        this.billingAddressMutating$ = this.store.pipe(select(selectBillingAddressMutating));
        this.shippingAddressLoading$ = this.store.pipe(select(selectShippingAddressLoading));
        this.shippingAddressResolving$ = this.store.pipe(select(selectShippingAddressResolving));
        this.shippingAddressMutating$ = this.store.pipe(select(selectShippingAddressMutating));
        this.shippingInformationLoading$ = this.store.pipe(select(selectShippingInformationLoading));
        this.shippingInformationResolving$ = this.store.pipe(select(selectShippingInformationResolving));
        this.shippingInformationMutating$ = this.store.pipe(select(selectShippingInformationMutating));
        this.shippingMethodsLoading$ = this.store.pipe(select(selectShippingMethodsLoading));
        this.shippingMethodsResolving$ = this.store.pipe(select(selectShippingMethodsResolving));
        this.paymentLoading$ = this.store.pipe(select(selectPaymentLoading));
        this.paymentResolving$ = this.store.pipe(select(selectPaymentResolving));
        this.paymentMutating$ = this.store.pipe(select(selectPaymentMutating));
        this.paymentMethodsLoading$ = this.store.pipe(select(selectPaymentMethodsLoading));
        this.paymentMethodsResolving$ = this.store.pipe(select(selectPaymentMethodsResolving));
        this.couponLoading$ = this.store.pipe(select(selectCouponLoading));
        this.couponResolving$ = this.store.pipe(select(selectCouponResolving));
        this.couponMutating$ = this.store.pipe(select(selectCouponMutating));
        this.itemLoading$ = this.store.pipe(select(selectItemLoading));
        this.itemAdding$ = this.store.pipe(select(selectItemAdding));
        this.itemResolving$ = this.store.pipe(select(selectItemResolving));
        this.itemMutating$ = this.store.pipe(select(selectCartItemMutating));
        this.errors$ = this.store.pipe(select(selectCartErrorsObject));
        this.cartErrors$ = this.store.pipe(select(selectCartErrors));
        this.itemErrors$ = this.store.pipe(select(selectItemErrors));
        this.billingAddressErrors$ = this.store.pipe(select(selectBillingAddressErrors));
        this.shippingAddressErrors$ = this.store.pipe(select(selectShippingAddressErrors));
        this.shippingInformationErrors$ = this.store.pipe(select(selectShippingInformationErrors));
        this.shippingMethodsErrors$ = this.store.pipe(select(selectShippingMethodsErrors));
        this.paymentErrors$ = this.store.pipe(select(selectPaymentErrors));
        this.paymentMethodsErrors$ = this.store.pipe(select(selectPaymentMethodsErrors));
        this.couponErrors$ = this.store.pipe(select(selectCouponErrors));
        this.id$ = this.store.pipe(select(selectCartId));
        this.subtotal$ = this.store.pipe(select(selectCartSubtotal));
        this.grandTotal$ = this.store.pipe(select(selectCartGrandTotal));
        this.subtotalExcludingTax$ = this.store.pipe(select(selectCartSubtotalExcludingTax));
        this.subtotalIncludingTax$ = this.store.pipe(select(selectCartSubtotalIncludingTax));
        this.subtotalWithDiscountExcludingTax$ = this.store.pipe(select(selectCartSubtotalWithDiscountExcludingTax));
        this.subtotalWithDiscountIncludingTax$ = this.store.pipe(select(selectCartSubtotalWithDiscountIncludingTax));
        this.discountTotals$ = this.store.pipe(select(selectCartDiscountTotals));
        this.totalTax$ = this.store.pipe(select(selectCartTotalTax));
        this.shippingTotal$ = this.store.pipe(select(selectCartShippingTotal));
        this.coupons$ = this.store.pipe(select(selectCartCoupons));
        this.items$ = this.store.pipe(select(selectCartItems));
        this.totalItems$ = this.store.pipe(select(selectTotalNumberOfCartItems));
        this.hasOutOfStockItems$ = this.store.pipe(select(selectCartHasOutOfStockItems));
        this.itemDictionary$ = this.store.pipe(select(selectCartItemEntities));
        this.billingAddress$ = this.store.pipe(select(selectCartBillingAddress));
        this.shippingAddress$ = this.store.pipe(select(selectCartShippingAddress));
        this.payment$ = this.store.pipe(select(selectCartPayment));
        this.totals$ = this.store.pipe(select(selectCartTotals));
        this.shippingInformation$ = this.store.pipe(select(selectCartShippingInformation));
        this.availableShippingMethods$ = this.store.pipe(select(selectCartAvailableShippingMethods));
        this.availablePaymentMethods$ = this.store.pipe(select(selectCartAvailablePaymentMethods));
        this.paymentId$ = this.payment$.pipe(map((/**
         * @param {?} payment
         * @return {?}
         */
        payment => payment && payment.method
            ? this.paymentMethodMap[payment.method]
            : null)));
        this.isCartEmpty$ = this.store.pipe(select(selectIsCartEmpty));
        this.isBillingSameAsShipping$ = this.store.pipe(select(selectIsBillingSameAsShipping));
        this.hasBillingAddress$ = this.store.pipe(select(selectHasBillingAddress));
        this.hasShippingAddress$ = this.store.pipe(select(selectHasShippingAddress));
        this.hasShippingMethod$ = this.store.pipe(select(selectHasShippingMethod));
        this.hasPaymentMethod$ = this.store.pipe(select(selectHasPaymentMethod));
        this.canPlaceOrder$ = this.store.pipe(select(selectCanPlaceOrder));
        this.orderResultLoading$ = this.store.pipe(select(selectCartOrderLoading));
        this.orderResultErrors$ = this.store.pipe(select(selectCartOrderErrors));
        this.orderResult$ = this.store.pipe(select(selectCartOrderValue));
        this.orderResultId$ = this.store.pipe(select(selectCartOrderId));
        this.orderResultCartId$ = this.store.pipe(select(selectCartOrderCartId));
        this.hasOrderResult$ = this.store.pipe(select(selectHasOrderResult));
    }
    /**
     * @param {?} itemId
     * @return {?}
     */
    getConfiguredCartItemAttributes(itemId) {
        return this.store.pipe(select(this._selectCartItemConfiguredAttributes, { id: itemId }));
    }
    ;
    /**
     * @param {?} itemId
     * @return {?}
     */
    getCompositeCartItemOptions(itemId) {
        return this.store.pipe(select(this._selectCartItemCompositeOptions, { id: itemId }));
    }
    ;
    /**
     * @param {?} itemId
     * @return {?}
     */
    getCartItemDiscountedTotal(itemId) {
        return this.store.pipe(select(this._selectCartItemDiscountedRowTotal, { id: itemId }));
    }
    /**
     * @param {?} itemId
     * @return {?}
     */
    isCartItemOutOfStock(itemId) {
        return this.store.pipe(select(this._selectIsCartItemOutOfStock, { id: itemId }));
    }
    /**
     * @param {?} itemId
     * @return {?}
     */
    getCartItemState(itemId) {
        return this.store.pipe(select(this._selectCartItemState, { id: itemId }));
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffCartFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCartFacade.ctorParameters = () => [
    { type: Store },
    { type: Object, decorators: [{ type: Inject, args: [DaffCartPaymentMethodIdMap,] }] }
];
/** @nocollapse */ DaffCartFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartFacade_Factory() { return new DaffCartFacade(ɵɵinject(Store), ɵɵinject(DaffCartPaymentMethodIdMap)); }, token: DaffCartFacade, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffCartFacade.prototype.cart$;
    /** @type {?} */
    DaffCartFacade.prototype.resolved$;
    /** @type {?} */
    DaffCartFacade.prototype.loadingObject$;
    /** @type {?} */
    DaffCartFacade.prototype.featureLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.featureResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.featureMutating$;
    /** @type {?} */
    DaffCartFacade.prototype.loading$;
    /** @type {?} */
    DaffCartFacade.prototype.resolving$;
    /** @type {?} */
    DaffCartFacade.prototype.mutating$;
    /** @type {?} */
    DaffCartFacade.prototype.billingAddressLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.billingAddressResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.billingAddressMutating$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingAddressLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingAddressResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingAddressMutating$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingInformationLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingInformationResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingInformationMutating$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingMethodsLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingMethodsResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.paymentLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.paymentResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.paymentMutating$;
    /** @type {?} */
    DaffCartFacade.prototype.paymentMethodsLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.paymentMethodsResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.couponLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.couponResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.couponMutating$;
    /** @type {?} */
    DaffCartFacade.prototype.itemLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.itemAdding$;
    /** @type {?} */
    DaffCartFacade.prototype.itemResolving$;
    /** @type {?} */
    DaffCartFacade.prototype.itemMutating$;
    /** @type {?} */
    DaffCartFacade.prototype.errors$;
    /** @type {?} */
    DaffCartFacade.prototype.cartErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.itemErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.billingAddressErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingAddressErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingInformationErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingMethodsErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.paymentErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.paymentMethodsErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.couponErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.id$;
    /** @type {?} */
    DaffCartFacade.prototype.subtotal$;
    /** @type {?} */
    DaffCartFacade.prototype.grandTotal$;
    /** @type {?} */
    DaffCartFacade.prototype.subtotalExcludingTax$;
    /** @type {?} */
    DaffCartFacade.prototype.subtotalIncludingTax$;
    /** @type {?} */
    DaffCartFacade.prototype.subtotalWithDiscountExcludingTax$;
    /** @type {?} */
    DaffCartFacade.prototype.subtotalWithDiscountIncludingTax$;
    /** @type {?} */
    DaffCartFacade.prototype.discountTotals$;
    /** @type {?} */
    DaffCartFacade.prototype.totalTax$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingTotal$;
    /** @type {?} */
    DaffCartFacade.prototype.coupons$;
    /** @type {?} */
    DaffCartFacade.prototype.items$;
    /** @type {?} */
    DaffCartFacade.prototype.totalItems$;
    /** @type {?} */
    DaffCartFacade.prototype.hasOutOfStockItems$;
    /** @type {?} */
    DaffCartFacade.prototype.itemDictionary$;
    /** @type {?} */
    DaffCartFacade.prototype.billingAddress$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingAddress$;
    /** @type {?} */
    DaffCartFacade.prototype.payment$;
    /** @type {?} */
    DaffCartFacade.prototype.totals$;
    /** @type {?} */
    DaffCartFacade.prototype.shippingInformation$;
    /** @type {?} */
    DaffCartFacade.prototype.availableShippingMethods$;
    /** @type {?} */
    DaffCartFacade.prototype.availablePaymentMethods$;
    /** @type {?} */
    DaffCartFacade.prototype.paymentId$;
    /** @type {?} */
    DaffCartFacade.prototype.isCartEmpty$;
    /** @type {?} */
    DaffCartFacade.prototype.isBillingSameAsShipping$;
    /** @type {?} */
    DaffCartFacade.prototype.hasBillingAddress$;
    /** @type {?} */
    DaffCartFacade.prototype.hasShippingAddress$;
    /** @type {?} */
    DaffCartFacade.prototype.hasShippingMethod$;
    /** @type {?} */
    DaffCartFacade.prototype.hasPaymentMethod$;
    /** @type {?} */
    DaffCartFacade.prototype.canPlaceOrder$;
    /** @type {?} */
    DaffCartFacade.prototype.orderResultLoading$;
    /** @type {?} */
    DaffCartFacade.prototype.orderResultErrors$;
    /** @type {?} */
    DaffCartFacade.prototype.orderResult$;
    /** @type {?} */
    DaffCartFacade.prototype.orderResultId$;
    /** @type {?} */
    DaffCartFacade.prototype.orderResultCartId$;
    /** @type {?} */
    DaffCartFacade.prototype.hasOrderResult$;
    /**
     * @type {?}
     * @private
     */
    DaffCartFacade.prototype._selectCartItemDiscountedRowTotal;
    /**
     * @type {?}
     * @private
     */
    DaffCartFacade.prototype._selectCartItemConfiguredAttributes;
    /**
     * @type {?}
     * @private
     */
    DaffCartFacade.prototype._selectCartItemCompositeOptions;
    /**
     * @type {?}
     * @private
     */
    DaffCartFacade.prototype._selectIsCartItemOutOfStock;
    /**
     * @type {?}
     * @private
     */
    DaffCartFacade.prototype._selectCartItemState;
    /**
     * @type {?}
     * @private
     */
    DaffCartFacade.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DaffCartFacade.prototype.paymentMethodMap;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffCartBillingAddressGuardRedirectUrl = new InjectionToken('DaffCartBillingAddressGuardRedirectUrl');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A routing guard that will redirect to a given url if the billing address on the cart is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartBillingAddressGuardRedirectUrl injection token.
 * The guard will not wait until the cart has been resolved before performing the check and emitting.
 * Ensure that the cart is resolved prior to running this guard with the {\@link DaffResolvedCartGuard}.
 */
class DaffBillingAddressGuard {
    /**
     * @param {?} facade
     * @param {?} router
     * @param {?} redirectUrl
     */
    constructor(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.facade.hasBillingAddress$.pipe(take(1), tap((/**
         * @param {?} hasBillingAddress
         * @return {?}
         */
        hasBillingAddress => {
            if (!hasBillingAddress) {
                this.router.navigateByUrl(this.redirectUrl);
            }
        })));
    }
}
DaffBillingAddressGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffBillingAddressGuard.ctorParameters = () => [
    { type: DaffCartFacade },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffCartBillingAddressGuardRedirectUrl,] }] }
];
/** @nocollapse */ DaffBillingAddressGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffBillingAddressGuard_Factory() { return new DaffBillingAddressGuard(ɵɵinject(DaffCartFacade), ɵɵinject(Router), ɵɵinject(DaffCartBillingAddressGuardRedirectUrl)); }, token: DaffBillingAddressGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffBillingAddressGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    DaffBillingAddressGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffBillingAddressGuard.prototype.redirectUrl;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An object that describes the resolution configuration of the cart state package.
 * @record
 */
function DaffCartStateResolutionConfiguration() { }
if (false) {
    /**
     * When Daffodil fails to resolve a cart, you should navigate your users to
     * a page that is outside the scope of resolution. The `failedResolutionPath` allows you
     * to control where to navigate your users to when resolution fails.
     * @type {?}
     */
    DaffCartStateResolutionConfiguration.prototype.failedResolutionPath;
}
;
/**
 * The default values of the resolution slice of the cart state configuration.
 * @type {?}
 */
const daffCartStateResolutionConfigurationDefault = {
    failedResolutionPath: null,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An object that describes the configuration of the`\@daffodil/cart/state` package.
 * @record
 */
function DaffCartStateConfiguration() { }
if (false) {
    /** @type {?} */
    DaffCartStateConfiguration.prototype.resolution;
}
/**
 * The default values of the `\@daffodil/cart/state` state configuration.
 * @type {?}
 */
const daffCartStateConfigurationDefault = {
    resolution: Object.assign({}, daffCartStateResolutionConfigurationDefault),
};
/**
 * The token holding the runtime configuration for the behavior of the
 * `\@daffodil/cart/state` package.
 * @type {?}
 */
const DAFF_CART_STATE_CONFIG = new InjectionToken('DAFF_CART_STATE_CONFIG', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    () => daffCartStateConfigurationDefault),
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A routing guard that will optionally redirect to a given url if the cart is not properly resolved.
 * It will initiate cart resolution.
 * The url has no default and the guard will not redirect if no value is specified.
 * Specify a redirect path with the {\@link DaffResolvedCartGuardRedirectUrl} injection token.
 * The guard will wait until the cart has been resolved before performing the check and emitting.
 */
class DaffResolvedCartGuard {
    /**
     * @param {?} facade
     * @param {?} router
     * @param {?} config
     */
    constructor(facade, router, config) {
        this.facade = facade;
        this.router = router;
        this.config = config;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.facade.resolved$.pipe(filter((/**
         * @param {?} resolvedState
         * @return {?}
         */
        resolvedState => resolvedState === DaffCartResolveState.Succeeded ||
            resolvedState === DaffCartResolveState.ServerSide ||
            resolvedState === DaffCartResolveState.Failed)), map((/**
         * @param {?} resolvedState
         * @return {?}
         */
        resolvedState => resolvedState === DaffCartResolveState.Succeeded ||
            resolvedState === DaffCartResolveState.ServerSide)), take(1), map((/**
         * @param {?} success
         * @return {?}
         */
        success => !success && this.config.resolution.failedResolutionPath
            ? this.router.parseUrl(this.config.resolution.failedResolutionPath)
            : success)));
    }
}
DaffResolvedCartGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
DaffResolvedCartGuard.ctorParameters = () => [
    { type: DaffCartFacade },
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: [DAFF_CART_STATE_CONFIG,] }] }
];
/** @nocollapse */ DaffResolvedCartGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffResolvedCartGuard_Factory() { return new DaffResolvedCartGuard(ɵɵinject(DaffCartFacade), ɵɵinject(Router), ɵɵinject(DAFF_CART_STATE_CONFIG)); }, token: DaffResolvedCartGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffResolvedCartGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    DaffResolvedCartGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffResolvedCartGuard.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The path to which the user should be redirected if the cart has no items when {\@link DaffCartItemsGuard} is invoked.
 * @type {?}
 */
const DaffCartItemsGuardRedirectUrl = new InjectionToken('DaffCartItemsGuardRedirectUrl');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A routing guard that will ensure that the cart is not empty before allowing activation of a route.
 * If the cart has items in it, then `canActivate` will emit true. If not, it will emit false and redirect to a specific path.
 * The url is `/` by default but can be overridden with the {\@link DaffCartItemsGuardRedirectUrl} injection token.
 * The guard will not wait until the cart has been resolved before performing the check and emitting.
 * Ensure that the cart is resolved prior to running this guard with the {\@link DaffResolvedCartGuard}.
 */
class DaffCartItemsGuard {
    /**
     * @param {?} facade
     * @param {?} router
     * @param {?} redirectUrl
     */
    constructor(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.facade.isCartEmpty$.pipe(map((/**
         * @param {?} isCartEmpty
         * @return {?}
         */
        isCartEmpty => !isCartEmpty)), take(1), tap((/**
         * @param {?} hasNonEmptyCart
         * @return {?}
         */
        hasNonEmptyCart => {
            if (!hasNonEmptyCart) {
                this.router.navigateByUrl(this.redirectUrl);
            }
        })));
    }
}
DaffCartItemsGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCartItemsGuard.ctorParameters = () => [
    { type: DaffCartFacade },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffCartItemsGuardRedirectUrl,] }] }
];
/** @nocollapse */ DaffCartItemsGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartItemsGuard_Factory() { return new DaffCartItemsGuard(ɵɵinject(DaffCartFacade), ɵɵinject(Router), ɵɵinject(DaffCartItemsGuardRedirectUrl)); }, token: DaffCartItemsGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffCartItemsGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    DaffCartItemsGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffCartItemsGuard.prototype.redirectUrl;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffCartPaymentMethodGuardRedirectUrl = new InjectionToken('DaffCartPaymentMethodGuardRedirectUrl');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A routing guard that will redirect to a given url if the payment method on the cart is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartPaymentMethodGuardRedirectUrl injection token.
 * The guard will not wait until the cart has been resolved before performing the check and emitting.
 * Ensure that the cart is resolved prior to running this guard with the {\@link DaffResolvedCartGuard}.
 */
class DaffPaymentMethodGuard {
    /**
     * @param {?} facade
     * @param {?} router
     * @param {?} redirectUrl
     */
    constructor(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.facade.hasPaymentMethod$.pipe(take(1), tap((/**
         * @param {?} hasPaymentMethod
         * @return {?}
         */
        hasPaymentMethod => {
            if (!hasPaymentMethod) {
                this.router.navigateByUrl(this.redirectUrl);
            }
        })));
    }
}
DaffPaymentMethodGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffPaymentMethodGuard.ctorParameters = () => [
    { type: DaffCartFacade },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffCartPaymentMethodGuardRedirectUrl,] }] }
];
/** @nocollapse */ DaffPaymentMethodGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffPaymentMethodGuard_Factory() { return new DaffPaymentMethodGuard(ɵɵinject(DaffCartFacade), ɵɵinject(Router), ɵɵinject(DaffCartPaymentMethodGuardRedirectUrl)); }, token: DaffPaymentMethodGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffPaymentMethodGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    DaffPaymentMethodGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffPaymentMethodGuard.prototype.redirectUrl;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffCartShippingAddressGuardRedirectUrl = new InjectionToken('DaffCartShippingAddressGuardRedirectUrl');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A routing guard that will redirect to a given url if the shipping address on the cart is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartShippingAddressGuardRedirectUrl injection token.
 * The guard will not wait until the cart has been resolved before performing the check and emitting.
 * Ensure that the cart is resolved prior to running this guard with the {\@link DaffResolvedCartGuard}.
 */
class DaffShippingAddressGuard {
    /**
     * @param {?} facade
     * @param {?} router
     * @param {?} redirectUrl
     */
    constructor(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.facade.hasShippingAddress$.pipe(take(1), tap((/**
         * @param {?} hasShippingAddress
         * @return {?}
         */
        hasShippingAddress => {
            if (!hasShippingAddress) {
                this.router.navigateByUrl(this.redirectUrl);
            }
        })));
    }
}
DaffShippingAddressGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffShippingAddressGuard.ctorParameters = () => [
    { type: DaffCartFacade },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffCartShippingAddressGuardRedirectUrl,] }] }
];
/** @nocollapse */ DaffShippingAddressGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffShippingAddressGuard_Factory() { return new DaffShippingAddressGuard(ɵɵinject(DaffCartFacade), ɵɵinject(Router), ɵɵinject(DaffCartShippingAddressGuardRedirectUrl)); }, token: DaffShippingAddressGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffShippingAddressGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    DaffShippingAddressGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffShippingAddressGuard.prototype.redirectUrl;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffCartShippingMethodGuardRedirectUrl = new InjectionToken('DaffCartShippingMethodGuardRedirectUrl');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A routing guard that will redirect to a given url if the shipping method on the cart is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartShippingMethodGuardRedirectUrl injection token.
 * The guard will not wait until the cart has been resolved before performing the check and emitting.
 * Ensure that the cart is resolved prior to running this guard with the {\@link DaffResolvedCartGuard}.
 */
class DaffShippingMethodGuard {
    /**
     * @param {?} facade
     * @param {?} router
     * @param {?} redirectUrl
     */
    constructor(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.facade.hasShippingMethod$.pipe(take(1), tap((/**
         * @param {?} hasShippingMethod
         * @return {?}
         */
        hasShippingMethod => {
            if (!hasShippingMethod) {
                this.router.navigateByUrl(this.redirectUrl);
            }
        })));
    }
}
DaffShippingMethodGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffShippingMethodGuard.ctorParameters = () => [
    { type: DaffCartFacade },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffCartShippingMethodGuardRedirectUrl,] }] }
];
/** @nocollapse */ DaffShippingMethodGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffShippingMethodGuard_Factory() { return new DaffShippingMethodGuard(ɵɵinject(DaffCartFacade), ɵɵinject(Router), ɵɵinject(DaffCartShippingMethodGuardRedirectUrl)); }, token: DaffShippingMethodGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffShippingMethodGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    DaffShippingMethodGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffShippingMethodGuard.prototype.redirectUrl;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffCartOrderResultGuardRedirectUrl = new InjectionToken('DaffCartOrderResultGuardRedirectUrl');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A routing guard that will redirect to a given url if the cart order result is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartOrderResultGuardRedirectUrl injection token.
 */
class DaffOrderResultGuard {
    /**
     * @param {?} facade
     * @param {?} router
     * @param {?} redirectUrl
     */
    constructor(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.facade.hasOrderResult$.pipe(tap((/**
         * @param {?} hasOrderResult
         * @return {?}
         */
        hasOrderResult => {
            if (!hasOrderResult) {
                this.router.navigateByUrl(this.redirectUrl);
            }
        })));
    }
}
DaffOrderResultGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderResultGuard.ctorParameters = () => [
    { type: DaffCartFacade },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffCartOrderResultGuardRedirectUrl,] }] }
];
/** @nocollapse */ DaffOrderResultGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderResultGuard_Factory() { return new DaffOrderResultGuard(ɵɵinject(DaffCartFacade), ɵɵinject(Router), ɵɵinject(DaffCartOrderResultGuardRedirectUrl)); }, token: DaffOrderResultGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffOrderResultGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    DaffOrderResultGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffOrderResultGuard.prototype.redirectUrl;
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
const DaffCartResolverRedirectUrl = new InjectionToken('DaffCartResolverRedirectUrl');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Resolves the cart before navigation. Redirects to a given url when a failure occurs during Cart Load.
 * This url is `/` by default but can be overridden with the DaffCartResolverRedirectUrl injection token.
 */
class DaffCartResolver {
    /**
     * @param {?} store
     * @param {?} dispatcher
     * @param {?} router
     * @param {?} redirectUrl
     */
    constructor(store, dispatcher, router, redirectUrl) {
        this.store = store;
        this.dispatcher = dispatcher;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    resolve() {
        this.store.dispatch(new DaffResolveCart());
        return this.dispatcher.pipe(filter((/**
         * @param {?} action
         * @return {?}
         */
        action => action.type === DaffCartActionTypes.CartLoadSuccessAction
            || action.type === DaffCartActionTypes.CartLoadFailureAction
            || action.type === DaffCartActionTypes.CartCreateFailureAction
            || action.type === DaffCartActionTypes.CartStorageFailureAction)), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            if (action.type !== DaffCartActionTypes.CartLoadSuccessAction) {
                this.router.navigateByUrl(this.redirectUrl);
            }
            return action;
        })), take(1));
    }
}
DaffCartResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffCartResolver.ctorParameters = () => [
    { type: Store },
    { type: ActionsSubject },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffCartResolverRedirectUrl,] }] }
];
/** @nocollapse */ DaffCartResolver.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartResolver_Factory() { return new DaffCartResolver(ɵɵinject(Store), ɵɵinject(ActionsSubject), ɵɵinject(Router), ɵɵinject(DaffCartResolverRedirectUrl)); }, token: DaffCartResolver, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffCartResolver.prototype.store;
    /**
     * @type {?}
     * @private
     */
    DaffCartResolver.prototype.dispatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartResolver.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffCartResolver.prototype.redirectUrl;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffEmptyCartResolverRedirectUrl = new InjectionToken('DaffEmptyCartResolverRedirectUrl');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Resolves the cart before navigation. Redirects to a given url when a failure occurs during Cart Load.
 * This url is `/` by default but can be overridden with the DaffCartResolverRedirectUrl injection token.
 * This resolver also redirects to a different url when the cart is empty after successfully loading.
 * This url is also `/` by default, but can be overridden with the DaffEmptyCartResolverRedirectUrl
 */
class DaffEmptyCartResolver {
    /**
     * @param {?} cartResolver
     * @param {?} router
     * @param {?} redirectUrl
     */
    constructor(cartResolver, router, redirectUrl) {
        this.cartResolver = cartResolver;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    resolve() {
        return this.cartResolver.resolve().pipe(filter((/**
         * @param {?} action
         * @return {?}
         */
        action => action.type === DaffCartActionTypes.CartLoadSuccessAction)), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            if (!action.payload || action.payload.items.length === 0) {
                this.router.navigateByUrl(this.redirectUrl);
            }
            return action;
        })));
    }
}
DaffEmptyCartResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffEmptyCartResolver.ctorParameters = () => [
    { type: DaffCartResolver },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffEmptyCartResolverRedirectUrl,] }] }
];
/** @nocollapse */ DaffEmptyCartResolver.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffEmptyCartResolver_Factory() { return new DaffEmptyCartResolver(ɵɵinject(DaffCartResolver), ɵɵinject(Router), ɵɵinject(DaffEmptyCartResolverRedirectUrl)); }, token: DaffEmptyCartResolver, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffEmptyCartResolver.prototype.cartResolver;
    /**
     * @type {?}
     * @private
     */
    DaffEmptyCartResolver.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffEmptyCartResolver.prototype.redirectUrl;
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
 * @record
 */
function DaffStatefulCompositeCartItem() { }

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DaffStatefulConfigurableCartItem() { }

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An injection token for setting how long (in ms) a cart item remains in a temporary state before
 * reverting back to a default state. These temporary states are set after mutating or adding a cart item.
 * Daffodil has a timer that resets the state of all cart items after this debounce time, but the timer will
 * reset if a new item addition or mutation occurs. The default is 4000.
 * @type {?}
 */
const DaffCartItemStateDebounceTime = new InjectionToken('DaffCartItemStateDebounceTime');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DaffCartEffects {
    /**
     * @param {?} actions$
     * @param {?} errorMatcher
     * @param {?} driver
     * @param {?} storage
     */
    constructor(actions$, errorMatcher, driver, storage) {
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.create$ = this.actions$.pipe(ofType(DaffCartActionTypes.CartCreateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.create().pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartCreateSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartCreateFailure(this.errorMatcher(error)))))))));
        this.storeId$ = this.actions$.pipe(ofType(DaffCartActionTypes.CartCreateSuccessAction, DaffCartActionTypes.ResolveCartSuccessAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => of(null).pipe(tap((/**
         * @return {?}
         */
        () => {
            this.storage.setCartId(String(action.payload.id));
        })), switchMapTo(EMPTY), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartStorageFailure(this.errorMatcher(error)))))))));
        this.get$ = this.actions$.pipe(ofType(DaffCartActionTypes.CartLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => of(null).pipe(map((/**
         * @return {?}
         */
        () => this.storage.getCartId())), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.driver.get(cartId))), map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(this.errorMatcher(error))
            : new DaffCartLoadFailure(this.errorMatcher(error)))))))));
        this.addToCart$ = this.actions$.pipe(ofType(DaffCartActionTypes.AddToCartAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.addToCart(action.payload.productId, action.payload.qty).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffAddToCartSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffAddToCartFailure(this.errorMatcher(error)))))))));
        this.clear$ = this.actions$.pipe(ofType(DaffCartActionTypes.CartClearAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => of(null).pipe(map((/**
         * @return {?}
         */
        () => this.storage.getCartId())), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.driver.clear(cartId))), map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartClearSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(this.errorMatcher(error))
            : new DaffCartClearFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartDriver,] }] },
    { type: DaffCartStorageService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartEffects.prototype, "create$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartEffects.prototype, "storeId$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartEffects.prototype, "get$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartEffects.prototype, "addToCart$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartEffects.prototype, "clear$", void 0);
if (false) {
    /** @type {?} */
    DaffCartEffects.prototype.create$;
    /** @type {?} */
    DaffCartEffects.prototype.storeId$;
    /** @type {?} */
    DaffCartEffects.prototype.get$;
    /** @type {?} */
    DaffCartEffects.prototype.addToCart$;
    /** @type {?} */
    DaffCartEffects.prototype.clear$;
    /**
     * @type {?}
     * @private
     */
    DaffCartEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartEffects.prototype.storage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, U, V
 */
class DaffCartItemEffects {
    /**
     * @param {?} actions$
     * @param {?} errorMatcher
     * @param {?} driver
     * @param {?} storage
     * @param {?} cartItemStateDebounceTime
     */
    constructor(actions$, errorMatcher, driver, storage, cartItemStateDebounceTime) {
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.cartItemStateDebounceTime = cartItemStateDebounceTime;
        this.list$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemListAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.list(this.storage.getCartId()).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartItemListSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartItemListFailure(this.errorMatcher(error)))))))));
        this.get$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.get(this.storage.getCartId(), action.itemId).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartItemLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartItemLoadFailure(this.errorMatcher(error)))))))));
        this.add$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemAddAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.add(this.storage.getCartId(), action.input).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartItemAddSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartItemAddFailure(this.errorMatcher(error)))))))));
        this.update$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemUpdateAction), mergeMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.update(this.storage.getCartId(), action.itemId, action.changes).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartItemUpdateSuccess(resp, action.itemId))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartItemUpdateFailure(this.errorMatcher(error)))))))));
        this.resetCartItemStateAfterChange$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemAddSuccessAction, DaffCartItemActionTypes.CartItemUpdateSuccessAction), debounceTime(this.cartItemStateDebounceTime), map((/**
         * @return {?}
         */
        () => new DaffCartItemStateReset())));
        this.delete$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemDeleteAction), mergeMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.delete(this.storage.getCartId(), action.itemId).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartItemDeleteSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartItemDeleteFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartItemEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartItemEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartItemDriver,] }] },
    { type: DaffCartStorageService },
    { type: Number, decorators: [{ type: Inject, args: [DaffCartItemStateDebounceTime,] }] }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartItemEffects.prototype, "list$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartItemEffects.prototype, "get$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartItemEffects.prototype, "add$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartItemEffects.prototype, "update$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartItemEffects.prototype, "resetCartItemStateAfterChange$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartItemEffects.prototype, "delete$", void 0);
if (false) {
    /** @type {?} */
    DaffCartItemEffects.prototype.list$;
    /** @type {?} */
    DaffCartItemEffects.prototype.get$;
    /** @type {?} */
    DaffCartItemEffects.prototype.add$;
    /** @type {?} */
    DaffCartItemEffects.prototype.update$;
    /** @type {?} */
    DaffCartItemEffects.prototype.resetCartItemStateAfterChange$;
    /** @type {?} */
    DaffCartItemEffects.prototype.delete$;
    /**
     * @type {?}
     * @private
     */
    DaffCartItemEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartItemEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartItemEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartItemEffects.prototype.storage;
    /**
     * @type {?}
     * @private
     */
    DaffCartItemEffects.prototype.cartItemStateDebounceTime;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, V
 */
class DaffCartBillingAddressEffects {
    /**
     * @param {?} actions$
     * @param {?} errorMatcher
     * @param {?} driver
     * @param {?} storage
     */
    constructor(actions$, errorMatcher, driver, storage) {
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.get$ = this.actions$.pipe(ofType(DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.get(this.storage.getCartId()).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartBillingAddressLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartBillingAddressLoadFailure(this.errorMatcher(error)))))))));
        this.update$ = this.actions$.pipe(ofType(DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.update(this.storage.getCartId(), action.payload).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartBillingAddressUpdateSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartBillingAddressUpdateFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartBillingAddressEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartBillingAddressEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartBillingAddressDriver,] }] },
    { type: DaffCartStorageService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartBillingAddressEffects.prototype, "get$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartBillingAddressEffects.prototype, "update$", void 0);
if (false) {
    /** @type {?} */
    DaffCartBillingAddressEffects.prototype.get$;
    /** @type {?} */
    DaffCartBillingAddressEffects.prototype.update$;
    /**
     * @type {?}
     * @private
     */
    DaffCartBillingAddressEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartBillingAddressEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartBillingAddressEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartBillingAddressEffects.prototype.storage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, V
 */
class DaffCartShippingAddressEffects {
    /**
     * @param {?} actions$
     * @param {?} errorMatcher
     * @param {?} driver
     * @param {?} storage
     */
    constructor(actions$, errorMatcher, driver, storage) {
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.get$ = this.actions$.pipe(ofType(DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.get(this.storage.getCartId()).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartShippingAddressLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartShippingAddressLoadFailure(this.errorMatcher(error)))))))));
        this.update$ = this.actions$.pipe(ofType(DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.update(this.storage.getCartId(), action.payload).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartShippingAddressUpdateSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartShippingAddressUpdateFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartShippingAddressEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartShippingAddressEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartShippingAddressDriver,] }] },
    { type: DaffCartStorageService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartShippingAddressEffects.prototype, "get$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartShippingAddressEffects.prototype, "update$", void 0);
if (false) {
    /** @type {?} */
    DaffCartShippingAddressEffects.prototype.get$;
    /** @type {?} */
    DaffCartShippingAddressEffects.prototype.update$;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingAddressEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingAddressEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingAddressEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingAddressEffects.prototype.storage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, V
 */
class DaffCartShippingInformationEffects {
    /**
     * @param {?} actions$
     * @param {?} errorMatcher
     * @param {?} driver
     * @param {?} storage
     */
    constructor(actions$, errorMatcher, driver, storage) {
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.get$ = this.actions$.pipe(ofType(DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.get(this.storage.getCartId()).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartShippingInformationLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartShippingInformationLoadFailure(this.errorMatcher(error)))))))));
        this.update$ = this.actions$.pipe(ofType(DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.update(this.storage.getCartId(), action.payload).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartShippingInformationUpdateSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartShippingInformationUpdateFailure(this.errorMatcher(error)))))))));
        this.delete$ = this.actions$.pipe(ofType(DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.delete(this.storage.getCartId()).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartShippingInformationDeleteSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartShippingInformationDeleteFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartShippingInformationEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartShippingInformationEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartShippingInformationDriver,] }] },
    { type: DaffCartStorageService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartShippingInformationEffects.prototype, "get$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartShippingInformationEffects.prototype, "update$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartShippingInformationEffects.prototype, "delete$", void 0);
if (false) {
    /** @type {?} */
    DaffCartShippingInformationEffects.prototype.get$;
    /** @type {?} */
    DaffCartShippingInformationEffects.prototype.update$;
    /** @type {?} */
    DaffCartShippingInformationEffects.prototype.delete$;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingInformationEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingInformationEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingInformationEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingInformationEffects.prototype.storage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DaffCartShippingMethodsEffects {
    /**
     * @param {?} actions$
     * @param {?} errorMatcher
     * @param {?} driver
     * @param {?} storage
     */
    constructor(actions$, errorMatcher, driver, storage) {
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.list$ = this.actions$.pipe(ofType(DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.list(this.storage.getCartId()).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartShippingMethodsLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartShippingMethodsLoadFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartShippingMethodsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartShippingMethodsEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartShippingMethodsDriver,] }] },
    { type: DaffCartStorageService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartShippingMethodsEffects.prototype, "list$", void 0);
if (false) {
    /** @type {?} */
    DaffCartShippingMethodsEffects.prototype.list$;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingMethodsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingMethodsEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingMethodsEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartShippingMethodsEffects.prototype.storage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, V, R
 */
class DaffCartPaymentEffects {
    /**
     * @param {?} actions$
     * @param {?} errorMatcher
     * @param {?} driver
     * @param {?} storage
     */
    constructor(actions$, errorMatcher, driver, storage) {
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.get$ = this.actions$.pipe(ofType(DaffCartPaymentActionTypes.CartPaymentLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.get(this.storage.getCartId()).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartPaymentLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartPaymentLoadFailure(this.errorMatcher(error)))))))));
        this.update$ = this.actions$.pipe(ofType(DaffCartPaymentActionTypes.CartPaymentUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.update(this.storage.getCartId(), action.payload).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartPaymentUpdateSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartPaymentUpdateFailure(this.errorMatcher(error)))))))));
        this.updateWithBilling$ = this.actions$.pipe(ofType(DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.updateWithBilling(this.storage.getCartId(), action.payment, action.address).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffCartPaymentUpdateWithBillingSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartPaymentUpdateWithBillingFailure(this.errorMatcher(error)))))))));
        this.remove$ = this.actions$.pipe(ofType(DaffCartPaymentActionTypes.CartPaymentRemoveAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.remove(this.storage.getCartId()).pipe(mapTo(new DaffCartPaymentRemoveSuccess()), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartPaymentRemoveFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartPaymentEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartPaymentEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartPaymentDriver,] }] },
    { type: DaffCartStorageService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartPaymentEffects.prototype, "get$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartPaymentEffects.prototype, "update$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartPaymentEffects.prototype, "updateWithBilling$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartPaymentEffects.prototype, "remove$", void 0);
if (false) {
    /** @type {?} */
    DaffCartPaymentEffects.prototype.get$;
    /** @type {?} */
    DaffCartPaymentEffects.prototype.update$;
    /** @type {?} */
    DaffCartPaymentEffects.prototype.updateWithBilling$;
    /** @type {?} */
    DaffCartPaymentEffects.prototype.remove$;
    /**
     * @type {?}
     * @private
     */
    DaffCartPaymentEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartPaymentEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartPaymentEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartPaymentEffects.prototype.storage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DaffCartPaymentMethodsEffects {
    /**
     * @param {?} actions$
     * @param {?} errorMatcher
     * @param {?} driver
     * @param {?} storage
     */
    constructor(actions$, errorMatcher, driver, storage) {
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.list$ = this.actions$.pipe(ofType(DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.list(this.storage.getCartId()).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartPaymentMethodsLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffCartPaymentMethodsLoadFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartPaymentMethodsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartPaymentMethodsEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartPaymentMethodsDriver,] }] },
    { type: DaffCartStorageService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartPaymentMethodsEffects.prototype, "list$", void 0);
if (false) {
    /** @type {?} */
    DaffCartPaymentMethodsEffects.prototype.list$;
    /**
     * @type {?}
     * @private
     */
    DaffCartPaymentMethodsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartPaymentMethodsEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartPaymentMethodsEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartPaymentMethodsEffects.prototype.storage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, V, R
 */
class DaffCartOrderEffects {
    /**
     * @param {?} actions$
     * @param {?} errorMatcher
     * @param {?} driver
     * @param {?} storage
     */
    constructor(actions$, errorMatcher, driver, storage) {
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.placeOrder$ = this.actions$.pipe(ofType(DaffCartOrderActionTypes.CartPlaceOrderAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => of(null).pipe(map((/**
         * @return {?}
         */
        () => this.storage.getCartId())), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.driver.placeOrder(cartId, action.payload))), map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartPlaceOrderSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(this.errorMatcher(error))
            : new DaffCartPlaceOrderFailure(this.errorMatcher(error)))))))));
        this.resetCart$ = this.actions$.pipe(ofType(DaffCartOrderActionTypes.CartPlaceOrderSuccessAction), mapTo(new DaffCartCreate()));
    }
}
DaffCartOrderEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartOrderEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartOrderDriver,] }] },
    { type: DaffCartStorageService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartOrderEffects.prototype, "placeOrder$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartOrderEffects.prototype, "resetCart$", void 0);
if (false) {
    /** @type {?} */
    DaffCartOrderEffects.prototype.placeOrder$;
    /** @type {?} */
    DaffCartOrderEffects.prototype.resetCart$;
    /**
     * @type {?}
     * @private
     */
    DaffCartOrderEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartOrderEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartOrderEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartOrderEffects.prototype.storage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, V
 */
class DaffCartCouponEffects {
    /**
     * @param {?} actions$
     * @param {?} errorMatcher
     * @param {?} driver
     * @param {?} storage
     */
    constructor(actions$, errorMatcher, driver, storage) {
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.apply$ = this.actions$.pipe(ofType(DaffCartCouponActionTypes.CartCouponApplyAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => of(null).pipe(map((/**
         * @return {?}
         */
        () => this.storage.getCartId())), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.driver.apply(cartId, action.payload))), map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffCartCouponApplySuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(this.errorMatcher(error))
            : new DaffCartCouponApplyFailure(this.errorMatcher(error)))))))));
        this.list$ = this.actions$.pipe(ofType(DaffCartCouponActionTypes.CartCouponListAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => of(null).pipe(map((/**
         * @return {?}
         */
        () => this.storage.getCartId())), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.driver.list(cartId))), map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffCartCouponListSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(this.errorMatcher(error))
            : new DaffCartCouponListFailure(this.errorMatcher(error)))))))));
        this.remove$ = this.actions$.pipe(ofType(DaffCartCouponActionTypes.CartCouponRemoveAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => of(null).pipe(map((/**
         * @return {?}
         */
        () => this.storage.getCartId())), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.driver.remove(cartId, action.payload))), map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffCartCouponRemoveSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(this.errorMatcher(error))
            : new DaffCartCouponRemoveFailure(this.errorMatcher(error)))))))));
        this.removeAll$ = this.actions$.pipe(ofType(DaffCartCouponActionTypes.CartCouponRemoveAllAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => of(null).pipe(map((/**
         * @return {?}
         */
        () => this.storage.getCartId())), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.driver.removeAll(cartId))), map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffCartCouponRemoveAllSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(this.errorMatcher(error))
            : new DaffCartCouponRemoveAllFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartCouponEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartCouponEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartCouponDriver,] }] },
    { type: DaffCartStorageService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartCouponEffects.prototype, "apply$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartCouponEffects.prototype, "list$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartCouponEffects.prototype, "remove$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartCouponEffects.prototype, "removeAll$", void 0);
if (false) {
    /** @type {?} */
    DaffCartCouponEffects.prototype.apply$;
    /** @type {?} */
    DaffCartCouponEffects.prototype.list$;
    /** @type {?} */
    DaffCartCouponEffects.prototype.remove$;
    /** @type {?} */
    DaffCartCouponEffects.prototype.removeAll$;
    /**
     * @type {?}
     * @private
     */
    DaffCartCouponEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartCouponEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartCouponEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartCouponEffects.prototype.storage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, V
 */
class DaffCartAddressEffects {
    /**
     * @param {?} actions$
     * @param {?} errorMatcher
     * @param {?} driver
     * @param {?} storage
     */
    constructor(actions$, errorMatcher, driver, storage) {
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.update$ = this.actions$.pipe(ofType(DaffCartAddressActionTypes.CartAddressUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => of(null).pipe(map((/**
         * @return {?}
         */
        () => this.storage.getCartId())), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => this.driver.update(cartId, action.payload))), map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => new DaffCartAddressUpdateSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(this.errorMatcher(error))
            : new DaffCartAddressUpdateFailure(this.errorMatcher(error)))))))));
    }
}
DaffCartAddressEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartAddressEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartAddressDriver,] }] },
    { type: DaffCartStorageService }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartAddressEffects.prototype, "update$", void 0);
if (false) {
    /** @type {?} */
    DaffCartAddressEffects.prototype.update$;
    /**
     * @type {?}
     * @private
     */
    DaffCartAddressEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartAddressEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartAddressEffects.prototype.driver;
    /**
     * @type {?}
     * @private
     */
    DaffCartAddressEffects.prototype.storage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An effect for resolving a guest cart for a customer.
 * It will:
 * 1. Check storage for an id, and retrieve the cart if it exists.
 * 2. If a cart doesn't exist, it will attempt to create a new cart exactly once.
 * 3. If the cart resolution fails, it will bailout.
 * @template T
 */
class DaffCartResolverEffects {
    /**
     * @param {?} actions$
     * @param {?} errorMatcher
     * @param {?} cartStorage
     * @param {?} driver
     */
    constructor(actions$, errorMatcher, cartStorage, driver) {
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.cartStorage = cartStorage;
        this.driver = driver;
        this.onResolveCart = (/**
         * @return {?}
         */
        () => this.actions$.pipe(ofType(DaffCartActionTypes.ResolveCartAction), switchMap((/**
         * @return {?}
         */
        () => of(null).pipe(map((/**
         * @return {?}
         */
        () => this.cartStorage.getCartId())), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        cartId => cartId ? of({ id: cartId }) : this.driver.create())), switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ({ id }) => this.driver.get(id))), map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffResolveCartSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            switch (true) {
                case error instanceof DaffServerSideStorageError:
                    return of(new DaffResolveCartServerSide());
                case error instanceof DaffStorageServiceError:
                    error.message =
                        'Cart resolution failed while attempting to retrieve the cart ID from storage.';
                    return of(new DaffResolveCartFailure(this.errorMatcher(error)));
                case error instanceof DaffCartNotFoundError:
                    return this.driver.create().pipe(switchMap((/**
                     * @param {?} __0
                     * @return {?}
                     */
                    ({ id }) => this.driver.get(id))), map((/**
                     * @param {?} resp
                     * @return {?}
                     */
                    resp => new DaffResolveCartSuccess(resp))), catchError((/**
                     * @param {?} innerError
                     * @return {?}
                     */
                    (innerError) => {
                        innerError.message =
                            'Cart resolution failed after attempting to generate and load a new cart.';
                        return of(new DaffResolveCartFailure(this.errorMatcher(innerError)));
                    })));
                default:
                    error.message = 'Cart resolution has failed.';
                    return of(new DaffResolveCartFailure(this.errorMatcher(error)));
            }
        })))))));
    }
    /**
     * @return {?}
     */
    ngrxOnInitEffects() {
        return new DaffResolveCart();
    }
}
DaffCartResolverEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCartResolverEffects.ctorParameters = () => [
    { type: Actions },
    { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
    { type: DaffCartStorageService },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCartDriver,] }] }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffCartResolverEffects.prototype, "onResolveCart", void 0);
if (false) {
    /** @type {?} */
    DaffCartResolverEffects.prototype.onResolveCart;
    /**
     * @type {?}
     * @private
     */
    DaffCartResolverEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCartResolverEffects.prototype.errorMatcher;
    /**
     * @type {?}
     * @private
     */
    DaffCartResolverEffects.prototype.cartStorage;
    /**
     * @type {?}
     * @private
     */
    DaffCartResolverEffects.prototype.driver;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffCartStateModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = (/** @type {?} */ ({}))) {
        return {
            ngModule: DaffCartStateModule,
            providers: [
                {
                    provide: DAFF_CART_STATE_CONFIG,
                    useValue: Object.assign({}, daffCartStateConfigurationDefault, config)
                }
            ]
        };
    }
}
DaffCartStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature('cart', daffCartReducers),
                    EffectsModule.forFeature([
                        DaffCartEffects,
                        DaffCartItemEffects,
                        DaffCartBillingAddressEffects,
                        DaffCartShippingAddressEffects,
                        DaffCartAddressEffects,
                        DaffCartShippingInformationEffects,
                        DaffCartShippingMethodsEffects,
                        DaffCartPaymentEffects,
                        DaffCartPaymentMethodsEffects,
                        DaffCartOrderEffects,
                        DaffCartCouponEffects,
                        DaffCartResolverEffects,
                    ]),
                ],
                providers: [
                    { provide: DaffCartBillingAddressGuardRedirectUrl, useValue: '/' },
                    { provide: DaffCartItemsGuardRedirectUrl, useValue: '/' },
                    { provide: DaffCartShippingAddressGuardRedirectUrl, useValue: '/' },
                    { provide: DaffCartShippingMethodGuardRedirectUrl, useValue: '/' },
                    { provide: DaffCartPaymentMethodGuardRedirectUrl, useValue: '/' },
                    { provide: DaffCartOrderResultGuardRedirectUrl, useValue: '/' },
                    { provide: DaffEmptyCartResolverRedirectUrl, useValue: '/' },
                    { provide: DaffCartResolverRedirectUrl, useValue: '/' },
                    { provide: DaffCartItemStateDebounceTime, useValue: 4000 }
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

export { DAFF_CART_STATE_CONFIG, DaffAddToCart, DaffAddToCartFailure, DaffAddToCartSuccess, DaffBillingAddressGuard, DaffCartActionTypes, DaffCartAddressActionTypes, DaffCartAddressUpdate, DaffCartAddressUpdateFailure, DaffCartAddressUpdateSuccess, DaffCartBillingAddressActionTypes, DaffCartBillingAddressGuardRedirectUrl, DaffCartBillingAddressLoad, DaffCartBillingAddressLoadFailure, DaffCartBillingAddressLoadSuccess, DaffCartBillingAddressUpdate, DaffCartBillingAddressUpdateFailure, DaffCartBillingAddressUpdateSuccess, DaffCartClear, DaffCartClearFailure, DaffCartClearSuccess, DaffCartCouponActionTypes, DaffCartCouponApply, DaffCartCouponApplyFailure, DaffCartCouponApplySuccess, DaffCartCouponList, DaffCartCouponListFailure, DaffCartCouponListSuccess, DaffCartCouponRemove, DaffCartCouponRemoveAll, DaffCartCouponRemoveAllFailure, DaffCartCouponRemoveAllSuccess, DaffCartCouponRemoveFailure, DaffCartCouponRemoveSuccess, DaffCartCreate, DaffCartCreateFailure, DaffCartCreateSuccess, DaffCartFacade, DaffCartItemActionTypes, DaffCartItemAdd, DaffCartItemAddFailure, DaffCartItemAddSuccess, DaffCartItemDelete, DaffCartItemDeleteFailure, DaffCartItemDeleteSuccess, DaffCartItemList, DaffCartItemListFailure, DaffCartItemListSuccess, DaffCartItemLoad, DaffCartItemLoadFailure, DaffCartItemLoadSuccess, DaffCartItemLoadingState, DaffCartItemStateDebounceTime, DaffCartItemStateEnum, DaffCartItemStateReset, DaffCartItemUpdate, DaffCartItemUpdateFailure, DaffCartItemUpdateSuccess, DaffCartItemsGuard, DaffCartItemsGuardRedirectUrl, DaffCartLoad, DaffCartLoadFailure, DaffCartLoadSuccess, DaffCartOperationType, DaffCartOrderActionTypes, DaffCartOrderResultGuardRedirectUrl, DaffCartPaymentActionTypes, DaffCartPaymentLoad, DaffCartPaymentLoadFailure, DaffCartPaymentLoadSuccess, DaffCartPaymentMethodAdd, DaffCartPaymentMethodGuardRedirectUrl, DaffCartPaymentMethodsActionTypes, DaffCartPaymentMethodsLoad, DaffCartPaymentMethodsLoadFailure, DaffCartPaymentMethodsLoadSuccess, DaffCartPaymentRemove, DaffCartPaymentRemoveFailure, DaffCartPaymentRemoveSuccess, DaffCartPaymentUpdate, DaffCartPaymentUpdateFailure, DaffCartPaymentUpdateSuccess, DaffCartPaymentUpdateWithBilling, DaffCartPaymentUpdateWithBillingFailure, DaffCartPaymentUpdateWithBillingSuccess, DaffCartPlaceOrder, DaffCartPlaceOrderFailure, DaffCartPlaceOrderSuccess, DaffCartResolveState, DaffCartResolver, DaffCartResolverRedirectUrl, DaffCartShippingAddressActionTypes, DaffCartShippingAddressGuardRedirectUrl, DaffCartShippingAddressLoad, DaffCartShippingAddressLoadFailure, DaffCartShippingAddressLoadSuccess, DaffCartShippingAddressUpdate, DaffCartShippingAddressUpdateFailure, DaffCartShippingAddressUpdateSuccess, DaffCartShippingInformationActionTypes, DaffCartShippingInformationDelete, DaffCartShippingInformationDeleteFailure, DaffCartShippingInformationDeleteSuccess, DaffCartShippingInformationLoad, DaffCartShippingInformationLoadFailure, DaffCartShippingInformationLoadSuccess, DaffCartShippingInformationUpdate, DaffCartShippingInformationUpdateFailure, DaffCartShippingInformationUpdateSuccess, DaffCartShippingMethodGuardRedirectUrl, DaffCartShippingMethodsActionTypes, DaffCartShippingMethodsLoad, DaffCartShippingMethodsLoadFailure, DaffCartShippingMethodsLoadSuccess, DaffCartStateModule, DaffCartStorageFailure, DaffEmptyCartResolver, DaffEmptyCartResolverRedirectUrl, DaffOrderResultGuard, DaffPaymentMethodGuard, DaffResolveCart, DaffResolveCartFailure, DaffResolveCartServerSide, DaffResolveCartSuccess, DaffResolvedCartGuard, DaffShippingAddressGuard, DaffShippingMethodGuard, daffCartOrderInitialState, daffCartOrderReducer, daffCartReducer, daffCartReducers, getDaffCartSelectors, initialState, initializeLoadingSetter, composeReducers as ɵa, cartReducer as ɵb, cartItemReducer as ɵc, cartBillingAddressReducer as ɵd, cartShippingAddressReducer as ɵe, cartShippingMethodsReducer as ɵf, cartShippingInformationReducer as ɵg, cartPaymentReducer as ɵh, cartPaymentMethodsReducer as ɵi, cartCouponReducer as ɵj, cartResolveReducer as ɵk, daffCartItemEntitiesReducer as ɵl, DaffCartEffects as ɵm, DaffCartItemEffects as ɵn, DaffCartBillingAddressEffects as ɵo, DaffCartShippingAddressEffects as ɵp, DaffCartAddressEffects as ɵq, DaffCartShippingInformationEffects as ɵr, DaffCartShippingMethodsEffects as ɵs, DaffCartPaymentEffects as ɵt, DaffCartPaymentMethodsEffects as ɵu, DaffCartOrderEffects as ɵv, DaffCartCouponEffects as ɵw, DaffCartResolverEffects as ɵx };
//# sourceMappingURL=daffodil-cart-state.js.map
