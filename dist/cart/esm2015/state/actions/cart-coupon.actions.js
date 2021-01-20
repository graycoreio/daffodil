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
export { DaffCartCouponActionTypes };
/**
 * @template T
 */
export class DaffCartCouponApply {
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
export class DaffCartCouponApplySuccess {
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
export class DaffCartCouponApplyFailure {
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
export class DaffCartCouponList {
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
export class DaffCartCouponListSuccess {
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
export class DaffCartCouponListFailure {
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
export class DaffCartCouponRemove {
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
export class DaffCartCouponRemoveSuccess {
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
export class DaffCartCouponRemoveFailure {
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
export class DaffCartCouponRemoveAll {
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
export class DaffCartCouponRemoveAllSuccess {
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
export class DaffCartCouponRemoveAllFailure {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiYWN0aW9ucy9jYXJ0LWNvdXBvbi5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQU1FLHVCQUF3QixxQ0FBcUM7SUFDN0QsOEJBQStCLDZDQUE2QztJQUM1RSw4QkFBK0IsNkNBQTZDO0lBQzVFLHNCQUF1QixvQ0FBb0M7SUFDM0QsNkJBQThCLDRDQUE0QztJQUMxRSw2QkFBOEIsNENBQTRDO0lBQzFFLHdCQUF5QixzQ0FBc0M7SUFDL0QsK0JBQWdDLDhDQUE4QztJQUM5RSwrQkFBZ0MsOENBQThDO0lBQzlFLDJCQUE0QiwwQ0FBMEM7SUFDdEUsa0NBQW1DLGtEQUFrRDtJQUNyRixrQ0FBbUMsa0RBQWtEOzs7Ozs7QUFHdkYsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUc5QixZQUFtQixPQUFVO1FBQVYsWUFBTyxHQUFQLE9BQU8sQ0FBRztRQUZwQixTQUFJLEdBQUcseUJBQXlCLENBQUMscUJBQXFCLENBQUM7SUFFaEMsQ0FBQztDQUNsQzs7O0lBSEMsbUNBQWdFOztJQUVwRCxzQ0FBaUI7Ozs7O0FBRy9CLE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFHckMsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUY3QixTQUFJLEdBQUcseUJBQXlCLENBQUMsNEJBQTRCLENBQUM7SUFFOUIsQ0FBQztDQUMzQzs7O0lBSEMsMENBQXVFOztJQUUzRCw2Q0FBMEI7O0FBR3hDLE1BQU0sT0FBTywwQkFBMEI7Ozs7SUFHckMsWUFBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLHlCQUF5QixDQUFDLDRCQUE0QixDQUFDO0lBRTFCLENBQUM7Q0FDL0M7OztJQUhDLDBDQUF1RTs7SUFFM0QsNkNBQThCOztBQUc1QyxNQUFNLE9BQU8sa0JBQWtCO0lBQS9CO1FBQ1csU0FBSSxHQUFHLHlCQUF5QixDQUFDLG9CQUFvQixDQUFDO0lBQ2pFLENBQUM7Q0FBQTs7O0lBREMsa0NBQStEOzs7OztBQUdqRSxNQUFNLE9BQU8seUJBQXlCOzs7O0lBR3BDLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRnRCLFNBQUksR0FBRyx5QkFBeUIsQ0FBQywyQkFBMkIsQ0FBQztJQUVwQyxDQUFDO0NBQ3BDOzs7SUFIQyx5Q0FBc0U7O0lBRTFELDRDQUFtQjs7QUFHakMsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQUdwQyxZQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcseUJBQXlCLENBQUMsMkJBQTJCLENBQUM7SUFFekIsQ0FBQztDQUMvQzs7O0lBSEMseUNBQXNFOztJQUUxRCw0Q0FBOEI7Ozs7O0FBRzVDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFHL0IsWUFBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFGcEIsU0FBSSxHQUFHLHlCQUF5QixDQUFDLHNCQUFzQixDQUFDO0lBRWpDLENBQUM7Q0FDbEM7OztJQUhDLG9DQUFpRTs7SUFFckQsdUNBQWlCOzs7OztBQUcvQixNQUFNLE9BQU8sMkJBQTJCOzs7O0lBR3RDLFlBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFGN0IsU0FBSSxHQUFHLHlCQUF5QixDQUFDLDZCQUE2QixDQUFDO0lBRS9CLENBQUM7Q0FDM0M7OztJQUhDLDJDQUF3RTs7SUFFNUQsOENBQTBCOztBQUd4QyxNQUFNLE9BQU8sMkJBQTJCOzs7O0lBR3RDLFlBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRyx5QkFBeUIsQ0FBQyw2QkFBNkIsQ0FBQztJQUUzQixDQUFDO0NBQy9DOzs7SUFIQywyQ0FBd0U7O0lBRTVELDhDQUE4Qjs7QUFHNUMsTUFBTSxPQUFPLHVCQUF1QjtJQUFwQztRQUNXLFNBQUksR0FBRyx5QkFBeUIsQ0FBQyx5QkFBeUIsQ0FBQztJQUN0RSxDQUFDO0NBQUE7OztJQURDLHVDQUFvRTs7Ozs7QUFHdEUsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQUd6QyxZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRjdCLFNBQUksR0FBRyx5QkFBeUIsQ0FBQyxnQ0FBZ0MsQ0FBQztJQUVsQyxDQUFDO0NBQzNDOzs7SUFIQyw4Q0FBMkU7O0lBRS9ELGlEQUEwQjs7QUFHeEMsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQUd6QyxZQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcseUJBQXlCLENBQUMsZ0NBQWdDLENBQUM7SUFFOUIsQ0FBQztDQUMvQzs7O0lBSEMsOENBQTJFOztJQUUvRCxpREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZTdGF0ZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuaW1wb3J0IHsgRGFmZkNhcnRDb3Vwb24sIERhZmZDYXJ0IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuXG5leHBvcnQgZW51bSBEYWZmQ2FydENvdXBvbkFjdGlvblR5cGVzIHtcbiAgQ2FydENvdXBvbkFwcGx5QWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBDb3Vwb24gQXBwbHkgQWN0aW9uJyxcbiAgQ2FydENvdXBvbkFwcGx5U3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgQ291cG9uIEFwcGx5IFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydENvdXBvbkFwcGx5RmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgQ291cG9uIEFwcGx5IEZhaWx1cmUgQWN0aW9uJyxcbiAgQ2FydENvdXBvbkxpc3RBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IENvdXBvbiBMaXN0IEFjdGlvbicsXG4gIENhcnRDb3Vwb25MaXN0U3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgQ291cG9uIExpc3QgU3VjY2VzcyBBY3Rpb24nLFxuICBDYXJ0Q291cG9uTGlzdEZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IENvdXBvbiBMaXN0IEZhaWx1cmUgQWN0aW9uJyxcbiAgQ2FydENvdXBvblJlbW92ZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgQ291cG9uIFJlbW92ZSBBY3Rpb24nLFxuICBDYXJ0Q291cG9uUmVtb3ZlU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgQ291cG9uIFJlbW92ZSBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRDb3Vwb25SZW1vdmVGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBDb3Vwb24gUmVtb3ZlIEZhaWx1cmUgQWN0aW9uJyxcbiAgQ2FydENvdXBvblJlbW92ZUFsbEFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgQ291cG9uIFJlbW92ZSBBbGwgQWN0aW9uJyxcbiAgQ2FydENvdXBvblJlbW92ZUFsbFN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IENvdXBvbiBSZW1vdmUgQWxsIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydENvdXBvblJlbW92ZUFsbEZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IENvdXBvbiBSZW1vdmUgQWxsIEZhaWx1cmUgQWN0aW9uJ1xufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRDb3Vwb25BcHBseTxUIGV4dGVuZHMgRGFmZkNhcnRDb3Vwb24gPSBEYWZmQ2FydENvdXBvbj4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRDb3Vwb25BY3Rpb25UeXBlcy5DYXJ0Q291cG9uQXBwbHlBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFQpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydENvdXBvbkFwcGx5U3VjY2VzczxUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRDb3Vwb25BY3Rpb25UeXBlcy5DYXJ0Q291cG9uQXBwbHlTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYXJ0aWFsPFQ+KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRDb3Vwb25BcHBseUZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRDb3Vwb25BY3Rpb25UeXBlcy5DYXJ0Q291cG9uQXBwbHlGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0Q291cG9uTGlzdCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydENvdXBvbkFjdGlvblR5cGVzLkNhcnRDb3Vwb25MaXN0QWN0aW9uO1xufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRDb3Vwb25MaXN0U3VjY2VzczxUIGV4dGVuZHMgRGFmZkNhcnRDb3Vwb24gPSBEYWZmQ2FydENvdXBvbj4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRDb3Vwb25BY3Rpb25UeXBlcy5DYXJ0Q291cG9uTGlzdFN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFRbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0Q291cG9uTGlzdEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRDb3Vwb25BY3Rpb25UeXBlcy5DYXJ0Q291cG9uTGlzdEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRDb3Vwb25SZW1vdmU8VCBleHRlbmRzIERhZmZDYXJ0Q291cG9uID0gRGFmZkNhcnRDb3Vwb24+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0Q291cG9uQWN0aW9uVHlwZXMuQ2FydENvdXBvblJlbW92ZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVCkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0Q291cG9uUmVtb3ZlU3VjY2VzczxUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRDb3Vwb25BY3Rpb25UeXBlcy5DYXJ0Q291cG9uUmVtb3ZlU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxUPikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0Q291cG9uUmVtb3ZlRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydENvdXBvbkFjdGlvblR5cGVzLkNhcnRDb3Vwb25SZW1vdmVGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0Q291cG9uUmVtb3ZlQWxsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0Q291cG9uQWN0aW9uVHlwZXMuQ2FydENvdXBvblJlbW92ZUFsbEFjdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0Q291cG9uUmVtb3ZlQWxsU3VjY2VzczxUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRDb3Vwb25BY3Rpb25UeXBlcy5DYXJ0Q291cG9uUmVtb3ZlQWxsU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxUPikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0Q291cG9uUmVtb3ZlQWxsRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydENvdXBvbkFjdGlvblR5cGVzLkNhcnRDb3Vwb25SZW1vdmVBbGxGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZkNhcnRDb3Vwb25BY3Rpb25zPFxuICBUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydCxcbiAgViBleHRlbmRzIERhZmZDYXJ0Q291cG9uID0gRGFmZkNhcnRDb3Vwb25cbj4gPVxuICB8IERhZmZDYXJ0Q291cG9uQXBwbHk8Vj5cbiAgfCBEYWZmQ2FydENvdXBvbkFwcGx5U3VjY2VzczxUPlxuICB8IERhZmZDYXJ0Q291cG9uQXBwbHlGYWlsdXJlXG4gIHwgRGFmZkNhcnRDb3Vwb25MaXN0XG4gIHwgRGFmZkNhcnRDb3Vwb25MaXN0U3VjY2VzczxWPlxuICB8IERhZmZDYXJ0Q291cG9uTGlzdEZhaWx1cmVcbiAgfCBEYWZmQ2FydENvdXBvblJlbW92ZTxWPlxuICB8IERhZmZDYXJ0Q291cG9uUmVtb3ZlU3VjY2VzczxUPlxuICB8IERhZmZDYXJ0Q291cG9uUmVtb3ZlRmFpbHVyZVxuICB8IERhZmZDYXJ0Q291cG9uUmVtb3ZlQWxsXG4gIHwgRGFmZkNhcnRDb3Vwb25SZW1vdmVBbGxTdWNjZXNzPFQ+XG4gIHwgRGFmZkNhcnRDb3Vwb25SZW1vdmVBbGxGYWlsdXJlO1xuIl19