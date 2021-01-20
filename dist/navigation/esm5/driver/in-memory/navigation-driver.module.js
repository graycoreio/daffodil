/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffNavigationDriver } from '@daffodil/navigation/driver';
import { DaffInMemoryNavigationService } from './navigation.service';
var DaffNavigationInMemoryDriverModule = /** @class */ (function () {
    function DaffNavigationInMemoryDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffNavigationInMemoryDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffNavigationInMemoryDriverModule,
            providers: [
                {
                    provide: DaffNavigationDriver,
                    useExisting: DaffInMemoryNavigationService
                }
            ]
        };
    };
    DaffNavigationInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffNavigationInMemoryDriverModule;
}());
export { DaffNavigationInMemoryDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25hdmlnYXRpb24vZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24tZHJpdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRW5FLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXJFO0lBQUE7SUFpQkEsQ0FBQzs7OztJQVhRLDBDQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsa0NBQWtDO1lBQzVDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixXQUFXLEVBQUUsNkJBQTZCO2lCQUMzQzthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWhCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7aUJBQ0Y7O0lBYUQseUNBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEYWZmTmF2aWdhdGlvbkRyaXZlciB9IGZyb20gJ0BkYWZmb2RpbC9uYXZpZ2F0aW9uL2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZJbk1lbW9yeU5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZk5hdmlnYXRpb25Jbk1lbW9yeURyaXZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGFmZk5hdmlnYXRpb25Jbk1lbW9yeURyaXZlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRGFmZk5hdmlnYXRpb25Ecml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZJbk1lbW9yeU5hdmlnYXRpb25TZXJ2aWNlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=