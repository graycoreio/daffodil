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
var DaffMagentoCartPaymentService = /** @class */ (function () {
    function DaffMagentoCartPaymentService(apollo, mutationQueue, cartTransformer, paymentTransformer, paymentInputTransformer, cartAddressInputTransformer, extraCartFragments) {
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
    DaffMagentoCartPaymentService.prototype.get = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        var _this = this;
        return this.apollo.query({
            query: getSelectedPaymentMethod(this.extraCartFragments),
            variables: { cartId: cartId }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.paymentTransformer.transform(result.data.cart.selected_payment_method); })));
    };
    /**
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    DaffMagentoCartPaymentService.prototype.update = /**
     * @param {?} cartId
     * @param {?} payment
     * @return {?}
     */
    function (cartId, payment) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: setSelectedPaymentMethod(this.extraCartFragments),
            variables: {
                cartId: cartId,
                payment: this.paymentInputTransformer.transform(payment)
            }
        }).pipe(map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return _this.cartTransformer.transform(result.data.setPaymentMethodOnCart.cart); })));
    };
    /**
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartPaymentService.prototype.updateWithBilling = /**
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    function (cartId, payment, address) {
        return address.email
            ? this.updateWithBillingAddressAndEmail(cartId, payment, address)
            : this.updateWithBillingAddress(cartId, payment, address);
    };
    /**
     * @param {?} cartId
     * @return {?}
     */
    DaffMagentoCartPaymentService.prototype.remove = /**
     * @param {?} cartId
     * @return {?}
     */
    function (cartId) {
        return this.mutationQueue.mutate({
            mutation: setSelectedPaymentMethod(this.extraCartFragments),
            variables: {
                cartId: cartId,
                payment: { code: '' }
            }
        }).pipe(mapTo(undefined));
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartPaymentService.prototype.updateWithBillingAddress = /**
     * @private
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    function (cartId, payment, address) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: setSelectedPaymentMethodWithBilling(this.extraCartFragments),
            variables: {
                cartId: cartId,
                payment: this.paymentInputTransformer.transform(payment),
                address: this.cartAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return _this.cartTransformer.transform(resp.data.setPaymentMethodOnCart.cart); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(transformCartMagentoError(error)); })));
    };
    /**
     * @private
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    DaffMagentoCartPaymentService.prototype.updateWithBillingAddressAndEmail = /**
     * @private
     * @param {?} cartId
     * @param {?} payment
     * @param {?} address
     * @return {?}
     */
    function (cartId, payment, address) {
        var _this = this;
        return this.mutationQueue.mutate({
            mutation: setSelectedPaymentMethodWithBillingAndEmail(this.extraCartFragments),
            variables: {
                cartId: cartId,
                email: address.email,
                payment: this.paymentInputTransformer.transform(payment),
                address: this.cartAddressInputTransformer.transform(address)
            }
        }).pipe(map((/**
         * @param {?} resp
         * @return {?}
         */
        function (resp) { return _this.cartTransformer.transform(resp.data.setGuestEmailOnCart.cart); })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(transformCartMagentoError(error)); })));
    };
    DaffMagentoCartPaymentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffMagentoCartPaymentService.ctorParameters = function () { return [
        { type: Apollo },
        { type: DaffQueuedApollo, decorators: [{ type: Inject, args: [DAFF_MAGENTO_CART_MUTATION_QUEUE,] }] },
        { type: DaffMagentoCartTransformer },
        { type: DaffMagentoCartPaymentTransformer },
        { type: DaffMagentoPaymentMethodInputTransformer },
        { type: DaffMagentoBillingAddressInputTransformer },
        { type: Array, decorators: [{ type: Inject, args: [DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS,] }] }
    ]; };
    /** @nocollapse */ DaffMagentoCartPaymentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffMagentoCartPaymentService_Factory() { return new DaffMagentoCartPaymentService(i0.ɵɵinject(i1.Apollo), i0.ɵɵinject(i2.DAFF_MAGENTO_CART_MUTATION_QUEUE), i0.ɵɵinject(i3.DaffMagentoCartTransformer), i0.ɵɵinject(i4.DaffMagentoCartPaymentTransformer), i0.ɵɵinject(i5.DaffMagentoPaymentMethodInputTransformer), i0.ɵɵinject(i6.DaffMagentoBillingAddressInputTransformer), i0.ɵɵinject(i7.DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS)); }, token: DaffMagentoCartPaymentService, providedIn: "root" });
    return DaffMagentoCartPaymentService;
}());
export { DaffMagentoCartPaymentService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYXltZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY2FydC9kcml2ZXIvbWFnZW50by8iLCJzb3VyY2VzIjpbImNhcnQtcGF5bWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQTtBQUl6RCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM5RixPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLHdCQUF3QixFQUN4QixtQ0FBbUMsRUFDbkMsMkNBQTJDLEVBQzVDLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFPL0UsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDdkYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7Ozs7Ozs7OztBQUtoRztJQUlFLHVDQUNVLE1BQWMsRUFDNEIsYUFBK0IsRUFDMUUsZUFBMkMsRUFDM0Msa0JBQXFELEVBQ3JELHVCQUFpRSxFQUNqRSwyQkFBc0Us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QWhGRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWxDUSxNQUFNO2dCQUtOLGdCQUFnQix1QkFpQ3BCLE1BQU0sU0FBQyxnQ0FBZ0M7Z0JBckJuQywwQkFBMEI7Z0JBUjFCLGlDQUFpQztnQkFPakMsd0NBQXdDO2dCQVF4Qyx5Q0FBeUM7NENBbUI3QyxNQUFNLFNBQUMsc0NBQXNDOzs7d0NBNUNsRDtDQWtIQyxBQWpGRCxJQWlGQztTQTlFWSw2QkFBNkI7Ozs7OztJQUV0QywrQ0FBc0I7Ozs7O0lBQ3RCLHNEQUFpRjs7SUFDakYsd0RBQWtEOztJQUNsRCwyREFBNEQ7O0lBQzVELGdFQUF3RTs7SUFDeEUsb0VBQTZFOztJQUM3RSwyREFBeUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwb2xsbyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCB7IERvY3VtZW50Tm9kZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBtYXBUbywgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGFmZlF1ZXVlZEFwb2xsbyB9IGZyb20gJ0BkYWZmb2RpbC9jb3JlL2dyYXBocWwnXG5pbXBvcnQgeyBEYWZmQ2FydFBheW1lbnRNZXRob2QsIERhZmZDYXJ0LCBEYWZmQ2FydEFkZHJlc3MgfSBmcm9tICdAZGFmZm9kaWwvY2FydCc7XG5pbXBvcnQgeyBEYWZmQ2FydFBheW1lbnRTZXJ2aWNlSW50ZXJmYWNlIH0gZnJvbSAnQGRhZmZvZGlsL2NhcnQvZHJpdmVyJztcblxuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0UGF5bWVudFRyYW5zZm9ybWVyIH0gZnJvbSAnLi90cmFuc2Zvcm1zL291dHB1dHMvY2FydC1wYXltZW50LnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgZ2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kLFxuICBzZXRTZWxlY3RlZFBheW1lbnRNZXRob2QsXG4gIHNldFNlbGVjdGVkUGF5bWVudE1ldGhvZFdpdGhCaWxsaW5nLFxuICBzZXRTZWxlY3RlZFBheW1lbnRNZXRob2RXaXRoQmlsbGluZ0FuZEVtYWlsXG59IGZyb20gJy4vcXVlcmllcy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZNYWdlbnRvUGF5bWVudE1ldGhvZElucHV0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvaW5wdXRzL3BheW1lbnQtbWV0aG9kLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGFmZk1hZ2VudG9DYXJ0VHJhbnNmb3JtZXIgfSBmcm9tICcuL3RyYW5zZm9ybXMvb3V0cHV0cy9jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgTWFnZW50b0dldFNlbGVjdGVkUGF5bWVudE1ldGhvZFJlc3BvbnNlLFxuICBNYWdlbnRvU2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kUmVzcG9uc2UsXG4gIE1hZ2VudG9TZXRTZWxlY3RlZFBheW1lbnRNZXRob2RXaXRoQmlsbGluZ1Jlc3BvbnNlLFxuICBNYWdlbnRvU2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kV2l0aEJpbGxpbmdBbmRFbWFpbFJlc3BvbnNlXG59IGZyb20gJy4vcXVlcmllcy9yZXNwb25zZXMvcHVibGljX2FwaSc7XG5pbXBvcnQgeyBEYWZmTWFnZW50b0JpbGxpbmdBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lciB9IGZyb20gJy4vdHJhbnNmb3Jtcy9pbnB1dHMvYmlsbGluZy1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgdHJhbnNmb3JtQ2FydE1hZ2VudG9FcnJvciB9IGZyb20gJy4vZXJyb3JzL3RyYW5zZm9ybSc7XG5pbXBvcnQgeyBEQUZGX0NBUlRfTUFHRU5UT19FWFRSQV9DQVJUX0ZSQUdNRU5UUyB9IGZyb20gJy4vaW5qZWN0aW9uLXRva2Vucy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERBRkZfTUFHRU5UT19DQVJUX01VVEFUSU9OX1FVRVVFIH0gZnJvbSAnLi9pbmplY3Rpb24tdG9rZW5zL2NhcnQtbXV0YXRpb24tcXVldWUudG9rZW4nO1xuXG4vKipcbiAqIEEgc2VydmljZSBmb3IgbWFraW5nIE1hZ2VudG8gR3JhcGhRTCBxdWVyaWVzIGZvciBjYXJ0cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1hZ2VudG9DYXJ0UGF5bWVudFNlcnZpY2UgaW1wbGVtZW50cyBEYWZmQ2FydFBheW1lbnRTZXJ2aWNlSW50ZXJmYWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhcG9sbG86IEFwb2xsbyxcbiAgICBASW5qZWN0KERBRkZfTUFHRU5UT19DQVJUX01VVEFUSU9OX1FVRVVFKSBwcml2YXRlIG11dGF0aW9uUXVldWU6IERhZmZRdWV1ZWRBcG9sbG8sXG4gICAgcHVibGljIGNhcnRUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9DYXJ0VHJhbnNmb3JtZXIsXG4gICAgcHVibGljIHBheW1lbnRUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9DYXJ0UGF5bWVudFRyYW5zZm9ybWVyLFxuICAgIHB1YmxpYyBwYXltZW50SW5wdXRUcmFuc2Zvcm1lcjogRGFmZk1hZ2VudG9QYXltZW50TWV0aG9kSW5wdXRUcmFuc2Zvcm1lcixcbiAgICBwdWJsaWMgY2FydEFkZHJlc3NJbnB1dFRyYW5zZm9ybWVyOiBEYWZmTWFnZW50b0JpbGxpbmdBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lcixcbiAgICBASW5qZWN0KERBRkZfQ0FSVF9NQUdFTlRPX0VYVFJBX0NBUlRfRlJBR01FTlRTKSBwdWJsaWMgZXh0cmFDYXJ0RnJhZ21lbnRzOiBEb2N1bWVudE5vZGVbXSxcbiAgKSB7fVxuXG4gIGdldChjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RGFmZkNhcnRQYXltZW50TWV0aG9kPiB7XG4gICAgcmV0dXJuIHRoaXMuYXBvbGxvLnF1ZXJ5PE1hZ2VudG9HZXRTZWxlY3RlZFBheW1lbnRNZXRob2RSZXNwb25zZT4oe1xuICAgICAgcXVlcnk6IGdldFNlbGVjdGVkUGF5bWVudE1ldGhvZCh0aGlzLmV4dHJhQ2FydEZyYWdtZW50cyksXG4gICAgICB2YXJpYWJsZXM6IHtjYXJ0SWR9XG4gICAgfSkucGlwZShcbiAgICAgIG1hcChyZXN1bHQgPT4gdGhpcy5wYXltZW50VHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3VsdC5kYXRhLmNhcnQuc2VsZWN0ZWRfcGF5bWVudF9tZXRob2QpKVxuICAgICk7XG4gIH1cblxuICB1cGRhdGUoY2FydElkOiBzdHJpbmcsIHBheW1lbnQ6IFBhcnRpYWw8RGFmZkNhcnRQYXltZW50TWV0aG9kPik6IE9ic2VydmFibGU8UGFydGlhbDxEYWZmQ2FydD4+IHtcbiAgICByZXR1cm4gdGhpcy5tdXRhdGlvblF1ZXVlLm11dGF0ZTxNYWdlbnRvU2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kUmVzcG9uc2U+KHtcbiAgICAgIG11dGF0aW9uOiBzZXRTZWxlY3RlZFBheW1lbnRNZXRob2QodGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgcGF5bWVudDogdGhpcy5wYXltZW50SW5wdXRUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocGF5bWVudClcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3VsdCA9PiB0aGlzLmNhcnRUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzdWx0LmRhdGEuc2V0UGF5bWVudE1ldGhvZE9uQ2FydC5jYXJ0KSlcbiAgICApXG4gIH1cblxuICB1cGRhdGVXaXRoQmlsbGluZyhjYXJ0SWQ6IHN0cmluZywgcGF5bWVudDogUGFydGlhbDxEYWZmQ2FydFBheW1lbnRNZXRob2Q+LCBhZGRyZXNzOiBQYXJ0aWFsPERhZmZDYXJ0QWRkcmVzcz4pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIGFkZHJlc3MuZW1haWxcbiAgICAgID8gdGhpcy51cGRhdGVXaXRoQmlsbGluZ0FkZHJlc3NBbmRFbWFpbChjYXJ0SWQsIHBheW1lbnQsIGFkZHJlc3MpXG4gICAgICA6IHRoaXMudXBkYXRlV2l0aEJpbGxpbmdBZGRyZXNzKGNhcnRJZCwgcGF5bWVudCwgYWRkcmVzcylcbiAgfVxuXG4gIHJlbW92ZShjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uUXVldWUubXV0YXRlKHtcbiAgICAgIG11dGF0aW9uOiBzZXRTZWxlY3RlZFBheW1lbnRNZXRob2QodGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgcGF5bWVudDoge2NvZGU6ICcnfVxuICAgICAgfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXBUbyh1bmRlZmluZWQpXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVXaXRoQmlsbGluZ0FkZHJlc3MoY2FydElkOiBzdHJpbmcsIHBheW1lbnQ6IFBhcnRpYWw8RGFmZkNhcnRQYXltZW50TWV0aG9kPiwgYWRkcmVzczogUGFydGlhbDxEYWZmQ2FydEFkZHJlc3M+KTogT2JzZXJ2YWJsZTxQYXJ0aWFsPERhZmZDYXJ0Pj4ge1xuICAgIHJldHVybiB0aGlzLm11dGF0aW9uUXVldWUubXV0YXRlPE1hZ2VudG9TZXRTZWxlY3RlZFBheW1lbnRNZXRob2RXaXRoQmlsbGluZ1Jlc3BvbnNlPih7XG4gICAgICBtdXRhdGlvbjogc2V0U2VsZWN0ZWRQYXltZW50TWV0aG9kV2l0aEJpbGxpbmcodGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgcGF5bWVudDogdGhpcy5wYXltZW50SW5wdXRUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocGF5bWVudCksXG4gICAgICAgIGFkZHJlc3M6IHRoaXMuY2FydEFkZHJlc3NJbnB1dFRyYW5zZm9ybWVyLnRyYW5zZm9ybShhZGRyZXNzKVxuICAgICAgfVxuICAgIH0pLnBpcGUoXG4gICAgICBtYXAocmVzcCA9PiB0aGlzLmNhcnRUcmFuc2Zvcm1lci50cmFuc2Zvcm0ocmVzcC5kYXRhLnNldFBheW1lbnRNZXRob2RPbkNhcnQuY2FydCkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aHJvd0Vycm9yKHRyYW5zZm9ybUNhcnRNYWdlbnRvRXJyb3IoZXJyb3IpKSksXG4gICAgKVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVXaXRoQmlsbGluZ0FkZHJlc3NBbmRFbWFpbChjYXJ0SWQ6IHN0cmluZywgcGF5bWVudDogUGFydGlhbDxEYWZmQ2FydFBheW1lbnRNZXRob2Q+LCBhZGRyZXNzOiBQYXJ0aWFsPERhZmZDYXJ0QWRkcmVzcz4pOiBPYnNlcnZhYmxlPFBhcnRpYWw8RGFmZkNhcnQ+PiB7XG4gICAgcmV0dXJuIHRoaXMubXV0YXRpb25RdWV1ZS5tdXRhdGU8TWFnZW50b1NldFNlbGVjdGVkUGF5bWVudE1ldGhvZFdpdGhCaWxsaW5nQW5kRW1haWxSZXNwb25zZT4oe1xuICAgICAgbXV0YXRpb246IHNldFNlbGVjdGVkUGF5bWVudE1ldGhvZFdpdGhCaWxsaW5nQW5kRW1haWwodGhpcy5leHRyYUNhcnRGcmFnbWVudHMpLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNhcnRJZCxcbiAgICAgICAgZW1haWw6IGFkZHJlc3MuZW1haWwsXG4gICAgICAgIHBheW1lbnQ6IHRoaXMucGF5bWVudElucHV0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHBheW1lbnQpLFxuICAgICAgICBhZGRyZXNzOiB0aGlzLmNhcnRBZGRyZXNzSW5wdXRUcmFuc2Zvcm1lci50cmFuc2Zvcm0oYWRkcmVzcylcbiAgICAgIH1cbiAgICB9KS5waXBlKFxuICAgICAgbWFwKHJlc3AgPT4gdGhpcy5jYXJ0VHJhbnNmb3JtZXIudHJhbnNmb3JtKHJlc3AuZGF0YS5zZXRHdWVzdEVtYWlsT25DYXJ0LmNhcnQpKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhyb3dFcnJvcih0cmFuc2Zvcm1DYXJ0TWFnZW50b0Vycm9yKGVycm9yKSkpLFxuICAgIClcbiAgfVxufVxuIl19