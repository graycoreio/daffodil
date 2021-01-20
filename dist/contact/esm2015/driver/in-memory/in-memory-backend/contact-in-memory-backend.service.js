/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
export class DaffInMemoryBackendContactService {
    constructor() {
        this.forums = [];
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
            forums: this.forums
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
        else if (this.forums.indexOf(reqInfo.body) !== -1) {
            return Error('Already contains submission');
        }
        else {
            this.forums.push(reqInfo.body);
            return of(reqInfo);
        }
    }
}
DaffInMemoryBackendContactService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ DaffInMemoryBackendContactService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendContactService_Factory() { return new DaffInMemoryBackendContactService(); }, token: DaffInMemoryBackendContactService, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffInMemoryBackendContactService.prototype.forums;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC1pbi1tZW1vcnktYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvbnRhY3QvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImluLW1lbW9yeS1iYWNrZW5kL2NvbnRhY3QtaW4tbWVtb3J5LWJhY2tlbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUsxQixNQUFNLE9BQU8saUNBQWlDO0lBSDlDO1FBSUUsV0FBTSxHQUF1QixFQUFFLENBQUM7S0F5QmpDOzs7Ozs7SUF2QkMsZUFBZSxDQUFDLEdBQVcsRUFBRSxLQUEyQjtRQUN0RCxPQUFPLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBR0QsSUFBSSxDQUFDLE9BQVk7UUFDZixJQUFHLE9BQU8sS0FBSyxTQUFTLEVBQUM7WUFDdkIsT0FBTyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUN0QzthQUNJLElBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDO1lBQy9DLE9BQU8sS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDN0M7YUFDRztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7OztZQTVCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7O0lBRUMsbURBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5NZW1vcnlEYlNlcnZpY2UsIFJlcXVlc3RJbmZvVXRpbGl0aWVzLCBQYXJzZWRSZXF1ZXN0VXJsfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhZmZDb250YWN0VW5pb24gfSBmcm9tICdAZGFmZm9kaWwvY29udGFjdCc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlCYWNrZW5kQ29udGFjdFNlcnZpY2UgaW1wbGVtZW50cyBJbk1lbW9yeURiU2VydmljZSB7XG4gIGZvcnVtczogRGFmZkNvbnRhY3RVbmlvbltdID0gW107XG5cbiAgcGFyc2VSZXF1ZXN0VXJsKHVybDogc3RyaW5nLCB1dGlsczogUmVxdWVzdEluZm9VdGlsaXRpZXMpOiBQYXJzZWRSZXF1ZXN0VXJsIHtcbiAgICByZXR1cm4gdXRpbHMucGFyc2VSZXF1ZXN0VXJsKHVybCk7XG4gIH1cblxuICBjcmVhdGVEYigpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBmb3J1bXM6IHRoaXMuZm9ydW1zXG4gICAgfTtcbiAgfVxuICAvL3ZhbGlkYXRlIHRoYXQgaXRzIG5vdCBlbXB0eVxuICAvL3ZhbGlkYXRlIHRoYXQgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0XG4gIHBvc3QocmVxSW5mbzogYW55KTogYW55IHtcbiAgICBpZihyZXFJbmZvID09PSB1bmRlZmluZWQpe1xuICAgICAgcmV0dXJuIEVycm9yKCdQYXlsb2FkIGlzIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICBlbHNlIGlmKHRoaXMuZm9ydW1zLmluZGV4T2YocmVxSW5mby5ib2R5KSAhPT0gLTEpe1xuICAgICAgcmV0dXJuIEVycm9yKCdBbHJlYWR5IGNvbnRhaW5zIHN1Ym1pc3Npb24nKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHRoaXMuZm9ydW1zLnB1c2gocmVxSW5mby5ib2R5KTtcbiAgICAgIHJldHVybiBvZihyZXFJbmZvKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==