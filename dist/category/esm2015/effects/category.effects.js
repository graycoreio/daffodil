/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { DaffProductGridLoadSuccess } from '@daffodil/product';
import { DaffCategoryActionTypes, DaffCategoryLoadSuccess, DaffCategoryLoadFailure, } from '../actions/category.actions';
import { DaffCategoryDriver } from '../drivers/injection-tokens/category-driver.token';
import { daffCategoryValidateFilters } from '../helpers/public_api';
/**
 * @template T, V, U, W
 */
export class DaffCategoryEffects {
    /**
     * @param {?} actions$
     * @param {?} driver
     */
    constructor(actions$, driver) {
        this.actions$ = actions$;
        this.driver = driver;
        this.loadCategory$ = this.actions$.pipe(ofType(DaffCategoryActionTypes.CategoryLoadAction), switchMap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            daffCategoryValidateFilters(action.request.filter_requests);
            return this.driver.get(action.request).pipe(switchMap((/**
             * @param {?} resp
             * @return {?}
             */
            (resp) => of(new DaffProductGridLoadSuccess(resp.products), new DaffCategoryLoadSuccess(resp)))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new DaffCategoryLoadFailure('Failed to load the category')))));
        })));
    }
}
DaffCategoryEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DaffCategoryEffects.ctorParameters = () => [
    { type: Actions },
    { type: undefined, decorators: [{ type: Inject, args: [DaffCategoryDriver,] }] }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], DaffCategoryEffects.prototype, "loadCategory$", void 0);
