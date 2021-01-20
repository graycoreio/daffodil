/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class MockDaffProductFacade {
    constructor() {
        this.loading$ = new BehaviorSubject(false);
        /**
         * @deprecated use getProduct instead.
         */
        this.product$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getProduct(id) {
        return new BehaviorSubject(null);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getPrice(id) {
        return new BehaviorSubject(null);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    hasDiscount(id) {
        return new BehaviorSubject(false);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getDiscountAmount(id) {
        return new BehaviorSubject(null);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getDiscountedPrice(id) {
        return new BehaviorSubject(null);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getDiscountPercent(id) {
        return new BehaviorSubject(null);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    isOutOfStock(id) {
        return new BehaviorSubject(false);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) { }
    ;
}
MockDaffProductFacade.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MockDaffProductFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffProductFacade_Factory() { return new MockDaffProductFacade(); }, token: MockDaffProductFacade, providedIn: "root" });
if (false) {
    /** @type {?} */
    MockDaffProductFacade.prototype.loading$;
    /**
     * @deprecated use getProduct instead.
     * @type {?}
     */
    MockDaffProductFacade.prototype.product$;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1wcm9kdWN0LWZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJoZWxwZXJzL21vY2stcHJvZHVjdC1mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLHFCQUFxQjtJQURsQztRQUVDLGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7UUFJaEUsYUFBUSxHQUFpQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQXVCbkU7Ozs7O0lBdEJBLFVBQVUsQ0FBQyxFQUFVO1FBQ3BCLE9BQU8sSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFDRCxRQUFRLENBQUMsRUFBVTtRQUNsQixPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBQ0QsV0FBVyxDQUFDLEVBQVU7UUFDckIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUNELGlCQUFpQixDQUFDLEVBQVU7UUFDM0IsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUNELGtCQUFrQixDQUFDLEVBQVU7UUFDNUIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUNELGtCQUFrQixDQUFDLEVBQVU7UUFDNUIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUNELFlBQVksQ0FBQyxFQUFVO1FBQ3RCLE9BQU8sSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFDRCxRQUFRLENBQUMsTUFBTSxJQUFHLENBQUM7SUFBQSxDQUFDOzs7WUE1QnBCLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs7O0lBRS9CLHlDQUFnRTs7Ozs7SUFJaEUseUNBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0LCBEYWZmUHJvZHVjdEZhY2FkZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTW9ja0RhZmZQcm9kdWN0RmFjYWRlIGltcGxlbWVudHMgRGFmZlByb2R1Y3RGYWNhZGVJbnRlcmZhY2Uge1xuXHRsb2FkaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZCB1c2UgZ2V0UHJvZHVjdCBpbnN0ZWFkLlxuXHQgKi9cblx0cHJvZHVjdCQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmUHJvZHVjdD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXHRnZXRQcm9kdWN0KGlkOiBzdHJpbmcpOiBCZWhhdmlvclN1YmplY3Q8RGFmZlByb2R1Y3Q+IHtcblx0XHRyZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblx0fVxuXHRnZXRQcmljZShpZDogc3RyaW5nKTogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4ge1xuXHRcdHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXHR9XG5cdGhhc0Rpc2NvdW50KGlkOiBzdHJpbmcpOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblx0fVxuXHRnZXREaXNjb3VudEFtb3VudChpZDogc3RyaW5nKTogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4ge1xuXHRcdHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXHR9XG5cdGdldERpc2NvdW50ZWRQcmljZShpZDogc3RyaW5nKTogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4ge1xuXHRcdHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXHR9XG5cdGdldERpc2NvdW50UGVyY2VudChpZDogc3RyaW5nKTogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4ge1xuXHRcdHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXHR9XG5cdGlzT3V0T2ZTdG9jayhpZDogc3RyaW5nKTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cdH1cblx0ZGlzcGF0Y2goYWN0aW9uKSB7fTtcbn1cbiJdfQ==