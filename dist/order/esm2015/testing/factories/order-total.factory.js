/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffOrderTotalTypeEnum } from '@daffodil/order';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockOrderTotal {
    constructor() {
        this.label = faker.random.word();
        this.value = faker.random.number({ min: 1, max: 100 });
        this.sort_order = faker.random.number({ min: 1, max: 100 });
        this.type = DaffOrderTotalTypeEnum.GrandTotal;
    }
}
if (false) {
    /** @type {?} */
    MockOrderTotal.prototype.label;
    /** @type {?} */
    MockOrderTotal.prototype.value;
    /** @type {?} */
    MockOrderTotal.prototype.sort_order;
    /** @type {?} */
    MockOrderTotal.prototype.type;
}
;
export class DaffOrderTotalFactory extends DaffModelFactory {
    constructor() {
        super(MockOrderTotal);
    }
}
DaffOrderTotalFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffOrderTotalFactory.ctorParameters = () => [];
/** @nocollapse */ DaffOrderTotalFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffOrderTotalFactory_Factory() { return new DaffOrderTotalFactory(); }, token: DaffOrderTotalFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItdG90YWwuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9vcmRlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZmFjdG9yaWVzL29yZGVyLXRvdGFsLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUU1QyxPQUFPLEVBQWtCLHNCQUFzQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFELE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBQ0UsVUFBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsVUFBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUNoRCxlQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQ3JELFNBQUksR0FBRyxzQkFBc0IsQ0FBQyxVQUFVLENBQUE7SUFDMUMsQ0FBQztDQUFBOzs7SUFKQywrQkFBNEI7O0lBQzVCLCtCQUFnRDs7SUFDaEQsb0NBQXFEOztJQUNyRCw4QkFBd0M7O0FBQ3pDLENBQUM7QUFLRixNQUFNLE9BQU8scUJBQXNCLFNBQVEsZ0JBQWdDO0lBQ3pFO1FBQ0UsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7OztZQU5GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZPcmRlclRvdGFsLCBEYWZmT3JkZXJUb3RhbFR5cGVFbnVtIH0gZnJvbSAnQGRhZmZvZGlsL29yZGVyJztcbmltcG9ydCB7IERhZmZNb2RlbEZhY3RvcnkgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuZXhwb3J0IGNsYXNzIE1vY2tPcmRlclRvdGFsIGltcGxlbWVudHMgRGFmZk9yZGVyVG90YWwge1xuICBsYWJlbCA9IGZha2VyLnJhbmRvbS53b3JkKCk7XG4gIHZhbHVlID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMH0pO1xuICBzb3J0X29yZGVyID0gZmFrZXIucmFuZG9tLm51bWJlcih7bWluOiAxLCBtYXg6IDEwMH0pO1xuICB0eXBlID0gRGFmZk9yZGVyVG90YWxUeXBlRW51bS5HcmFuZFRvdGFsXG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmT3JkZXJUb3RhbEZhY3RvcnkgZXh0ZW5kcyBEYWZmTW9kZWxGYWN0b3J5PERhZmZPcmRlclRvdGFsPiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKE1vY2tPcmRlclRvdGFsKTtcbiAgfVxufVxuIl19