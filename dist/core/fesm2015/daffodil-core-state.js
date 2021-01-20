import { pipe } from 'rxjs';
import { scan, filter } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const compareActionSequenceStep = (/**
 * @param {?} step
 * @param {?} action
 * @return {?}
 */
(step, action) => Array.isArray(step)
    ? step.reduce((/**
     * @param {?} acc
     * @param {?} type
     * @return {?}
     */
    (acc, type) => acc || action.type === type), false)
    : action.type === step)
/**
 * Watches for a particular stream of actions in the specified order and
 * emits a list of those actions once all sequence steps have been matched.
 *
 * This will find the first occurence of the substream and not necessarily the most concise or recent substream.
 * For example, substream([A, B]) encountering an action stream of [A1, A2, B1, B2] will emit [A1, B1].
 * When a substream is found and emitted, the list is reset and it will continue to listen to the action stream.
 *
 * You can indicate that a particular step in the sequence can be matched by mutiple actions by passing an array for that step.
 * For example, if the first step of the sequence could be action A or action B: substream([[A, B], C]).
 * An action stream of [A1, C1] would cause substream to emit [A1, C1].
 * An action stream of [B1, C1] would cause substream to emit [B1, C1].
 * An action stream of [A1, B1, C1] would cause substream to emit [A1, C1].
 *
 * You can optionally pass a list of terminators.
 * If a terminator is encountered in the action stream, any partially matched substream is reset.
 * For example, substream([A, B], C) would not emit anything for an action stream of [A1, C1, B1].
 *
 * @param sequence The sequence of action types that define the substream to listen for.
 * @param terminators A list of terminators, any of which interrupt and reset a partially matched substream.
 */
;
const ɵ0 = compareActionSequenceStep;
/**
 * Watches for a particular stream of actions in the specified order and
 * emits a list of those actions once all sequence steps have been matched.
 *
 * This will find the first occurence of the substream and not necessarily the most concise or recent substream.
 * For example, substream([A, B]) encountering an action stream of [A1, A2, B1, B2] will emit [A1, B1].
 * When a substream is found and emitted, the list is reset and it will continue to listen to the action stream.
 *
 * You can indicate that a particular step in the sequence can be matched by mutiple actions by passing an array for that step.
 * For example, if the first step of the sequence could be action A or action B: substream([[A, B], C]).
 * An action stream of [A1, C1] would cause substream to emit [A1, C1].
 * An action stream of [B1, C1] would cause substream to emit [B1, C1].
 * An action stream of [A1, B1, C1] would cause substream to emit [A1, C1].
 *
 * You can optionally pass a list of terminators.
 * If a terminator is encountered in the action stream, any partially matched substream is reset.
 * For example, substream([A, B], C) would not emit anything for an action stream of [A1, C1, B1].
 *
 * \@param sequence The sequence of action types that define the substream to listen for.
 * \@param terminators A list of terminators, any of which interrupt and reset a partially matched substream.
 * @type {?}
 */
const substream = (/**
 * @param {?} sequence
 * @param {...?} terminators
 * @return {?}
 */
(sequence, ...terminators) => {
    /** @type {?} */
    const isFullMatch = (/**
     * @param {?} matchedSubstream
     * @return {?}
     */
    matchedSubstream => matchedSubstream.length === sequence.length);
    /** @type {?} */
    const accumulateMatchedSubstream = (/**
     * @param {?} matchedSubstream
     * @param {?} action
     * @return {?}
     */
    (matchedSubstream, action) => compareActionSequenceStep(sequence[matchedSubstream.length], action)
        ? [
            ...matchedSubstream,
            action
        ]
        : matchedSubstream);
    return pipe(scan((/**
     * @param {?} matchedSubstream
     * @param {?} action
     * @return {?}
     */
    (matchedSubstream, action) => terminators.indexOf(action.type) > -1
        // terminator found, reset the list
        ? []
        : accumulateMatchedSubstream(
        // reset the list if fully matched
        isFullMatch(matchedSubstream) ? [] : matchedSubstream, action)), []), filter(isFullMatch));
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffLoadingState = {
    Resolving: 'Resolving',
    Mutating: 'Mutating',
    Complete: 'Complete',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Transforms an error instance to a state error object.
 * @param {?} __0
 * @return {?}
 */
function daffTransformErrorToStateError({ code, message }) {
    return { code, message };
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

export { DaffLoadingState, daffTransformErrorToStateError, substream };
//# sourceMappingURL=daffodil-core-state.js.map
