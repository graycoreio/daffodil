/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { DaffPaypalFacade } from '@daffodil/paypal';
import { MockDaffPaypalFacade } from './mock-paypal-facade';
export class DaffPaypalTestingModule {
}
DaffPaypalTestingModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    { provide: DaffPaypalFacade, useExisting: MockDaffPaypalFacade }
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXRlc3RpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3BheXBhbC90ZXN0aW5nLyIsInNvdXJjZXMiOlsiaGVscGVycy9wYXlwYWwtdGVzdGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFcEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPNUQsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBTG5DLFFBQVEsU0FBQztnQkFDUixTQUFTLEVBQUU7b0JBQ1gsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLG9CQUFvQixFQUFFO2lCQUNoRTthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZlBheXBhbEZhY2FkZSB9IGZyb20gJ0BkYWZmb2RpbC9wYXlwYWwnO1xuXG5pbXBvcnQgeyBNb2NrRGFmZlBheXBhbEZhY2FkZSB9IGZyb20gJy4vbW9jay1wYXlwYWwtZmFjYWRlJztcblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBEYWZmUGF5cGFsRmFjYWRlLCB1c2VFeGlzdGluZzogTW9ja0RhZmZQYXlwYWxGYWNhZGUgfVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIERhZmZQYXlwYWxUZXN0aW5nTW9kdWxlIHsgfVxuIl19