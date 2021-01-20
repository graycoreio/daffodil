import { Component, NgModule, Injectable, ɵɵdefineInjectable, ɵɵinject, InjectionToken, Inject } from '@angular/core';
import { createFeatureSelector, createSelector, select, Store, StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { __assign, __decorate, __metadata } from 'tslib';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffShippingActionTypes = {
    UpdateShippingAddressAction: '[Shipping] Update Shipping Address Action',
    SelectShippingOptionAction: '[Shipping] Select Shipping Option Action',
};
var DaffUpdateShippingAddress = /** @class */ (function () {
    function DaffUpdateShippingAddress(payload) {
        this.payload = payload;
        this.type = DaffShippingActionTypes.UpdateShippingAddressAction;
    }
    return DaffUpdateShippingAddress;
}());
if (false) {
    /** @type {?} */
    DaffUpdateShippingAddress.prototype.type;
    /** @type {?} */
    DaffUpdateShippingAddress.prototype.payload;
}
var DaffSelectShippingOption = /** @class */ (function () {
    function DaffSelectShippingOption(payload) {
        this.payload = payload;
        this.type = DaffShippingActionTypes.SelectShippingOptionAction;
    }
    return DaffSelectShippingOption;
}());
if (false) {
    /** @type {?} */
    DaffSelectShippingOption.prototype.type;
    /** @type {?} */
    DaffSelectShippingOption.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Shipping Feature State
 * @type {?}
 */
var selectShippingFeatureState = createFeatureSelector('shipping');
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.shipping; };
/**
 * Shipping State
 * @type {?}
 */
var selectShippingState = createSelector(selectShippingFeatureState, (ɵ0));
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.shippingAddress; };
/** @type {?} */
var selectShippingAddress = createSelector(selectShippingState, (ɵ1));
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.selectedShippingOptionId; };
/** @type {?} */
var selectShippingOptionId = createSelector(selectShippingState, (ɵ2));
var ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return !!state; };
/** @type {?} */
var selectIsShippingAddressValid = createSelector(selectShippingAddress, (ɵ3));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShippingContainer = /** @class */ (function () {
    function ShippingContainer(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ShippingContainer.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.shippingAddress$ = this.store.pipe(select(selectShippingAddress));
        this.selectedShippingOptionId$ = this.store.pipe(select(selectShippingOptionId));
        this.isShippingAddressValid$ = this.store.pipe(select(selectIsShippingAddressValid));
    };
    /**
     * @param {?} address
     * @return {?}
     */
    ShippingContainer.prototype.updateShippingAddress = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.store.dispatch(new DaffUpdateShippingAddress(address));
    };
    /**
     * @param {?} optionId
     * @return {?}
     */
    ShippingContainer.prototype.selectShippingOption = /**
     * @param {?} optionId
     * @return {?}
     */
    function (optionId) {
        this.store.dispatch(new DaffSelectShippingOption(optionId));
    };
    ShippingContainer.decorators = [
        { type: Component, args: [{
                    selector: '[shipping-container]',
                    template: '<ng-content></ng-content>',
                    exportAs: 'ShippingContainer'
                }] }
    ];
    /** @nocollapse */
    ShippingContainer.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return ShippingContainer;
}());
if (false) {
    /** @type {?} */
    ShippingContainer.prototype.shippingAddress$;
    /** @type {?} */
    ShippingContainer.prototype.selectedShippingOptionId$;
    /** @type {?} */
    ShippingContainer.prototype.isShippingAddressValid$;
    /** @type {?} */
    ShippingContainer.prototype.isShippingOptionSelected$;
    /**
     * @type {?}
     * @private
     */
    ShippingContainer.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Order Feature State
 * @deprecated
 * @type {?}
 */
var selectOrderFeatureState = createFeatureSelector('order');
var ɵ0$1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.order; };
/**
 * Order State
 * @deprecated
 * @type {?}
 */
var selectOrderState = createSelector(selectOrderFeatureState, (ɵ0$1))
/**
 * @deprecated
 */
;
var ɵ1$1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.order; };
/**
 * @deprecated
 * @type {?}
 */
var selectOrder = createSelector(selectOrderState, (ɵ1$1))
/**
 * @deprecated
 */
;
var ɵ2$1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.loading; };
/**
 * @deprecated
 * @type {?}
 */
var selectLoading = createSelector(selectOrderState, (ɵ2$1))
/**
 * @deprecated
 */
