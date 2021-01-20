/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { daffCategoryReducers } from './reducers/category-reducers';
import { DaffCategoryEffects } from './effects/category.effects';
import { DaffDefaultCategoryPageSize } from './resolvers/public_api';
import { DaffCategoryPageEffects } from './effects/category-page.effects';
export class DaffCategoryStateModule {
}
DaffCategoryStateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forFeature('category', daffCategoryReducers),
                    EffectsModule.forFeature([DaffCategoryEffects, DaffCategoryPageEffects]),
                ],
                providers: [
                    { provide: DaffDefaultCategoryPageSize, useValue: 12 }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktc3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhdGVnb3J5LyIsInNvdXJjZXMiOlsiY2F0ZWdvcnktc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQVcxRSxNQUFNLE9BQU8sdUJBQXVCOzs7WUFUbkMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQztvQkFDeEQsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLHVCQUF1QixDQUFDLENBQUM7aUJBQzFFO2dCQUNELFNBQVMsRUFBRTtvQkFDVixFQUFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO2lCQUN0RDthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBkYWZmQ2F0ZWdvcnlSZWR1Y2VycyB9IGZyb20gJy4vcmVkdWNlcnMvY2F0ZWdvcnktcmVkdWNlcnMnO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5RWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9jYXRlZ29yeS5lZmZlY3RzJztcbmltcG9ydCB7IERhZmZEZWZhdWx0Q2F0ZWdvcnlQYWdlU2l6ZSB9IGZyb20gJy4vcmVzb2x2ZXJzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZkNhdGVnb3J5UGFnZUVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvY2F0ZWdvcnktcGFnZS5lZmZlY3RzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoJ2NhdGVnb3J5JywgZGFmZkNhdGVnb3J5UmVkdWNlcnMpLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShbRGFmZkNhdGVnb3J5RWZmZWN0cywgRGFmZkNhdGVnb3J5UGFnZUVmZmVjdHNdKSxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBEYWZmRGVmYXVsdENhdGVnb3J5UGFnZVNpemUsIHVzZVZhbHVlOiAxMiB9XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZkNhdGVnb3J5U3RhdGVNb2R1bGUgeyB9XG4iXX0=