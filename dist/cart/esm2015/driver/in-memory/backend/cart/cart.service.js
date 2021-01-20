/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffCartFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
export class DaffInMemoryBackendCartService {
    /**
     * @param {?} cartFactory
     */
    constructor(cartFactory) {
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: cart,
            status: cart ? STATUS.OK : STATUS.NOT_FOUND
        })));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    post(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let body;
            /** @type {?} */
            const action = this.getAction(reqInfo);
            if (reqInfo.id === 'addToCart') {
                // deprecated
                body = {};
            }
            else if (action === 'clear') {
                body = this.clear(reqInfo);
            }
            else {
                body = this.create(reqInfo);
            }
            return {
                body,
                status: STATUS.OK
            };
        }));
    }
    /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getAction(reqInfo) {
        return reqInfo.url.replace(`/${reqInfo.resourceUrl}${reqInfo.id}/`, '');
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    clear(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        cart.items = [];
        return cart;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    create(reqInfo) {
        /** @type {?} */
        const cart = this.cartFactory.create();
        reqInfo.collection.push(cart);
        return {
            id: cart.id
        };
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getCart(reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, reqInfo.id);
    }
}
DaffInMemoryBackendCartService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryBackendCartService.ctorParameters = () => [
    { type: DaffCartFactory }
];
/** @nocollapse */ DaffInMemoryBackendCartService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartService_Factory() { return new DaffInMemoryBackendCartService(i0.ɵɵinject(i1.DaffCartFactory)); }, token: DaffInMemoryBackendCartService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartService.prototype.cartFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImJhY2tlbmQvY2FydC9jYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLDJCQUEyQixDQUFDO0FBS2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBS3pELE1BQU0sT0FBTyw4QkFBOEI7Ozs7SUFDekMsWUFDVSxXQUE0QjtRQUE1QixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7SUFDbkMsQ0FBQzs7Ozs7SUFFSixHQUFHLENBQUMsT0FBb0I7O2NBQ2xCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNsQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMzQyxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTO1NBQzNDLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsT0FBb0I7UUFDdkIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLEdBQUcsRUFBRTs7Z0JBQ3BDLElBQUk7O2tCQUNMLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUVuQyxJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssV0FBVyxFQUFFO2dCQUM5QixhQUFhO2dCQUNiLElBQUksR0FBRyxFQUFFLENBQUM7YUFDWDtpQkFBTSxJQUFJLE1BQU0sS0FBSyxPQUFPLEVBQUU7Z0JBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdCO1lBRUQsT0FBTztnQkFDTCxJQUFJO2dCQUNKLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRTthQUNsQixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBS08sU0FBUyxDQUFDLE9BQW9CO1FBQ3BDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUN6RSxDQUFDOzs7Ozs7SUFFTyxLQUFLLENBQUMsT0FBb0I7O2NBQzFCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUVsQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVoQixPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7Ozs7OztJQUVPLE1BQU0sQ0FBQyxPQUFvQjs7Y0FDM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1FBRXRDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlCLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7U0FDWixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLE9BQW9CO1FBQ3BDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQVcsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7O1lBaEVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLGVBQWU7Ozs7Ozs7O0lBT3BCLHFEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNUQVRVUywgUmVxdWVzdEluZm8gfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcblxuaW1wb3J0IHsgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY2FydC90ZXN0aW5nJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5QmFja2VuZENhcnRTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkluTWVtb3J5RGF0YVNlcnZpY2VJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhcnRGYWN0b3J5OiBEYWZmQ2FydEZhY3RvcnksXG4gICkge31cblxuICBnZXQocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcblx0XHRjb25zdCBjYXJ0ID0gdGhpcy5nZXRDYXJ0KHJlcUluZm8pXG5cdFx0cmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG5cdFx0XHRib2R5OiBjYXJ0LFxuXHRcdFx0c3RhdHVzOiBjYXJ0ID8gU1RBVFVTLk9LIDogU1RBVFVTLk5PVF9GT1VORFxuXHRcdH0pKTtcbiAgfVxuXG4gIHBvc3QocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4ge1xuICAgICAgbGV0IGJvZHk7XG5cdFx0XHRjb25zdCBhY3Rpb24gPSB0aGlzLmdldEFjdGlvbihyZXFJbmZvKTtcblxuICAgICAgaWYgKHJlcUluZm8uaWQgPT09ICdhZGRUb0NhcnQnKSB7XG4gICAgICAgIC8vIGRlcHJlY2F0ZWRcbiAgICAgICAgYm9keSA9IHt9O1xuICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdjbGVhcicpIHtcbiAgICAgICAgYm9keSA9IHRoaXMuY2xlYXIocmVxSW5mbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5ID0gdGhpcy5jcmVhdGUocmVxSW5mbyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJvZHksXG4gICAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgd2hhdGV2ZXIgZm9sbG93cyB0aGUgY2FydCBJRCBzZWN0aW9uIG9mIHRoZSByZXF1ZXN0IFVSTC5cbiAgICovXG4gIHByaXZhdGUgZ2V0QWN0aW9uKHJlcUluZm86IFJlcXVlc3RJbmZvKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcmVxSW5mby51cmwucmVwbGFjZShgLyR7cmVxSW5mby5yZXNvdXJjZVVybH0ke3JlcUluZm8uaWR9L2AsICcnKVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcihyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IERhZmZDYXJ0IHtcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5nZXRDYXJ0KHJlcUluZm8pO1xuXG4gICAgY2FydC5pdGVtcyA9IFtdO1xuXG4gICAgcmV0dXJuIGNhcnRcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlKHJlcUluZm86IFJlcXVlc3RJbmZvKTogUGFydGlhbDx7aWQ6IERhZmZDYXJ0WydpZCddfT4ge1xuICAgIGNvbnN0IGNhcnQgPSB0aGlzLmNhcnRGYWN0b3J5LmNyZWF0ZSgpO1xuXG4gICAgcmVxSW5mby5jb2xsZWN0aW9uLnB1c2goY2FydCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNhcnQuaWRcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYXJ0KHJlcUluZm86IFJlcXVlc3RJbmZvKTogRGFmZkNhcnQge1xuXHRcdHJldHVybiByZXFJbmZvLnV0aWxzLmZpbmRCeUlkPERhZmZDYXJ0PihyZXFJbmZvLmNvbGxlY3Rpb24sIHJlcUluZm8uaWQpO1xuICB9XG59XG4iXX0=