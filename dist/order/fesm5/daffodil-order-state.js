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
var DaffOrderActionTypes = {
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
var  /**
 * Triggers the loading of the specified order.
 *
 * @param orderId The order ID.
 * @param cartId The optional guest cart ID.
 * @template T, V
 */
DaffOrderLoad = /** @class */ (function () {
    function DaffOrderLoad(orderId, cartId) {
        this.orderId = orderId;
        this.cartId = cartId;
        this.type = DaffOrderActionTypes.OrderLoadAction;
    }
    return DaffOrderLoad;
}());
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
var  /**
 * @template T
 */
DaffOrderLoadSuccess = /** @class */ (function () {
    function DaffOrderLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderLoadSuccessAction;
    }
    return DaffOrderLoadSuccess;
}());
if (false) {
    /** @type {?} */
    DaffOrderLoadSuccess.prototype.type;
    /** @type {?} */
    DaffOrderLoadSuccess.prototype.payload;
}
var DaffOrderLoadFailure = /** @class */ (function () {
    function DaffOrderLoadFailure(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderLoadFailureAction;
    }
    return DaffOrderLoadFailure;
}());
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
var  /**
 * Triggers the loading of the orders for either the currently logged-in user or the specified guest cart.
 *
 * @param payload The guest cart ID.
 * @template T
 */
DaffOrderList = /** @class */ (function () {
    function DaffOrderList(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderListAction;
    }
    return DaffOrderList;
}());
if (false) {
    /** @type {?} */
    DaffOrderList.prototype.type;
    /** @type {?} */
    DaffOrderList.prototype.payload;
}
/**
 * @template T
 */
var  /**
 * @template T
 */
DaffOrderListSuccess = /** @class */ (function () {
    function DaffOrderListSuccess(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderListSuccessAction;
    }
    return DaffOrderListSuccess;
}());
if (false) {
    /** @type {?} */
    DaffOrderListSuccess.prototype.type;
    /** @type {?} */
    DaffOrderListSuccess.prototype.payload;
}
var DaffOrderListFailure = /** @class */ (function () {
    function DaffOrderListFailure(payload) {
        this.payload = payload;
        this.type = DaffOrderActionTypes.OrderListFailureAction;
    }
    return DaffOrderListFailure;
}());
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
var daffOrderInitialState = {
    loading: false,
    errors: []
};

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
/**
 * @template T
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function daffOrderReducer(state, action) {
    if (state === void 0) { state = daffOrderInitialState; }
    switch (action.type) {
        case DaffOrderActionTypes.OrderListAction:
        case DaffOrderActionTypes.OrderLoadAction:
            return __assign({}, state, { loading: true });
        case DaffOrderActionTypes.OrderListSuccessAction:
        case DaffOrderActionTypes.OrderLoadSuccessAction:
            return __assign({}, state, { loading: false, errors: [] });
        case DaffOrderActionTypes.OrderListFailureAction:
        case DaffOrderActionTypes.OrderLoadFailureAction:
            return __assign({}, state, { errors: __spread(state.errors, [
                    action.payload
                ]), loading: false });
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = /**
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
        return cache = cache || createEntityAdapter();
    });
};
/**
 * Order Adapter for changing/overwriting entity state.
 * @type {?}
 */
var daffGetOrderAdapter = ((ɵ0))();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Initial state for order entity state.
 * @type {?}
 */
