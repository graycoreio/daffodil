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
    attempt => attempt.pipe(mergeMap((/**
     * @param {?} shadowedAttempt
     * @param {?} i
     * @return {?}
     */
    (shadowedAttempt, i) => {
        if (i >= maxTries)
            return throwError(shadowedAttempt);
        return timer(ms * Math.pow(2, i));
    }))))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja29mZi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvcmUvIiwic291cmNlcyI6WyJvcGVyYXRvcnMvYmFja29mZi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQU9yRCxNQUFNLFVBQVUsT0FBTyxDQUFDLFFBQWdCLEVBQUUsRUFBVTtJQUNuRCxPQUFPLElBQUksQ0FDVixTQUFTOzs7O0lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNoQyxRQUFROzs7OztJQUFDLENBQUMsZUFBc0IsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxJQUFHLENBQUMsSUFBSSxRQUFRO1lBQUUsT0FBTyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDckQsT0FBTyxLQUFLLENBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxFQUFDLENBQ0YsRUFBQyxDQUNGLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGlwZSwgdGltZXIsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHJldHJ5V2hlbiwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogUmV0cmllcyBmYWlsZWQgT2JzZXJ2YWJsZXNcbiAqIEBwYXJhbSBtYXhUcmllcyBUaGUgbWF4aW11bSBudW1iZXIgb2YgdHJpZXMgdGhlIG9ic2VydmFibGUgd2lsbCBiZSB0cmllZFxuICogQHBhcmFtIG1zIFRoZSBpbml0aWFsIGFtb3VudCBvZiB0aW1lIFxuICovXG5leHBvcnQgZnVuY3Rpb24gYmFja29mZihtYXhUcmllczogbnVtYmVyLCBtczogbnVtYmVyKSB7XG5cdHJldHVybiBwaXBlKFxuXHRcdHJldHJ5V2hlbihhdHRlbXB0ID0+IGF0dGVtcHQucGlwZShcblx0XHRcdG1lcmdlTWFwKChzaGFkb3dlZEF0dGVtcHQ6IEVycm9yLCBpKSA9PiB7XG5cdFx0XHRcdGlmKGkgPj0gbWF4VHJpZXMpIHJldHVybiB0aHJvd0Vycm9yKHNoYWRvd2VkQXR0ZW1wdCk7XG5cdFx0XHRcdHJldHVybiB0aW1lcihtcypNYXRoLnBvdygyLGkpKTtcblx0XHRcdH0pXG5cdFx0KSlcblx0KTtcbn1cbiJdfQ==