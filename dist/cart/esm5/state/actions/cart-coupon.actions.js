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
export { DaffCartCouponActionTypes };
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartCouponApply = /** @class */ (function () {
    function DaffCartCouponApply(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponApplyAction;
    }
    return DaffCartCouponApply;
}());
/**
 * @template T
 */
export { DaffCartCouponApply };
if (false) {
    /** @type {?} */
    DaffCartCouponApply.prototype.type;
    /** @type {?} */
    DaffCartCouponApply.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartCouponApplySuccess = /** @class */ (function () {
    function DaffCartCouponApplySuccess(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponApplySuccessAction;
    }
    return DaffCartCouponApplySuccess;
}());
/**
 * @template T
 */
export { DaffCartCouponApplySuccess };
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
export { DaffCartCouponApplyFailure };
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
export { DaffCartCouponList };
if (false) {
    /** @type {?} */
    DaffCartCouponList.prototype.type;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartCouponListSuccess = /** @class */ (function () {
    function DaffCartCouponListSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponListSuccessAction;
    }
    return DaffCartCouponListSuccess;
}());
/**
 * @template T
 */
export { DaffCartCouponListSuccess };
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
export { DaffCartCouponListFailure };
if (false) {
    /** @type {?} */
    DaffCartCouponListFailure.prototype.type;
    /** @type {?} */
    DaffCartCouponListFailure.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartCouponRemove = /** @class */ (function () {
    function DaffCartCouponRemove(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponRemoveAction;
    }
    return DaffCartCouponRemove;
}());
/**
 * @template T
 */
export { DaffCartCouponRemove };
if (false) {
    /** @type {?} */
    DaffCartCouponRemove.prototype.type;
    /** @type {?} */
    DaffCartCouponRemove.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartCouponRemoveSuccess = /** @class */ (function () {
    function DaffCartCouponRemoveSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponRemoveSuccessAction;
    }
    return DaffCartCouponRemoveSuccess;
}());
/**
 * @template T
 */
export { DaffCartCouponRemoveSuccess };
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
export { DaffCartCouponRemoveFailure };
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
export { DaffCartCouponRemoveAll };
if (false) {
    /** @type {?} */
    DaffCartCouponRemoveAll.prototype.type;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartCouponRemoveAllSuccess = /** @class */ (function () {
    function DaffCartCouponRemoveAllSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartCouponActionTypes.CartCouponRemoveAllSuccessAction;
    }
    return DaffCartCouponRemoveAllSuccess;
}());
/**
 * @template T
 */
export { DaffCartCouponRemoveAllSuccess };
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
export { DaffCartCouponRemoveAllFailure };
if (false) {
    /** @type {?} */
    DaffCartCouponRemoveAllFailure.prototype.type;
    /** @type {?} */
    DaffCartCouponRemoveAllFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L3N0YXRlLyIsInNvdXJjZXMiOlsiYWN0aW9ucy9jYXJ0LWNvdXBvbi5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQU1FLHVCQUF3QixxQ0FBcUM7SUFDN0QsOEJBQStCLDZDQUE2QztJQUM1RSw4QkFBK0IsNkNBQTZDO0lBQzVFLHNCQUF1QixvQ0FBb0M7SUFDM0QsNkJBQThCLDRDQUE0QztJQUMxRSw2QkFBOEIsNENBQTRDO0lBQzFFLHdCQUF5QixzQ0FBc0M7SUFDL0QsK0JBQWdDLDhDQUE4QztJQUM5RSwrQkFBZ0MsOENBQThDO0lBQzlFLDJCQUE0QiwwQ0FBMEM7SUFDdEUsa0NBQW1DLGtEQUFrRDtJQUNyRixrQ0FBbUMsa0RBQWtEOzs7Ozs7QUFHdkY7Ozs7SUFHRSw2QkFBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFGcEIsU0FBSSxHQUFHLHlCQUF5QixDQUFDLHFCQUFxQixDQUFDO0lBRWhDLENBQUM7SUFDbkMsMEJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLG1DQUFnRTs7SUFFcEQsc0NBQWlCOzs7OztBQUcvQjs7OztJQUdFLG9DQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRjdCLFNBQUksR0FBRyx5QkFBeUIsQ0FBQyw0QkFBNEIsQ0FBQztJQUU5QixDQUFDO0lBQzVDLGlDQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQywwQ0FBdUU7O0lBRTNELDZDQUEwQjs7QUFHeEM7SUFHRSxvQ0FBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLHlCQUF5QixDQUFDLDRCQUE0QixDQUFDO0lBRTFCLENBQUM7SUFDaEQsaUNBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLDBDQUF1RTs7SUFFM0QsNkNBQThCOztBQUc1QztJQUFBO1FBQ1csU0FBSSxHQUFHLHlCQUF5QixDQUFDLG9CQUFvQixDQUFDO0lBQ2pFLENBQUM7SUFBRCx5QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsa0NBQStEOzs7OztBQUdqRTs7OztJQUdFLG1DQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUZ0QixTQUFJLEdBQUcseUJBQXlCLENBQUMsMkJBQTJCLENBQUM7SUFFcEMsQ0FBQztJQUNyQyxnQ0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7O0lBSEMseUNBQXNFOztJQUUxRCw0Q0FBbUI7O0FBR2pDO0lBR0UsbUNBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRyx5QkFBeUIsQ0FBQywyQkFBMkIsQ0FBQztJQUV6QixDQUFDO0lBQ2hELGdDQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQyx5Q0FBc0U7O0lBRTFELDRDQUE4Qjs7Ozs7QUFHNUM7Ozs7SUFHRSw4QkFBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFGcEIsU0FBSSxHQUFHLHlCQUF5QixDQUFDLHNCQUFzQixDQUFDO0lBRWpDLENBQUM7SUFDbkMsMkJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLG9DQUFpRTs7SUFFckQsdUNBQWlCOzs7OztBQUcvQjs7OztJQUdFLHFDQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRjdCLFNBQUksR0FBRyx5QkFBeUIsQ0FBQyw2QkFBNkIsQ0FBQztJQUUvQixDQUFDO0lBQzVDLGtDQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQywyQ0FBd0U7O0lBRTVELDhDQUEwQjs7QUFHeEM7SUFHRSxxQ0FBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLHlCQUF5QixDQUFDLDZCQUE2QixDQUFDO0lBRTNCLENBQUM7SUFDaEQsa0NBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLDJDQUF3RTs7SUFFNUQsOENBQThCOztBQUc1QztJQUFBO1FBQ1csU0FBSSxHQUFHLHlCQUF5QixDQUFDLHlCQUF5QixDQUFDO0lBQ3RFLENBQUM7SUFBRCw4QkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsdUNBQW9FOzs7OztBQUd0RTs7OztJQUdFLHdDQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRjdCLFNBQUksR0FBRyx5QkFBeUIsQ0FBQyxnQ0FBZ0MsQ0FBQztJQUVsQyxDQUFDO0lBQzVDLHFDQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQyw4Q0FBMkU7O0lBRS9ELGlEQUEwQjs7QUFHeEM7SUFHRSx3Q0FBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLHlCQUF5QixDQUFDLGdDQUFnQyxDQUFDO0lBRTlCLENBQUM7SUFDaEQscUNBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLDhDQUEyRTs7SUFFL0QsaURBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmU3RhdGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcbmltcG9ydCB7IERhZmZDYXJ0Q291cG9uLCBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuZXhwb3J0IGVudW0gRGFmZkNhcnRDb3Vwb25BY3Rpb25UeXBlcyB7XG4gIENhcnRDb3Vwb25BcHBseUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgQ291cG9uIEFwcGx5IEFjdGlvbicsXG4gIENhcnRDb3Vwb25BcHBseVN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IENvdXBvbiBBcHBseSBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRDb3Vwb25BcHBseUZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IENvdXBvbiBBcHBseSBGYWlsdXJlIEFjdGlvbicsXG4gIENhcnRDb3Vwb25MaXN0QWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBDb3Vwb24gTGlzdCBBY3Rpb24nLFxuICBDYXJ0Q291cG9uTGlzdFN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IENvdXBvbiBMaXN0IFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydENvdXBvbkxpc3RGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBDb3Vwb24gTGlzdCBGYWlsdXJlIEFjdGlvbicsXG4gIENhcnRDb3Vwb25SZW1vdmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IENvdXBvbiBSZW1vdmUgQWN0aW9uJyxcbiAgQ2FydENvdXBvblJlbW92ZVN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IENvdXBvbiBSZW1vdmUgU3VjY2VzcyBBY3Rpb24nLFxuICBDYXJ0Q291cG9uUmVtb3ZlRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgQ291cG9uIFJlbW92ZSBGYWlsdXJlIEFjdGlvbicsXG4gIENhcnRDb3Vwb25SZW1vdmVBbGxBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IENvdXBvbiBSZW1vdmUgQWxsIEFjdGlvbicsXG4gIENhcnRDb3Vwb25SZW1vdmVBbGxTdWNjZXNzQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBDb3Vwb24gUmVtb3ZlIEFsbCBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRDb3Vwb25SZW1vdmVBbGxGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBDb3Vwb24gUmVtb3ZlIEFsbCBGYWlsdXJlIEFjdGlvbidcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0Q291cG9uQXBwbHk8VCBleHRlbmRzIERhZmZDYXJ0Q291cG9uID0gRGFmZkNhcnRDb3Vwb24+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0Q291cG9uQWN0aW9uVHlwZXMuQ2FydENvdXBvbkFwcGx5QWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRDb3Vwb25BcHBseVN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQ+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0Q291cG9uQWN0aW9uVHlwZXMuQ2FydENvdXBvbkFwcGx5U3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxUPikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0Q291cG9uQXBwbHlGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0Q291cG9uQWN0aW9uVHlwZXMuQ2FydENvdXBvbkFwcGx5RmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydENvdXBvbkxpc3QgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRDb3Vwb25BY3Rpb25UeXBlcy5DYXJ0Q291cG9uTGlzdEFjdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0Q291cG9uTGlzdFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0Q291cG9uID0gRGFmZkNhcnRDb3Vwb24+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0Q291cG9uQWN0aW9uVHlwZXMuQ2FydENvdXBvbkxpc3RTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUW10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydENvdXBvbkxpc3RGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0Q291cG9uQWN0aW9uVHlwZXMuQ2FydENvdXBvbkxpc3RGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0Q291cG9uUmVtb3ZlPFQgZXh0ZW5kcyBEYWZmQ2FydENvdXBvbiA9IERhZmZDYXJ0Q291cG9uPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydENvdXBvbkFjdGlvblR5cGVzLkNhcnRDb3Vwb25SZW1vdmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFQpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydENvdXBvblJlbW92ZVN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQ+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0Q291cG9uQWN0aW9uVHlwZXMuQ2FydENvdXBvblJlbW92ZVN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8VD4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydENvdXBvblJlbW92ZUZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRDb3Vwb25BY3Rpb25UeXBlcy5DYXJ0Q291cG9uUmVtb3ZlRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydENvdXBvblJlbW92ZUFsbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydENvdXBvbkFjdGlvblR5cGVzLkNhcnRDb3Vwb25SZW1vdmVBbGxBY3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydENvdXBvblJlbW92ZUFsbFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQ+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0Q291cG9uQWN0aW9uVHlwZXMuQ2FydENvdXBvblJlbW92ZUFsbFN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8VD4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydENvdXBvblJlbW92ZUFsbEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRDb3Vwb25BY3Rpb25UeXBlcy5DYXJ0Q291cG9uUmVtb3ZlQWxsRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCB0eXBlIERhZmZDYXJ0Q291cG9uQWN0aW9uczxcbiAgVCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQsXG4gIFYgZXh0ZW5kcyBEYWZmQ2FydENvdXBvbiA9IERhZmZDYXJ0Q291cG9uXG4+ID1cbiAgfCBEYWZmQ2FydENvdXBvbkFwcGx5PFY+XG4gIHwgRGFmZkNhcnRDb3Vwb25BcHBseVN1Y2Nlc3M8VD5cbiAgfCBEYWZmQ2FydENvdXBvbkFwcGx5RmFpbHVyZVxuICB8IERhZmZDYXJ0Q291cG9uTGlzdFxuICB8IERhZmZDYXJ0Q291cG9uTGlzdFN1Y2Nlc3M8Vj5cbiAgfCBEYWZmQ2FydENvdXBvbkxpc3RGYWlsdXJlXG4gIHwgRGFmZkNhcnRDb3Vwb25SZW1vdmU8Vj5cbiAgfCBEYWZmQ2FydENvdXBvblJlbW92ZVN1Y2Nlc3M8VD5cbiAgfCBEYWZmQ2FydENvdXBvblJlbW92ZUZhaWx1cmVcbiAgfCBEYWZmQ2FydENvdXBvblJlbW92ZUFsbFxuICB8IERhZmZDYXJ0Q291cG9uUmVtb3ZlQWxsU3VjY2VzczxUPlxuICB8IERhZmZDYXJ0Q291cG9uUmVtb3ZlQWxsRmFpbHVyZTtcbiJdfQ==