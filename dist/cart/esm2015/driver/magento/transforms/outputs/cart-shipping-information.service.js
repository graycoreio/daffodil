/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DaffMagentoCartShippingRateTransformer } from './cart-shipping-rate.service';
import * as i0 from "@angular/core";
import * as i1 from "./cart-shipping-rate.service";
/**
 * Transforms magento cart shipping methods into an object usable by daffodil.
 */
export class DaffMagentoCartShippingInformationTransformer {
    /**
     * @param {?} shippingRateTransformer
     */
    constructor(shippingRateTransformer) {
        this.shippingRateTransformer = shippingRateTransformer;
    }
    /**
     * Transforms the magento shipping method from the magento cart query into a DaffCartShippingInformation.
     * @param {?} shippingMethod the shippingMethod from a magento cart query.
     * @return {?}
     */
    transform(shippingMethod) {
        return shippingMethod ? Object.assign({}, this.shippingRateTransformer.transform(shippingMethod), { address_id: 0 }) : null;
    }
}
DaffMagentoCartShippingInformationTransformer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartShippingInformationTransformer.ctorParameters = () => [
    { type: DaffMagentoCartShippingRateTransformer }
];
/** @nocollapse */ DaffMagentoCartShippingInformationTransformer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartShippingInformationTransformer_Factory() { return new DaffMagentoCartShippingInformationTransformer(i0.ɵɵinject(i1.DaffMagentoCartShippingRateTransformer)); }, token: DaffMagentoCartShippingInformationTransformer, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffMagentoCartShippingInformationTransformer.prototype.shippingRateTransformer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJ0cmFuc2Zvcm1zL291dHB1dHMvY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7QUFRdEYsTUFBTSxPQUFPLDZDQUE2Qzs7OztJQUN4RCxZQUFtQix1QkFBK0Q7UUFBL0QsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF3QztJQUFHLENBQUM7Ozs7OztJQUt0RixTQUFTLENBQUMsY0FBeUM7UUFDakQsT0FBTyxjQUFjLENBQUMsQ0FBQyxtQkFDbEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFFekQsVUFBVSxFQUFFLENBQUMsSUFDYixDQUFDLENBQUMsSUFBSSxDQUFBO0lBQ1YsQ0FBQzs7O1lBZkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUFEsc0NBQXNDOzs7OztJQVNqQyxnRkFBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZDYXJ0U2hpcHBpbmdJbmZvcm1hdGlvbiB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcblxuaW1wb3J0IHsgTWFnZW50b0NhcnRTaGlwcGluZ01ldGhvZCB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZXMvY2FydC1zaGlwcGluZy1tZXRob2QnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdSYXRlVHJhbnNmb3JtZXIgfSBmcm9tICcuL2NhcnQtc2hpcHBpbmctcmF0ZS5zZXJ2aWNlJztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIG1hZ2VudG8gY2FydCBzaGlwcGluZyBtZXRob2RzIGludG8gYW4gb2JqZWN0IHVzYWJsZSBieSBkYWZmb2RpbC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXJ0U2hpcHBpbmdJbmZvcm1hdGlvblRyYW5zZm9ybWVyIHtcbiAgY29uc3RydWN0b3IocHVibGljIHNoaXBwaW5nUmF0ZVRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0NhcnRTaGlwcGluZ1JhdGVUcmFuc2Zvcm1lcikge31cbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIG1hZ2VudG8gc2hpcHBpbmcgbWV0aG9kIGZyb20gdGhlIG1hZ2VudG8gY2FydCBxdWVyeSBpbnRvIGEgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uLlxuICAgKiBAcGFyYW0gc2hpcHBpbmdNZXRob2QgdGhlIHNoaXBwaW5nTWV0aG9kIGZyb20gYSBtYWdlbnRvIGNhcnQgcXVlcnkuXG4gICAqL1xuICB0cmFuc2Zvcm0oc2hpcHBpbmdNZXRob2Q6IE1hZ2VudG9DYXJ0U2hpcHBpbmdNZXRob2QpOiBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb24ge1xuICAgIHJldHVybiBzaGlwcGluZ01ldGhvZCA/IHtcbiAgICAgIC4uLnRoaXMuc2hpcHBpbmdSYXRlVHJhbnNmb3JtZXIudHJhbnNmb3JtKHNoaXBwaW5nTWV0aG9kKSxcbiAgICAgIC8vIFRPRE86IGltcGxlbWVudFxuICAgICAgYWRkcmVzc19pZDogMFxuICAgIH0gOiBudWxsXG4gIH1cbn1cbiJdfQ==