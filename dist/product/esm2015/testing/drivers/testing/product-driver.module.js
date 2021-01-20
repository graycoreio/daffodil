/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffProductDriver } from '@daffodil/product';
import { DaffTestingProductService } from './product.service';
/**
 * Module for providing DaffProductTestingService driver as the backend product service to your application.
 */
export class DaffProductTestingDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffProductTestingDriverModule,
            providers: [
                {
                    provide: DaffProductDriver,
                    useExisting: DaffTestingProductService
                }
            ]
        };
    }
}
DaffProductTestingDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvdGVzdGluZy9wcm9kdWN0LWRyaXZlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV0RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQVU5RCxNQUFNLE9BQU8sOEJBQThCOzs7O0lBQ3pDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSw4QkFBOEI7WUFDeEMsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFdBQVcsRUFBRSx5QkFBeUI7aUJBQ3ZDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBaEJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0RHJpdmVyIH0gZnJvbSAnQGRhZmZvZGlsL3Byb2R1Y3QnO1xuXG5pbXBvcnQgeyBEYWZmVGVzdGluZ1Byb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi9wcm9kdWN0LnNlcnZpY2UnO1xuXG4vKipcbiAqIE1vZHVsZSBmb3IgcHJvdmlkaW5nIERhZmZQcm9kdWN0VGVzdGluZ1NlcnZpY2UgZHJpdmVyIGFzIHRoZSBiYWNrZW5kIHByb2R1Y3Qgc2VydmljZSB0byB5b3VyIGFwcGxpY2F0aW9uLlxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZlByb2R1Y3RUZXN0aW5nRHJpdmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEYWZmUHJvZHVjdFRlc3RpbmdEcml2ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZQcm9kdWN0RHJpdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBEYWZmVGVzdGluZ1Byb2R1Y3RTZXJ2aWNlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=