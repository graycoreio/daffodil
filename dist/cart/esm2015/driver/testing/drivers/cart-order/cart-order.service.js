/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as faker from 'faker/locale/en_US';
import * as i0 from "@angular/core";
export class DaffTestingCartOrderService {
    /**
     * @param {?} cartId
     * @param {?=} payment
     * @return {?}
     */
    placeOrder(cartId, payment) {
        return of({
            id: faker.random.number(999999),
            orderId: faker.random.number(999999),
            cartId,
        });
    }
}
DaffTestingCartOrderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffTestingCartOrderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingCartOrderService_Factory() { return new DaffTestingCartOrderService(); }, token: DaffTestingCartOrderService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL2NhcnQtb3JkZXIvY2FydC1vcmRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQzs7QUFVNUMsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7O0lBQ3RDLFVBQVUsQ0FBQyxNQUFzQixFQUFFLE9BQStCO1FBQ2hFLE9BQU8sRUFBRSxDQUFDO1lBQ1IsRUFBRSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUMvQixPQUFPLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3BDLE1BQU07U0FDUCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFWRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgZmFrZXIgZnJvbSAnZmFrZXIvbG9jYWxlL2VuX1VTJztcblxuaW1wb3J0IHsgRGFmZkNhcnQsIERhZmZDYXJ0UGF5bWVudE1ldGhvZCwgRGFmZkNhcnRPcmRlclJlc3VsdCB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0JztcbmltcG9ydCB7XG4gIERhZmZDYXJ0T3JkZXJTZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvY2FydC9kcml2ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmVGVzdGluZ0NhcnRPcmRlclNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydE9yZGVyU2VydmljZUludGVyZmFjZSB7XG4gIHBsYWNlT3JkZXIoY2FydElkOiBEYWZmQ2FydFsnaWQnXSwgcGF5bWVudD86IERhZmZDYXJ0UGF5bWVudE1ldGhvZCk6IE9ic2VydmFibGU8RGFmZkNhcnRPcmRlclJlc3VsdD4ge1xuICAgIHJldHVybiBvZih7XG4gICAgICBpZDogZmFrZXIucmFuZG9tLm51bWJlcig5OTk5OTkpLFxuICAgICAgb3JkZXJJZDogZmFrZXIucmFuZG9tLm51bWJlcig5OTk5OTkpLFxuICAgICAgY2FydElkLFxuICAgIH0pO1xuICB9XG59XG4iXX0=