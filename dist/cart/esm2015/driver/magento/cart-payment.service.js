/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { throwError } from 'rxjs';
import { map, mapTo, catchError } from 'rxjs/operators';
import { DaffQueuedApollo } from '@daffodil/core/graphql';
import { DaffMagentoCartPaymentTransformer } from './transforms/outputs/cart-payment.service';
import { getSelectedPaymentMethod, setSelectedPaymentMethod, setSelectedPaymentMethodWithBilling, setSelectedPaymentMethodWithBillingAndEmail } from './queries/public_api';
import { DaffMagentoPaymentMethodInputTransformer } from './transforms/inputs/payment-method.service';
import { DaffMagentoCartTransformer } from './transforms/outputs/cart.service';
import { DaffMagentoBillingAddressInputTransformer } from './transforms/inputs/billing-address.service';
import { transformCartMagentoError } from './errors/transform';
import { DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS } from './injection-tokens/public_api';
import { DAFF_MAGENTO_CART_MUTATION_QUEUE } from './injection-tokens/cart-mutation-queue.token';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
import * as i2 from "./injection-tokens/cart-mutation-queue.token";
import * as i3 from "./transforms/outputs/cart.service";
import * as i4 from "./transforms/outputs/cart-payment.service";
import * as i5 from "./transforms/inputs/payment-method.service";
import * as i6 from "./transforms/inputs/billing-address.service";
import * as i7 from "./injection-tokens/fragments/cart";
/**
 * A service for making Magento GraphQL queries for carts.
 */
