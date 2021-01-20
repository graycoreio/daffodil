/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { STATUS } from 'angular-in-memory-web-api';
import { DaffCartItemFactory } from '@daffodil/cart/testing';
import * as i0 from "@angular/core";
import * as i1 from "@daffodil/cart/testing";
export class DaffInMemoryBackendCartItemsService {
    /**
     * @param {?} cartItemFactory
     */
    constructor(cartItemFactory) {
        this.cartItemFactory = cartItemFactory;
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    get(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let body;
            /** @type {?} */
            const action = this.getAction(reqInfo);
            if (action) {
                body = this.getItem(reqInfo, action);
            }
            else {
                body = this.listItems(reqInfo);
            }
            return {
                body,
                status: STATUS.OK
            };
        }));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    put(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.updateItem(reqInfo, this.getAction(reqInfo)),
            status: STATUS.OK
        })));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    post(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.addItem(reqInfo),
            status: STATUS.OK
        })));
    }
    /**
     * @param {?} reqInfo
     * @return {?}
     */
    delete(reqInfo) {
        return reqInfo.utils.createResponse$((/**
         * @return {?}
         */
        () => ({
            body: this.deleteItem(reqInfo, this.getAction(reqInfo)),
            status: STATUS.OK
        })));
    }
    /**
     * Gets whatever follows the cart ID section of the request URL.
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getAction(reqInfo) {
        return reqInfo.url.replace(`/${reqInfo.resourceUrl}${reqInfo.id}/`, '');
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    getCart(reqInfo) {
        return reqInfo.utils.findById(reqInfo.collection, Number(reqInfo.id));
    }
    /**
     * @private
     * @param {?} itemInput
     * @return {?}
     */
    transformItemInput(itemInput) {
        return Object.assign({}, this.cartItemFactory.create(), itemInput, { product_id: itemInput.productId });
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    listItems(reqInfo) {
        return this.getCart(reqInfo).items;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    getItem(reqInfo, itemId) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        return cart.items.find((/**
         * @param {?} __0
         * @return {?}
         */
        ({ item_id }) => String(item_id) === String(itemId)));
    }
    /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    updateItem(reqInfo, itemId) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        /** @type {?} */
        const item = reqInfo.utils.getJsonBody(reqInfo.req);
        /** @type {?} */
        const itemIndex = cart.items.findIndex((/**
         * @param {?} __0
         * @return {?}
         */
        ({ item_id }) => String(itemId) === String(item_id)));
        cart.items[itemIndex] = Object.assign({}, cart.items[itemIndex], item);
        cart.items = Object.assign([], cart.items);
        return cart;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @return {?}
     */
    addItem(reqInfo) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        /** @type {?} */
        const itemInput = reqInfo.utils.getJsonBody(reqInfo.req);
        /** @type {?} */
        const existingCartItemIndex = cart.items.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => item.product_id === itemInput.productId));
        if (existingCartItemIndex > -1) {
            cart.items[existingCartItemIndex].qty = cart.items[existingCartItemIndex].qty + itemInput.qty;
        }
        else {
            cart.items.push(this.transformItemInput(itemInput));
        }
        cart.items = Object.assign([], cart.items);
        return cart;
    }
    /**
     * @private
     * @param {?} reqInfo
     * @param {?} itemId
     * @return {?}
     */
    deleteItem(reqInfo, itemId) {
        /** @type {?} */
        const cart = this.getCart(reqInfo);
        /** @type {?} */
        const itemIndex = cart.items.findIndex((/**
         * @param {?} __0
         * @return {?}
         */
        ({ item_id }) => String(itemId) === String(item_id)));
        cart.items.splice(itemIndex, 1);
        cart.items = Object.assign([], cart.items);
        return cart;
    }
}
DaffInMemoryBackendCartItemsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffInMemoryBackendCartItemsService.ctorParameters = () => [
    { type: DaffCartItemFactory }
];
/** @nocollapse */ DaffInMemoryBackendCartItemsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffInMemoryBackendCartItemsService_Factory() { return new DaffInMemoryBackendCartItemsService(i0.ɵɵinject(i1.DaffCartItemFactory)); }, token: DaffInMemoryBackendCartItemsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffInMemoryBackendCartItemsService.prototype.cartItemFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NhcnQvZHJpdmVyL2luLW1lbW9yeS8iLCJzb3VyY2VzIjpbImJhY2tlbmQvY2FydC1pdGVtcy9jYXJ0LWl0ZW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBZSxNQUFNLDJCQUEyQixDQUFDO0FBU2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFLN0QsTUFBTSxPQUFPLG1DQUFtQzs7OztJQUM5QyxZQUFvQixlQUFvQztRQUFwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBcUI7SUFBRyxDQUFDOzs7OztJQUU1RCxHQUFHLENBQUMsT0FBb0I7UUFDdEIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLGVBQWU7OztRQUFDLEdBQUcsRUFBRTs7Z0JBQ3BDLElBQUk7O2tCQUNGLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUV0QyxJQUFJLE1BQU0sRUFBRTtnQkFDVixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDdEM7aUJBQU07Z0JBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDaEM7WUFFRCxPQUFPO2dCQUNMLElBQUk7Z0JBQ0osTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2FBQ2xCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsR0FBRyxDQUFDLE9BQW9CO1FBQ3RCLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxlQUFlOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE9B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RSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQTlHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxtQkFBbUI7Ozs7Ozs7O0lBTWQsOERBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU1RBVFVTLCBSZXF1ZXN0SW5mbyB9IGZyb20gJ2FuZ3VsYXItaW4tbWVtb3J5LXdlYi1hcGknO1xuXG5pbXBvcnQge1xuICBEYWZmQ2FydCxcbiAgRGFmZkNhcnRJdGVtLFxuICBEYWZmQ2FydEl0ZW1JbnB1dFxufSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmSW5NZW1vcnlEYXRhU2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcnO1xuXG5pbXBvcnQgeyBEYWZmQ2FydEl0ZW1GYWN0b3J5IH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvdGVzdGluZyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZJbk1lbW9yeUJhY2tlbmRDYXJ0SXRlbXNTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkluTWVtb3J5RGF0YVNlcnZpY2VJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhcnRJdGVtRmFjdG9yeTogRGFmZkNhcnRJdGVtRmFjdG9yeSkge31cblxuICBnZXQocmVxSW5mbzogUmVxdWVzdEluZm8pIHtcbiAgICByZXR1cm4gcmVxSW5mby51dGlscy5jcmVhdGVSZXNwb25zZSQoKCkgPT4ge1xuICAgICAgbGV0IGJvZHk7XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmdldEFjdGlvbihyZXFJbmZvKTtcblxuICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICBib2R5ID0gdGhpcy5nZXRJdGVtKHJlcUluZm8sIGFjdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBib2R5ID0gdGhpcy5saXN0SXRlbXMocmVxSW5mbyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJvZHksXG4gICAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHV0KHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG4gICAgICBib2R5OiB0aGlzLnVwZGF0ZUl0ZW0ocmVxSW5mbywgdGhpcy5nZXRBY3Rpb24ocmVxSW5mbykpLFxuICAgICAgc3RhdHVzOiBTVEFUVVMuT0tcbiAgICB9KSk7XG4gIH1cblxuICBwb3N0KHJlcUluZm86IFJlcXVlc3RJbmZvKSB7XG4gICAgcmV0dXJuIHJlcUluZm8udXRpbHMuY3JlYXRlUmVzcG9uc2UkKCgpID0+ICh7XG4gICAgICBib2R5OiB0aGlzLmFkZEl0ZW0ocmVxSW5mbyksXG4gICAgICBzdGF0dXM6IFNUQVRVUy5PS1xuICAgIH0pKTtcbiAgfVxuXG4gIGRlbGV0ZShyZXFJbmZvOiBSZXF1ZXN0SW5mbykge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmNyZWF0ZVJlc3BvbnNlJCgoKSA9PiAoe1xuICAgICAgYm9keTogdGhpcy5kZWxldGVJdGVtKHJlcUluZm8sIHRoaXMuZ2V0QWN0aW9uKHJlcUluZm8pKSxcbiAgICAgIHN0YXR1czogU1RBVFVTLk9LXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgd2hhdGV2ZXIgZm9sbG93cyB0aGUgY2FydCBJRCBzZWN0aW9uIG9mIHRoZSByZXF1ZXN0IFVSTC5cbiAgICovXG4gIHByaXZhdGUgZ2V0QWN0aW9uKHJlcUluZm86IFJlcXVlc3RJbmZvKTogc3RyaW5nIHtcbiAgICByZXR1cm4gcmVxSW5mby51cmwucmVwbGFjZShgLyR7cmVxSW5mby5yZXNvdXJjZVVybH0ke3JlcUluZm8uaWR9L2AsICcnKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYXJ0KHJlcUluZm86IFJlcXVlc3RJbmZvKTogRGFmZkNhcnQge1xuICAgIHJldHVybiByZXFJbmZvLnV0aWxzLmZpbmRCeUlkPERhZmZDYXJ0PihyZXFJbmZvLmNvbGxlY3Rpb24sIE51bWJlcihyZXFJbmZvLmlkKSlcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNmb3JtSXRlbUlucHV0KGl0ZW1JbnB1dDogRGFmZkNhcnRJdGVtSW5wdXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5jYXJ0SXRlbUZhY3RvcnkuY3JlYXRlKCksXG4gICAgICAuLi5pdGVtSW5wdXQsXG4gICAgICBwcm9kdWN0X2lkOiBpdGVtSW5wdXQucHJvZHVjdElkXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsaXN0SXRlbXMocmVxSW5mbyk6IERhZmZDYXJ0SXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDYXJ0KHJlcUluZm8pLml0ZW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJdGVtKHJlcUluZm86IFJlcXVlc3RJbmZvLCBpdGVtSWQ6IERhZmZDYXJ0SXRlbVsnaXRlbV9pZCddKTogRGFmZkNhcnRJdGVtIHtcbiAgICBjb25zdCBjYXJ0ID0gdGhpcy5nZXRDYXJ0KHJlcUluZm8pO1xuXG4gICAgcmV0dXJuIGNhcnQuaXRlbXMuZmluZCgoe2l0ZW1faWR9KSA9PiBTdHJpbmcoaXRlbV9pZCkgPT09IFN0cmluZyhpdGVtSWQpKVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJdGVtKHJlcUluZm86IFJlcXVlc3RJbmZvLCBpdGVtSWQ6IERhZmZDYXJ0SXRlbVsnaXRlbV9pZCddKTogRGFmZkNhcnQge1xuICAgIGNvbnN0IGNhcnQgPSB0aGlzLmdldENhcnQocmVxSW5mbyk7XG4gICAgY29uc3QgaXRlbSA9IHJlcUluZm8udXRpbHMuZ2V0SnNvbkJvZHkocmVxSW5mby5yZXEpO1xuICAgIGNvbnN0IGl0ZW1JbmRleCA9IGNhcnQuaXRlbXMuZmluZEluZGV4KCh7aXRlbV9pZH0pID0+IFN0cmluZyhpdGVtSWQpID09PSBTdHJpbmcoaXRlbV9pZCkpXG5cbiAgICBjYXJ0Lml0ZW1zW2l0ZW1JbmRleF0gPSB7XG4gICAgICAuLi5jYXJ0Lml0ZW1zW2l0ZW1JbmRleF0sXG4gICAgICAuLi5pdGVtXG4gICAgfTtcblx0XHRjYXJ0Lml0ZW1zID0gT2JqZWN0LmFzc2lnbihbXSwgY2FydC5pdGVtcyk7XG5cbiAgICByZXR1cm4gY2FydFxuICB9XG5cbiAgcHJpdmF0ZSBhZGRJdGVtKHJlcUluZm86IFJlcXVlc3RJbmZvKTogRGFmZkNhcnQge1xuICAgIGNvbnN0IGNhcnQgPSB0aGlzLmdldENhcnQocmVxSW5mbyk7XG5cdFx0Y29uc3QgaXRlbUlucHV0ID0gcmVxSW5mby51dGlscy5nZXRKc29uQm9keShyZXFJbmZvLnJlcSk7XG5cdFx0Y29uc3QgZXhpc3RpbmdDYXJ0SXRlbUluZGV4ID0gY2FydC5pdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnByb2R1Y3RfaWQgPT09IGl0ZW1JbnB1dC5wcm9kdWN0SWQpO1xuXHRcdGlmKGV4aXN0aW5nQ2FydEl0ZW1JbmRleCA+IC0xKSB7XG5cdFx0XHRjYXJ0Lml0ZW1zW2V4aXN0aW5nQ2FydEl0ZW1JbmRleF0ucXR5ID0gY2FydC5pdGVtc1tleGlzdGluZ0NhcnRJdGVtSW5kZXhdLnF0eSArIGl0ZW1JbnB1dC5xdHk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNhcnQuaXRlbXMucHVzaCh0aGlzLnRyYW5zZm9ybUl0ZW1JbnB1dChpdGVtSW5wdXQpKTtcblx0XHR9XG5cdFx0Y2FydC5pdGVtcyA9IE9iamVjdC5hc3NpZ24oW10sIGNhcnQuaXRlbXMpO1xuXG4gICAgcmV0dXJuIGNhcnQ7XG4gIH1cblxuICBwcml2YXRlIGRlbGV0ZUl0ZW0ocmVxSW5mbzogUmVxdWVzdEluZm8sIGl0ZW1JZDogRGFmZkNhcnRJdGVtWydpdGVtX2lkJ10pOiBEYWZmQ2FydCB7XG4gICAgY29uc3QgY2FydCA9IHRoaXMuZ2V0Q2FydChyZXFJbmZvKTtcbiAgICBjb25zdCBpdGVtSW5kZXggPSBjYXJ0Lml0ZW1zLmZpbmRJbmRleCgoe2l0ZW1faWR9KSA9PiBTdHJpbmcoaXRlbUlkKSA9PT0gU3RyaW5nKGl0ZW1faWQpKTtcblxuXHRcdGNhcnQuaXRlbXMuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG5cdFx0Y2FydC5pdGVtcyA9IE9iamVjdC5hc3NpZ24oW10sIGNhcnQuaXRlbXMpO1xuXG4gICAgcmV0dXJuIGNhcnQ7XG4gIH1cbn1cbiJdfQ==