/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffGeographyDriver } from '@daffodil/geography/driver';
import { DaffTestingGeographyService } from './geography.service';
var DaffGeographyTestingDriverModule = /** @class */ (function () {
    function DaffGeographyTestingDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffGeographyTestingDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffGeographyTestingDriverModule,
            providers: [
                {
                    provide: DaffGeographyDriver,
                    useExisting: DaffTestingGeographyService
                }
            ]
        };
    };
    DaffGeographyTestingDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffGeographyTestingDriverModule;
}());
export { DaffGeographyTestingDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LWRyaXZlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy9nZW9ncmFwaHktZHJpdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWpFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWxFO0lBQUE7SUFpQkEsQ0FBQzs7OztJQVhRLHdDQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0NBQWdDO1lBQzFDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixXQUFXLEVBQUUsMkJBQTJCO2lCQUN6QzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWhCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7aUJBQ0Y7O0lBYUQsdUNBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEYWZmR2VvZ3JhcGh5RHJpdmVyIH0gZnJvbSAnQGRhZmZvZGlsL2dlb2dyYXBoeS9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmVGVzdGluZ0dlb2dyYXBoeVNlcnZpY2UgfSBmcm9tICcuL2dlb2dyYXBoeS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZHZW9ncmFwaHlUZXN0aW5nRHJpdmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEYWZmR2VvZ3JhcGh5VGVzdGluZ0RyaXZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZkdlb2dyYXBoeURyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZlRlc3RpbmdHZW9ncmFwaHlTZXJ2aWNlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=