;
var ɵ3$1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.errors; };
/**
 * @deprecated
 * @type {?}
 */
var selectErrors = createSelector(selectOrderState, (ɵ3$1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
var OrderContainer = /** @class */ (function () {
    function OrderContainer(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    OrderContainer.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.order$ = this.store.pipe(select(selectOrder));
        this.loading$ = this.store.pipe(select(selectLoading));
    };
    OrderContainer.decorators = [
        { type: Component, args: [{
                    selector: '[order-container]',
                    template: '<ng-content></ng-content>',
                    exportAs: 'OrderContainer'
                }] }
    ];
    /** @nocollapse */
    OrderContainer.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return OrderContainer;
}());
if (false) {
    /** @type {?} */
    OrderContainer.prototype.order$;
    /** @type {?} */
    OrderContainer.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    OrderContainer.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffPaymentActionTypes = {
    UpdatePaymentInfoAction: '[Payment] Update Payment Info Action',
};
var DaffUpdatePaymentInfo = /** @class */ (function () {
    function DaffUpdatePaymentInfo(payload) {
        this.payload = payload;
        this.type = DaffPaymentActionTypes.UpdatePaymentInfoAction;
    }
    return DaffUpdatePaymentInfo;
}());
if (false) {
    /** @type {?} */
    DaffUpdatePaymentInfo.prototype.type;
    /** @type {?} */
    DaffUpdatePaymentInfo.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState = {
    paymentInfo: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffPaymentReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case DaffPaymentActionTypes.UpdatePaymentInfoAction:
            return __assign({}, state, { paymentInfo: action.payload });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var daffPaymentReducers = {
    payment: daffPaymentReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffPaymentStateModule = /** @class */ (function () {
    function DaffPaymentStateModule() {
    }
    DaffPaymentStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature('payment', daffPaymentReducers)
                    ]
                },] }
    ];
    return DaffPaymentStateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffPaymentModule = /** @class */ (function () {
    function DaffPaymentModule() {
    }
    DaffPaymentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        /**
                         * Ngrx/store
                         */
                        DaffPaymentStateModule,
                    ]
                },] }
    ];
    return DaffPaymentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Payment Feature State
 * @type {?}
 */
var selectPaymentFeatureState = createFeatureSelector('payment');
var ɵ0$2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.payment; };
/**
 * Payment State
 * @type {?}
 */
var selectPaymentState = createSelector(selectPaymentFeatureState, (ɵ0$2));
var ɵ1$2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.paymentInfo; };
/** @type {?} */
var selectPaymentInfo = createSelector(selectPaymentState, (ɵ1$2));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A facade for accessing state for customer payment information.
 */
