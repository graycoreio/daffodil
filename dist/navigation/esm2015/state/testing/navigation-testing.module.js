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
export class DaffNavigationTestingModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi10ZXN0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9uYXZpZ2F0aW9uL3N0YXRlL3Rlc3RpbmcvIiwic291cmNlcyI6WyJuYXZpZ2F0aW9uLXRlc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFjcEUsTUFBTSxPQUFPLDJCQUEyQjs7O1lBUnZDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLHdCQUF3QixFQUFFO2lCQUN6RTthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERhZmZOYXZpZ2F0aW9uRmFjYWRlIH0gZnJvbSAnQGRhZmZvZGlsL25hdmlnYXRpb24vc3RhdGUnO1xuXG5pbXBvcnQgeyBNb2NrRGFmZk5hdmlnYXRpb25GYWNhZGUgfSBmcm9tICcuL21vY2stbmF2aWdhdGlvbi5mYWNhZGUnO1xuXG4vKipcbiAqIFRoZSBEYWZmTmF2aWdhdGlvblRlc3RpbmdNb2R1bGUgcHJvdmlkZXMgYSBtb2NrIGZvciB0aGUgRGFmZk5hdmlnYXRpb25GYWNhZGUuIFRoaXMgbWFrZXMgdGVzdGluZyBtdWNoIHNpbXBsZXJcbiAqIGJ5IHJlbW92aW5nIGFueSBpbnRlcmFjdGlvbiB3aXRoIHRoZSBuZ3J4IHN0b3JlLlxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogRGFmZk5hdmlnYXRpb25GYWNhZGUsIHVzZUV4aXN0aW5nOiBNb2NrRGFmZk5hdmlnYXRpb25GYWNhZGUgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZOYXZpZ2F0aW9uVGVzdGluZ01vZHVsZSB7fVxuIl19