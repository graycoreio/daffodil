/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import * as i0 from "@angular/core";
export class DaffInMemoryBackendCartShippingAddressService {
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.getShippingAddress(reqInfo),
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
            body: this.updateShippingAddress(reqInfo),
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
    getShippingAddress(reqInfo) {
        return this.getCart(reqInfo).shipping_address;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    updateShippingAddress(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        /** @type {?} */
        const address = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.shipping_address = address;
        return cart;
    }
}
DaffInMemoryBackendCartShippingAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendCartShippingAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartShippingAddressService_Factory() { return new DaffInMemoryBackendCartShippingAddressService(); }, token: DaffInMemoryBackendCartShippingAddressService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiYmFja2VuZC9jYXJ0LXNoaXBwaW5nLWFkZHJlc3MvY2FydC1zaGlwcGluZy1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLDJCQUEyQixDQUFDOztBQVdoRSxNQUFNLE9BQU8sNkNBQTZDOzs7OztJQUN4RCxHQUFHLENBQUMsT0FBb0I7UUFDdEIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7WUFDdEMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFRCxHQUFHLENBQUMsT0FBb0I7UUFDdEIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUM7WUFDekMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLE9BQW9CO1FBQ2xDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQVcsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDakYsQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsT0FBTztRQUNoQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBRU8scUJBQXFCLENBQUMsT0FBb0I7O2NBQzFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQzs7Y0FDNUIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFFeEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztRQUU5QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQWpDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTVEFUVVMsIFJlcXVlc3RJbmZvIH0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XG5cbmltcG9ydCB7XG4gIERhZmZDYXJ0LFxuICBEYWZmQ2FydEFkZHJlc3MsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZJbk1lbW9yeURhdGFTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0U2hpcHBpbmdBZGRyZXNzU2VydmljZSBpbXBsZW1lbnRzIERhZmZJbk1lbW9yeURhdGFTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgZ2V0KHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG4gICAgICBib2R5OiB0aGlzLmdldFNoaXBwaW5nQWRkcmVzcyhyZXFJbmZvKSxcbiAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgfSkpO1xuICB9XG5cbiAgcHV0KHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG4gICAgICBib2R5OiB0aGlzLnVwZGF0ZVNoaXBwaW5nQWRkcmVzcyhyZXFJbmZvKSxcbiAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgfSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYXJ0KHJlcUluZm86IFJlcXVlc3RJbmZvKTogRGFmZkNhcnQge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmZpbmRCeUlkPERhZmZDYXJ0PihyZXFJbmZvLmNvbGxlY3Rpb24sIE51bWJlcihyZXFJbmZvLmlkKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2hpcHBpbmdBZGRyZXNzKHJlcUluZm8pOiBEYWZmQ2FydEFkZHJlc3Mge1xuICAgIHJldHVybiB0aGlzLmdldENhcnQocmVxSW5mbykuc2hpcHBpbmdfYWRkcmVzcztcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2hpcHBpbmdBZGRyZXNzKHJlcUluZm86IFJlcXVlc3RJbmZvKTogRGFmZkNhcnQge1xuICAgIGNvbnN0IGNhcnQgPSB0aGlzLmdldENhcnQocmVxSW5mbyk7XG4gICAgY29uc3QgYWRkcmVzcyA9IHJlcUluZm8udXRpbHMuZ2V0SnNvbkJvZHkocmVxSW5mby5yZXEpO1xuXG5cdFx0Y2FydC5zaGlwcGluZ19hZGRyZXNzID0gYWRkcmVzcztcblxuICAgIHJldHVybiBjYXJ0O1xuICB9XG59XG4iXX0=