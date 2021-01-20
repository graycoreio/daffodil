/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A mock of the DaffNavigationFacade used to remove any interaction with the ngrx store.
 * This mock should be imported into tests using the DaffNavigationTestingModule.
 * @template T
 */
var MockDaffNavigationFacade = /** @class */ (function () {
    function MockDaffNavigationFacade() {
        this.loading$ = new BehaviorSubject(false);
        this.tree$ = new BehaviorSubject(null);
        this.errors$ = new BehaviorSubject([]);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffNavigationFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    MockDaffNavigationFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffNavigationFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffNavigationFacade_Factory() { return new MockDaffNavigationFacade(); }, token: MockDaffNavigationFacade, providedIn: "root" });
    return MockDaffNavigationFacade;
}());
export { MockDaffNavigationFacade };
if (false) {
    /** @type {?} */
    MockDaffNavigationFacade.prototype.loading$;
    /** @type {?} */
    MockDaffNavigationFacade.prototype.tree$;
    /** @type {?} */
    MockDaffNavigationFacade.prototype.errors$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1uYXZpZ2F0aW9uLmZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9uYXZpZ2F0aW9uL3N0YXRlL3Rlc3RpbmcvIiwic291cmNlcyI6WyJtb2NrLW5hdmlnYXRpb24uZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFTM0M7SUFBQTtRQUVFLGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEUsVUFBSyxHQUF1QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxZQUFPLEdBQThCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBRTlEOzs7OztJQURDLDJDQUFROzs7O0lBQVIsVUFBUyxNQUFNLElBQUksQ0FBQzs7Z0JBTHJCLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7OzttQ0FWaEM7Q0FnQkMsQUFORCxJQU1DO1NBTFksd0JBQXdCOzs7SUFDbkMsNENBQWdFOztJQUNoRSx5Q0FBc0Q7O0lBQ3RELDJDQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmR2VuZXJpY05hdmlnYXRpb25UcmVlIH0gZnJvbSAnQGRhZmZvZGlsL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgRGFmZk5hdmlnYXRpb25GYWNhZGVJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvbmF2aWdhdGlvbi9zdGF0ZSc7XG5cbi8qKlxuICogQSBtb2NrIG9mIHRoZSBEYWZmTmF2aWdhdGlvbkZhY2FkZSB1c2VkIHRvIHJlbW92ZSBhbnkgaW50ZXJhY3Rpb24gd2l0aCB0aGUgbmdyeCBzdG9yZS5cbiAqIFRoaXMgbW9jayBzaG91bGQgYmUgaW1wb3J0ZWQgaW50byB0ZXN0cyB1c2luZyB0aGUgRGFmZk5hdmlnYXRpb25UZXN0aW5nTW9kdWxlLlxuICovXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNb2NrRGFmZk5hdmlnYXRpb25GYWNhZGU8VCBleHRlbmRzIERhZmZHZW5lcmljTmF2aWdhdGlvblRyZWU8VD4+IGltcGxlbWVudHMgRGFmZk5hdmlnYXRpb25GYWNhZGVJbnRlcmZhY2U8VD4ge1xuICBsb2FkaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHRyZWUkOiBCZWhhdmlvclN1YmplY3Q8VD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBlcnJvcnMkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIGRpc3BhdGNoKGFjdGlvbikgeyB9XG59XG4iXX0=