export class DaffMagentoCartPaymentService {
    /**
     * @param {?} apollo
     * @param {?} mutationQueue
     * @param {?} cartTransformer
     * @param {?} paymentTransformer
     * @param {?} paymentInputTransformer
     * @param {?} cartAddressInputTransformer
     * @param {?} extraCartFragments
     */
    constructor(apollo, mutationQueue, cartTransformer, paymentTransformer, paymentInputTransformer, cartAddressInputTransformer, extraCartFragments) {
        this.apollo = apollo;
        this.mutationQueue = mutationQueue;
        this.cartTransformer = cartTransformer;
        this.paymentTransformer = paymentTransformer;
        this.paymentInputTransformer = paymentInputTransformer;
        this.cartAddressInputTransformer = cartAddressInputTransformer;
        this.extraCartFragments = extraCartFragments;
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    get(cartId) {
        return this.apollo.query({
            query: getSelectedPaymentMethod(this.extraCartFragments),
            variables: { cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.paymentTransformer.transform(result.data.cart.selected_payment_method))));
    }
    /**
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    update(cartId, payment) {
        return this.mutationQueue.mutate({
            mutation: setSelectedPaymentMethod(this.extraCartFragments),
            variables: {
                cartId,
                payment: this.paymentInputTransformer.transform(payment)
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        result => this.cartTransformer.transform(result.data.setPaymentMethodOnCart.cart))));
    }
    /**
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    updateWithBilling(cartId, payment, address) {
        return address.email
            ? this.updateWithBillingAddressAndEmail(cartId, payment, address)
            : this.updateWithBillingAddress(cartId, payment, address);
    }
    /**
     * @param {?} cartId
     * @return {?}
     */
    remove(cartId) {
        return this.mutationQueue.mutate({
            mutation: setSelectedPaymentMethod(this.extraCartFragments),
            variables: {
                cartId,
                payment: { code: '' }
            }
        }).pipe(mapTo(undefined));
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    updateWithBillingAddress(cartId, payment, address) {
        return this.mutationQueue.mutate({
            mutation: setSelectedPaymentMethodWithBilling(this.extraCartFragments),
            variables: {
                cartId,
                payment: this.paymentInputTransformer.transform(payment),
                address: this.cartAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.cartTransformer.transform(resp.data.setPaymentMethodOnCart.cart))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(transformCartMagentoError(error)))));
    }
    /**
     * @private
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    updateWithBillingAddressAndEmail(cartId, payment, address) {
        return this.mutationQueue.mutate({
            mutation: setSelectedPaymentMethodWithBillingAndEmail(this.extraCartFragments),
            variables: {
                cartId,
                email: address.email,
                payment: this.paymentInputTransformer.transform(payment),
                address: this.cartAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        resp => this.cartTransformer.transform(resp.data.setGuestEmailOnCart.cart))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => throwError(transformCartMagentoError(error)))));
    }
}
DaffMagentoCartPaymentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffMagentoCartPaymentService.ctorParameters = () => [
    { type: Apollo },
    { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
    { type: DaffMagentoCartTransformer },
    { type: DaffMagentoCartPaymentTransformer },
    { type: DaffMagentoPaymentMethodInputTransformer },
    { type: DaffMagentoBillingAddressInputTransformer },
    { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] }
];
/** @nocollapse */ DaffMagentoCartPaymentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartPaymentService_Factory() { return new DaffMagentoCartPaymentService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i3.DaffMagentoCartTransformer), i0.ɵɵinject(i4.DaffMagentoCartPaymentTransformer), i0.ɵɵinject(i5.DaffMagentoPaymentMethodInputTransformer), i0.ɵɵinject(i6.DaffMagentoBillingAddressInputTransformer), i0.ɵɵinject(i7.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS)); }, token: DaffMagentoCartPaymentService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartPaymentService.prototype.apollo;
    /**
     * @type {?}
     * @private
     */
    DaffMagentoCartPaymentService.prototype.mutationQueue;
    /** @type {?} */
    DaffMagentoCartPaymentService.prototype.cartTransformer;
    /** @type {?} */
    DaffMagentoCartPaymentService.prototype.paymentTransformer;
    /** @type {?} */
    DaffMagentoCartPaymentService.prototype.paymentInputTransformer;
    /** @type {?} */
    DaffMagentoCartPaymentService.prototype.cartAddressInputTransformer;
    /** @type {?} */
    DaffMagentoCartPaymentService.prototype.extraCartFragments;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbImNhcnQtcGF5bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUl6RCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM5RixPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHdCQUF3QixFQUN4QixtQ0FBbUMsRUFDbkMsMkNBQTJDLEVBQzVDLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFPL0UsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdkYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7Ozs7Ozs7OztBQVFoRyxNQUFNLE9BQU8sNkJBQTZCOzs7Ozs7Ozs7O0lBQ3hDLFlBQ1UsTUFBYyxFQUM0QixhQUErQixFQUMxRSxlQUEyQyxFQUMzQyxrQkFBcUQs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OUMsK0NBQXNCOzs7OztJQUN0QixzREFBaUY7O0lBQ2pGLHdEQUFrRDs7SUFDbEQsMkRBQTREOztJQUM1RCxnRUFBd0U7O0lBQ3hFLG9FQUE2RTs7SUFDN0UsMkRBQXlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcG9sbG8gfSBmcm9tICdhcG9sbG8tYW5ndWxhcic7XG5pbXBvcnQgeyBEb2N1bWVudE5vZGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgbWFwVG8sIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERhZmZRdWV1ZWRBcG9sbG8gfSBmcm9tICdAZGFmZm9kaWwvY29yZS9ncmFwaHFsJ1xuaW1wb3J0IHsgRGFmZkNhcnRQYXltZW50TWV0aG9kLCBEYWZmQ2FydCwgRGFmZkNhcnRBZGRyZXNzIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQnO1xuaW1wb3J0IHsgRGFmZkNhcnRQYXltZW50U2VydmljZUludGVyZmFjZSB9IGZyb20gJ0BkYWZmb2RpbC9jYXJ0L2RyaXZlcic7XG5cbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydFBheW1lbnRUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9vdXRwdXRzL2NhcnQtcGF5bWVudC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIGdldFNlbGVjdGVkUGF5bWVudE1ldGhvZCxcbiAgc2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kLFxuICBzZXRTZWxlY3RlZFBheW1lbnRNZXRob2RXaXRoQmlsbGluZyxcbiAgc2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kV2l0aEJpbGxpbmdBbmRFbWFpbFxufSBmcm9tICcuL3F1ZXJpZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b1BheW1lbnRNZXRob2RJbnB1dFRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL2lucHV0cy9wYXltZW50LW1ldGhvZC5zZXJ2aWNlJztcbmltcG9ydCB7IERhZmZNYWdlbnRvQ2FydFRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL291dHB1dHMvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIE1hZ2VudG9HZXRTZWxlY3RlZFBheW1lbnRNZXRob2RSZXNwb25zZSxcbiAgTWFnZW50b1NldFNlbGVjdGVkUGF5bWVudE1ldGhvZFJlc3BvbnNlLFxuICBNYWdlbnRvU2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kV2l0aEJpbGxpbmdSZXNwb25zZSxcbiAgTWFnZW50b1NldFNlbGVjdGVkUGF5bWVudE1ldGhvZFdpdGhCaWxsaW5nQW5kRW1haWxSZXNwb25zZVxufSBmcm9tICcuL3F1ZXJpZXMvcmVzcG9uc2VzL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9CaWxsaW5nQWRkcmVzc0lucHV0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvaW5wdXRzL2JpbGxpbmctYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IHRyYW5zZm9ybUNhcnRNYWdlbnRvRXJyb3IgfSBmcm9tICcuL2Vycm9ycy90cmFuc2Zvcm0nO1xuaW1wb3J0IHsgREFGRl9DQVJUX01BR0VOVE9fRVhUUkFfQ0FSVF9GUkFHTUVOVFMgfSBmcm9tICcuL2luamVjdGlvbi10b2tlbnMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEQUZGX01BR0VOVE9fQ0FSVF9NVVRBVElPTl9RVUVVRSB9IGZyb20gJy4vaW5qZWN0aW9uLXRva2Vucy9jYXJ0LW11dGF0aW9uLXF1ZXVlLnRva2VuJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgZm9yIG1ha2luZyBNYWdlbnRvIEdyYXBoUUwgcXVlcmllcyBmb3IgY2FydHMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNYWdlbnRvQ2FydFBheW1lbnRTZXJ2aWNlIGltcGxlbWVudHMgRGFmZkNhcnRQYXltZW50U2VydmljZUludGVyZmFjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXBvbGxvOiBBcG9sbG8sXG4gICAgQEluamVjdChEQUZGX01BR0VOVE9fQ0FSVF9NVVRBVElPTl9RVUVVRSkgcHJpdmF0ZSBtdXRhdGlvblF1ZXVlOiBEYWZmUXVldWVkQXBvbGxvLFxuICAgIHB1YmxpYyBjYXJ0VHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvQ2FydFRyYW5zZm9ybWVyLFxuICAgIHB1YmxpYyBwYXltZW50VHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvQ2FydFBheW1lbnRUcmFuc2Zvcm1lcixcbiAgICBwdWJsaWMgcGF5bWVudElucHV0VHJhbnNmb3JtZXI6IERhZmZNYWdlbnRvUGF5bWVudE1ldGhvZElucHV0VHJhbnNmb3JtZXIsXG4gICAgcHVibGljIGNhcnRBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9CaWxsaW5nQWRkcmVzc0lucHV0VHJhbnNmb3JtZXIsXG4gICAgQEluamVjdChEQUZGX0NBUlRfTUFHRU5UT19FWFRSQV9DQVJUX0ZSQUdNRU5UUykgcHVibGljIGV4dHJhQ2FydEZyYWdtZW50czogRG9jdW1lbnROb2RlW10sXG4gICkge31cblxuICBnZXQoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERhZmZDYXJ0UGF5bWVudE1ldGhvZD4ge1xuICAgIHJldHVybiB0aGlzLmFwb2xsby5xdWVyeTxNYWdlbnRvR2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kUmVzcG9uc2U+KHtcbiAgICAgIHF1ZXJ5OiBnZXRTZWxlY3RlZFBheW1lbnRNZXRob2QodGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7Y2FydElkfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAocmVzdWx0ID0+IHRoaXMucGF5bWVudFRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXN1bHQuZGF0YS5jYXJ0LnNlbGVjdGVkX3BheW1lbnRfbWV0aG9kKSlcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlKGNhcnRJZDogc3RyaW5nLCBwYXltZW50OiBQYXJ0aWFsPERhZmZDYXJ0UGF5bWVudE1ldGhvZD4pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b1NldFNlbGVjdGVkUGF5bWVudE1ldGhvZFJlc3BvbnNlPih7XG4gICAgICBtdXRhdGlvbjogc2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIHBheW1lbnQ6IHRoaXMucGF5bWVudElucHV0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHBheW1lbnQpXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gdGhpcy5jYXJ0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3VsdC5kYXRhLnNldFBheW1lbnRNZXRob2RPbkNhcnQuY2FydCkpXG4gICAgKVxuICB9XG5cbiAgdXBkYXRlV2l0aEJpbGxpbmcoY2FydElkOiBzdHJpbmcsIHBheW1lbnQ6IFBhcnRpYWw8RGFmZkNhcnRQYXltZW50TWV0aG9kPiwgYWRkcmVzczogUGFydGlhbDxEYWZmQ2FydEFkZHJlc3M+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiBhZGRyZXNzLmVtYWlsXG4gICAgICA/IHRoaXMudXBkYXRlV2l0aEJpbGxpbmdBZGRyZXNzQW5kRW1haWwoY2FydElkLCBwYXltZW50LCBhZGRyZXNzKVxuICAgICAgOiB0aGlzLnVwZGF0ZVdpdGhCaWxsaW5nQWRkcmVzcyhjYXJ0SWQsIHBheW1lbnQsIGFkZHJlc3MpXG4gIH1cblxuICByZW1vdmUoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvblF1ZXVlLm11dGF0ZSh7XG4gICAgICBtdXRhdGlvbjogc2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIHBheW1lbnQ6IHtjb2RlOiAnJ31cbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwVG8odW5kZWZpbmVkKVxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlV2l0aEJpbGxpbmdBZGRyZXNzKGNhcnRJZDogc3RyaW5nLCBwYXltZW50OiBQYXJ0aWFsPERhZmZDYXJ0UGF5bWVudE1ldGhvZD4sIGFkZHJlc3M6IFBhcnRpYWw8RGFmZkNhcnRBZGRyZXNzPik6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvblF1ZXVlLm11dGF0ZTxNYWdlbnRvU2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kV2l0aEJpbGxpbmdSZXNwb25zZT4oe1xuICAgICAgbXV0YXRpb246IHNldFNlbGVjdGVkUGF5bWVudE1ldGhvZFdpdGhCaWxsaW5nKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIHBheW1lbnQ6IHRoaXMucGF5bWVudElucHV0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHBheW1lbnQpLFxuICAgICAgICBhZGRyZXNzOiB0aGlzLmNhcnRBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lci50cmFuc2Zvcm0oYWRkcmVzcylcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3AgPT4gdGhpcy5jYXJ0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3AuZGF0YS5zZXRQYXltZW50TWV0aG9kT25DYXJ0LmNhcnQpKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhyb3dFcnJvcih0cmFuc2Zvcm1DYXJ0TWFnZW50b0Vycm9yKGVycm9yKSkpLFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlV2l0aEJpbGxpbmdBZGRyZXNzQW5kRW1haWwoY2FydElkOiBzdHJpbmcsIHBheW1lbnQ6IFBhcnRpYWw8RGFmZkNhcnRQYXltZW50TWV0aG9kPiwgYWRkcmVzczogUGFydGlhbDxEYWZmQ2FydEFkZHJlc3M+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uUXVldWUubXV0YXRlPE1hZ2VudG9TZXRTZWxlY3RlZFBheW1lbnRNZXRob2RXaXRoQmlsbGluZ0FuZEVtYWlsUmVzcG9uc2U+KHtcbiAgICAgIG11dGF0aW9uOiBzZXRTZWxlY3RlZFBheW1lbnRNZXRob2RXaXRoQmlsbGluZ0FuZEVtYWlsKHRoaXMuZXh0cmFDYXJ0RnJhZ21lbnRzKSxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBjYXJ0SWQsXG4gICAgICAgIGVtYWlsOiBhZGRyZXNzLmVtYWlsLFxuICAgICAgICBwYXltZW50OiB0aGlzLnBheW1lbnRJbnB1dFRyYW5zZm9ybWVyLnRyYW5zZm9ybShwYXltZW50KSxcbiAgICAgICAgYWRkcmVzczogdGhpcy5jYXJ0QWRkcmVzc0lucHV0VHJhbnNmb3JtZXIudHJhbnNmb3JtKGFkZHJlc3MpXG4gICAgICB9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXNwID0+IHRoaXMuY2FydFRyYW5zZm9ybWVyLnRyYW5zZm9ybShyZXNwLmRhdGEuc2V0R3Vlc3RFbWFpbE9uQ2FydC5jYXJ0KSksXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IHRocm93RXJyb3IodHJhbnNmb3JtQ2FydE1hZ2VudG9FcnJvcihlcnJvcikpKSxcbiAgICApXG4gIH1cbn1cbiJdfQ==