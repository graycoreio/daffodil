/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import * as i0 from "@angular/core";
export class DaffInMemoryBackendCartPaymentService {
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.getPayment(reqInfo),
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
            body: this.updatePayment(reqInfo),
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
            body: this.removePayment(reqInfo),
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
    getPayment(reqInfo) {
        return this.getCart(reqInfo).payment;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    updatePayment(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        const { payment, address } = reqInfo.utils.getJsonBody(reqInfo.req);
        cart.payment = payment;
        if (address)
            cart.billing_address = address;
        return cart;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    removePayment(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        cart.payment = null;
        return cart;
    }
}
DaffInMemoryBackendCartPaymentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendCartPaymentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartPaymentService_Factory() { return new DaffInMemoryBackendCartPaymentService(); }, token: DaffInMemoryBackendCartPaymentService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiYmFja2VuZC9jYXJ0LXBheW1lbnQvY2FydC1wYXltZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLDJCQUEyQixDQUFDOztBQVdoRSxNQUFNLE9BQU8scUNBQXFDOzs7OztJQUNoRCxHQUFHLENBQUMsT0FBb0I7UUFDdEIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQzlCLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNsQixDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLE9BQW9CO1FBQ3RCLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztZQUNqQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDbEIsQ0FBQyxFQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUFvQjtRQUN6QixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMxQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDakMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLE9BQW9CO1FBQ2xDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQVcsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDakYsQ0FBQzs7Ozs7O0lBRU8sVUFBVSxDQUFDLE9BQU87UUFDeEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUN2QyxDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsT0FBb0I7O2NBQ2xDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztjQUM1QixFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRWpFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLElBQUksT0FBTztZQUFFLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBRTVDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLE9BQW9COztjQUNsQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFFbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFFbkIsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDOzs7WUFsREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU1RBVFVTLCBSZXF1ZXN0SW5mbyB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xuXG5pbXBvcnQge1xuICBEYWZmQ2FydCxcbiAgRGFmZkNhcnRQYXltZW50TWV0aG9kLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydFBheW1lbnRTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkluTWVtb3J5RGF0YVNlcnZpY2VJbnRlcmZhY2Uge1xuICBnZXQocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gKHtcbiAgICAgIGJvZHk6IHRoaXMuZ2V0UGF5bWVudChyZXFJbmZvKSxcbiAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgfSkpO1xuICB9XG5cbiAgcHV0KHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG4gICAgICBib2R5OiB0aGlzLnVwZGF0ZVBheW1lbnQocmVxSW5mbyksXG4gICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgIH0pKTtcbiAgfVxuXG4gIGRlbGV0ZShyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgYm9keTogdGhpcy5yZW1vdmVQYXltZW50KHJlcUluZm8pLFxuICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICB9KSk7XG4gIH1cblxuICBwcml2YXRlIGdldENhcnQocmVxSW5mbzogUmVxdWVzdEluZm8pOiBEYWZmQ2FydCB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuZmluZEJ5SWQ8RGFmZkNhcnQ+KHJlcUluZm8uY29sbGVjdGlvbiwgTnVtYmVyKHJlcUluZm8uaWQpKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXltZW50KHJlcUluZm8pOiBEYWZmQ2FydFBheW1lbnRNZXRob2Qge1xuICAgIHJldHVybiB0aGlzLmdldENhcnQocmVxSW5mbykucGF5bWVudDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUGF5bWVudChyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IERhZmZDYXJ0IHtcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5nZXRDYXJ0KHJlcUluZm8pO1xuICAgIGNvbnN0IHtwYXltZW50LCBhZGRyZXNzfSA9IHJlcUluZm8udXRpbHMuZ2V0SnNvbkJvZHkocmVxSW5mby5yZXEpO1xuXG4gICAgY2FydC5wYXltZW50ID0gcGF5bWVudDtcblxuICAgIGlmIChhZGRyZXNzKSBjYXJ0LmJpbGxpbmdfYWRkcmVzcyA9IGFkZHJlc3M7XG5cbiAgICByZXR1cm4gY2FydDtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlUGF5bWVudChyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IERhZmZDYXJ0IHtcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5nZXRDYXJ0KHJlcUluZm8pO1xuXG4gICAgY2FydC5wYXltZW50ID0gbnVsbFxuXG4gICAgcmV0dXJuIGNhcnRcbiAgfVxufVxuIl19