var daffOrderEntitiesInitialState = daffGetOrderAdapter().getInitialState();

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
function daffOrderEntitiesReducer(state, action) {
    if (state === void 0) { state = daffOrderEntitiesInitialState; }
    /** @type {?} */
    var adapter = daffGetOrderAdapter();
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
var daffOrderReducers = {
    order: daffOrderReducer,
    orders: daffOrderEntitiesReducer
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DAFF_ORDER_STORE_FEATURE_KEY = 'daffOrder';

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
var ɵ0$1 = /**
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
        return cache = cache || {
            selectOrderFeatureState: createFeatureSelector(DAFF_ORDER_STORE_FEATURE_KEY)
        };
    });
};
/** @type {?} */
var getDaffOrderReducersStateSelector = ((ɵ0$1))();

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
var createOrderEntitySelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    var selectOrderFeatureState = getDaffOrderReducersStateSelector().selectOrderFeatureState;
    /** @type {?} */
    var selectOrderEntitiesState = createSelector(selectOrderFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.orders; }));
    var _a = daffGetOrderAdapter().getSelectors(selectOrderEntitiesState), selectIds = _a.selectIds, selectEntities = _a.selectEntities, selectAll = _a.selectAll, selectTotal = _a.selectTotal;
    var selectCartOrderId = getDaffCartSelectors().selectCartOrderId;
    /** @type {?} */
    var selectOrder = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) { return orders[props.id] || null; }));
    /** @type {?} */
    var selectPlacedOrder = createSelector(selectEntities, selectCartOrderId, (/**
     * @param {?} orders
     * @param {?} orderId
     * @return {?}
     */
    function (orders, orderId) { return orderId ? selectOrder.projector(orders, { id: orderId }) : null; }));
    /** @type {?} */
    var selectHasPlacedOrder = createSelector(selectPlacedOrder, (/**
     * @param {?} placedOrder
     * @return {?}
     */
    function (placedOrder) { return !!placedOrder; }));
    /** @type {?} */
    var selectOrderTotals = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.totals) || [];
    }));
    /** @type {?} */
    var selectOrderAppliedCodes = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.applied_codes) || [];
    }));
    /** @type {?} */
    var selectOrderItems = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.items) || [];
    }));
    /** @type {?} */
    var selectOrderBillingAddresses = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.billing_addresses) || [];
    }));
    /** @type {?} */
    var selectOrderShippingTotalAddresses = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.shipping_addresses) || [];
    }));
    /** @type {?} */
    var selectOrderShipments = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.shipments) || [];
    }));
    /** @type {?} */
    var selectOrderPayment = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.payment) || null;
    }));
    /** @type {?} */
    var selectOrderInvoices = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.invoices) || [];
    }));
    /** @type {?} */
    var selectOrderCredits = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var order = selectOrder.projector(orders, { id: props.id });
        return (order && order.credits) || [];
    }));
    /** @type {?} */
    var selectOrderGrandTotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        var index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.type === DaffOrderTotalTypeEnum.GrandTotal; }));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    var selectOrderSubtotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        var index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.type === DaffOrderTotalTypeEnum.Subtotal; }));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    var selectOrderShippingTotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        var index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.type === DaffOrderTotalTypeEnum.Shipping; }));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    var selectOrderDiscountTotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        var index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.type === DaffOrderTotalTypeEnum.Discount; }));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    var selectOrderHasDiscount = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var discountTotal = selectOrderDiscountTotal.projector(orders, { id: props.id });
        //todo: use optional chaining when possible
        return !!discountTotal && discountTotal.value > 0;
    }));
    /** @type {?} */
    var selectOrderTaxTotal = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) {
        /** @type {?} */
        var totals = selectOrderTotals.projector(orders, { id: props.id });
        /** @type {?} */
        var index = totals.findIndex((/**
         * @param {?} total
         * @return {?}
         */
        function (total) { return total.type === DaffOrderTotalTypeEnum.Tax; }));
        return index > -1 ? totals[index] : null;
    }));
    /** @type {?} */
    var selectOrderItem = createSelector(selectEntities, (/**
     * @param {?} orders
     * @param {?} props
     * @return {?}
     */
    function (orders, props) { return selectOrderItems.projector(orders, { id: props.id }).find((/**
     * @param {?} item
     * @return {?}
     */
    function (item) { return item.item_id === props.item_id; })) || null; }));
    return {
        selectOrderEntitiesState: selectOrderEntitiesState,
        selectOrderIds: selectIds,
        selectOrderEntities: selectEntities,
        selectAllOrders: selectAll,
        selectOrderTotal: selectTotal,
        selectPlacedOrder: selectPlacedOrder,
        selectHasPlacedOrder: selectHasPlacedOrder,
        selectOrder: selectOrder,
        selectOrderTotals: selectOrderTotals,
        selectOrderAppliedCodes: selectOrderAppliedCodes,
        selectOrderItems: selectOrderItems,
        selectOrderBillingAddresses: selectOrderBillingAddresses,
        selectOrderShippingTotalAddresses: selectOrderShippingTotalAddresses,
        selectOrderShipments: selectOrderShipments,
        selectOrderPayment: selectOrderPayment,
        selectOrderInvoices: selectOrderInvoices,
        selectOrderCredits: selectOrderCredits,
        selectOrderItem: selectOrderItem,
        selectOrderGrandTotal: selectOrderGrandTotal,
        selectOrderSubtotal: selectOrderSubtotal,
        selectOrderShippingTotal: selectOrderShippingTotal,
        selectOrderDiscountTotal: selectOrderDiscountTotal,
        selectOrderHasDiscount: selectOrderHasDiscount,
        selectOrderTaxTotal: selectOrderTaxTotal,
    };
});
var ɵ0$2 = createOrderEntitySelectors;
var ɵ1 = /**
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
        return cache = cache || createOrderEntitySelectors();
    });
};
/** @type {?} */
var getDaffOrderEntitySelectors = ((ɵ1))();

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
var createOrderSelectors = (/**
 * @template T
 * @return {?}
 */
function () {
    var selectOrderFeatureState = getDaffOrderReducersStateSelector().selectOrderFeatureState;
    /** @type {?} */
    var selectOrderState = createSelector(selectOrderFeatureState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.order; }));
    /** @type {?} */
    var selectOrderLoading = createSelector(selectOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.loading; }));
    /** @type {?} */
    var selectOrderErrors = createSelector(selectOrderState, (/**
     * @param {?} state
     * @return {?}
     */
    function (state) { return state.errors; }));
    return {
        selectOrderState: selectOrderState,
        selectOrderLoading: selectOrderLoading,
        selectOrderErrors: selectOrderErrors
    };
});
var ɵ0$3 = createOrderSelectors;
var ɵ1$1 = /**
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
        return cache = cache || createOrderSelectors();
    });
};
/** @type {?} */
var getOrderSelectors = ((ɵ1$1))();