var DaffPaymentFacade = /** @class */ (function () {
    function DaffPaymentFacade(store) {
        this.store = store;
        this.paymentInfo$ = this.store.pipe(select(selectPaymentInfo));
    }
    /**
     * Dispatches the given action.
     * @param action action to dispatch.
     */
    /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    DaffPaymentFacade.prototype.dispatch = /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffPaymentFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: DaffPaymentModule
                },] }
    ];
    /** @nocollapse */
    DaffPaymentFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffPaymentFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffPaymentFacade_Factory() { return new DaffPaymentFacade(ɵɵinject(Store)); }, token: DaffPaymentFacade, providedIn: DaffPaymentModule });
    return DaffPaymentFacade;
}());
if (false) {
    /**
     * The payment information for a customer.
     * @type {?}
     */
    DaffPaymentFacade.prototype.paymentInfo$;
    /**
     * @type {?}
     * @private
     */
    DaffPaymentFacade.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DaffPaymentDriver = new InjectionToken('DaffPaymentDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DaffOrderDriver = new InjectionToken('DaffOrderDriver');
/**
 * Query order objects accessible by the logged-in user.
 * @deprecated
 * @record
 * @template T
 */
function DaffOrderServiceInterface() { }
if (false) {
    /**
     * Get an order object with the specified order ID.
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderServiceInterface.prototype.get = function (orderId) { };
    /**
     * List all order objects for the logged-in user.
     * @return {?}
     */
    DaffOrderServiceInterface.prototype.list = function () { };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DaffPaymentTransformer = new InjectionToken('DaffPaymentTransformer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffBillingActionTypes = {
    UpdateBillingAddressAction: '[Billing] Update Billing Address Action',
    UpdatePaymentInfoAction: '[Billing] Update Payment Info Action',
    ToggleBillingAddressIsShippingAddressAction: '[Billing] Billing Address Is Shipping Address Action',
};
var DaffUpdateBillingAddress = /** @class */ (function () {
    function DaffUpdateBillingAddress(payload) {
        this.payload = payload;
        this.type = DaffBillingActionTypes.UpdateBillingAddressAction;
    }
    return DaffUpdateBillingAddress;
}());
if (false) {
    /** @type {?} */
    DaffUpdateBillingAddress.prototype.type;
    /** @type {?} */
    DaffUpdateBillingAddress.prototype.payload;
}
var DaffUpdatePaymentInfo$1 = /** @class */ (function () {
    function DaffUpdatePaymentInfo(payload) {
        this.payload = payload;
        this.type = DaffBillingActionTypes.UpdatePaymentInfoAction;
    }
    return DaffUpdatePaymentInfo;
}());
if (false) {
    /** @type {?} */
    DaffUpdatePaymentInfo$1.prototype.type;
    /** @type {?} */
    DaffUpdatePaymentInfo$1.prototype.payload;
}
var DaffToggleBillingAddressIsShippingAddress = /** @class */ (function () {
    function DaffToggleBillingAddressIsShippingAddress() {
        this.type = DaffBillingActionTypes.ToggleBillingAddressIsShippingAddressAction;
    }
    return DaffToggleBillingAddressIsShippingAddress;
}());
if (false) {
    /** @type {?} */
    DaffToggleBillingAddressIsShippingAddress.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Billing Feature State
 * @type {?}
 */
var selectBillingFeatureState = createFeatureSelector('billing');
var ɵ0$3 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.billing; };
/**
 * Billing State
 * @type {?}
 */
var selectBillingState = createSelector(selectBillingFeatureState, (ɵ0$3));
var ɵ1$3 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.billingAddress; };
/** @type {?} */
var selectBillingAddress = createSelector(selectBillingState, (ɵ1$3));
var ɵ2$2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.billingAddressIsShippingAddress; };
/** @type {?} */
var selectBillingAddressIsShippingAddress = createSelector(selectBillingState, (ɵ2$2));
var ɵ3$2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.paymentInfo; };
/** @type {?} */
var selectPaymentInfo$1 = createSelector(selectBillingState, (ɵ3$2));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$1 = {
    billingAddress: null,
    billingAddressIsShippingAddress: false,
    paymentInfo: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffBillingReducer(state, action) {
    if (state === void 0) { state = initialState$1; }
    switch (action.type) {
        case DaffBillingActionTypes.UpdateBillingAddressAction:
            return __assign({}, state, { billingAddress: action.payload });
        case DaffBillingActionTypes.ToggleBillingAddressIsShippingAddressAction:
            return __assign({}, state, { billingAddress: null, billingAddressIsShippingAddress: !state.billingAddressIsShippingAddress });
        case DaffBillingActionTypes.UpdatePaymentInfoAction:
            return __assign({}, state, { paymentInfo: action.payload });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var daffBillingReducers = {
    billing: daffBillingReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffBillingStateModule = /** @class */ (function () {
    function DaffBillingStateModule() {
    }
    DaffBillingStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature('billing', daffBillingReducers)
                    ]
                },] }
    ];
    return DaffBillingStateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BillingContainer = /** @class */ (function () {
    function BillingContainer(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    BillingContainer.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.billingAddress$ = this.store.pipe(select(selectBillingAddress));
        this.billingAddressIsShippingAddress$ = this.store.pipe(select(selectBillingAddressIsShippingAddress));
        this.paymentInfo$ = this.store.pipe(select(selectPaymentInfo$1));
    };
    /**
     * @param {?} address
     * @return {?}
     */
    BillingContainer.prototype.updateBillingAddress = /**
     * @param {?} address
     * @return {?}
     */
    function (address) {
        this.store.dispatch(new DaffUpdateBillingAddress(address));
    };
    /**
     * @return {?}
     */
    BillingContainer.prototype.toggleBillingAddressIsShippingAddress = /**
     * @return {?}
     */
    function () {
        this.store.dispatch(new DaffToggleBillingAddressIsShippingAddress());
    };
    /**
     * @param {?} info
     * @return {?}
     */
    BillingContainer.prototype.updatePaymentInfo = /**
     * @param {?} info
     * @return {?}
     */
    function (info) {
        this.store.dispatch(new DaffUpdatePaymentInfo$1(info));
    };
    BillingContainer.decorators = [
        { type: Component, args: [{
                    selector: '[billing-container]',
                    template: '<ng-content></ng-content>',
                    exportAs: 'BillingContainer'
                }] }
    ];
    /** @nocollapse */
    BillingContainer.ctorParameters = function () { return [
        { type: Store }
    ]; };
    return BillingContainer;
}());
if (false) {
    /** @type {?} */
    BillingContainer.prototype.billingAddress$;
    /** @type {?} */
    BillingContainer.prototype.billingAddressIsShippingAddress$;
    /** @type {?} */
    BillingContainer.prototype.paymentInfo$;
    /**
     * @type {?}
     * @private
     */
    BillingContainer.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffBillingModule = /** @class */ (function () {
    function DaffBillingModule() {
    }
    DaffBillingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        /**
                         * Ngrx/store
                         */
                        DaffBillingStateModule,
                    ],
                    declarations: [
                        BillingContainer
                    ],
                    exports: [
                        BillingContainer
                    ]
                },] }
    ];
    return DaffBillingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A facade for accessing state for the billing information of a customer
 */
