/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getDaffGeographySelectors } from '../../selectors/public_api';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
/**
 * @template T
 */
var DaffGeographyFacade = /** @class */ (function () {
    function DaffGeographyFacade(store) {
        this.store = store;
        var _a = getDaffGeographySelectors(), selectCountryIds = _a.selectCountryIds, selectCountryEntities = _a.selectCountryEntities, selectAllCountries = _a.selectAllCountries, selectCountryTotal = _a.selectCountryTotal, selectGeographyLoading = _a.selectGeographyLoading, selectGeographyErrors = _a.selectGeographyErrors, selectCountry = _a.selectCountry, selectCountrySubdivisions = _a.selectCountrySubdivisions, selectIsCountryFullyLoaded = _a.selectIsCountryFullyLoaded;
        this._selectCountry = selectCountry;
        this._selectCountrySubdivisions = selectCountrySubdivisions;
        this._selectIsCountryFullyLoaded = selectIsCountryFullyLoaded;
        this.loading$ = this.store.pipe(select(selectGeographyLoading));
        this.errors$ = this.store.pipe(select(selectGeographyErrors));
        this.countries$ = this.store.pipe(select(selectAllCountries));
        this.countryIds$ = this.store.pipe(select(selectCountryIds));
        this.countryCount$ = this.store.pipe(select(selectCountryTotal));
        this.countryEntities$ = this.store.pipe(select(selectCountryEntities));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    DaffGeographyFacade.prototype.getCountry = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this._selectCountry, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffGeographyFacade.prototype.getCountrySubdivisions = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this._selectCountrySubdivisions, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffGeographyFacade.prototype.isCountryFullyLoaded = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this._selectIsCountryFullyLoaded, { id: id }));
    };
    /**
     * @param {?} action
     * @return {?}
     */
    DaffGeographyFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffGeographyFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffGeographyFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffGeographyFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffGeographyFacade_Factory() { return new DaffGeographyFacade(i0.ɵɵinject(i1.Store)); }, token: DaffGeographyFacade, providedIn: "root" });
    return DaffGeographyFacade;
}());
export { DaffGeographyFacade };
if (false) {
    /** @type {?} */
    DaffGeographyFacade.prototype.loading$;
    /** @type {?} */
    DaffGeographyFacade.prototype.errors$;
    /** @type {?} */
    DaffGeographyFacade.prototype.countries$;
    /** @type {?} */
    DaffGeographyFacade.prototype.countryIds$;
    /** @type {?} */
    DaffGeographyFacade.prototype.countryCount$;
    /** @type {?} */
    DaffGeographyFacade.prototype.countryEntities$;
    /**
     * @type {?}
     * @private
     */
    DaffGeographyFacade.prototype._selectCountry;
    /**
     * @type {?}
     * @private
     */
    DaffGeographyFacade.prototype._selectCountrySubdivisions;
    /**
     * @type {?}
     * @private
     */
    DaffGeographyFacade.prototype._selectIsCountryFullyLoaded;
    /**
     * @type {?}
     * @private
     */
    DaffGeographyFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LmZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9nZW9ncmFwaHkvc3RhdGUvIiwic291cmNlcyI6WyJmYWNhZGVzL2dlb2dyYXBoeS9nZW9ncmFwaHkuZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBTXBELE9BQU8sRUFDTCx5QkFBeUIsRUFDMUIsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7O0FBR3BDO0lBZ0JFLDZCQUFvQixLQUEwQztRQUExQyxVQUFLLEdBQUwsS0FBSyxDQUFxQztRQUN0RCxJQUFBLGdDQVU0QixFQVRoQyxzQ0FBZ0IsRUFDaEIsZ0RBQXFCLEVBQ3JCLDBDQUFrQixFQUNsQiwwQ0FBa0IsRUFDbEIsa0RBQXNCLEVBQ3RCLGdEQUFxQixFQUNyQixnQ0FBYSxFQUNiLHdEQUF5QixFQUN6QiwwREFDZ0M7UUFFbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFDcEMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLHlCQUF5QixDQUFDO1FBQzVELElBQUksQ0FBQywyQkFBMkIsR0FBRywwQkFBMEIsQ0FBQztRQUU5RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7O0lBRUQsd0NBQVU7Ozs7SUFBVixVQUFXLEVBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUUsSUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzdELENBQUM7Ozs7O0lBRUQsb0RBQXNCOzs7O0lBQXRCLFVBQXVCLEVBQVc7UUFDaEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDekUsQ0FBQzs7Ozs7SUFFRCxrREFBb0I7Ozs7SUFBcEIsVUFBcUIsRUFBVztRQUM5QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLElBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUMxRSxDQUFDOzs7OztJQUVELHNDQUFROzs7O0lBQVIsVUFBUyxNQUFjO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQXhERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWJnQixLQUFLOzs7OEJBRnRCO0NBc0VDLEFBekRELElBeURDO1NBdERZLG1CQUFtQjs7O0lBQzlCLHVDQUE4Qjs7SUFDOUIsc0NBQThCOztJQUU5Qix5Q0FBNEI7O0lBQzVCLDBDQUE2Qzs7SUFDN0MsNENBQWtDOztJQUNsQywrQ0FBNEM7Ozs7O0lBRTVDLDZDQUFzRTs7Ozs7SUFDdEUseURBQThGOzs7OztJQUM5RiwwREFBZ0c7Ozs7O0lBRXBGLG9DQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbiwgU3RvcmUsIHNlbGVjdCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tICdAbmdyeC9lbnRpdHknO1xuXG5pbXBvcnQgeyBEYWZmQ291bnRyeSB9IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHknO1xuXG5pbXBvcnQgeyBEYWZmR2VvZ3JhcGh5RmVhdHVyZVN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5pbXBvcnQge1xuICBnZXREYWZmR2VvZ3JhcGh5U2VsZWN0b3JzLCBEYWZmR2VvZ3JhcGh5QWxsU2VsZWN0b3JzXG59IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZHZW9ncmFwaHlGYWNhZGVJbnRlcmZhY2UgfSBmcm9tICcuL2dlb2dyYXBoeS1mYWNhZGUuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZkdlb2dyYXBoeUZhY2FkZTxUIGV4dGVuZHMgRGFmZkNvdW50cnkgPSBEYWZmQ291bnRyeT4gaW1wbGVtZW50cyBEYWZmR2VvZ3JhcGh5RmFjYWRlSW50ZXJmYWNlPFQ+IHtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGVycm9ycyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIGNvdW50cmllcyQ6IE9ic2VydmFibGU8VFtdPjtcbiAgY291bnRyeUlkcyQ6IE9ic2VydmFibGU8KHN0cmluZyB8IG51bWJlcilbXT47XG4gIGNvdW50cnlDb3VudCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgY291bnRyeUVudGl0aWVzJDogT2JzZXJ2YWJsZTxEaWN0aW9uYXJ5PFQ+PjtcblxuICBwcml2YXRlIF9zZWxlY3RDb3VudHJ5OiBEYWZmR2VvZ3JhcGh5QWxsU2VsZWN0b3JzPFQ+WydzZWxlY3RDb3VudHJ5J107XG4gIHByaXZhdGUgX3NlbGVjdENvdW50cnlTdWJkaXZpc2lvbnM6IERhZmZHZW9ncmFwaHlBbGxTZWxlY3RvcnM8VD5bJ3NlbGVjdENvdW50cnlTdWJkaXZpc2lvbnMnXTtcbiAgcHJpdmF0ZSBfc2VsZWN0SXNDb3VudHJ5RnVsbHlMb2FkZWQ6IERhZmZHZW9ncmFwaHlBbGxTZWxlY3RvcnM8VD5bJ3NlbGVjdElzQ291bnRyeUZ1bGx5TG9hZGVkJ107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RGFmZkdlb2dyYXBoeUZlYXR1cmVTdGF0ZTxUPj4pIHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RDb3VudHJ5SWRzLFxuICAgICAgc2VsZWN0Q291bnRyeUVudGl0aWVzLFxuICAgICAgc2VsZWN0QWxsQ291bnRyaWVzLFxuICAgICAgc2VsZWN0Q291bnRyeVRvdGFsLFxuICAgICAgc2VsZWN0R2VvZ3JhcGh5TG9hZGluZyxcbiAgICAgIHNlbGVjdEdlb2dyYXBoeUVycm9ycyxcbiAgICAgIHNlbGVjdENvdW50cnksXG4gICAgICBzZWxlY3RDb3VudHJ5U3ViZGl2aXNpb25zLFxuICAgICAgc2VsZWN0SXNDb3VudHJ5RnVsbHlMb2FkZWRcbiAgICB9ID0gZ2V0RGFmZkdlb2dyYXBoeVNlbGVjdG9yczxUPigpO1xuXG4gICAgdGhpcy5fc2VsZWN0Q291bnRyeSA9IHNlbGVjdENvdW50cnk7XG4gICAgdGhpcy5fc2VsZWN0Q291bnRyeVN1YmRpdmlzaW9ucyA9IHNlbGVjdENvdW50cnlTdWJkaXZpc2lvbnM7XG4gICAgdGhpcy5fc2VsZWN0SXNDb3VudHJ5RnVsbHlMb2FkZWQgPSBzZWxlY3RJc0NvdW50cnlGdWxseUxvYWRlZDtcblxuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEdlb2dyYXBoeUxvYWRpbmcpKTtcbiAgICB0aGlzLmVycm9ycyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdEdlb2dyYXBoeUVycm9ycykpO1xuXG4gICAgdGhpcy5jb3VudHJpZXMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RBbGxDb3VudHJpZXMpKTtcbiAgICB0aGlzLmNvdW50cnlJZHMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDb3VudHJ5SWRzKSk7XG4gICAgdGhpcy5jb3VudHJ5Q291bnQkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDb3VudHJ5VG90YWwpKTtcbiAgICB0aGlzLmNvdW50cnlFbnRpdGllcyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdENvdW50cnlFbnRpdGllcykpO1xuICB9XG5cbiAgZ2V0Q291bnRyeShpZDogVFsnaWQnXSk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuX3NlbGVjdENvdW50cnksIHsgaWQgfSkpXG4gIH1cblxuICBnZXRDb3VudHJ5U3ViZGl2aXNpb25zKGlkOiBUWydpZCddKTogT2JzZXJ2YWJsZTxUWydzdWJkaXZpc2lvbnMnXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuX3NlbGVjdENvdW50cnlTdWJkaXZpc2lvbnMsIHsgaWQgfSkpXG4gIH1cblxuICBpc0NvdW50cnlGdWxseUxvYWRlZChpZDogVFsnaWQnXSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuX3NlbGVjdElzQ291bnRyeUZ1bGx5TG9hZGVkLCB7IGlkIH0pKVxuICB9XG5cbiAgZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGFjdGlvbik7XG4gIH1cbn1cbiJdfQ==