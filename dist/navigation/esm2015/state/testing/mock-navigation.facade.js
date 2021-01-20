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
export class MockDaffNavigationFacade {
    constructor() {
        this.loading$ = new BehaviorSubject(false);
        this.tree$ = new BehaviorSubject(null);
        this.errors$ = new BehaviorSubject([]);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) { }
}
MockDaffNavigationFacade.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MockDaffNavigationFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffNavigationFacade_Factory() { return new MockDaffNavigationFacade(); }, token: MockDaffNavigationFacade, providedIn: "root" });
if (false) {
    /** @type {?} */
    MockDaffNavigationFacade.prototype.loading$;
    /** @type {?} */
    MockDaffNavigationFacade.prototype.tree$;
    /** @type {?} */
    MockDaffNavigationFacade.prototype.errors$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1uYXZpZ2F0aW9uLmZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9uYXZpZ2F0aW9uL3N0YXRlL3Rlc3RpbmcvIiwic291cmNlcyI6WyJtb2NrLW5hdmlnYXRpb24uZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFVM0MsTUFBTSxPQUFPLHdCQUF3QjtJQURyQztRQUVFLGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEUsVUFBSyxHQUF1QixJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxZQUFPLEdBQThCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBRTlEOzs7OztJQURDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQzs7O1lBTHJCLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs7O0lBRTlCLDRDQUFnRTs7SUFDaEUseUNBQXNEOztJQUN0RCwyQ0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZkdlbmVyaWNOYXZpZ2F0aW9uVHJlZSB9IGZyb20gJ0BkYWZmb2RpbC9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IERhZmZOYXZpZ2F0aW9uRmFjYWRlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL25hdmlnYXRpb24vc3RhdGUnO1xuXG4vKipcbiAqIEEgbW9jayBvZiB0aGUgRGFmZk5hdmlnYXRpb25GYWNhZGUgdXNlZCB0byByZW1vdmUgYW55IGludGVyYWN0aW9uIHdpdGggdGhlIG5ncnggc3RvcmUuXG4gKiBUaGlzIG1vY2sgc2hvdWxkIGJlIGltcG9ydGVkIGludG8gdGVzdHMgdXNpbmcgdGhlIERhZmZOYXZpZ2F0aW9uVGVzdGluZ01vZHVsZS5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTW9ja0RhZmZOYXZpZ2F0aW9uRmFjYWRlPFQgZXh0ZW5kcyBEYWZmR2VuZXJpY05hdmlnYXRpb25UcmVlPFQ+PiBpbXBsZW1lbnRzIERhZmZOYXZpZ2F0aW9uRmFjYWRlSW50ZXJmYWNlPFQ+IHtcbiAgbG9hZGluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICB0cmVlJDogQmVoYXZpb3JTdWJqZWN0PFQ+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgZXJyb3JzJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZ1tdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBkaXNwYXRjaChhY3Rpb24pIHsgfVxufVxuIl19