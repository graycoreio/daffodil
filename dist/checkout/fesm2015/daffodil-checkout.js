import { Component, NgModule, Injectable, ɵɵdefineInjectable, ɵɵinject, InjectionToken, Inject } from '@angular/core';
import { createFeatureSelector, createSelector, select, Store, StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { __decorate, __metadata } from 'tslib';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffShippingActionTypes = {
    UpdateShippingAddressAction: '[Shipping] Update Shipping Address Action',
    SelectShippingOptionAction: '[Shipping] Select Shipping Option Action',
};
class DaffUpdateShippingAddress {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffShippingActionTypes.UpdateShippingAddressAction;
    }
}
if (false) {
    /** @type {?} */
    DaffUpdateShippingAddress.prototype.type;
    /** @type {?} */
    DaffUpdateShippingAddress.prototype.payload;
}
class DaffSelectShippingOption {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffShippingActionTypes.SelectShippingOptionAction;
    }
}
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
const selectShippingFeatureState = createFeatureSelector('shipping');
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.shipping;
/**
 * Shipping State
 * @type {?}
 */
const selectShippingState = createSelector(selectShippingFeatureState, (ɵ0));
const ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.shippingAddress;
/** @type {?} */
const selectShippingAddress = createSelector(selectShippingState, (ɵ1));
const ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.selectedShippingOptionId;
/** @type {?} */
const selectShippingOptionId = createSelector(selectShippingState, (ɵ2));
const ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
(state) => !!state;
/** @type {?} */
const selectIsShippingAddressValid = createSelector(selectShippingAddress, (ɵ3));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShippingContainer {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.shippingAddress$ = this.store.pipe(select(selectShippingAddress));
        this.selectedShippingOptionId$ = this.store.pipe(select(selectShippingOptionId));
        this.isShippingAddressValid$ = this.store.pipe(select(selectIsShippingAddressValid));
    }
    /**
     * @param {?} address
     * @return {?}
     */
    updateShippingAddress(address) {
        this.store.dispatch(new DaffUpdateShippingAddress(address));
    }
    /**
     * @param {?} optionId
     * @return {?}
     */
    selectShippingOption(optionId) {
        this.store.dispatch(new DaffSelectShippingOption(optionId));
    }
}
ShippingContainer.decorators = [
    { type: Component, args: [{
                selector: '[shipping-container]',
                template: '<ng-content></ng-content>',
                exportAs: 'ShippingContainer'
            }] }
];
/** @nocollapse */
ShippingContainer.ctorParameters = () => [
    { type: Store }
];
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
const selectOrderFeatureState = createFeatureSelector('order');
const ɵ0$1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.order;
/**
 * Order State
 * @deprecated
 * @type {?}
 */
const selectOrderState = createSelector(selectOrderFeatureState, (ɵ0$1))
/**
 * @deprecated
 */
;
const ɵ1$1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.order;
/**
 * @deprecated
 * @type {?}
 */
const selectOrder = createSelector(selectOrderState, (ɵ1$1))
/**
 * @deprecated
 */
;
const ɵ2$1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.loading;
/**
 * @deprecated
 * @type {?}
 */
const selectLoading = createSelector(selectOrderState, (ɵ2$1))
/**
 * @deprecated
 */
;
const ɵ3$1 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.errors;
/**
 * @deprecated
 * @type {?}
 */
