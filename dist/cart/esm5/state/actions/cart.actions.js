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
export { DaffCartActionTypes };
var DaffCartStorageFailure = /** @class */ (function () {
    function DaffCartStorageFailure(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartStorageFailureAction;
    }
    return DaffCartStorageFailure;
}());
export { DaffCartStorageFailure };
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
export { DaffCartLoad };
if (false) {
    /** @type {?} */
    DaffCartLoad.prototype.type;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartLoadSuccess = /** @class */ (function () {
    function DaffCartLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartLoadSuccessAction;
    }
    return DaffCartLoadSuccess;
}());
/**
 * @template T
 */
export { DaffCartLoadSuccess };
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
export { DaffCartLoadFailure };
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
export { DaffCartCreate };
if (false) {
    /** @type {?} */
    DaffCartCreate.prototype.type;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartCreateSuccess = /** @class */ (function () {
    function DaffCartCreateSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartCreateSuccessAction;
    }
    return DaffCartCreateSuccess;
}());
/**
 * @template T
 */
export { DaffCartCreateSuccess };
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
export { DaffCartCreateFailure };
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
export { DaffAddToCart };
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
export { DaffAddToCartSuccess };
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
export { DaffAddToCartFailure };
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
export { DaffCartClear };
if (false) {
    /** @type {?} */
    DaffCartClear.prototype.type;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartClearSuccess = /** @class */ (function () {
    function DaffCartClearSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.CartClearSuccessAction;
    }
    return DaffCartClearSuccess;
}());
/**
 * @template T
 */
export { DaffCartClearSuccess };
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
export { DaffCartClearFailure };
if (false) {
    /** @type {?} */
    DaffCartClearFailure.prototype.type;
    /** @type {?} */
    DaffCartClearFailure.prototype.payload;
}
/**
 * An action indicating that cart resolution begins.
 */
var /**
 * An action indicating that cart resolution begins.
 */
DaffResolveCart = /** @class */ (function () {
    function DaffResolveCart() {
        this.type = DaffCartActionTypes.ResolveCartAction;
    }
    return DaffResolveCart;
}());
/**
 * An action indicating that cart resolution begins.
 */
export { DaffResolveCart };
if (false) {
    /** @type {?} */
    DaffResolveCart.prototype.type;
}
/**
 * An action that indicates a user's cart is resolved successfully.
 * @template T
 */
var /**
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
/**
 * An action that indicates a user's cart is resolved successfully.
 * @template T
 */
export { DaffResolveCartSuccess };
if (false) {
    /** @type {?} */
    DaffResolveCartSuccess.prototype.type;
    /** @type {?} */
    DaffResolveCartSuccess.prototype.payload;
}
/**
 * An action that indicates that a cart failed to resolve.
 */
var /**
 * An action that indicates that a cart failed to resolve.
 */
DaffResolveCartFailure = /** @class */ (function () {
    function DaffResolveCartFailure(payload) {
        this.payload = payload;
        this.type = DaffCartActionTypes.ResolveCartFailureAction;
    }
    return DaffResolveCartFailure;
}());
/**
 * An action that indicates that a cart failed to resolve.
 */
export { DaffResolveCartFailure };
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
var /**
 * An action indicating that the cart resolution terminated as a result
 * of an attempted resolution on the server.
 */
DaffResolveCartServerSide = /** @class */ (function () {
    function DaffResolveCartServerSide() {
        this.type = DaffCartActionTypes.ResolveCartServerSideAction;
    }
    return DaffResolveCartServerSide;
}());
/**
 * An action indicating that the cart resolution terminated as a result
 * of an attempted resolution on the server.
 */
