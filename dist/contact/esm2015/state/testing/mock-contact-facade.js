/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class MockDaffContactFacade {
    constructor() {
        this.success$ = new BehaviorSubject(false);
        this.error$ = new BehaviorSubject([]);
        this.loading$ = new BehaviorSubject(false);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) { }
    ;
}
MockDaffContactFacade.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MockDaffContactFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffContactFacade_Factory() { return new MockDaffContactFacade(); }, token: MockDaffContactFacade, providedIn: "root" });
if (false) {
    /** @type {?} */
    MockDaffContactFacade.prototype.success$;
    /** @type {?} */
    MockDaffContactFacade.prototype.error$;
    /** @type {?} */
    MockDaffContactFacade.prototype.loading$;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1jb250YWN0LWZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jb250YWN0L3N0YXRlL3Rlc3RpbmcvIiwic291cmNlcyI6WyJtb2NrLWNvbnRhY3QtZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxxQkFBcUI7SUFEbEM7UUFFRSxhQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLFdBQU0sR0FBOEIsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUQsYUFBUSxHQUE2QixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUdqRTs7Ozs7SUFEQyxRQUFRLENBQUMsTUFBYyxJQUFHLENBQUM7SUFBQSxDQUFDOzs7WUFON0IsVUFBVSxTQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQzs7Ozs7SUFFOUIseUNBQWdFOztJQUNoRSx1Q0FBNEQ7O0lBQzVELHlDQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ29udGFjdEZhY2FkZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jb250YWN0L3N0YXRlJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTW9ja0RhZmZDb250YWN0RmFjYWRlIGltcGxlbWVudHMgRGFmZkNvbnRhY3RGYWNhZGVJbnRlcmZhY2Uge1xuICBzdWNjZXNzJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG4gIGVycm9yJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZ1tdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBsb2FkaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHt9O1xufVxuIl19