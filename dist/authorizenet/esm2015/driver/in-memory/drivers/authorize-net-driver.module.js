/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffAuthorizeNetDriver } from '@daffodil/authorizenet/driver';
import { DaffInMemoryAuthorizeNetService } from './authorize-net.service';
export class DaffAuthorizeNetInMemoryDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffAuthorizeNetInMemoryDriverModule,
            providers: [
                {
                    provide: DaffAuthorizeNetDriver,
                    useExisting: DaffInMemoryAuthorizeNetService
                }
            ]
        };
    }
}
DaffAuthorizeNetInMemoryDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLW5ldC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGhvcml6ZW5ldC9kcml2ZXIvaW4tbWVtb3J5LyIsInNvdXJjZXMiOlsiZHJpdmVycy9hdXRob3JpemUtbmV0LWRyaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUV2RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVExRSxNQUFNLE9BQU8sb0NBQW9DOzs7O0lBQy9DLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxvQ0FBb0M7WUFDOUMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFdBQVcsRUFBRSwrQkFBK0I7aUJBQ2pEO2FBQ0U7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBaEJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERhZmZBdXRob3JpemVOZXREcml2ZXIgfSBmcm9tICdAZGFmZm9kaWwvYXV0aG9yaXplbmV0L2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZJbk1lbW9yeUF1dGhvcml6ZU5ldFNlcnZpY2UgfSBmcm9tICcuL2F1dGhvcml6ZS1uZXQuc2VydmljZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZBdXRob3JpemVOZXRJbk1lbW9yeURyaXZlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGFmZkF1dGhvcml6ZU5ldEluTWVtb3J5RHJpdmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmQXV0aG9yaXplTmV0RHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmSW5NZW1vcnlBdXRob3JpemVOZXRTZXJ2aWNlXG5cdFx0XHRcdH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=