var DaffBillingFacade = /** @class */ (function () {
    function DaffBillingFacade(store) {
        this.store = store;
        this.billingAddress$ = this.store.pipe(select(selectBillingAddress));
        this.billingAddressIsShippingAddress$ = this.store.pipe(select(selectBillingAddressIsShippingAddress));
        this.paymentInfo$ = this.store.pipe(select(selectPaymentInfo$1));
    }
    /**
     * Dispatches the given action.
     * @param action action to dispatch.
     */
    /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    DaffBillingFacade.prototype.dispatch = /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffBillingFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: DaffBillingModule
                },] }
    ];
    /** @nocollapse */
    DaffBillingFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffBillingFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffBillingFacade_Factory() { return new DaffBillingFacade(ɵɵinject(Store)); }, token: DaffBillingFacade, providedIn: DaffBillingModule });
    return DaffBillingFacade;
}());
if (false) {
    /**
     * The billing address for a customer.
     * @type {?}
     */
    DaffBillingFacade.prototype.billingAddress$;
    /**
     * Whether or not the billing address is the same as the shipping address.
     * @type {?}
     */
    DaffBillingFacade.prototype.billingAddressIsShippingAddress$;
    /**
     * The payment information for a customer.
     * @type {?}
     */
    DaffBillingFacade.prototype.paymentInfo$;
    /**
     * @type {?}
     * @private
     */
    DaffBillingFacade.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var initialState$2 = {
    shippingAddress: null,
    selectedShippingOptionId: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffShippingReducer(state, action) {
    if (state === void 0) { state = initialState$2; }
    switch (action.type) {
        case DaffShippingActionTypes.UpdateShippingAddressAction:
            return __assign({}, state, { shippingAddress: action.payload });
        case DaffShippingActionTypes.SelectShippingOptionAction:
            return __assign({}, state, { selectedShippingOptionId: action.payload });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var daffShippingReducers = {
    shipping: daffShippingReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffShippingStateModule = /** @class */ (function () {
    function DaffShippingStateModule() {
    }
    DaffShippingStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature('shipping', daffShippingReducers)
                    ]
                },] }
    ];
    return DaffShippingStateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DaffShippingModule = /** @class */ (function () {
    function DaffShippingModule() {
    }
    DaffShippingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        /**
                         * Ngrx/store
                         */
                        DaffShippingStateModule,
                    ],
                    declarations: [
                        ShippingContainer
                    ],
                    exports: [
                        ShippingContainer
                    ]
                },] }
    ];
    return DaffShippingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A facade for accessing state for shipping information.
 */