const selectErrors = createSelector(selectOrderState, (ɵ3$1));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
class OrderContainer {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.store.pipe(select(selectOrder));
        this.loading$ = this.store.pipe(select(selectLoading));
    }
}
OrderContainer.decorators = [
    { type: Component, args: [{
                selector: '[order-container]',
                template: '<ng-content></ng-content>',
                exportAs: 'OrderContainer'
            }] }
];
/** @nocollapse */
OrderContainer.ctorParameters = () => [
    { type: Store }
];
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
const DaffPaymentActionTypes = {
    UpdatePaymentInfoAction: '[Payment] Update Payment Info Action',
};
class DaffUpdatePaymentInfo {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffPaymentActionTypes.UpdatePaymentInfoAction;
    }
}
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
const initialState = {
    paymentInfo: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffPaymentReducer(state = initialState, action) {
    switch (action.type) {
        case DaffPaymentActionTypes.UpdatePaymentInfoAction:
            return Object.assign({}, state, { paymentInfo: action.payload });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffPaymentReducers = {
    payment: daffPaymentReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffPaymentStateModule {
}
DaffPaymentStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature('payment', daffPaymentReducers)
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffPaymentModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Payment Feature State
 * @type {?}
 */
const selectPaymentFeatureState = createFeatureSelector('payment');
const ɵ0$2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.payment;
/**
 * Payment State
 * @type {?}
 */
const selectPaymentState = createSelector(selectPaymentFeatureState, (ɵ0$2));
const ɵ1$2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.paymentInfo;
/** @type {?} */
const selectPaymentInfo = createSelector(selectPaymentState, (ɵ1$2));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A facade for accessing state for customer payment information.
 */
class DaffPaymentFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.paymentInfo$ = this.store.pipe(select(selectPaymentInfo));
    }
    /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffPaymentFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: DaffPaymentModule
            },] }
];
/** @nocollapse */
DaffPaymentFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffPaymentFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffPaymentFacade_Factory() { return new DaffPaymentFacade(ɵɵinject(Store)); }, token: DaffPaymentFacade, providedIn: DaffPaymentModule });
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
const DaffPaymentDriver = new InjectionToken('DaffPaymentDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffOrderDriver = new InjectionToken('DaffOrderDriver');
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
const DaffPaymentTransformer = new InjectionToken('DaffPaymentTransformer');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffBillingActionTypes = {
    UpdateBillingAddressAction: '[Billing] Update Billing Address Action',
    UpdatePaymentInfoAction: '[Billing] Update Payment Info Action',
    ToggleBillingAddressIsShippingAddressAction: '[Billing] Billing Address Is Shipping Address Action',
};
class DaffUpdateBillingAddress {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffBillingActionTypes.UpdateBillingAddressAction;
    }
}
if (false) {
    /** @type {?} */
    DaffUpdateBillingAddress.prototype.type;
    /** @type {?} */
    DaffUpdateBillingAddress.prototype.payload;
}
class DaffUpdatePaymentInfo$1 {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffBillingActionTypes.UpdatePaymentInfoAction;
    }
}
if (false) {
    /** @type {?} */
    DaffUpdatePaymentInfo$1.prototype.type;
    /** @type {?} */
    DaffUpdatePaymentInfo$1.prototype.payload;
}
class DaffToggleBillingAddressIsShippingAddress {
    constructor() {
        this.type = DaffBillingActionTypes.ToggleBillingAddressIsShippingAddressAction;
    }
}
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
const selectBillingFeatureState = createFeatureSelector('billing');
const ɵ0$3 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.billing;
/**
 * Billing State
 * @type {?}
 */
const selectBillingState = createSelector(selectBillingFeatureState, (ɵ0$3));
const ɵ1$3 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.billingAddress;
/** @type {?} */
const selectBillingAddress = createSelector(selectBillingState, (ɵ1$3));
const ɵ2$2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.billingAddressIsShippingAddress;
/** @type {?} */
const selectBillingAddressIsShippingAddress = createSelector(selectBillingState, (ɵ2$2));
const ɵ3$2 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.paymentInfo;
/** @type {?} */
const selectPaymentInfo$1 = createSelector(selectBillingState, (ɵ3$2));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState$1 = {
    billingAddress: null,
    billingAddressIsShippingAddress: false,
    paymentInfo: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffBillingReducer(state = initialState$1, action) {
    switch (action.type) {
        case DaffBillingActionTypes.UpdateBillingAddressAction:
            return Object.assign({}, state, { billingAddress: action.payload });
        case DaffBillingActionTypes.ToggleBillingAddressIsShippingAddressAction:
            return Object.assign({}, state, { billingAddress: null, billingAddressIsShippingAddress: !state.billingAddressIsShippingAddress });
        case DaffBillingActionTypes.UpdatePaymentInfoAction:
            return Object.assign({}, state, { paymentInfo: action.payload });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffBillingReducers = {
    billing: daffBillingReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffBillingStateModule {
}
DaffBillingStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature('billing', daffBillingReducers)
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BillingContainer {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.billingAddress$ = this.store.pipe(select(selectBillingAddress));
        this.billingAddressIsShippingAddress$ = this.store.pipe(select(selectBillingAddressIsShippingAddress));
        this.paymentInfo$ = this.store.pipe(select(selectPaymentInfo$1));
    }
    /**
     * @param {?} address
     * @return {?}
     */
    updateBillingAddress(address) {
        this.store.dispatch(new DaffUpdateBillingAddress(address));
    }
    /**
     * @return {?}
     */
    toggleBillingAddressIsShippingAddress() {
        this.store.dispatch(new DaffToggleBillingAddressIsShippingAddress());
    }
    /**
     * @param {?} info
     * @return {?}
     */
    updatePaymentInfo(info) {
        this.store.dispatch(new DaffUpdatePaymentInfo$1(info));
    }
}
BillingContainer.decorators = [
    { type: Component, args: [{
                selector: '[billing-container]',
                template: '<ng-content></ng-content>',
                exportAs: 'BillingContainer'
            }] }
];
/** @nocollapse */
BillingContainer.ctorParameters = () => [
    { type: Store }
];
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
class DaffBillingModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A facade for accessing state for the billing information of a customer
 */
class DaffBillingFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.billingAddress$ = this.store.pipe(select(selectBillingAddress));
        this.billingAddressIsShippingAddress$ = this.store.pipe(select(selectBillingAddressIsShippingAddress));
        this.paymentInfo$ = this.store.pipe(select(selectPaymentInfo$1));
    }
    /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffBillingFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: DaffBillingModule
            },] }
];
/** @nocollapse */
DaffBillingFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffBillingFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffBillingFacade_Factory() { return new DaffBillingFacade(ɵɵinject(Store)); }, token: DaffBillingFacade, providedIn: DaffBillingModule });
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
const initialState$2 = {
    shippingAddress: null,
    selectedShippingOptionId: null
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffShippingReducer(state = initialState$2, action) {
    switch (action.type) {
        case DaffShippingActionTypes.UpdateShippingAddressAction:
            return Object.assign({}, state, { shippingAddress: action.payload });
        case DaffShippingActionTypes.SelectShippingOptionAction:
            return Object.assign({}, state, { selectedShippingOptionId: action.payload });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffShippingReducers = {
    shipping: daffShippingReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffShippingStateModule {
}
DaffShippingStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature('shipping', daffShippingReducers)
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffShippingModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A facade for accessing state for shipping information.
 */
class DaffShippingFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.shippingAddress$ = this.store.pipe(select(selectShippingAddress));
        this.selectedShippingOptionId$ = this.store.pipe(select(selectShippingOptionId));
        this.isShippingAddressValid$ = this.store.pipe(select(selectIsShippingAddressValid));
    }
    /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffShippingFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: DaffShippingModule
            },] }
];
/** @nocollapse */
DaffShippingFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffShippingFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffShippingFacade_Factory() { return new DaffShippingFacade(ɵɵinject(Store)); }, token: DaffShippingFacade, providedIn: DaffShippingModule });
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
const DaffOrderActionTypes = {
    PlaceOrderAction: '[Order] Place Order Action',
    PlaceOrderSuccessAction: '[Order] Place Order Success Action',
    PlaceOrderFailureAction: '[Order] Place Order Failure Action',
};
/** @enum {string} */
const OrderActionTypes = {
    PlaceOrderAction: '[Order] Place Order Action',
    PlaceOrderSuccessAction: '[Order] Place Order Success Action',
    PlaceOrderFailureAction: '[Order] Place Order Failure Action',
};
/**
 * @deprecated
 */
