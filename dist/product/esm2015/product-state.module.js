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
export class DaffProductStateModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcHJvZHVjdC8iLCJzb3VyY2VzIjpbInByb2R1Y3Qtc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQVlsRSxNQUFNLE9BQU8sc0JBQXNCOzs7WUFWbEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDTCxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQztvQkFDdEQsYUFBYSxDQUFDLFVBQVUsQ0FBQzt3QkFDdkIsc0JBQXNCO3dCQUN0QixrQkFBa0I7d0JBQ2xCLHNCQUFzQjtxQkFDdkIsQ0FBQztpQkFDTDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBEYWZmUHJvZHVjdEdyaWRFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL3Byb2R1Y3QtZ3JpZC5lZmZlY3RzJztcbmltcG9ydCB7IERhZmZQcm9kdWN0RWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9wcm9kdWN0LmVmZmVjdHMnO1xuaW1wb3J0IHsgRGFmZkJlc3RTZWxsZXJzRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9iZXN0LXNlbGxlci5lZmZlY3RzJztcbmltcG9ydCB7IGRhZmZQcm9kdWN0UmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzL3Byb2R1Y3QtcmVkdWNlcnMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKCdwcm9kdWN0JywgZGFmZlByb2R1Y3RSZWR1Y2VycyksXG4gICAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW1xuICAgICAgICBEYWZmUHJvZHVjdEdyaWRFZmZlY3RzLFxuICAgICAgICBEYWZmUHJvZHVjdEVmZmVjdHMsXG4gICAgICAgIERhZmZCZXN0U2VsbGVyc0VmZmVjdHNcbiAgICAgIF0pLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZQcm9kdWN0U3RhdGVNb2R1bGUgeyB9XG4iXX0=