var __assign$1 = (this && this.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
/**
 * @record
 * @template T
 */
function DaffOrderAllSelectors() { }
var ɵ0$4 = /**
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
        return cache = cache || __assign$1({}, getOrderSelectors(), getDaffOrderEntitySelectors(), getDaffOrderReducersStateSelector());
    });
};
/** @type {?} */
var getDaffOrderSelectors = ((ɵ0$4))();

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
var DaffOrderFacade = /** @class */ (function () {
    function DaffOrderFacade(store) {
        this.store = store;
        var _a = getDaffOrderSelectors(), selectOrderIds = _a.selectOrderIds, selectOrderEntities = _a.selectOrderEntities, selectAllOrders = _a.selectAllOrders, selectOrderTotal = _a.selectOrderTotal, selectOrderLoading = _a.selectOrderLoading, selectOrderErrors = _a.selectOrderErrors, selectPlacedOrder = _a.selectPlacedOrder, selectHasPlacedOrder = _a.selectHasPlacedOrder, selectOrder = _a.selectOrder, selectOrderTotals = _a.selectOrderTotals, selectOrderAppliedCodes = _a.selectOrderAppliedCodes, selectOrderItems = _a.selectOrderItems, selectOrderBillingAddresses = _a.selectOrderBillingAddresses, selectOrderShippingTotalAddresses = _a.selectOrderShippingTotalAddresses, selectOrderShipments = _a.selectOrderShipments, selectOrderPayment = _a.selectOrderPayment, selectOrderInvoices = _a.selectOrderInvoices, selectOrderCredits = _a.selectOrderCredits, selectOrderGrandTotal = _a.selectOrderGrandTotal, selectOrderSubtotal = _a.selectOrderSubtotal, selectOrderShippingTotal = _a.selectOrderShippingTotal, selectOrderDiscountTotal = _a.selectOrderDiscountTotal, selectOrderHasDiscount = _a.selectOrderHasDiscount, selectOrderTaxTotal = _a.selectOrderTaxTotal;
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
    DaffOrderFacade.prototype.getOrder$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._order, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getTotals$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._totals, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getAppliedCodes$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._appliedCodes, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getItems$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._items, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getBillingAddresses$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._billingAddresses, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getShippingAddresses$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._shippingAddresses, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getShipments$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._shipments, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getPayment$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._payment, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getInvoices$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._invoices, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getCredits$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._credits, { id: orderId }));
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getGrandTotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._grandTotal, { id: orderId }));
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getSubtotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._subtotal, { id: orderId }));
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getShippingTotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._shipping, { id: orderId }));
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getDiscountTotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._discount, { id: orderId }));
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.hasDiscount$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._hasDiscount, { id: orderId }));
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    DaffOrderFacade.prototype.getTaxTotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return this.store.pipe(select(this._tax, { id: orderId }));
    };
    ;
    /**
     * @param {?} action
     * @return {?}
     */
    DaffOrderFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffOrderFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffOrderFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffOrderFacade.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffOrderFacade_Factory() { return new DaffOrderFacade(ɵɵinject(Store)); }, token: DaffOrderFacade, providedIn: "root" });
    return DaffOrderFacade;
}());
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
var DaffPlacedOrderGuardRedirectUrl = new InjectionToken('DaffPlacedOrderGuardRedirectUrl');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A routing guard that will redirect to a given url if the placed order is not defined.
 * The url is `/` by default, but can be overridden with the DaffPlacedOrderGuardRedirectUrl injection token.
 */
