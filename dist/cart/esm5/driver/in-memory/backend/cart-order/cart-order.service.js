/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import * as i0 from "@angular/core";
var DaffInMemoryBackendCartOrderService = /** @class */ (function () {
    function DaffInMemoryBackendCartOrderService() {
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartOrderService.prototype.post = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.placeOrder(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartOrderService.prototype.placeOrder = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return {
            id: '8235422034',
            cartId: '89fdsa8sadf',
            orderId: '8235422034',
        };
    };
    DaffInMemoryBackendCartOrderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffInMemoryBackendCartOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartOrderService_Factory() { return new DaffInMemoryBackendCartOrderService(); }, token: DaffInMemoryBackendCartOrderService, providedIn: "root" });
    return DaffInMemoryBackendCartOrderService;
}());
export { DaffInMemoryBackendCartOrderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImJhY2tlbmQvY2FydC1vcmRlci9jYXJ0LW9yZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLDJCQUEyQixDQUFDOztBQU9oRTtJQUFBO0tBa0JDOzs7OztJQWRDLGtEQUFJOzs7O0lBQUosVUFBSyxPQUFvQjtRQUF6QixpQkFLQztRQUpDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlOzs7UUFBQyxjQUFNLE9BQUEsQ0FBQztZQUMxQyxJQUFJLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDOUIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ2xCLENBQUMsRUFIeUMsQ0FHekMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRU8sd0RBQVU7Ozs7O0lBQWxCLFVBQW1CLE9BQU87UUFDeEIsT0FBTztZQUNMLEVBQUUsRUFBRSxZQUFZO1lBQ2hCLE1BQU0sRUFBRSxhQUFhO1lBQ3JCLE9BQU8sRUFBRSxZQUFZO1NBQ3RCLENBQUM7SUFDSixDQUFDOztnQkFqQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OzhDQVZEO0NBMEJDLEFBbEJELElBa0JDO1NBZlksbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU1RBVFVTLCBSZXF1ZXN0SW5mbyB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xuXG5pbXBvcnQge1xuICBEYWZmQ2FydE9yZGVyUmVzdWx0XG59IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7IERhZmZJbk1lbW9yeURhdGFTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0T3JkZXJTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkluTWVtb3J5RGF0YVNlcnZpY2VJbnRlcmZhY2Uge1xuICBwb3N0KHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG4gICAgICBib2R5OiB0aGlzLnBsYWNlT3JkZXIocmVxSW5mbyksXG4gICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgcGxhY2VPcmRlcihyZXFJbmZvKTogRGFmZkNhcnRPcmRlclJlc3VsdCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiAnODIzNTQyMjAzNCcsXG4gICAgICBjYXJ0SWQ6ICc4OWZkc2E4c2FkZicsXG4gICAgICBvcmRlcklkOiAnODIzNTQyMjAzNCcsXG4gICAgfTtcbiAgfVxufVxuIl19