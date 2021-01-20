/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DaffGeographyFacade } from '@daffodil/geography/state';
import { MockDaffGeographyFacade } from './mock-geography-facade';
export class DaffGeographyTestingModule {
}
DaffGeographyTestingModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    { provide: DaffGeographyFacade, useExisting: MockDaffGeographyFacade }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LXRlc3RpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2dlb2dyYXBoeS9zdGF0ZS90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZ2VvZ3JhcGh5LXRlc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWhFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBT2xFLE1BQU0sT0FBTywwQkFBMEI7OztZQUx0QyxRQUFRLFNBQUM7Z0JBQ1IsU0FBUyxFQUFFO29CQUNYLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSx1QkFBdUIsRUFBRTtpQkFDdEU7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZHZW9ncmFwaHlGYWNhZGUgfSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5L3N0YXRlJztcblxuaW1wb3J0IHsgTW9ja0RhZmZHZW9ncmFwaHlGYWNhZGUgfSBmcm9tICcuL21vY2stZ2VvZ3JhcGh5LWZhY2FkZSc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogRGFmZkdlb2dyYXBoeUZhY2FkZSwgdXNlRXhpc3Rpbmc6IE1vY2tEYWZmR2VvZ3JhcGh5RmFjYWRlIH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmR2VvZ3JhcGh5VGVzdGluZ01vZHVsZSB7fVxuIl19