/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffCartItemFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
var DaffInMemoryBackendCartItemsService = /** @class */ (function () {
    function DaffInMemoryBackendCartItemsService(cartItemFactory) {
        this.cartItemFactory = cartItemFactory;
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.get = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var body;
            /** @type {?} */
            var action = _this.getAction(reqInfo);
            if (action) {
                body = _this.getItem(reqInfo, action);
            }
            else {
                body = _this.listItems(reqInfo);
            }
            return {
                body: body,
                status: STATUS.OK
            };
        }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.put = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.updateItem(reqInfo, _this.getAction(reqInfo)),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.post = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.addItem(reqInfo),
            status: STATUS.OK
        }); }));
    };
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.delete = /**
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        var _this = this;
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        function () { return ({
            body: _this.deleteItem(reqInfo, _this.getAction(reqInfo)),
            status: STATUS.OK
        }); }));
    };
    /**
     * Gets whatever follows the cart ID section of the request URL.
     */
    /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.getAction = /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.url.replace("/" + reqInfo.resourceUrl + reqInfo.id + "/", '');
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.getCart = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    };
    /**
     * @private
     * @param {?} itemInput
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.transformItemInput = /**
     * @private
     * @param {?} itemInput
     * @return {?}
     */
    function (itemInput) {
        return tslib_1.__assign({}, this.cartItemFactory.create(), itemInput, { product_id: itemInput.productId });
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.listItems = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        return this.getCart(reqInfo).items;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.getItem = /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    function (reqInfo, itemId) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        return cart.items.find((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var item_id = _a.item_id;
            return String(item_id) === String(itemId);
        }));
    };
    /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.updateItem = /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    function (reqInfo, itemId) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        /** @type {?} */
        var item = reqInfo.utils.getJsonBody(reqInfo.req);
        /** @type {?} */
        var itemIndex = cart.items.findIndex((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var item_id = _a.item_id;
            return String(itemId) === String(item_id);
        }));
        cart.items[itemIndex] = tslib_1.__assign({}, cart.items[itemIndex], item);
        cart.items = Object.assign([], cart.items);
        return cart;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.addItem = /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    function (reqInfo) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        /** @type {?} */
        var itemInput = reqInfo.utils.getJsonBody(reqInfo.req);
        /** @type {?} */
        var existingCartItemIndex = cart.items.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.product_id === itemInput.productId; }));
        if (existingCartItemIndex > -1) {
            cart.items[existingCartItemIndex].qty = cart.items[existingCartItemIndex].qty + itemInput.qty;
        }
        else {
            cart.items.push(this.transformItemInput(itemInput));
        }
        cart.items = Object.assign([], cart.items);
        return cart;
    };
    /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    DaffInMemoryBackendCartItemsService.prototype.deleteItem = /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    function (reqInfo, itemId) {
        /** @type {?} */
        var cart = this.getCart(reqInfo);
        /** @type {?} */
        var itemIndex = cart.items.findIndex((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var item_id = _a.item_id;
            return String(itemId) === String(item_id);
        }));
        cart.items.splice(itemIndex, 1);
        cart.items = Object.assign([], cart.items);
        return cart;
    };
    DaffInMemoryBackendCartItemsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffInMemoryBackendCartItemsService.ctorParameters = function () { return [
        { type: DaffCartItemFactory }
    ]; };
    /** @nocollapse */ DaffInMemoryBackendCartItemsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartItemsService_Factory() { return new DaffInMemoryBackendCartItemsService(i0.ɵɵinject(i1.DaffCartItemFactory)); }, token: DaffInMemoryBackendCartItemsService, providedIn: "root" });
    return DaffInMemoryBackendCartItemsService;
}());
export { DaffInMemoryBackendCartItemsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartItemsService.prototype.cartItemFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImJhY2tlbmQvY2FydC1pdGVtcy9jYXJ0LWl0ZW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQWUsTUFBTSwyQkFBMkIsQ0FBQztBQVNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRTdEO0lBSUUsNkNBQW9CLGVBQW9DO1FBQXBDLG9CQUFlLEdBQWYsZUFBZSxDQUFxQjtJQUFHLENBQUM7Ozs7O0lBRTVELGlEQUFHOzs7O0lBQUgsVUFBSSxPQUFvQjtRQUF4QixpQkFnQkM7UUFmQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZTs7O1FBQUM7O2dCQUMvQixJQUFJOztnQkFDRixNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFFdEMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3RDO2lCQUFNO2dCQUNMLElBQUksR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hDO1lBRUQsT0FBTztnQkFDTCxJQUFJLE1BQUE7Z0JBQ0osTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2FBQ2xCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsaURBQUc7Ozs7SUFBSCxVQUFJLE9BQW9CO1FBQXhCLGlCQUtDO1FBSkMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLGNBQU0sT0FBQSxDQUFDO1lBQzFDLElBQUksRUFBRSxLQUFJLENBQUMs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SyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLEVBQVM7Z0JBQVIsb0JBQU87WUFBTSxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQWxDLENBQWtDLEVBQUM7UUFFM0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXpDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBOUdGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsbUJBQW1COzs7OENBVjVCO0NBMkhDLEFBL0dELElBK0dDO1NBNUdZLG1DQUFtQzs7Ozs7O0lBQ2xDLDhEQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNUQVRVUywgUmVxdWVzdEluZm8gfSBmcm9tICdhbmd1bGFyLWluLW1lbW9yeS13ZWItYXBpJztcblxuaW1wb3J0IHtcbiAgRGFmZkNhcnQsXG4gIERhZmZDYXJ0SXRlbSxcbiAgRGFmZkNhcnRJdGVtSW5wdXRcbn0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZkluTWVtb3J5RGF0YVNlcnZpY2VJbnRlcmZhY2UgfSBmcm9tICdAZGFmZm9kaWwvY29yZS90ZXN0aW5nJztcblxuaW1wb3J0IHsgRGFmZkNhcnRJdGVtRmFjdG9yeSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L3Rlc3RpbmcnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBEYWZmSW5NZW1vcnlCYWNrZW5kQ2FydEl0ZW1zU2VydmljZSBpbXBsZW1lbnRzIERhZmZJbk1lbW9yeURhdGFTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjYXJ0SXRlbUZhY3Rvcnk6IERhZmZDYXJ0SXRlbUZhY3RvcnkpIHt9XG5cbiAgZ2V0KHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+IHtcbiAgICAgIGxldCBib2R5O1xuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5nZXRBY3Rpb24ocmVxSW5mbyk7XG5cbiAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgYm9keSA9IHRoaXMuZ2V0SXRlbShyZXFJbmZvLCBhY3Rpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9keSA9IHRoaXMubGlzdEl0ZW1zKHJlcUluZm8pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBib2R5LFxuICAgICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1dChyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgYm9keTogdGhpcy51cGRhdGVJdGVtKHJlcUluZm8sIHRoaXMuZ2V0QWN0aW9uKHJlcUluZm8pKSxcbiAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgfSkpO1xuICB9XG5cbiAgcG9zdChyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgYm9keTogdGhpcy5hZGRJdGVtKHJlcUluZm8pLFxuICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICB9KSk7XG4gIH1cblxuICBkZWxldGUocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4gKHtcbiAgICAgIGJvZHk6IHRoaXMuZGVsZXRlSXRlbShyZXFJbmZvLCB0aGlzLmdldEFjdGlvbihyZXFJbmZvKSksXG4gICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHdoYXRldmVyIGZvbGxvd3MgdGhlIGNhcnQgSUQgc2VjdGlvbiBvZiB0aGUgcmVxdWVzdCBVUkwuXG4gICAqL1xuICBwcml2YXRlIGdldEFjdGlvbihyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHJlcUluZm8udXJsLnJlcGxhY2UoYC8ke3JlcUluZm8ucmVzb3VyY2VVcmx9JHtyZXFJbmZvLmlkfS9gLCAnJylcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2FydChyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IERhZmZDYXJ0IHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5maW5kQnlJZDxEYWZmQ2FydD4ocmVxSW5mby5jb2xsZWN0aW9uLCBOdW1iZXIocmVxSW5mby5pZCkpXG4gIH1cblxuICBwcml2YXRlIHRyYW5zZm9ybUl0ZW1JbnB1dChpdGVtSW5wdXQ6IERhZmZDYXJ0SXRlbUlucHV0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuY2FydEl0ZW1GYWN0b3J5LmNyZWF0ZSgpLFxuICAgICAgLi4uaXRlbUlucHV0LFxuICAgICAgcHJvZHVjdF9pZDogaXRlbUlucHV0LnByb2R1Y3RJZFxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbGlzdEl0ZW1zKHJlcUluZm8pOiBEYWZmQ2FydEl0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q2FydChyZXFJbmZvKS5pdGVtcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SXRlbShyZXFJbmZvOiBSZXF1ZXN0SW5mbywgaXRlbUlkOiBEYWZmQ2FydEl0ZW1bJ2l0ZW1faWQnXSk6IERhZmZDYXJ0SXRlbSB7XG4gICAgY29uc3QgY2FydCA9IHRoaXMuZ2V0Q2FydChyZXFJbmZvKTtcblxuICAgIHJldHVybiBjYXJ0Lml0ZW1zLmZpbmQoKHtpdGVtX2lkfSkgPT4gU3RyaW5nKGl0ZW1faWQpID09PSBTdHJpbmcoaXRlbUlkKSlcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSXRlbShyZXFJbmZvOiBSZXF1ZXN0SW5mbywgaXRlbUlkOiBEYWZmQ2FydEl0ZW1bJ2l0ZW1faWQnXSk6IERhZmZDYXJ0IHtcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5nZXRDYXJ0KHJlcUluZm8pO1xuICAgIGNvbnN0IGl0ZW0gPSByZXFJbmZvLnV0aWxzLmdldEpzb25Cb2R5KHJlcUluZm8ucmVxKTtcbiAgICBjb25zdCBpdGVtSW5kZXggPSBjYXJ0Lml0ZW1zLmZpbmRJbmRleCgoe2l0ZW1faWR9KSA9PiBTdHJpbmcoaXRlbUlkKSA9PT0gU3RyaW5nKGl0ZW1faWQpKVxuXG4gICAgY2FydC5pdGVtc1tpdGVtSW5kZXhdID0ge1xuICAgICAgLi4uY2FydC5pdGVtc1tpdGVtSW5kZXhdLFxuICAgICAgLi4uaXRlbVxuICAgIH07XG5cdFx0Y2FydC5pdGVtcyA9IE9iamVjdC5hc3NpZ24oW10sIGNhcnQuaXRlbXMpO1xuXG4gICAgcmV0dXJuIGNhcnRcbiAgfVxuXG4gIHByaXZhdGUgYWRkSXRlbShyZXFJbmZvOiBSZXF1ZXN0SW5mbyk6IERhZmZDYXJ0IHtcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5nZXRDYXJ0KHJlcUluZm8pO1xuXHRcdGNvbnN0IGl0ZW1JbnB1dCA9IHJlcUluZm8udXRpbHMuZ2V0SnNvbkJvZHkocmVxSW5mby5yZXEpO1xuXHRcdGNvbnN0IGV4aXN0aW5nQ2FydEl0ZW1JbmRleCA9IGNhcnQuaXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5wcm9kdWN0X2lkID09PSBpdGVtSW5wdXQucHJvZHVjdElkKTtcblx0XHRpZihleGlzdGluZ0NhcnRJdGVtSW5kZXggPiAtMSkge1xuXHRcdFx0Y2FydC5pdGVtc1tleGlzdGluZ0NhcnRJdGVtSW5kZXhdLnF0eSA9IGNhcnQuaXRlbXNbZXhpc3RpbmdDYXJ0SXRlbUluZGV4XS5xdHkgKyBpdGVtSW5wdXQucXR5O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYXJ0Lml0ZW1zLnB1c2godGhpcy50cmFuc2Zvcm1JdGVtSW5wdXQoaXRlbUlucHV0KSk7XG5cdFx0fVxuXHRcdGNhcnQuaXRlbXMgPSBPYmplY3QuYXNzaWduKFtdLCBjYXJ0Lml0ZW1zKTtcblxuICAgIHJldHVybiBjYXJ0O1xuICB9XG5cbiAgcHJpdmF0ZSBkZWxldGVJdGVtKHJlcUluZm86IFJlcXVlc3RJbmZvLCBpdGVtSWQ6IERhZmZDYXJ0SXRlbVsnaXRlbV9pZCddKTogRGFmZkNhcnQge1xuICAgIGNvbnN0IGNhcnQgPSB0aGlzLmdldENhcnQocmVxSW5mbyk7XG4gICAgY29uc3QgaXRlbUluZGV4ID0gY2FydC5pdGVtcy5maW5kSW5kZXgoKHtpdGVtX2lkfSkgPT4gU3RyaW5nKGl0ZW1JZCkgPT09IFN0cmluZyhpdGVtX2lkKSk7XG5cblx0XHRjYXJ0Lml0ZW1zLnNwbGljZShpdGVtSW5kZXgsIDEpO1xuXHRcdGNhcnQuaXRlbXMgPSBPYmplY3QuYXNzaWduKFtdLCBjYXJ0Lml0ZW1zKTtcblxuICAgIHJldHVybiBjYXJ0O1xuICB9XG59XG4iXX0=