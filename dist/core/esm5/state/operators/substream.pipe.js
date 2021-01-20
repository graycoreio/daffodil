/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { pipe } from 'rxjs';
import { scan, filter } from 'rxjs/operators';
/** @type {?} */
var compareActionSequenceStep = (/**
 * @param {?} step
 * @param {?} action
 * @return {?}
 */
function (step, action) { return Array.isArray(step)
    ? step.reduce((/**
     * @param {?} acc
     * @param {?} type
     * @return {?}
     */
    function (acc, type) { return acc || action.type === type; }), false)
    : action.type === step; })
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
var ɵ0 = compareActionSequenceStep;
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
export var substream = (/**
 * @param {?} sequence
 * @param {...?} terminators
 * @return {?}
 */
function (sequence) {
    var terminators = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        terminators[_i - 1] = arguments[_i];
    }
    /** @type {?} */
    var isFullMatch = (/**
     * @param {?} matchedSubstream
     * @return {?}
     */
    function (matchedSubstream) { return matchedSubstream.length === sequence.length; });
    /** @type {?} */
    var accumulateMatchedSubstream = (/**
     * @param {?} matchedSubstream
     * @param {?} action
     * @return {?}
     */
    function (matchedSubstream, action) {
        return compareActionSequenceStep(sequence[matchedSubstream.length], action)
            ? tslib_1.__spread(matchedSubstream, [
                action
            ]) : matchedSubstream;
    });
    return pipe(scan((/**
     * @param {?} matchedSubstream
     * @param {?} action
     * @return {?}
     */
    function (matchedSubstream, action) {
        return terminators.indexOf(action.type) > -1
            // terminator found, reset the list
            ? []
            : accumulateMatchedSubstream(
            // reset the list if fully matched
            isFullMatch(matchedSubstream) ? [] : matchedSubstream, action);
    }), []), filter(isFullMatch));
});
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic3RyZWFtLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY29yZS9zdGF0ZS8iLCJzb3VyY2VzIjpbIm9wZXJhdG9ycy9zdWJzdHJlYW0ucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFNeEMseUJBQXlCOzs7OztBQUFHLFVBQUMsSUFBd0IsRUFBRSxNQUFjLElBQWMsT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMxRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7O0lBQUMsVUFBQyxHQUFHLEVBQUUsSUFBSSxJQUFLLE9BQUEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUEzQixDQUEyQixHQUFFLEtBQUssQ0FBQztJQUNoRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxJQUFJLEVBRmlFLENBRWpFLENBQUE7QUFFeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0gsTUFBTSxLQUFPLFNBQVM7Ozs7O0FBQUcsVUFBQyxRQUF3QjtJQUFFLHFCQUE0QjtTQUE1QixVQUE0QixFQUE1QixxQkFBNEIsRUFBNUIsSUFBNEI7UUFBNUIsb0NBQTRCOzs7UUFDeEUsV0FBVzs7OztJQUFHLFVBQUEsZ0JBQWdCLElBQUksT0FBQSxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBM0MsQ0FBMkMsQ0FBQTs7UUFDN0UsMEJBQTBCOzs7OztJQUFHLFVBQUMsZ0JBQWdCLEVBQUUsTUFBTTtRQUMxRCxPQUFBLHlCQUF5QixDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUM7WUFDbEUsQ0FBQyxrQkFDSSxnQkFBZ0I7Z0JBQ25CLE1BQU07ZUFFUixDQUFDLENBQUMsZ0JBQWdCO0lBTHBCLENBS29CLENBQUE7SUFFdEIsT0FBTyxJQUFJLENBQ1QsSUFBSTs7Ozs7SUFBUyxVQUFDLGdCQUFnQixFQUFFLE1BQU07UUFDcEMsT0FBQSxXQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsbUNBQW1DO1lBQ25DLENBQUMsQ0FBQyxFQUFFO1lBQ0osQ0FBQyxDQUFDLDBCQUEwQjtZQUMxQixrQ0FBa0M7WUFDbEMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQ3JELE1BQU0sQ0FDUDtJQVBILENBT0csR0FDTCxFQUFFLENBQUMsRUFDSCxNQUFNLENBQUMsV0FBVyxDQUFDLENBQ3BCLENBQUE7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBwaXBlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzY2FuLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCB0eXBlIEFjdGlvblR5cGUgPSBBY3Rpb25bJ3R5cGUnXTtcbmV4cG9ydCB0eXBlIEFjdGlvblNlcXVlbmNlU3RlcCA9IEFjdGlvblR5cGUgfCBBY3Rpb25UeXBlW107XG5leHBvcnQgdHlwZSBBY3Rpb25TZXF1ZW5jZSA9IEFjdGlvblNlcXVlbmNlU3RlcFtdO1xuXG5jb25zdCBjb21wYXJlQWN0aW9uU2VxdWVuY2VTdGVwID0gKHN0ZXA6IEFjdGlvblNlcXVlbmNlU3RlcCwgYWN0aW9uOiBBY3Rpb24pOiBib29sZWFuID0+IEFycmF5LmlzQXJyYXkoc3RlcClcbiAgPyBzdGVwLnJlZHVjZSgoYWNjLCB0eXBlKSA9PiBhY2MgfHwgYWN0aW9uLnR5cGUgPT09IHR5cGUsIGZhbHNlKVxuICA6IGFjdGlvbi50eXBlID09PSBzdGVwXG5cbi8qKlxuICogV2F0Y2hlcyBmb3IgYSBwYXJ0aWN1bGFyIHN0cmVhbSBvZiBhY3Rpb25zIGluIHRoZSBzcGVjaWZpZWQgb3JkZXIgYW5kXG4gKiBlbWl0cyBhIGxpc3Qgb2YgdGhvc2UgYWN0aW9ucyBvbmNlIGFsbCBzZXF1ZW5jZSBzdGVwcyBoYXZlIGJlZW4gbWF0Y2hlZC5cbiAqXG4gKiBUaGlzIHdpbGwgZmluZCB0aGUgZmlyc3Qgb2NjdXJlbmNlIG9mIHRoZSBzdWJzdHJlYW0gYW5kIG5vdCBuZWNlc3NhcmlseSB0aGUgbW9zdCBjb25jaXNlIG9yIHJlY2VudCBzdWJzdHJlYW0uXG4gKiBGb3IgZXhhbXBsZSwgc3Vic3RyZWFtKFtBLCBCXSkgZW5jb3VudGVyaW5nIGFuIGFjdGlvbiBzdHJlYW0gb2YgW0ExLCBBMiwgQjEsIEIyXSB3aWxsIGVtaXQgW0ExLCBCMV0uXG4gKiBXaGVuIGEgc3Vic3RyZWFtIGlzIGZvdW5kIGFuZCBlbWl0dGVkLCB0aGUgbGlzdCBpcyByZXNldCBhbmQgaXQgd2lsbCBjb250aW51ZSB0byBsaXN0ZW4gdG8gdGhlIGFjdGlvbiBzdHJlYW0uXG4gKlxuICogWW91IGNhbiBpbmRpY2F0ZSB0aGF0IGEgcGFydGljdWxhciBzdGVwIGluIHRoZSBzZXF1ZW5jZSBjYW4gYmUgbWF0Y2hlZCBieSBtdXRpcGxlIGFjdGlvbnMgYnkgcGFzc2luZyBhbiBhcnJheSBmb3IgdGhhdCBzdGVwLlxuICogRm9yIGV4YW1wbGUsIGlmIHRoZSBmaXJzdCBzdGVwIG9mIHRoZSBzZXF1ZW5jZSBjb3VsZCBiZSBhY3Rpb24gQSBvciBhY3Rpb24gQjogc3Vic3RyZWFtKFtbQSwgQl0sIENdKS5cbiAqIEFuIGFjdGlvbiBzdHJlYW0gb2YgW0ExLCBDMV0gd291bGQgY2F1c2Ugc3Vic3RyZWFtIHRvIGVtaXQgW0ExLCBDMV0uXG4gKiBBbiBhY3Rpb24gc3RyZWFtIG9mIFtCMSwgQzFdIHdvdWxkIGNhdXNlIHN1YnN0cmVhbSB0byBlbWl0IFtCMSwgQzFdLlxuICogQW4gYWN0aW9uIHN0cmVhbSBvZiBbQTEsIEIxLCBDMV0gd291bGQgY2F1c2Ugc3Vic3RyZWFtIHRvIGVtaXQgW0ExLCBDMV0uXG4gKlxuICogWW91IGNhbiBvcHRpb25hbGx5IHBhc3MgYSBsaXN0IG9mIHRlcm1pbmF0b3JzLlxuICogSWYgYSB0ZXJtaW5hdG9yIGlzIGVuY291bnRlcmVkIGluIHRoZSBhY3Rpb24gc3RyZWFtLCBhbnkgcGFydGlhbGx5IG1hdGNoZWQgc3Vic3RyZWFtIGlzIHJlc2V0LlxuICogRm9yIGV4YW1wbGUsIHN1YnN0cmVhbShbQSwgQl0sIEMpIHdvdWxkIG5vdCBlbWl0IGFueXRoaW5nIGZvciBhbiBhY3Rpb24gc3RyZWFtIG9mIFtBMSwgQzEsIEIxXS5cbiAqXG4gKiBAcGFyYW0gc2VxdWVuY2UgVGhlIHNlcXVlbmNlIG9mIGFjdGlvbiB0eXBlcyB0aGF0IGRlZmluZSB0aGUgc3Vic3RyZWFtIHRvIGxpc3RlbiBmb3IuXG4gKiBAcGFyYW0gdGVybWluYXRvcnMgQSBsaXN0IG9mIHRlcm1pbmF0b3JzLCBhbnkgb2Ygd2hpY2ggaW50ZXJydXB0IGFuZCByZXNldCBhIHBhcnRpYWxseSBtYXRjaGVkIHN1YnN0cmVhbS5cbiAqL1xuZXhwb3J0IGNvbnN0IHN1YnN0cmVhbSA9IChzZXF1ZW5jZTogQWN0aW9uU2VxdWVuY2UsIC4uLnRlcm1pbmF0b3JzOiBBY3Rpb25UeXBlW10pID0+IHtcbiAgY29uc3QgaXNGdWxsTWF0Y2ggPSBtYXRjaGVkU3Vic3RyZWFtID0+IG1hdGNoZWRTdWJzdHJlYW0ubGVuZ3RoID09PSBzZXF1ZW5jZS5sZW5ndGg7XG4gIGNvbnN0IGFjY3VtdWxhdGVNYXRjaGVkU3Vic3RyZWFtID0gKG1hdGNoZWRTdWJzdHJlYW0sIGFjdGlvbikgPT5cbiAgICBjb21wYXJlQWN0aW9uU2VxdWVuY2VTdGVwKHNlcXVlbmNlW21hdGNoZWRTdWJzdHJlYW0ubGVuZ3RoXSwgYWN0aW9uKVxuICAgICAgPyBbXG4gICAgICAgIC4uLm1hdGNoZWRTdWJzdHJlYW0sXG4gICAgICAgIGFjdGlvblxuICAgICAgXVxuICAgICAgOiBtYXRjaGVkU3Vic3RyZWFtO1xuXG4gIHJldHVybiBwaXBlKFxuICAgIHNjYW48QWN0aW9uPigobWF0Y2hlZFN1YnN0cmVhbSwgYWN0aW9uKSA9PlxuICAgICAgdGVybWluYXRvcnMuaW5kZXhPZihhY3Rpb24udHlwZSkgPiAtMVxuICAgICAgICAvLyB0ZXJtaW5hdG9yIGZvdW5kLCByZXNldCB0aGUgbGlzdFxuICAgICAgICA/IFtdXG4gICAgICAgIDogYWNjdW11bGF0ZU1hdGNoZWRTdWJzdHJlYW0oXG4gICAgICAgICAgLy8gcmVzZXQgdGhlIGxpc3QgaWYgZnVsbHkgbWF0Y2hlZFxuICAgICAgICAgIGlzRnVsbE1hdGNoKG1hdGNoZWRTdWJzdHJlYW0pID8gW10gOiBtYXRjaGVkU3Vic3RyZWFtLFxuICAgICAgICAgIGFjdGlvblxuICAgICAgICApLFxuICAgIFtdKSxcbiAgICBmaWx0ZXIoaXNGdWxsTWF0Y2gpXG4gIClcbn1cbiJdfQ==