/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var MockDaffPaypalFacade = /** @class */ (function () {
    function MockDaffPaypalFacade() {
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
    MockDaffPaypalFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    ;
    MockDaffPaypalFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffPaypalFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffPaypalFacade_Factory() { return new MockDaffPaypalFacade(); }, token: MockDaffPaypalFacade, providedIn: "root" });
    return MockDaffPaypalFacade;
}());
export { MockDaffPaypalFacade };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1wYXlwYWwtZmFjYWRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3BheXBhbC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiaGVscGVycy9tb2NrLXBheXBhbC1mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJM0M7SUFBQTtRQUVFLGFBQVEsR0FBNkIsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakUseUJBQW9CLEdBQTZDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNGLGlCQUFZLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLG9CQUFlLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JFLG1CQUFjLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLFdBQU0sR0FBNEIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7S0FFN0Q7Ozs7O0lBREMsdUNBQVE7Ozs7SUFBUixVQUFTLE1BQWMsSUFBRyxDQUFDO0lBQUEsQ0FBQzs7Z0JBUjdCLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7OzsrQkFOaEM7Q0FlQyxBQVRELElBU0M7U0FSWSxvQkFBb0I7OztJQUMvQix3Q0FBZ0U7O0lBQ2pFLG9EQUEyRjs7SUFDM0YsNENBQWtFOztJQUNsRSwrQ0FBcUU7O0lBQ3JFLDhDQUFvRTs7SUFDbkUsc0NBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZQYXlwYWxGYWNhZGVJbnRlcmZhY2UsIERhZmZQYXlwYWxUb2tlblJlc3BvbnNlIH0gZnJvbSAnQGRhZmZvZGlsL3BheXBhbCc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE1vY2tEYWZmUGF5cGFsRmFjYWRlIGltcGxlbWVudHMgRGFmZlBheXBhbEZhY2FkZUludGVyZmFjZSB7XG4gIGxvYWRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblx0cGF5cGFsVG9rZW5SZXNwb25zZSQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmUGF5cGFsVG9rZW5SZXNwb25zZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXHRwYXlwYWxUb2tlbiQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblx0cGF5cGFsU3RhcnRVcmwkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cdHBheXBhbEVkaXRVcmwkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIGVycm9yJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge307XG59XG4iXX0=