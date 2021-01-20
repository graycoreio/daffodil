/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DaffInMemoryBackendNewsletterService {
    constructor() {
        this.newsletters = [];
    }
    /**
     * @param {?} url
     * @param {?} utils
     * @return {?}
     */
    parseRequestUrl(url, utils) {
        return utils.parseRequestUrl(url);
    }
    /**
     * @return {?}
     */
    createDb() {
        return {
            newsletters: this.newsletters
        };
    }
    //validate that its not empty
    //validate that it doesn't already exist
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    post(reqInfo) {
        if (reqInfo === undefined) {
            return Error('Payload is undefined');
        }
        else if (this.newsletters.indexOf(reqInfo) > -1) {
            return Error('Already contains submission');
        }
        else {
            this.newsletters.push(reqInfo);
            return reqInfo;
        }
    }
}
DaffInMemoryBackendNewsletterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendNewsletterService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendNewsletterService_Factory() { return new DaffInMemoryBackendNewsletterService(); }, token: DaffInMemoryBackendNewsletterService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryBackendNewsletterService.prototype.newsletters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3c2xldHRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL25ld3NsZXR0ZXIvdGVzdGluZy8iLCJzb3VyY2VzIjpbImluLW1lbW9yeS1iYWNrZW5kL25ld3NsZXR0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPM0MsTUFBTSxPQUFPLG9DQUFvQztJQUhqRDtRQUlFLGdCQUFXLEdBQTBCLEVBQUUsQ0FBQztLQXlCekM7Ozs7OztJQXZCQyxlQUFlLENBQUMsR0FBVyxFQUFFLEtBQTJCO1FBQ3RELE9BQU8sS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLE9BQU87WUFDTCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDOUIsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFHRCxJQUFJLENBQUMsT0FBWTtRQUNmLElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUN6QixPQUFPLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3RDO2FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUMvQyxPQUFPLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQzdDO2FBQ0k7WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQixPQUFPLE9BQU8sQ0FBQztTQUNoQjtJQUNILENBQUM7OztZQTVCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7O0lBRUMsMkRBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5NZW1vcnlEYlNlcnZpY2UsIFJlcXVlc3RJbmZvVXRpbGl0aWVzLCBQYXJzZWRSZXF1ZXN0VXJsLCBTVEFUVVMgfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhZmZOZXdzbGV0dGVyVW5pb24gfSBmcm9tICdAZGFmZm9kaWwvbmV3c2xldHRlcic7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlCYWNrZW5kTmV3c2xldHRlclNlcnZpY2UgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSB7XG4gIG5ld3NsZXR0ZXJzOiBEYWZmTmV3c2xldHRlclVuaW9uW10gPSBbXTtcblxuICBwYXJzZVJlcXVlc3RVcmwodXJsOiBzdHJpbmcsIHV0aWxzOiBSZXF1ZXN0SW5mb1V0aWxpdGllcyk6IFBhcnNlZFJlcXVlc3RVcmwge1xuICAgIHJldHVybiB1dGlscy5wYXJzZVJlcXVlc3RVcmwodXJsKTtcbiAgfVxuXG4gIGNyZWF0ZURiKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5ld3NsZXR0ZXJzOiB0aGlzLm5ld3NsZXR0ZXJzXG4gICAgfTtcbiAgfVxuICAvL3ZhbGlkYXRlIHRoYXQgaXRzIG5vdCBlbXB0eVxuICAvL3ZhbGlkYXRlIHRoYXQgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0XG4gIHBvc3QocmVxSW5mbzogYW55KSB7XG4gICAgaWYgKHJlcUluZm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIEVycm9yKCdQYXlsb2FkIGlzIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLm5ld3NsZXR0ZXJzLmluZGV4T2YocmVxSW5mbykgPiAtMSkge1xuICAgICAgcmV0dXJuIEVycm9yKCdBbHJlYWR5IGNvbnRhaW5zIHN1Ym1pc3Npb24nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLm5ld3NsZXR0ZXJzLnB1c2gocmVxSW5mbyk7XG4gICAgICByZXR1cm4gcmVxSW5mbztcbiAgICB9XG4gIH1cbn0iXX0=