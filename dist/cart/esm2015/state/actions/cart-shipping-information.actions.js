/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCartShippingInformationActionTypes = {
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
export class DaffCartShippingInformationLoad {
    constructor() {
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationLoad.prototype.type;
}
/**
 * @template T
 */
export class DaffCartShippingInformationLoadSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationLoadSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationLoadSuccess.prototype.payload;
}
export class DaffCartShippingInformationLoadFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationLoadFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationLoadFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationLoadFailure.prototype.payload;
}
/**
 * @template T
 */
export class DaffCartShippingInformationUpdate {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationUpdate.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationUpdate.prototype.payload;
}
/**
 * @template T
 */
export class DaffCartShippingInformationUpdateSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationUpdateSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationUpdateSuccess.prototype.payload;
}
export class DaffCartShippingInformationUpdateFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationUpdateFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationUpdateFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationUpdateFailure.prototype.payload;
}
/**
 * @template T
 */
export class DaffCartShippingInformationDelete {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationDelete.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationDelete.prototype.id;
}
/**
 * @template T
 */
export class DaffCartShippingInformationDeleteSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteSuccessAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationDeleteSuccess.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationDeleteSuccess.prototype.payload;
}
export class DaffCartShippingInformationDeleteFailure {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = DaffCartShippingInformationActionTypes.CartShippingInformationDeleteFailureAction;
    }
}
if (false) {
    /** @type {?} */
    DaffCartShippingInformationDeleteFailure.prototype.type;
    /** @type {?} */
    DaffCartShippingInformationDeleteFailure.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvc3RhdGUvIiwic291cmNlcyI6WyJhY3Rpb25zL2NhcnQtc2hpcHBpbmctaW5mb3JtYXRpb24uYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNRSxtQ0FBb0MsNkNBQTZDO0lBQ2pGLDBDQUEyQyxxREFBcUQ7SUFDaEcsMENBQTJDLHFEQUFxRDtJQUNoRyxxQ0FBc0MsK0NBQStDO0lBQ3JGLDRDQUE2Qyx1REFBdUQ7SUFDcEcsNENBQTZDLHVEQUF1RDtJQUNwRyxxQ0FBc0MsK0NBQStDO0lBQ3JGLDRDQUE2Qyx1REFBdUQ7SUFDcEcsNENBQTZDLHVEQUF1RDs7O0FBR3RHLE1BQU0sT0FBTywrQkFBK0I7SUFBNUM7UUFDVyxTQUFJLEdBQUcsc0NBQXNDLENBQUMsaUNBQWlDLENBQUM7SUFDM0YsQ0FBQztDQUFBOzs7SUFEQywrQ0FBeUY7Ozs7O0FBRzNGLE1BQU0sT0FBTyxzQ0FBc0M7Ozs7SUFHakQsWUFBbUIsT0FBVTtRQUFWLFlBQU8sR0FBUCxPQUFPLENBQUc7UUFGcEIsU0FBSSxHQUFHLHNDQUFzQyxDQUFDLHdDQUF3QyxDQUFDO0lBRWhFLENBQUM7Q0FDbEM7OztJQUhDLHNEQUFnRzs7SUFFcEYseURBQWlCOztBQUcvQixNQUFNLE9BQU8sc0NBQXNDOzs7O0lBR2pELFlBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRyxzQ0FBc0MsQ0FBQyx3Q0FBd0MsQ0FBQztJQUVuRCxDQUFDO0NBQy9DOzs7SUFIQyxzREFBZ0c7O0lBRXBGLHlEQUE4Qjs7Ozs7QUFHNUMsTUFBTSxPQUFPLGlDQUFpQzs7OztJQUc1QyxZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRjdCLFNBQUksR0FBRyxzQ0FBc0MsQ0FBQyxtQ0FBbUMsQ0FBQztJQUVsRCxDQUFDO0NBQzNDOzs7SUFIQyxpREFBMkY7O0lBRS9FLG9EQUEwQjs7Ozs7QUFHeEMsTUFBTSxPQUFPLHdDQUF3Qzs7OztJQUduRCxZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRjdCLFNBQUksR0FBRyxzQ0FBc0MsQ0FBQywwQ0FBMEMsQ0FBQztJQUV6RCxDQUFDO0NBQzNDOzs7SUFIQyx3REFBa0c7O0lBRXRGLDJEQUEwQjs7QUFHeEMsTUFBTSxPQUFPLHdDQUF3Qzs7OztJQUduRCxZQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUZqQyxTQUFJLEdBQUcsc0NBQXNDLENBQUMsMENBQTBDLENBQUM7SUFFckQsQ0FBQztDQUMvQzs7O0lBSEMsd0RBQWtHOztJQUV0RiwyREFBOEI7Ozs7O0FBRzVDLE1BQU0sT0FBTyxpQ0FBaUM7Ozs7SUFHNUMsWUFBbUIsRUFBWTtRQUFaLE9BQUUsR0FBRixFQUFFLENBQVU7UUFGdEIsU0FBSSxHQUFHLHNDQUFzQyxDQUFDLG1DQUFtQyxDQUFDO0lBRXpELENBQUM7Q0FDcEM7OztJQUhDLGlEQUEyRjs7SUFFL0UsK0NBQW1COzs7OztBQUdqQyxNQUFNLE9BQU8sd0NBQXdDOzs7O0lBR25ELFlBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFGN0IsU0FBSSxHQUFHLHNDQUFzQyxDQUFDLDBDQUEwQyxDQUFDO0lBRXpELENBQUM7Q0FDM0M7OztJQUhDLHdEQUFrRzs7SUFFdEYsMkRBQTBCOztBQUd4QyxNQUFNLE9BQU8sd0NBQXdDOzs7O0lBR25ELFlBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBRmpDLFNBQUksR0FBRyxzQ0FBc0MsQ0FBQywwQ0FBMEMsQ0FBQztJQUVyRCxDQUFDO0NBQy9DOzs7SUFIQyx3REFBa0c7O0lBRXRGLDJEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZlN0YXRlRXJyb3IgfSBmcm9tICdAZGFmZm9kaWwvY29yZS9zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmQ2FydFNoaXBwaW5nUmF0ZSwgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmV4cG9ydCBlbnVtIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkFjdGlvblR5cGVzIHtcbiAgQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkQWN0aW9uID0gJ1tEYWZmQ2FydF0gU2hpcHBpbmcgSW5mb3JtYXRpb24gTG9hZCBBY3Rpb24nLFxuICBDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRTdWNjZXNzQWN0aW9uID0gJ1tEYWZmQ2FydF0gU2hpcHBpbmcgSW5mb3JtYXRpb24gTG9hZCBTdWNjZXNzIEFjdGlvbicsXG4gIENhcnRTaGlwcGluZ0luZm9ybWF0aW9uTG9hZEZhaWx1cmVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBJbmZvcm1hdGlvbiBMb2FkIEZhaWx1cmUgQWN0aW9uJyxcbiAgQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25VcGRhdGVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBJbmZvcm1hdGlvbiBVcGRhdGUgQWN0aW9uJyxcbiAgQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25VcGRhdGVTdWNjZXNzQWN0aW9uID0gJ1tEYWZmQ2FydF0gU2hpcHBpbmcgSW5mb3JtYXRpb24gVXBkYXRlIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25VcGRhdGVGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gU2hpcHBpbmcgSW5mb3JtYXRpb24gVXBkYXRlIEZhaWx1cmUgQWN0aW9uJyxcbiAgQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25EZWxldGVBY3Rpb24gPSAnW0RhZmZDYXJ0XSBTaGlwcGluZyBJbmZvcm1hdGlvbiBSZW1vdmUgQWN0aW9uJyxcbiAgQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25EZWxldGVTdWNjZXNzQWN0aW9uID0gJ1tEYWZmQ2FydF0gU2hpcHBpbmcgSW5mb3JtYXRpb24gUmVtb3ZlIFN1Y2Nlc3MgQWN0aW9uJyxcbiAgQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25EZWxldGVGYWlsdXJlQWN0aW9uID0gJ1tEYWZmQ2FydF0gU2hpcHBpbmcgSW5mb3JtYXRpb24gUmVtb3ZlIEZhaWx1cmUgQWN0aW9uJyxcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWQgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkQWN0aW9uO1xufVxuXG5leHBvcnQgY2xhc3MgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uTG9hZFN1Y2Nlc3M8VCBleHRlbmRzIERhZmZDYXJ0U2hpcHBpbmdSYXRlID0gRGFmZkNhcnRTaGlwcGluZ1JhdGU+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkFjdGlvblR5cGVzLkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uTG9hZFN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFQpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25Mb2FkRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25BY3Rpb25UeXBlcy5DYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRGYWlsdXJlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmU3RhdGVFcnJvcikge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblVwZGF0ZTxUIGV4dGVuZHMgRGFmZkNhcnRTaGlwcGluZ1JhdGUgPSBEYWZmQ2FydFNoaXBwaW5nUmF0ZT4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uQWN0aW9uVHlwZXMuQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25VcGRhdGVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8VD4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25VcGRhdGVTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25BY3Rpb25UeXBlcy5DYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblVwZGF0ZVN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8VD4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25VcGRhdGVGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkFjdGlvblR5cGVzLkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uVXBkYXRlRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25EZWxldGU8VCBleHRlbmRzIERhZmZDYXJ0U2hpcHBpbmdSYXRlID0gRGFmZkNhcnRTaGlwcGluZ1JhdGU+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkFjdGlvblR5cGVzLkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRGVsZXRlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpZD86IFRbJ2lkJ10pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25EZWxldGVTdWNjZXNzPFQgZXh0ZW5kcyBEYWZmQ2FydCA9IERhZmZDYXJ0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25BY3Rpb25UeXBlcy5DYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRlbGV0ZVN1Y2Nlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFBhcnRpYWw8VD4pIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25EZWxldGVGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkFjdGlvblR5cGVzLkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uRGVsZXRlRmFpbHVyZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogRGFmZlN0YXRlRXJyb3IpIHt9XG59XG5cbmV4cG9ydCB0eXBlIERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkFjdGlvbnM8XG4gIFQgZXh0ZW5kcyBEYWZmQ2FydFNoaXBwaW5nUmF0ZSA9IERhZmZDYXJ0U2hpcHBpbmdSYXRlLFxuICBWIGV4dGVuZHMgRGFmZkNhcnQgPSBEYWZmQ2FydFxuPiA9XG4gIHwgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uTG9hZFxuICB8IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkxvYWRTdWNjZXNzPFQ+XG4gIHwgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uTG9hZEZhaWx1cmVcbiAgfCBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25VcGRhdGU8VD5cbiAgfCBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25VcGRhdGVTdWNjZXNzPFY+XG4gIHwgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uVXBkYXRlRmFpbHVyZVxuICB8IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRlbGV0ZTxUPlxuICB8IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbkRlbGV0ZVN1Y2Nlc3M8Vj5cbiAgfCBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25EZWxldGVGYWlsdXJlXG4iXX0=