export { DaffResolveCartServerSide };
if (false) {
    /** @type {?} */
    DaffResolveCartServerSide.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJhY3Rpb25zL2NhcnQuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNRSwwQkFBMkIsd0NBQXdDO0lBQ25FLGdCQUFpQiw2QkFBNkI7SUFDOUMsdUJBQXdCLHFDQUFxQztJQUM3RCx1QkFBd0IscUNBQXFDO0lBQzdELGtCQUFtQiwrQkFBK0I7SUFDbEQseUJBQTBCLHVDQUF1QztJQUNqRSx5QkFBMEIsdUNBQXVDO0lBQ2pFLGlCQUFrQixvQ0FBb0M7SUFDdEQsd0JBQXlCLDRDQUE0QztJQUNyRSx3QkFBeUIsNENBQTRDO0lBQ3JFLGlCQUFrQiw4QkFBOEI7SUFDaEQsd0JBQXlCLHNDQUFzQztJQUMvRCx3QkFBeUIsc0NBQXNDO0lBQy9ELG1CQUFvQixnQ0FBZ0M7SUFDcEQsMEJBQTJCLHdDQUF3QztJQUNuRSw2QkFBOEIsNENBQTRDO0lBQzFFLDBCQUEyQix3Q0FBd0M7OztBQUdyRTtJQUdFLGdDQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcsbUJBQW1CLENBQUMsd0JBQXdCLENBQUM7SUFFaEIsQ0FBQztJQUNoRCw2QkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEMsc0NBQTZEOztJQUVqRCx5Q0FBOEI7O0FBRzVDO0lBQUE7UUFDVyxTQUFJLEdBQUcsbUJBQW1CLENBQUMsY0FBYyxDQUFDO0lBQ3JELENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBREMsNEJBQW1EOzs7OztBQUdyRDs7OztJQUdFLDZCQUFtQixPQUFVO1FBQVYsWUFBTyxHQUFQLE9BQU8sQ0FBRztRQUZwQixTQUFJLEdBQUcsbUJBQW1CLENBQUMscUJBQXFCLENBQUM7SUFFMUIsQ0FBQztJQUNuQywwQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7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QUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7O0lBSEMsc0NBQTZEOztJQUVqRCx5Q0FBaUI7Ozs7O0FBTS9COzs7O0lBR0UsZ0NBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRyxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQztJQUVoQixDQUFDO0lBQ2hELDZCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQyxzQ0FBNkQ7O0lBRWpELHlDQUE4Qjs7Ozs7O0FBTzVDOzs7OztJQUFBO1FBQ1csU0FBSSxHQUFHLG1CQUFtQixDQUFDLDJCQUEyQixDQUFDO0lBQ2xFLENBQUM7SUFBRCxnQ0FBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7Ozs7OztJQURDLHlDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlN0YXRlRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuZXhwb3J0IGVudW0gRGFmZkNhcnRBY3Rpb25UeXBlcyB7XG4gIENhcnRTdG9yYWdlRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgU3RvcmFnZSBGYWlsdXJlIEFjdGlvbicsXG4gIENhcnRMb2FkQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBMb2FkIEFjdGlvbicsXG4gIENhcnRMb2FkU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgTG9hZCBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRMb2FkRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgTG9hZCBGYWlsdXJlIEFjdGlvbicsXG4gIENhcnRDcmVhdGVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IENyZWF0ZSBBY3Rpb24nLFxuICBDYXJ0Q3JlYXRlU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgQ3JlYXRlIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydENyZWF0ZUZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IENyZWF0ZSBGYWlsdXJlIEFjdGlvbicsXG4gIEFkZFRvQ2FydEFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgQWRkIFRvIENhcnQgQWN0aW9uJyxcbiAgQWRkVG9DYXJ0U3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgQWRkIHRvIENhcnQgU3VjY2VzcyBBY3Rpb24nLFxuICBBZGRUb0NhcnRGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBBZGQgdG8gQ2FydCBGYWlsdXJlIEFjdGlvbicsXG4gIENhcnRDbGVhckFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgUmVzZXQgQWN0aW9uJyxcbiAgQ2FydENsZWFyU3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgUmVzZXQgU3VjY2VzcyBBY3Rpb24nLFxuICBDYXJ0Q2xlYXJGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBSZXNldCBGYWlsdXJlIEFjdGlvbicsXG4gIFJlc29sdmVDYXJ0QWN0aW9uID0gJ1tEYWZmQ2FydF0gUmVzb2x2ZSBDYXJ0IEFjdGlvbicsXG4gIFJlc29sdmVDYXJ0U3VjY2Vzc0FjdGlvbiA9ICdbRGFmZkNhcnRdIFJlc29sdmUgQ2FydCBTdWNjZXNzIEFjdGlvbicsXG4gIFJlc29sdmVDYXJ0U2VydmVyU2lkZUFjdGlvbiA9ICdbRGFmZkNhcnRdIFJlc29sdmUgQ2FydCBTZXJ2ZXIgU2lkZSBBY3Rpb24nLFxuICBSZXNvbHZlQ2FydEZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBSZXNvbHZlIENhcnQgRmFpbHVyZSBBY3Rpb24nLFxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRTdG9yYWdlRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFjdGlvblR5cGVzLkNhcnRTdG9yYWdlRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydExvYWQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRBY3Rpb25UeXBlcy5DYXJ0TG9hZEFjdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0TG9hZFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQ+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0QWN0aW9uVHlwZXMuQ2FydExvYWRTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRMb2FkRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFjdGlvblR5cGVzLkNhcnRMb2FkRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydENyZWF0ZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFjdGlvblR5cGVzLkNhcnRDcmVhdGVBY3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydENyZWF0ZVN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQ+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0QWN0aW9uVHlwZXMuQ2FydENyZWF0ZVN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHtpZDogVFsnaWQnXX0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydENyZWF0ZUZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRBY3Rpb25UeXBlcy5DYXJ0Q3JlYXRlRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQWRkVG9DYXJ0IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0QWN0aW9uVHlwZXMuQWRkVG9DYXJ0QWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7cHJvZHVjdElkOiBzdHJpbmcsIHF0eTogbnVtYmVyfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZBZGRUb0NhcnRTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0QWN0aW9uVHlwZXMuQWRkVG9DYXJ0U3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZkNhcnQpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQWRkVG9DYXJ0RmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFjdGlvblR5cGVzLkFkZFRvQ2FydEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRDbGVhciBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFjdGlvblR5cGVzLkNhcnRDbGVhckFjdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0Q2xlYXJTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFjdGlvblR5cGVzLkNhcnRDbGVhclN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8VD4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydENsZWFyRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFjdGlvblR5cGVzLkNhcnRDbGVhckZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7fVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiBpbmRpY2F0aW5nIHRoYXQgY2FydCByZXNvbHV0aW9uIGJlZ2lucy5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZSZXNvbHZlQ2FydCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFjdGlvblR5cGVzLlJlc29sdmVDYXJ0QWN0aW9uO1xufVxuXG4vKipcbiAqIEFuIGFjdGlvbiB0aGF0IGluZGljYXRlcyBhIHVzZXIncyBjYXJ0IGlzIHJlc29sdmVkIHN1Y2Nlc3NmdWxseS5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZSZXNvbHZlQ2FydFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQ+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0QWN0aW9uVHlwZXMuUmVzb2x2ZUNhcnRTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBUKSB7fVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiB0aGF0IGluZGljYXRlcyB0aGF0IGEgY2FydCBmYWlsZWQgdG8gcmVzb2x2ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZSZXNvbHZlQ2FydEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRBY3Rpb25UeXBlcy5SZXNvbHZlQ2FydEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7fVxufVxuXG4vKipcbiAqIEFuIGFjdGlvbiBpbmRpY2F0aW5nIHRoYXQgdGhlIGNhcnQgcmVzb2x1dGlvbiB0ZXJtaW5hdGVkIGFzIGEgcmVzdWx0XG4gKiBvZiBhbiBhdHRlbXB0ZWQgcmVzb2x1dGlvbiBvbiB0aGUgc2VydmVyLlxuICovXG5leHBvcnQgY2xhc3MgRGFmZlJlc29sdmVDYXJ0U2VydmVyU2lkZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFjdGlvblR5cGVzLlJlc29sdmVDYXJ0U2VydmVyU2lkZUFjdGlvbjtcbn1cblxuZXhwb3J0IHR5cGUgRGFmZkNhcnRBY3Rpb25zPFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0PiA9XG4gIHwgRGFmZkNhcnRTdG9yYWdlRmFpbHVyZVxuICB8IERhZmZDYXJ0TG9hZFxuICB8IERhZmZDYXJ0TG9hZFN1Y2Nlc3M8VD5cbiAgfCBEYWZmQ2FydExvYWRGYWlsdXJlXG4gIHwgRGFmZkNhcnRDcmVhdGVcbiAgfCBEYWZmQ2FydENyZWF0ZVN1Y2Nlc3M8VD5cbiAgfCBEYWZmQ2FydENyZWF0ZUZhaWx1cmVcbiAgfCBEYWZmQWRkVG9DYXJ0XG4gIHwgRGFmZkFkZFRvQ2FydFN1Y2Nlc3NcbiAgfCBEYWZmQWRkVG9DYXJ0RmFpbHVyZVxuICB8IERhZmZDYXJ0Q2xlYXJcbiAgfCBEYWZmQ2FydENsZWFyU3VjY2VzczxUPlxuICB8IERhZmZDYXJ0Q2xlYXJGYWlsdXJlXG4gIHwgRGFmZlJlc29sdmVDYXJ0XG4gIHwgRGFmZlJlc29sdmVDYXJ0U3VjY2VzczxUPlxuICB8IERhZmZSZXNvbHZlQ2FydFNlcnZlclNpZGVcbiAgfCBEYWZmUmVzb2x2ZUNhcnRGYWlsdXJlO1xuIl19