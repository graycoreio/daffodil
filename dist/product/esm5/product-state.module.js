/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DaffProductGridEffects } from './effects/product-grid.effects';
import { DaffProductEffects } from './effects/product.effects';
import { DaffBestSellersEffects } from './effects/best-seller.effects';
import { daffProductReducers } from './reducers/product-reducers';
var DaffProductStateModule = /** @class */ (function () {
    function DaffProductStateModule() {
    }
    DaffProductStateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forFeature('product', daffProductReducers),
                        EffectsModule.forFeature([
                            DaffProductGridEffects,
                            DaffProductEffects,
                            DaffBestSellersEffects
                        ]),
                    ]
                },] }
    ];
    return DaffProductStateModule;
}());
export { DaffProductStateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC8iLCJzb3VyY2VzIjpbInByb2R1Y3Qtc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVsRTtJQUFBO0lBVXNDLENBQUM7O2dCQVZ0QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNMLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLG1CQUFtQixDQUFDO3dCQUN0RCxhQUFhLENBQUMsVUFBVSxDQUFDOzRCQUN2QixzQkFBc0I7NEJBQ3RCLGtCQUFrQjs0QkFDbEIsc0JBQXNCO3lCQUN2QixDQUFDO3FCQUNMO2lCQUNGOztJQUNxQyw2QkFBQztDQUFBLEFBVnZDLElBVXVDO1NBQTFCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3RHcmlkRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9wcm9kdWN0LWdyaWQuZWZmZWN0cyc7XG5pbXBvcnQgeyBEYWZmUHJvZHVjdEVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvcHJvZHVjdC5lZmZlY3RzJztcbmltcG9ydCB7IERhZmZCZXN0U2VsbGVyc0VmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvYmVzdC1zZWxsZXIuZWZmZWN0cyc7XG5pbXBvcnQgeyBkYWZmUHJvZHVjdFJlZHVjZXJzIH0gZnJvbSAnLi9yZWR1Y2Vycy9wcm9kdWN0LXJlZHVjZXJzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgICAgU3RvcmVNb2R1bGUuZm9yRmVhdHVyZSgncHJvZHVjdCcsIGRhZmZQcm9kdWN0UmVkdWNlcnMpLFxuICAgICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKFtcbiAgICAgICAgRGFmZlByb2R1Y3RHcmlkRWZmZWN0cyxcbiAgICAgICAgRGFmZlByb2R1Y3RFZmZlY3RzLFxuICAgICAgICBEYWZmQmVzdFNlbGxlcnNFZmZlY3RzXG4gICAgICBdKSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmUHJvZHVjdFN0YXRlTW9kdWxlIHsgfVxuIl19