/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockAuthToken {
    constructor() {
        this.token = faker.random.alphaNumeric(16);
    }
}
if (false) {
    /** @type {?} */
    MockAuthToken.prototype.token;
}
;
export class DaffAuthTokenFactory extends DaffModelFactory {
    constructor() {
        super(MockAuthToken);
    }
}
DaffAuthTokenFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffAuthTokenFactory.ctorParameters = () => [];
/** @nocollapse */ DaffAuthTokenFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffAuthTokenFactory_Factory() { return new DaffAuthTokenFactory(); }, token: DaffAuthTokenFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC10b2tlbi5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2F1dGgvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9hdXRoLXRva2VuLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxvQkFBb0IsQ0FBQztBQUc1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7QUFFMUQsTUFBTSxPQUFPLGFBQWE7SUFBMUI7UUFDRSxVQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUFBOzs7SUFEQyw4QkFBc0M7O0FBQ3ZDLENBQUM7QUFLRixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZ0JBQStCO0lBQ3ZFO1FBQ0UsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7OztZQU5GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZBdXRoVG9rZW4gfSBmcm9tICdAZGFmZm9kaWwvYXV0aCc7XG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrQXV0aFRva2VuIGltcGxlbWVudHMgRGFmZkF1dGhUb2tlbiB7XG4gIHRva2VuID0gZmFrZXIucmFuZG9tLmFscGhhTnVtZXJpYygxNik7XG59O1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmQXV0aFRva2VuRmFjdG9yeSBleHRlbmRzIERhZmZNb2RlbEZhY3Rvcnk8RGFmZkF1dGhUb2tlbj4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihNb2NrQXV0aFRva2VuKTtcbiAgfVxufVxuIl19