if (false) {
    /** @type {?} */
    DaffCategoryEffects.prototype.loadCategory$;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    DaffCategoryEffects.prototype.driver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jYXRlZ29yeS8iLCJzb3VyY2VzIjpbImVmZmVjdHMvY2F0ZWdvcnkuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRDLE9BQU8sRUFBRSwwQkFBMEIsRUFBZSxNQUFNLG1CQUFtQixDQUFDO0FBRTVFLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsdUJBQXVCLEVBQ3ZCLHVCQUF1QixHQUN4QixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBTXZGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBR3BFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBTzlCLFlBQ1UsUUFBaUIsRUFDVyxNQUFnRDtRQUQ1RSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ1csV0FBTSxHQUFOLE1BQU0sQ0FBMEM7UUFJdEYsa0JBQWEsR0FBcUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xELE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyxFQUNsRCxTQUFTOzs7O1FBQUMsQ0FBQyxNQUEyQixFQUFFLEVBQUU7WUFDM0MsMkJBQTJCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN6RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3pDLFNBQVM7Ozs7WUFBQyxDQUFDLElBQXlDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FDekQsSUFBSSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQzdDLElBQUksdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQ2xDLEVBQUMsRUFDRixVQUFVOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEVBQUMsQ0FDcEYsQ0FBQTtRQUNILENBQUMsRUFBQyxDQUNILENBQUE7SUFmQyxDQUFDOzs7WUFYSixVQUFVOzs7O1lBcEJGLE9BQU87NENBOEJYLE1BQU0sU0FBQyxrQkFBa0I7O0FBSTVCO0lBREMsTUFBTSxFQUFFO3NDQUNPLFVBQVU7MERBWXpCOzs7SUFiRCw0Q0FhQzs7Ozs7SUFqQkMsdUNBQXlCOzs7OztJQUN6QixxQ0FBb0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYWZmUHJvZHVjdEdyaWRMb2FkU3VjY2VzcywgRGFmZlByb2R1Y3QgfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdCc7XG5cbmltcG9ydCB7XG4gIERhZmZDYXRlZ29yeUFjdGlvblR5cGVzLFxuICBEYWZmQ2F0ZWdvcnlMb2FkLFxuICBEYWZmQ2F0ZWdvcnlMb2FkU3VjY2VzcyxcbiAgRGFmZkNhdGVnb3J5TG9hZEZhaWx1cmUsXG59IGZyb20gJy4uL2FjdGlvbnMvY2F0ZWdvcnkuYWN0aW9ucyc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlEcml2ZXIgfSBmcm9tICcuLi9kcml2ZXJzL2luamVjdGlvbi10b2tlbnMvY2F0ZWdvcnktZHJpdmVyLnRva2VuJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeVNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICcuLi9kcml2ZXJzL2ludGVyZmFjZXMvY2F0ZWdvcnktc2VydmljZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZkdldENhdGVnb3J5UmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbHMvZ2V0LWNhdGVnb3J5LXJlc3BvbnNlJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeVJlcXVlc3QgfSBmcm9tICcuLi9tb2RlbHMvcmVxdWVzdHMvY2F0ZWdvcnktcmVxdWVzdCc7XG5pbXBvcnQgeyBEYWZmQ2F0ZWdvcnlQYWdlQ29uZmlndXJhdGlvblN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL2NhdGVnb3J5LXBhZ2UtY29uZmlndXJhdGlvbi1zdGF0ZSc7XG5pbXBvcnQgeyBEYWZmR2VuZXJpY0NhdGVnb3J5IH0gZnJvbSAnLi4vbW9kZWxzL2dlbmVyaWMtY2F0ZWdvcnknO1xuaW1wb3J0IHsgZGFmZkNhdGVnb3J5VmFsaWRhdGVGaWx0ZXJzIH0gZnJvbSAnLi4vaGVscGVycy9wdWJsaWNfYXBpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhZmZDYXRlZ29yeUVmZmVjdHM8XG5cdFQgZXh0ZW5kcyBEYWZmQ2F0ZWdvcnlSZXF1ZXN0LFxuXHRWIGV4dGVuZHMgRGFmZkdlbmVyaWNDYXRlZ29yeTxWPixcblx0VSBleHRlbmRzIERhZmZDYXRlZ29yeVBhZ2VDb25maWd1cmF0aW9uU3RhdGU8VD4sXG5cdFcgZXh0ZW5kcyBEYWZmUHJvZHVjdFxuPiB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBASW5qZWN0KERhZmZDYXRlZ29yeURyaXZlcikgcHJpdmF0ZSBkcml2ZXI6IERhZmZDYXRlZ29yeVNlcnZpY2VJbnRlcmZhY2U8VCwgViwgVSwgVz4sXG5cdCkge31cblxuICBARWZmZWN0KClcbiAgbG9hZENhdGVnb3J5JCA6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGFmZkNhdGVnb3J5QWN0aW9uVHlwZXMuQ2F0ZWdvcnlMb2FkQWN0aW9uKSxcbiAgICBzd2l0Y2hNYXAoKGFjdGlvbjogRGFmZkNhdGVnb3J5TG9hZDxUPikgPT4ge1xuXHRcdFx0ZGFmZkNhdGVnb3J5VmFsaWRhdGVGaWx0ZXJzKGFjdGlvbi5yZXF1ZXN0LmZpbHRlcl9yZXF1ZXN0cyk7XG4gICAgICByZXR1cm4gdGhpcy5kcml2ZXIuZ2V0KGFjdGlvbi5yZXF1ZXN0KS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKHJlc3A6IERhZmZHZXRDYXRlZ29yeVJlc3BvbnNlPFQsIFYsIFUsIFc+KSA9PiBvZihcbiAgICAgICAgICBuZXcgRGFmZlByb2R1Y3RHcmlkTG9hZFN1Y2Nlc3MocmVzcC5wcm9kdWN0cyksXG4gICAgICAgICAgbmV3IERhZmZDYXRlZ29yeUxvYWRTdWNjZXNzKHJlc3ApXG4gICAgICAgICkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBEYWZmQ2F0ZWdvcnlMb2FkRmFpbHVyZSgnRmFpbGVkIHRvIGxvYWQgdGhlIGNhdGVnb3J5JykpKVxuICAgICAgKVxuICAgIH0pXG4gIClcbn1cbiJdfQ==