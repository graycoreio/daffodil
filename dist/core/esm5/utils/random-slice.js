/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns a random slice of an array.
 * \@param array
 * @type {?}
 */
export var randomSlice = (/**
 * @template T
 * @param {?} array
 * @return {?}
 */
function (array) {
    if (array.length === 0) {
        return [];
    }
    ;
    /** @type {?} */
    var start = Math.floor(Math.random() * Math.floor(array.length - 1));
    /** @type {?} */
    var end = start + Math.floor(Math.random() * (array.length - 1 - start));
    return array.slice(start, end);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLXNsaWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2NvcmUvIiwic291cmNlcyI6WyJ1dGlscy9yYW5kb20tc2xpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUEsTUFBTSxLQUFPLFdBQVc7Ozs7O0FBQUcsVUFBSSxLQUFVO0lBQ3ZDLElBQUcsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFBRSxPQUFPLEVBQUUsQ0FBQTtLQUFDO0lBQUEsQ0FBQzs7UUFDOUIsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQzs7UUFDaEUsR0FBRyxHQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzNFLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIHNsaWNlIG9mIGFuIGFycmF5LlxuICogQHBhcmFtIGFycmF5IFxuICovXG5leHBvcnQgY29uc3QgcmFuZG9tU2xpY2UgPSA8VD4oYXJyYXk6IFRbXSk6IFRbXSA9PiB7XG4gIGlmKGFycmF5Lmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gW119O1xuICBjb25zdCBzdGFydCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoYXJyYXkubGVuZ3RoIC0gMSkpO1xuICBjb25zdCBlbmQgPSAgc3RhcnQgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYXJyYXkubGVuZ3RoIC0gMSAtIHN0YXJ0KSk7XG4gIHJldHVybiBhcnJheS5zbGljZShzdGFydCwgZW5kKTtcbn1cbiJdfQ==