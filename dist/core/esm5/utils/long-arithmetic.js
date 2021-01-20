/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * A function to add long numbers accurately with conversions and integer math.
 * This function only guarantees correct answers when the numbers given and the result are less than
 * 16 significant figures and less than 10^11
 *
 * @param {...?} numbers
 * @return {?}
 */
export function daffAdd() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    if (numbers.length < 2)
        throw new Error('Provide at least 2 numbers for daffAdd.');
    /** @type {?} */
    var precision = Math.max.apply(Math, tslib_1.__spread(numbers.map(daffPrecision)));
    return numbers.reduce((/**
     * @param {?} acc
     * @param {?} number
     * @return {?}
     */
    function (acc, number) {
        return acc + Math.round(number * precision);
    }), 0) / precision;
}
/**
 * A function to subtract long numbers accurately with conversions and integer math.
 * This function only guarantees correct answers when the numbers given and the result are each less than
 * 16 significant figures and less than 10^11
 *
 * @param {...?} numbers
 * @return {?}
 */
export function daffSubtract() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    if (numbers.length < 2)
        throw new Error('Provide at least 2 numbers for daffSubtract.');
    /** @type {?} */
    var precision = Math.max.apply(Math, tslib_1.__spread(numbers.map(daffPrecision)));
    return numbers.slice(1).reduce((/**
     * @param {?} acc
     * @param {?} number
     * @return {?}
     */
    function (acc, number) { return acc - Math.round(number * precision); }), Math.round(numbers[0] * precision)) / precision;
}
/**
 * A function to multiply long numbers accurately with conversions and integer math.
 * This function only guarantees correct answers when the numbers given and the result are each less than 16 significant figures
 * and less than 10^11
 *
 * @param {...?} numbers
 * @return {?}
 */
export function daffMultiply() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    if (numbers.length < 2)
        throw new Error('Provide at least 2 numbers for daffMultiply.');
    /** @type {?} */
    var precision = Math.max.apply(Math, tslib_1.__spread(numbers.map(daffPrecision)));
    return numbers.reduce((/**
     * @param {?} acc
     * @param {?} number
     * @return {?}
     */
    function (acc, number) { return acc * Math.round(number * precision); }), 1) / Math.pow(precision, numbers.length);
}
/**
 * A function to divide long numbers accurately with conversions and integer math.
 * This function only guarantees correct answers when the numbers given and the result are each less than 16 significant figures
 * and less than 10^11
 *
 * @param {...?} numbers
 * @return {?}
 */
export function daffDivide() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    if (numbers.length < 2)
        throw new Error('Provide at least 2 numbers for daffDivide.');
    /** @type {?} */
    var precision = Math.max.apply(Math, tslib_1.__spread(numbers.map(daffPrecision)));
    return numbers.slice(1).reduce((/**
     * @param {?} acc
     * @param {?} number
     * @return {?}
     */
    function (acc, number) { return acc / Math.round(number * precision); }), Math.round(numbers[0] * precision)) * Math.pow(precision, numbers.length - 2);
}
/**
 * A helper function to get the number of decimal significant figures of a number.
 * This function will fail if the given number has more than 16 significant figures or
 * the value of the number is greater than 10^11
 * @param {?} number
 * @return {?}
 */
