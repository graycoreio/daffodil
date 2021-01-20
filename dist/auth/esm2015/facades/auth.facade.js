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
export class DaffAuthFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        const { selectAuthLoginToken, selectAuthLoading, selectAuthErrors, selectAuthLoginLoading, selectAuthLoginErrors, selectAuthRegisterLoading, selectAuthRegisterErrors, selectAuthLoginTokenValue } = getDaffAuthSelectors();
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
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffAuthFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffAuthFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffAuthFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffAuthFacade_Factory() { return new DaffAuthFacade(i0.ɵɵinject(i1.Store)); }, token: DaffAuthFacade, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvYXV0aC8iLCJzb3VyY2VzIjpbImZhY2FkZXMvYXV0aC5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHcEQsT0FBTyxFQUNMLG9CQUFvQixFQUNyQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7QUFPakMsTUFBTSxPQUFPLGNBQWM7Ozs7SUFhekIsWUFBb0IsS0FBcUM7UUFBckMsVUFBSyxHQUFMLEtBQUssQ0FBZ0M7Y0FDakQsRUFDSixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixzQkFBc0IsRUFDdEIscUJBQXFCLEVBQ3JCLHlCQUF5QixFQUN6Qix3QkFBd0IsRUFDeEIseUJBQXlCLEVBQzFCLEdBQUcsb0JBQW9CLEVBQUs7UUFFN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUVqRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQWM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBM0NGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVhnQixLQUFLOzs7OztJQWFwQiwrQkFBcUI7O0lBQ3JCLGdDQUE4Qjs7SUFFOUIsc0NBQWtDOztJQUNsQyxxQ0FBa0M7O0lBRWxDLHVDQUFtQzs7SUFDbkMsc0NBQW1DOztJQUVuQywwQ0FBc0M7O0lBQ3RDLHlDQUFzQzs7Ozs7SUFFMUIsK0JBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9uLCBTdG9yZSwgc2VsZWN0IH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQXV0aEZlYXR1cmVTdGF0ZSB9IGZyb20gJy4uL3JlZHVjZXJzL3B1YmxpY19hcGknO1xuaW1wb3J0IHtcbiAgZ2V0RGFmZkF1dGhTZWxlY3RvcnNcbn0gZnJvbSAnLi4vc2VsZWN0b3JzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZkF1dGhUb2tlbiB9IGZyb20gJy4uL21vZGVscy9hdXRoLXRva2VuJztcbmltcG9ydCB7IERhZmZBdXRoRmFjYWRlSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9hdXRoLWZhY2FkZS5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQXV0aEZhY2FkZTxUIGV4dGVuZHMgRGFmZkF1dGhUb2tlbiA9IERhZmZBdXRoVG9rZW4+IGltcGxlbWVudHMgRGFmZkF1dGhGYWNhZGVJbnRlcmZhY2U8VD4ge1xuICBhdXRoJDogT2JzZXJ2YWJsZTxUPjtcbiAgdG9rZW4kOiBPYnNlcnZhYmxlPFRbJ3Rva2VuJ10+XG5cbiAgYXV0aExvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBhdXRoRXJyb3JzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgbG9naW5Mb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgbG9naW5FcnJvcnMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICByZWdpc3RlckxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICByZWdpc3RlckVycm9ycyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPERhZmZBdXRoRmVhdHVyZVN0YXRlPFQ+Pikge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdEF1dGhMb2dpblRva2VuLFxuICAgICAgc2VsZWN0QXV0aExvYWRpbmcsXG4gICAgICBzZWxlY3RBdXRoRXJyb3JzLFxuICAgICAgc2VsZWN0QXV0aExvZ2luTG9hZGluZyxcbiAgICAgIHNlbGVjdEF1dGhMb2dpbkVycm9ycyxcbiAgICAgIHNlbGVjdEF1dGhSZWdpc3RlckxvYWRpbmcsXG4gICAgICBzZWxlY3RBdXRoUmVnaXN0ZXJFcnJvcnMsXG4gICAgICBzZWxlY3RBdXRoTG9naW5Ub2tlblZhbHVlXG4gICAgfSA9IGdldERhZmZBdXRoU2VsZWN0b3JzPFQ+KCk7XG5cbiAgICB0aGlzLmF1dGgkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RBdXRoTG9naW5Ub2tlbikpO1xuICAgIHRoaXMudG9rZW4kID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RBdXRoTG9naW5Ub2tlblZhbHVlKSk7XG5cbiAgICB0aGlzLmF1dGhMb2FkaW5nJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0QXV0aExvYWRpbmcpKTtcbiAgICB0aGlzLmF1dGhFcnJvcnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RBdXRoRXJyb3JzKSk7XG5cbiAgICB0aGlzLmxvZ2luTG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEF1dGhMb2dpbkxvYWRpbmcpKTtcbiAgICB0aGlzLmxvZ2luRXJyb3JzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0QXV0aExvZ2luRXJyb3JzKSk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyTG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEF1dGhSZWdpc3RlckxvYWRpbmcpKTtcbiAgICB0aGlzLnJlZ2lzdGVyRXJyb3JzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0QXV0aFJlZ2lzdGVyRXJyb3JzKSk7XG4gIH1cblxuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgfVxufVxuIl19