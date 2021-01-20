/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class DaffMagentoCartAddressInputTransformer {
    /**
     * @param {?} cartAddress
     * @return {?}
     */
    transform(cartAddress) {
        return {
            city: cartAddress.city,
            country_code: cartAddress.country,
            firstname: cartAddress.firstname,
            lastname: cartAddress.lastname,
            postcode: cartAddress.postcode,
            region: String(cartAddress.region),
            save_in_address_book: false,
            street: [cartAddress.street],
            telephone: cartAddress.telephone,
        };
    }
}
DaffMagentoCartAddressInputTransformer.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInRyYW5zZm9ybXMvaW5wdXRzL2NhcnQtYWRkcmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzNDLE1BQU0sT0FBTyxzQ0FBc0M7Ozs7O0lBQ2pELFNBQVMsQ0FBQyxXQUFxQztRQUM3QyxPQUFPO1lBQ0wsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJO1lBQ3RCLFlBQVksRUFBRSxXQUFXLENBQUMsT0FBTztZQUNqQyxTQUFTLEVBQUUsV0FBVyxDQUFDLFNBQVM7WUFDaEMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxRQUFRO1lBQzlCLFFBQVEsRUFBRSxXQUFXLENBQUMsUUFBUTtZQUM5QixNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDbEMsb0JBQW9CLEVBQUUsS0FBSztZQUMzQixNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQzVCLFNBQVMsRUFBRSxXQUFXLENBQUMsU0FBUztTQUNqQyxDQUFBO0lBQ0gsQ0FBQzs7O1lBZEYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZkNhcnRBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuXG5pbXBvcnQgeyBNYWdlbnRvQ2FydEFkZHJlc3NJbnB1dCB9IGZyb20gJy4uLy4uL21vZGVscy9yZXF1ZXN0cy9jYXJ0LWFkZHJlc3MnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXJ0QWRkcmVzc0lucHV0VHJhbnNmb3JtZXIge1xuICB0cmFuc2Zvcm0oY2FydEFkZHJlc3M6IFBhcnRpYWw8RGFmZkNhcnRBZGRyZXNzPik6IE1hZ2VudG9DYXJ0QWRkcmVzc0lucHV0IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2l0eTogY2FydEFkZHJlc3MuY2l0eSxcbiAgICAgIGNvdW50cnlfY29kZTogY2FydEFkZHJlc3MuY291bnRyeSxcbiAgICAgIGZpcnN0bmFtZTogY2FydEFkZHJlc3MuZmlyc3RuYW1lLFxuICAgICAgbGFzdG5hbWU6IGNhcnRBZGRyZXNzLmxhc3RuYW1lLFxuICAgICAgcG9zdGNvZGU6IGNhcnRBZGRyZXNzLnBvc3Rjb2RlLFxuICAgICAgcmVnaW9uOiBTdHJpbmcoY2FydEFkZHJlc3MucmVnaW9uKSxcbiAgICAgIHNhdmVfaW5fYWRkcmVzc19ib29rOiBmYWxzZSxcbiAgICAgIHN0cmVldDogW2NhcnRBZGRyZXNzLnN0cmVldF0sXG4gICAgICB0ZWxlcGhvbmU6IGNhcnRBZGRyZXNzLnRlbGVwaG9uZSxcbiAgICB9XG4gIH1cbn1cbiJdfQ==