/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffGeographyDriver, } from '@daffodil/geography/driver';
import { DaffInMemoryGeographyService } from './geography.service';
var DaffGeographyInMemoryDriverModule = /** @class */ (function () {
    function DaffGeographyInMemoryDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffGeographyInMemoryDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffGeographyInMemoryDriverModule,
            providers: [
                {
                    provide: DaffGeographyDriver,
                    useExisting: DaffInMemoryGeographyService
                },
            ]
        };
    };
    DaffGeographyInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffGeographyInMemoryDriverModule;
}());
export { DaffGeographyInMemoryDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LWRyaXZlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlci9pbi1tZW1vcnkvIiwic291cmNlcyI6WyJkcml2ZXJzL2dlb2dyYXBoeS1kcml2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUNMLG1CQUFtQixHQUNwQixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRW5FO0lBQUE7SUFpQkEsQ0FBQzs7OztJQVhRLHlDQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsaUNBQWlDO1lBQzNDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixXQUFXLEVBQUUsNEJBQTRCO2lCQUMxQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWhCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7aUJBQ0Y7O0lBYUQsd0NBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1xuICBEYWZmR2VvZ3JhcGh5RHJpdmVyLFxufSBmcm9tICdAZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZJbk1lbW9yeUdlb2dyYXBoeVNlcnZpY2UgfSBmcm9tICcuL2dlb2dyYXBoeS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZHZW9ncmFwaHlJbk1lbW9yeURyaXZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGFmZkdlb2dyYXBoeUluTWVtb3J5RHJpdmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmR2VvZ3JhcGh5RHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmSW5NZW1vcnlHZW9ncmFwaHlTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19