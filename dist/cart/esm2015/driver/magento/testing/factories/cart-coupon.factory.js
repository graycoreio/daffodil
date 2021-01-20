/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockMagentoCartCoupon {
    constructor() {
        this.code = faker.random.alphaNumeric(20);
    }
}
if (false) {
    /** @type {?} */
    MockMagentoCartCoupon.prototype.code;
}
;
export class MagentoCartCouponFactory extends DaffModelFactory {
    constructor() {
        super(MockMagentoCartCoupon);
    }
}
MagentoCartCouponFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MagentoCartCouponFactory.ctorParameters = () => [];
/** @nocollapse */ MagentoCartCouponFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MagentoCartCouponFactory_Factory() { return new MagentoCartCouponFactory(); }, token: MagentoCartCouponFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1jb3Vwb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXJ0L2RyaXZlci9tYWdlbnRvL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvY2FydC1jb3Vwb24uZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEtBQUssS0FBSyxNQUFNLG9CQUFvQixDQUFDO0FBRzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRCxNQUFNLE9BQU8scUJBQXFCO0lBQWxDO1FBQ0UsU0FBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FBQTs7O0lBREMscUNBQXFDOztBQUN0QyxDQUFDO0FBTUYsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGdCQUFtQztJQUMvRTtRQUNFLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQy9CLENBQUM7OztZQU5GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IE1hZ2VudG9DYXJ0Q291cG9uIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyL21hZ2VudG8nO1xuaW1wb3J0IHsgRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5leHBvcnQgY2xhc3MgTW9ja01hZ2VudG9DYXJ0Q291cG9uIGltcGxlbWVudHMgTWFnZW50b0NhcnRDb3Vwb24ge1xuICBjb2RlID0gZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygyMCk7XG59O1xuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hZ2VudG9DYXJ0Q291cG9uRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8TWFnZW50b0NhcnRDb3Vwb24+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja01hZ2VudG9DYXJ0Q291cG9uKTtcbiAgfVxufVxuIl19