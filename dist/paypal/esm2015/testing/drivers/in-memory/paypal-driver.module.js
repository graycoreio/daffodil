/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffPaypalDriver } from '@daffodil/paypal';
import { DaffInMemoryPaypalService } from './paypal.service';
export class DaffPaypalInMemoryDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffPaypalInMemoryDriverModule,
            providers: [
                {
                    provide: DaffPaypalDriver,
                    useExisting: DaffInMemoryPaypalService
                }
            ]
        };
    }
}
DaffPaypalInMemoryDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLWRyaXZlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvcGF5cGFsL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL2luLW1lbW9yeS9wYXlwYWwtZHJpdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXBELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTzdELE1BQU0sT0FBTyw4QkFBOEI7Ozs7SUFDekMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLDhCQUE4QjtZQUN4QyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsV0FBVyxFQUFFLHlCQUF5QjtpQkFDdkM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFoQkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRGFmZlBheXBhbERyaXZlciB9IGZyb20gJ0BkYWZmb2RpbC9wYXlwYWwnO1xuXG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlQYXlwYWxTZXJ2aWNlIH0gZnJvbSAnLi9wYXlwYWwuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmUGF5cGFsSW5NZW1vcnlEcml2ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhZmZQYXlwYWxJbk1lbW9yeURyaXZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZlBheXBhbERyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZkluTWVtb3J5UGF5cGFsU2VydmljZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19