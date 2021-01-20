/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffCartFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
var DaffInMemoryBackendCartService = /** @class */ (function () {
    function DaffInMemoryBackendCartService(cartFactory) {
        this.cartFactory = cartFactory;
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: cart,
            status: cart ? STATUS.OK : STATUS.NOT_FOUND
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartService.prototype.post = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var body;
            /** @type {?} */
            var action = _this.getAction(reqInfo);
            if (reqInfo.id === 'addToCart') {
                // deprecated
                body = {};
            }
            else if (action === 'clear') {
                body = _this.clear(reqInfo);
            }
            else {
                body = _this.create(reqInfo);
            }
            return {
                body: body,
                status: STATUS.OK
            };
        }));
    };
    /**
     * Gets whatever follows the cart ID section of the request URL.
     */
    /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartService.prototype.getAction = /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.url.replace("/" + reqInfo.resourceUrl + reqInfo.id + "/", '');
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartService.prototype.clear = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        cart.items = [];
        return cart;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartService.prototype.create = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.cartFactory.create();
        reqInfo.collection.push(cart);
        return {
            id: cart.id
        };
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartService.prototype.getCart = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, reqInfo.id);
    };
    DaffInMemoryBackendCartService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendCartService.ctorParameters = function () { return [
        { type: DaffCartFactory }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendCartService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartService_Factory() { return new DaffInMemoryBackendCartService(i0.ɵɵinject(i1.DaffCartFactory)); }, token: DaffInMemoryBackendCartService, providedIn: "root" });
    return DaffInMemoryBackendCartService;
}());
export { DaffInMemoryBackendCartService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartService.prototype.cartFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImJhY2tlbmQvY2FydC9jYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLDJCQUEyQixDQUFDO0FBS2hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRXpEO0lBSUUsd0NBQ1UsV0FBNEI7UUFBNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO0lBQ25DLENBQUM7Ozs7O0lBRUosNENBQUc7Ozs7SUFBSCxVQUFJLE9BQW9COztZQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDbEMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLGNBQU0sT0FBQSxDQUFDO1lBQzNDLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVM7U0FDM0MsQ0FBQyxFQUh5QyxDQUd6QyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELDZDQUFJOzs7O0lBQUosVUFBSyxPQUFvQjtRQUF6QixpQkFtQkM7UUFsQkMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDOztnQkFDL0IsSUFBSTs7Z0JBQ0wsTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBRW5DLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxXQUFXLEVBQUU7Z0JBQzlCLGFBQWE7Z0JBQ2IsSUFBSSxHQUFHLEVBQUUsQ0FBQzthQUNYO2lCQUFNLElBQUksTUFBTSxLQUFLLE9BQU8sRUFBRTtnQkFDN0IsSUFBSSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0wsSUFBSSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDN0I7WUFFRCxPQUFPO2dCQUNMLElBQUksTUFBQTtnQkFDSixNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUU7YUFDbEIsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ0ssa0RBQVM7Ozs7OztJQUFqQixVQUFrQixPQUFvQjtRQUNwQyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQUksT0FBTyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsRUFBRSxNQUFHLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDekUsQ0FBQzs7Ozs7O0lBRU8sOENBQUs7Ozs7O0lBQWIsVUFBYyxPQUFvQjs7WUFDMUIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBRWxDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWhCLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQzs7Ozs7O0lBRU8sK0NBQU07Ozs7O0lBQWQsVUFBZSxPQUFvQjs7WUFDM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1FBRXRDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlCLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7U0FDWixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sZ0RBQU87Ozs7O0lBQWYsVUFBZ0IsT0FBb0I7UUFDcEMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBVyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDOztnQkFoRUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxlQUFlOzs7eUNBTnhCO0NBeUVDLEFBakVELElBaUVDO1NBOURZLDhCQUE4Qjs7Ozs7O0lBRXZDLHFEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNUQVRVUywgUmVxdWVzdEluZm8gfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcblxuaW1wb3J0IHsgRGFmZkNhcnQgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY2FydC90ZXN0aW5nJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkluTWVtb3J5QmFja2VuZENhcnRTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkluTWVtb3J5RGF0YVNlcnZpY2VJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhcnRGYWN0b3J5OiBEYWZmQ2FydEZhY3RvcnksXG4gICkge31cblxuICBnZXQocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcblx0XHRjb25zdCBjYXJ0ID0gdGhpcy5nZXRDYXJ0KHJlcUluZm8pXG5cdFx0cmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG5cdFx0XHRib2R5OiBjYXJ0LFxuXHRcdFx0c3RhdHVzOiBjYXJ0ID8gU1RBVFVTLk9LIDogU1RBVFVTLk5PVF9GT1VORFxuXHRcdH0pKTtcbiAgfVxuXG4gIHBvc3QocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4ge1xuICAgICAgbGV0IGJvZHk7XG5cdFx0XHRjb25zdCBhY3Rpb24gPSB0aGlzLmdldEFjdGlvbihyZXFJbmZvKTtcblxuICAgICAgaWYgKHJlcUluZm8uaWQgPT09ICdhZGRUb0NhcnQnKSB7XG4gICAgICAgIC8vIGRlcHJlY2F0ZWRcbiAgICAgICAgYm9keSA9IHt9O1xuICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdjbGVhcicpIHtcbiAgICAgICAgYm9keSA9IHRoaXMuY2xlYXIocmVxSW5mbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5ID0gdGhpcy5jcmVhdGUocmVxSW5mbyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJvZHksXG4gICAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgd2hhdGV2ZXIgZm9sbG93cyB0aGUgY2FydCBJRCBzZWN0aW9uIG9mIHRoZSByZXF1ZXN0IFVSTC5cbiAgICovXG4gIHByaXZhdGUgZ2V0QWN0aW9uKHJlcUluZm86IFJlcXVlc3RJbmZvKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcmVxSW5mby51cmwucmVwbGFjZShgLyR7cmVxSW5mby5yZXNvdXJjZVVybH0ke3JlcUluZm8uaWR9L2AsICcnKVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcihyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IERhZmZDYXJ0IHtcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5nZXRDYXJ0KHJlcUluZm8pO1xuXG4gICAgY2FydC5pdGVtcyA9IFtdO1xuXG4gICAgcmV0dXJuIGNhcnRcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlKHJlcUluZm86IFJlcXVlc3RJbmZvKTogUGFydGlhbDx7aWQ6IERhZmZDYXJ0WydpZCddfT4ge1xuICAgIGNvbnN0IGNhcnQgPSB0aGlzLmNhcnRGYWN0b3J5LmNyZWF0ZSgpO1xuXG4gICAgcmVxSW5mby5jb2xsZWN0aW9uLnB1c2goY2FydCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGNhcnQuaWRcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYXJ0KHJlcUluZm86IFJlcXVlc3RJbmZvKTogRGFmZkNhcnQge1xuXHRcdHJldHVybiByZXFJbmZvLnV0aWxzLmZpbmRCeUlkPERhZmZDYXJ0PihyZXFJbmZvLmNvbGxlY3Rpb24sIHJlcUluZm8uaWQpO1xuICB9XG59XG4iXX0=