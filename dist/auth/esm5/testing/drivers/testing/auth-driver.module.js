/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffLoginDriver, DaffRegisterDriver, DaffAuthDriver, } from '@daffodil/auth';
import { DaffTestingLoginService } from './login/login.service';
import { DaffTestingRegisterService } from './register/register.service';
import { DaffTestingAuthService } from './auth/auth.service';
var DaffAuthTestingDriverModule = /** @class */ (function () {
    function DaffAuthTestingDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffAuthTestingDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffAuthTestingDriverModule,
            providers: [
                {
                    provide: DaffLoginDriver,
                    useExisting: DaffTestingLoginService
                },
                {
                    provide: DaffRegisterDriver,
                    useExisting: DaffTestingRegisterService
                },
                {
                    provide: DaffAuthDriver,
                    useExisting: DaffTestingAuthService
                }
            ]
        };
    };
    DaffAuthTestingDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ]
                },] }
    ];
    return DaffAuthTestingDriverModule;
}());
export { DaffAuthTestingDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvdGVzdGluZy9hdXRoLWRyaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU3RDtJQUFBO0lBeUJBLENBQUM7Ozs7SUFuQlEsbUNBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixXQUFXLEVBQUUsdUJBQXVCO2lCQUNyQztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixXQUFXLEVBQUUsMEJBQTBCO2lCQUN4QztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsY0FBYztvQkFDdkIsV0FBVyxFQUFFLHNCQUFzQjtpQkFDcEM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkF4QkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO2lCQUNGOztJQXFCRCxrQ0FBQztDQUFBLEFBekJELElBeUJDO1NBcEJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1xuICBEYWZmTG9naW5Ecml2ZXIsXG4gIERhZmZSZWdpc3RlckRyaXZlcixcbiAgRGFmZkF1dGhEcml2ZXIsXG59IGZyb20gJ0BkYWZmb2RpbC9hdXRoJztcblxuaW1wb3J0IHsgRGFmZlRlc3RpbmdMb2dpblNlcnZpY2UgfSBmcm9tICcuL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZlRlc3RpbmdSZWdpc3RlclNlcnZpY2UgfSBmcm9tICcuL3JlZ2lzdGVyL3JlZ2lzdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZlRlc3RpbmdBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZBdXRoVGVzdGluZ0RyaXZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGFmZkF1dGhUZXN0aW5nRHJpdmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmTG9naW5Ecml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZUZXN0aW5nTG9naW5TZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmUmVnaXN0ZXJEcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZUZXN0aW5nUmVnaXN0ZXJTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQXV0aERyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZlRlc3RpbmdBdXRoU2VydmljZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19