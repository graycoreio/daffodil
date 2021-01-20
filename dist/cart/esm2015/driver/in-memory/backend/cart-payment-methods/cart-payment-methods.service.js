/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import * as i0 from "@angular/core";
export class DaffInMemoryBackendCartPaymentMethodsService {
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.listPaymentMethods(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getCart(reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    listPaymentMethods(reqInfo) {
        return this.getCart(reqInfo).available_payment_methods;
    }
}
DaffInMemoryBackendCartPaymentMethodsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendCartPaymentMethodsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartPaymentMethodsService_Factory() { return new DaffInMemoryBackendCartPaymentMethodsService(); }, token: DaffInMemoryBackendCartPaymentMethodsService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LW1ldGhvZHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9pbi1tZW1vcnkvIiwic291cmNlcyI6WyJiYWNrZW5kL2NhcnQtcGF5bWVudC1tZXRob2RzL2NhcnQtcGF5bWVudC1tZXRob2RzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLDJCQUEyQixDQUFDOztBQVdoRSxNQUFNLE9BQU8sNENBQTRDOzs7OztJQUN2RCxHQUFHLENBQUMsT0FBb0I7UUFDdEIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDdEMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLE9BQW9CO1FBQ2xDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQVcsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDakYsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsT0FBTztRQUNoQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMseUJBQXlCLENBQUM7SUFDekQsQ0FBQzs7O1lBakJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNUQVRVUywgUmVxdWVzdEluZm8gfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcblxuaW1wb3J0IHtcbiAgRGFmZkNhcnQsXG4gIERhZmZDYXJ0UGF5bWVudE1ldGhvZCxcbn0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5RGF0YVNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5QmFja2VuZENhcnRQYXltZW50TWV0aG9kc1NlcnZpY2UgaW1wbGVtZW50cyBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB7XG4gIGdldChyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgYm9keTogdGhpcy5saXN0UGF5bWVudE1ldGhvZHMocmVxSW5mbyksXG4gICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FydChyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IERhZmZDYXJ0IHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5maW5kQnlJZDxEYWZmQ2FydD4ocmVxSW5mby5jb2xsZWN0aW9uLCBOdW1iZXIocmVxSW5mby5pZCkpXG4gIH1cblxuICBwcml2YXRlIGxpc3RQYXltZW50TWV0aG9kcyhyZXFJbmZvKTogRGFmZkNhcnRQYXltZW50TWV0aG9kW10ge1xuICAgIHJldHVybiB0aGlzLmdldENhcnQocmVxSW5mbykuYXZhaWxhYmxlX3BheW1lbnRfbWV0aG9kcztcbiAgfVxufVxuIl19