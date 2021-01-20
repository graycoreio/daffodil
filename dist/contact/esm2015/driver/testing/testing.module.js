/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffContactDriver } from '@daffodil/contact/driver';
import { DaffTestingContactService } from './contact.service';
export class DaffContactTestingDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffContactTestingDriverModule,
            providers: [
                {
                    provide: DaffContactDriver,
                    useClass: DaffTestingContactService,
                },
            ],
        };
    }
}
DaffContactTestingDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY29udGFjdC9kcml2ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbInRlc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLOUQsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQUMxQyxNQUFNLENBQUMsT0FBTztRQUNiLE9BQU87WUFDTixRQUFRLEVBQUUsOEJBQThCO1lBQ3hDLFNBQVMsRUFBRTtnQkFDVjtvQkFDQyxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUseUJBQXlCO2lCQUNuQzthQUNEO1NBQ0QsQ0FBQztJQUNILENBQUM7OztZQWRELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERhZmZDb250YWN0RHJpdmVyIH0gZnJvbSAnQGRhZmZvZGlsL2NvbnRhY3QvZHJpdmVyJztcbmltcG9ydCB7IERhZmZUZXN0aW5nQ29udGFjdFNlcnZpY2UgfSBmcm9tICcuL2NvbnRhY3Quc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ29udGFjdFRlc3RpbmdEcml2ZXJNb2R1bGUge1xuXHRzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IERhZmZDb250YWN0VGVzdGluZ0RyaXZlck1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvdmlkZTogRGFmZkNvbnRhY3REcml2ZXIsXG5cdFx0XHRcdFx0dXNlQ2xhc3M6IERhZmZUZXN0aW5nQ29udGFjdFNlcnZpY2UsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cbn1cbiJdfQ==