var DaffShippingFacade = /** @class */ (function () {
    function DaffShippingFacade(store) {
        this.store = store;
        this.shippingAddress$ = this.store.pipe(select(selectShippingAddress));
        this.selectedShippingOptionId$ = this.store.pipe(select(selectShippingOptionId));
        this.isShippingAddressValid$ = this.store.pipe(select(selectIsShippingAddressValid));
    }
    /**
     * Dispatches the given action.
     * @param action action to dispatch.
     */
    /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    DaffShippingFacade.prototype.dispatch = /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffShippingFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: DaffShippingModule
                },] }
    ];
    /** @nocollapse */
    DaffShippingFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffShippingFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffShippingFacade_Factory() { return new DaffShippingFacade(ɵɵinject(Store)); }, token: DaffShippingFacade, providedIn: DaffShippingModule });
    return DaffShippingFacade;
}());
if (false) {
    /**
     * The shipping address for the customer.
     * @type {?}
     */
    DaffShippingFacade.prototype.shippingAddress$;
    /**
     * The selected shipping option id.
     * @type {?}
     */
    DaffShippingFacade.prototype.selectedShippingOptionId$;
    /**
     * Is the shipping address valid.
     * @type {?}
     */
    DaffShippingFacade.prototype.isShippingAddressValid$;
    /**
     * @type {?}
     * @private
     */
    DaffShippingFacade.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffOrderActionTypes = {
    PlaceOrderAction: '[Order] Place Order Action',
    PlaceOrderSuccessAction: '[Order] Place Order Success Action',
    PlaceOrderFailureAction: '[Order] Place Order Failure Action',
};
/** @enum {string} */
var OrderActionTypes = {
    PlaceOrderAction: '[Order] Place Order Action',
    PlaceOrderSuccessAction: '[Order] Place Order Success Action',
    PlaceOrderFailureAction: '[Order] Place Order Failure Action',
};
/**
 * @deprecated
 */
var  /**
 * @deprecated
 */
PlaceOrder = /** @class */ (function () {
    function PlaceOrder(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.PlaceOrderAction;
    }
    return PlaceOrder;
}());
if (false) {
    /** @type {?} */
    PlaceOrder.prototype.type;
    /** @type {?} */
    PlaceOrder.prototype.payload;
}
/**
 * @deprecated
 */
var  /**
 * @deprecated
 */
DaffPlaceOrder = /** @class */ (function () {
    function DaffPlaceOrder(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.PlaceOrderAction;
    }
    return DaffPlaceOrder;
}());
if (false) {
    /** @type {?} */
    DaffPlaceOrder.prototype.type;
    /** @type {?} */
    DaffPlaceOrder.prototype.payload;
}
/**
 * @deprecated
 */
var  /**
 * @deprecated
 */
DaffPlaceOrderSuccess = /** @class */ (function () {
    function DaffPlaceOrderSuccess(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.PlaceOrderSuccessAction;
    }
    return DaffPlaceOrderSuccess;
}());
if (false) {
    /** @type {?} */
    DaffPlaceOrderSuccess.prototype.type;
    /** @type {?} */
    DaffPlaceOrderSuccess.prototype.payload;
}
/**
 * @deprecated
 */
var  /**
 * @deprecated
 */
DaffPlaceOrderFailure = /** @class */ (function () {
    function DaffPlaceOrderFailure(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.PlaceOrderFailureAction;
    }
    return DaffPlaceOrderFailure;
}());
if (false) {
    /** @type {?} */
    DaffPlaceOrderFailure.prototype.type;
    /** @type {?} */
    DaffPlaceOrderFailure.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 * @type {?}
 */
var initialState$3 = {
    order: null,
    loading: false,
    errors: []
};
/**
 * @deprecated
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffOrderReducer(state, action) {
    if (state === void 0) { state = initialState$3; }
    switch (action.type) {
        case DaffOrderActionTypes.PlaceOrderAction:
            return __assign({}, state, { loading: true });
        case DaffOrderActionTypes.PlaceOrderSuccessAction:
            return __assign({}, state, { order: action.payload, loading: false });
        case DaffOrderActionTypes.PlaceOrderFailureAction:
            return __assign({}, state, { errors: [action.payload], loading: false });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 * @type {?}
 */
var daffOrderReducers = {
    order: daffOrderReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DaffCheckoutDriver = new InjectionToken('DaffCheckoutDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
var OrderEffects = /** @class */ (function () {
    function OrderEffects(actions$, checkoutDriver) {
        var _this = this;
        this.actions$ = actions$;
        this.checkoutDriver = checkoutDriver;
        this.onPlaceOrder$ = this.actions$.pipe(ofType(DaffOrderActionTypes.PlaceOrderAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.checkoutDriver.placeOrder(action.payload.id.toString())
                .pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) {
                return new DaffPlaceOrderSuccess(resp);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new DaffPlaceOrderFailure('Failed to place order'));
            })));
        })));
    }
    OrderEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrderEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffCheckoutDriver,] }] }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Observable)
    ], OrderEffects.prototype, "onPlaceOrder$", void 0);
    return OrderEffects;
}());
if (false) {
    /** @type {?} */
    OrderEffects.prototype.onPlaceOrder$;
    /**
     * @type {?}
     * @private
     */
    OrderEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    OrderEffects.prototype.checkoutDriver;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
var DaffOrderStateModule = /** @class */ (function () {
    function DaffOrderStateModule() {
    }
    DaffOrderStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature('order', daffOrderReducers),
                        EffectsModule.forFeature([
                            OrderEffects
                        ])
                    ]
                },] }
    ];
    return DaffOrderStateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
