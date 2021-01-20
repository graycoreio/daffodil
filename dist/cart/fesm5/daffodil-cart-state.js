import { __assign, __spread, __decorate, __metadata } from 'tslib';
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
import { of, EMPTY } from 'rxjs';
import { DaffCartDriver, DaffCartItemDriver, DaffCartBillingAddressDriver, DaffCartShippingAddressDriver, DaffCartShippingInformationDriver, DaffCartShippingMethodsDriver, DaffCartPaymentDriver, DaffCartPaymentMethodsDriver, DaffCartOrderDriver, DaffCartCouponDriver, DaffCartAddressDriver, DaffCartNotFoundError } from '@daffodil/cart/driver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCartActionTypes = {
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
var DaffCartStorageFailure = /** @class */ (function () {
    function DaffCartStorageFailure(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartStorageFailureAction;
    }
    return DaffCartStorageFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartStorageFailure.prototype.type;
    /** @type {?} */
    DaffCartStorageFailure.prototype.payload;
}
var DaffCartLoad = /** @class */ (function () {
    function DaffCartLoad() {
        this.type = DaffCartActionTypes.CartLoadAction;
    }
    return DaffCartLoad;
}());
if (false) {
    /** @type {?} */
    DaffCartLoad.prototype.type;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartLoadSuccess = /** @class */ (function () {
    function DaffCartLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartLoadSuccessAction;
    }
    return DaffCartLoadSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartLoadSuccess.prototype.payload;
}
var DaffCartLoadFailure = /** @class */ (function () {
    function DaffCartLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartLoadFailureAction;
    }
    return DaffCartLoadFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartLoadFailure.prototype.payload;
}
var DaffCartCreate = /** @class */ (function () {
    function DaffCartCreate() {
        this.type = DaffCartActionTypes.CartCreateAction;
    }
    return DaffCartCreate;
}());
if (false) {
    /** @type {?} */
    DaffCartCreate.prototype.type;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartCreateSuccess = /** @class */ (function () {
    function DaffCartCreateSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartCreateSuccessAction;
    }
    return DaffCartCreateSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartCreateSuccess.prototype.type;
    /** @type {?} */
    DaffCartCreateSuccess.prototype.payload;
}
var DaffCartCreateFailure = /** @class */ (function () {
    function DaffCartCreateFailure(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartCreateFailureAction;
    }
    return DaffCartCreateFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartCreateFailure.prototype.type;
    /** @type {?} */
    DaffCartCreateFailure.prototype.payload;
}
var DaffAddToCart = /** @class */ (function () {
    function DaffAddToCart(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.AddToCartAction;
    }
    return DaffAddToCart;
}());
if (false) {
    /** @type {?} */
    DaffAddToCart.prototype.type;
    /** @type {?} */
    DaffAddToCart.prototype.payload;
}
var DaffAddToCartSuccess = /** @class */ (function () {
    function DaffAddToCartSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.AddToCartSuccessAction;
    }
    return DaffAddToCartSuccess;
}());
if (false) {
    /** @type {?} */
    DaffAddToCartSuccess.prototype.type;
    /** @type {?} */
    DaffAddToCartSuccess.prototype.payload;
}
var DaffAddToCartFailure = /** @class */ (function () {
    function DaffAddToCartFailure(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.AddToCartFailureAction;
    }
    return DaffAddToCartFailure;
}());
if (false) {
    /** @type {?} */
    DaffAddToCartFailure.prototype.type;
    /** @type {?} */
    DaffAddToCartFailure.prototype.payload;
}
var DaffCartClear = /** @class */ (function () {
    function DaffCartClear() {
        this.type = DaffCartActionTypes.CartClearAction;
    }
    return DaffCartClear;
}());
if (false) {
    /** @type {?} */
    DaffCartClear.prototype.type;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartClearSuccess = /** @class */ (function () {
    function DaffCartClearSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartClearSuccessAction;
    }
    return DaffCartClearSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartClearSuccess.prototype.type;
    /** @type {?} */
    DaffCartClearSuccess.prototype.payload;
}
var DaffCartClearFailure = /** @class */ (function () {
    function DaffCartClearFailure(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartClearFailureAction;
    }
    return DaffCartClearFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartClearFailure.prototype.type;
    /** @type {?} */
    DaffCartClearFailure.prototype.payload;
}
/**
 * An action indicating that cart resolution begins.
 */
var  /**
 * An action indicating that cart resolution begins.
 */
DaffResolveCart = /** @class */ (function () {
    function DaffResolveCart() {
        this.type = DaffCartActionTypes.ResolveCartAction;
    }
    return DaffResolveCart;
}());
if (false) {
    /** @type {?} */
    DaffResolveCart.prototype.type;
}
/**
 * An action that indicates a user's cart is resolved successfully.
 * @template T
 */
var  /**
 * An action that indicates a user's cart is resolved successfully.
 * @template T
 */
DaffResolveCartSuccess = /** @class */ (function () {
    function DaffResolveCartSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.ResolveCartSuccessAction;
    }
    return DaffResolveCartSuccess;
}());
if (false) {
    /** @type {?} */
    DaffResolveCartSuccess.prototype.type;
    /** @type {?} */
    DaffResolveCartSuccess.prototype.payload;
}
/**
 * An action that indicates that a cart failed to resolve.
 */
var  /**
 * An action that indicates that a cart failed to resolve.
 */
DaffResolveCartFailure = /** @class */ (function () {
    function DaffResolveCartFailure(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.ResolveCartFailureAction;
    }
    return DaffResolveCartFailure;
}());
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
var  /**
 * An action indicating that the cart resolution terminated as a result
 * of an attempted resolution on the server.
 */
DaffResolveCartServerSide = /** @class */ (function () {
    function DaffResolveCartServerSide() {
        this.type = DaffCartActionTypes.ResolveCartServerSideAction;
    }
    return DaffResolveCartServerSide;
}());
if (false) {
    /** @type {?} */
    DaffResolveCartServerSide.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCartItemActionTypes = {
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
var DaffCartItemList = /** @class */ (function () {
    function DaffCartItemList() {
        this.type = DaffCartItemActionTypes.CartItemListAction;
    }
    return DaffCartItemList;
}());
if (false) {
    /** @type {?} */
    DaffCartItemList.prototype.type;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartItemListSuccess = /** @class */ (function () {
    function DaffCartItemListSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemListSuccessAction;
    }
    return DaffCartItemListSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartItemListSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemListSuccess.prototype.payload;
}
var DaffCartItemListFailure = /** @class */ (function () {
    function DaffCartItemListFailure(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemListFailureAction;
    }
    return DaffCartItemListFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartItemListFailure.prototype.type;
    /** @type {?} */
    DaffCartItemListFailure.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartItemLoad = /** @class */ (function () {
    function DaffCartItemLoad(itemId) {
        this.itemId = itemId;
        this.type = DaffCartItemActionTypes.CartItemLoadAction;
    }
    return DaffCartItemLoad;
}());
if (false) {
    /** @type {?} */
    DaffCartItemLoad.prototype.type;
    /** @type {?} */
    DaffCartItemLoad.prototype.itemId;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartItemLoadSuccess = /** @class */ (function () {
    function DaffCartItemLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemLoadSuccessAction;
    }
    return DaffCartItemLoadSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartItemLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemLoadSuccess.prototype.payload;
}
var DaffCartItemLoadFailure = /** @class */ (function () {
    function DaffCartItemLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemLoadFailureAction;
    }
    return DaffCartItemLoadFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartItemLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartItemLoadFailure.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartItemUpdate = /** @class */ (function () {
    function DaffCartItemUpdate(itemId, changes) {
        this.itemId = itemId;
        this.changes = changes;
        this.type = DaffCartItemActionTypes.CartItemUpdateAction;
    }
    return DaffCartItemUpdate;
}());
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
var  /**
 * @template T, V
 */
DaffCartItemUpdateSuccess = /** @class */ (function () {
    function DaffCartItemUpdateSuccess(payload, itemId) {
        this.payload = payload;
        this.itemId = itemId;
        this.type = DaffCartItemActionTypes.CartItemUpdateSuccessAction;
    }
    return DaffCartItemUpdateSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartItemUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemUpdateSuccess.prototype.payload;
    /** @type {?} */
    DaffCartItemUpdateSuccess.prototype.itemId;
}
var DaffCartItemUpdateFailure = /** @class */ (function () {
    function DaffCartItemUpdateFailure(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemUpdateFailureAction;
    }
    return DaffCartItemUpdateFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartItemUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartItemUpdateFailure.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartItemAdd = /** @class */ (function () {
    function DaffCartItemAdd(input) {
        this.input = input;
        this.type = DaffCartItemActionTypes.CartItemAddAction;
    }
    return DaffCartItemAdd;
}());
if (false) {
    /** @type {?} */
    DaffCartItemAdd.prototype.type;
    /** @type {?} */
    DaffCartItemAdd.prototype.input;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartItemAddSuccess = /** @class */ (function () {
    function DaffCartItemAddSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemAddSuccessAction;
    }
    return DaffCartItemAddSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartItemAddSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemAddSuccess.prototype.payload;
}
var DaffCartItemAddFailure = /** @class */ (function () {
    function DaffCartItemAddFailure(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemAddFailureAction;
    }
    return DaffCartItemAddFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartItemAddFailure.prototype.type;
    /** @type {?} */
    DaffCartItemAddFailure.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartItemDelete = /** @class */ (function () {
    function DaffCartItemDelete(itemId) {
        this.itemId = itemId;
        this.type = DaffCartItemActionTypes.CartItemDeleteAction;
    }
    return DaffCartItemDelete;
}());
if (false) {
    /** @type {?} */
    DaffCartItemDelete.prototype.type;
    /** @type {?} */
    DaffCartItemDelete.prototype.itemId;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartItemDeleteSuccess = /** @class */ (function () {
    function DaffCartItemDeleteSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemDeleteSuccessAction;
    }
    return DaffCartItemDeleteSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartItemDeleteSuccess.prototype.type;
    /** @type {?} */
    DaffCartItemDeleteSuccess.prototype.payload;
}
var DaffCartItemDeleteFailure = /** @class */ (function () {
    function DaffCartItemDeleteFailure(payload) {
        this.payload = payload;
        this.type = DaffCartItemActionTypes.CartItemDeleteFailureAction;
    }
    return DaffCartItemDeleteFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartItemDeleteFailure.prototype.type;
    /** @type {?} */
    DaffCartItemDeleteFailure.prototype.payload;
}
var DaffCartItemStateReset = /** @class */ (function () {
    function DaffCartItemStateReset() {
        this.type = DaffCartItemActionTypes.CartItemStateResetAction;
    }
    return DaffCartItemStateReset;
}());
if (false) {
    /** @type {?} */
    DaffCartItemStateReset.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCartBillingAddressActionTypes = {
    CartBillingAddressLoadAction: '[DaffCart] Billing Address Load Action',
    CartBillingAddressLoadSuccessAction: '[DaffCart] Billing Address Load Success Action',
    CartBillingAddressLoadFailureAction: '[DaffCart] Billing Address Load Failure Action',
    CartBillingAddressUpdateAction: '[DaffCart] Billing Address Update Action',
    CartBillingAddressUpdateSuccessAction: '[DaffCart] Billing Address Update Success Action',
    CartBillingAddressUpdateFailureAction: '[DaffCart] Billing Address Update Failure Action',
};
var DaffCartBillingAddressLoad = /** @class */ (function () {
    function DaffCartBillingAddressLoad() {
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction;
    }
    return DaffCartBillingAddressLoad;
}());
if (false) {
    /** @type {?} */
    DaffCartBillingAddressLoad.prototype.type;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartBillingAddressLoadSuccess = /** @class */ (function () {
    function DaffCartBillingAddressLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadSuccessAction;
    }
    return DaffCartBillingAddressLoadSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartBillingAddressLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressLoadSuccess.prototype.payload;
}
var DaffCartBillingAddressLoadFailure = /** @class */ (function () {
    function DaffCartBillingAddressLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressLoadFailureAction;
    }
    return DaffCartBillingAddressLoadFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartBillingAddressLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressLoadFailure.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartBillingAddressUpdate = /** @class */ (function () {
    function DaffCartBillingAddressUpdate(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction;
    }
    return DaffCartBillingAddressUpdate;
}());
if (false) {
    /** @type {?} */
    DaffCartBillingAddressUpdate.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressUpdate.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartBillingAddressUpdateSuccess = /** @class */ (function () {
    function DaffCartBillingAddressUpdateSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction;
    }
    return DaffCartBillingAddressUpdateSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartBillingAddressUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartBillingAddressUpdateSuccess.prototype.payload;
}
var DaffCartBillingAddressUpdateFailure = /** @class */ (function () {
    function DaffCartBillingAddressUpdateFailure(payload) {
        this.payload = payload;
        this.type = DaffCartBillingAddressActionTypes.CartBillingAddressUpdateFailureAction;
    }
    return DaffCartBillingAddressUpdateFailure;
}());
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
var DaffCartShippingAddressActionTypes = {
    CartShippingAddressLoadAction: '[DaffCart] Shipping Address Load Action',
    CartShippingAddressLoadSuccessAction: '[DaffCart] Shipping Address Load Success Action',
    CartShippingAddressLoadFailureAction: '[DaffCart] Shipping Address Load Failure Action',
    CartShippingAddressUpdateAction: '[DaffCart] Shipping Address Update Action',
    CartShippingAddressUpdateSuccessAction: '[DaffCart] Shipping Address Update Success Action',
    CartShippingAddressUpdateFailureAction: '[DaffCart] Shipping Address Update Failure Action',
};
var DaffCartShippingAddressLoad = /** @class */ (function () {
    function DaffCartShippingAddressLoad() {
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction;
    }
    return DaffCartShippingAddressLoad;
}());
if (false) {
    /** @type {?} */
    DaffCartShippingAddressLoad.prototype.type;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartShippingAddressLoadSuccess = /** @class */ (function () {
    function DaffCartShippingAddressLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadSuccessAction;
    }
    return DaffCartShippingAddressLoadSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartShippingAddressLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressLoadSuccess.prototype.payload;
}
var DaffCartShippingAddressLoadFailure = /** @class */ (function () {
    function DaffCartShippingAddressLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressLoadFailureAction;
    }
    return DaffCartShippingAddressLoadFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartShippingAddressLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressLoadFailure.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartShippingAddressUpdate = /** @class */ (function () {
    function DaffCartShippingAddressUpdate(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction;
    }
    return DaffCartShippingAddressUpdate;
}());
if (false) {
    /** @type {?} */
    DaffCartShippingAddressUpdate.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressUpdate.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartShippingAddressUpdateSuccess = /** @class */ (function () {
    function DaffCartShippingAddressUpdateSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction;
    }
    return DaffCartShippingAddressUpdateSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartShippingAddressUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingAddressUpdateSuccess.prototype.payload;
}
var DaffCartShippingAddressUpdateFailure = /** @class */ (function () {
    function DaffCartShippingAddressUpdateFailure(payload) {
        this.payload = payload;
        this.type = DaffCartShippingAddressActionTypes.CartShippingAddressUpdateFailureAction;
    }
    return DaffCartShippingAddressUpdateFailure;
}());
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
var DaffCartAddressActionTypes = {
    CartAddressUpdateAction: '[DaffCart] Cart Address Update Action',
    CartAddressUpdateSuccessAction: '[DaffCart] Cart Address Update Success Action',
    CartAddressUpdateFailureAction: '[DaffCart] Cart Address Update Failure Action',
};
/**
 * Triggers the update of both the shipping and billing address of the cart.
 * @template T
 */
var  /**
 * Triggers the update of both the shipping and billing address of the cart.
 * @template T
 */
DaffCartAddressUpdate = /** @class */ (function () {
    function DaffCartAddressUpdate(payload) {
        this.payload = payload;
        this.type = DaffCartAddressActionTypes.CartAddressUpdateAction;
    }
    return DaffCartAddressUpdate;
}());
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
var  /**
 * Indicates the successful update of both the shipping and billing address of the cart.
 * @template T
 */
DaffCartAddressUpdateSuccess = /** @class */ (function () {
    function DaffCartAddressUpdateSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartAddressActionTypes.CartAddressUpdateSuccessAction;
    }
    return DaffCartAddressUpdateSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartAddressUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartAddressUpdateSuccess.prototype.payload;
}
/**
 * Indicates the failed update of either the shipping or billing address of the cart.
 */
var  /**
 * Indicates the failed update of either the shipping or billing address of the cart.
 */
DaffCartAddressUpdateFailure = /** @class */ (function () {
    function DaffCartAddressUpdateFailure(payload) {
        this.payload = payload;
        this.type = DaffCartAddressActionTypes.CartAddressUpdateFailureAction;
    }
    return DaffCartAddressUpdateFailure;
}());
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
var DaffCartShippingInformationActionTypes = {
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
var DaffCartShippingInformationLoad = /** @class */ (function () {
    function DaffCartShippingInformationLoad() {
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction;
    }
    return DaffCartShippingInformationLoad;
}());
if (false) {
    /** @type {?} */
    DaffCartShippingInformationLoad.prototype.type;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartShippingInformationLoadSuccess = /** @class */ (function () {
    function DaffCartShippingInformationLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadSuccessAction;
    }
    return DaffCartShippingInformationLoadSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartShippingInformationLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationLoadSuccess.prototype.payload;
}
var DaffCartShippingInformationLoadFailure = /** @class */ (function () {
    function DaffCartShippingInformationLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadFailureAction;
    }
    return DaffCartShippingInformationLoadFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartShippingInformationLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationLoadFailure.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartShippingInformationUpdate = /** @class */ (function () {
    function DaffCartShippingInformationUpdate(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction;
    }
    return DaffCartShippingInformationUpdate;
}());
if (false) {
    /** @type {?} */
    DaffCartShippingInformationUpdate.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationUpdate.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartShippingInformationUpdateSuccess = /** @class */ (function () {
    function DaffCartShippingInformationUpdateSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction;
    }
    return DaffCartShippingInformationUpdateSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartShippingInformationUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationUpdateSuccess.prototype.payload;
}
var DaffCartShippingInformationUpdateFailure = /** @class */ (function () {
    function DaffCartShippingInformationUpdateFailure(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateFailureAction;
    }
    return DaffCartShippingInformationUpdateFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartShippingInformationUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationUpdateFailure.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartShippingInformationDelete = /** @class */ (function () {
    function DaffCartShippingInformationDelete(id) {
        this.id = id;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction;
    }
    return DaffCartShippingInformationDelete;
}());
if (false) {
    /** @type {?} */
    DaffCartShippingInformationDelete.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationDelete.prototype.id;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartShippingInformationDeleteSuccess = /** @class */ (function () {
    function DaffCartShippingInformationDeleteSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction;
    }
    return DaffCartShippingInformationDeleteSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartShippingInformationDeleteSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationDeleteSuccess.prototype.payload;
}
var DaffCartShippingInformationDeleteFailure = /** @class */ (function () {
    function DaffCartShippingInformationDeleteFailure(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteFailureAction;
    }
    return DaffCartShippingInformationDeleteFailure;
}());
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
var DaffCartShippingMethodsActionTypes = {
    CartShippingMethodsLoadAction: '[DaffCart] Shipping Methods Load Action',
    CartShippingMethodsLoadSuccessAction: '[DaffCart] Shipping Methods Load Success Action',
    CartShippingMethodsLoadFailureAction: '[DaffCart] Shipping Methods Load Failure Action',
};
var DaffCartShippingMethodsLoad = /** @class */ (function () {
    function DaffCartShippingMethodsLoad() {
        this.type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction;
    }
    return DaffCartShippingMethodsLoad;
}());
if (false) {
    /** @type {?} */
    DaffCartShippingMethodsLoad.prototype.type;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartShippingMethodsLoadSuccess = /** @class */ (function () {
    function DaffCartShippingMethodsLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadSuccessAction;
    }
    return DaffCartShippingMethodsLoadSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartShippingMethodsLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingMethodsLoadSuccess.prototype.payload;
}
var DaffCartShippingMethodsLoadFailure = /** @class */ (function () {
    function DaffCartShippingMethodsLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadFailureAction;
    }
    return DaffCartShippingMethodsLoadFailure;
}());
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
var DaffCartPaymentActionTypes = {
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
var DaffCartPaymentLoad = /** @class */ (function () {
    function DaffCartPaymentLoad() {
        this.type = DaffCartPaymentActionTypes.CartPaymentLoadAction;
    }
    return DaffCartPaymentLoad;
}());
if (false) {
    /** @type {?} */
    DaffCartPaymentLoad.prototype.type;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartPaymentLoadSuccess = /** @class */ (function () {
    function DaffCartPaymentLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentLoadSuccessAction;
    }
    return DaffCartPaymentLoadSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartPaymentLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartPaymentLoadSuccess.prototype.payload;
}
var DaffCartPaymentLoadFailure = /** @class */ (function () {
    function DaffCartPaymentLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentLoadFailureAction;
    }
    return DaffCartPaymentLoadFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartPaymentLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartPaymentLoadFailure.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartPaymentUpdate = /** @class */ (function () {
    function DaffCartPaymentUpdate(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateAction;
    }
    return DaffCartPaymentUpdate;
}());
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdate.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdate.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartPaymentUpdateSuccess = /** @class */ (function () {
    function DaffCartPaymentUpdateSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction;
    }
    return DaffCartPaymentUpdateSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdateSuccess.prototype.payload;
}
var DaffCartPaymentUpdateFailure = /** @class */ (function () {
    function DaffCartPaymentUpdateFailure(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction;
    }
    return DaffCartPaymentUpdateFailure;
}());
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
var  /**
 * Triggers an update of the cart's selected payment method and billing address.
 *
 * @param payment The payment method.
 * @param address The billing address.
 * @template T, R
 */
DaffCartPaymentUpdateWithBilling = /** @class */ (function () {
    function DaffCartPaymentUpdateWithBilling(payment, address) {
        this.payment = payment;
        this.address = address;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingAction;
    }
    return DaffCartPaymentUpdateWithBilling;
}());
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
var  /**
 * Indicates the success of an update of the cart's selected payment method and billing address.
 *
 * @param payload The updated cart.
 * @template T
 */
DaffCartPaymentUpdateWithBillingSuccess = /** @class */ (function () {
    function DaffCartPaymentUpdateWithBillingSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction;
    }
    return DaffCartPaymentUpdateWithBillingSuccess;
}());
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
var  /**
 * Indicates the failure of an update of the cart's selected payment method and billing address.
 *
 * @param payload The error message.
 */
DaffCartPaymentUpdateWithBillingFailure = /** @class */ (function () {
    function DaffCartPaymentUpdateWithBillingFailure(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction;
    }
    return DaffCartPaymentUpdateWithBillingFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartPaymentUpdateWithBillingFailure.prototype.type;
    /** @type {?} */
    DaffCartPaymentUpdateWithBillingFailure.prototype.payload;
}
var DaffCartPaymentRemove = /** @class */ (function () {
    function DaffCartPaymentRemove() {
        this.type = DaffCartPaymentActionTypes.CartPaymentRemoveAction;
    }
    return DaffCartPaymentRemove;
}());
if (false) {
    /** @type {?} */
    DaffCartPaymentRemove.prototype.type;
}
var DaffCartPaymentRemoveSuccess = /** @class */ (function () {
    function DaffCartPaymentRemoveSuccess() {
        this.type = DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction;
    }
    return DaffCartPaymentRemoveSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartPaymentRemoveSuccess.prototype.type;
}
var DaffCartPaymentRemoveFailure = /** @class */ (function () {
    function DaffCartPaymentRemoveFailure(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentRemoveFailureAction;
    }
    return DaffCartPaymentRemoveFailure;
}());
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
var  /**
 * This action is temporary until custom reducers can be injected by the \@daffodil/paymentSource modules. Right now,
 * the payment modules need a way to update cart state with a payment token.
 *
 * todo: remove when possible.
 * @template T
 */
DaffCartPaymentMethodAdd = /** @class */ (function () {
    function DaffCartPaymentMethodAdd(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentActionTypes.CartPaymentMethodAddAction;
    }
    return DaffCartPaymentMethodAdd;
}());
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
var DaffCartPaymentMethodsActionTypes = {
    CartPaymentMethodsLoadAction: '[DaffCart] Payment Methods Load Action',
    CartPaymentMethodsLoadSuccessAction: '[DaffCart] Payment Methods Load Success Action',
    CartPaymentMethodsLoadFailureAction: '[DaffCart] Payment Methods Load Failure Action',
};
var DaffCartPaymentMethodsLoad = /** @class */ (function () {
    function DaffCartPaymentMethodsLoad() {
        this.type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction;
    }
    return DaffCartPaymentMethodsLoad;
}());
if (false) {
    /** @type {?} */
    DaffCartPaymentMethodsLoad.prototype.type;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartPaymentMethodsLoadSuccess = /** @class */ (function () {
    function DaffCartPaymentMethodsLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadSuccessAction;
    }
    return DaffCartPaymentMethodsLoadSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartPaymentMethodsLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartPaymentMethodsLoadSuccess.prototype.payload;
}
var DaffCartPaymentMethodsLoadFailure = /** @class */ (function () {
    function DaffCartPaymentMethodsLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadFailureAction;
    }
    return DaffCartPaymentMethodsLoadFailure;
}());
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
var DaffCartOrderActionTypes = {
    CartPlaceOrderAction: '[DaffCart] Cart Place Order Action',
    CartPlaceOrderSuccessAction: '[DaffCart] Cart Place Order Success Action',
    CartPlaceOrderFailureAction: '[DaffCart] Cart Place Order Failure Action',
};
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartPlaceOrder = /** @class */ (function () {
    function DaffCartPlaceOrder(payload) {
        this.payload = payload;
        this.type = DaffCartOrderActionTypes.CartPlaceOrderAction;
    }
    return DaffCartPlaceOrder;
}());
if (false) {
    /** @type {?} */
    DaffCartPlaceOrder.prototype.type;
    /** @type {?} */
    DaffCartPlaceOrder.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartPlaceOrderSuccess = /** @class */ (function () {
    function DaffCartPlaceOrderSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartOrderActionTypes.CartPlaceOrderSuccessAction;
    }
    return DaffCartPlaceOrderSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartPlaceOrderSuccess.prototype.type;
    /** @type {?} */
    DaffCartPlaceOrderSuccess.prototype.payload;
}
var DaffCartPlaceOrderFailure = /** @class */ (function () {
    function DaffCartPlaceOrderFailure(payload) {
        this.payload = payload;
        this.type = DaffCartOrderActionTypes.CartPlaceOrderFailureAction;
    }
    return DaffCartPlaceOrderFailure;
}());
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
var DaffCartCouponActionTypes = {
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
var  /**
 * @template T
 */
DaffCartCouponApply = /** @class */ (function () {
    function DaffCartCouponApply(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponApplyAction;
    }
    return DaffCartCouponApply;
}());
if (false) {
    /** @type {?} */
    DaffCartCouponApply.prototype.type;
    /** @type {?} */
    DaffCartCouponApply.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartCouponApplySuccess = /** @class */ (function () {
    function DaffCartCouponApplySuccess(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponApplySuccessAction;
    }
    return DaffCartCouponApplySuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartCouponApplySuccess.prototype.type;
    /** @type {?} */
    DaffCartCouponApplySuccess.prototype.payload;
}
var DaffCartCouponApplyFailure = /** @class */ (function () {
    function DaffCartCouponApplyFailure(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponApplyFailureAction;
    }
    return DaffCartCouponApplyFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartCouponApplyFailure.prototype.type;
    /** @type {?} */
    DaffCartCouponApplyFailure.prototype.payload;
}
var DaffCartCouponList = /** @class */ (function () {
    function DaffCartCouponList() {
        this.type = DaffCartCouponActionTypes.CartCouponListAction;
    }
    return DaffCartCouponList;
}());
if (false) {
    /** @type {?} */
    DaffCartCouponList.prototype.type;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartCouponListSuccess = /** @class */ (function () {
    function DaffCartCouponListSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponListSuccessAction;
    }
    return DaffCartCouponListSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartCouponListSuccess.prototype.type;
    /** @type {?} */
    DaffCartCouponListSuccess.prototype.payload;
}
var DaffCartCouponListFailure = /** @class */ (function () {
    function DaffCartCouponListFailure(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponListFailureAction;
    }
    return DaffCartCouponListFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartCouponListFailure.prototype.type;
    /** @type {?} */
    DaffCartCouponListFailure.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartCouponRemove = /** @class */ (function () {
    function DaffCartCouponRemove(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponRemoveAction;
    }
    return DaffCartCouponRemove;
}());
if (false) {
    /** @type {?} */
    DaffCartCouponRemove.prototype.type;
    /** @type {?} */
    DaffCartCouponRemove.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartCouponRemoveSuccess = /** @class */ (function () {
    function DaffCartCouponRemoveSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponRemoveSuccessAction;
    }
    return DaffCartCouponRemoveSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartCouponRemoveSuccess.prototype.type;
    /** @type {?} */
    DaffCartCouponRemoveSuccess.prototype.payload;
}
var DaffCartCouponRemoveFailure = /** @class */ (function () {
    function DaffCartCouponRemoveFailure(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponRemoveFailureAction;
    }
    return DaffCartCouponRemoveFailure;
}());
if (false) {
    /** @type {?} */
    DaffCartCouponRemoveFailure.prototype.type;
    /** @type {?} */
    DaffCartCouponRemoveFailure.prototype.payload;
}
var DaffCartCouponRemoveAll = /** @class */ (function () {
    function DaffCartCouponRemoveAll() {
        this.type = DaffCartCouponActionTypes.CartCouponRemoveAllAction;
    }
    return DaffCartCouponRemoveAll;
}());
if (false) {
    /** @type {?} */
    DaffCartCouponRemoveAll.prototype.type;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffCartCouponRemoveAllSuccess = /** @class */ (function () {
    function DaffCartCouponRemoveAllSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponRemoveAllSuccessAction;
    }
    return DaffCartCouponRemoveAllSuccess;
}());
if (false) {
    /** @type {?} */
    DaffCartCouponRemoveAllSuccess.prototype.type;
    /** @type {?} */
    DaffCartCouponRemoveAllSuccess.prototype.payload;
}
var DaffCartCouponRemoveAllFailure = /** @class */ (function () {
    function DaffCartCouponRemoveAllFailure(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponRemoveAllFailureAction;
    }
    return DaffCartCouponRemoveAllFailure;
}());
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
var ɵ0 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : { selectCartFeatureState: createFeatureSelector('cart') }; });
};
/** @type {?} */
var getDaffCartFeatureSelector = ((ɵ0))();

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
var createCartOrderSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
function () {
    /** @type {?} */
    var selectCartFeatureState = getDaffCartFeatureSelector().selectCartFeatureState;
    /** @type {?} */
    var selectCartOrderState = createSelector(selectCartFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.order; }));
    /** @type {?} */
    var selectCartOrderValue = createSelector(selectCartOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.cartOrderResult; }));
    /** @type {?} */
    var selectCartOrderId = createSelector(selectCartOrderValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.orderId; }));
    /** @type {?} */
    var selectCartOrderCartId = createSelector(selectCartOrderValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.cartId; }));
    /** @type {?} */
    var selectCartOrderLoading = createSelector(selectCartOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectCartOrderMutating = createSelector(selectCartOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading === DaffLoadingState.Mutating; }));
    /** @type {?} */
    var selectCartOrderErrors = createSelector(selectCartOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; }));
    /** @type {?} */
    var selectHasOrderResult = createSelector(selectCartOrderValue, (/**
     * @param {?} orderResult
     * @return {?}
     */
    function (orderResult) { return !!(orderResult && orderResult.orderId && orderResult.cartId); }));
    return {
        selectCartOrderState: selectCartOrderState,
        selectCartOrderLoading: selectCartOrderLoading,
        selectCartOrderMutating: selectCartOrderMutating,
        selectCartOrderErrors: selectCartOrderErrors,
        selectCartOrderValue: selectCartOrderValue,
        selectCartOrderId: selectCartOrderId,
        selectCartOrderCartId: selectCartOrderCartId,
        selectHasOrderResult: selectHasOrderResult
    };
});
var ɵ0$1 = createCartOrderSelectors;
var ɵ1 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : createCartOrderSelectors(); });
};
/** @type {?} */
var getCartOrderSelectors = ((ɵ1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCartOperationType = {
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
var DaffCartItemLoadingState = {
    Resolving: 'Resolving',
    Adding: 'Adding',
    Complete: 'Complete',
};
/** @type {?} */
var initializeLoadingSetter = (/**
 * @param {?} loadingSpace
 * @return {?}
 */
function (loadingSpace) { return (/**
 * @param {?} loadingObj
 * @param {?} loading
 * @return {?}
 */
function (loadingObj, loading) {
    var _a;
    return ({
        loading: __assign({}, loadingObj, (_a = {}, _a[loadingSpace] = loading, _a))
    });
}); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCartResolveState = {
    Default: 'default',
    Resolving: 'resolving',
    Succeeded: 'succeeded',
    Failed: 'failed',
    ServerSide: 'server',
};

var _a, _b;
/** @type {?} */
var initialState = Object.freeze({
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
    loading: (_a = {},
        _a[DaffCartOperationType.Cart] = DaffLoadingState.Complete,
        _a[DaffCartOperationType.Item] = DaffCartItemLoadingState.Complete,
        _a[DaffCartOperationType.ShippingAddress] = DaffLoadingState.Complete,
        _a[DaffCartOperationType.BillingAddress] = DaffLoadingState.Complete,
        _a[DaffCartOperationType.ShippingInformation] = DaffLoadingState.Complete,
        _a[DaffCartOperationType.ShippingMethods] = DaffLoadingState.Complete,
        _a[DaffCartOperationType.Payment] = DaffLoadingState.Complete,
        _a[DaffCartOperationType.PaymentMethods] = DaffLoadingState.Complete,
        _a[DaffCartOperationType.Coupon] = DaffLoadingState.Complete,
        _a),
    errors: (_b = {},
        _b[DaffCartOperationType.Cart] = [],
        _b[DaffCartOperationType.Item] = [],
        _b[DaffCartOperationType.ShippingAddress] = [],
        _b[DaffCartOperationType.BillingAddress] = [],
        _b[DaffCartOperationType.ShippingInformation] = [],
        _b[DaffCartOperationType.ShippingMethods] = [],
        _b[DaffCartOperationType.Payment] = [],
        _b[DaffCartOperationType.PaymentMethods] = [],
        _b[DaffCartOperationType.Coupon] = [],
        _b),
    resolved: DaffCartResolveState.Default
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initializeErrorAdder = (/**
 * @param {?} errorSpace
 * @return {?}
 */
function (errorSpace) { return (/**
 * @param {?} errors
 * @param {?} error
 * @return {?}
 */
function (errors, error) {
    var _a;
    return ({
        errors: __assign({}, errors, (_a = {}, _a[errorSpace] = errors[errorSpace].concat(new Array(error)), _a))
    });
}); });
/** @type {?} */
var initializeErrorResetter = (/**
 * @param {?} errorSpace
 * @return {?}
 */
function (errorSpace) { return (/**
 * @param {?} errors
 * @return {?}
 */
function (errors) {
    var _a;
    return ({
        errors: __assign({}, errors, (_a = {}, _a[errorSpace] = [], _a))
    });
}); });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var addError = initializeErrorAdder(DaffCartOperationType.Cart);
/** @type {?} */
var resetErrors = initializeErrorResetter(DaffCartOperationType.Cart);
/** @type {?} */
var setLoading = initializeLoadingSetter(DaffCartOperationType.Cart);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffCartActionTypes.ResolveCartAction:
        case DaffCartActionTypes.CartLoadAction:
            return __assign({}, state, setLoading(state.loading, DaffLoadingState.Resolving));
        case DaffCartActionTypes.CartClearAction:
        case DaffCartActionTypes.AddToCartAction:
        case DaffCartActionTypes.CartCreateAction:
            return __assign({}, state, setLoading(state.loading, DaffLoadingState.Mutating));
        case DaffCartActionTypes.CartLoadSuccessAction:
        case DaffCartActionTypes.CartClearSuccessAction:
        case DaffCartActionTypes.AddToCartSuccessAction:
        case DaffCartActionTypes.CartCreateSuccessAction:
        case DaffCartActionTypes.ResolveCartSuccessAction:
            return __assign({}, state, resetErrors(state.errors), { cart: __assign({}, state.cart, action.payload) }, setLoading(state.loading, DaffLoadingState.Complete));
        case DaffCartActionTypes.CartCreateSuccessAction:
            return __assign({}, state, resetErrors(state.errors), { cart: __assign({}, initialState.cart, action.payload) }, setLoading(state.loading, DaffLoadingState.Complete));
        case DaffCartActionTypes.CartLoadFailureAction:
        case DaffCartActionTypes.CartClearFailureAction:
        case DaffCartActionTypes.AddToCartFailureAction:
        case DaffCartActionTypes.CartCreateFailureAction:
        case DaffCartActionTypes.CartStorageFailureAction:
        case DaffCartActionTypes.ResolveCartFailureAction:
            return __assign({}, state, addError(state.errors, action.payload), setLoading(state.loading, DaffLoadingState.Complete));
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var addError$1 = initializeErrorAdder(DaffCartOperationType.Item);
/** @type {?} */
var resetErrors$1 = initializeErrorResetter(DaffCartOperationType.Item);
/** @type {?} */
var setLoading$1 = initializeLoadingSetter(DaffCartOperationType.Item);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartItemReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffCartItemActionTypes.CartItemListAction:
        case DaffCartItemActionTypes.CartItemLoadAction:
            return __assign({}, state, setLoading$1(state.loading, DaffCartItemLoadingState.Resolving));
        case DaffCartItemActionTypes.CartItemAddAction:
            return __assign({}, state, setLoading$1(state.loading, DaffCartItemLoadingState.Adding));
        case DaffCartItemActionTypes.CartItemListSuccessAction:
            return __assign({}, state, resetErrors$1(state.errors), { cart: __assign({}, state.cart, { items: action.payload }) }, setLoading$1(state.loading, DaffCartItemLoadingState.Complete));
        case DaffCartItemActionTypes.CartItemLoadSuccessAction:
            return __assign({}, state, resetErrors$1(state.errors), { cart: __assign({}, state.cart, { items: state.cart.items.map((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) {
                        return item.item_id === action.payload.item_id
                            ? action.payload
                            : item;
                    })) }) }, setLoading$1(state.loading, DaffCartItemLoadingState.Complete));
        case DaffCartItemActionTypes.CartItemUpdateSuccessAction:
        case DaffCartItemActionTypes.CartItemAddSuccessAction:
        case DaffCartItemActionTypes.CartItemDeleteSuccessAction:
            return __assign({}, state, resetErrors$1(state.errors), { cart: __assign({}, state.cart, action.payload) }, setLoading$1(state.loading, DaffCartItemLoadingState.Complete));
        case DaffCartItemActionTypes.CartItemListFailureAction:
        case DaffCartItemActionTypes.CartItemLoadFailureAction:
        case DaffCartItemActionTypes.CartItemUpdateFailureAction:
        case DaffCartItemActionTypes.CartItemAddFailureAction:
        case DaffCartItemActionTypes.CartItemDeleteFailureAction:
            return __assign({}, state, addError$1(state.errors, action.payload), setLoading$1(state.loading, DaffCartItemLoadingState.Complete));
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var addError$2 = initializeErrorAdder(DaffCartOperationType.BillingAddress);
/** @type {?} */
var resetErrors$2 = initializeErrorResetter(DaffCartOperationType.BillingAddress);
/** @type {?} */
var setLoading$2 = initializeLoadingSetter(DaffCartOperationType.BillingAddress);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartBillingAddressReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction:
            return __assign({}, state, setLoading$2(state.loading, DaffLoadingState.Resolving));
        case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction:
        case DaffCartAddressActionTypes.CartAddressUpdateAction:
            return __assign({}, state, setLoading$2(state.loading, DaffLoadingState.Mutating));
        case DaffCartBillingAddressActionTypes.CartBillingAddressLoadSuccessAction:
            return __assign({}, state, resetErrors$2(state.errors), { cart: __assign({}, state.cart, { billing_address: action.payload }) }, setLoading$2(state.loading, DaffLoadingState.Complete));
        case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateSuccessAction:
        case DaffCartAddressActionTypes.CartAddressUpdateSuccessAction:
            return __assign({}, state, resetErrors$2(state.errors), { cart: __assign({}, state.cart, action.payload) }, setLoading$2(state.loading, DaffLoadingState.Complete));
        case DaffCartBillingAddressActionTypes.CartBillingAddressLoadFailureAction:
        case DaffCartBillingAddressActionTypes.CartBillingAddressUpdateFailureAction:
        case DaffCartAddressActionTypes.CartAddressUpdateFailureAction:
            return __assign({}, state, addError$2(state.errors, action.payload), setLoading$2(state.loading, DaffLoadingState.Complete));
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var addError$3 = initializeErrorAdder(DaffCartOperationType.ShippingAddress);
/** @type {?} */
var resetErrors$3 = initializeErrorResetter(DaffCartOperationType.ShippingAddress);
/** @type {?} */
var setLoading$3 = initializeLoadingSetter(DaffCartOperationType.ShippingAddress);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartShippingAddressReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction:
            return __assign({}, state, setLoading$3(state.loading, DaffLoadingState.Resolving));
        case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction:
        case DaffCartAddressActionTypes.CartAddressUpdateAction:
            return __assign({}, state, setLoading$3(state.loading, DaffLoadingState.Mutating));
        case DaffCartShippingAddressActionTypes.CartShippingAddressLoadSuccessAction:
            return __assign({}, state, resetErrors$3(state.errors), { cart: __assign({}, state.cart, { shipping_address: action.payload }) }, setLoading$3(state.loading, DaffLoadingState.Complete));
        case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateSuccessAction:
        case DaffCartAddressActionTypes.CartAddressUpdateSuccessAction:
            return __assign({}, state, resetErrors$3(state.errors), { cart: __assign({}, state.cart, action.payload) }, setLoading$3(state.loading, DaffLoadingState.Complete));
        case DaffCartShippingAddressActionTypes.CartShippingAddressLoadFailureAction:
        case DaffCartShippingAddressActionTypes.CartShippingAddressUpdateFailureAction:
        case DaffCartAddressActionTypes.CartAddressUpdateFailureAction:
            return __assign({}, state, addError$3(state.errors, action.payload), setLoading$3(state.loading, DaffLoadingState.Complete));
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var addError$4 = initializeErrorAdder(DaffCartOperationType.ShippingMethods);
/** @type {?} */
var resetErrors$4 = initializeErrorResetter(DaffCartOperationType.ShippingMethods);
/** @type {?} */
var setLoading$4 = initializeLoadingSetter(DaffCartOperationType.ShippingMethods);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartShippingMethodsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction:
            return __assign({}, state, setLoading$4(state.loading, DaffLoadingState.Resolving));
        case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadSuccessAction:
            return __assign({}, state, resetErrors$4(state.errors), { cart: __assign({}, state.cart, { available_shipping_methods: action.payload }) }, setLoading$4(state.loading, DaffLoadingState.Complete));
        case DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadFailureAction:
            return __assign({}, state, addError$4(state.errors, action.payload), setLoading$4(state.loading, DaffLoadingState.Complete));
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var addError$5 = initializeErrorAdder(DaffCartOperationType.ShippingInformation);
/** @type {?} */
var resetErrors$5 = initializeErrorResetter(DaffCartOperationType.ShippingInformation);
/** @type {?} */
var setLoading$5 = initializeLoadingSetter(DaffCartOperationType.ShippingInformation);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartShippingInformationReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction:
            return __assign({}, state, setLoading$5(state.loading, DaffLoadingState.Resolving));
        case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction:
        case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction:
            return __assign({}, state, setLoading$5(state.loading, DaffLoadingState.Mutating));
        case DaffCartShippingInformationActionTypes.CartShippingInformationLoadSuccessAction:
            return __assign({}, state, resetErrors$5(state.errors), { cart: __assign({}, state.cart, { shipping_information: __assign({}, action.payload, { address_id: null }) }) }, setLoading$5(state.loading, DaffLoadingState.Complete));
        case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction:
        case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction:
            return __assign({}, state, resetErrors$5(state.errors), { cart: __assign({}, state.cart, { shipping_information: null }, action.payload) }, setLoading$5(state.loading, DaffLoadingState.Complete));
        case DaffCartShippingInformationActionTypes.CartShippingInformationLoadFailureAction:
        case DaffCartShippingInformationActionTypes.CartShippingInformationUpdateFailureAction:
        case DaffCartShippingInformationActionTypes.CartShippingInformationDeleteFailureAction:
            return __assign({}, state, addError$5(state.errors, action.payload), setLoading$5(state.loading, DaffLoadingState.Complete));
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var addError$6 = initializeErrorAdder(DaffCartOperationType.Payment);
/** @type {?} */
var resetErrors$6 = initializeErrorResetter(DaffCartOperationType.Payment);
/** @type {?} */
var setLoading$6 = initializeLoadingSetter(DaffCartOperationType.Payment);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartPaymentReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffCartPaymentActionTypes.CartPaymentLoadAction:
            return __assign({}, state, setLoading$6(state.loading, DaffLoadingState.Resolving));
        case DaffCartPaymentActionTypes.CartPaymentUpdateAction:
        case DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingAction:
        case DaffCartPaymentActionTypes.CartPaymentRemoveAction:
            return __assign({}, state, setLoading$6(state.loading, DaffLoadingState.Mutating));
        case DaffCartPaymentActionTypes.CartPaymentLoadSuccessAction:
            return __assign({}, state, resetErrors$6(state.errors), { cart: __assign({}, state.cart, { payment: action.payload }) }, setLoading$6(state.loading, DaffLoadingState.Complete));
        case DaffCartPaymentActionTypes.CartPaymentRemoveSuccessAction:
            return __assign({}, state, resetErrors$6(state.errors), { cart: __assign({}, state.cart, { payment: null }) }, setLoading$6(state.loading, DaffLoadingState.Complete));
        case DaffCartPaymentActionTypes.CartPaymentUpdateSuccessAction:
        case DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingSuccessAction:
            return __assign({}, state, resetErrors$6(state.errors), { cart: __assign({}, state.cart, action.payload) }, setLoading$6(state.loading, DaffLoadingState.Complete));
        case DaffCartPaymentActionTypes.CartPaymentLoadFailureAction:
        case DaffCartPaymentActionTypes.CartPaymentUpdateFailureAction:
        case DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingFailureAction:
        case DaffCartPaymentActionTypes.CartPaymentRemoveFailureAction:
            return __assign({}, state, addError$6(state.errors, action.payload), setLoading$6(state.loading, DaffLoadingState.Complete));
        /**
         * This reducer is temporary until custom reducers can be injected by the @daffodil/paymentSource modules. Right now,
         * the payment modules need a way to update cart state with a payment token.
         *
         * todo: remove when possible.
         */
        case DaffCartPaymentActionTypes.CartPaymentMethodAddAction:
            return __assign({}, state, { cart: __assign({}, state.cart, { payment: __assign({}, action.payload) }) });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var addError$7 = initializeErrorAdder(DaffCartOperationType.PaymentMethods);
/** @type {?} */
var resetErrors$7 = initializeErrorResetter(DaffCartOperationType.PaymentMethods);
/** @type {?} */
var setLoading$7 = initializeLoadingSetter(DaffCartOperationType.PaymentMethods);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartPaymentMethodsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction:
            return __assign({}, state, setLoading$7(state.loading, DaffLoadingState.Resolving));
        case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadSuccessAction:
            return __assign({}, state, resetErrors$7(state.errors), { cart: __assign({}, state.cart, { available_payment_methods: action.payload }) }, setLoading$7(state.loading, DaffLoadingState.Complete));
        case DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadFailureAction:
            return __assign({}, state, addError$7(state.errors, action.payload), setLoading$7(state.loading, DaffLoadingState.Complete));
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var addError$8 = initializeErrorAdder(DaffCartOperationType.Coupon);
/** @type {?} */
var resetErrors$8 = initializeErrorResetter(DaffCartOperationType.Coupon);
/** @type {?} */
var setLoading$8 = initializeLoadingSetter(DaffCartOperationType.Coupon);
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function cartCouponReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffCartCouponActionTypes.CartCouponListAction:
            return __assign({}, state, setLoading$8(state.loading, DaffLoadingState.Resolving));
        case DaffCartCouponActionTypes.CartCouponApplyAction:
        case DaffCartCouponActionTypes.CartCouponRemoveAction:
        case DaffCartCouponActionTypes.CartCouponRemoveAllAction:
            return __assign({}, state, setLoading$8(state.loading, DaffLoadingState.Mutating));
        case DaffCartCouponActionTypes.CartCouponApplySuccessAction:
        case DaffCartCouponActionTypes.CartCouponRemoveSuccessAction:
        case DaffCartCouponActionTypes.CartCouponRemoveAllSuccessAction:
            return __assign({}, state, resetErrors$8(state.errors), { cart: __assign({}, state.cart, action.payload) }, setLoading$8(state.loading, DaffLoadingState.Complete));
        case DaffCartCouponActionTypes.CartCouponListSuccessAction:
            return __assign({}, state, resetErrors$8(state.errors), { cart: __assign({}, state.cart, { coupons: action.payload }) }, setLoading$8(state.loading, DaffLoadingState.Complete));
        case DaffCartCouponActionTypes.CartCouponApplyFailureAction:
        case DaffCartCouponActionTypes.CartCouponListFailureAction:
        case DaffCartCouponActionTypes.CartCouponRemoveAllFailureAction:
        case DaffCartCouponActionTypes.CartCouponRemoveFailureAction:
            return __assign({}, state, addError$8(state.errors, action.payload), setLoading$8(state.loading, DaffLoadingState.Complete));
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
function cartResolveReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffCartActionTypes.ResolveCartAction:
            return __assign({}, state, { resolved: DaffCartResolveState.Resolving });
        case DaffCartActionTypes.ResolveCartServerSideAction:
            return __assign({}, state, { resolved: DaffCartResolveState.ServerSide });
        case DaffCartActionTypes.ResolveCartSuccessAction:
            return __assign({}, state, { resolved: DaffCartResolveState.Succeeded });
        case DaffCartActionTypes.ResolveCartFailureAction:
            return __assign({}, state, { resolved: DaffCartResolveState.Failed });
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
function daffCartReducer(state, action) {
    if (state === void 0) { state = initialState; }
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
var ɵ0$2 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T
     * @return {?}
     */
    function () {
        return cache = cache || createEntityAdapter({ selectId: (/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return String(item.item_id); }) });
    });
};
/**
 * Cart Item Entities Adapter for changing/overwriting entity state.
 * @type {?}
 */
var daffCartItemEntitiesAdapter = ((ɵ0$2))();

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
var DaffCartItemStateEnum = {
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
function daffCartItemEntitiesReducer(state, action) {
    if (state === void 0) { state = daffCartItemEntitiesAdapter().getInitialState(); }
    /** @type {?} */
    var adapter = daffCartItemEntitiesAdapter();
    switch (action.type) {
        case DaffCartItemActionTypes.CartItemListSuccessAction:
            return adapter.addAll(action.payload.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (__assign({}, item, { daffState: getDaffState(state.entities[item.item_id]) || DaffCartItemStateEnum.Default })); })), state);
        case DaffCartItemActionTypes.CartItemLoadSuccessAction:
            return adapter.upsertOne(__assign({}, action.payload, { daffState: getDaffState(state.entities[action.payload.item_id]) || DaffCartItemStateEnum.Default }), state);
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
            function (item) { return (__assign({}, item, { daffState: getDaffState(state.entities[item.item_id]) || DaffCartItemStateEnum.Default })); })))))), state);
        case DaffCartItemActionTypes.CartItemStateResetAction:
            return adapter.addAll(Object.keys(state.entities).map((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return (__assign({}, state.entities[key], { daffState: DaffCartItemStateEnum.Default })); })), state);
        case DaffCartItemActionTypes.CartItemUpdateAction:
        case DaffCartItemActionTypes.CartItemDeleteAction:
            return adapter.upsertOne(__assign({}, state.entities[action.itemId], { daffState: DaffCartItemStateEnum.Mutating }), state);
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
    function (newItem) {
        /** @type {?} */
        var oldItem = oldCartItems[newItem.item_id];
        switch (true) {
            case !oldItem:
                return __assign({}, newItem, { daffState: DaffCartItemStateEnum.New });
            //todo: add optional chaining when possible
            case oldItem && oldItem.qty !== newItem.qty:
                return __assign({}, newItem, { daffState: DaffCartItemStateEnum.Updated });
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
    function (item) { return item.item_id === itemId ? __assign({}, item, { daffState: DaffCartItemStateEnum.Updated }) : __assign({}, item, { daffState: getDaffState(stateItems[item.item_id]) || DaffCartItemStateEnum.Default }); }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var daffCartOrderInitialState = {
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
function daffCartOrderReducer(state, action) {
    if (state === void 0) { state = daffCartOrderInitialState; }
    switch (action.type) {
        case DaffCartOrderActionTypes.CartPlaceOrderAction:
            return __assign({}, state, { loading: DaffLoadingState.Mutating });
        case DaffCartOrderActionTypes.CartPlaceOrderSuccessAction:
            return __assign({}, state, { errors: [], loading: DaffLoadingState.Complete, cartOrderResult: action.payload });
        case DaffCartOrderActionTypes.CartPlaceOrderFailureAction:
            return __assign({}, state, { loading: DaffLoadingState.Complete, errors: __spread(state.errors, [
                    action.payload
                ]) });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var daffCartReducers = {
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
var createCartItemEntitiesSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
function () {
    var selectCartFeatureState = getDaffCartFeatureSelector().selectCartFeatureState;
    /** @type {?} */
    var adapterSelectors = daffCartItemEntitiesAdapter().getSelectors();
    /**
     * CartItem Entities State
     * @type {?}
     */
    var selectCartItemEntitiesState = createSelector(selectCartFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.cartItems; }));
    /**
     * Selector for product IDs.
     * @type {?}
     */
    var selectCartItemIds = createSelector(selectCartItemEntitiesState, adapterSelectors.selectIds);
    /**
     * Selector for all product entities (see ngrx/entity).
     * @type {?}
     */
    var selectCartItemEntities = createSelector(selectCartItemEntitiesState, adapterSelectors.selectEntities);
    /**
     * Selector for all products on state.
     * @type {?}
     */
    var selectAllCartItems = createSelector(selectCartItemEntitiesState, adapterSelectors.selectAll);
    /**
     * Selector for the total number of products.
     * @type {?}
     */
    var selectCartItemTotal = createSelector(selectCartItemEntitiesState, adapterSelectors.selectTotal);
    /** @type {?} */
    var selectCartItem = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    function (cartItems, props) { return cartItems[props.id]; }));
    /**
     * Selector for the total number of cart items that takes into account the qty on each cart item.
     * @type {?}
     */
    var selectTotalNumberOfCartItems = createSelector(selectAllCartItems, (/**
     * @param {?} cartItems
     * @return {?}
     */
    function (cartItems) { return cartItems.reduce((/**
     * @param {?} acc
     * @param {?} cartItem
     * @return {?}
     */
    function (acc, cartItem) { return acc + cartItem.qty; }), 0); }));
    /** @type {?} */
    var selectCartItemConfiguredAttributes = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    function (cartItems, props) {
        /** @type {?} */
        var cartItem = selectCartItem.projector(cartItems, { id: props.id });
        if (cartItem.type !== DaffCartItemInputType.Configurable) {
            return null;
        }
        return ((/** @type {?} */ (cartItem))).attributes;
    }));
    /** @type {?} */
    var selectCartItemCompositeOptions = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    function (cartItems, props) {
        /** @type {?} */
        var cartItem = selectCartItem.projector(cartItems, { id: props.id });
        if (cartItem.type !== DaffCartItemInputType.Composite) {
            return null;
        }
        return ((/** @type {?} */ (cartItem))).options;
    }));
    /** @type {?} */
    var selectIsCartItemOutOfStock = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    function (cartItems, props) {
        /** @type {?} */
        var cartItem = selectCartItem.projector(cartItems, { id: props.id });
        return cartItem ? !cartItem.in_stock : null;
    }));
    //todo optional chaining
    /** @type {?} */
    var selectCartItemMutating = createSelector(selectAllCartItems, (/**
     * @param {?} cartItems
     * @return {?}
     */
    function (cartItems) { return cartItems && cartItems.reduce((/**
     * @param {?} acc
     * @param {?} item
     * @return {?}
     */
    function (acc, item) {
        return acc || item.daffState === DaffCartItemStateEnum.Mutating;
    }), false); }));
    /** @type {?} */
    var selectCartItemState = createSelector(selectCartItemEntities, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    function (cartItems, props) {
        /** @type {?} */
        var cartItem = selectCartItem.projector(cartItems, { id: props.id });
        //todo use optional chaining when possible
        return cartItem ? cartItem.daffState : null;
    }));
    return {
        selectCartItemEntitiesState: selectCartItemEntitiesState,
        selectCartItemIds: selectCartItemIds,
        selectCartItemEntities: selectCartItemEntities,
        selectAllCartItems: selectAllCartItems,
        selectCartItemTotal: selectCartItemTotal,
        selectCartItem: selectCartItem,
        selectTotalNumberOfCartItems: selectTotalNumberOfCartItems,
        selectCartItemConfiguredAttributes: selectCartItemConfiguredAttributes,
        selectCartItemCompositeOptions: selectCartItemCompositeOptions,
        selectIsCartItemOutOfStock: selectIsCartItemOutOfStock,
        selectCartItemMutating: selectCartItemMutating,
        selectCartItemState: selectCartItemState
    };
});
var ɵ0$3 = createCartItemEntitiesSelectors;
var ɵ1$1 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : createCartItemEntitiesSelectors(); });
};
/** @type {?} */
var getDaffCartItemEntitiesSelectors = ((ɵ1$1))();

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
var createCartSelectors = (/**
 * @template T, V, U
 * @return {?}
 */
function () {
    /** @type {?} */
    var selectCartFeatureState = getDaffCartFeatureSelector().selectCartFeatureState;
    var selectCartItemMutating = getDaffCartItemEntitiesSelectors().selectCartItemMutating;
    /** @type {?} */
    var selectCartState = createSelector(selectCartFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.cart; }));
    /** @type {?} */
    var selectCartValue = createSelector(selectCartState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.cart; }));
    /** @type {?} */
    var selectCartResolved = createSelector(selectCartState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.resolved; }));
    /** @type {?} */
    var selectCartLoadingObject = createSelector(selectCartState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /** @type {?} */
    var selectCartLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Cart] !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectCartResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Cart] === DaffLoadingState.Resolving; }));
    /** @type {?} */
    var selectCartMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Cart] === DaffLoadingState.Mutating; }));
    /** @type {?} */
    var selectBillingAddressLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.BillingAddress] !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectBillingAddressResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.BillingAddress] === DaffLoadingState.Resolving; }));
    /** @type {?} */
    var selectBillingAddressMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.BillingAddress] === DaffLoadingState.Mutating; }));
    /** @type {?} */
    var selectShippingAddressLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.ShippingAddress] !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectShippingAddressResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.ShippingAddress] === DaffLoadingState.Resolving; }));
    /** @type {?} */
    var selectShippingAddressMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.ShippingAddress] === DaffLoadingState.Mutating; }));
    /** @type {?} */
    var selectShippingInformationLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.ShippingInformation] !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectShippingInformationResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.ShippingInformation] === DaffLoadingState.Resolving; }));
    /** @type {?} */
    var selectShippingInformationMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.ShippingInformation] === DaffLoadingState.Mutating; }));
    /** @type {?} */
    var selectShippingMethodsLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.ShippingMethods] !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectShippingMethodsResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.ShippingMethods] === DaffLoadingState.Resolving; }));
    /** @type {?} */
    var selectPaymentLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Payment] !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectPaymentResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Payment] === DaffLoadingState.Resolving; }));
    /** @type {?} */
    var selectPaymentMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Payment] === DaffLoadingState.Mutating; }));
    /** @type {?} */
    var selectPaymentMethodsLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.PaymentMethods] !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectPaymentMethodsResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.PaymentMethods] === DaffLoadingState.Resolving; }));
    /** @type {?} */
    var selectItemLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Item] !== DaffCartItemLoadingState.Complete; }));
    /** @type {?} */
    var selectItemAdding = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Item] === DaffCartItemLoadingState.Adding; }));
    /** @type {?} */
    var selectItemResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Item] === DaffCartItemLoadingState.Resolving; }));
    /** @type {?} */
    var selectCouponLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Coupon] !== DaffLoadingState.Complete; }));
    /** @type {?} */
    var selectCouponResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Coupon] === DaffLoadingState.Resolving; }));
    /** @type {?} */
    var selectCouponMutating = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return loadingObject[DaffCartOperationType.Coupon] === DaffLoadingState.Mutating; }));
    /** @type {?} */
    var selectCartFeatureLoading = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return [
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
    function (selector) {
        return selector.projector(loadingObject);
    })).reduce((/**
     * @param {?} acc
     * @param {?} loading
     * @return {?}
     */
    function (acc, loading) { return acc || loading; }), false); }));
    /** @type {?} */
    var selectCartFeatureResolving = createSelector(selectCartLoadingObject, (/**
     * @param {?} loadingObject
     * @return {?}
     */
    function (loadingObject) { return [
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
    function (selector) {
        return selector.projector(loadingObject);
    })).reduce((/**
     * @param {?} acc
     * @param {?} resolving
     * @return {?}
     */
    function (acc, resolving) { return acc || resolving; }), false); }));
    /** @type {?} */
    var selectCartFeatureMutating = createSelector(selectCartLoadingObject, selectCartItemMutating, (/**
     * @param {?} loadingObject
     * @param {?} cartItemMutating
     * @return {?}
     */
    function (loadingObject, cartItemMutating) { return [
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
    function (selector) {
        return selector.projector(loadingObject);
    })).reduce((/**
     * @param {?} acc
     * @param {?} mutating
     * @return {?}
     */
    function (acc, mutating) { return acc || mutating; }), false) || cartItemMutating; }));
    /** @type {?} */
    var selectCartErrorsObject = createSelector(selectCartState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; }));
    /** @type {?} */
    var selectCartErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.Cart]; }));
    /** @type {?} */
    var selectBillingAddressErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.BillingAddress]; }));
    /** @type {?} */
    var selectShippingAddressErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.ShippingAddress]; }));
    /** @type {?} */
    var selectShippingInformationErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.ShippingInformation]; }));
    /** @type {?} */
    var selectShippingMethodsErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.ShippingMethods]; }));
    /** @type {?} */
    var selectPaymentErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.Payment]; }));
    /** @type {?} */
    var selectPaymentMethodsErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.PaymentMethods]; }));
    /** @type {?} */
    var selectItemErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.Item]; }));
    /** @type {?} */
    var selectCouponErrors = createSelector(selectCartErrorsObject, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state[DaffCartOperationType.Coupon]; }));
    /** @type {?} */
    var selectCartId = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.id; }));
    /**
     * @deprecated use selectCartSubtotalExcludingTax selector instead.
     * @type {?}
     */
    var selectCartSubtotal = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var subtotalObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.subtotalExcludingTax; }));
        return subtotalObject ? subtotalObject.value : null;
    }));
    /** @type {?} */
    var selectCartGrandTotal = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var grandTotalObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.grandTotal; }));
        return grandTotalObject ? grandTotalObject.value : null;
    }));
    /** @type {?} */
    var selectCartSubtotalExcludingTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var subtotalExcludingTaxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.subtotalExcludingTax; }));
        return subtotalExcludingTaxObject ? subtotalExcludingTaxObject.value : null;
    }));
    /** @type {?} */
    var selectCartSubtotalIncludingTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var subtotalIncludingTaxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.subtotalIncludingTax; }));
        return subtotalIncludingTaxObject ? subtotalIncludingTaxObject.value : null;
    }));
    /** @type {?} */
    var selectCartSubtotalWithDiscountExcludingTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var subtotalWithDiscountExcludingTaxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.subtotalWithDiscountExcludingTax; }));
        return subtotalWithDiscountExcludingTaxObject ? subtotalWithDiscountExcludingTaxObject.value : null;
    }));
    /** @type {?} */
    var selectCartSubtotalWithDiscountIncludingTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var subtotalWithDiscountIncludingTaxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.subtotalWithDiscountIncludingTax; }));
        return subtotalWithDiscountIncludingTaxObject ? subtotalWithDiscountIncludingTaxObject.value : null;
    }));
    /** @type {?} */
    var selectCartTotalTax = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var taxObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.tax; }));
        return taxObject ? taxObject.value : null;
    }));
    /** @type {?} */
    var selectCartDiscountTotals = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var discounts = state.totals.filter((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.discount; }));
        return discounts ? discounts : [];
    }));
    /** @type {?} */
    var selectCartShippingTotal = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        /** @type {?} */
        var shippingTotalObject = state.totals.find((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.name === DaffCartTotalTypeEnum.shipping; }));
        return shippingTotalObject ? shippingTotalObject.value : null;
    }));
    /** @type {?} */
    var selectCartCoupons = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.coupons; }));
    /** @type {?} */
    var selectCartItems = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.items; }));
    /** @type {?} */
    var selectCartHasOutOfStockItems = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.items.reduce((/**
     * @param {?} acc
     * @param {?} item
     * @return {?}
     */
    function (acc, item) { return (acc || !item.in_stock); }), false); }));
    /** @type {?} */
    var selectCartBillingAddress = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.billing_address; }));
    /** @type {?} */
    var selectCartShippingAddress = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.shipping_address; }));
    /** @type {?} */
    var selectCartPayment = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.payment; }));
    /** @type {?} */
    var selectCartTotals = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.totals; }));
    /** @type {?} */
    var selectCartShippingInformation = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.shipping_information; }));
    /** @type {?} */
    var selectCartAvailableShippingMethods = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.available_shipping_methods; }));
    /** @type {?} */
    var selectCartAvailablePaymentMethods = createSelector(selectCartValue, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.available_payment_methods; }));
    /** @type {?} */
    var selectIsCartEmpty = createSelector(selectCartValue, (/**
     * @param {?} cart
     * @return {?}
     */
    function (cart) { return !cart || !cart.items || cart.items.length === 0; }));
    /** @type {?} */
    var selectCartItemDiscountedRowTotal = createSelector(selectCartItems, (/**
     * @param {?} cartItems
     * @param {?} props
     * @return {?}
     */
    function (cartItems, props) {
        /** @type {?} */
        var cartItem = cartItems.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.item_id === props.id; }));
        return daffSubtract(cartItem.row_total, cartItem.total_discount);
    }));
    /** @type {?} */
    var selectIsBillingSameAsShipping = createSelector(selectCartShippingAddress, selectCartBillingAddress, (/**
     * @param {?} shippingAddress
     * @param {?} billingAddress
     * @return {?}
     */
    function (shippingAddress, billingAddress) { return daffComparePersonalAddresses(shippingAddress, billingAddress); }));
    /** @type {?} */
    var selectHasBillingAddress = createSelector(selectCartBillingAddress, (/**
     * @param {?} billingAddress
     * @return {?}
     */
    function (billingAddress) { return !!billingAddress; }));
    /** @type {?} */
    var selectHasShippingAddress = createSelector(selectCartShippingAddress, (/**
     * @param {?} shippingAddress
     * @return {?}
     */
    function (shippingAddress) { return !!shippingAddress; }));
    /** @type {?} */
    var selectHasShippingMethod = createSelector(selectCartShippingInformation, (/**
     * @param {?} shippingMethod
     * @return {?}
     */
    function (shippingMethod) { return !!shippingMethod; }));
    /** @type {?} */
    var selectHasPaymentMethod = createSelector(selectCartPayment, (/**
     * @param {?} paymentMethod
     * @return {?}
     */
    function (paymentMethod) { return !!paymentMethod && paymentMethod.method !== ''; }));
    /** @type {?} */
    var selectCanPlaceOrder = createSelector(selectIsCartEmpty, selectHasBillingAddress, selectHasShippingAddress, selectHasShippingMethod, selectHasPaymentMethod, (/**
     * @param {?} isCartEmpty
     * @param {?} hasBillingAddress
     * @param {?} hasShippingAddress
     * @param {?} hasShippingMethod
     * @param {?} hasPaymentMethod
     * @return {?}
     */
    function (isCartEmpty, hasBillingAddress, hasShippingAddress, hasShippingMethod, hasPaymentMethod) { return !isCartEmpty
        && hasBillingAddress
        && hasShippingAddress
        && hasShippingMethod
        && hasPaymentMethod; }));
    return {
        selectCartState: selectCartState,
        selectCartValue: selectCartValue,
        selectCartResolved: selectCartResolved,
        selectCartLoadingObject: selectCartLoadingObject,
        selectCartFeatureLoading: selectCartFeatureLoading,
        selectCartFeatureResolving: selectCartFeatureResolving,
        selectCartFeatureMutating: selectCartFeatureMutating,
        selectCartLoading: selectCartLoading,
        selectCartResolving: selectCartResolving,
        selectCartMutating: selectCartMutating,
        selectBillingAddressLoading: selectBillingAddressLoading,
        selectBillingAddressResolving: selectBillingAddressResolving,
        selectBillingAddressMutating: selectBillingAddressMutating,
        selectShippingAddressLoading: selectShippingAddressLoading,
        selectShippingAddressResolving: selectShippingAddressResolving,
        selectShippingAddressMutating: selectShippingAddressMutating,
        selectShippingInformationLoading: selectShippingInformationLoading,
        selectShippingInformationResolving: selectShippingInformationResolving,
        selectShippingInformationMutating: selectShippingInformationMutating,
        selectShippingMethodsLoading: selectShippingMethodsLoading,
        selectShippingMethodsResolving: selectShippingMethodsResolving,
        selectPaymentLoading: selectPaymentLoading,
        selectPaymentResolving: selectPaymentResolving,
        selectPaymentMutating: selectPaymentMutating,
        selectPaymentMethodsLoading: selectPaymentMethodsLoading,
        selectPaymentMethodsResolving: selectPaymentMethodsResolving,
        selectCouponLoading: selectCouponLoading,
        selectCouponResolving: selectCouponResolving,
        selectCouponMutating: selectCouponMutating,
        selectItemLoading: selectItemLoading,
        selectItemAdding: selectItemAdding,
        selectItemResolving: selectItemResolving,
        selectCartErrorsObject: selectCartErrorsObject,
        selectCartErrors: selectCartErrors,
        selectBillingAddressErrors: selectBillingAddressErrors,
        selectShippingAddressErrors: selectShippingAddressErrors,
        selectShippingInformationErrors: selectShippingInformationErrors,
        selectShippingMethodsErrors: selectShippingMethodsErrors,
        selectPaymentErrors: selectPaymentErrors,
        selectPaymentMethodsErrors: selectPaymentMethodsErrors,
        selectItemErrors: selectItemErrors,
        selectCouponErrors: selectCouponErrors,
        selectCartId: selectCartId,
        selectCartSubtotal: selectCartSubtotal,
        selectCartGrandTotal: selectCartGrandTotal,
        selectCartSubtotalExcludingTax: selectCartSubtotalExcludingTax,
        selectCartSubtotalIncludingTax: selectCartSubtotalIncludingTax,
        selectCartSubtotalWithDiscountExcludingTax: selectCartSubtotalWithDiscountExcludingTax,
        selectCartSubtotalWithDiscountIncludingTax: selectCartSubtotalWithDiscountIncludingTax,
        selectCartDiscountTotals: selectCartDiscountTotals,
        selectCartTotalTax: selectCartTotalTax,
        selectCartShippingTotal: selectCartShippingTotal,
        selectCartCoupons: selectCartCoupons,
        selectCartItems: selectCartItems,
        selectCartHasOutOfStockItems: selectCartHasOutOfStockItems,
        selectCartBillingAddress: selectCartBillingAddress,
        selectCartShippingAddress: selectCartShippingAddress,
        selectCartPayment: selectCartPayment,
        selectCartTotals: selectCartTotals,
        selectCartShippingInformation: selectCartShippingInformation,
        selectCartAvailableShippingMethods: selectCartAvailableShippingMethods,
        selectCartAvailablePaymentMethods: selectCartAvailablePaymentMethods,
        selectIsCartEmpty: selectIsCartEmpty,
        selectCartItemDiscountedRowTotal: selectCartItemDiscountedRowTotal,
        selectIsBillingSameAsShipping: selectIsBillingSameAsShipping,
        selectHasBillingAddress: selectHasBillingAddress,
        selectHasShippingAddress: selectHasShippingAddress,
        selectHasShippingMethod: selectHasShippingMethod,
        selectHasPaymentMethod: selectHasPaymentMethod,
        selectCanPlaceOrder: selectCanPlaceOrder
    };
});
var ɵ0$4 = createCartSelectors;
var ɵ1$2 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : createCartSelectors(); });
};
/** @type {?} */
var getCartSelectors = ((ɵ1$2))();

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
var createCartSelectors$1 = (/**
 * @template T, V, U
 * @return {?}
 */
function () {
    return __assign({}, getDaffCartFeatureSelector(), getCartOrderSelectors(), getCartSelectors(), getDaffCartItemEntitiesSelectors());
});
var ɵ0$5 = createCartSelectors$1;
var ɵ1$3 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T, V, U
     * @return {?}
     */
    function () { return cache = cache
        ? cache
        : createCartSelectors$1(); });
};
/** @type {?} */
var getDaffCartSelectors = ((ɵ1$3))();

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
var DaffCartFacade = /** @class */ (function () {
    function DaffCartFacade(store, paymentMethodMap) {
        var _this = this;
        this.store = store;
        this.paymentMethodMap = paymentMethodMap;
        var _a = getDaffCartSelectors(), selectCartValue = _a.selectCartValue, selectCartResolved = _a.selectCartResolved, selectCartLoadingObject = _a.selectCartLoadingObject, selectCartFeatureLoading = _a.selectCartFeatureLoading, selectCartFeatureResolving = _a.selectCartFeatureResolving, selectCartFeatureMutating = _a.selectCartFeatureMutating, selectCartLoading = _a.selectCartLoading, selectCartResolving = _a.selectCartResolving, selectCartMutating = _a.selectCartMutating, selectBillingAddressLoading = _a.selectBillingAddressLoading, selectBillingAddressResolving = _a.selectBillingAddressResolving, selectBillingAddressMutating = _a.selectBillingAddressMutating, selectShippingAddressLoading = _a.selectShippingAddressLoading, selectShippingAddressResolving = _a.selectShippingAddressResolving, selectShippingAddressMutating = _a.selectShippingAddressMutating, selectShippingInformationLoading = _a.selectShippingInformationLoading, selectShippingInformationResolving = _a.selectShippingInformationResolving, selectShippingInformationMutating = _a.selectShippingInformationMutating, selectShippingMethodsLoading = _a.selectShippingMethodsLoading, selectShippingMethodsResolving = _a.selectShippingMethodsResolving, selectPaymentLoading = _a.selectPaymentLoading, selectPaymentResolving = _a.selectPaymentResolving, selectPaymentMutating = _a.selectPaymentMutating, selectPaymentMethodsLoading = _a.selectPaymentMethodsLoading, selectPaymentMethodsResolving = _a.selectPaymentMethodsResolving, selectCouponLoading = _a.selectCouponLoading, selectCouponResolving = _a.selectCouponResolving, selectCouponMutating = _a.selectCouponMutating, selectItemLoading = _a.selectItemLoading, selectItemAdding = _a.selectItemAdding, selectItemResolving = _a.selectItemResolving, selectCartItemMutating = _a.selectCartItemMutating, selectCartErrorsObject = _a.selectCartErrorsObject, selectCartErrors = _a.selectCartErrors, selectItemErrors = _a.selectItemErrors, selectBillingAddressErrors = _a.selectBillingAddressErrors, selectShippingAddressErrors = _a.selectShippingAddressErrors, selectShippingInformationErrors = _a.selectShippingInformationErrors, selectShippingMethodsErrors = _a.selectShippingMethodsErrors, selectPaymentErrors = _a.selectPaymentErrors, selectPaymentMethodsErrors = _a.selectPaymentMethodsErrors, selectCouponErrors = _a.selectCouponErrors, selectCartId = _a.selectCartId, selectCartSubtotal = _a.selectCartSubtotal, selectCartGrandTotal = _a.selectCartGrandTotal, selectCartSubtotalExcludingTax = _a.selectCartSubtotalExcludingTax, selectCartSubtotalIncludingTax = _a.selectCartSubtotalIncludingTax, selectCartSubtotalWithDiscountExcludingTax = _a.selectCartSubtotalWithDiscountExcludingTax, selectCartSubtotalWithDiscountIncludingTax = _a.selectCartSubtotalWithDiscountIncludingTax, selectCartDiscountTotals = _a.selectCartDiscountTotals, selectCartTotalTax = _a.selectCartTotalTax, selectCartShippingTotal = _a.selectCartShippingTotal, selectCartCoupons = _a.selectCartCoupons, selectCartItems = _a.selectCartItems, selectCartHasOutOfStockItems = _a.selectCartHasOutOfStockItems, selectCartItemEntities = _a.selectCartItemEntities, selectTotalNumberOfCartItems = _a.selectTotalNumberOfCartItems, selectCartItemConfiguredAttributes = _a.selectCartItemConfiguredAttributes, selectCartItemCompositeOptions = _a.selectCartItemCompositeOptions, selectCartBillingAddress = _a.selectCartBillingAddress, selectCartShippingAddress = _a.selectCartShippingAddress, selectCartPayment = _a.selectCartPayment, selectCartTotals = _a.selectCartTotals, selectCartShippingInformation = _a.selectCartShippingInformation, selectCartAvailableShippingMethods = _a.selectCartAvailableShippingMethods, selectCartAvailablePaymentMethods = _a.selectCartAvailablePaymentMethods, selectIsCartEmpty = _a.selectIsCartEmpty, selectIsBillingSameAsShipping = _a.selectIsBillingSameAsShipping, selectCartOrderLoading = _a.selectCartOrderLoading, selectCartOrderErrors = _a.selectCartOrderErrors, selectCartOrderValue = _a.selectCartOrderValue, selectCartOrderId = _a.selectCartOrderId, selectCartOrderCartId = _a.selectCartOrderCartId, selectHasOrderResult = _a.selectHasOrderResult, selectCartItemDiscountedRowTotal = _a.selectCartItemDiscountedRowTotal, selectIsCartItemOutOfStock = _a.selectIsCartItemOutOfStock, selectCartItemState = _a.selectCartItemState, selectHasBillingAddress = _a.selectHasBillingAddress, selectHasShippingAddress = _a.selectHasShippingAddress, selectHasShippingMethod = _a.selectHasShippingMethod, selectHasPaymentMethod = _a.selectHasPaymentMethod, selectCanPlaceOrder = _a.selectCanPlaceOrder;
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
        function (payment) {
            return payment && payment.method
                ? _this.paymentMethodMap[payment.method]
                : null;
        })));
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
    DaffCartFacade.prototype.getConfiguredCartItemAttributes = /**
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        return this.store.pipe(select(this._selectCartItemConfiguredAttributes, { id: itemId }));
    };
    ;
    /**
     * @param {?} itemId
     * @return {?}
     */
    DaffCartFacade.prototype.getCompositeCartItemOptions = /**
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        return this.store.pipe(select(this._selectCartItemCompositeOptions, { id: itemId }));
    };
    ;
    /**
     * @param {?} itemId
     * @return {?}
     */
    DaffCartFacade.prototype.getCartItemDiscountedTotal = /**
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        return this.store.pipe(select(this._selectCartItemDiscountedRowTotal, { id: itemId }));
    };
    /**
     * @param {?} itemId
     * @return {?}
     */
    DaffCartFacade.prototype.isCartItemOutOfStock = /**
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        return this.store.pipe(select(this._selectIsCartItemOutOfStock, { id: itemId }));
    };
    /**
     * @param {?} itemId
     * @return {?}
     */
    DaffCartFacade.prototype.getCartItemState = /**
     * @param {?} itemId
     * @return {?}
     */
    function (itemId) {
        return this.store.pipe(select(this._selectCartItemState, { id: itemId }));
    };
    /**
     * @param {?} action
     * @return {?}
     */
    DaffCartFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffCartFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCartFacade.ctorParameters = function () { return [
        { type: Store },
        { type: Object, decorators: [{ type: Inject, args: [DaffCartPaymentMethodIdMap,] }] }
    ]; };
    /** @nocollapse */ DaffCartFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartFacade_Factory() { return new DaffCartFacade(ɵɵinject(Store), ɵɵinject(DaffCartPaymentMethodIdMap)); }, token: DaffCartFacade, providedIn: "root" });
    return DaffCartFacade;
}());
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
var DaffCartBillingAddressGuardRedirectUrl = new InjectionToken('DaffCartBillingAddressGuardRedirectUrl');

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
var DaffBillingAddressGuard = /** @class */ (function () {
    function DaffBillingAddressGuard(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffBillingAddressGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facade.hasBillingAddress$.pipe(take(1), tap((/**
         * @param {?} hasBillingAddress
         * @return {?}
         */
        function (hasBillingAddress) {
            if (!hasBillingAddress) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
        })));
    };
    DaffBillingAddressGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffBillingAddressGuard.ctorParameters = function () { return [
        { type: DaffCartFacade },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffCartBillingAddressGuardRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffBillingAddressGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffBillingAddressGuard_Factory() { return new DaffBillingAddressGuard(ɵɵinject(DaffCartFacade), ɵɵinject(Router), ɵɵinject(DaffCartBillingAddressGuardRedirectUrl)); }, token: DaffBillingAddressGuard, providedIn: "root" });
    return DaffBillingAddressGuard;
}());
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
var daffCartStateResolutionConfigurationDefault = {
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
var daffCartStateConfigurationDefault = {
    resolution: __assign({}, daffCartStateResolutionConfigurationDefault),
};
/**
 * The token holding the runtime configuration for the behavior of the
 * `\@daffodil/cart/state` package.
 * @type {?}
 */
var DAFF_CART_STATE_CONFIG = new InjectionToken('DAFF_CART_STATE_CONFIG', {
    providedIn: 'root',
    factory: (/**
     * @return {?}
     */
    function () { return daffCartStateConfigurationDefault; }),
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
var DaffResolvedCartGuard = /** @class */ (function () {
    function DaffResolvedCartGuard(facade, router, config) {
        this.facade = facade;
        this.router = router;
        this.config = config;
    }
    /**
     * @return {?}
     */
    DaffResolvedCartGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facade.resolved$.pipe(filter((/**
         * @param {?} resolvedState
         * @return {?}
         */
        function (resolvedState) {
            return resolvedState === DaffCartResolveState.Succeeded ||
                resolvedState === DaffCartResolveState.ServerSide ||
                resolvedState === DaffCartResolveState.Failed;
        })), map((/**
         * @param {?} resolvedState
         * @return {?}
         */
        function (resolvedState) {
            return resolvedState === DaffCartResolveState.Succeeded ||
                resolvedState === DaffCartResolveState.ServerSide;
        })), take(1), map((/**
         * @param {?} success
         * @return {?}
         */
        function (success) {
            return !success && _this.config.resolution.failedResolutionPath
                ? _this.router.parseUrl(_this.config.resolution.failedResolutionPath)
                : success;
        })));
    };
    DaffResolvedCartGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    DaffResolvedCartGuard.ctorParameters = function () { return [
        { type: DaffCartFacade },
        { type: Router },
        { type: undefined, decorators: [{ type: Inject, args: [DAFF_CART_STATE_CONFIG,] }] }
    ]; };
    /** @nocollapse */ DaffResolvedCartGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffResolvedCartGuard_Factory() { return new DaffResolvedCartGuard(ɵɵinject(DaffCartFacade), ɵɵinject(Router), ɵɵinject(DAFF_CART_STATE_CONFIG)); }, token: DaffResolvedCartGuard, providedIn: "root" });
    return DaffResolvedCartGuard;
}());
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
var DaffCartItemsGuardRedirectUrl = new InjectionToken('DaffCartItemsGuardRedirectUrl');

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
var DaffCartItemsGuard = /** @class */ (function () {
    function DaffCartItemsGuard(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffCartItemsGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facade.isCartEmpty$.pipe(map((/**
         * @param {?} isCartEmpty
         * @return {?}
         */
        function (isCartEmpty) { return !isCartEmpty; })), take(1), tap((/**
         * @param {?} hasNonEmptyCart
         * @return {?}
         */
        function (hasNonEmptyCart) {
            if (!hasNonEmptyCart) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
        })));
    };
    DaffCartItemsGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCartItemsGuard.ctorParameters = function () { return [
        { type: DaffCartFacade },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffCartItemsGuardRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffCartItemsGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartItemsGuard_Factory() { return new DaffCartItemsGuard(ɵɵinject(DaffCartFacade), ɵɵinject(Router), ɵɵinject(DaffCartItemsGuardRedirectUrl)); }, token: DaffCartItemsGuard, providedIn: "root" });
    return DaffCartItemsGuard;
}());
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
var DaffCartPaymentMethodGuardRedirectUrl = new InjectionToken('DaffCartPaymentMethodGuardRedirectUrl');

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
var DaffPaymentMethodGuard = /** @class */ (function () {
    function DaffPaymentMethodGuard(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffPaymentMethodGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facade.hasPaymentMethod$.pipe(take(1), tap((/**
         * @param {?} hasPaymentMethod
         * @return {?}
         */
        function (hasPaymentMethod) {
            if (!hasPaymentMethod) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
        })));
    };
    DaffPaymentMethodGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffPaymentMethodGuard.ctorParameters = function () { return [
        { type: DaffCartFacade },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffCartPaymentMethodGuardRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffPaymentMethodGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffPaymentMethodGuard_Factory() { return new DaffPaymentMethodGuard(ɵɵinject(DaffCartFacade), ɵɵinject(Router), ɵɵinject(DaffCartPaymentMethodGuardRedirectUrl)); }, token: DaffPaymentMethodGuard, providedIn: "root" });
    return DaffPaymentMethodGuard;
}());
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
var DaffCartShippingAddressGuardRedirectUrl = new InjectionToken('DaffCartShippingAddressGuardRedirectUrl');

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
var DaffShippingAddressGuard = /** @class */ (function () {
    function DaffShippingAddressGuard(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffShippingAddressGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facade.hasShippingAddress$.pipe(take(1), tap((/**
         * @param {?} hasShippingAddress
         * @return {?}
         */
        function (hasShippingAddress) {
            if (!hasShippingAddress) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
        })));
    };
    DaffShippingAddressGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffShippingAddressGuard.ctorParameters = function () { return [
        { type: DaffCartFacade },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffCartShippingAddressGuardRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffShippingAddressGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffShippingAddressGuard_Factory() { return new DaffShippingAddressGuard(ɵɵinject(DaffCartFacade), ɵɵinject(Router), ɵɵinject(DaffCartShippingAddressGuardRedirectUrl)); }, token: DaffShippingAddressGuard, providedIn: "root" });
    return DaffShippingAddressGuard;
}());
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
var DaffCartShippingMethodGuardRedirectUrl = new InjectionToken('DaffCartShippingMethodGuardRedirectUrl');

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
var DaffShippingMethodGuard = /** @class */ (function () {
    function DaffShippingMethodGuard(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffShippingMethodGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facade.hasShippingMethod$.pipe(take(1), tap((/**
         * @param {?} hasShippingMethod
         * @return {?}
         */
        function (hasShippingMethod) {
            if (!hasShippingMethod) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
        })));
    };
    DaffShippingMethodGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffShippingMethodGuard.ctorParameters = function () { return [
        { type: DaffCartFacade },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffCartShippingMethodGuardRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffShippingMethodGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffShippingMethodGuard_Factory() { return new DaffShippingMethodGuard(ɵɵinject(DaffCartFacade), ɵɵinject(Router), ɵɵinject(DaffCartShippingMethodGuardRedirectUrl)); }, token: DaffShippingMethodGuard, providedIn: "root" });
    return DaffShippingMethodGuard;
}());
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
var DaffCartOrderResultGuardRedirectUrl = new InjectionToken('DaffCartOrderResultGuardRedirectUrl');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A routing guard that will redirect to a given url if the cart order result is not defined.
 * The url is `/` by default, but can be overridden with the DaffCartOrderResultGuardRedirectUrl injection token.
 */
