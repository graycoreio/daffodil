/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffProductDriver } from '@daffodil/product';
import { DaffInMemoryProductService } from './product.service';
/**
 * Module for providing the DaffInMemoryProductService driver to your application.
 */
var DaffProductInMemoryDriverModule = /** @class */ (function () {
    function DaffProductInMemoryDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffProductInMemoryDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffProductInMemoryDriverModule,
            providers: [
                {
                    provide: DaffProductDriver,
                    useExisting: DaffInMemoryProductService
                }
            ]
        };
    };
    DaffProductInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffProductInMemoryDriverModule;
}());
export { DaffProductInMemoryDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvaW4tbWVtb3J5L3Byb2R1Y3QtZHJpdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXRELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBSy9EO0lBQUE7SUFpQkEsQ0FBQzs7OztJQVhRLHVDQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsMEJBQTBCO2lCQUN4QzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWhCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7aUJBQ0Y7O0lBYUQsc0NBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEYWZmUHJvZHVjdERyaXZlciB9IGZyb20gJ0BkYWZmb2RpbC9wcm9kdWN0JztcblxuaW1wb3J0IHsgRGFmZkluTWVtb3J5UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuL3Byb2R1Y3Quc2VydmljZSc7XG5cbi8qKlxuICogTW9kdWxlIGZvciBwcm92aWRpbmcgdGhlIERhZmZJbk1lbW9yeVByb2R1Y3RTZXJ2aWNlIGRyaXZlciB0byB5b3VyIGFwcGxpY2F0aW9uLlxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZlByb2R1Y3RJbk1lbW9yeURyaXZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGFmZlByb2R1Y3RJbk1lbW9yeURyaXZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZlByb2R1Y3REcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZJbk1lbW9yeVByb2R1Y3RTZXJ2aWNlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=