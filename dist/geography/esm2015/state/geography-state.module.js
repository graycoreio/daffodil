/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DaffGeographyEffects } from './effects/geography.effects';
import { daffGeographyReducers, DAFF_GEOGRAPHY_STORE_FEATURE_KEY } from './reducers/public_api';
export class DaffGeographyStateModule {
}
DaffGeographyStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature(DAFF_GEOGRAPHY_STORE_FEATURE_KEY, daffGeographyReducers),
                    EffectsModule.forFeature([
                        DaffGeographyEffects,
                    ]),
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LXN0YXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9nZW9ncmFwaHkvc3RhdGUvIiwic291cmNlcyI6WyJnZW9ncmFwaHktc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVVoRyxNQUFNLE9BQU8sd0JBQXdCOzs7WUFScEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxXQUFXLENBQUMsVUFBVSxDQUFDLGdDQUFnQyxFQUFFLHFCQUFxQixDQUFDO29CQUMvRSxhQUFhLENBQUMsVUFBVSxDQUFDO3dCQUN2QixvQkFBb0I7cUJBQ3JCLENBQUM7aUJBQ0g7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgRGFmZkdlb2dyYXBoeUVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvZ2VvZ3JhcGh5LmVmZmVjdHMnO1xuaW1wb3J0IHsgZGFmZkdlb2dyYXBoeVJlZHVjZXJzLCBEQUZGX0dFT0dSQVBIWV9TVE9SRV9GRUFUVVJFX0tFWSB9IGZyb20gJy4vcmVkdWNlcnMvcHVibGljX2FwaSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKERBRkZfR0VPR1JBUEhZX1NUT1JFX0ZFQVRVUkVfS0VZLCBkYWZmR2VvZ3JhcGh5UmVkdWNlcnMpLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbXG4gICAgICBEYWZmR2VvZ3JhcGh5RWZmZWN0cyxcbiAgICBdKSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmR2VvZ3JhcGh5U3RhdGVNb2R1bGUge31cbiJdfQ==