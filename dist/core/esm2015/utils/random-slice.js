/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns a random slice of an array.
 * \@param array
 * @type {?}
 */
export const randomSlice = (/**
 * @template T
 * @param {?} array
 * @return {?}
 */
(array) => {
    if (array.length === 0) {
        return [];
    }
    ;
    /** @type {?} */
    const start = Math.floor(Math.random() * Math.floor(array.length - 1));
    /** @type {?} */
    const end = start + Math.floor(Math.random() * (array.length - 1 - start));
    return array.slice(start, end);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLXNsaWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvcmUvIiwic291cmNlcyI6WyJ1dGlscy9yYW5kb20tc2xpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUEsTUFBTSxPQUFPLFdBQVc7Ozs7O0FBQUcsQ0FBSSxLQUFVLEVBQU8sRUFBRTtJQUNoRCxJQUFHLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQUUsT0FBTyxFQUFFLENBQUE7S0FBQztJQUFBLENBQUM7O1VBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7O1VBQ2hFLEdBQUcsR0FBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUMzRSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBzbGljZSBvZiBhbiBhcnJheS5cbiAqIEBwYXJhbSBhcnJheSBcbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbVNsaWNlID0gPFQ+KGFycmF5OiBUW10pOiBUW10gPT4ge1xuICBpZihhcnJheS5sZW5ndGggPT09IDApIHsgcmV0dXJuIFtdfTtcbiAgY29uc3Qgc3RhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAtIDEpKTtcbiAgY29uc3QgZW5kID0gIHN0YXJ0ICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGFycmF5Lmxlbmd0aCAtIDEgLSBzdGFydCkpO1xuICByZXR1cm4gYXJyYXkuc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG4iXX0=