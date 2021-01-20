/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DaffNewsletterDriver } from '@daffodil/newsletter';
import { DaffTestingNewsletterService } from './newsletter.service';
export class DaffNewsletterTestingDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffNewsletterTestingDriverModule,
            providers: [
                {
                    provide: DaffNewsletterDriver,
                    useClass: DaffTestingNewsletterService
                }
            ]
        };
    }
}
DaffNewsletterTestingDriverModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvbmV3c2xldHRlci90ZXN0aW5nLyIsInNvdXJjZXMiOlsiZHJpdmVycy90ZXN0aW5nL3Rlc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdwRSxNQUFNLE9BQU8saUNBQWlDOzs7O0lBQzVDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxpQ0FBaUM7WUFDM0MsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxvQkFBb0I7b0JBQzdCLFFBQVEsRUFBRSw0QkFBNEI7aUJBQ3ZDO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBWkYsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYWZmTmV3c2xldHRlckRyaXZlciB9IGZyb20gJ0BkYWZmb2RpbC9uZXdzbGV0dGVyJztcbmltcG9ydCB7IERhZmZUZXN0aW5nTmV3c2xldHRlclNlcnZpY2UgfSBmcm9tICcuL25ld3NsZXR0ZXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgRGFmZk5ld3NsZXR0ZXJUZXN0aW5nRHJpdmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEYWZmTmV3c2xldHRlclRlc3RpbmdEcml2ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERhZmZOZXdzbGV0dGVyRHJpdmVyLFxuICAgICAgICAgIHVzZUNsYXNzOiBEYWZmVGVzdGluZ05ld3NsZXR0ZXJTZXJ2aWNlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=