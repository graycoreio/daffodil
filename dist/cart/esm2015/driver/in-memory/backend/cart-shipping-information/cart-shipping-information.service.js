/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import * as i0 from "@angular/core";
export class DaffInMemoryBackendCartShippingInformationService {
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.getShippingInformation(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    put(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.updateShippingInformation(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    delete(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.removeShippingInformation(reqInfo),
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
    getShippingInformation(reqInfo) {
        return this.getCart(reqInfo).shipping_information;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    updateShippingInformation(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        /** @type {?} */
        const shippingInformation = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.shipping_information = shippingInformation;
        return cart;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    removeShippingInformation(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        cart.shipping_information = null;
        return cart;
    }
}
DaffInMemoryBackendCartShippingInformationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendCartShippingInformationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartShippingInformationService_Factory() { return new DaffInMemoryBackendCartShippingInformationService(); }, token: DaffInMemoryBackendCartShippingInformationService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImJhY2tlbmQvY2FydC1zaGlwcGluZy1pbmZvcm1hdGlvbi9jYXJ0LXNoaXBwaW5nLWluZm9ybWF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLDJCQUEyQixDQUFDOztBQVdoRSxNQUFNLE9BQU8saURBQWlEOzs7OztJQUM1RCxHQUFHLENBQUMsT0FBb0I7UUFDdEIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7WUFDMUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsT0FBb0I7UUFDdEIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUM7WUFDN0MsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBb0I7UUFDekIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUM7WUFDN0MsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLE9BQW9CO1FBQ2xDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQVcsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDakYsQ0FBQzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsT0FBTztRQUNwQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsb0JBQW9CLENBQUM7SUFDcEQsQ0FBQzs7Ozs7O0lBRU8seUJBQXlCLENBQUMsT0FBb0I7O2NBQzlDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzs7Y0FDNUIsbUJBQW1CLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUVwRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsbUJBQW1CLENBQUM7UUFFOUMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7SUFFTyx5QkFBeUIsQ0FBQyxPQUFvQjs7Y0FDOUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBRWxDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUE7UUFFaEMsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDOzs7WUFoREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU1RBVFVTLCBSZXF1ZXN0SW5mbyB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xuXG5pbXBvcnQge1xuICBEYWZmQ2FydCxcbiAgRGFmZkNhcnRTaGlwcGluZ0luZm9ybWF0aW9uLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydFNoaXBwaW5nSW5mb3JtYXRpb25TZXJ2aWNlIGltcGxlbWVudHMgRGFmZkluTWVtb3J5RGF0YVNlcnZpY2VJbnRlcmZhY2Uge1xuICBnZXQocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gKHtcbiAgICAgIGJvZHk6IHRoaXMuZ2V0U2hpcHBpbmdJbmZvcm1hdGlvbihyZXFJbmZvKSxcbiAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgfSkpO1xuICB9XG5cbiAgcHV0KHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG4gICAgICBib2R5OiB0aGlzLnVwZGF0ZVNoaXBwaW5nSW5mb3JtYXRpb24ocmVxSW5mbyksXG4gICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgIH0pKTtcbiAgfVxuXG4gIGRlbGV0ZShyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgYm9keTogdGhpcy5yZW1vdmVTaGlwcGluZ0luZm9ybWF0aW9uKHJlcUluZm8pLFxuICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIGdldENhcnQocmVxSW5mbzogUmVxdWVzdEluZm8pOiBEYWZmQ2FydCB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuZmluZEJ5SWQ8RGFmZkNhcnQ+KHJlcUluZm8uY29sbGVjdGlvbiwgTnVtYmVyKHJlcUluZm8uaWQpKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaGlwcGluZ0luZm9ybWF0aW9uKHJlcUluZm8pOiBEYWZmQ2FydFNoaXBwaW5nSW5mb3JtYXRpb24ge1xuICAgIHJldHVybiB0aGlzLmdldENhcnQocmVxSW5mbykuc2hpcHBpbmdfaW5mb3JtYXRpb247XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNoaXBwaW5nSW5mb3JtYXRpb24ocmVxSW5mbzogUmVxdWVzdEluZm8pOiBEYWZmQ2FydCB7XG4gICAgY29uc3QgY2FydCA9IHRoaXMuZ2V0Q2FydChyZXFJbmZvKTtcbiAgICBjb25zdCBzaGlwcGluZ0luZm9ybWF0aW9uID0gcmVxSW5mby51dGlscy5nZXRKc29uQm9keShyZXFJbmZvLnJlcSk7XG5cblx0XHRjYXJ0LnNoaXBwaW5nX2luZm9ybWF0aW9uID0gc2hpcHBpbmdJbmZvcm1hdGlvbjtcblxuICAgIHJldHVybiBjYXJ0O1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVTaGlwcGluZ0luZm9ybWF0aW9uKHJlcUluZm86IFJlcXVlc3RJbmZvKTogRGFmZkNhcnQge1xuICAgIGNvbnN0IGNhcnQgPSB0aGlzLmdldENhcnQocmVxSW5mbyk7XG5cbiAgICBjYXJ0LnNoaXBwaW5nX2luZm9ybWF0aW9uID0gbnVsbFxuXG4gICAgcmV0dXJuIGNhcnRcbiAgfVxufVxuIl19