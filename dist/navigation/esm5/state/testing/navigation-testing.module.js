/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffNavigationFacade } from '@daffodil/navigation/state';
import { MockDaffNavigationFacade } from './mock-navigation.facade';
/**
 * The DaffNavigationTestingModule provides a mock for the DaffNavigationFacade. This makes testing much simpler
 * by removing any interaction with the ngrx store.
 */
var DaffNavigationTestingModule = /** @class */ (function () {
    function DaffNavigationTestingModule() {
    }
    DaffNavigationTestingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        { provide: DaffNavigationFacade, useExisting: MockDaffNavigationFacade }
                    ]
                },] }
    ];
    return DaffNavigationTestingModule;
}());
export { DaffNavigationTestingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi10ZXN0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9uYXZpZ2F0aW9uL3N0YXRlL3Rlc3RpbmcvIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLXRlc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFNcEU7SUFBQTtJQVEwQyxDQUFDOztnQkFSMUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsd0JBQXdCLEVBQUU7cUJBQ3pFO2lCQUNGOztJQUN5QyxrQ0FBQztDQUFBLEFBUjNDLElBUTJDO1NBQTlCLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEYWZmTmF2aWdhdGlvbkZhY2FkZSB9IGZyb20gJ0BkYWZmb2RpbC9uYXZpZ2F0aW9uL3N0YXRlJztcblxuaW1wb3J0IHsgTW9ja0RhZmZOYXZpZ2F0aW9uRmFjYWRlIH0gZnJvbSAnLi9tb2NrLW5hdmlnYXRpb24uZmFjYWRlJztcblxuLyoqXG4gKiBUaGUgRGFmZk5hdmlnYXRpb25UZXN0aW5nTW9kdWxlIHByb3ZpZGVzIGEgbW9jayBmb3IgdGhlIERhZmZOYXZpZ2F0aW9uRmFjYWRlLiBUaGlzIG1ha2VzIHRlc3RpbmcgbXVjaCBzaW1wbGVyXG4gKiBieSByZW1vdmluZyBhbnkgaW50ZXJhY3Rpb24gd2l0aCB0aGUgbmdyeCBzdG9yZS5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IERhZmZOYXZpZ2F0aW9uRmFjYWRlLCB1c2VFeGlzdGluZzogTW9ja0RhZmZOYXZpZ2F0aW9uRmFjYWRlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmTmF2aWdhdGlvblRlc3RpbmdNb2R1bGUge31cbiJdfQ==