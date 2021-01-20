/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DaffGeographyEffects } from './effects/geography.effects';
import { daffGeographyReducers, DAFF_GEOGRAPHY_STORE_FEATURE_KEY } from './reducers/public_api';
var DaffGeographyStateModule = /** @class */ (function () {
    function DaffGeographyStateModule() {
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
    return DaffGeographyStateModule;
}());
export { DaffGeographyStateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LXN0YXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9nZW9ncmFwaHkvc3RhdGUvIiwic291cmNlcyI6WyJnZW9ncmFwaHktc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRztJQUFBO0lBUXVDLENBQUM7O2dCQVJ2QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVcsQ0FBQyxVQUFVLENBQUMsZ0NBQWdDLEVBQUUscUJBQXFCLENBQUM7d0JBQy9FLGFBQWEsQ0FBQyxVQUFVLENBQUM7NEJBQ3ZCLG9CQUFvQjt5QkFDckIsQ0FBQztxQkFDSDtpQkFDRjs7SUFDc0MsK0JBQUM7Q0FBQSxBQVJ4QyxJQVF3QztTQUEzQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IERhZmZHZW9ncmFwaHlFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2dlb2dyYXBoeS5lZmZlY3RzJztcbmltcG9ydCB7IGRhZmZHZW9ncmFwaHlSZWR1Y2VycywgREFGRl9HRU9HUkFQSFlfU1RPUkVfRkVBVFVSRV9LRVkgfSBmcm9tICcuL3JlZHVjZXJzL3B1YmxpY19hcGknO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZShEQUZGX0dFT0dSQVBIWV9TVE9SRV9GRUFUVVJFX0tFWSwgZGFmZkdlb2dyYXBoeVJlZHVjZXJzKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1xuICAgICAgRGFmZkdlb2dyYXBoeUVmZmVjdHMsXG4gICAgXSksXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZkdlb2dyYXBoeVN0YXRlTW9kdWxlIHt9XG4iXX0=