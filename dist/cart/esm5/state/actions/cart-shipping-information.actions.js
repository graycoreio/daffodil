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
export { DaffCartShippingInformationActionTypes };
var DaffCartShippingInformationLoad = /** @class */ (function () {
    function DaffCartShippingInformationLoad() {
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction;
    }
    return DaffCartShippingInformationLoad;
}());
export { DaffCartShippingInformationLoad };
if (false) {
    /** @type {?} */
    DaffCartShippingInformationLoad.prototype.type;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartShippingInformationLoadSuccess = /** @class */ (function () {
    function DaffCartShippingInformationLoadSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadSuccessAction;
    }
    return DaffCartShippingInformationLoadSuccess;
}());
/**
 * @template T
 */
export { DaffCartShippingInformationLoadSuccess };
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
export { DaffCartShippingInformationLoadFailure };
if (false) {
    /** @type {?} */
    DaffCartShippingInformationLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationLoadFailure.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartShippingInformationUpdate = /** @class */ (function () {
    function DaffCartShippingInformationUpdate(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction;
    }
    return DaffCartShippingInformationUpdate;
}());
/**
 * @template T
 */
export { DaffCartShippingInformationUpdate };
if (false) {
    /** @type {?} */
    DaffCartShippingInformationUpdate.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationUpdate.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartShippingInformationUpdateSuccess = /** @class */ (function () {
    function DaffCartShippingInformationUpdateSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction;
    }
    return DaffCartShippingInformationUpdateSuccess;
}());
/**
 * @template T
 */
export { DaffCartShippingInformationUpdateSuccess };
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
export { DaffCartShippingInformationUpdateFailure };
if (false) {
    /** @type {?} */
    DaffCartShippingInformationUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationUpdateFailure.prototype.payload;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartShippingInformationDelete = /** @class */ (function () {
    function DaffCartShippingInformationDelete(id) {
        this.id = id;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction;
    }
    return DaffCartShippingInformationDelete;
}());
/**
 * @template T
 */
export { DaffCartShippingInformationDelete };
if (false) {
    /** @type {?} */
    DaffCartShippingInformationDelete.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationDelete.prototype.id;
}
/**
 * @template T
 */
var /**
 * @template T
 */
DaffCartShippingInformationDeleteSuccess = /** @class */ (function () {
    function DaffCartShippingInformationDeleteSuccess(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction;
    }
    return DaffCartShippingInformationDeleteSuccess;
}());
/**
 * @template T
 */
export { DaffCartShippingInformationDeleteSuccess };
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
export { DaffCartShippingInformationDeleteFailure };
if (false) {
    /** @type {?} */
    DaffCartShippingInformationDeleteFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationDeleteFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJhY3Rpb25zL2NhcnQtc2hpcHBpbmctaW5mb3JtYXRpb24uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNRSxtQ0FBb0MsNkNBQTZDO0lBQ2pGLDBDQUEyQyxxREFBcUQ7SUFDaEcsMENBQTJDLHFEQUFxRDtJQUNoRyxxQ0FBc0MsK0NBQStDO0lBQ3JGLDRDQUE2Qyx1REFBdUQ7SUFDcEcsNENBQTZDLHVEQUF1RDtJQUNwRyxxQ0FBc0MsK0NBQStDO0lBQ3JGLDRDQUE2Qyx1REFBdUQ7SUFDcEcsNENBQTZDLHVEQUF1RDs7O0FBR3RHO0lBQUE7UUFDVyxTQUFJLEdBQUcsc0NBQXNDLENBQUMsaUNBQWlDLENBQUM7SUFDM0YsQ0FBQztJQUFELHNDQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEQywrQ0FBeUY7Ozs7O0FBRzNGOzs7O0lBR0UsZ0RBQW1CLE9BQVU7UUFBVixZQUFPLEdBQVAsT0FBTyxDQUFHO1FBRnBCLFNBQUksR0FBRyxzQ0FBc0MsQ0FBQyx3Q0FBd0MsQ0FBQztJQUVoRSxDQUFDO0lBQ25DLDZDQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQyxzREFBZ0c7O0lBRXBGLHlEQUFpQjs7QUFHL0I7SUFHRSxnREFBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLHNDQUFzQyxDQUFDLHdDQUF3QyxDQUFDO0lBRW5ELENBQUM7SUFDaEQsNkNBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLHNEQUFnRzs7SUFFcEYseURBQThCOzs7OztBQUc1Qzs7OztJQUdFLDJDQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRjdCLFNBQUksR0FBRyxzQ0FBc0MsQ0FBQyxtQ0FBbUMsQ0FBQztJQUVsRCxDQUFDO0lBQzVDLHdDQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQyxpREFBMkY7O0lBRS9FLG9EQUEwQjs7Ozs7QUFHeEM7Ozs7SUFHRSxrREFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUY3QixTQUFJLEdBQUcsc0NBQXNDLENBQUMsMENBQTBDLENBQUM7SUFFekQsQ0FBQztJQUM1QywrQ0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7O0lBSEMsd0RBQWtHOztJQUV0RiwyREFBMEI7O0FBR3hDO0lBR0Usa0RBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRyxzQ0FBc0MsQ0FBQywwQ0FBMEMsQ0FBQztJQUVyRCxDQUFDO0lBQ2hELCtDQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQyx3REFBa0c7O0lBRXRGLDJEQUE4Qjs7Ozs7QUFHNUM7Ozs7SUFHRSwyQ0FBbUIsRUFBWTtRQUFaLE9BQUUsR0FBRixFQUFFLENBQVU7UUFGdEIsU0FBSSxHQUFHLHNDQUFzQyxDQUFDLG1DQUFtQyxDQUFDO0lBRXpELENBQUM7SUFDckMsd0NBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7OztJQUhDLGlEQUEyRjs7SUFFL0UsK0NBQW1COzs7OztBQUdqQzs7OztJQUdFLGtEQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRjdCLFNBQUksR0FBRyxzQ0FBc0MsQ0FBQywwQ0FBMEMsQ0FBQztJQUV6RCxDQUFDO0lBQzVDLCtDQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7SUFIQyx3REFBa0c7O0lBRXRGLDJEQUEwQjs7QUFHeEM7SUFHRSxrREFBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFGakMsU0FBSSxHQUFHLHNDQUFzQyxDQUFDLDBDQUEwQyxDQUFDO0lBRXJELENBQUM7SUFDaEQsK0NBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLHdEQUFrRzs7SUFFdEYsMkRBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmU3RhdGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcbmltcG9ydCB7IERhZmZDYXJ0U2hpcHBpbmdSYXRlLCBEYWZmQ2FydCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuZXhwb3J0IGVudW0gRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uQWN0aW9uVHlwZXMge1xuICBDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBJbmZvcm1hdGlvbiBMb2FkIEFjdGlvbicsXG4gIENhcnRTaGlwcGluZ0luZm9ybWF0aW9uTG9hZFN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBJbmZvcm1hdGlvbiBMb2FkIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkRmFpbHVyZUFjdGlvbiA9ICdbRGFmZkNhcnRdIFNoaXBwaW5nIEluZm9ybWF0aW9uIExvYWQgRmFpbHVyZSBBY3Rpb24nLFxuICBDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblVwZGF0ZUFjdGlvbiA9ICdbRGFmZkNhcnRdIFNoaXBwaW5nIEluZm9ybWF0aW9uIFVwZGF0ZSBBY3Rpb24nLFxuICBDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblVwZGF0ZVN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBJbmZvcm1hdGlvbiBVcGRhdGUgU3VjY2VzcyBBY3Rpb24nLFxuICBDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblVwZGF0ZUZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBJbmZvcm1hdGlvbiBVcGRhdGUgRmFpbHVyZSBBY3Rpb24nLFxuICBDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRlbGV0ZUFjdGlvbiA9ICdbRGFmZkNhcnRdIFNoaXBwaW5nIEluZm9ybWF0aW9uIFJlbW92ZSBBY3Rpb24nLFxuICBDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRlbGV0ZVN1Y2Nlc3NBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBJbmZvcm1hdGlvbiBSZW1vdmUgU3VjY2VzcyBBY3Rpb24nLFxuICBDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRlbGV0ZUZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBJbmZvcm1hdGlvbiBSZW1vdmUgRmFpbHVyZSBBY3Rpb24nLFxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uTG9hZCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25BY3Rpb25UeXBlcy5DYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRBY3Rpb247XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkU3VjY2VzczxUIGV4dGVuZHMgRGFmZkNhcnRTaGlwcGluZ1JhdGUgPSBEYWZmQ2FydFNoaXBwaW5nUmF0ZT4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVCkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkFjdGlvblR5cGVzLkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uTG9hZEZhaWx1cmVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZTdGF0ZUVycm9yKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uVXBkYXRlPFQgZXh0ZW5kcyBEYWZmQ2FydFNoaXBwaW5nUmF0ZSA9IERhZmZDYXJ0U2hpcHBpbmdSYXRlPiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25BY3Rpb25UeXBlcy5DYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblVwZGF0ZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxUPikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblVwZGF0ZVN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQ+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkFjdGlvblR5cGVzLkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uVXBkYXRlU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxUPikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblVwZGF0ZUZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25VcGRhdGVGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRlbGV0ZTxUIGV4dGVuZHMgRGFmZkNhcnRTaGlwcGluZ1JhdGUgPSBEYWZmQ2FydFNoaXBwaW5nUmF0ZT4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25EZWxldGVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGlkPzogVFsnaWQnXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRlbGV0ZVN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0ID0gRGFmZkNhcnQ+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkFjdGlvblR5cGVzLkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRGVsZXRlU3VjY2Vzc0FjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGFydGlhbDxUPikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRlbGV0ZUZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25EZWxldGVGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uQWN0aW9uczxcbiAgVCBleHRlbmRzIERhZmZDYXJ0U2hpcHBpbmdSYXRlID0gRGFmZkNhcnRTaGlwcGluZ1JhdGUsXG4gIFYgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0XG4+ID1cbiAgfCBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkXG4gIHwgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uTG9hZFN1Y2Nlc3M8VD5cbiAgfCBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkRmFpbHVyZVxuICB8IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblVwZGF0ZTxUPlxuICB8IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblVwZGF0ZVN1Y2Nlc3M8Vj5cbiAgfCBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25VcGRhdGVGYWlsdXJlXG4gIHwgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRGVsZXRlPFQ+XG4gIHwgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRGVsZXRlU3VjY2VzczxWPlxuICB8IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRlbGV0ZUZhaWx1cmVcbiJdfQ==