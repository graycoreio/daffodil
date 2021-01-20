/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DaffPaypalEffects } from './effects/paypal.effects';
import { daffPaypalReducers } from './reducers/paypal-reducers';
export class DaffPaypalStateModule {
}
DaffPaypalStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature('paypal', daffPaypalReducers),
                    EffectsModule.forFeature([DaffPaypalEffects])
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXN0YXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wYXlwYWwvIiwic291cmNlcyI6WyJwYXlwYWwtc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVFoRSxNQUFNLE9BQU8scUJBQXFCOzs7WUFOakMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQztvQkFDcEQsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7aUJBQzlDO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IERhZmZQYXlwYWxFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL3BheXBhbC5lZmZlY3RzJztcbmltcG9ydCB7IGRhZmZQYXlwYWxSZWR1Y2VycyB9IGZyb20gJy4vcmVkdWNlcnMvcGF5cGFsLXJlZHVjZXJzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoJ3BheXBhbCcsIGRhZmZQYXlwYWxSZWR1Y2VycyksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtEYWZmUGF5cGFsRWZmZWN0c10pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZlBheXBhbFN0YXRlTW9kdWxlIHt9XG4iXX0=