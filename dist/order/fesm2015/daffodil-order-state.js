import { createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector, select, Store, StoreModule } from '@ngrx/store';
import { DaffOrderTotalTypeEnum } from '@daffodil/order';
import { getDaffCartSelectors } from '@daffodil/cart/state';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, InjectionToken, Inject, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { tap, switchMap, map, catchError } from 'rxjs/operators';
import { ofType, Actions, Effect, EffectsModule } from '@ngrx/effects';
import { of } from 'rxjs';
import { DaffOrderDriver } from '@daffodil/order/driver';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffOrderActionTypes = {
    OrderLoadAction: '[Order] Order Load Action',
    OrderLoadSuccessAction: '[Order] Order Load Success Action',
    OrderLoadFailureAction: '[Order] Order Load Failure Action',
    OrderListAction: '[Order] Order List Action',
    OrderListSuccessAction: '[Order] Order List Success Action',
    OrderListFailureAction: '[Order] Order List Failure Action',
};
/**
 * Triggers the loading of the specified order.
 *
 * @param orderId The order ID.
 * @param cartId The optional guest cart ID.
 * @template T, V
 */
class DaffOrderLoad {
    /**
     * @param {?} orderId
     * @param {?=} cartId
     */
    constructor(orderId, cartId) {
        this.orderId = orderId;
        this.cartId = cartId;
        this.type = DaffOrderActionTypes.OrderLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffOrderLoad.prototype.type;
    /** @type {?} */
    DaffOrderLoad.prototype.orderId;
    /** @type {?} */
    DaffOrderLoad.prototype.cartId;
}
/**
 * @template T
 */
class DaffOrderLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffOrderLoadSuccess.prototype.type;
    /** @type {?} */
    DaffOrderLoadSuccess.prototype.payload;
}
class DaffOrderLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffOrderLoadFailure.prototype.type;
    /** @type {?} */
    DaffOrderLoadFailure.prototype.payload;
}
/**
 * Triggers the loading of the orders for either the currently logged-in user or the specified guest cart.
 *
 * @param payload The guest cart ID.
 * @template T
 */
class DaffOrderList {
    /**
     * @param {?=} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderListAction;
    }
}
if (false) {
    /** @type {?} */
    DaffOrderList.prototype.type;
    /** @type {?} */
    DaffOrderList.prototype.payload;
}
/**
 * @template T
 */
class DaffOrderListSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderListSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffOrderListSuccess.prototype.type;
    /** @type {?} */
    DaffOrderListSuccess.prototype.payload;
}
class DaffOrderListFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderListFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffOrderListFailure.prototype.type;
    /** @type {?} */
    DaffOrderListFailure.prototype.payload;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const daffOrderInitialState = {
    loading: false,
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
function daffOrderReducer(state = daffOrderInitialState, action) {
    switch (action.type) {
        case DaffOrderActionTypes.OrderListAction:
        case DaffOrderActionTypes.OrderLoadAction:
            return Object.assign({}, state, { loading: true });
        case DaffOrderActionTypes.OrderListSuccessAction:
        case DaffOrderActionTypes.OrderLoadSuccessAction:
            return Object.assign({}, state, { loading: false, errors: [] });
        case DaffOrderActionTypes.OrderListFailureAction:
        case DaffOrderActionTypes.OrderLoadFailureAction:
            return Object.assign({}, state, { errors: [
                    ...state.errors,
                    action.payload
                ], loading: false });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || createEntityAdapter());
};
/**
 * Order Adapter for changing/overwriting entity state.
 * @type {?}
 */
const daffGetOrderAdapter = ((ɵ0))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Initial state for order entity state.
 * @type {?}
 */
const daffOrderEntitiesInitialState = daffGetOrderAdapter().getInitialState();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Reducer function that catches actions and changes/overwrites order entities state.
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffOrderEntitiesReducer(state = daffOrderEntitiesInitialState, action) {
    /** @type {?} */
    const adapter = daffGetOrderAdapter();
    switch (action.type) {
        case DaffOrderActionTypes.OrderLoadSuccessAction:
            return adapter.upsertOne(action.payload, state);
        case DaffOrderActionTypes.OrderListSuccessAction:
            return adapter.upsertMany(action.payload, state);
        default:
            return state;
    }
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
const daffOrderReducers = {
    order: daffOrderReducer,
    orders: daffOrderEntitiesReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DAFF_ORDER_STORE_FEATURE_KEY = 'daffOrder';

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
 * @record
 * @template T
 */
function DaffOrderFeatureSelector() { }
if (false) {
    /** @type {?} */
    DaffOrderFeatureSelector.prototype.selectOrderFeatureState;
}
const ɵ0$1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || {
        selectOrderFeatureState: createFeatureSelector(DAFF_ORDER_STORE_FEATURE_KEY)
    });
};
/** @type {?} */
const getDaffOrderReducersStateSelector = ((ɵ0$1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DaffOrderEntitySelectors() { }
if (false) {
    /** @type {?} */
    DaffOrderEntitySelectors.prototype.selectOrderEntitiesState;
    /**
     * Selector for order IDs.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderIds;
    /**
     * Selector for order entities.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderEntities;
    /**
     * Selector for all orders.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectAllOrders;
    /**
     * Selector for total number of orders.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderTotal;
    /** @type {?} */
    DaffOrderEntitySelectors.prototype.selectOrder;
    /**
     * Selector for the most recently placed order (if any).
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectPlacedOrder;
    /**
     * Selector for the existence of the most recently placed order.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectHasPlacedOrder;
    /**
     * Selects the specified order's totals.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderTotals;
    /**
     * Selects the specified order's applied coupon codes.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderAppliedCodes;
    /**
     * Selects the specified order's items.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderItems;
    /**
     * Selects the specified order's billing addresses.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderBillingAddresses;
    /**
     * Selects the specified order's shipping addresses.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderShippingTotalAddresses;
    /**
     * Selects the specified order's shipments.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderShipments;
    /**
     * Selects the specified order's payment.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderPayment;
    /**
     * Selects the specified order's invoices.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderInvoices;
    /**
     * Selects the specified order's credits.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderCredits;
    /**
     * Selects the specified order's specified item.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderItem;
    /**
     * Selects the specified order's grand total.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderGrandTotal;
    /**
     * Selects the specified order's subtotal.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderSubtotal;
    /**
     * Selects the specified order's shipping total.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderShippingTotal;
    /**
     * Selects the specified order's discount total.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderDiscountTotal;
    /**
     * Selects whether the specified order has a discount.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderHasDiscount;
    /**
     * Selects the specified order's tax total.
     * @type {?}
     */
    DaffOrderEntitySelectors.prototype.selectOrderTaxTotal;
}
/** @type {?} */
const createOrderEntitySelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    const { selectOrderFeatureState } = getDaffOrderReducersStateSelector();
    /** @type {?} */
    const selectOrderEntitiesState = createSelector(selectOrderFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.orders));
    const { selectIds, selectEntities, selectAll, selectTotal } = daffGetOrderAdapter().getSelectors(selectOrderEntitiesState);
    const { selectCartOrderId } = getDaffCartSelectors();
    /** @type {?} */
    const selectOrder = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => orders[props.id] || null));
    /** @type {?} */
    const selectPlacedOrder = createSelector(selectEntities, selectCartOrderId, (/**
     * @param {?} orders
     * @param {?} orderId
     * @return {?}
     */
    (orders, orderId) => orderId ? selectOrder.projector(orders, { id: orderId }) : null));
    /** @type {?} */
    const selectHasPlacedOrder = createSelector(selectPlacedOrder, (/**
     * @param {?} placedOrder
     * @return {?}
     */
    placedOrder => !!placedOrder));
    /** @type {?} */
    const selectOrderTotals = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.totals) || [];
    }));
    /** @type {?} */
    const selectOrderAppliedCodes = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.applied_codes) || [];
    }));
    /** @type {?} */
    const selectOrderItems = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.items) || [];
    }));
    /** @type {?} */
    const selectOrderBillingAddresses = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.billing_addresses) || [];
    }));
    /** @type {?} */
    const selectOrderShippingTotalAddresses = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.shipping_addresses) || [];
    }));
    /** @type {?} */
    const selectOrderShipments = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.shipments) || [];
    }));
    /** @type {?} */
    const selectOrderPayment = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.payment) || null;
    }));
    /** @type {?} */
    const selectOrderInvoices = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.invoices) || [];
    }));
    /** @type {?} */
    const selectOrderCredits = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const order = selectOrder.projector(orders, { id: props.id });
        return (order && order.credits) || [];
    }));
    /** @type {?} */
    const selectOrderGrandTotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        const index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        total => total.type === DaffOrderTotalTypeEnum.GrandTotal));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    const selectOrderSubtotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        const index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        total => total.type === DaffOrderTotalTypeEnum.Subtotal));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    const selectOrderShippingTotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        const index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        total => total.type === DaffOrderTotalTypeEnum.Shipping));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    const selectOrderDiscountTotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        const index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        total => total.type === DaffOrderTotalTypeEnum.Discount));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    const selectOrderHasDiscount = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const discountTotal = selectOrderDiscountTotal.projector(orders, { id: props.id });
        //todo: use optional chaining when possible
        return !!discountTotal && discountTotal.value > 0;
    }));
    /** @type {?} */
    const selectOrderTaxTotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => {
        /** @type {?} */
        const totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        const index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        total => total.type === DaffOrderTotalTypeEnum.Tax));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    const selectOrderItem = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    (orders, props) => selectOrderItems.projector(orders, { id: props.id }).find((/**
     * @param {?} item
     * @return {?}
     */
    item => item.item_id === props.item_id)) || null));
    return {
        selectOrderEntitiesState,
        selectOrderIds: selectIds,
        selectOrderEntities: selectEntities,
        selectAllOrders: selectAll,
        selectOrderTotal: selectTotal,
        selectPlacedOrder,
        selectHasPlacedOrder,
        selectOrder,
        selectOrderTotals,
        selectOrderAppliedCodes,
        selectOrderItems,
        selectOrderBillingAddresses,
        selectOrderShippingTotalAddresses,
        selectOrderShipments,
        selectOrderPayment,
        selectOrderInvoices,
        selectOrderCredits,
        selectOrderItem,
        selectOrderGrandTotal,
        selectOrderSubtotal,
        selectOrderShippingTotal,
        selectOrderDiscountTotal,
        selectOrderHasDiscount,
        selectOrderTaxTotal,
    };
});
const ɵ0$2 = createOrderEntitySelectors;
const ɵ1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || createOrderEntitySelectors());
};
/** @type {?} */
const getDaffOrderEntitySelectors = ((ɵ1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function DaffOrderSelectors() { }
if (false) {
    /** @type {?} */
    DaffOrderSelectors.prototype.selectOrderState;
    /** @type {?} */
    DaffOrderSelectors.prototype.selectOrderLoading;
    /** @type {?} */
    DaffOrderSelectors.prototype.selectOrderErrors;
}
/** @type {?} */
const createOrderSelectors = (/**
 * @template T
 * @return {?}
 */
() => {
    const { selectOrderFeatureState } = getDaffOrderReducersStateSelector();
    /** @type {?} */
    const selectOrderState = createSelector(selectOrderFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.order));
    /** @type {?} */
    const selectOrderLoading = createSelector(selectOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.loading));
    /** @type {?} */
    const selectOrderErrors = createSelector(selectOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    state => state.errors));
    return {
        selectOrderState,
        selectOrderLoading,
        selectOrderErrors
    };
});
const ɵ0$3 = createOrderSelectors;
const ɵ1$1 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || createOrderSelectors());
};
/** @type {?} */
const getOrderSelectors = ((ɵ1$1))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DaffOrderAllSelectors() { }
const ɵ0$4 = /**
 * @return {?}
 */
