/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var MockDaffOrderFacade = /** @class */ (function () {
    function MockDaffOrderFacade() {
        this.loading$ = new BehaviorSubject(null);
        this.errors$ = new BehaviorSubject([]);
        this.orders$ = new BehaviorSubject([]);
        this.orderIds$ = new BehaviorSubject([]);
        this.orderCount$ = new BehaviorSubject(null);
        this.orderEntities$ = new BehaviorSubject({});
        this.placedOrder$ = new BehaviorSubject(null);
        this.hasPlacedOrder$ = new BehaviorSubject(false);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getOrder$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getTotals$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getAppliedCodes$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getItems$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getBillingAddresses$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getShippingAddresses$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getShipments$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getPayment$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject(null);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getInvoices$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getCredits$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject([]);
    };
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getGrandTotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getSubtotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getShippingTotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getDiscountTotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.hasDiscount$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject(false);
    };
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    MockDaffOrderFacade.prototype.getTaxTotal$ = /**
     * @param {?} orderId
     * @return {?}
     */
    function (orderId) {
        return new BehaviorSubject(null);
    };
    ;
    /**
     * @param {?} action
     * @return {?}
     */
    MockDaffOrderFacade.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) { };
    ;
    MockDaffOrderFacade.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ MockDaffOrderFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffOrderFacade_Factory() { return new MockDaffOrderFacade(); }, token: MockDaffOrderFacade, providedIn: "root" });
    return MockDaffOrderFacade;
}());
export { MockDaffOrderFacade };
if (false) {
    /** @type {?} */
    MockDaffOrderFacade.prototype.loading$;
    /** @type {?} */
    MockDaffOrderFacade.prototype.errors$;
    /** @type {?} */
    MockDaffOrderFacade.prototype.orders$;
    /** @type {?} */
    MockDaffOrderFacade.prototype.orderIds$;
    /** @type {?} */
    MockDaffOrderFacade.prototype.orderCount$;
    /** @type {?} */
    MockDaffOrderFacade.prototype.orderEntities$;
    /** @type {?} */
    MockDaffOrderFacade.prototype.placedOrder$;
    /** @type {?} */
    MockDaffOrderFacade.prototype.hasPlacedOrder$;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1vcmRlci1mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvc3RhdGUvdGVzdGluZy8iLCJzb3VyY2VzIjpbIm1vY2stb3JkZXItZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDO0lBQUE7UUFFRSxhQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELFlBQU8sR0FBOEIsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFN0QsWUFBTyxHQUFpQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoRSxjQUFTLEdBQXlDLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLGdCQUFXLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLG1CQUFjLEdBQTJDLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWpGLGlCQUFZLEdBQStCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JFLG9CQUFlLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBNkR4RTs7Ozs7SUEzREMsdUNBQVM7Ozs7SUFBVCxVQUFVLE9BQXdCO1FBQ2hDLE9BQU8sSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEMsQ0FBQzs7Ozs7SUFFRCx3Q0FBVTs7OztJQUFWLFVBQVcsT0FBd0I7UUFDakMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNoQyxDQUFDOzs7OztJQUVELDhDQUFnQjs7OztJQUFoQixVQUFpQixPQUF3QjtRQUN2QyxPQUFPLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7Ozs7O0lBRUQsdUNBQVM7Ozs7SUFBVCxVQUFVLE9BQXdCO1FBQ2hDLE9BQU8sSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxrREFBb0I7Ozs7SUFBcEIsVUFBcUIsT0FBd0I7UUFDM0MsT0FBTyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNoQyxDQUFDOzs7OztJQUVELG1EQUFxQjs7OztJQUFyQixVQUFzQixPQUF3QjtRQUM1QyxPQUFPLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7Ozs7O0lBRUQsMkNBQWE7Ozs7SUFBYixVQUFjLE9BQXdCO1FBQ3BDLE9BQU8sSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7Ozs7SUFFRCx5Q0FBVzs7OztJQUFYLFVBQVksT0FBd0I7UUFDbEMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQyxDQUFDOzs7OztJQUVELDBDQUFZOzs7O0lBQVosVUFBYSxPQUF3QjtRQUNuQyxPQUFPLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXdCO1FBQ2xDLE9BQU8sSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7Ozs7SUFDRCw0Q0FBYzs7OztJQUFkLFVBQWUsT0FBd0I7UUFDckMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFDRiwwQ0FBWTs7OztJQUFaLFVBQWEsT0FBd0I7UUFDbkMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFDRiwrQ0FBaUI7Ozs7SUFBakIsVUFBa0IsT0FBd0I7UUFDeEMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFDRiwrQ0FBaUI7Ozs7SUFBakIsVUFBa0IsT0FBd0I7UUFDeEMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFDRiwwQ0FBWTs7OztJQUFaLFVBQWEsT0FBd0I7UUFDbkMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFDRiwwQ0FBWTs7OztJQUFaLFVBQWEsT0FBd0I7UUFDbkMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFFRixzQ0FBUTs7OztJQUFSLFVBQVMsTUFBYyxJQUFHLENBQUM7SUFBQSxDQUFDOztnQkF2RTdCLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs4QkFSaEM7Q0FnRkMsQUF4RUQsSUF3RUM7U0F2RVksbUJBQW1COzs7SUFDOUIsdUNBQStEOztJQUMvRCxzQ0FBNkQ7O0lBRTdELHNDQUFnRTs7SUFDaEUsd0NBQTBFOztJQUMxRSwwQ0FBaUU7O0lBQ2pFLDZDQUFpRjs7SUFFakYsMkNBQXFFOztJQUNyRSw4Q0FBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tICdAbmdyeC9lbnRpdHknO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXIsIERhZmZPcmRlclRvdGFsIH0gZnJvbSAnQGRhZmZvZGlsL29yZGVyJztcbmltcG9ydCB7IERhZmZPcmRlckZhY2FkZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9vcmRlci9zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncm9vdCd9KVxuZXhwb3J0IGNsYXNzIE1vY2tEYWZmT3JkZXJGYWNhZGUgaW1wbGVtZW50cyBEYWZmT3JkZXJGYWNhZGVJbnRlcmZhY2Uge1xuICBsb2FkaW5nJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgZXJyb3JzJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZ1tdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXG4gIG9yZGVycyQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmT3JkZXJbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgb3JkZXJJZHMkOiBCZWhhdmlvclN1YmplY3Q8KHN0cmluZyB8IG51bWJlcilbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcbiAgb3JkZXJDb3VudCQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgb3JkZXJFbnRpdGllcyQ6IEJlaGF2aW9yU3ViamVjdDxEaWN0aW9uYXJ5PERhZmZPcmRlcj4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG5cbiAgcGxhY2VkT3JkZXIkOiBCZWhhdmlvclN1YmplY3Q8RGFmZk9yZGVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gIGhhc1BsYWNlZE9yZGVyJDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgZ2V0T3JkZXIkKG9yZGVySWQ6IERhZmZPcmRlclsnaWQnXSk6IEJlaGF2aW9yU3ViamVjdDxEYWZmT3JkZXI+IHtcbiAgICByZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKVxuICB9XG5cbiAgZ2V0VG90YWxzJChvcmRlcklkOiBEYWZmT3JkZXJbJ2lkJ10pOiBCZWhhdmlvclN1YmplY3Q8RGFmZk9yZGVyWyd0b3RhbHMnXT4ge1xuICAgIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKVxuICB9XG5cbiAgZ2V0QXBwbGllZENvZGVzJChvcmRlcklkOiBEYWZmT3JkZXJbJ2lkJ10pOiBCZWhhdmlvclN1YmplY3Q8RGFmZk9yZGVyWydhcHBsaWVkX2NvZGVzJ10+IHtcbiAgICByZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChbXSlcbiAgfVxuXG4gIGdldEl0ZW1zJChvcmRlcklkOiBEYWZmT3JkZXJbJ2lkJ10pOiBCZWhhdmlvclN1YmplY3Q8RGFmZk9yZGVyWydpdGVtcyddPiB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QoW10pXG4gIH1cblxuICBnZXRCaWxsaW5nQWRkcmVzc2VzJChvcmRlcklkOiBEYWZmT3JkZXJbJ2lkJ10pOiBCZWhhdmlvclN1YmplY3Q8RGFmZk9yZGVyWydiaWxsaW5nX2FkZHJlc3NlcyddPiB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QoW10pXG4gIH1cblxuICBnZXRTaGlwcGluZ0FkZHJlc3NlcyQob3JkZXJJZDogRGFmZk9yZGVyWydpZCddKTogQmVoYXZpb3JTdWJqZWN0PERhZmZPcmRlclsnc2hpcHBpbmdfYWRkcmVzc2VzJ10+IHtcbiAgICByZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChbXSlcbiAgfVxuXG4gIGdldFNoaXBtZW50cyQob3JkZXJJZDogRGFmZk9yZGVyWydpZCddKTogQmVoYXZpb3JTdWJqZWN0PERhZmZPcmRlclsnc2hpcG1lbnRzJ10+IHtcbiAgICByZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChbXSlcbiAgfVxuXG4gIGdldFBheW1lbnQkKG9yZGVySWQ6IERhZmZPcmRlclsnaWQnXSk6IEJlaGF2aW9yU3ViamVjdDxEYWZmT3JkZXJbJ3BheW1lbnQnXT4ge1xuICAgIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpXG4gIH1cblxuICBnZXRJbnZvaWNlcyQob3JkZXJJZDogRGFmZk9yZGVyWydpZCddKTogQmVoYXZpb3JTdWJqZWN0PERhZmZPcmRlclsnaW52b2ljZXMnXT4ge1xuICAgIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKVxuICB9XG5cbiAgZ2V0Q3JlZGl0cyQob3JkZXJJZDogRGFmZk9yZGVyWydpZCddKTogQmVoYXZpb3JTdWJqZWN0PERhZmZPcmRlclsnY3JlZGl0cyddPiB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QoW10pXG4gIH1cbiAgZ2V0R3JhbmRUb3RhbCQob3JkZXJJZDogRGFmZk9yZGVyWydpZCddKTogQmVoYXZpb3JTdWJqZWN0PERhZmZPcmRlclRvdGFsPiB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QobnVsbClcbiAgfTtcbiAgZ2V0U3VidG90YWwkKG9yZGVySWQ6IERhZmZPcmRlclsnaWQnXSk6IEJlaGF2aW9yU3ViamVjdDxEYWZmT3JkZXJUb3RhbD4ge1xuICAgIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpXG4gIH07XG4gIGdldFNoaXBwaW5nVG90YWwkKG9yZGVySWQ6IERhZmZPcmRlclsnaWQnXSk6IEJlaGF2aW9yU3ViamVjdDxEYWZmT3JkZXJUb3RhbD4ge1xuICAgIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpXG4gIH07XG4gIGdldERpc2NvdW50VG90YWwkKG9yZGVySWQ6IERhZmZPcmRlclsnaWQnXSk6IEJlaGF2aW9yU3ViamVjdDxEYWZmT3JkZXJUb3RhbD4ge1xuICAgIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpXG4gIH07XG4gIGhhc0Rpc2NvdW50JChvcmRlcklkOiBEYWZmT3JkZXJbJ2lkJ10pOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcbiAgfTtcbiAgZ2V0VGF4VG90YWwkKG9yZGVySWQ6IERhZmZPcmRlclsnaWQnXSk6IEJlaGF2aW9yU3ViamVjdDxEYWZmT3JkZXJUb3RhbD4ge1xuICAgIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpXG4gIH07XG5cbiAgZGlzcGF0Y2goYWN0aW9uOiBBY3Rpb24pIHt9O1xufVxuIl19