/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffGeographyDriver } from '@daffodil/geography/driver';
import { DaffGeographyMagentoService } from './geography.service';
var DaffGeographyMagentoDriverModule = /** @class */ (function () {
    function DaffGeographyMagentoDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffGeographyMagentoDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffGeographyMagentoDriverModule,
            providers: [
                {
                    provide: DaffGeographyDriver,
                    useExisting: DaffGeographyMagentoService
                }
            ]
        };
    };
    DaffGeographyMagentoDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ]
                },] }
    ];
    return DaffGeographyMagentoDriverModule;
}());
export { DaffGeographyMagentoDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LWRyaXZlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsiZ2VvZ3JhcGh5LWRyaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQTtBQUVoRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVsRTtJQUFBO0lBaUJBLENBQUM7Ozs7SUFYUSx3Q0FBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdDQUFnQztZQUMxQyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLG1CQUFtQjtvQkFDNUIsV0FBVyxFQUFFLDJCQUEyQjtpQkFDekM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFoQkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO2lCQUNGOztJQWFELHVDQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FaWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRGFmZkdlb2dyYXBoeURyaXZlciB9IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHkvZHJpdmVyJ1xuXG5pbXBvcnQgeyBEYWZmR2VvZ3JhcGh5TWFnZW50b1NlcnZpY2UgfSBmcm9tICcuL2dlb2dyYXBoeS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmR2VvZ3JhcGh5TWFnZW50b0RyaXZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RGFmZkdlb2dyYXBoeU1hZ2VudG9Ecml2ZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhZmZHZW9ncmFwaHlNYWdlbnRvRHJpdmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmR2VvZ3JhcGh5RHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmR2VvZ3JhcGh5TWFnZW50b1NlcnZpY2VcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==