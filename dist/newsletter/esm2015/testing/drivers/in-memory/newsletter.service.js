/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * The newsletter inmemory driver to mock the newsletter backend service.
 *
 * \@Param HttpClient
 */
export class DaffInMemoryNewsletterService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.url = '/api/newsletters/';
    }
    /**
     * Sends your newsletter submission data.
     *
     * @param {?} payload DaffNewsletterUnion
     * @return {?} An Observable of DaffNewsletterUnion
     */
    send(payload) {
        return this.http.post(this.url, payload);
    }
}
DaffInMemoryNewsletterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryNewsletterService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ DaffInMemoryNewsletterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryNewsletterService_Factory() { return new DaffInMemoryNewsletterService(i0.ɵɵinject(i1.HttpClient)); }, token: DaffInMemoryNewsletterService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryNewsletterService.prototype.url;
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryNewsletterService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25ld3NsZXR0ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImRyaXZlcnMvaW4tbWVtb3J5L25ld3NsZXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7O0FBVWxELE1BQU0sT0FBTyw2QkFBNkI7Ozs7SUFHeEMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZwQyxRQUFHLEdBQUcsbUJBQW1CLENBQUM7SUFFYyxDQUFDOzs7Ozs7O0lBUXpDLElBQUksQ0FBQyxPQUE0QjtRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFzQixJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7OztZQWhCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFUUSxVQUFVOzs7OztJQVdqQiw0Q0FBMEI7Ozs7O0lBRWQsNkNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhZmZOZXdzbGV0dGVyU2VydmljZUludGVyZmFjZX0gZnJvbSAnQGRhZmZvZGlsL25ld3NsZXR0ZXInO1xuaW1wb3J0IHsgRGFmZk5ld3NsZXR0ZXJVbmlvbiB9IGZyb20gJ0BkYWZmb2RpbC9uZXdzbGV0dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbi8qKlxuICogVGhlIG5ld3NsZXR0ZXIgaW5tZW1vcnkgZHJpdmVyIHRvIG1vY2sgdGhlIG5ld3NsZXR0ZXIgYmFja2VuZCBzZXJ2aWNlLlxuICogXG4gKiBAUGFyYW0gSHR0cENsaWVudFxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlOZXdzbGV0dGVyU2VydmljZSBpbXBsZW1lbnRzIERhZmZOZXdzbGV0dGVyU2VydmljZUludGVyZmFjZTxEYWZmTmV3c2xldHRlclVuaW9uLCBEYWZmTmV3c2xldHRlclVuaW9uPntcbiAgdXJsID0gJy9hcGkvbmV3c2xldHRlcnMvJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuICBcbiAgLyoqXG4gICAqIFNlbmRzIHlvdXIgbmV3c2xldHRlciBzdWJtaXNzaW9uIGRhdGEuXG4gICAqIFxuICAgKiBAcGFyYW0gcGF5bG9hZCBEYWZmTmV3c2xldHRlclVuaW9uXG4gICAqIEByZXR1cm5zIEFuIE9ic2VydmFibGUgb2YgRGFmZk5ld3NsZXR0ZXJVbmlvblxuICAgKi9cbiAgc2VuZChwYXlsb2FkOiBEYWZmTmV3c2xldHRlclVuaW9uKTogT2JzZXJ2YWJsZTxEYWZmTmV3c2xldHRlclVuaW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PERhZmZOZXdzbGV0dGVyVW5pb24+KHRoaXMudXJsLCBwYXlsb2FkKTtcbiAgfVxuXG59Il19