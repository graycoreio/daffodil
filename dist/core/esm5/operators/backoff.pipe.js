/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { pipe, timer, throwError } from 'rxjs';
import { retryWhen, mergeMap } from 'rxjs/operators';
/**
 * Retries failed Observables
 * @param {?} maxTries The maximum number of tries the observable will be tried
 * @param {?} ms The initial amount of time
 * @return {?}
 */
export function backoff(maxTries, ms) {
    return pipe(retryWhen((/**
     * @param {?} attempt
     * @return {?}
     */
    function (attempt) { return attempt.pipe(mergeMap((/**
     * @param {?} shadowedAttempt
     * @param {?} i
     * @return {?}
     */
    function (shadowedAttempt, i) {
        if (i >= maxTries)
            return throwError(shadowedAttempt);
        return timer(ms * Math.pow(2, i));
    }))); })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja29mZi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvcmUvIiwic291cmNlcyI6WyJvcGVyYXRvcnMvYmFja29mZi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQU9yRCxNQUFNLFVBQVUsT0FBTyxDQUFDLFFBQWdCLEVBQUUsRUFBVTtJQUNuRCxPQUFPLElBQUksQ0FDVixTQUFTOzs7O0lBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxDQUNoQyxRQUFROzs7OztJQUFDLFVBQUMsZUFBc0IsRUFBRSxDQUFDO1FBQ2xDLElBQUcsQ0FBQyxJQUFJLFFBQVE7WUFBRSxPQUFPLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNyRCxPQUFPLEtBQUssQ0FBQyxFQUFFLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDLEVBQUMsQ0FDRixFQUxvQixDQUtwQixFQUFDLENBQ0YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwaXBlLCB0aW1lciwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgcmV0cnlXaGVuLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBSZXRyaWVzIGZhaWxlZCBPYnNlcnZhYmxlc1xuICogQHBhcmFtIG1heFRyaWVzIFRoZSBtYXhpbXVtIG51bWJlciBvZiB0cmllcyB0aGUgb2JzZXJ2YWJsZSB3aWxsIGJlIHRyaWVkXG4gKiBAcGFyYW0gbXMgVGhlIGluaXRpYWwgYW1vdW50IG9mIHRpbWUgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiYWNrb2ZmKG1heFRyaWVzOiBudW1iZXIsIG1zOiBudW1iZXIpIHtcblx0cmV0dXJuIHBpcGUoXG5cdFx0cmV0cnlXaGVuKGF0dGVtcHQgPT4gYXR0ZW1wdC5waXBlKFxuXHRcdFx0bWVyZ2VNYXAoKHNoYWRvd2VkQXR0ZW1wdDogRXJyb3IsIGkpID0+IHtcblx0XHRcdFx0aWYoaSA+PSBtYXhUcmllcykgcmV0dXJuIHRocm93RXJyb3Ioc2hhZG93ZWRBdHRlbXB0KTtcblx0XHRcdFx0cmV0dXJuIHRpbWVyKG1zKk1hdGgucG93KDIsaSkpO1xuXHRcdFx0fSlcblx0XHQpKVxuXHQpO1xufVxuIl19