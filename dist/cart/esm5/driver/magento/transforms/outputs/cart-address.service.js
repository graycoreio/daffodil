/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Transforms magento addresses into an object usable by daffodil.
 */
var DaffMagentoCartAddressTransformer = /** @class */ (function () {
    function DaffMagentoCartAddressTransformer() {
    }
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param address the address from a magento cart query.
     */
    /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param {?} address the address from a magento cart query.
     * @return {?}
     */
    DaffMagentoCartAddressTransformer.prototype.transform = /**
     * Transforms the magento MagentoCart from the magento cart query into a DaffCartAddress.
     * @param {?} address the address from a magento cart query.
     * @return {?}
     */
    function (address) {
        return address ? tslib_1.__assign({ magento_address: address }, { street: address.street[0], city: address.city, region: address.region.code, country: address.country.label, country_id: address.country.code, postcode: address.postcode, firstname: address.firstname, lastname: address.lastname, telephone: address.telephone, email: address.email, address_id: null, suffix: null, middlename: null, prefix: null, address_type: null }) : null;
    };
    DaffMagentoCartAddressTransformer.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DaffMagentoCartAddressTransformer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartAddressTransformer_Factory() { return new DaffMagentoCartAddressTransformer(); }, token: DaffMagentoCartAddressTransformer, providedIn: "root" });
    return DaffMagentoCartAddressTransformer;
}());
export { DaffMagentoCartAddressTransformer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbInRyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LWFkZHJlc3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBUzNDO0lBQUE7S0FrQ0M7SUE5QkM7OztPQUdHOzs7Ozs7SUFDSCxxREFBUzs7Ozs7SUFBVCxVQUFVLE9BQTJCO1FBQ25DLE9BQU8sT0FBTyxDQUFDLENBQUMsa0JBQ1gsRUFBQyxlQUFlLEVBQUUsT0FBTyxFQUFDLElBRzdCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUN6QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFDbEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUMzQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQzlCLFVBQVUsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFDaEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBRzFCLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUM1QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFDMUIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQzVCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxFQUdwQixVQUFVLEVBQUUsSUFBSSxFQUNoQixNQUFNLEVBQUUsSUFBSSxFQUNaLFVBQVUsRUFBRSxJQUFJLEVBQ2hCLE1BQU0sRUFBRSxJQUFJLEVBQ1osWUFBWSxFQUFFLElBQUksSUFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQTtJQUNWLENBQUM7O2dCQWpDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NENBWEQ7Q0EyQ0MsQUFsQ0QsSUFrQ0M7U0EvQlksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5cbmltcG9ydCB7IE1hZ2VudG9DYXJ0QWRkcmVzcyB9IGZyb20gJy4uLy4uL21vZGVscy9yZXNwb25zZXMvY2FydC1hZGRyZXNzJztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIG1hZ2VudG8gYWRkcmVzc2VzIGludG8gYW4gb2JqZWN0IHVzYWJsZSBieSBkYWZmb2RpbC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXJ0QWRkcmVzc1RyYW5zZm9ybWVyIHtcbiAgLyoqXG4gICAqIFRyYW5zZm9ybXMgdGhlIG1hZ2VudG8gTWFnZW50b0NhcnQgZnJvbSB0aGUgbWFnZW50byBjYXJ0IHF1ZXJ5IGludG8gYSBEYWZmQ2FydEFkZHJlc3MuXG4gICAqIEBwYXJhbSBhZGRyZXNzIHRoZSBhZGRyZXNzIGZyb20gYSBtYWdlbnRvIGNhcnQgcXVlcnkuXG4gICAqL1xuICB0cmFuc2Zvcm0oYWRkcmVzczogTWFnZW50b0NhcnRBZGRyZXNzKTogRGFmZkNhcnRBZGRyZXNzIHtcbiAgICByZXR1cm4gYWRkcmVzcyA/IHtcbiAgICAgIC4uLnttYWdlbnRvX2FkZHJlc3M6IGFkZHJlc3N9LFxuXG4gICAgICAvLyBhZGRyZXNzXG4gICAgICBzdHJlZXQ6IGFkZHJlc3Muc3RyZWV0WzBdLFxuICAgICAgY2l0eTogYWRkcmVzcy5jaXR5LFxuICAgICAgcmVnaW9uOiBhZGRyZXNzLnJlZ2lvbi5jb2RlLFxuICAgICAgY291bnRyeTogYWRkcmVzcy5jb3VudHJ5LmxhYmVsLFxuICAgICAgY291bnRyeV9pZDogYWRkcmVzcy5jb3VudHJ5LmNvZGUsXG4gICAgICBwb3N0Y29kZTogYWRkcmVzcy5wb3N0Y29kZSxcblxuICAgICAgLy8gcGVyc29uYWwgYWRkcmVzc1xuICAgICAgZmlyc3RuYW1lOiBhZGRyZXNzLmZpcnN0bmFtZSxcbiAgICAgIGxhc3RuYW1lOiBhZGRyZXNzLmxhc3RuYW1lLFxuICAgICAgdGVsZXBob25lOiBhZGRyZXNzLnRlbGVwaG9uZSxcbiAgICAgIGVtYWlsOiBhZGRyZXNzLmVtYWlsLFxuXG4gICAgICAvLyBUT0RPOiBpbXBsZW1lbnRcbiAgICAgIGFkZHJlc3NfaWQ6IG51bGwsXG4gICAgICBzdWZmaXg6IG51bGwsXG4gICAgICBtaWRkbGVuYW1lOiBudWxsLFxuICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgYWRkcmVzc190eXBlOiBudWxsLFxuICAgIH0gOiBudWxsXG4gIH1cbn1cbiJdfQ==