var DaffPlacedOrderGuard = /** @class */ (function () {
    function DaffPlacedOrderGuard(facade, router, redirectUrl) {
        this.facade = facade;
        this.router = router;
        this.redirectUrl = redirectUrl;
    }
    /**
     * @return {?}
     */
    DaffPlacedOrderGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.facade.hasPlacedOrder$.pipe(tap((/**
         * @param {?} hasPlacedOrder
         * @return {?}
         */
        function (hasPlacedOrder) {
            if (!hasPlacedOrder) {
                _this.router.navigateByUrl(_this.redirectUrl);
            }
        })));
    };
    DaffPlacedOrderGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffPlacedOrderGuard.ctorParameters = function () { return [
        { type: DaffOrderFacade },
        { type: Router },
        { type: String, decorators: [{ type: Inject, args: [DaffPlacedOrderGuardRedirectUrl,] }] }
    ]; };
    /** @nocollapse */ DaffPlacedOrderGuard.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffPlacedOrderGuard_Factory() { return new DaffPlacedOrderGuard(ɵɵinject(DaffOrderFacade), ɵɵinject(Router), ɵɵinject(DaffPlacedOrderGuardRedirectUrl)); }, token: DaffPlacedOrderGuard, providedIn: "root" });
    return DaffPlacedOrderGuard;
}());
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
var DaffOrderEffects = /** @class */ (function () {
    function DaffOrderEffects(actions$, driver) {
        var _this = this;
        this.actions$ = actions$;
        this.driver = driver;
        /**
         * An effect for the loading of an order.
         */
        this.get$ = this.actions$.pipe(ofType(DaffOrderActionTypes.OrderLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.get(action.orderId, action.cartId).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffOrderLoadSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffOrderLoadFailure('Failed to load order')); })));
        })));
        /**
         * An effect for the listing of orders.
         */
        this.list$ = this.actions$.pipe(ofType(DaffOrderActionTypes.OrderListAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return _this.driver.list(action.payload).pipe(map((/**
             * @param {?} resp
             * @return {?}
             */
            function (resp) { return new DaffOrderListSuccess(resp); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new DaffOrderListFailure('Failed to list the orders')); })));
        })));
    }
    DaffOrderEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DaffOrderEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: undefined, decorators: [{ type: Inject, args: [DaffOrderDriver,] }] }
    ]; };
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], DaffOrderEffects.prototype, "get$", void 0);
    __decorate([
        Effect(),
        __metadata("design:type", Object)
    ], DaffOrderEffects.prototype, "list$", void 0);
    return DaffOrderEffects;
}());
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
var DaffOrderStateModule = /** @class */ (function () {
    function DaffOrderStateModule() {
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
    return DaffOrderStateModule;
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

export { DAFF_ORDER_STORE_FEATURE_KEY, DaffOrderActionTypes, DaffOrderFacade, DaffOrderList, DaffOrderListFailure, DaffOrderListSuccess, DaffOrderLoad, DaffOrderLoadFailure, DaffOrderLoadSuccess, DaffOrderStateModule, DaffPlacedOrderGuard, DaffPlacedOrderGuardRedirectUrl, daffGetOrderAdapter, daffOrderEntitiesInitialState, daffOrderEntitiesReducer, daffOrderInitialState, daffOrderReducer, daffOrderReducers, getDaffOrderSelectors, DaffOrderEffects as ɵa };
//# sourceMappingURL=daffodil-order-state.js.map
