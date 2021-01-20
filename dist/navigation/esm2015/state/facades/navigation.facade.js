/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getDaffNavigationSelectors } from '../selectors/navigation.selector';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
/**
 * @template T
 */
export class DaffNavigationFacade {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
        const { selectNavigationTree, selectNavigationLoading, selectNavigationErrors } = getDaffNavigationSelectors();
        this.tree$ = this.store.pipe(select(selectNavigationTree));
        this.loading$ = this.store.pipe(select(selectNavigationLoading));
        this.errors$ = this.store.pipe(select(selectNavigationErrors));
    }
    /**
     * Dispatches the given action.
     * @param {?} action action to dispatch.
     * @return {?}
     */
    dispatch(action) {
        this.store.dispatch(action);
    }
}
DaffNavigationFacade.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffNavigationFacade.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ DaffNavigationFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffNavigationFacade_Factory() { return new DaffNavigationFacade(i0.ɵɵinject(i1.Store)); }, token: DaffNavigationFacade, providedIn: "root" });
if (false) {
    /**
     * The navigation retrieved in a single navigation call.
     * @type {?}
     */
    DaffNavigationFacade.prototype.tree$;
    /**
     * The loading state for retrieving a single navigation.
     * @type {?}
     */
    DaffNavigationFacade.prototype.loading$;
    /**
     * Errors associated with retrieving a single navigation.
     * @type {?}
     */
    DaffNavigationFacade.prototype.errors$;
    /**
     * @type {?}
     * @private
     */
    DaffNavigationFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvbmF2aWdhdGlvbi9zdGF0ZS8iLCJzb3VyY2VzIjpbImZhY2FkZXMvbmF2aWdhdGlvbi5mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsTUFBTSxhQUFhLENBQUM7QUFJcEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7OztBQU85RSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBYy9CLFlBQW9CLEtBQTRDO1FBQTVDLFVBQUssR0FBTCxLQUFLLENBQXVDO2NBQzFELEVBQ0wsb0JBQW9CLEVBQ3BCLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsR0FBRywwQkFBMEIsRUFBSztRQUVqQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFNRCxRQUFRLENBQUMsTUFBYztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFuQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVlEsS0FBSzs7Ozs7Ozs7SUFlWixxQ0FBcUI7Ozs7O0lBSXJCLHdDQUE4Qjs7Ozs7SUFJOUIsdUNBQThCOzs7OztJQUVsQixxQ0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdG9yZSwgc2VsZWN0LCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZHZW5lcmljTmF2aWdhdGlvblRyZWUgfSBmcm9tICdAZGFmZm9kaWwvbmF2aWdhdGlvbic7XG5cbmltcG9ydCB7IGdldERhZmZOYXZpZ2F0aW9uU2VsZWN0b3JzIH0gZnJvbSAnLi4vc2VsZWN0b3JzL25hdmlnYXRpb24uc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZk5hdmlnYXRpb25SZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vcmVkdWNlcnMvbmF2aWdhdGlvbi1yZWR1Y2Vycy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZk5hdmlnYXRpb25GYWNhZGVJbnRlcmZhY2UgfSBmcm9tICcuL25hdmlnYXRpb24tZmFjYWRlLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZOYXZpZ2F0aW9uRmFjYWRlPFQgZXh0ZW5kcyBEYWZmR2VuZXJpY05hdmlnYXRpb25UcmVlPFQ+PiBpbXBsZW1lbnRzIERhZmZOYXZpZ2F0aW9uRmFjYWRlSW50ZXJmYWNlPFQ+IHtcbiAgLyoqXG4gICAqIFRoZSBuYXZpZ2F0aW9uIHJldHJpZXZlZCBpbiBhIHNpbmdsZSBuYXZpZ2F0aW9uIGNhbGwuXG4gICAqL1xuICB0cmVlJDogT2JzZXJ2YWJsZTxUPjtcbiAgLyoqXG4gICAqIFRoZSBsb2FkaW5nIHN0YXRlIGZvciByZXRyaWV2aW5nIGEgc2luZ2xlIG5hdmlnYXRpb24uXG4gICAqL1xuICBsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgLyoqXG4gICAqIEVycm9ycyBhc3NvY2lhdGVkIHdpdGggcmV0cmlldmluZyBhIHNpbmdsZSBuYXZpZ2F0aW9uLlxuICAgKi9cbiAgZXJyb3JzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogU3RvcmU8RGFmZk5hdmlnYXRpb25SZWR1Y2Vyc1N0YXRlPFQ+Pikge1xuXHRcdGNvbnN0IHtcblx0XHRcdHNlbGVjdE5hdmlnYXRpb25UcmVlLFxuXHRcdFx0c2VsZWN0TmF2aWdhdGlvbkxvYWRpbmcsXG5cdFx0XHRzZWxlY3ROYXZpZ2F0aW9uRXJyb3JzXG5cdFx0fSA9IGdldERhZmZOYXZpZ2F0aW9uU2VsZWN0b3JzPFQ+KCk7XG5cbiAgICB0aGlzLnRyZWUkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3ROYXZpZ2F0aW9uVHJlZSkpO1xuICAgIHRoaXMubG9hZGluZyQgPSB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHNlbGVjdE5hdmlnYXRpb25Mb2FkaW5nKSk7XG4gICAgdGhpcy5lcnJvcnMkID0gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChzZWxlY3ROYXZpZ2F0aW9uRXJyb3JzKSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyB0aGUgZ2l2ZW4gYWN0aW9uLlxuICAgKiBAcGFyYW0gYWN0aW9uIGFjdGlvbiB0byBkaXNwYXRjaC5cbiAgICovXG4gIGRpc3BhdGNoKGFjdGlvbjogQWN0aW9uKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuICB9XG59XG4iXX0=