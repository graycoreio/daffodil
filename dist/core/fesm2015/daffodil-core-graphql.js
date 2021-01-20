import { Injectable, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const getFragmentNames = (/**
 * @param {?} fragment
 * @return {?}
 */
(fragment) => fragment.definitions.filter((/**
 * @param {?} def
 * @return {?}
 */
def => def.kind === 'FragmentDefinition')).map((/**
 * @param {?} def
 * @return {?}
 */
def => ((/** @type {?} */ (def))).name.value)))
/**
 * Builds a list of fragment names present inside the specified GraphQL document nodes.
 * Returns an empty array if no fragments have been defined or if null is passed.
 * @param fragments The created fragments.
 */
;
const ɵ0 = getFragmentNames;
/**
 * Builds a list of fragment names present inside the specified GraphQL document nodes.
 * Returns an empty array if no fragments have been defined or if null is passed.
 * \@param fragments The created fragments.
 * @type {?}
 */
const daffGetFragmentNames = (/**
 * @param {...?} fragments
 * @return {?}
 */
(...fragments) => fragments.reduce((/**
 * @param {?} acc
 * @param {?} fragment
 * @return {?}
 */
(acc, fragment) => acc.concat(getFragmentNames(fragment))), []))
/**
 * Builds a string of fragment names that can be interpolated into a GraphQL query.
 * Each name is separated by a newline character: '\n'.
 * If an empty array is passed, an empty string is returned.
 * @param fragments A list of GraphQL documents that contain fragments.
 */
;
const ɵ1 = daffGetFragmentNames;
/**
 * Builds a string of fragment names that can be interpolated into a GraphQL query.
 * Each name is separated by a newline character: '\n'.
 * If an empty array is passed, an empty string is returned.
 * \@param fragments A list of GraphQL documents that contain fragments.
 * @type {?}
 */
const daffBuildFragmentNameSpread = (/**
 * @param {...?} fragments
 * @return {?}
 */
(...fragments) => daffGetFragmentNames(...fragments).reduce((/**
 * @param {?} acc
 * @param {?} name
 * @return {?}
 */
(acc, name) => acc.concat(`...${name}\n`)), ''));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Builds a string of fragment definitions that can be interpolated into a GraphQL query.
 * Each definition is separated by a newline character: '\n'.
 * \@param documents A list of GraphQL documents that should only contain fragments.
 * @type {?}
 */
const daffBuildFragmentDefinition = (/**
 * @param {...?} documents
 * @return {?}
 */
(...documents) => documents.reduce((/**
 * @param {?} acc
 * @param {?} fragment
 * @return {?}
 */
(acc, fragment) => acc.concat(`${fragment.loc.source.body}\n`)), ''));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A service that will queue mutate calls to Apollo.
 * It will not send subsequent mutate requests until the previous one has been completed.
 * This is useful for avoiding race conditions on the backend.
 * This should be used alongside Apollo.
 */
class DaffQueuedApollo {
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
/** @nocollapse */ DaffQueuedApollo.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffQueuedApollo_Factory() { return new DaffQueuedApollo(ɵɵinject(Apollo)); }, token: DaffQueuedApollo, providedIn: "root" });
if (false) {
    /** @type {?} */
    DaffQueuedApollo.prototype.queue;
    /**
     * @type {?}
     * @private
     */
    DaffQueuedApollo.prototype.apollo;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DaffQueuedApollo, daffBuildFragmentDefinition, daffBuildFragmentNameSpread };
//# sourceMappingURL=daffodil-core-graphql.js.map
