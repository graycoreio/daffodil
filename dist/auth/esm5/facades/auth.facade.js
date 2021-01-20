/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getDaffAuthSelectors } from '../selectors/public_api';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
/**
 * @template T
 */
var DaffAuthFacade = /** @class */ (function () {
    function DaffAuthFacade(store) {
        this.store = store;
        var _a = getDaffAuthSelectors(), selectAuthLoginToken = _a.selectAuthLoginToken, selectAuthLoading = _a.selectAuthLoading, selectAuthErrors = _a.selectAuthErrors, selectAuthLoginLoading = _a.selectAuthLoginLoading, selectAuthLoginErrors = _a.selectAuthLoginErrors, selectAuthRegisterLoading = _a.selectAuthRegisterLoading, selectAuthRegisterErrors = _a.selectAuthRegisterErrors, selectAuthLoginTokenValue = _a.selectAuthLoginTokenValue;
        this.auth$ = this.store.pipe(select(selectAuthLoginToken));
        this.token$ = this.store.pipe(select(selectAuthLoginTokenValue));
        this.authLoading$ = this.store.pipe(select(selectAuthLoading));
        this.authErrors$ = this.store.pipe(select(selectAuthErrors));
        this.loginLoading$ = this.store.pipe(select(selectAuthLoginLoading));
        this.loginErrors$ = this.store.pipe(select(selectAuthLoginErrors));
        this.registerLoading$ = this.store.pipe(select(selectAuthRegisterLoading));
        this.registerErrors$ = this.store.pipe(select(selectAuthRegisterErrors));
    }
    /**
     * @param {?} action
     * @return {?}
     */
    DaffAuthFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffAuthFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffAuthFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffAuthFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffAuthFacade_Factory() { return new DaffAuthFacade(i0.ɵɵinject(i1.Store)); }, token: DaffAuthFacade, providedIn: "root" });
    return DaffAuthFacade;
}());
export { DaffAuthFacade };
if (false) {
    /** @type {?} */
    DaffAuthFacade.prototype.auth$;
    /** @type {?} */
    DaffAuthFacade.prototype.token$;
    /** @type {?} */
    DaffAuthFacade.prototype.authLoading$;
    /** @type {?} */
    DaffAuthFacade.prototype.authErrors$;
    /** @type {?} */
    DaffAuthFacade.prototype.loginLoading$;
    /** @type {?} */
    DaffAuthFacade.prototype.loginErrors$;
    /** @type {?} */
    DaffAuthFacade.prototype.registerLoading$;
    /** @type {?} */
    DaffAuthFacade.prototype.registerErrors$;
    /**
     * @type {?}
     * @private
     */
    DaffAuthFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC8iLCJzb3VyY2VzIjpbImZhY2FkZXMvYXV0aC5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEQsT0FBTyxFQUNMLG9CQUFvQixFQUNyQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7QUFJakM7SUFnQkUsd0JBQW9CLEtBQXFDO1FBQXJDLFVBQUssR0FBTCxLQUFLLENBQWdDO1FBQ2pELElBQUEsMkJBU3VCLEVBUjNCLDhDQUFvQixFQUNwQix3Q0FBaUIsRUFDakIsc0NBQWdCLEVBQ2hCLGtEQUFzQixFQUN0QixnREFBcUIsRUFDckIsd0RBQXlCLEVBQ3pCLHNEQUF3QixFQUN4Qix3REFDMkI7UUFFN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUVqRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7O0lBRUQsaUNBQVE7Ozs7SUFBUixVQUFTLE1BQWM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBM0NGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBWGdCLEtBQUs7Ozt5QkFGdEI7Q0F1REMsQUE1Q0QsSUE0Q0M7U0F6Q1ksY0FBYzs7O0lBQ3pCLCtCQUFxQjs7SUFDckIsZ0NBQThCOztJQUU5QixzQ0FBa0M7O0lBQ2xDLHFDQUFrQzs7SUFFbEMsdUNBQW1DOztJQUNuQyxzQ0FBbUM7O0lBRW5DLDBDQUFzQzs7SUFDdEMseUNBQXNDOzs7OztJQUUxQiwrQkFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb24sIFN0b3JlLCBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZBdXRoRmVhdHVyZVN0YXRlIH0gZnJvbSAnLi4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5pbXBvcnQge1xuICBnZXREYWZmQXV0aFNlbGVjdG9yc1xufSBmcm9tICcuLi9zZWxlY3RvcnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmQXV0aFRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL2F1dGgtdG9rZW4nO1xuaW1wb3J0IHsgRGFmZkF1dGhGYWNhZGVJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2F1dGgtZmFjYWRlLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZBdXRoRmFjYWRlPFQgZXh0ZW5kcyBEYWZmQXV0aFRva2VuID0gRGFmZkF1dGhUb2tlbj4gaW1wbGVtZW50cyBEYWZmQXV0aEZhY2FkZUludGVyZmFjZTxUPiB7XG4gIGF1dGgkOiBPYnNlcnZhYmxlPFQ+O1xuICB0b2tlbiQ6IE9ic2VydmFibGU8VFsndG9rZW4nXT5cblxuICBhdXRoTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGF1dGhFcnJvcnMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBsb2dpbkxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBsb2dpbkVycm9ycyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIHJlZ2lzdGVyTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHJlZ2lzdGVyRXJyb3JzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RGFmZkF1dGhGZWF0dXJlU3RhdGU8VD4+KSB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0QXV0aExvZ2luVG9rZW4sXG4gICAgICBzZWxlY3RBdXRoTG9hZGluZyxcbiAgICAgIHNlbGVjdEF1dGhFcnJvcnMsXG4gICAgICBzZWxlY3RBdXRoTG9naW5Mb2FkaW5nLFxuICAgICAgc2VsZWN0QXV0aExvZ2luRXJyb3JzLFxuICAgICAgc2VsZWN0QXV0aFJlZ2lzdGVyTG9hZGluZyxcbiAgICAgIHNlbGVjdEF1dGhSZWdpc3RlckVycm9ycyxcbiAgICAgIHNlbGVjdEF1dGhMb2dpblRva2VuVmFsdWVcbiAgICB9ID0gZ2V0RGFmZkF1dGhTZWxlY3RvcnM8VD4oKTtcblxuICAgIHRoaXMuYXV0aCQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEF1dGhMb2dpblRva2VuKSk7XG4gICAgdGhpcy50b2tlbiQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEF1dGhMb2dpblRva2VuVmFsdWUpKTtcblxuICAgIHRoaXMuYXV0aExvYWRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RBdXRoTG9hZGluZykpO1xuICAgIHRoaXMuYXV0aEVycm9ycyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEF1dGhFcnJvcnMpKTtcblxuICAgIHRoaXMubG9naW5Mb2FkaW5nJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0QXV0aExvZ2luTG9hZGluZykpO1xuICAgIHRoaXMubG9naW5FcnJvcnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RBdXRoTG9naW5FcnJvcnMpKTtcblxuICAgIHRoaXMucmVnaXN0ZXJMb2FkaW5nJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0QXV0aFJlZ2lzdGVyTG9hZGluZykpO1xuICAgIHRoaXMucmVnaXN0ZXJFcnJvcnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RBdXRoUmVnaXN0ZXJFcnJvcnMpKTtcbiAgfVxuXG4gIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICB9XG59XG4iXX0=