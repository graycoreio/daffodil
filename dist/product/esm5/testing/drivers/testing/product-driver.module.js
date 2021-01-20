/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffProductDriver } from '@daffodil/product';
import { DaffTestingProductService } from './product.service';
/**
 * Module for providing DaffProductTestingService driver as the backend product service to your application.
 */
var DaffProductTestingDriverModule = /** @class */ (function () {
    function DaffProductTestingDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffProductTestingDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffProductTestingDriverModule,
            providers: [
                {
                    provide: DaffProductDriver,
                    useExisting: DaffTestingProductService
                }
            ]
        };
    };
    DaffProductTestingDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffProductTestingDriverModule;
}());
export { DaffProductTestingDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvdGVzdGluZy9wcm9kdWN0LWRyaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUs5RDtJQUFBO0lBaUJBLENBQUM7Ozs7SUFYUSxzQ0FBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLDhCQUE4QjtZQUN4QyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLHlCQUF5QjtpQkFDdkM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFoQkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO2lCQUNGOztJQWFELHFDQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FaWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRGFmZlByb2R1Y3REcml2ZXIgfSBmcm9tICdAZGFmZm9kaWwvcHJvZHVjdCc7XG5cbmltcG9ydCB7IERhZmZUZXN0aW5nUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuL3Byb2R1Y3Quc2VydmljZSc7XG5cbi8qKlxuICogTW9kdWxlIGZvciBwcm92aWRpbmcgRGFmZlByb2R1Y3RUZXN0aW5nU2VydmljZSBkcml2ZXIgYXMgdGhlIGJhY2tlbmQgcHJvZHVjdCBzZXJ2aWNlIHRvIHlvdXIgYXBwbGljYXRpb24uXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmUHJvZHVjdFRlc3RpbmdEcml2ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhZmZQcm9kdWN0VGVzdGluZ0RyaXZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZlByb2R1Y3REcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZUZXN0aW5nUHJvZHVjdFNlcnZpY2VcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==