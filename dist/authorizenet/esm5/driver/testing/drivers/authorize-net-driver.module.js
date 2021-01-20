/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffAuthorizeNetDriver } from '@daffodil/authorizenet/driver';
import { DaffTestingAuthorizeNetService } from './authorize-net.service';
var DaffTestingAuthorizeNetDriverModule = /** @class */ (function () {
    function DaffTestingAuthorizeNetDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffTestingAuthorizeNetDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffTestingAuthorizeNetDriverModule,
            providers: [
                {
                    provide: DaffAuthorizeNetDriver,
                    useExisting: DaffTestingAuthorizeNetService
                }
            ]
        };
    };
    DaffTestingAuthorizeNetDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffTestingAuthorizeNetDriverModule;
}());
export { DaffTestingAuthorizeNetDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLW5ldC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGhvcml6ZW5ldC9kcml2ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvYXV0aG9yaXplLW5ldC1kcml2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFdkUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekU7SUFBQTtJQWlCQSxDQUFDOzs7O0lBWFEsMkNBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxtQ0FBbUM7WUFDN0MsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFdBQVcsRUFBRSw4QkFBOEI7aUJBQzVDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBaEJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtpQkFDRjs7SUFhRCwwQ0FBQztDQUFBLEFBakJELElBaUJDO1NBWlksbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYWZmQXV0aG9yaXplTmV0RHJpdmVyIH0gZnJvbSAnQGRhZmZvZGlsL2F1dGhvcml6ZW5ldC9kcml2ZXInO1xuXG5pbXBvcnQgeyBEYWZmVGVzdGluZ0F1dGhvcml6ZU5ldFNlcnZpY2UgfSBmcm9tICcuL2F1dGhvcml6ZS1uZXQuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmVGVzdGluZ0F1dGhvcml6ZU5ldERyaXZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGFmZlRlc3RpbmdBdXRob3JpemVOZXREcml2ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZBdXRob3JpemVOZXREcml2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IERhZmZUZXN0aW5nQXV0aG9yaXplTmV0U2VydmljZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19