var DaffOrderModule = /** @class */ (function () {
    function DaffOrderModule() {
    }
    DaffOrderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        /**
                         * Ngrx/store
                         */
                        DaffOrderStateModule,
                    ],
                    declarations: [
                        OrderContainer
                    ],
                    exports: [
                        OrderContainer
                    ]
                },] }
    ];
    return DaffOrderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A facade for accessing state for the currently selected category.
 */
/**
 * @deprecated
 */
var DaffOrderFacade = /** @class */ (function () {
    function DaffOrderFacade(store) {
        this.store = store;
        this.order$ = this.store.pipe(select(selectOrder));
        this.loading$ = this.store.pipe(select(selectLoading));
        this.errors$ = this.store.pipe(select(selectErrors));
    }
    /**
     * Dispatches the given action.
     * @param action action to dispatch.
     */
    /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    DaffOrderFacade.prototype.dispatch = /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffOrderFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: DaffOrderModule
                },] }
    ];
    /** @nocollapse */
    DaffOrderFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffOrderFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderFacade_Factory() { return new DaffOrderFacade(ɵɵinject(Store)); }, token: DaffOrderFacade, providedIn: DaffOrderModule });
    return DaffOrderFacade;
}());
if (false) {
    /**
     * The current order.
     * @type {?}
     */
    DaffOrderFacade.prototype.order$;
    /**
     * The loading state for the current order.
     * @type {?}
     */
    DaffOrderFacade.prototype.loading$;
    /**
     * Any errors involved in loading the order.
     * @type {?}
     */
    DaffOrderFacade.prototype.errors$;
    /**
     * @type {?}
     * @private
     */
    DaffOrderFacade.prototype.store;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StateCheckoutModule = /** @class */ (function () {
    function StateCheckoutModule() {
    }
    StateCheckoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        DaffShippingModule,
                        DaffPaymentModule,
                        DaffBillingModule,
                        DaffOrderModule
                    ],
                    exports: [
                        DaffShippingModule,
                        DaffPaymentModule,
                        DaffBillingModule,
                        DaffOrderModule
                    ]
                },] }
    ];
    return StateCheckoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffBillingActionTypes, DaffBillingFacade, DaffBillingModule, DaffCheckoutDriver, DaffOrderActionTypes, DaffOrderDriver, DaffOrderFacade, DaffOrderModule, DaffPaymentActionTypes, DaffPaymentDriver, DaffPaymentFacade, DaffPaymentTransformer, DaffPlaceOrder, DaffPlaceOrderFailure, DaffPlaceOrderSuccess, DaffSelectShippingOption, DaffShippingActionTypes, DaffShippingFacade, DaffShippingModule, DaffToggleBillingAddressIsShippingAddress, DaffUpdateBillingAddress, DaffUpdatePaymentInfo, DaffUpdateShippingAddress, OrderActionTypes, OrderContainer, PlaceOrder, ShippingContainer, StateCheckoutModule, daffBillingReducer, daffBillingReducers, daffOrderReducer, daffOrderReducers, daffPaymentReducers, daffShippingReducer, daffShippingReducers, selectBillingAddress, selectBillingAddressIsShippingAddress, selectBillingFeatureState, selectBillingState, selectErrors, selectIsShippingAddressValid, selectLoading, selectOrder, selectOrderFeatureState, selectOrderState, selectPaymentFeatureState, selectPaymentInfo, selectPaymentState, selectShippingAddress, selectShippingFeatureState, selectShippingOptionId, selectShippingState, DaffPaymentModule as ɵa, DaffPaymentStateModule as ɵb, daffPaymentReducer as ɵc, DaffBillingStateModule as ɵe, BillingContainer as ɵf, DaffShippingStateModule as ɵg, DaffOrderStateModule as ɵh, OrderEffects as ɵi };
//# sourceMappingURL=daffodil-checkout.js.map
