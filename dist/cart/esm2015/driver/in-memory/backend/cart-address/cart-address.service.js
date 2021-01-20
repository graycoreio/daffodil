/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import * as i0 from "@angular/core";
export class DaffInMemoryBackendCartAddressService {
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    put(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.updateAddress(reqInfo),
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
    updateAddress(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        /** @type {?} */
        const address = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.billing_address = address;
        cart.shipping_address = address;
        return cart;
    }
}
DaffInMemoryBackendCartAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendCartAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartAddressService_Factory() { return new DaffInMemoryBackendCartAddressService(); }, token: DaffInMemoryBackendCartAddressService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiYmFja2VuZC9jYXJ0LWFkZHJlc3MvY2FydC1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLDJCQUEyQixDQUFDOztBQVVoRSxNQUFNLE9BQU8scUNBQXFDOzs7OztJQUNoRCxHQUFHLENBQUMsT0FBb0I7UUFDdEIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ2pDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNsQixDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUVPLE9BQU8sQ0FBQyxPQUFvQjtRQUNsQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFXLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2pGLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxPQUFvQjs7Y0FDbEMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDOztjQUM1QixPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUV0RCxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO1FBRWhDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBdkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNUQVRVUywgUmVxdWVzdEluZm8gfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcblxuaW1wb3J0IHtcbiAgRGFmZkNhcnQsXG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZJbk1lbW9yeURhdGFTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0QWRkcmVzc1NlcnZpY2UgaW1wbGVtZW50cyBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB7XG4gIHB1dChyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgYm9keTogdGhpcy51cGRhdGVBZGRyZXNzKHJlcUluZm8pLFxuICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIGdldENhcnQocmVxSW5mbzogUmVxdWVzdEluZm8pOiBEYWZmQ2FydCB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuZmluZEJ5SWQ8RGFmZkNhcnQ+KHJlcUluZm8uY29sbGVjdGlvbiwgTnVtYmVyKHJlcUluZm8uaWQpKVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVBZGRyZXNzKHJlcUluZm86IFJlcXVlc3RJbmZvKTogRGFmZkNhcnQge1xuICAgIGNvbnN0IGNhcnQgPSB0aGlzLmdldENhcnQocmVxSW5mbyk7XG4gICAgY29uc3QgYWRkcmVzcyA9IHJlcUluZm8udXRpbHMuZ2V0SnNvbkJvZHkocmVxSW5mby5yZXEpO1xuXG4gICAgY2FydC5iaWxsaW5nX2FkZHJlc3MgPSBhZGRyZXNzO1xuICAgIGNhcnQuc2hpcHBpbmdfYWRkcmVzcyA9IGFkZHJlc3M7XG5cbiAgICByZXR1cm4gY2FydDtcbiAgfVxufVxuIl19