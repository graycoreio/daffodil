/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class MockDaffAuthorizeNetFacade {
    constructor() {
        this.isAcceptJsLoaded$ = new BehaviorSubject(false);
        this.loading$ = new BehaviorSubject(false);
        this.paymentError$ = new BehaviorSubject(null);
        this.acceptJsLoadError$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) { }
    ;
}
MockDaffAuthorizeNetFacade.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MockDaffAuthorizeNetFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffAuthorizeNetFacade_Factory() { return new MockDaffAuthorizeNetFacade(); }, token: MockDaffAuthorizeNetFacade, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1hdXRob3JpemUtbmV0LWZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRob3JpemVuZXQvc3RhdGUvdGVzdGluZy8iLCJzb3VyY2VzIjpbIm1vY2stYXV0aG9yaXplLW5ldC1mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNM0MsTUFBTSxPQUFPLDBCQUEwQjtJQUR2QztRQUVFLHNCQUFpQixHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RSxhQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLGtCQUFhLEdBQW9DLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNFLHVCQUFrQixHQUFvQyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUdqRjs7Ozs7SUFEQyxRQUFRLENBQUMsTUFBYyxJQUFHLENBQUM7SUFBQSxDQUFDOzs7WUFQN0IsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7Ozs7SUFFOUIsdURBQXlFOztJQUN6RSw4Q0FBZ0U7O0lBQ2hFLG1EQUEyRTs7SUFDM0Usd0RBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZBdXRob3JpemVOZXRGYWNhZGVJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvYXV0aG9yaXplbmV0L3N0YXRlJztcbmltcG9ydCB7IERhZmZTdGF0ZUVycm9yIH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBNb2NrRGFmZkF1dGhvcml6ZU5ldEZhY2FkZSBpbXBsZW1lbnRzIERhZmZBdXRob3JpemVOZXRGYWNhZGVJbnRlcmZhY2Uge1xuICBpc0FjY2VwdEpzTG9hZGVkJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGxvYWRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgcGF5bWVudEVycm9yJDogQmVoYXZpb3JTdWJqZWN0PERhZmZTdGF0ZUVycm9yPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIGFjY2VwdEpzTG9hZEVycm9yJDogQmVoYXZpb3JTdWJqZWN0PERhZmZTdGF0ZUVycm9yPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHt9O1xufVxuIl19