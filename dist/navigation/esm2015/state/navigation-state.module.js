/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { daffNavigationReducers } from './reducers/navigation-reducers';
import { DaffNavigationEffects } from './effects/navigation.effects';
import { DAFF_NAVIGATION_STORE_FEATURE_KEY } from './reducers/public_api';
export class DaffNavigationStateModule {
}
DaffNavigationStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature(DAFF_NAVIGATION_STORE_FEATURE_KEY, daffNavigationReducers),
                    EffectsModule.forFeature([DaffNavigationEffects]),
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1zdGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvbmF2aWdhdGlvbi9zdGF0ZS8iLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24tc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVExRSxNQUFNLE9BQU8seUJBQXlCOzs7WUFOckMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxXQUFXLENBQUMsVUFBVSxDQUFDLGlDQUFpQyxFQUFFLHNCQUFzQixDQUFDO29CQUNqRixhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQztpQkFDbEQ7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgZGFmZk5hdmlnYXRpb25SZWR1Y2VycyB9IGZyb20gJy4vcmVkdWNlcnMvbmF2aWdhdGlvbi1yZWR1Y2Vycyc7XG5pbXBvcnQgeyBEYWZmTmF2aWdhdGlvbkVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvbmF2aWdhdGlvbi5lZmZlY3RzJztcbmltcG9ydCB7IERBRkZfTkFWSUdBVElPTl9TVE9SRV9GRUFUVVJFX0tFWSB9IGZyb20gJy4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKERBRkZfTkFWSUdBVElPTl9TVE9SRV9GRUFUVVJFX0tFWSwgZGFmZk5hdmlnYXRpb25SZWR1Y2VycyksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtEYWZmTmF2aWdhdGlvbkVmZmVjdHNdKSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmTmF2aWdhdGlvblN0YXRlTW9kdWxlIHsgfVxuIl19