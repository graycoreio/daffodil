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
var DaffCategoryStateModule = /** @class */ (function () {
    function DaffCategoryStateModule() {
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
    return DaffCategoryStateModule;
}());
export { DaffCategoryStateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktc3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhdGVnb3J5LyIsInNvdXJjZXMiOlsiY2F0ZWdvcnktc3RhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUUxRTtJQUFBO0lBU3VDLENBQUM7O2dCQVR2QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLG9CQUFvQixDQUFDO3dCQUN4RCxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztxQkFDMUU7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7cUJBQ3REO2lCQUNEOztJQUNzQyw4QkFBQztDQUFBLEFBVHhDLElBU3dDO1NBQTNCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgZGFmZkNhdGVnb3J5UmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzL2NhdGVnb3J5LXJlZHVjZXJzJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeUVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvY2F0ZWdvcnkuZWZmZWN0cyc7XG5pbXBvcnQgeyBEYWZmRGVmYXVsdENhdGVnb3J5UGFnZVNpemUgfSBmcm9tICcuL3Jlc29sdmVycy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZDYXRlZ29yeVBhZ2VFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2NhdGVnb3J5LXBhZ2UuZWZmZWN0cyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKCdjYXRlZ29yeScsIGRhZmZDYXRlZ29yeVJlZHVjZXJzKSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW0RhZmZDYXRlZ29yeUVmZmVjdHMsIERhZmZDYXRlZ29yeVBhZ2VFZmZlY3RzXSksXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogRGFmZkRlZmF1bHRDYXRlZ29yeVBhZ2VTaXplLCB1c2VWYWx1ZTogMTIgfVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZDYXRlZ29yeVN0YXRlTW9kdWxlIHsgfVxuIl19