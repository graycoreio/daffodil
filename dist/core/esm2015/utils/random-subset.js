/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { shuffle } from './shuffle';
/**
 * Returns a random subset of an array in a random order.
 * \@param array
 * \@param length
 * @type {?}
 */
export const randomSubset = (/**
 * @template T
 * @param {?} array
 * @param {?=} length
 * @return {?}
 */
(array, length) => {
    if (length > array.length) {
        throw new Error('Requested length is longer than array length.');
    }
    length = length ? length : Math.floor(Math.random() * array.length);
    return shuffle(array).slice(0, length);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLXN1YnNldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbHMvcmFuZG9tLXN1YnNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7OztBQU9wQyxNQUFNLE9BQU8sWUFBWTs7Ozs7O0FBQUcsQ0FBSSxLQUFVLEVBQUUsTUFBZSxFQUFPLEVBQUU7SUFDbEUsSUFBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBQztRQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7S0FDbEU7SUFDRCxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwRSxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNodWZmbGUgfSBmcm9tICcuL3NodWZmbGUnO1xuXG4vKipcbiAqIFJldHVybnMgYSByYW5kb20gc3Vic2V0IG9mIGFuIGFycmF5IGluIGEgcmFuZG9tIG9yZGVyLlxuICogQHBhcmFtIGFycmF5IFxuICogQHBhcmFtIGxlbmd0aCBcbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbVN1YnNldCA9IDxUPihhcnJheTogVFtdLCBsZW5ndGg/IDpudW1iZXIpOiBUW10gPT4ge1xuICBpZihsZW5ndGggPiBhcnJheS5sZW5ndGgpe1xuICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdGVkIGxlbmd0aCBpcyBsb25nZXIgdGhhbiBhcnJheSBsZW5ndGguJyk7XG4gIH1cbiAgbGVuZ3RoID0gbGVuZ3RoID8gbGVuZ3RoIDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcbiAgcmV0dXJuIHNodWZmbGUoYXJyYXkpLnNsaWNlKDAsIGxlbmd0aCk7XG59XG4iXX0=