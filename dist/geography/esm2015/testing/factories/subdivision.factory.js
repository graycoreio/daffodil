/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as faker from 'faker/locale/en_US';
import { DaffModelFactory } from '@daffodil/core/testing';
import * as i0 from "@angular/core";
export class MockSubdivision {
    constructor() {
        this.id = String(faker.random.number({ min: 1, max: 1000 }));
        this.name = faker.random.word();
        this.iso_3166_2 = faker.random.alphaNumeric(2);
    }
}
if (false) {
    /** @type {?} */
    MockSubdivision.prototype.id;
    /** @type {?} */
    MockSubdivision.prototype.name;
    /** @type {?} */
    MockSubdivision.prototype.iso_3166_2;
}
export class DaffSubdivisionFactory extends DaffModelFactory {
    constructor() {
        super(MockSubdivision);
    }
}
DaffSubdivisionFactory.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffSubdivisionFactory.ctorParameters = () => [];
/** @nocollapse */ DaffSubdivisionFactory.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffSubdivisionFactory_Factory() { return new DaffSubdivisionFactory(); }, token: DaffSubdivisionFactory, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViZGl2aXNpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9nZW9ncmFwaHkvdGVzdGluZy8iLCJzb3VyY2VzIjpbImZhY3Rvcmllcy9zdWJkaXZpc2lvbi5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sb0JBQW9CLENBQUM7QUFJNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTFELE1BQU0sT0FBTyxlQUFlO0lBQTVCO1FBQ0UsT0FBRSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxTQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1QixlQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUFBOzs7SUFIQyw2QkFBc0Q7O0lBQ3RELCtCQUEyQjs7SUFDNUIscUNBQTBDOztBQU0zQyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWlDO0lBQzNFO1FBQ0UsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OztZQU5GLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGZha2VyIGZyb20gJ2Zha2VyL2xvY2FsZS9lbl9VUyc7XG5cbmltcG9ydCB7IERhZmZTdWJkaXZpc2lvbiB9IGZyb20gJ0BkYWZmb2RpbC9nZW9ncmFwaHknO1xuXG5pbXBvcnQgeyBEYWZmTW9kZWxGYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NvcmUvdGVzdGluZyc7XG5cbmV4cG9ydCBjbGFzcyBNb2NrU3ViZGl2aXNpb24gaW1wbGVtZW50cyBEYWZmU3ViZGl2aXNpb24ge1xuICBpZCA9IFN0cmluZyhmYWtlci5yYW5kb20ubnVtYmVyKHttaW46IDEsIG1heDogMTAwMH0pKTtcbiAgbmFtZSA9IGZha2VyLnJhbmRvbS53b3JkKCk7XG5cdGlzb18zMTY2XzIgPSBmYWtlci5yYW5kb20uYWxwaGFOdW1lcmljKDIpO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmU3ViZGl2aXNpb25GYWN0b3J5IGV4dGVuZHMgRGFmZk1vZGVsRmFjdG9yeTxEYWZmU3ViZGl2aXNpb24+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoTW9ja1N1YmRpdmlzaW9uKTtcbiAgfVxufVxuIl19