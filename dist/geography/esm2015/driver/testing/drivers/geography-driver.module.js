/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffGeographyDriver } from '@daffodil/geography/driver';
import { DaffTestingGeographyService } from './geography.service';
export class DaffGeographyTestingDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffGeographyTestingDriverModule,
            providers: [
                {
                    provide: DaffGeographyDriver,
                    useExisting: DaffTestingGeographyService
                }
            ]
        };
    }
}
DaffGeographyTestingDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvZ3JhcGh5LWRyaXZlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy9nZW9ncmFwaHktZHJpdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWpFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBT2xFLE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7SUFDM0MsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdDQUFnQztZQUMxQyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLG1CQUFtQjtvQkFDNUIsV0FBVyxFQUFFLDJCQUEyQjtpQkFDekM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFoQkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRGFmZkdlb2dyYXBoeURyaXZlciB9IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHkvZHJpdmVyJztcblxuaW1wb3J0IHsgRGFmZlRlc3RpbmdHZW9ncmFwaHlTZXJ2aWNlIH0gZnJvbSAnLi9nZW9ncmFwaHkuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmR2VvZ3JhcGh5VGVzdGluZ0RyaXZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGFmZkdlb2dyYXBoeVRlc3RpbmdEcml2ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZHZW9ncmFwaHlEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZUZXN0aW5nR2VvZ3JhcGh5U2VydmljZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19