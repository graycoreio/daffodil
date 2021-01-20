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
export class DaffGeographyFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        const { selectCountryIds, selectCountryEntities, selectAllCountries, selectCountryTotal, selectGeographyLoading, selectGeographyErrors, selectCountry, selectCountrySubdivisions, selectIsCountryFullyLoaded } = getDaffGeographySelectors();
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
    getCountry(id) {
        return this.store.pipe(select(this._selectCountry, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getCountrySubdivisions(id) {
        return this.store.pipe(select(this._selectCountrySubdivisions, { id }));
    }
    /**
     * @param {?} id
     * @return {?}
     */
    isCountryFullyLoaded(id) {
        return this.store.pipe(select(this._selectIsCountryFullyLoaded, { id }));
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffGeographyFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffGeographyFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffGeographyFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffGeographyFacade_Factory() { return new DaffGeographyFacade(i0.ɵɵinject(i1.Store)); }, token: DaffGeographyFacade, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LmZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9nZW9ncmFwaHkvc3RhdGUvIiwic291cmNlcyI6WyJmYWNhZGVzL2dlb2dyYXBoeS9nZW9ncmFwaHkuZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBTXBELE9BQU8sRUFDTCx5QkFBeUIsRUFDMUIsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7O0FBTXBDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFhOUIsWUFBb0IsS0FBMEM7UUFBMUMsVUFBSyxHQUFMLEtBQUssQ0FBcUM7Y0FDdEQsRUFDSixnQkFBZ0IsRUFDaEIscUJBQXFCLEVBQ3JCLGtCQUFrQixFQUNsQixrQkFBa0IsRUFDbEIsc0JBQXNCLEVBQ3RCLHFCQUFxQixFQUNyQixhQUFhLEVBQ2IseUJBQXlCLEVBQ3pCLDBCQUEwQixFQUMzQixHQUFHLHlCQUF5QixFQUFLO1FBRWxDLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDO1FBQ3BDLElBQUksQ0FBQywwQkFBMEIsR0FBRyx5QkFBeUIsQ0FBQztRQUM1RCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsMEJBQTBCLENBQUM7UUFFOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxFQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxzQkFBc0IsQ0FBQyxFQUFXO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN6RSxDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLEVBQVc7UUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzFFLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQWM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBeERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWJnQixLQUFLOzs7OztJQWVwQix1Q0FBOEI7O0lBQzlCLHNDQUE4Qjs7SUFFOUIseUNBQTRCOztJQUM1QiwwQ0FBNkM7O0lBQzdDLDRDQUFrQzs7SUFDbEMsK0NBQTRDOzs7OztJQUU1Qyw2Q0FBc0U7Ozs7O0lBQ3RFLHlEQUE4Rjs7Ozs7SUFDOUYsMERBQWdHOzs7OztJQUVwRixvQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBY3Rpb24sIFN0b3JlLCBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnQG5ncngvZW50aXR5JztcblxuaW1wb3J0IHsgRGFmZkNvdW50cnkgfSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5JztcblxuaW1wb3J0IHsgRGFmZkdlb2dyYXBoeUZlYXR1cmVTdGF0ZSB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3B1YmxpY19hcGknO1xuaW1wb3J0IHtcbiAgZ2V0RGFmZkdlb2dyYXBoeVNlbGVjdG9ycywgRGFmZkdlb2dyYXBoeUFsbFNlbGVjdG9yc1xufSBmcm9tICcuLi8uLi9zZWxlY3RvcnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmR2VvZ3JhcGh5RmFjYWRlSW50ZXJmYWNlIH0gZnJvbSAnLi9nZW9ncmFwaHktZmFjYWRlLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZHZW9ncmFwaHlGYWNhZGU8VCBleHRlbmRzIERhZmZDb3VudHJ5ID0gRGFmZkNvdW50cnk+IGltcGxlbWVudHMgRGFmZkdlb2dyYXBoeUZhY2FkZUludGVyZmFjZTxUPiB7XG4gIGxvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBlcnJvcnMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBjb3VudHJpZXMkOiBPYnNlcnZhYmxlPFRbXT47XG4gIGNvdW50cnlJZHMkOiBPYnNlcnZhYmxlPChzdHJpbmcgfCBudW1iZXIpW10+O1xuICBjb3VudHJ5Q291bnQkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIGNvdW50cnlFbnRpdGllcyQ6IE9ic2VydmFibGU8RGljdGlvbmFyeTxUPj47XG5cbiAgcHJpdmF0ZSBfc2VsZWN0Q291bnRyeTogRGFmZkdlb2dyYXBoeUFsbFNlbGVjdG9yczxUPlsnc2VsZWN0Q291bnRyeSddO1xuICBwcml2YXRlIF9zZWxlY3RDb3VudHJ5U3ViZGl2aXNpb25zOiBEYWZmR2VvZ3JhcGh5QWxsU2VsZWN0b3JzPFQ+WydzZWxlY3RDb3VudHJ5U3ViZGl2aXNpb25zJ107XG4gIHByaXZhdGUgX3NlbGVjdElzQ291bnRyeUZ1bGx5TG9hZGVkOiBEYWZmR2VvZ3JhcGh5QWxsU2VsZWN0b3JzPFQ+WydzZWxlY3RJc0NvdW50cnlGdWxseUxvYWRlZCddO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPERhZmZHZW9ncmFwaHlGZWF0dXJlU3RhdGU8VD4+KSB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0Q291bnRyeUlkcyxcbiAgICAgIHNlbGVjdENvdW50cnlFbnRpdGllcyxcbiAgICAgIHNlbGVjdEFsbENvdW50cmllcyxcbiAgICAgIHNlbGVjdENvdW50cnlUb3RhbCxcbiAgICAgIHNlbGVjdEdlb2dyYXBoeUxvYWRpbmcsXG4gICAgICBzZWxlY3RHZW9ncmFwaHlFcnJvcnMsXG4gICAgICBzZWxlY3RDb3VudHJ5LFxuICAgICAgc2VsZWN0Q291bnRyeVN1YmRpdmlzaW9ucyxcbiAgICAgIHNlbGVjdElzQ291bnRyeUZ1bGx5TG9hZGVkXG4gICAgfSA9IGdldERhZmZHZW9ncmFwaHlTZWxlY3RvcnM8VD4oKTtcblxuICAgIHRoaXMuX3NlbGVjdENvdW50cnkgPSBzZWxlY3RDb3VudHJ5O1xuICAgIHRoaXMuX3NlbGVjdENvdW50cnlTdWJkaXZpc2lvbnMgPSBzZWxlY3RDb3VudHJ5U3ViZGl2aXNpb25zO1xuICAgIHRoaXMuX3NlbGVjdElzQ291bnRyeUZ1bGx5TG9hZGVkID0gc2VsZWN0SXNDb3VudHJ5RnVsbHlMb2FkZWQ7XG5cbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RHZW9ncmFwaHlMb2FkaW5nKSk7XG4gICAgdGhpcy5lcnJvcnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RHZW9ncmFwaHlFcnJvcnMpKTtcblxuICAgIHRoaXMuY291bnRyaWVzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0QWxsQ291bnRyaWVzKSk7XG4gICAgdGhpcy5jb3VudHJ5SWRzJCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q291bnRyeUlkcykpO1xuICAgIHRoaXMuY291bnRyeUNvdW50JCA9IHRoaXMuc3RvcmUucGlwZShzZWxlY3Qoc2VsZWN0Q291bnRyeVRvdGFsKSk7XG4gICAgdGhpcy5jb3VudHJ5RW50aXRpZXMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3RDb3VudHJ5RW50aXRpZXMpKTtcbiAgfVxuXG4gIGdldENvdW50cnkoaWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLl9zZWxlY3RDb3VudHJ5LCB7IGlkIH0pKVxuICB9XG5cbiAgZ2V0Q291bnRyeVN1YmRpdmlzaW9ucyhpZDogVFsnaWQnXSk6IE9ic2VydmFibGU8VFsnc3ViZGl2aXNpb25zJ10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLl9zZWxlY3RDb3VudHJ5U3ViZGl2aXNpb25zLCB7IGlkIH0pKVxuICB9XG5cbiAgaXNDb3VudHJ5RnVsbHlMb2FkZWQoaWQ6IFRbJ2lkJ10pOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLl9zZWxlY3RJc0NvdW50cnlGdWxseUxvYWRlZCwgeyBpZCB9KSlcbiAgfVxuXG4gIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICB9XG59XG4iXX0=