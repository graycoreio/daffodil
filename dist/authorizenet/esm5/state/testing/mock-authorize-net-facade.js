/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var MockDaffAuthorizeNetFacade = /** @class */ (function () {
    function MockDaffAuthorizeNetFacade() {
        this.isAcceptJsLoaded$ = new BehaviorSubject(false);
        this.loading$ = new BehaviorSubject(false);
        this.paymentError$ = new BehaviorSubject(null);
        this.acceptJsLoadError$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffAuthorizeNetFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    ;
    MockDaffAuthorizeNetFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffAuthorizeNetFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffAuthorizeNetFacade_Factory() { return new MockDaffAuthorizeNetFacade(); }, token: MockDaffAuthorizeNetFacade, providedIn: "root" });
    return MockDaffAuthorizeNetFacade;
}());
export { MockDaffAuthorizeNetFacade };
if (false) {
    /** @type {?} */
    MockDaffAuthorizeNetFacade.prototype.isAcceptJsLoaded$;
    /** @type {?} */
    MockDaffAuthorizeNetFacade.prototype.loading$;
    /** @type {?} */
    MockDaffAuthorizeNetFacade.prototype.paymentError$;
    /** @type {?} */
    MockDaffAuthorizeNetFacade.prototype.acceptJsLoadError$;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1hdXRob3JpemUtbmV0LWZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRob3JpemVuZXQvc3RhdGUvdGVzdGluZy8iLCJzb3VyY2VzIjpbIm1vY2stYXV0aG9yaXplLW5ldC1mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0M7SUFBQTtRQUVFLHNCQUFpQixHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RSxhQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLGtCQUFhLEdBQW9DLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNFLHVCQUFrQixHQUFvQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUdqRjs7Ozs7SUFEQyw2Q0FBUTs7OztJQUFSLFVBQVMsTUFBYyxJQUFHLENBQUM7SUFBQSxDQUFDOztnQkFQN0IsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7O3FDQVBoQztDQWVDLEFBUkQsSUFRQztTQVBZLDBCQUEwQjs7O0lBQ3JDLHVEQUF5RTs7SUFDekUsOENBQWdFOztJQUNoRSxtREFBMkU7O0lBQzNFLHdEQUFnRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQXV0aG9yaXplTmV0RmFjYWRlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2F1dGhvcml6ZW5ldC9zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmU3RhdGVFcnJvciB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3N0YXRlJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTW9ja0RhZmZBdXRob3JpemVOZXRGYWNhZGUgaW1wbGVtZW50cyBEYWZmQXV0aG9yaXplTmV0RmFjYWRlSW50ZXJmYWNlIHtcbiAgaXNBY2NlcHRKc0xvYWRlZCQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICBsb2FkaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIHBheW1lbnRFcnJvciQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmU3RhdGVFcnJvcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBhY2NlcHRKc0xvYWRFcnJvciQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmU3RhdGVFcnJvcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXG4gIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7fTtcbn1cbiJdfQ==