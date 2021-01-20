/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DaffPaypalFacade } from '@daffodil/paypal';
import { MockDaffPaypalFacade } from './mock-paypal-facade';
var DaffPaypalTestingModule = /** @class */ (function () {
    function DaffPaypalTestingModule() {
    }
    DaffPaypalTestingModule.decorators = [
        { type: NgModule, args: [{
                    providers: [
                        { provide: DaffPaypalFacade, useExisting: MockDaffPaypalFacade }
                    ]
                },] }
    ];
    return DaffPaypalTestingModule;
}());
export { DaffPaypalTestingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXRlc3RpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3BheXBhbC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiaGVscGVycy9wYXlwYWwtdGVzdGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFNUQ7SUFBQTtJQUt1QyxDQUFDOztnQkFMdkMsUUFBUSxTQUFDO29CQUNSLFNBQVMsRUFBRTt3QkFDWCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUU7cUJBQ2hFO2lCQUNEOztJQUNzQyw4QkFBQztDQUFBLEFBTHhDLElBS3dDO1NBQTNCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZQYXlwYWxGYWNhZGUgfSBmcm9tICdAZGFmZm9kaWwvcGF5cGFsJztcblxuaW1wb3J0IHsgTW9ja0RhZmZQYXlwYWxGYWNhZGUgfSBmcm9tICcuL21vY2stcGF5cGFsLWZhY2FkZSc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogRGFmZlBheXBhbEZhY2FkZSwgdXNlRXhpc3Rpbmc6IE1vY2tEYWZmUGF5cGFsRmFjYWRlIH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmUGF5cGFsVGVzdGluZ01vZHVsZSB7IH1cbiJdfQ==