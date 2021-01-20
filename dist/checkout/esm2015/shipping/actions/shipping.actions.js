/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffShippingActionTypes = {
    UpdateShippingAddressAction: '[Shipping] Update Shipping Address Action',
    SelectShippingOptionAction: '[Shipping] Select Shipping Option Action',
};
export { DaffShippingActionTypes };
export class DaffUpdateShippingAddress {
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
export class DaffSelectShippingOption {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmcuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC8iLCJzb3VyY2VzIjpbInNoaXBwaW5nL2FjdGlvbnMvc2hpcHBpbmcuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLRSw2QkFBOEIsMkNBQTJDO0lBQ3pFLDRCQUE2QiwwQ0FBMEM7OztBQUd6RSxNQUFNLE9BQU8seUJBQXlCOzs7O0lBR3BDLFlBQW1CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFGOUIsU0FBSSxHQUFHLHVCQUF1QixDQUFDLDJCQUEyQixDQUFDO0lBRTFCLENBQUM7Q0FDNUM7OztJQUhDLHlDQUFvRTs7SUFFeEQsNENBQTJCOztBQUd6QyxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBR25DLFlBQW1CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRnpCLFNBQUksR0FBRyx1QkFBdUIsQ0FBQywwQkFBMEIsQ0FBQztJQUU5QixDQUFDO0NBQ3ZDOzs7SUFIQyx3Q0FBbUU7O0lBRXZELDJDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZkFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY29yZSc7XG5cbmV4cG9ydCBlbnVtIERhZmZTaGlwcGluZ0FjdGlvblR5cGVzIHtcbiAgVXBkYXRlU2hpcHBpbmdBZGRyZXNzQWN0aW9uID0gJ1tTaGlwcGluZ10gVXBkYXRlIFNoaXBwaW5nIEFkZHJlc3MgQWN0aW9uJyxcbiAgU2VsZWN0U2hpcHBpbmdPcHRpb25BY3Rpb24gPSAnW1NoaXBwaW5nXSBTZWxlY3QgU2hpcHBpbmcgT3B0aW9uIEFjdGlvbidcbn1cblxuZXhwb3J0IGNsYXNzIERhZmZVcGRhdGVTaGlwcGluZ0FkZHJlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZlNoaXBwaW5nQWN0aW9uVHlwZXMuVXBkYXRlU2hpcHBpbmdBZGRyZXNzQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBEYWZmQWRkcmVzcykge31cbn1cblxuZXhwb3J0IGNsYXNzIERhZmZTZWxlY3RTaGlwcGluZ09wdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmU2hpcHBpbmdBY3Rpb25UeXBlcy5TZWxlY3RTaGlwcGluZ09wdGlvbkFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogc3RyaW5nKSB7fVxufVxuXG5leHBvcnQgdHlwZSBEYWZmU2hpcHBpbmdBY3Rpb25zID1cbiAgICB8IERhZmZVcGRhdGVTaGlwcGluZ0FkZHJlc3NcbiAgICB8IERhZmZTZWxlY3RTaGlwcGluZ09wdGlvbjtcbiJdfQ==