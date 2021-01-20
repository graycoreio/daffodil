/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffContactDriver } from '@daffodil/contact/driver';
import { DaffInMemoryContactService } from './contact.service';
export class DaffContactInMemoryDriverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DaffContactInMemoryDriverModule,
            providers: [
                {
                    provide: DaffContactDriver,
                    useClass: DaffInMemoryContactService,
                },
            ],
        };
    }
}
DaffContactInMemoryDriverModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jb250YWN0L2RyaXZlci9pbi1tZW1vcnkvIiwic291cmNlcyI6WyJpbi1tZW1vcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLL0QsTUFBTSxPQUFPLCtCQUErQjs7OztJQUMzQyxNQUFNLENBQUMsT0FBTztRQUNiLE9BQU87WUFDTixRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLFNBQVMsRUFBRTtnQkFDVjtvQkFDQyxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUsMEJBQTBCO2lCQUNwQzthQUNEO1NBQ0QsQ0FBQztJQUNILENBQUM7OztZQWRELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRGFmZkNvbnRhY3REcml2ZXIgfSBmcm9tICdAZGFmZm9kaWwvY29udGFjdC9kcml2ZXInO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5Q29udGFjdFNlcnZpY2UgfSBmcm9tICcuL2NvbnRhY3Quc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ29udGFjdEluTWVtb3J5RHJpdmVyTW9kdWxlIHtcblx0c3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBEYWZmQ29udGFjdEluTWVtb3J5RHJpdmVyTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBEYWZmQ29udGFjdERyaXZlcixcblx0XHRcdFx0XHR1c2VDbGFzczogRGFmZkluTWVtb3J5Q29udGFjdFNlcnZpY2UsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cbn1cbiJdfQ==