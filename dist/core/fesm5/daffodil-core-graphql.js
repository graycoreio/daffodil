import { __spread } from 'tslib';
import { Injectable, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var getFragmentNames = (/**
 * @param {?} fragment
 * @return {?}
 */
function (fragment) {
    return fragment.definitions.filter((/**
     * @param {?} def
     * @return {?}
     */
    function (def) {
        return def.kind === 'FragmentDefinition';
    })).map((/**
     * @param {?} def
     * @return {?}
     */
    function (def) {
        return ((/** @type {?} */ (def))).name.value;
    }));
})
/**
 * Builds a list of fragment names present inside the specified GraphQL document nodes.
 * Returns an empty array if no fragments have been defined or if null is passed.
 * @param fragments The created fragments.
 */
;
var ɵ0 = getFragmentNames;
/**
 * Builds a list of fragment names present inside the specified GraphQL document nodes.
 * Returns an empty array if no fragments have been defined or if null is passed.
 * \@param fragments The created fragments.
 * @type {?}
 */
var daffGetFragmentNames = (/**
 * @param {...?} fragments
 * @return {?}
 */
function () {
    var fragments = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fragments[_i] = arguments[_i];
    }
    return fragments.reduce((/**
     * @param {?} acc
     * @param {?} fragment
     * @return {?}
     */
    function (acc, fragment) { return acc.concat(getFragmentNames(fragment)); }), []);
})
/**
 * Builds a string of fragment names that can be interpolated into a GraphQL query.
 * Each name is separated by a newline character: '\n'.
 * If an empty array is passed, an empty string is returned.
 * @param fragments A list of GraphQL documents that contain fragments.
 */
;
var ɵ1 = daffGetFragmentNames;
/**
 * Builds a string of fragment names that can be interpolated into a GraphQL query.
 * Each name is separated by a newline character: '\n'.
 * If an empty array is passed, an empty string is returned.
 * \@param fragments A list of GraphQL documents that contain fragments.
 * @type {?}
 */
var daffBuildFragmentNameSpread = (/**
 * @param {...?} fragments
 * @return {?}
 */
function () {
    var fragments = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fragments[_i] = arguments[_i];
    }
    return daffGetFragmentNames.apply(void 0, __spread(fragments)).reduce((/**
     * @param {?} acc
     * @param {?} name
     * @return {?}
     */
    function (acc, name) { return acc.concat("..." + name + "\n"); }), '');
});

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
var daffBuildFragmentDefinition = (/**
 * @param {...?} documents
 * @return {?}
 */
function () {
    var documents = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        documents[_i] = arguments[_i];
    }
    return documents.reduce((/**
     * @param {?} acc
     * @param {?} fragment
     * @return {?}
     */
    function (acc, fragment) { return acc.concat(fragment.loc.source.body + "\n"); }), '');
});

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
    /** @nocollapse */ DaffQueuedApollo.ngInjectableDef = ɵɵdefineInjectable({ factory: function DaffQueuedApollo_Factory() { return new DaffQueuedApollo(ɵɵinject(Apollo)); }, token: DaffQueuedApollo, providedIn: "root" });
    return DaffQueuedApollo;
}());
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
