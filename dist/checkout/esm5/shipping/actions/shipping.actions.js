/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffShippingActionTypes = {
    UpdateShippingAddressAction: '[Shipping] Update Shipping Address Action',
    SelectShippingOptionAction: '[Shipping] Select Shipping Option Action',
};
export { DaffShippingActionTypes };
var DaffUpdateShippingAddress = /** @class */ (function () {
    function DaffUpdateShippingAddress(payload) {
        this.payload = payload;
        this.type = DaffShippingActionTypes.UpdateShippingAddressAction;
    }
    return DaffUpdateShippingAddress;
}());
export { DaffUpdateShippingAddress };
if (false) {
    /** @type {?} */
    DaffUpdateShippingAddress.prototype.type;
    /** @type {?} */
    DaffUpdateShippingAddress.prototype.payload;
}
var DaffSelectShippingOption = /** @class */ (function () {
    function DaffSelectShippingOption(payload) {
        this.payload = payload;
        this.type = DaffShippingActionTypes.SelectShippingOptionAction;
    }
    return DaffSelectShippingOption;
}());
export { DaffSelectShippingOption };
if (false) {
    /** @type {?} */
    DaffSelectShippingOption.prototype.type;
    /** @type {?} */
    DaffSelectShippingOption.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmcuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jaGVja291dC8iLCJzb3VyY2VzIjpbInNoaXBwaW5nL2FjdGlvbnMvc2hpcHBpbmcuYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFLRSw2QkFBOEIsMkNBQTJDO0lBQ3pFLDRCQUE2QiwwQ0FBMEM7OztBQUd6RTtJQUdFLG1DQUFtQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRjlCLFNBQUksR0FBRyx1QkFBdUIsQ0FBQywyQkFBMkIsQ0FBQztJQUUxQixDQUFDO0lBQzdDLGdDQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQyx5Q0FBb0U7O0lBRXhELDRDQUEyQjs7QUFHekM7SUFHRSxrQ0FBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFGekIsU0FBSSxHQUFHLHVCQUF1QixDQUFDLDBCQUEwQixDQUFDO0lBRTlCLENBQUM7SUFDeEMsK0JBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhDLHdDQUFtRTs7SUFFdkQsMkNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQWRkcmVzcyB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlJztcblxuZXhwb3J0IGVudW0gRGFmZlNoaXBwaW5nQWN0aW9uVHlwZXMge1xuICBVcGRhdGVTaGlwcGluZ0FkZHJlc3NBY3Rpb24gPSAnW1NoaXBwaW5nXSBVcGRhdGUgU2hpcHBpbmcgQWRkcmVzcyBBY3Rpb24nLFxuICBTZWxlY3RTaGlwcGluZ09wdGlvbkFjdGlvbiA9ICdbU2hpcHBpbmddIFNlbGVjdCBTaGlwcGluZyBPcHRpb24gQWN0aW9uJ1xufVxuXG5leHBvcnQgY2xhc3MgRGFmZlVwZGF0ZVNoaXBwaW5nQWRkcmVzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmU2hpcHBpbmdBY3Rpb25UeXBlcy5VcGRhdGVTaGlwcGluZ0FkZHJlc3NBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IERhZmZBZGRyZXNzKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgRGFmZlNlbGVjdFNoaXBwaW5nT3B0aW9uIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZTaGlwcGluZ0FjdGlvblR5cGVzLlNlbGVjdFNoaXBwaW5nT3B0aW9uQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHt9XG59XG5cbmV4cG9ydCB0eXBlIERhZmZTaGlwcGluZ0FjdGlvbnMgPVxuICAgIHwgRGFmZlVwZGF0ZVNoaXBwaW5nQWRkcmVzc1xuICAgIHwgRGFmZlNlbGVjdFNoaXBwaW5nT3B0aW9uO1xuIl19