() => {
    /** @type {?} */
    let cache;
    return (/**
     * @template T
     * @return {?}
     */
    () => cache = cache || Object.assign({}, getOrderSelectors(), getDaffOrderEntitySelectors(), getDaffOrderReducersStateSelector()));
};
/** @type {?} */
const getDaffOrderSelectors = ((ɵ0$4))();

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
class DaffOrderFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        const { selectOrderIds, selectOrderEntities, selectAllOrders, selectOrderTotal, selectOrderLoading, selectOrderErrors, selectPlacedOrder, selectHasPlacedOrder, selectOrder, selectOrderTotals, selectOrderAppliedCodes, selectOrderItems, selectOrderBillingAddresses, selectOrderShippingTotalAddresses, selectOrderShipments, selectOrderPayment, selectOrderInvoices, selectOrderCredits, selectOrderGrandTotal, selectOrderSubtotal, selectOrderShippingTotal, selectOrderDiscountTotal, selectOrderHasDiscount, selectOrderTaxTotal, } = getDaffOrderSelectors();
        this.loading$ = this.store.pipe(select(selectOrderLoading));
        this.errors$ = this.store.pipe(select(selectOrderErrors));
        this.orders$ = this.store.pipe(select(selectAllOrders));
        this.orderIds$ = this.store.pipe(select(selectOrderIds));
        this.orderCount$ = this.store.pipe(select(selectOrderTotal));
        this.orderEntities$ = this.store.pipe(select(selectOrderEntities));
        this.placedOrder$ = this.store.pipe(select(selectPlacedOrder));
        this.hasPlacedOrder$ = this.store.pipe(select(selectHasPlacedOrder));
        this._order = selectOrder;
        this._totals = selectOrderTotals;
        this._appliedCodes = selectOrderAppliedCodes;
        this._items = selectOrderItems;
        this._billingAddresses = selectOrderBillingAddresses;
        this._shippingAddresses = selectOrderShippingTotalAddresses;
        this._shipments = selectOrderShipments;
        this._payment = selectOrderPayment;
        this._invoices = selectOrderInvoices;
        this._credits = selectOrderCredits;
        this._grandTotal = selectOrderGrandTotal;
        this._subtotal = selectOrderSubtotal;
        this._shipping = selectOrderShippingTotal;
        this._discount = selectOrderDiscountTotal;
        this._hasDiscount = selectOrderHasDiscount;
        this._tax = selectOrderTaxTotal;
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getOrder$(orderId) {
        return this.store.pipe(select(this._order, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getTotals$(orderId) {
        return this.store.pipe(select(this._totals, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getAppliedCodes$(orderId) {
        return this.store.pipe(select(this._appliedCodes, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getItems$(orderId) {
        return this.store.pipe(select(this._items, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getBillingAddresses$(orderId) {
        return this.store.pipe(select(this._billingAddresses, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getShippingAddresses$(orderId) {
        return this.store.pipe(select(this._shippingAddresses, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getShipments$(orderId) {
        return this.store.pipe(select(this._shipments, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getPayment$(orderId) {
        return this.store.pipe(select(this._payment, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getInvoices$(orderId) {
        return this.store.pipe(select(this._invoices, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getCredits$(orderId) {
        return this.store.pipe(select(this._credits, { id: orderId }));
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getGrandTotal$(orderId) {
        return this.store.pipe(select(this._grandTotal, { id: orderId }));
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    getSubtotal$(orderId) {
        return this.store.pipe(select(this._subtotal, { id: orderId }));
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    getShippingTotal$(orderId) {
        return this.store.pipe(select(this._shipping, { id: orderId }));
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    getDiscountTotal$(orderId) {
        return this.store.pipe(select(this._discount, { id: orderId }));
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    hasDiscount$(orderId) {
        return this.store.pipe(select(this._hasDiscount, { id: orderId }));
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    getTaxTotal$(orderId) {
        return this.store.pipe(select(this._tax, { id: orderId }));
    }
    ;
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffOrderFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffOrderFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderFacade_Factory() { return new DaffOrderFacade(ɵɵinject(Store)); }, token: DaffOrderFacade, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffOrderFacade.prototype.loading$;
    /** @type {?} */
    DaffOrderFacade.prototype.errors$;
    /** @type {?} */
    DaffOrderFacade.prototype.orders$;
    /** @type {?} */
    DaffOrderFacade.prototype.orderIds$;
    /** @type {?} */
    DaffOrderFacade.prototype.orderCount$;
    /** @type {?} */
    DaffOrderFacade.prototype.orderEntities$;
    /** @type {?} */
    DaffOrderFacade.prototype.placedOrder$;
    /** @type {?} */
    DaffOrderFacade.prototype.hasPlacedOrder$;
    /** @type {?} */
    DaffOrderFacade.prototype._order;
    /** @type {?} */
    DaffOrderFacade.prototype._totals;
    /** @type {?} */
    DaffOrderFacade.prototype._appliedCodes;
    /** @type {?} */
    DaffOrderFacade.prototype._items;
    /** @type {?} */
    DaffOrderFacade.prototype._billingAddresses;
    /** @type {?} */
    DaffOrderFacade.prototype._shippingAddresses;
    /** @type {?} */
    DaffOrderFacade.prototype._shipments;
    /** @type {?} */
    DaffOrderFacade.prototype._payment;
    /** @type {?} */
    DaffOrderFacade.prototype._invoices;
    /** @type {?} */
    DaffOrderFacade.prototype._credits;
    /** @type {?} */
    DaffOrderFacade.prototype._grandTotal;
    /** @type {?} */
    DaffOrderFacade.prototype._subtotal;
    /** @type {?} */
    DaffOrderFacade.prototype._shipping;
    /** @type {?} */
    DaffOrderFacade.prototype._discount;
    /** @type {?} */
    DaffOrderFacade.prototype._hasDiscount;
    /** @type {?} */
    DaffOrderFacade.prototype._tax;
    /**
     * @type {?}
     * @private
     */
    DaffOrderFacade.prototype.store;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
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
const DaffPlacedOrderGuardRedirectUrl = new InjectionToken('DaffPlacedOrderGuardRedirectUrl');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A routing guard that will redirect to a given url if the placed order is not defined.
 * The url is `/` by default, but can be overridden with the DaffPlacedOrderGuardRedirectUrl injection token.
 */
class DaffPlacedOrderGuard {
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
        return this.facade.hasPlacedOrder$.pipe(tap((/**
         * @param {?} hasPlacedOrder
         * @return {?}
         */
        hasPlacedOrder => {
            if (!hasPlacedOrder) {
                this.router.navigateByUrl(this.redirectUrl);
            }
        })));
    }
}
DaffPlacedOrderGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffPlacedOrderGuard.ctorParameters = () => [
    { type: DaffOrderFacade },
    { type: Router },
    { type: String, decorators: [{ type: Inject, args: [DaffPlacedOrderGuardRedirectUrl,] }] }
];
/** @nocollapse */ DaffPlacedOrderGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffPlacedOrderGuard_Factory() { return new DaffPlacedOrderGuard(ɵɵinject(DaffOrderFacade), ɵɵinject(Router), ɵɵinject(DaffPlacedOrderGuardRedirectUrl)); }, token: DaffPlacedOrderGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffPlacedOrderGuard.prototype.facade;
    /**
     * @type {?}
     * @private
     */
    DaffPlacedOrderGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    DaffPlacedOrderGuard.prototype.redirectUrl;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * @template T, V
 */
class DaffOrderEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     */
    constructor(actions$, driver) {
        this.actions$ = actions$;
        this.driver = driver;
        /**
         * An effect for the loading of an order.
         */
        this.get$ = this.actions$.pipe(ofType(DaffOrderActionTypes.OrderLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.get(action.orderId, action.cartId).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffOrderLoadSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffOrderLoadFailure('Failed to load order'))))))));
        /**
         * An effect for the listing of orders.
         */
        this.list$ = this.actions$.pipe(ofType(DaffOrderActionTypes.OrderListAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => this.driver.list(action.payload).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => new DaffOrderListSuccess(resp))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new DaffOrderListFailure('Failed to list the orders'))))))));
    }
}
DaffOrderEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffOrderEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffOrderDriver,] }] }
];
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffOrderEffects.prototype, "get$", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], DaffOrderEffects.prototype, "list$", void 0);
if (false) {
    /**
     * An effect for the loading of an order.
     * @type {?}
     */
    DaffOrderEffects.prototype.get$;
    /**
     * An effect for the listing of orders.
     * @type {?}
     */
    DaffOrderEffects.prototype.list$;
    /**
     * @type {?}
     * @private
     */
    DaffOrderEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffOrderEffects.prototype.driver;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DaffOrderStateModule {
}
DaffOrderStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    EffectsModule.forFeature([
                        DaffOrderEffects,
                    ]),
                    StoreModule.forFeature(DAFF_ORDER_STORE_FEATURE_KEY, daffOrderReducers),
                ],
                providers: [
                    { provide: DaffPlacedOrderGuardRedirectUrl, useValue: '/' },
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

export { DAFF_ORDER_STORE_FEATURE_KEY, DaffOrderActionTypes, DaffOrderFacade, DaffOrderList, DaffOrderListFailure, DaffOrderListSuccess, DaffOrderLoad, DaffOrderLoadFailure, DaffOrderLoadSuccess, DaffOrderStateModule, DaffPlacedOrderGuard, DaffPlacedOrderGuardRedirectUrl, daffGetOrderAdapter, daffOrderEntitiesInitialState, daffOrderEntitiesReducer, daffOrderInitialState, daffOrderReducer, daffOrderReducers, getDaffOrderSelectors, DaffOrderEffects as ɵa };
//# sourceMappingURL=daffodil-order-state.js.map
