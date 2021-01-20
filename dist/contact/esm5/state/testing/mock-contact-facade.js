/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var MockDaffContactFacade = /** @class */ (function () {
    function MockDaffContactFacade() {
        this.success$ = new BehaviorSubject(false);
        this.error$ = new BehaviorSubject([]);
        this.loading$ = new BehaviorSubject(false);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffContactFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    ;
    MockDaffContactFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffContactFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffContactFacade_Factory() { return new MockDaffContactFacade(); }, token: MockDaffContactFacade, providedIn: "root" });
    return MockDaffContactFacade;
}());
export { MockDaffContactFacade };
if (false) {
    /** @type {?} */
    MockDaffContactFacade.prototype.success$;
    /** @type {?} */
    MockDaffContactFacade.prototype.error$;
    /** @type {?} */
    MockDaffContactFacade.prototype.loading$;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1jb250YWN0LWZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jb250YWN0L3N0YXRlL3Rlc3RpbmcvIiwic291cmNlcyI6WyJtb2NrLWNvbnRhY3QtZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSTNDO0lBQUE7UUFFRSxhQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLFdBQU0sR0FBOEIsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUQsYUFBUSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUdqRTs7Ozs7SUFEQyx3Q0FBUTs7OztJQUFSLFVBQVMsTUFBYyxJQUFHLENBQUM7SUFBQSxDQUFDOztnQkFON0IsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7O2dDQU5oQztDQWFDLEFBUEQsSUFPQztTQU5ZLHFCQUFxQjs7O0lBQ2hDLHlDQUFnRTs7SUFDaEUsdUNBQTREOztJQUM1RCx5Q0FBZ0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZkNvbnRhY3RGYWNhZGVJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY29udGFjdC9zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE1vY2tEYWZmQ29udGFjdEZhY2FkZSBpbXBsZW1lbnRzIERhZmZDb250YWN0RmFjYWRlSW50ZXJmYWNlIHtcbiAgc3VjY2VzcyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBlcnJvciQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmdbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgbG9hZGluZyQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuXG4gIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7fTtcbn1cbiJdfQ==