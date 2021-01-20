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
export { DaffCartActionTypes };
export class DaffCartStorageFailure {
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
export class DaffCartLoad {
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
export class DaffCartLoadSuccess {
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
export class DaffCartLoadFailure {
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
export class DaffCartCreate {
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
export class DaffCartCreateSuccess {
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
export class DaffCartCreateFailure {
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
export class DaffAddToCart {
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
export class DaffAddToCartSuccess {
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
export class DaffAddToCartFailure {
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
export class DaffCartClear {
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
export class DaffCartClearSuccess {
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
export class DaffCartClearFailure {
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
export class DaffResolveCart {
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
export class DaffResolveCartSuccess {
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
export class DaffResolveCartFailure {
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
export class DaffResolveCartServerSide {
    constructor() {
        this.type = DaffCartActionTypes.ResolveCartServerSideAction;
    }
}
if (false) {
    /** @type {?} */
    DaffResolveCartServerSide.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJhY3Rpb25zL2NhcnQuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNRSwwQkFBMkIsd0NBQXdDO0lBQ25FLGdCQUFpQiw2QkFBNkI7SUFDOUMsdUJBQXdCLHFDQUFxQztJQUM3RCx1QkFBd0IscUNBQXFDO0lBQzdELGtCQUFtQiwrQkFBK0I7SUFDbEQseUJBQTBCLHVDQUF1QztJQUNqRSx5QkFBMEIsdUNBQXVDO0lBQ2pFLGlCQUFrQixvQ0FBb0M7SUFDdEQsd0JBQXlCLDRDQUE0QztJQUNyRSx3QkFBeUIsNENBQTRDO0lBQ3JFLGlCQUFrQiw4QkFBOEI7SUFDaEQsd0JBQXlCLHNDQUFzQztJQUMvRCx3QkFBeUIsc0NBQXNDO0lBQy9ELG1CQUFvQixnQ0FBZ0M7SUFDcEQsMEJBQTJCLHdDQUF3QztJQUNuRSw2QkFBOEIsNENBQTRDO0lBQzFFLDBCQUEyQix3Q0FBd0M7OztBQUdyRSxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBR2pDLFlBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRyxtQkFBbUIsQ0FBQyx3QkFBd0IsQ0FBQztJQUVoQixDQUFDO0NBQy9DOzs7SUFIQyxzQ0FBNkQ7O0lBRWpELHlDQUE4Qjs7QUFHNUMsTUFBTSxPQUFPLFlBQVk7SUFBekI7UUFDVyxTQUFJLEdBQUcsbUJBQW1CLENBQUMsY0FBYyxDQUFDO0lBQ3JELENBQUM7Q0FBQTs7O0lBREMsNEJBQW1EOzs7OztBQUdyRCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBRzlCLFlBQW1CLE9BQVU7UUFBVixZQUFPLEdBQVAsT0FBTyxDQUFHO1FBRnBCLFNBQUksR0FBRyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQztJQUUxQixDQUFDO0NBQ2xDOzs7SUFIQyxtQ0FBMEQ7O0lBRTlDLHNDQUFpQjs7QUFH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QkFBd0IsQ0FBQztJQUVoQixDQUFDO0NBQy9DOzs7SUFIQyxzQ0FBNkQ7O0lBRWpELHlDQUE4Qjs7Ozs7O0FBTzVDLE1BQU0sT0FBTyx5QkFBeUI7SUFBdEM7UUFDVyxTQUFJLEdBQUcsbUJBQW1CLENBQUMsMkJBQTJCLENBQUM7SUFDbEUsQ0FBQztDQUFBOzs7SUFEQyx5Q0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZTdGF0ZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuaW1wb3J0IHsgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmV4cG9ydCBlbnVtIERhZmZDYXJ0QWN0aW9uVHlwZXMge1xuICBDYXJ0U3RvcmFnZUZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IFN0b3JhZ2UgRmFpbHVyZSBBY3Rpb24nLFxuICBDYXJ0TG9hZEFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgTG9hZCBBY3Rpb24nLFxuICBDYXJ0TG9hZFN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IExvYWQgU3VjY2VzcyBBY3Rpb24nLFxuICBDYXJ0TG9hZEZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IExvYWQgRmFpbHVyZSBBY3Rpb24nLFxuICBDYXJ0Q3JlYXRlQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBDcmVhdGUgQWN0aW9uJyxcbiAgQ2FydENyZWF0ZVN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IENyZWF0ZSBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRDcmVhdGVGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gQ2FydCBDcmVhdGUgRmFpbHVyZSBBY3Rpb24nLFxuICBBZGRUb0NhcnRBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IEFkZCBUbyBDYXJ0IEFjdGlvbicsXG4gIEFkZFRvQ2FydFN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IEFkZCB0byBDYXJ0IFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQWRkVG9DYXJ0RmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgQWRkIHRvIENhcnQgRmFpbHVyZSBBY3Rpb24nLFxuICBDYXJ0Q2xlYXJBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IFJlc2V0IEFjdGlvbicsXG4gIENhcnRDbGVhclN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBDYXJ0IFJlc2V0IFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydENsZWFyRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIENhcnQgUmVzZXQgRmFpbHVyZSBBY3Rpb24nLFxuICBSZXNvbHZlQ2FydEFjdGlvbiA9ICdbRGFmZkNhcnRdIFJlc29sdmUgQ2FydCBBY3Rpb24nLFxuICBSZXNvbHZlQ2FydFN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBSZXNvbHZlIENhcnQgU3VjY2VzcyBBY3Rpb24nLFxuICBSZXNvbHZlQ2FydFNlcnZlclNpZGVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBSZXNvbHZlIENhcnQgU2VydmVyIFNpZGUgQWN0aW9uJyxcbiAgUmVzb2x2ZUNhcnRGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gUmVzb2x2ZSBDYXJ0IEZhaWx1cmUgQWN0aW9uJyxcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U3RvcmFnZUZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRBY3Rpb25UeXBlcy5DYXJ0U3RvcmFnZUZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRMb2FkIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0QWN0aW9uVHlwZXMuQ2FydExvYWRBY3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydExvYWRTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFjdGlvblR5cGVzLkNhcnRMb2FkU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVCkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0TG9hZEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRBY3Rpb25UeXBlcy5DYXJ0TG9hZEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRDcmVhdGUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRBY3Rpb25UeXBlcy5DYXJ0Q3JlYXRlQWN0aW9uO1xufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRDcmVhdGVTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFjdGlvblR5cGVzLkNhcnRDcmVhdGVTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7aWQ6IFRbJ2lkJ119KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRDcmVhdGVGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0QWN0aW9uVHlwZXMuQ2FydENyZWF0ZUZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkFkZFRvQ2FydCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFjdGlvblR5cGVzLkFkZFRvQ2FydEFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge3Byb2R1Y3RJZDogc3RyaW5nLCBxdHk6IG51bWJlcn0pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQWRkVG9DYXJ0U3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFjdGlvblR5cGVzLkFkZFRvQ2FydFN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZDYXJ0KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkFkZFRvQ2FydEZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRBY3Rpb25UeXBlcy5BZGRUb0NhcnRGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0Q2xlYXIgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRBY3Rpb25UeXBlcy5DYXJ0Q2xlYXJBY3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydENsZWFyU3VjY2VzczxUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRBY3Rpb25UeXBlcy5DYXJ0Q2xlYXJTdWNjZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBQYXJ0aWFsPFQ+KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRDbGVhckZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRBY3Rpb25UeXBlcy5DYXJ0Q2xlYXJGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gaW5kaWNhdGluZyB0aGF0IGNhcnQgcmVzb2x1dGlvbiBiZWdpbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmUmVzb2x2ZUNhcnQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRBY3Rpb25UeXBlcy5SZXNvbHZlQ2FydEFjdGlvbjtcbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdGhhdCBpbmRpY2F0ZXMgYSB1c2VyJ3MgY2FydCBpcyByZXNvbHZlZCBzdWNjZXNzZnVsbHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmUmVzb2x2ZUNhcnRTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydEFjdGlvblR5cGVzLlJlc29sdmVDYXJ0U3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVCkge31cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gdGhhdCBpbmRpY2F0ZXMgdGhhdCBhIGNhcnQgZmFpbGVkIHRvIHJlc29sdmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmUmVzb2x2ZUNhcnRGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0QWN0aW9uVHlwZXMuUmVzb2x2ZUNhcnRGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuLyoqXG4gKiBBbiBhY3Rpb24gaW5kaWNhdGluZyB0aGF0IHRoZSBjYXJ0IHJlc29sdXRpb24gdGVybWluYXRlZCBhcyBhIHJlc3VsdFxuICogb2YgYW4gYXR0ZW1wdGVkIHJlc29sdXRpb24gb24gdGhlIHNlcnZlci5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZSZXNvbHZlQ2FydFNlcnZlclNpZGUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRBY3Rpb25UeXBlcy5SZXNvbHZlQ2FydFNlcnZlclNpZGVBY3Rpb247XG59XG5cbmV4cG9ydCB0eXBlIERhZmZDYXJ0QWN0aW9uczxUIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydD4gPVxuICB8IERhZmZDYXJ0U3RvcmFnZUZhaWx1cmVcbiAgfCBEYWZmQ2FydExvYWRcbiAgfCBEYWZmQ2FydExvYWRTdWNjZXNzPFQ+XG4gIHwgRGFmZkNhcnRMb2FkRmFpbHVyZVxuICB8IERhZmZDYXJ0Q3JlYXRlXG4gIHwgRGFmZkNhcnRDcmVhdGVTdWNjZXNzPFQ+XG4gIHwgRGFmZkNhcnRDcmVhdGVGYWlsdXJlXG4gIHwgRGFmZkFkZFRvQ2FydFxuICB8IERhZmZBZGRUb0NhcnRTdWNjZXNzXG4gIHwgRGFmZkFkZFRvQ2FydEZhaWx1cmVcbiAgfCBEYWZmQ2FydENsZWFyXG4gIHwgRGFmZkNhcnRDbGVhclN1Y2Nlc3M8VD5cbiAgfCBEYWZmQ2FydENsZWFyRmFpbHVyZVxuICB8IERhZmZSZXNvbHZlQ2FydFxuICB8IERhZmZSZXNvbHZlQ2FydFN1Y2Nlc3M8VD5cbiAgfCBEYWZmUmVzb2x2ZUNhcnRTZXJ2ZXJTaWRlXG4gIHwgRGFmZlJlc29sdmVDYXJ0RmFpbHVyZTtcbiJdfQ==