var DaffOrderResultGuard = /** @class */ (function () {
    function DaffOrderResultGuard(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffOrderResultGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facade.hasOrderResult$.pipe(tap((/**
         * @param {?} hasOrderResult
         * @return {?}
         */
        function (hasOrderResult) {
            if (!hasOrderResult) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
        })));
    };
    DaffOrderResultGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderResultGuard.ctorParameters = function () { return [
        { type: DaffCartFacade },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffCartOrderResultGuardRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffOrderResultGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderResultGuard_Factory() { return new DaffOrderResultGuard(ɵɵinject(DaffCartFacade), ɵɵinject(Router), ɵɵinject(DaffCartOrderResultGuardRedirectUrl)); }, token: DaffOrderResultGuard, providedIn: "root" });
    return DaffOrderResultGuard;
}());
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
var DaffCartResolverRedirectUrl = new InjectionToken('DaffCartResolverRedirectUrl');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Resolves the cart before navigation. Redirects to a given url when a failure occurs during Cart Load.
 * This url is `/` by default but can be overridden with the DaffCartResolverRedirectUrl injection token.
 */
var DaffCartResolver = /** @class */ (function () {
    function DaffCartResolver(store, dispatcher, router, redirectUrl) {
        this.store = store;
        this.dispatcher = dispatcher;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffCartResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.store.dispatch(new DaffResolveCart());
        return this.dispatcher.pipe(filter((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.type === DaffCartActionTypes.CartLoadSuccessAction
            || action.type === DaffCartActionTypes.CartLoadFailureAction
            || action.type === DaffCartActionTypes.CartCreateFailureAction
            || action.type === DaffCartActionTypes.CartStorageFailureAction; })), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            if (action.type !== DaffCartActionTypes.CartLoadSuccessAction) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
            return action;
        })), take(1));
    };
    DaffCartResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffCartResolver.ctorParameters = function () { return [
        { type: Store },
        { type: ActionsSubject },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffCartResolverRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffCartResolver.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffCartResolver_Factory() { return new DaffCartResolver(ɵɵinject(Store), ɵɵinject(ActionsSubject), ɵɵinject(Router), ɵɵinject(DaffCartResolverRedirectUrl)); }, token: DaffCartResolver, providedIn: "root" });
    return DaffCartResolver;
}());
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
var DaffEmptyCartResolverRedirectUrl = new InjectionToken('DaffEmptyCartResolverRedirectUrl');

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
var DaffEmptyCartResolver = /** @class */ (function () {
    function DaffEmptyCartResolver(cartResolver, router, redirectUrl) {
        this.cartResolver = cartResolver;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffEmptyCartResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cartResolver.resolve().pipe(filter((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.type === DaffCartActionTypes.CartLoadSuccessAction; })), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            if (!action.payload || action.payload.items.length === 0) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
            return action;
        })));
    };
    DaffEmptyCartResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffEmptyCartResolver.ctorParameters = function () { return [
        { type: DaffCartResolver },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffEmptyCartResolverRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffEmptyCartResolver.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffEmptyCartResolver_Factory() { return new DaffEmptyCartResolver(ɵɵinject(DaffCartResolver), ɵɵinject(Router), ɵɵinject(DaffEmptyCartResolverRedirectUrl)); }, token: DaffEmptyCartResolver, providedIn: "root" });
    return DaffEmptyCartResolver;
}());
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
var DaffCartItemStateDebounceTime = new InjectionToken('DaffCartItemStateDebounceTime');

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
var DaffCartEffects = /** @class */ (function () {
    function DaffCartEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.create$ = this.actions$.pipe(ofType(DaffCartActionTypes.CartCreateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return _this.driver.create().pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartCreateSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(new DaffCartCreateFailure(_this.errorMatcher(error))); }))); })));
        this.storeId$ = this.actions$.pipe(ofType(DaffCartActionTypes.CartCreateSuccessAction, DaffCartActionTypes.ResolveCartSuccessAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return of(null).pipe(tap((/**
         * @return {?}
         */
        function () {
            _this.storage.setCartId(String(action.payload.id));
        })), switchMapTo(EMPTY), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(new DaffCartStorageFailure(_this.errorMatcher(error))); }))); })));
        this.get$ = this.actions$.pipe(ofType(DaffCartActionTypes.CartLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return of(null).pipe(map((/**
         * @return {?}
         */
        function () { return _this.storage.getCartId(); })), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return _this.driver.get(cartId); })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartLoadSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(_this.errorMatcher(error))
            : new DaffCartLoadFailure(_this.errorMatcher(error))); }))); })));
        this.addToCart$ = this.actions$.pipe(ofType(DaffCartActionTypes.AddToCartAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.addToCart(action.payload.productId, action.payload.qty).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffAddToCartSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffAddToCartFailure(_this.errorMatcher(error))); })));
        })));
        this.clear$ = this.actions$.pipe(ofType(DaffCartActionTypes.CartClearAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return of(null).pipe(map((/**
         * @return {?}
         */
        function () { return _this.storage.getCartId(); })), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return _this.driver.clear(cartId); })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartClearSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(_this.errorMatcher(error))
            : new DaffCartClearFailure(_this.errorMatcher(error))); }))); })));
    }
    DaffCartEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
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
    return DaffCartEffects;
}());
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
var DaffCartItemEffects = /** @class */ (function () {
    function DaffCartItemEffects(actions$, errorMatcher, driver, storage, cartItemStateDebounceTime) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.cartItemStateDebounceTime = cartItemStateDebounceTime;
        this.list$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemListAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.list(_this.storage.getCartId()).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartItemListSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartItemListFailure(_this.errorMatcher(error))); })));
        })));
        this.get$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.get(_this.storage.getCartId(), action.itemId).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartItemLoadSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartItemLoadFailure(_this.errorMatcher(error))); })));
        })));
        this.add$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemAddAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.add(_this.storage.getCartId(), action.input).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartItemAddSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartItemAddFailure(_this.errorMatcher(error))); })));
        })));
        this.update$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemUpdateAction), mergeMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.update(_this.storage.getCartId(), action.itemId, action.changes).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartItemUpdateSuccess(resp, action.itemId); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartItemUpdateFailure(_this.errorMatcher(error))); })));
        })));
        this.resetCartItemStateAfterChange$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemAddSuccessAction, DaffCartItemActionTypes.CartItemUpdateSuccessAction), debounceTime(this.cartItemStateDebounceTime), map((/**
         * @return {?}
         */
        function () { return new DaffCartItemStateReset(); })));
        this.delete$ = this.actions$.pipe(ofType(DaffCartItemActionTypes.CartItemDeleteAction), mergeMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.delete(_this.storage.getCartId(), action.itemId).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartItemDeleteSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartItemDeleteFailure(_this.errorMatcher(error))); })));
        })));
    }
    DaffCartItemEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartItemEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartItemDriver,] }] },
        { type: DaffCartStorageService },
        { type: Number, decorators: [{ type: Inject, args: [DaffCartItemStateDebounceTime,] }] }
    ]; };
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
    return DaffCartItemEffects;
}());
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
var DaffCartBillingAddressEffects = /** @class */ (function () {
    function DaffCartBillingAddressEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.get$ = this.actions$.pipe(ofType(DaffCartBillingAddressActionTypes.CartBillingAddressLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.get(_this.storage.getCartId()).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartBillingAddressLoadSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartBillingAddressLoadFailure(_this.errorMatcher(error))); })));
        })));
        this.update$ = this.actions$.pipe(ofType(DaffCartBillingAddressActionTypes.CartBillingAddressUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.update(_this.storage.getCartId(), action.payload).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartBillingAddressUpdateSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartBillingAddressUpdateFailure(_this.errorMatcher(error))); })));
        })));
    }
    DaffCartBillingAddressEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartBillingAddressEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartBillingAddressDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], DaffCartBillingAddressEffects.prototype, "get$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], DaffCartBillingAddressEffects.prototype, "update$", void 0);
    return DaffCartBillingAddressEffects;
}());
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
var DaffCartShippingAddressEffects = /** @class */ (function () {
    function DaffCartShippingAddressEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.get$ = this.actions$.pipe(ofType(DaffCartShippingAddressActionTypes.CartShippingAddressLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.get(_this.storage.getCartId()).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartShippingAddressLoadSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartShippingAddressLoadFailure(_this.errorMatcher(error))); })));
        })));
        this.update$ = this.actions$.pipe(ofType(DaffCartShippingAddressActionTypes.CartShippingAddressUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.update(_this.storage.getCartId(), action.payload).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartShippingAddressUpdateSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartShippingAddressUpdateFailure(_this.errorMatcher(error))); })));
        })));
    }
    DaffCartShippingAddressEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartShippingAddressEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartShippingAddressDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], DaffCartShippingAddressEffects.prototype, "get$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], DaffCartShippingAddressEffects.prototype, "update$", void 0);
    return DaffCartShippingAddressEffects;
}());
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
var DaffCartShippingInformationEffects = /** @class */ (function () {
    function DaffCartShippingInformationEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.get$ = this.actions$.pipe(ofType(DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.get(_this.storage.getCartId()).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartShippingInformationLoadSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartShippingInformationLoadFailure(_this.errorMatcher(error))); })));
        })));
        this.update$ = this.actions$.pipe(ofType(DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.update(_this.storage.getCartId(), action.payload).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartShippingInformationUpdateSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartShippingInformationUpdateFailure(_this.errorMatcher(error))); })));
        })));
        this.delete$ = this.actions$.pipe(ofType(DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.delete(_this.storage.getCartId()).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartShippingInformationDeleteSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartShippingInformationDeleteFailure(_this.errorMatcher(error))); })));
        })));
    }
    DaffCartShippingInformationEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartShippingInformationEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartShippingInformationDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
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
    return DaffCartShippingInformationEffects;
}());
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
var DaffCartShippingMethodsEffects = /** @class */ (function () {
    function DaffCartShippingMethodsEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.list$ = this.actions$.pipe(ofType(DaffCartShippingMethodsActionTypes.CartShippingMethodsLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.list(_this.storage.getCartId()).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartShippingMethodsLoadSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartShippingMethodsLoadFailure(_this.errorMatcher(error))); })));
        })));
    }
    DaffCartShippingMethodsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartShippingMethodsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartShippingMethodsDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], DaffCartShippingMethodsEffects.prototype, "list$", void 0);
    return DaffCartShippingMethodsEffects;
}());
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
var DaffCartPaymentEffects = /** @class */ (function () {
    function DaffCartPaymentEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.get$ = this.actions$.pipe(ofType(DaffCartPaymentActionTypes.CartPaymentLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.get(_this.storage.getCartId()).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartPaymentLoadSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartPaymentLoadFailure(_this.errorMatcher(error))); })));
        })));
        this.update$ = this.actions$.pipe(ofType(DaffCartPaymentActionTypes.CartPaymentUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.update(_this.storage.getCartId(), action.payload).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartPaymentUpdateSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartPaymentUpdateFailure(_this.errorMatcher(error))); })));
        })));
        this.updateWithBilling$ = this.actions$.pipe(ofType(DaffCartPaymentActionTypes.CartPaymentUpdateWithBillingAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.updateWithBilling(_this.storage.getCartId(), action.payment, action.address).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartPaymentUpdateWithBillingSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartPaymentUpdateWithBillingFailure(_this.errorMatcher(error))); })));
        })));
        this.remove$ = this.actions$.pipe(ofType(DaffCartPaymentActionTypes.CartPaymentRemoveAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.remove(_this.storage.getCartId()).pipe(mapTo(new DaffCartPaymentRemoveSuccess()), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartPaymentRemoveFailure(_this.errorMatcher(error))); })));
        })));
    }
    DaffCartPaymentEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartPaymentEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartPaymentDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
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
    return DaffCartPaymentEffects;
}());
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
var DaffCartPaymentMethodsEffects = /** @class */ (function () {
    function DaffCartPaymentMethodsEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.list$ = this.actions$.pipe(ofType(DaffCartPaymentMethodsActionTypes.CartPaymentMethodsLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.list(_this.storage.getCartId()).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffCartPaymentMethodsLoadSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffCartPaymentMethodsLoadFailure(_this.errorMatcher(error))); })));
        })));
    }
    DaffCartPaymentMethodsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartPaymentMethodsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartPaymentMethodsDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], DaffCartPaymentMethodsEffects.prototype, "list$", void 0);
    return DaffCartPaymentMethodsEffects;
}());
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
var DaffCartOrderEffects = /** @class */ (function () {
    function DaffCartOrderEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.placeOrder$ = this.actions$.pipe(ofType(DaffCartOrderActionTypes.CartPlaceOrderAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return of(null).pipe(map((/**
         * @return {?}
         */
        function () { return _this.storage.getCartId(); })), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return _this.driver.placeOrder(cartId, action.payload); })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartPlaceOrderSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(_this.errorMatcher(error))
            : new DaffCartPlaceOrderFailure(_this.errorMatcher(error))); }))); })));
        this.resetCart$ = this.actions$.pipe(ofType(DaffCartOrderActionTypes.CartPlaceOrderSuccessAction), mapTo(new DaffCartCreate()));
    }
    DaffCartOrderEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartOrderEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartOrderDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], DaffCartOrderEffects.prototype, "placeOrder$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], DaffCartOrderEffects.prototype, "resetCart$", void 0);
    return DaffCartOrderEffects;
}());
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
var DaffCartCouponEffects = /** @class */ (function () {
    function DaffCartCouponEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.apply$ = this.actions$.pipe(ofType(DaffCartCouponActionTypes.CartCouponApplyAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return of(null).pipe(map((/**
         * @return {?}
         */
        function () { return _this.storage.getCartId(); })), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return _this.driver.apply(cartId, action.payload); })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartCouponApplySuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(_this.errorMatcher(error))
            : new DaffCartCouponApplyFailure(_this.errorMatcher(error))); }))); })));
        this.list$ = this.actions$.pipe(ofType(DaffCartCouponActionTypes.CartCouponListAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return of(null).pipe(map((/**
         * @return {?}
         */
        function () { return _this.storage.getCartId(); })), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return _this.driver.list(cartId); })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartCouponListSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(_this.errorMatcher(error))
            : new DaffCartCouponListFailure(_this.errorMatcher(error))); }))); })));
        this.remove$ = this.actions$.pipe(ofType(DaffCartCouponActionTypes.CartCouponRemoveAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return of(null).pipe(map((/**
         * @return {?}
         */
        function () { return _this.storage.getCartId(); })), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return _this.driver.remove(cartId, action.payload); })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartCouponRemoveSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(_this.errorMatcher(error))
            : new DaffCartCouponRemoveFailure(_this.errorMatcher(error))); }))); })));
        this.removeAll$ = this.actions$.pipe(ofType(DaffCartCouponActionTypes.CartCouponRemoveAllAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return of(null).pipe(map((/**
         * @return {?}
         */
        function () { return _this.storage.getCartId(); })), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return _this.driver.removeAll(cartId); })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartCouponRemoveAllSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(_this.errorMatcher(error))
            : new DaffCartCouponRemoveAllFailure(_this.errorMatcher(error))); }))); })));
    }
    DaffCartCouponEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartCouponEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartCouponDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
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
    return DaffCartCouponEffects;
}());
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
var DaffCartAddressEffects = /** @class */ (function () {
    function DaffCartAddressEffects(actions$, errorMatcher, driver, storage) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.driver = driver;
        this.storage = storage;
        this.update$ = this.actions$.pipe(ofType(DaffCartAddressActionTypes.CartAddressUpdateAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return of(null).pipe(map((/**
         * @return {?}
         */
        function () { return _this.storage.getCartId(); })), switchMap((/**
         * @param {?} cartId
         * @return {?}
         */
        function (cartId) { return _this.driver.update(cartId, action.payload); })), map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return new DaffCartAddressUpdateSuccess(resp); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return of(error instanceof DaffStorageServiceError
            ? new DaffCartStorageFailure(_this.errorMatcher(error))
            : new DaffCartAddressUpdateFailure(_this.errorMatcher(error))); }))); })));
    }
    DaffCartAddressEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartAddressEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartAddressDriver,] }] },
        { type: DaffCartStorageService }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], DaffCartAddressEffects.prototype, "update$", void 0);
    return DaffCartAddressEffects;
}());
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
var DaffCartResolverEffects = /** @class */ (function () {
    function DaffCartResolverEffects(actions$, errorMatcher, cartStorage, driver) {
        var _this = this;
        this.actions$ = actions$;
        this.errorMatcher = errorMatcher;
        this.cartStorage = cartStorage;
        this.driver = driver;
        this.onResolveCart = (/**
         * @return {?}
         */
        function () { return _this.actions$.pipe(ofType(DaffCartActionTypes.ResolveCartAction), switchMap((/**
         * @return {?}
         */
        function () {
            return of(null).pipe(map((/**
             * @return {?}
             */
            function () { return _this.cartStorage.getCartId(); })), switchMap((/**
             * @param {?} cartId
             * @return {?}
             */
            function (cartId) {
                return cartId ? of({ id: cartId }) : _this.driver.create();
            })), switchMap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var id = _a.id;
                return _this.driver.get(id);
            })), map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffResolveCartSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                switch (true) {
                    case error instanceof DaffServerSideStorageError:
                        return of(new DaffResolveCartServerSide());
                    case error instanceof DaffStorageServiceError:
                        error.message =
                            'Cart resolution failed while attempting to retrieve the cart ID from storage.';
                        return of(new DaffResolveCartFailure(_this.errorMatcher(error)));
                    case error instanceof DaffCartNotFoundError:
                        return _this.driver.create().pipe(switchMap((/**
                         * @param {?} __0
                         * @return {?}
                         */
                        function (_a) {
                            var id = _a.id;
                            return _this.driver.get(id);
                        })), map((/**
                         * @param {?} resp
                         * @return {?}
                         */
                        function (resp) { return new DaffResolveCartSuccess(resp); })), catchError((/**
                         * @param {?} innerError
                         * @return {?}
                         */
                        function (innerError) {
                            innerError.message =
                                'Cart resolution failed after attempting to generate and load a new cart.';
                            return of(new DaffResolveCartFailure(_this.errorMatcher(innerError)));
                        })));
                    default:
                        error.message = 'Cart resolution has failed.';
                        return of(new DaffResolveCartFailure(_this.errorMatcher(error)));
                }
            })));
        }))); });
    }
    /**
     * @return {?}
     */
    DaffCartResolverEffects.prototype.ngrxOnInitEffects = /**
     * @return {?}
     */
    function () {
        return new DaffResolveCart();
    };
    DaffCartResolverEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffCartResolverEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: Function, decorators: [{ type: Inject, args: [DAFF_CART_ERROR_MATCHER,] }] },
        { type: DaffCartStorageService },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCartDriver,] }] }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], DaffCartResolverEffects.prototype, "onResolveCart", void 0);
    return DaffCartResolverEffects;
}());
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
var DaffCartStateModule = /** @class */ (function () {
    function DaffCartStateModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    DaffCartStateModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = (/** @type {?} */ ({})); }
        return {
            ngModule: DaffCartStateModule,
            providers: [
                {
                    provide: DAFF_CART_STATE_CONFIG,
                    useValue: __assign({}, daffCartStateConfigurationDefault, config)
                }
            ]
        };
    };
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
    return DaffCartStateModule;
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

