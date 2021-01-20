/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { DaffNewsletterDriver } from '@daffodil/newsletter';
import { DaffInMemoryNewsletterService } from './newsletter.service';
import { NgModule } from '@angular/core';
/**
 * Module for providing the DaffInMemoryNewsletterService driver to your application
 */
var DaffNewsletterInMemoryDriverModule = /** @class */ (function () {
    function DaffNewsletterInMemoryDriverModule() {
    }
    /**
     * @return {?}
     */
    DaffNewsletterInMemoryDriverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DaffNewsletterInMemoryDriverModule,
            providers: [
                {
                    provide: DaffNewsletterDriver,
                    useExisting: DaffInMemoryNewsletterService
                }
            ]
        };
    };
    DaffNewsletterInMemoryDriverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ]
                },] }
    ];
    return DaffNewsletterInMemoryDriverModule;
}());
export { DaffNewsletterInMemoryDriverModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci1kcml2ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25ld3NsZXR0ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvaW4tbWVtb3J5L25ld3NsZXR0ZXItZHJpdmVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDOzs7O0FBSTlEO0lBQUE7SUFpQkEsQ0FBQzs7OztJQVhRLDBDQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsa0NBQWtDO1lBQzVDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixXQUFXLEVBQUUsNkJBQTZCO2lCQUMzQzthQUNGO1NBQ0YsQ0FBQTtJQUNILENBQUM7O2dCQWhCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7aUJBQ0Y7O0lBYUQseUNBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQVpZLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYWZmTmV3c2xldHRlckRyaXZlciB9IGZyb20gJ0BkYWZmb2RpbC9uZXdzbGV0dGVyJztcbmltcG9ydCB7IERhZmZJbk1lbW9yeU5ld3NsZXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9uZXdzbGV0dGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKlxuICogTW9kdWxlIGZvciBwcm92aWRpbmcgdGhlIERhZmZJbk1lbW9yeU5ld3NsZXR0ZXJTZXJ2aWNlIGRyaXZlciB0byB5b3VyIGFwcGxpY2F0aW9uXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmTmV3c2xldHRlckluTWVtb3J5RHJpdmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEYWZmTmV3c2xldHRlckluTWVtb3J5RHJpdmVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBEYWZmTmV3c2xldHRlckRyaXZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRGFmZkluTWVtb3J5TmV3c2xldHRlclNlcnZpY2VcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxufSJdfQ==