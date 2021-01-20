/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class MockDaffOrderFacade {
    constructor() {
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
    getOrder$(orderId) {
        return new BehaviorSubject(null);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getTotals$(orderId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getAppliedCodes$(orderId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getItems$(orderId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getBillingAddresses$(orderId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getShippingAddresses$(orderId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getShipments$(orderId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getPayment$(orderId) {
        return new BehaviorSubject(null);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getInvoices$(orderId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getCredits$(orderId) {
        return new BehaviorSubject([]);
    }
    /**
     * @param {?} orderId
     * @return {?}
     */
    getGrandTotal$(orderId) {
        return new BehaviorSubject(null);
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    getSubtotal$(orderId) {
        return new BehaviorSubject(null);
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    getShippingTotal$(orderId) {
        return new BehaviorSubject(null);
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    getDiscountTotal$(orderId) {
        return new BehaviorSubject(null);
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    hasDiscount$(orderId) {
        return new BehaviorSubject(false);
    }
    ;
    /**
     * @param {?} orderId
     * @return {?}
     */
    getTaxTotal$(orderId) {
        return new BehaviorSubject(null);
    }
    ;
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) { }
    ;
}
MockDaffOrderFacade.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ MockDaffOrderFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function MockDaffOrderFacade_Factory() { return new MockDaffOrderFacade(); }, token: MockDaffOrderFacade, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1vcmRlci1mYWNhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvb3JkZXIvc3RhdGUvdGVzdGluZy8iLCJzb3VyY2VzIjpbIm1vY2stb3JkZXItZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxtQkFBbUI7SUFEaEM7UUFFRSxhQUFRLEdBQTZCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELFlBQU8sR0FBOEIsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFN0QsWUFBTyxHQUFpQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoRSxjQUFTLEdBQXlDLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLGdCQUFXLEdBQTRCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLG1CQUFjLEdBQTJDLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWpGLGlCQUFZLEdBQStCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JFLG9CQUFlLEdBQTZCLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBNkR4RTs7Ozs7SUEzREMsU0FBUyxDQUFDLE9BQXdCO1FBQ2hDLE9BQU8sSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBd0I7UUFDakMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNoQyxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLE9BQXdCO1FBQ3ZDLE9BQU8sSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsT0FBd0I7UUFDaEMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNoQyxDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLE9BQXdCO1FBQzNDLE9BQU8sSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxPQUF3QjtRQUM1QyxPQUFPLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQXdCO1FBQ3BDLE9BQU8sSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBd0I7UUFDbEMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxPQUF3QjtRQUNuQyxPQUFPLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXdCO1FBQ2xDLE9BQU8sSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUE7SUFDaEMsQ0FBQzs7Ozs7SUFDRCxjQUFjLENBQUMsT0FBd0I7UUFDckMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFDRixZQUFZLENBQUMsT0FBd0I7UUFDbkMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFDRixpQkFBaUIsQ0FBQyxPQUF3QjtRQUN4QyxPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFBQSxDQUFDOzs7OztJQUNGLGlCQUFpQixDQUFDLE9BQXdCO1FBQ3hDLE9BQU8sSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUFBLENBQUM7Ozs7O0lBQ0YsWUFBWSxDQUFDLE9BQXdCO1FBQ25DLE9BQU8sSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUFBLENBQUM7Ozs7O0lBQ0YsWUFBWSxDQUFDLE9BQXdCO1FBQ25DLE9BQU8sSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUFBLENBQUM7Ozs7O0lBRUYsUUFBUSxDQUFDLE1BQWMsSUFBRyxDQUFDO0lBQUEsQ0FBQzs7O1lBdkU3QixVQUFVLFNBQUMsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDOzs7OztJQUU5Qix1Q0FBK0Q7O0lBQy9ELHNDQUE2RDs7SUFFN0Qsc0NBQWdFOztJQUNoRSx3Q0FBMEU7O0lBQzFFLDBDQUFpRTs7SUFDakUsNkNBQWlGOztJQUVqRiwyQ0FBcUU7O0lBQ3JFLDhDQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZPcmRlciwgRGFmZk9yZGVyVG90YWwgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuaW1wb3J0IHsgRGFmZk9yZGVyRmFjYWRlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL29yZGVyL3N0YXRlJztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTW9ja0RhZmZPcmRlckZhY2FkZSBpbXBsZW1lbnRzIERhZmZPcmRlckZhY2FkZUludGVyZmFjZSB7XG4gIGxvYWRpbmckOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBlcnJvcnMkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cbiAgb3JkZXJzJDogQmVoYXZpb3JTdWJqZWN0PERhZmZPcmRlcltdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBvcmRlcklkcyQ6IEJlaGF2aW9yU3ViamVjdDwoc3RyaW5nIHwgbnVtYmVyKVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuICBvcmRlckNvdW50JDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBvcmRlckVudGl0aWVzJDogQmVoYXZpb3JTdWJqZWN0PERpY3Rpb25hcnk8RGFmZk9yZGVyPj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcblxuICBwbGFjZWRPcmRlciQ6IEJlaGF2aW9yU3ViamVjdDxEYWZmT3JkZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgaGFzUGxhY2VkT3JkZXIkOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGZhbHNlKTtcblxuICBnZXRPcmRlciQob3JkZXJJZDogRGFmZk9yZGVyWydpZCddKTogQmVoYXZpb3JTdWJqZWN0PERhZmZPcmRlcj4ge1xuICAgIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpXG4gIH1cblxuICBnZXRUb3RhbHMkKG9yZGVySWQ6IERhZmZPcmRlclsnaWQnXSk6IEJlaGF2aW9yU3ViamVjdDxEYWZmT3JkZXJbJ3RvdGFscyddPiB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QoW10pXG4gIH1cblxuICBnZXRBcHBsaWVkQ29kZXMkKG9yZGVySWQ6IERhZmZPcmRlclsnaWQnXSk6IEJlaGF2aW9yU3ViamVjdDxEYWZmT3JkZXJbJ2FwcGxpZWRfY29kZXMnXT4ge1xuICAgIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKVxuICB9XG5cbiAgZ2V0SXRlbXMkKG9yZGVySWQ6IERhZmZPcmRlclsnaWQnXSk6IEJlaGF2aW9yU3ViamVjdDxEYWZmT3JkZXJbJ2l0ZW1zJ10+IHtcbiAgICByZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChbXSlcbiAgfVxuXG4gIGdldEJpbGxpbmdBZGRyZXNzZXMkKG9yZGVySWQ6IERhZmZPcmRlclsnaWQnXSk6IEJlaGF2aW9yU3ViamVjdDxEYWZmT3JkZXJbJ2JpbGxpbmdfYWRkcmVzc2VzJ10+IHtcbiAgICByZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChbXSlcbiAgfVxuXG4gIGdldFNoaXBwaW5nQWRkcmVzc2VzJChvcmRlcklkOiBEYWZmT3JkZXJbJ2lkJ10pOiBCZWhhdmlvclN1YmplY3Q8RGFmZk9yZGVyWydzaGlwcGluZ19hZGRyZXNzZXMnXT4ge1xuICAgIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKVxuICB9XG5cbiAgZ2V0U2hpcG1lbnRzJChvcmRlcklkOiBEYWZmT3JkZXJbJ2lkJ10pOiBCZWhhdmlvclN1YmplY3Q8RGFmZk9yZGVyWydzaGlwbWVudHMnXT4ge1xuICAgIHJldHVybiBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKVxuICB9XG5cbiAgZ2V0UGF5bWVudCQob3JkZXJJZDogRGFmZk9yZGVyWydpZCddKTogQmVoYXZpb3JTdWJqZWN0PERhZmZPcmRlclsncGF5bWVudCddPiB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QobnVsbClcbiAgfVxuXG4gIGdldEludm9pY2VzJChvcmRlcklkOiBEYWZmT3JkZXJbJ2lkJ10pOiBCZWhhdmlvclN1YmplY3Q8RGFmZk9yZGVyWydpbnZvaWNlcyddPiB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QoW10pXG4gIH1cblxuICBnZXRDcmVkaXRzJChvcmRlcklkOiBEYWZmT3JkZXJbJ2lkJ10pOiBCZWhhdmlvclN1YmplY3Q8RGFmZk9yZGVyWydjcmVkaXRzJ10+IHtcbiAgICByZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChbXSlcbiAgfVxuICBnZXRHcmFuZFRvdGFsJChvcmRlcklkOiBEYWZmT3JkZXJbJ2lkJ10pOiBCZWhhdmlvclN1YmplY3Q8RGFmZk9yZGVyVG90YWw+IHtcbiAgICByZXR1cm4gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKVxuICB9O1xuICBnZXRTdWJ0b3RhbCQob3JkZXJJZDogRGFmZk9yZGVyWydpZCddKTogQmVoYXZpb3JTdWJqZWN0PERhZmZPcmRlclRvdGFsPiB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QobnVsbClcbiAgfTtcbiAgZ2V0U2hpcHBpbmdUb3RhbCQob3JkZXJJZDogRGFmZk9yZGVyWydpZCddKTogQmVoYXZpb3JTdWJqZWN0PERhZmZPcmRlclRvdGFsPiB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QobnVsbClcbiAgfTtcbiAgZ2V0RGlzY291bnRUb3RhbCQob3JkZXJJZDogRGFmZk9yZGVyWydpZCddKTogQmVoYXZpb3JTdWJqZWN0PERhZmZPcmRlclRvdGFsPiB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QobnVsbClcbiAgfTtcbiAgaGFzRGlzY291bnQkKG9yZGVySWQ6IERhZmZPcmRlclsnaWQnXSk6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QoZmFsc2UpO1xuICB9O1xuICBnZXRUYXhUb3RhbCQob3JkZXJJZDogRGFmZk9yZGVyWydpZCddKTogQmVoYXZpb3JTdWJqZWN0PERhZmZPcmRlclRvdGFsPiB7XG4gICAgcmV0dXJuIG5ldyBCZWhhdmlvclN1YmplY3QobnVsbClcbiAgfTtcblxuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge307XG59XG4iXX0=