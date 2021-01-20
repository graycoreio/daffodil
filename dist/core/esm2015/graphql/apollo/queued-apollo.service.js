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
export class DaffQueuedApollo {
    /**
     * @param {?} apollo
     */
    constructor(apollo) {
        this.apollo = apollo;
        this.queue = [];
    }
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
    mutate(options) {
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        subscriber => this.addRequestToQueue(subscriber, this.apollo.mutate(options))));
    }
    /**
     * @private
     * @param {?} subscriber
     * @param {?} request
     * @return {?}
     */
    addRequestToQueue(subscriber, request) {
        this.queue.push((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const sub = request.subscribe((/**
             * @param {?} response
             * @return {?}
             */
            response => {
                // emit the outer observable
                subscriber.next(response);
                subscriber.complete();
                this.finishRequestSubscription(sub);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            error => {
                subscriber.error(error);
                this.finishRequestSubscription(sub);
            }), (/**
             * @return {?}
             */
            () => {
                subscriber.complete();
                this.finishRequestSubscription(sub);
            }));
        }));
        // start the queue if previously empty
        if (this.queue.length === 1)
            this.queue[0]();
    }
    /**
     * @private
     * @param {?} requestSubscription
     * @return {?}
     */
    finishRequestSubscription(requestSubscription) {
        requestSubscription.unsubscribe();
        // process queue
        this.queue.shift();
        // TODO: optional chaining
        if (this.queue[0])
            this.queue[0]();
    }
}
DaffQueuedApollo.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DaffQueuedApollo.ctorParameters = () => [
    { type: Apollo }
];
/** @nocollapse */ DaffQueuedApollo.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffQueuedApollo_Factory() { return new DaffQueuedApollo(i0.ɵɵinject(i1.Apollo)); }, token: DaffQueuedApollo, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffQueuedApollo.prototype.queue;
    /**
     * @type {?}
     * @private
     */
    DaffQueuedApollo.prototype.apollo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWVkLWFwb2xsby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvcmUvZ3JhcGhxbC8iLCJzb3VyY2VzIjpbImFwb2xsby9xdWV1ZWQtYXBvbGxvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXhDLE9BQU8sRUFBRSxVQUFVLEVBQTRCLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7QUFXNUQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUczQixZQUNVLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSHhCLFVBQUssR0FBZSxFQUFFLENBQUM7SUFJcEIsQ0FBQzs7Ozs7Ozs7Ozs7SUFVSixNQUFNLENBQVcsT0FBOEI7UUFDN0MsT0FBTyxJQUFJLFVBQVU7Ozs7UUFBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFBO0lBQ3RHLENBQUM7Ozs7Ozs7SUFFTyxpQkFBaUIsQ0FBQyxVQUEyQixFQUFFLE9BQXdCO1FBQzdFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTs7O1FBQUMsR0FBRyxFQUFFOztrQkFDYixHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVM7Ozs7WUFDM0IsUUFBUSxDQUFDLEVBQUU7Z0JBQ1QsNEJBQTRCO2dCQUM1QixVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBRXRCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxDQUFDOzs7O1lBQ0QsS0FBSyxDQUFDLEVBQUU7Z0JBQ04sVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDdkIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7OztZQUNELEdBQUcsRUFBRTtnQkFDSCxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ3JCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxDQUFDLEVBQ0Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILHNDQUFzQztRQUN0QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBRU8seUJBQXlCLENBQUMsbUJBQWlDO1FBQ2pFLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWxDLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLDBCQUEwQjtRQUMxQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7OztZQXRERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFkUSxNQUFNOzs7OztJQWdCYixpQ0FBdUI7Ozs7O0lBR3JCLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwb2xsbyB9IGZyb20gJ2Fwb2xsby1hbmd1bGFyJztcbmltcG9ydCB7IFIgfSBmcm9tICdhcG9sbG8tYW5ndWxhci90eXBlcyc7XG5pbXBvcnQgeyBNdXRhdGlvbk9wdGlvbnMgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IEZldGNoUmVzdWx0IH0gZnJvbSAnYXBvbGxvLWxpbmsnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaWJlciwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQSBzZXJ2aWNlIHRoYXQgd2lsbCBxdWV1ZSBtdXRhdGUgY2FsbHMgdG8gQXBvbGxvLlxuICogSXQgd2lsbCBub3Qgc2VuZCBzdWJzZXF1ZW50IG11dGF0ZSByZXF1ZXN0cyB1bnRpbCB0aGUgcHJldmlvdXMgb25lIGhhcyBiZWVuIGNvbXBsZXRlZC5cbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBhdm9pZGluZyByYWNlIGNvbmRpdGlvbnMgb24gdGhlIGJhY2tlbmQuXG4gKiBUaGlzIHNob3VsZCBiZSB1c2VkIGFsb25nc2lkZSBBcG9sbG8uXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERhZmZRdWV1ZWRBcG9sbG8ge1xuICBxdWV1ZTogRnVuY3Rpb25bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXBvbGxvOiBBcG9sbG9cbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBRdWV1ZSB1cCBhIG11dGF0ZSByZXF1ZXN0LlxuICAgKiBUaGUgcmVxdWVzdCB3aWxsIG5vdCBhY3R1YWxseSBiZSBxdWV1ZWQgdW50aWwgdGhlIHJldHVybmVkIG9ic2VydmFibGUgaXMgc3Vic2NyaWJlZC5cbiAgICogSWYgdGhlIHF1ZXVlIGlzIGVtcHR5LCB0aGUgcmVxdWVzdCB3aWxsIGJlIHNlbnQgd2hlbiBpdCBlbnRlcnMgdGhlIHF1ZXVlLlxuICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgYmUgc2VudCB3aGVuIGl0IHJlYWNoZXMgdGhlIGZyb250IG9mIHRoZSBxdWV1ZS5cbiAgICogVGhlIG9ic2VydmFibGUgd2lsbCBjb21wbGV0ZSBhZnRlciBpdCBlbWl0cyBvbmNlLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBNdXRhdGlvbiBvcHRpb25zLlxuICAgKi9cbiAgbXV0YXRlPFQsIFYgPSBSPihvcHRpb25zOiBNdXRhdGlvbk9wdGlvbnM8VCwgVj4pOiBPYnNlcnZhYmxlPEZldGNoUmVzdWx0PFQ+PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZXIgPT4gdGhpcy5hZGRSZXF1ZXN0VG9RdWV1ZShzdWJzY3JpYmVyLCB0aGlzLmFwb2xsby5tdXRhdGUob3B0aW9ucykpKVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRSZXF1ZXN0VG9RdWV1ZShzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4sIHJlcXVlc3Q6IE9ic2VydmFibGU8YW55Pik6IHZvaWQge1xuICAgIHRoaXMucXVldWUucHVzaCgoKSA9PiB7XG4gICAgICBjb25zdCBzdWIgPSByZXF1ZXN0LnN1YnNjcmliZShcbiAgICAgICAgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIC8vIGVtaXQgdGhlIG91dGVyIG9ic2VydmFibGVcbiAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocmVzcG9uc2UpO1xuICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcblxuICAgICAgICAgIHRoaXMuZmluaXNoUmVxdWVzdFN1YnNjcmlwdGlvbihzdWIpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnJvcilcbiAgICAgICAgICB0aGlzLmZpbmlzaFJlcXVlc3RTdWJzY3JpcHRpb24oc3ViKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKVxuICAgICAgICAgIHRoaXMuZmluaXNoUmVxdWVzdFN1YnNjcmlwdGlvbihzdWIpO1xuICAgICAgICB9XG4gICAgICApXG4gICAgfSk7XG5cbiAgICAvLyBzdGFydCB0aGUgcXVldWUgaWYgcHJldmlvdXNseSBlbXB0eVxuICAgIGlmICh0aGlzLnF1ZXVlLmxlbmd0aCA9PT0gMSkgdGhpcy5xdWV1ZVswXSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5pc2hSZXF1ZXN0U3Vic2NyaXB0aW9uKHJlcXVlc3RTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbik6IHZvaWQge1xuICAgIHJlcXVlc3RTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuICAgIC8vIHByb2Nlc3MgcXVldWVcbiAgICB0aGlzLnF1ZXVlLnNoaWZ0KCk7XG4gICAgLy8gVE9ETzogb3B0aW9uYWwgY2hhaW5pbmdcbiAgICBpZiAodGhpcy5xdWV1ZVswXSkgdGhpcy5xdWV1ZVswXSgpO1xuICB9XG59XG4iXX0=