class PlaceOrder {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.PlaceOrderAction;
    }
}
if (false) {
    /** @type {?} */
    PlaceOrder.prototype.type;
    /** @type {?} */
    PlaceOrder.prototype.payload;
}
/**
 * @deprecated
 */
class DaffPlaceOrder {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.PlaceOrderAction;
    }
}
if (false) {
    /** @type {?} */
    DaffPlaceOrder.prototype.type;
    /** @type {?} */
    DaffPlaceOrder.prototype.payload;
}
/**
 * @deprecated
 */
class DaffPlaceOrderSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.PlaceOrderSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffPlaceOrderSuccess.prototype.type;
    /** @type {?} */
    DaffPlaceOrderSuccess.prototype.payload;
}
/**
 * @deprecated
 */
class DaffPlaceOrderFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.PlaceOrderFailureAction;
    }
}
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
const initialState$3 = {
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
function daffOrderReducer(state = initialState$3, action) {
    switch (action.type) {
        case DaffOrderActionTypes.PlaceOrderAction:
            return Object.assign({}, state, { loading: true });
        case DaffOrderActionTypes.PlaceOrderSuccessAction:
            return Object.assign({}, state, { order: action.payload, loading: false });
        case DaffOrderActionTypes.PlaceOrderFailureAction:
            return Object.assign({}, state, { errors: [action.payload], loading: false });
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
const daffOrderReducers = {
    order: daffOrderReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DaffCheckoutDriver = new InjectionToken('DaffCheckoutDriver');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
class OrderEffects {
    /**
     * @param {?} actions$
     * @param {?} checkoutDriver
     */
    constructor(actions$, checkoutDriver) {
        this.actions$ = actions$;
        this.checkoutDriver = checkoutDriver;
        this.onPlaceOrder$ = this.actions$.pipe(ofType(DaffOrderActionTypes.PlaceOrderAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.checkoutDriver.placeOrder(action.payload.id.toString())
            .pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        (resp) => {
            return new DaffPlaceOrderSuccess(resp);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return of(new DaffPlaceOrderFailure('Failed to place order'));
        }))))));
    }
}
OrderEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OrderEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCheckoutDriver,] }] }
];
__decorate([
    Effect(),
    __metadata("design:type", Observable)
], OrderEffects.prototype, "onPlaceOrder$", void 0);
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
class DaffOrderStateModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated
 */
class DaffOrderModule {
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
class DaffOrderFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        this.order$ = this.store.pipe(select(selectOrder));
        this.loading$ = this.store.pipe(select(selectLoading));
        this.errors$ = this.store.pipe(select(selectErrors));
    }
    /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffOrderFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: DaffOrderModule
            },] }
];
/** @nocollapse */
DaffOrderFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffOrderFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderFacade_Factory() { return new DaffOrderFacade(ɵɵinject(Store)); }, token: DaffOrderFacade, providedIn: DaffOrderModule });
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
class StateCheckoutModule {
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
