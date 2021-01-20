/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A function to add long numbers accurately with conversions and integer math.
 * This function only guarantees correct answers when the numbers given and the result are less than
 * 16 significant figures and less than 10^11
 *
 * @param {...?} numbers
 * @return {?}
 */
export function daffAdd(...numbers) {
    if (numbers.length < 2)
        throw new Error('Provide at least 2 numbers for daffAdd.');
    /** @type {?} */
    const precision = Math.max(...numbers.map(daffPrecision));
    return numbers.reduce((/**
     * @param {?} acc
     * @param {?} number
     * @return {?}
     */
    (acc, number) => {
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
export function daffSubtract(...numbers) {
    if (numbers.length < 2)
        throw new Error('Provide at least 2 numbers for daffSubtract.');
    /** @type {?} */
    const precision = Math.max(...numbers.map(daffPrecision));
    return numbers.slice(1).reduce((/**
     * @param {?} acc
     * @param {?} number
     * @return {?}
     */
    (acc, number) => acc - Math.round(number * precision)), Math.round(numbers[0] * precision)) / precision;
}
/**
 * A function to multiply long numbers accurately with conversions and integer math.
 * This function only guarantees correct answers when the numbers given and the result are each less than 16 significant figures
 * and less than 10^11
 *
 * @param {...?} numbers
 * @return {?}
 */
export function daffMultiply(...numbers) {
    if (numbers.length < 2)
        throw new Error('Provide at least 2 numbers for daffMultiply.');
    /** @type {?} */
    const precision = Math.max(...numbers.map(daffPrecision));
    return numbers.reduce((/**
     * @param {?} acc
     * @param {?} number
     * @return {?}
     */
    (acc, number) => acc * Math.round(number * precision)), 1) / Math.pow(precision, numbers.length);
}
/**
 * A function to divide long numbers accurately with conversions and integer math.
 * This function only guarantees correct answers when the numbers given and the result are each less than 16 significant figures
 * and less than 10^11
 *
 * @param {...?} numbers
 * @return {?}
 */
export function daffDivide(...numbers) {
    if (numbers.length < 2)
        throw new Error('Provide at least 2 numbers for daffDivide.');
    /** @type {?} */
    const precision = Math.max(...numbers.map(daffPrecision));
    return numbers.slice(1).reduce((/**
     * @param {?} acc
     * @param {?} number
     * @return {?}
     */
    (acc, number) => acc / Math.round(number * precision)), Math.round(numbers[0] * precision)) * Math.pow(precision, numbers.length - 2);
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
    let p = 10000;
    if (number === undefined || number === null)
        return p;
    while (Math.round(number * p) / p !== number) {
        p *= 10;
    }
    return p;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1hcml0aG1ldGljLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvcmUvIiwic291cmNlcyI6WyJ1dGlscy9sb25nLWFyaXRobWV0aWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBT0EsTUFBTSxVQUFVLE9BQU8sQ0FBQyxHQUFHLE9BQWlCO0lBQzNDLElBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDOztVQUM1RSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekQsT0FBTyxPQUFPLENBQUMsTUFBTTs7Ozs7SUFBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNyQyxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDLEdBQUUsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBQ25CLENBQUM7Ozs7Ozs7OztBQVNELE1BQU0sVUFBVSxZQUFZLENBQUMsR0FBRyxPQUFpQjtJQUNoRCxJQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQzs7VUFDakYsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNOzs7OztJQUM3QixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxTQUFTLENBQUMsR0FDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDLENBQ2hDLEdBQUcsU0FBUyxDQUFDO0FBQ2YsQ0FBQzs7Ozs7Ozs7O0FBU0QsTUFBTSxVQUFVLFlBQVksQ0FBQyxHQUFHLE9BQWlCO0lBQ2hELElBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDOztVQUNqRixTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekQsT0FBTyxPQUFPLENBQUMsTUFBTTs7Ozs7SUFDcEIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsU0FBUyxDQUFDLEdBQ25ELENBQUMsQ0FDRCxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN6QyxDQUFDOzs7Ozs7Ozs7QUFTRCxNQUFNLFVBQVUsVUFBVSxDQUFDLEdBQUcsT0FBaUI7SUFDOUMsSUFBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7O1VBQy9FLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6RCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTTs7Ozs7SUFDN0IsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsU0FBUyxDQUFDLEdBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFDLFNBQVMsQ0FBQyxDQUNoQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQzs7Ozs7Ozs7QUFRRCxTQUFTLGFBQWEsQ0FBQyxNQUFjOztRQUNoQyxDQUFDLEdBQUcsS0FBSztJQUNiLElBQUcsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSTtRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLE1BQU0sRUFBRTtRQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7S0FBRTtJQUMxRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgZnVuY3Rpb24gdG8gYWRkIGxvbmcgbnVtYmVycyBhY2N1cmF0ZWx5IHdpdGggY29udmVyc2lvbnMgYW5kIGludGVnZXIgbWF0aC5cbiAqIFRoaXMgZnVuY3Rpb24gb25seSBndWFyYW50ZWVzIGNvcnJlY3QgYW5zd2VycyB3aGVuIHRoZSBudW1iZXJzIGdpdmVuIGFuZCB0aGUgcmVzdWx0IGFyZSBsZXNzIHRoYW5cbiAqIDE2IHNpZ25pZmljYW50IGZpZ3VyZXMgYW5kIGxlc3MgdGhhbiAxMF4xMVxuICogXG4gKiBAcGFyYW0gbnVtYmVycyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhZmZBZGQoLi4ubnVtYmVyczogbnVtYmVyW10pIHtcblx0aWYobnVtYmVycy5sZW5ndGggPCAyKSB0aHJvdyBuZXcgRXJyb3IoJ1Byb3ZpZGUgYXQgbGVhc3QgMiBudW1iZXJzIGZvciBkYWZmQWRkLicpO1xuXHRjb25zdCBwcmVjaXNpb24gPSBNYXRoLm1heCguLi5udW1iZXJzLm1hcChkYWZmUHJlY2lzaW9uKSk7XG5cdHJldHVybiBudW1iZXJzLnJlZHVjZSgoYWNjLCBudW1iZXIpID0+IHtcblx0XHRyZXR1cm4gYWNjICsgTWF0aC5yb3VuZChudW1iZXIqcHJlY2lzaW9uKTtcblx0fSwgMCkgLyBwcmVjaXNpb247XG59XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0byBzdWJ0cmFjdCBsb25nIG51bWJlcnMgYWNjdXJhdGVseSB3aXRoIGNvbnZlcnNpb25zIGFuZCBpbnRlZ2VyIG1hdGguXG4gKiBUaGlzIGZ1bmN0aW9uIG9ubHkgZ3VhcmFudGVlcyBjb3JyZWN0IGFuc3dlcnMgd2hlbiB0aGUgbnVtYmVycyBnaXZlbiBhbmQgdGhlIHJlc3VsdCBhcmUgZWFjaCBsZXNzIHRoYW5cbiAqIDE2IHNpZ25pZmljYW50IGZpZ3VyZXMgYW5kIGxlc3MgdGhhbiAxMF4xMVxuICogXG4gKiBAcGFyYW0gbnVtYmVycyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhZmZTdWJ0cmFjdCguLi5udW1iZXJzOiBudW1iZXJbXSkge1xuXHRpZihudW1iZXJzLmxlbmd0aCA8IDIpIHRocm93IG5ldyBFcnJvcignUHJvdmlkZSBhdCBsZWFzdCAyIG51bWJlcnMgZm9yIGRhZmZTdWJ0cmFjdC4nKTsgXG5cdGNvbnN0IHByZWNpc2lvbiA9IE1hdGgubWF4KC4uLm51bWJlcnMubWFwKGRhZmZQcmVjaXNpb24pKTtcblx0cmV0dXJuIG51bWJlcnMuc2xpY2UoMSkucmVkdWNlKFxuXHRcdChhY2MsIG51bWJlcikgPT4gYWNjIC0gTWF0aC5yb3VuZChudW1iZXIqcHJlY2lzaW9uKSwgXG5cdFx0TWF0aC5yb3VuZChudW1iZXJzWzBdKnByZWNpc2lvbilcblx0KSAvIHByZWNpc2lvbjtcbn1cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIG11bHRpcGx5IGxvbmcgbnVtYmVycyBhY2N1cmF0ZWx5IHdpdGggY29udmVyc2lvbnMgYW5kIGludGVnZXIgbWF0aC5cbiAqIFRoaXMgZnVuY3Rpb24gb25seSBndWFyYW50ZWVzIGNvcnJlY3QgYW5zd2VycyB3aGVuIHRoZSBudW1iZXJzIGdpdmVuIGFuZCB0aGUgcmVzdWx0IGFyZSBlYWNoIGxlc3MgdGhhbiAxNiBzaWduaWZpY2FudCBmaWd1cmVzXG4gKiBhbmQgbGVzcyB0aGFuIDEwXjExXG4gKiBcbiAqIEBwYXJhbSBudW1iZXJzIFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGFmZk11bHRpcGx5KC4uLm51bWJlcnM6IG51bWJlcltdKSB7XG5cdGlmKG51bWJlcnMubGVuZ3RoIDwgMikgdGhyb3cgbmV3IEVycm9yKCdQcm92aWRlIGF0IGxlYXN0IDIgbnVtYmVycyBmb3IgZGFmZk11bHRpcGx5LicpOyBcblx0Y29uc3QgcHJlY2lzaW9uID0gTWF0aC5tYXgoLi4ubnVtYmVycy5tYXAoZGFmZlByZWNpc2lvbikpO1xuXHRyZXR1cm4gbnVtYmVycy5yZWR1Y2UoXG5cdFx0KGFjYywgbnVtYmVyKSA9PiBhY2MgKiBNYXRoLnJvdW5kKG51bWJlcipwcmVjaXNpb24pLCBcblx0XHQxXG5cdCkgLyBNYXRoLnBvdyhwcmVjaXNpb24sIG51bWJlcnMubGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRvIGRpdmlkZSBsb25nIG51bWJlcnMgYWNjdXJhdGVseSB3aXRoIGNvbnZlcnNpb25zIGFuZCBpbnRlZ2VyIG1hdGguXG4gKiBUaGlzIGZ1bmN0aW9uIG9ubHkgZ3VhcmFudGVlcyBjb3JyZWN0IGFuc3dlcnMgd2hlbiB0aGUgbnVtYmVycyBnaXZlbiBhbmQgdGhlIHJlc3VsdCBhcmUgZWFjaCBsZXNzIHRoYW4gMTYgc2lnbmlmaWNhbnQgZmlndXJlc1xuICogYW5kIGxlc3MgdGhhbiAxMF4xMVxuICogXG4gKiBAcGFyYW0gbnVtYmVycyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhZmZEaXZpZGUoLi4ubnVtYmVyczogbnVtYmVyW10pIHtcblx0aWYobnVtYmVycy5sZW5ndGggPCAyKSB0aHJvdyBuZXcgRXJyb3IoJ1Byb3ZpZGUgYXQgbGVhc3QgMiBudW1iZXJzIGZvciBkYWZmRGl2aWRlLicpOyBcblx0Y29uc3QgcHJlY2lzaW9uID0gTWF0aC5tYXgoLi4ubnVtYmVycy5tYXAoZGFmZlByZWNpc2lvbikpO1xuXHRyZXR1cm4gbnVtYmVycy5zbGljZSgxKS5yZWR1Y2UoXG5cdFx0KGFjYywgbnVtYmVyKSA9PiBhY2MgLyBNYXRoLnJvdW5kKG51bWJlcipwcmVjaXNpb24pLCBcblx0XHRNYXRoLnJvdW5kKG51bWJlcnNbMF0qcHJlY2lzaW9uKVxuXHQpICogTWF0aC5wb3cocHJlY2lzaW9uLCBudW1iZXJzLmxlbmd0aCAtIDIpO1xufVxuXG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgbnVtYmVyIG9mIGRlY2ltYWwgc2lnbmlmaWNhbnQgZmlndXJlcyBvZiBhIG51bWJlci5cbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBmYWlsIGlmIHRoZSBnaXZlbiBudW1iZXIgaGFzIG1vcmUgdGhhbiAxNiBzaWduaWZpY2FudCBmaWd1cmVzIG9yXG4gKiB0aGUgdmFsdWUgb2YgdGhlIG51bWJlciBpcyBncmVhdGVyIHRoYW4gMTBeMTFcbiAqIEBwYXJhbSBudW1iZXJcbiAqL1xuZnVuY3Rpb24gZGFmZlByZWNpc2lvbihudW1iZXI6IG51bWJlcikge1xuXHRsZXQgcCA9IDEwMDAwO1xuXHRpZihudW1iZXIgPT09IHVuZGVmaW5lZCB8fCBudW1iZXIgPT09IG51bGwpIHJldHVybiBwO1xuICB3aGlsZSAoTWF0aC5yb3VuZChudW1iZXIgKiBwKSAvIHAgIT09IG51bWJlcikgeyBwICo9IDEwOyB9XG4gIHJldHVybiBwO1xufVxuIl19