function daffPrecision(number) {
    /** @type {?} */
    var p = 10000;
    if (number === undefined || number === null)
        return p;
    while (Math.round(number * p) / p !== number) {
        p *= 10;
    }
    return p;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1hcml0aG1ldGljLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvcmUvIiwic291cmNlcyI6WyJ1dGlscy9sb25nLWFyaXRobWV0aWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU9BLE1BQU0sVUFBVSxPQUFPO0lBQUMsaUJBQW9CO1NBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtRQUFwQiw0QkFBb0I7O0lBQzNDLElBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDOztRQUM1RSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsT0FBUixJQUFJLG1CQUFRLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUM7SUFDekQsT0FBTyxPQUFPLENBQUMsTUFBTTs7Ozs7SUFBQyxVQUFDLEdBQUcsRUFBRSxNQUFNO1FBQ2pDLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUMsR0FBRSxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7QUFDbkIsQ0FBQzs7Ozs7Ozs7O0FBU0QsTUFBTSxVQUFVLFlBQVk7SUFBQyxpQkFBb0I7U0FBcEIsVUFBb0IsRUFBcEIscUJBQW9CLEVBQXBCLElBQW9CO1FBQXBCLDRCQUFvQjs7SUFDaEQsSUFBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7O1FBQ2pGLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxPQUFSLElBQUksbUJBQVEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBQztJQUN6RCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTs7Ozs7SUFDN0IsVUFBQyxHQUFHLEVBQUUsTUFBTSxJQUFLLE9BQUEsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLFNBQVMsQ0FBQyxFQUFsQyxDQUFrQyxHQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBQyxTQUFTLENBQUMsQ0FDaEMsR0FBRyxTQUFTLENBQUM7QUFDZixDQUFDOzs7Ozs7Ozs7QUFTRCxNQUFNLFVBQVUsWUFBWTtJQUFDLGlCQUFvQjtTQUFwQixVQUFvQixFQUFwQixxQkFBb0IsRUFBcEIsSUFBb0I7UUFBcEIsNEJBQW9COztJQUNoRCxJQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQzs7UUFDakYsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLE9BQVIsSUFBSSxtQkFBUSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFDO0lBQ3pELE9BQU8sT0FBTyxDQUFDLE1BQU07Ozs7O0lBQ3BCLFVBQUMsR0FBRyxFQUFFLE1BQU0sSUFBSyxPQUFBLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxTQUFTLENBQUMsRUFBbEMsQ0FBa0MsR0FDbkQsQ0FBQyxDQUNELEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLENBQUM7Ozs7Ozs7OztBQVNELE1BQU0sVUFBVSxVQUFVO0lBQUMsaUJBQW9CO1NBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtRQUFwQiw0QkFBb0I7O0lBQzlDLElBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDOztRQUMvRSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsT0FBUixJQUFJLG1CQUFRLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUM7SUFDekQsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07Ozs7O0lBQzdCLFVBQUMsR0FBRyxFQUFFLE1BQU0sSUFBSyxPQUFBLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxTQUFTLENBQUMsRUFBbEMsQ0FBa0MsR0FDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDLENBQ2hDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM3QyxDQUFDOzs7Ozs7OztBQVFELFNBQVMsYUFBYSxDQUFDLE1BQWM7O1FBQ2hDLENBQUMsR0FBRyxLQUFLO0lBQ2IsSUFBRyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssTUFBTSxFQUFFO1FBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUFFO0lBQzFELE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBmdW5jdGlvbiB0byBhZGQgbG9uZyBudW1iZXJzIGFjY3VyYXRlbHkgd2l0aCBjb252ZXJzaW9ucyBhbmQgaW50ZWdlciBtYXRoLlxuICogVGhpcyBmdW5jdGlvbiBvbmx5IGd1YXJhbnRlZXMgY29ycmVjdCBhbnN3ZXJzIHdoZW4gdGhlIG51bWJlcnMgZ2l2ZW4gYW5kIHRoZSByZXN1bHQgYXJlIGxlc3MgdGhhblxuICogMTYgc2lnbmlmaWNhbnQgZmlndXJlcyBhbmQgbGVzcyB0aGFuIDEwXjExXG4gKiBcbiAqIEBwYXJhbSBudW1iZXJzIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGFmZkFkZCguLi5udW1iZXJzOiBudW1iZXJbXSkge1xuXHRpZihudW1iZXJzLmxlbmd0aCA8IDIpIHRocm93IG5ldyBFcnJvcignUHJvdmlkZSBhdCBsZWFzdCAyIG51bWJlcnMgZm9yIGRhZmZBZGQuJyk7XG5cdGNvbnN0IHByZWNpc2lvbiA9IE1hdGgubWF4KC4uLm51bWJlcnMubWFwKGRhZmZQcmVjaXNpb24pKTtcblx0cmV0dXJuIG51bWJlcnMucmVkdWNlKChhY2MsIG51bWJlcikgPT4ge1xuXHRcdHJldHVybiBhY2MgKyBNYXRoLnJvdW5kKG51bWJlcipwcmVjaXNpb24pO1xuXHR9LCAwKSAvIHByZWNpc2lvbjtcbn1cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIHN1YnRyYWN0IGxvbmcgbnVtYmVycyBhY2N1cmF0ZWx5IHdpdGggY29udmVyc2lvbnMgYW5kIGludGVnZXIgbWF0aC5cbiAqIFRoaXMgZnVuY3Rpb24gb25seSBndWFyYW50ZWVzIGNvcnJlY3QgYW5zd2VycyB3aGVuIHRoZSBudW1iZXJzIGdpdmVuIGFuZCB0aGUgcmVzdWx0IGFyZSBlYWNoIGxlc3MgdGhhblxuICogMTYgc2lnbmlmaWNhbnQgZmlndXJlcyBhbmQgbGVzcyB0aGFuIDEwXjExXG4gKiBcbiAqIEBwYXJhbSBudW1iZXJzIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGFmZlN1YnRyYWN0KC4uLm51bWJlcnM6IG51bWJlcltdKSB7XG5cdGlmKG51bWJlcnMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKCdQcm92aWRlIGF0IGxlYXN0IDIgbnVtYmVycyBmb3IgZGFmZlN1YnRyYWN0LicpOyBcblx0Y29uc3QgcHJlY2lzaW9uID0gTWF0aC5tYXgoLi4ubnVtYmVycy5tYXAoZGFmZlByZWNpc2lvbikpO1xuXHRyZXR1cm4gbnVtYmVycy5zbGljZSgxKS5yZWR1Y2UoXG5cdFx0KGFjYywgbnVtYmVyKSA9PiBhY2MgLSBNYXRoLnJvdW5kKG51bWJlcipwcmVjaXNpb24pLCBcblx0XHRNYXRoLnJvdW5kKG51bWJlcnNbMF0qcHJlY2lzaW9uKVxuXHQpIC8gcHJlY2lzaW9uO1xufVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gbXVsdGlwbHkgbG9uZyBudW1iZXJzIGFjY3VyYXRlbHkgd2l0aCBjb252ZXJzaW9ucyBhbmQgaW50ZWdlciBtYXRoLlxuICogVGhpcyBmdW5jdGlvbiBvbmx5IGd1YXJhbnRlZXMgY29ycmVjdCBhbnN3ZXJzIHdoZW4gdGhlIG51bWJlcnMgZ2l2ZW4gYW5kIHRoZSByZXN1bHQgYXJlIGVhY2ggbGVzcyB0aGFuIDE2IHNpZ25pZmljYW50IGZpZ3VyZXNcbiAqIGFuZCBsZXNzIHRoYW4gMTBeMTFcbiAqIFxuICogQHBhcmFtIG51bWJlcnMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYWZmTXVsdGlwbHkoLi4ubnVtYmVyczogbnVtYmVyW10pIHtcblx0aWYobnVtYmVycy5sZW5ndGggPCAyKSB0aHJvdyBuZXcgRXJyb3IoJ1Byb3ZpZGUgYXQgbGVhc3QgMiBudW1iZXJzIGZvciBkYWZmTXVsdGlwbHkuJyk7IFxuXHRjb25zdCBwcmVjaXNpb24gPSBNYXRoLm1heCguLi5udW1iZXJzLm1hcChkYWZmUHJlY2lzaW9uKSk7XG5cdHJldHVybiBudW1iZXJzLnJlZHVjZShcblx0XHQoYWNjLCBudW1iZXIpID0+IGFjYyAqIE1hdGgucm91bmQobnVtYmVyKnByZWNpc2lvbiksIFxuXHRcdDFcblx0KSAvIE1hdGgucG93KHByZWNpc2lvbiwgbnVtYmVycy5sZW5ndGgpO1xufVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gZGl2aWRlIGxvbmcgbnVtYmVycyBhY2N1cmF0ZWx5IHdpdGggY29udmVyc2lvbnMgYW5kIGludGVnZXIgbWF0aC5cbiAqIFRoaXMgZnVuY3Rpb24gb25seSBndWFyYW50ZWVzIGNvcnJlY3QgYW5zd2VycyB3aGVuIHRoZSBudW1iZXJzIGdpdmVuIGFuZCB0aGUgcmVzdWx0IGFyZSBlYWNoIGxlc3MgdGhhbiAxNiBzaWduaWZpY2FudCBmaWd1cmVzXG4gKiBhbmQgbGVzcyB0aGFuIDEwXjExXG4gKiBcbiAqIEBwYXJhbSBudW1iZXJzIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGFmZkRpdmlkZSguLi5udW1iZXJzOiBudW1iZXJbXSkge1xuXHRpZihudW1iZXJzLmxlbmd0aCA8IDIpIHRocm93IG5ldyBFcnJvcignUHJvdmlkZSBhdCBsZWFzdCAyIG51bWJlcnMgZm9yIGRhZmZEaXZpZGUuJyk7IFxuXHRjb25zdCBwcmVjaXNpb24gPSBNYXRoLm1heCguLi5udW1iZXJzLm1hcChkYWZmUHJlY2lzaW9uKSk7XG5cdHJldHVybiBudW1iZXJzLnNsaWNlKDEpLnJlZHVjZShcblx0XHQoYWNjLCBudW1iZXIpID0+IGFjYyAvIE1hdGgucm91bmQobnVtYmVyKnByZWNpc2lvbiksIFxuXHRcdE1hdGgucm91bmQobnVtYmVyc1swXSpwcmVjaXNpb24pXG5cdCkgKiBNYXRoLnBvdyhwcmVjaXNpb24sIG51bWJlcnMubGVuZ3RoIC0gMik7XG59XG5cbi8qKlxuICogQSBoZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHRoZSBudW1iZXIgb2YgZGVjaW1hbCBzaWduaWZpY2FudCBmaWd1cmVzIG9mIGEgbnVtYmVyLlxuICogVGhpcyBmdW5jdGlvbiB3aWxsIGZhaWwgaWYgdGhlIGdpdmVuIG51bWJlciBoYXMgbW9yZSB0aGFuIDE2IHNpZ25pZmljYW50IGZpZ3VyZXMgb3JcbiAqIHRoZSB2YWx1ZSBvZiB0aGUgbnVtYmVyIGlzIGdyZWF0ZXIgdGhhbiAxMF4xMVxuICogQHBhcmFtIG51bWJlclxuICovXG5mdW5jdGlvbiBkYWZmUHJlY2lzaW9uKG51bWJlcjogbnVtYmVyKSB7XG5cdGxldCBwID0gMTAwMDA7XG5cdGlmKG51bWJlciA9PT0gdW5kZWZpbmVkIHx8IG51bWJlciA9PT0gbnVsbCkgcmV0dXJuIHA7XG4gIHdoaWxlIChNYXRoLnJvdW5kKG51bWJlciAqIHApIC8gcCAhPT0gbnVtYmVyKSB7IHAgKj0gMTA7IH1cbiAgcmV0dXJuIHA7XG59XG4iXX0=