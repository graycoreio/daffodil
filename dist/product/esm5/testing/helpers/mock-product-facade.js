/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var MockDaffProductFacade = /** @class */ (function () {
    function MockDaffProductFacade() {
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
    MockDaffProductFacade.prototype.getProduct = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffProductFacade.prototype.getPrice = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffProductFacade.prototype.hasDiscount = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(false);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffProductFacade.prototype.getDiscountAmount = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffProductFacade.prototype.getDiscountedPrice = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffProductFacade.prototype.getDiscountPercent = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MockDaffProductFacade.prototype.isOutOfStock = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return new BehaviorSubject(false);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffProductFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    ;
    MockDaffProductFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffProductFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffProductFacade_Factory() { return new MockDaffProductFacade(); }, token: MockDaffProductFacade, providedIn: "root" });
    return MockDaffProductFacade;
}());
export { MockDaffProductFacade };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1wcm9kdWN0LWZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0L3Rlc3RpbmcvIiwic291cmNlcyI6WyJoZWxwZXJzL21vY2stcHJvZHVjdC1mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJM0M7SUFBQTtRQUVDLGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7UUFJaEUsYUFBUSxHQUFpQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQXVCbkU7Ozs7O0lBdEJBLDBDQUFVOzs7O0lBQVYsVUFBVyxFQUFVO1FBQ3BCLE9BQU8sSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFDRCx3Q0FBUTs7OztJQUFSLFVBQVMsRUFBVTtRQUNsQixPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBQ0QsMkNBQVc7Ozs7SUFBWCxVQUFZLEVBQVU7UUFDckIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUNELGlEQUFpQjs7OztJQUFqQixVQUFrQixFQUFVO1FBQzNCLE9BQU8sSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFDRCxrREFBa0I7Ozs7SUFBbEIsVUFBbUIsRUFBVTtRQUM1QixPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBQ0Qsa0RBQWtCOzs7O0lBQWxCLFVBQW1CLEVBQVU7UUFDNUIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUNELDRDQUFZOzs7O0lBQVosVUFBYSxFQUFVO1FBQ3RCLE9BQU8sSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFDRCx3Q0FBUTs7OztJQUFSLFVBQVMsTUFBTSxJQUFHLENBQUM7SUFBQSxDQUFDOztnQkE1QnBCLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7OztnQ0FMaEM7Q0FrQ0MsQUE3QkQsSUE2QkM7U0E1QlkscUJBQXFCOzs7SUFDakMseUNBQWdFOzs7OztJQUloRSx5Q0FBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3QsIERhZmZQcm9kdWN0RmFjYWRlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNb2NrRGFmZlByb2R1Y3RGYWNhZGUgaW1wbGVtZW50cyBEYWZmUHJvZHVjdEZhY2FkZUludGVyZmFjZSB7XG5cdGxvYWRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkIHVzZSBnZXRQcm9kdWN0IGluc3RlYWQuXG5cdCAqL1xuXHRwcm9kdWN0JDogQmVoYXZpb3JTdWJqZWN0PERhZmZQcm9kdWN0PiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdGdldFByb2R1Y3QoaWQ6IHN0cmluZyk6IEJlaGF2aW9yU3ViamVjdDxEYWZmUHJvZHVjdD4ge1xuXHRcdHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXHR9XG5cdGdldFByaWNlKGlkOiBzdHJpbmcpOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdH1cblx0aGFzRGlzY291bnQoaWQ6IHN0cmluZyk6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiB7XG5cdFx0cmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXHR9XG5cdGdldERpc2NvdW50QW1vdW50KGlkOiBzdHJpbmcpOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdH1cblx0Z2V0RGlzY291bnRlZFByaWNlKGlkOiBzdHJpbmcpOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdH1cblx0Z2V0RGlzY291bnRQZXJjZW50KGlkOiBzdHJpbmcpOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdH1cblx0aXNPdXRPZlN0b2NrKGlkOiBzdHJpbmcpOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblx0fVxuXHRkaXNwYXRjaChhY3Rpb24pIHt9O1xufVxuIl19