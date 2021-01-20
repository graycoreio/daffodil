/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "apollo-angular";
/**
 * A service that will queue mutate calls to Apollo.
 * It will not send subsequent mutate requests until the previous one has been completed.
 * This is useful for avoiding race conditions on the backend.
 * This should be used alongside Apollo.
 */
var DaffQueuedApollo = /** @class */ (function () {
    function DaffQueuedApollo(apollo) {
        this.apollo = apollo;
        this.queue = [];
    }
    /**
     * Queue up a mutate request.
     * The request will not actually be queued until the returned observable is subscribed.
     * If the queue is empty, the request will be sent when it enters the queue.
     * Otherwise, it will be sent when it reaches the front of the queue.
     * The observable will complete after it emits once.
     * @param options Mutation options.
     */
    /**
     * Queue up a mutate request.
     * The request will not actually be queued until the returned observable is subscribed.
     * If the queue is empty, the request will be sent when it enters the queue.
     * Otherwise, it will be sent when it reaches the front of the queue.
     * The observable will complete after it emits once.
     * @template T, V
     * @param {?} options Mutation options.
     * @return {?}
     */
    DaffQueuedApollo.prototype.mutate = /**
     * Queue up a mutate request.
     * The request will not actually be queued until the returned observable is subscribed.
     * If the queue is empty, the request will be sent when it enters the queue.
     * Otherwise, it will be sent when it reaches the front of the queue.
     * The observable will complete after it emits once.
     * @template T, V
     * @param {?} options Mutation options.
     * @return {?}
     */
    function (options) {
        var _this = this;
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) { return _this.addRequestToQueue(subscriber, _this.apollo.mutate(options)); }));
    };
    /**
     * @private
     * @param {?} subscriber
     * @param {?} request
     * @return {?}
     */
    DaffQueuedApollo.prototype.addRequestToQueue = /**
     * @private
     * @param {?} subscriber
     * @param {?} request
     * @return {?}
     */
    function (subscriber, request) {
        var _this = this;
        this.queue.push((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var sub = request.subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                // emit the outer observable
                subscriber.next(response);
                subscriber.complete();
                _this.finishRequestSubscription(sub);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                subscriber.error(error);
                _this.finishRequestSubscription(sub);
            }), (/**
             * @return {?}
             */
            function () {
                subscriber.complete();
                _this.finishRequestSubscription(sub);
            }));
        }));
        // start the queue if previously empty
        if (this.queue.length === 1)
            this.queue[0]();
    };
    /**
     * @private
     * @param {?} requestSubscription
     * @return {?}
     */
    DaffQueuedApollo.prototype.finishRequestSubscription = /**
     * @private
     * @param {?} requestSubscription
     * @return {?}
     */
    function (requestSubscription) {
        requestSubscription.unsubscribe();
        // process queue
        this.queue.shift();
        // TODO: optional chaining
        if (this.queue[0])
            this.queue[0]();
    };
    DaffQueuedApollo.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DaffQueuedApollo.ctorParameters = function () { return [
        { type: Apollo }
    ]; };
    /** @nocollapse */ DaffQueuedApollo.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffQueuedApollo_Factory() { return new DaffQueuedApollo(i0.ɵɵinject(i1.Apollo)); }, token: DaffQueuedApollo, providedIn: "root" });
    return DaffQueuedApollo;
}());
export { DaffQueuedApollo };
if (false) {
    /** @type {?} */
    DaffQueuedApollo.prototype.queue;
    /**
     * @type {?}
     * @private
     */
    DaffQueuedApollo.prototype.apollo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWVkLWFwb2xsby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbC8iLCJzb3VyY2VzIjpbImFwb2xsby9xdWV1ZWQtYXBvbGxvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXhDLE9BQU8sRUFBRSxVQUFVLEVBQTRCLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7QUFRNUQ7SUFNRSwwQkFDVSxNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUh4QixVQUFLLEdBQWUsRUFBRSxDQUFDO0lBSXBCLENBQUM7SUFFSjs7Ozs7OztPQU9HOzs7Ozs7Ozs7OztJQUNILGlDQUFNOzs7Ozs7Ozs7O0lBQU4sVUFBaUIsT0FBOEI7UUFBL0MsaUJBRUM7UUFEQyxPQUFPLElBQUksVUFBVTs7OztRQUFDLFVBQUEsVUFBVSxJQUFJLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUEvRCxDQUErRCxFQUFDLENBQUE7SUFDdEcsQ0FBQzs7Ozs7OztJQUVPLDRDQUFpQjs7Ozs7O0lBQXpCLFVBQTBCLFVBQTJCLEVBQUUsT0FBd0I7UUFBL0UsaUJBdUJDO1FBdEJDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7O1FBQUM7O2dCQUNSLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUzs7OztZQUMzQixVQUFBLFFBQVE7Z0JBQ04sNEJBQTRCO2dCQUM1QixVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBRXRCLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxDQUFDOzs7O1lBQ0QsVUFBQSxLQUFLO2dCQUNILFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3ZCLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxDQUFDOzs7WUFDRDtnQkFDRSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ3JCLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxDQUFDLEVBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILHNDQUFzQztRQUN0QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBRU8sb0RBQXlCOzs7OztJQUFqQyxVQUFrQyxtQkFBaUM7UUFDakUsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbEMsZ0JBQWdCO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsMEJBQTBCO1FBQzFCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Z0JBdERGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBZFEsTUFBTTs7OzJCQURmO0NBb0VDLEFBdkRELElBdURDO1NBcERZLGdCQUFnQjs7O0lBQzNCLGlDQUF1Qjs7Ozs7SUFHckIsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBvbGxvIH0gZnJvbSAnYXBvbGxvLWFuZ3VsYXInO1xuaW1wb3J0IHsgUiB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyL3R5cGVzJztcbmltcG9ydCB7IE11dGF0aW9uT3B0aW9ucyB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgRmV0Y2hSZXN1bHQgfSBmcm9tICdhcG9sbG8tbGluayc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpYmVyLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgdGhhdCB3aWxsIHF1ZXVlIG11dGF0ZSBjYWxscyB0byBBcG9sbG8uXG4gKiBJdCB3aWxsIG5vdCBzZW5kIHN1YnNlcXVlbnQgbXV0YXRlIHJlcXVlc3RzIHVudGlsIHRoZSBwcmV2aW91cyBvbmUgaGFzIGJlZW4gY29tcGxldGVkLlxuICogVGhpcyBpcyB1c2VmdWwgZm9yIGF2b2lkaW5nIHJhY2UgY29uZGl0aW9ucyBvbiB0aGUgYmFja2VuZC5cbiAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgYWxvbmdzaWRlIEFwb2xsby5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRGFmZlF1ZXVlZEFwb2xsbyB7XG4gIHF1ZXVlOiBGdW5jdGlvbltdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhcG9sbG86IEFwb2xsb1xuICApIHt9XG5cbiAgLyoqXG4gICAqIFF1ZXVlIHVwIGEgbXV0YXRlIHJlcXVlc3QuXG4gICAqIFRoZSByZXF1ZXN0IHdpbGwgbm90IGFjdHVhbGx5IGJlIHF1ZXVlZCB1bnRpbCB0aGUgcmV0dXJuZWQgb2JzZXJ2YWJsZSBpcyBzdWJzY3JpYmVkLlxuICAgKiBJZiB0aGUgcXVldWUgaXMgZW1wdHksIHRoZSByZXF1ZXN0IHdpbGwgYmUgc2VudCB3aGVuIGl0IGVudGVycyB0aGUgcXVldWUuXG4gICAqIE90aGVyd2lzZSwgaXQgd2lsbCBiZSBzZW50IHdoZW4gaXQgcmVhY2hlcyB0aGUgZnJvbnQgb2YgdGhlIHF1ZXVlLlxuICAgKiBUaGUgb2JzZXJ2YWJsZSB3aWxsIGNvbXBsZXRlIGFmdGVyIGl0IGVtaXRzIG9uY2UuXG4gICAqIEBwYXJhbSBvcHRpb25zIE11dGF0aW9uIG9wdGlvbnMuXG4gICAqL1xuICBtdXRhdGU8VCwgViA9IFI+KG9wdGlvbnM6IE11dGF0aW9uT3B0aW9uczxULCBWPik6IE9ic2VydmFibGU8RmV0Y2hSZXN1bHQ8VD4+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlciA9PiB0aGlzLmFkZFJlcXVlc3RUb1F1ZXVlKHN1YnNjcmliZXIsIHRoaXMuYXBvbGxvLm11dGF0ZShvcHRpb25zKSkpXG4gIH1cblxuICBwcml2YXRlIGFkZFJlcXVlc3RUb1F1ZXVlKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8YW55PiwgcmVxdWVzdDogT2JzZXJ2YWJsZTxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5xdWV1ZS5wdXNoKCgpID0+IHtcbiAgICAgIGNvbnN0IHN1YiA9IHJlcXVlc3Quc3Vic2NyaWJlKFxuICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgLy8gZW1pdCB0aGUgb3V0ZXIgb2JzZXJ2YWJsZVxuICAgICAgICAgIHN1YnNjcmliZXIubmV4dChyZXNwb25zZSk7XG4gICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuXG4gICAgICAgICAgdGhpcy5maW5pc2hSZXF1ZXN0U3Vic2NyaXB0aW9uKHN1Yik7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycm9yKVxuICAgICAgICAgIHRoaXMuZmluaXNoUmVxdWVzdFN1YnNjcmlwdGlvbihzdWIpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpXG4gICAgICAgICAgdGhpcy5maW5pc2hSZXF1ZXN0U3Vic2NyaXB0aW9uKHN1Yik7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9KTtcblxuICAgIC8vIHN0YXJ0IHRoZSBxdWV1ZSBpZiBwcmV2aW91c2x5IGVtcHR5XG4gICAgaWYgKHRoaXMucXVldWUubGVuZ3RoID09PSAxKSB0aGlzLnF1ZXVlWzBdKCk7XG4gIH1cblxuICBwcml2YXRlIGZpbmlzaFJlcXVlc3RTdWJzY3JpcHRpb24ocmVxdWVzdFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uKTogdm9pZCB7XG4gICAgcmVxdWVzdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXG4gICAgLy8gcHJvY2VzcyBxdWV1ZVxuICAgIHRoaXMucXVldWUuc2hpZnQoKTtcbiAgICAvLyBUT0RPOiBvcHRpb25hbCBjaGFpbmluZ1xuICAgIGlmICh0aGlzLnF1ZXVlWzBdKSB0aGlzLnF1ZXVlWzBdKCk7XG4gIH1cbn1cbiJdfQ==