export { DAFF_CART_STATE_CONFIG, DaffAddToCart, DaffAddToCartFailure, DaffAddToCartSuccess, DaffBillingAddressGuard, DaffCartActionTypes, DaffCartAddressActionTypes, DaffCartAddressUpdate, DaffCartAddressUpdateFailure, DaffCartAddressUpdateSuccess, DaffCartBillingAddressActionTypes, DaffCartBillingAddressGuardRedirectUrl, DaffCartBillingAddressLoad, DaffCartBillingAddressLoadFailure, DaffCartBillingAddressLoadSuccess, DaffCartBillingAddressUpdate, DaffCartBillingAddressUpdateFailure, DaffCartBillingAddressUpdateSuccess, DaffCartClear, DaffCartClearFailure, DaffCartClearSuccess, DaffCartCouponActionTypes, DaffCartCouponApply, DaffCartCouponApplyFailure, DaffCartCouponApplySuccess, DaffCartCouponList, DaffCartCouponListFailure, DaffCartCouponListSuccess, DaffCartCouponRemove, DaffCartCouponRemoveAll, DaffCartCouponRemoveAllFailure, DaffCartCouponRemoveAllSuccess, DaffCartCouponRemoveFailure, DaffCartCouponRemoveSuccess, DaffCartCreate, DaffCartCreateFailure, DaffCartCreateSuccess, DaffCartFacade, DaffCartItemActionTypes, DaffCartItemAdd, DaffCartItemAddFailure, DaffCartItemAddSuccess, DaffCartItemDelete, DaffCartItemDeleteFailure, DaffCartItemDeleteSuccess, DaffCartItemList, DaffCartItemListFailure, DaffCartItemListSuccess, DaffCartItemLoad, DaffCartItemLoadFailure, DaffCartItemLoadSuccess, DaffCartItemLoadingState, DaffCartItemStateDebounceTime, DaffCartItemStateEnum, DaffCartItemStateReset, DaffCartItemUpdate, DaffCartItemUpdateFailure, DaffCartItemUpdateSuccess, DaffCartItemsGuard, DaffCartItemsGuardRedirectUrl, DaffCartLoad, DaffCartLoadFailure, DaffCartLoadSuccess, DaffCartOperationType, DaffCartOrderActionTypes, DaffCartOrderResultGuardRedirectUrl, DaffCartPaymentActionTypes, DaffCartPaymentLoad, DaffCartPaymentLoadFailure, DaffCartPaymentLoadSuccess, DaffCartPaymentMethodAdd, DaffCartPaymentMethodGuardRedirectUrl, DaffCartPaymentMethodsActionTypes, DaffCartPaymentMethodsLoad, DaffCartPaymentMethodsLoadFailure, DaffCartPaymentMethodsLoadSuccess, DaffCartPaymentRemove, DaffCartPaymentRemoveFailure, DaffCartPaymentRemoveSuccess, DaffCartPaymentUpdate, DaffCartPaymentUpdateFailure, DaffCartPaymentUpdateSuccess, DaffCartPaymentUpdateWithBilling, DaffCartPaymentUpdateWithBillingFailure, DaffCartPaymentUpdateWithBillingSuccess, DaffCartPlaceOrder, DaffCartPlaceOrderFailure, DaffCartPlaceOrderSuccess, DaffCartResolveState, DaffCartResolver, DaffCartResolverRedirectUrl, DaffCartShippingAddressActionTypes, DaffCartShippingAddressGuardRedirectUrl, DaffCartShippingAddressLoad, DaffCartShippingAddressLoadFailure, DaffCartShippingAddressLoadSuccess, DaffCartShippingAddressUpdate, DaffCartShippingAddressUpdateFailure, DaffCartShippingAddressUpdateSuccess, DaffCartShippingInformationActionTypes, DaffCartShippingInformationDelete, DaffCartShippingInformationDeleteFailure, DaffCartShippingInformationDeleteSuccess, DaffCartShippingInformationLoad, DaffCartShippingInformationLoadFailure, DaffCartShippingInformationLoadSuccess, DaffCartShippingInformationUpdate, DaffCartShippingInformationUpdateFailure, DaffCartShippingInformationUpdateSuccess, DaffCartShippingMethodGuardRedirectUrl, DaffCartShippingMethodsActionTypes, DaffCartShippingMethodsLoad, DaffCartShippingMethodsLoadFailure, DaffCartShippingMethodsLoadSuccess, DaffCartStateModule, DaffCartStorageFailure, DaffEmptyCartResolver, DaffEmptyCartResolverRedirectUrl, DaffOrderResultGuard, DaffPaymentMethodGuard, DaffResolveCart, DaffResolveCartFailure, DaffResolveCartServerSide, DaffResolveCartSuccess, DaffResolvedCartGuard, DaffShippingAddressGuard, DaffShippingMethodGuard, daffCartOrderInitialState, daffCartOrderReducer, daffCartReducer, daffCartReducers, getDaffCartSelectors, initialState, initializeLoadingSetter, composeReducers as ɵa, cartReducer as ɵb, cartItemReducer as ɵc, cartBillingAddressReducer as ɵd, cartShippingAddressReducer as ɵe, cartShippingMethodsReducer as ɵf, cartShippingInformationReducer as ɵg, cartPaymentReducer as ɵh, cartPaymentMethodsReducer as ɵi, cartCouponReducer as ɵj, cartResolveReducer as ɵk, daffCartItemEntitiesReducer as ɵl, DaffCartEffects as ɵm, DaffCartItemEffects as ɵn, DaffCartBillingAddressEffects as ɵo, DaffCartShippingAddressEffects as ɵp, DaffCartAddressEffects as ɵq, DaffCartShippingInformationEffects as ɵr, DaffCartShippingMethodsEffects as ɵs, DaffCartPaymentEffects as ɵt, DaffCartPaymentMethodsEffects as ɵu, DaffCartOrderEffects as ɵv, DaffCartCouponEffects as ɵw, DaffCartResolverEffects as ɵx };
//# sourceMappingURL=daffodil-cart-state.js.map
