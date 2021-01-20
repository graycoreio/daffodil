/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
export class DaffTestingRegisterService {
    /**
     * @param {?} registration
     * @return {?}
     */
    register(registration) {
        return of({
            email: registration.customer.email,
            password: registration.password
        });
    }
}
DaffTestingRegisterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffTestingRegisterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffTestingRegisterService_Factory() { return new DaffTestingRegisterService(); }, token: DaffTestingRegisterService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9hdXRoL3Rlc3RpbmcvIiwic291cmNlcyI6WyJkcml2ZXJzL3Rlc3RpbmcvcmVnaXN0ZXIvcmVnaXN0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQVd0QyxNQUFNLE9BQU8sMEJBQTBCOzs7OztJQUlyQyxRQUFRLENBQUMsWUFBcUM7UUFDNUMsT0FBTyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQ2xDLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFaRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIERhZmZBY2NvdW50UmVnaXN0cmF0aW9uLFxuICBEYWZmTG9naW5JbmZvLFxuICBEYWZmUmVnaXN0ZXJTZXJ2aWNlSW50ZXJmYWNlLFxufSBmcm9tICdAZGFmZm9kaWwvYXV0aCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZUZXN0aW5nUmVnaXN0ZXJTZXJ2aWNlIGltcGxlbWVudHMgRGFmZlJlZ2lzdGVyU2VydmljZUludGVyZmFjZTxcbiAgRGFmZkFjY291bnRSZWdpc3RyYXRpb24sXG4gIERhZmZMb2dpbkluZm9cbj4ge1xuICByZWdpc3RlcihyZWdpc3RyYXRpb246IERhZmZBY2NvdW50UmVnaXN0cmF0aW9uKTogT2JzZXJ2YWJsZTxEYWZmTG9naW5JbmZvPiB7XG4gICAgcmV0dXJuIG9mKHtcbiAgICAgIGVtYWlsOiByZWdpc3RyYXRpb24uY3VzdG9tZXIuZW1haWwsXG4gICAgICBwYXNzd29yZDogcmVnaXN0cmF0aW9uLnBhc3N3b3JkXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==