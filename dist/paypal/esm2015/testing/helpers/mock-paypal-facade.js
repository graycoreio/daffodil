/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class MockDaffPaypalFacade {
    constructor() {
        this.loading$ = new BehaviorSubject(false);
        this.paypalTokenResponse$ = new BehaviorSubject(null);
        this.paypalToken$ = new BehaviorSubject(null);
        this.paypalStartUrl$ = new BehaviorSubject(null);
        this.paypalEditUrl$ = new BehaviorSubject(null);
        this.error$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) { }
    ;
}
MockDaffPaypalFacade.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MockDaffPaypalFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffPaypalFacade_Factory() { return new MockDaffPaypalFacade(); }, token: MockDaffPaypalFacade, providedIn: "root" });
if (false) {
    /** @type {?} */
    MockDaffPaypalFacade.prototype.loading$;
    /** @type {?} */
    MockDaffPaypalFacade.prototype.paypalTokenResponse$;
    /** @type {?} */
    MockDaffPaypalFacade.prototype.paypalToken$;
    /** @type {?} */
    MockDaffPaypalFacade.prototype.paypalStartUrl$;
    /** @type {?} */
    MockDaffPaypalFacade.prototype.paypalEditUrl$;
    /** @type {?} */
    MockDaffPaypalFacade.prototype.error$;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1wYXlwYWwtZmFjYWRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3BheXBhbC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiaGVscGVycy9tb2NrLXBheXBhbC1mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLG9CQUFvQjtJQURqQztRQUVFLGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakUseUJBQW9CLEdBQTZDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNGLGlCQUFZLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLG9CQUFlLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JFLG1CQUFjLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLFdBQU0sR0FBNEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7S0FFN0Q7Ozs7O0lBREMsUUFBUSxDQUFDLE1BQWMsSUFBRyxDQUFDO0lBQUEsQ0FBQzs7O1lBUjdCLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs7O0lBRTlCLHdDQUFnRTs7SUFDakUsb0RBQTJGOztJQUMzRiw0Q0FBa0U7O0lBQ2xFLCtDQUFxRTs7SUFDckUsOENBQW9FOztJQUNuRSxzQ0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZlBheXBhbEZhY2FkZUludGVyZmFjZSwgRGFmZlBheXBhbFRva2VuUmVzcG9uc2UgfSBmcm9tICdAZGFmZm9kaWwvcGF5cGFsJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTW9ja0RhZmZQYXlwYWxGYWNhZGUgaW1wbGVtZW50cyBEYWZmUGF5cGFsRmFjYWRlSW50ZXJmYWNlIHtcbiAgbG9hZGluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXHRwYXlwYWxUb2tlblJlc3BvbnNlJDogQmVoYXZpb3JTdWJqZWN0PERhZmZQYXlwYWxUb2tlblJlc3BvbnNlPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdHBheXBhbFRva2VuJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXHRwYXlwYWxTdGFydFVybCQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblx0cGF5cGFsRWRpdFVybCQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgZXJyb3IkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7fTtcbn1cbiJdfQ==