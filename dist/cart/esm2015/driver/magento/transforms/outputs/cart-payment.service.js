/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Transforms magento carts into an object usable by daffodil.
 */
export class DaffMagentoCartPaymentTransformer {
    /**
     * Transforms the magento CartPayment from the magento cart query into a DaffCartPaymentMethod.
     * @param {?} responsePayment
     * @return {?}
     */
    transform(responsePayment) {
        return responsePayment ? Object.assign({ magento_payment_method: responsePayment }, { method: responsePayment.code }) : null;
    }
}
DaffMagentoCartPaymentTransformer.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffMagentoCartPaymentTransformer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartPaymentTransformer_Factory() { return new DaffMagentoCartPaymentTransformer(); }, token: DaffMagentoCartPaymentTransformer, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInRyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LXBheW1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFZM0MsTUFBTSxPQUFPLGlDQUFpQzs7Ozs7O0lBTTVDLFNBQVMsQ0FBQyxlQUF5QztRQUNqRCxPQUFPLGVBQWUsQ0FBQyxDQUFDLGVBQ25CLEVBQUMsc0JBQXNCLEVBQUUsZUFBZSxFQUFDLElBRTVDLE1BQU0sRUFBRSxlQUFlLENBQUMsSUFBSSxJQUM1QixDQUFDLENBQUMsSUFBSSxDQUFBO0lBQ1YsQ0FBQzs7O1lBZkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydFBheW1lbnRNZXRob2QgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmltcG9ydCB7IE1hZ2VudG9DYXJ0UGF5bWVudE1ldGhvZCB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZXMvY2FydC1wYXltZW50LW1ldGhvZCc7XG5cbi8qKlxuICogVHJhbnNmb3JtcyBtYWdlbnRvIGNhcnRzIGludG8gYW4gb2JqZWN0IHVzYWJsZSBieSBkYWZmb2RpbC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXJ0UGF5bWVudFRyYW5zZm9ybWVyIHtcblxuICAvKipcbiAgICogVHJhbnNmb3JtcyB0aGUgbWFnZW50byBDYXJ0UGF5bWVudCBmcm9tIHRoZSBtYWdlbnRvIGNhcnQgcXVlcnkgaW50byBhIERhZmZDYXJ0UGF5bWVudE1ldGhvZC5cbiAgICogQHBhcmFtIHJlc3BvbnNlIHRoZSByZXNwb25zZSBmcm9tIGEgbWFnZW50byBjYXJ0IHF1ZXJ5LlxuICAgKi9cbiAgdHJhbnNmb3JtKHJlc3BvbnNlUGF5bWVudDogTWFnZW50b0NhcnRQYXltZW50TWV0aG9kKTogRGFmZkNhcnRQYXltZW50TWV0aG9kIHtcbiAgICByZXR1cm4gcmVzcG9uc2VQYXltZW50ID8ge1xuICAgICAgLi4ue21hZ2VudG9fcGF5bWVudF9tZXRob2Q6IHJlc3BvbnNlUGF5bWVudH0sXG5cbiAgICAgIG1ldGhvZDogcmVzcG9uc2VQYXltZW50LmNvZGVcbiAgICB9IDogbnVsbFxuICB9XG59XG4iXX0=