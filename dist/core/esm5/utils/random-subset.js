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
export var randomSubset = (/**
 * @template T
 * @param {?} array
 * @param {?=} length
 * @return {?}
 */
function (array, length) {
    if (length > array.length) {
        throw new Error('Requested length is longer than array length.');
    }
    length = length ? length : Math.floor(Math.random() * array.length);
    return shuffle(array).slice(0, length);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLXN1YnNldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbHMvcmFuZG9tLXN1YnNldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7OztBQU9wQyxNQUFNLEtBQU8sWUFBWTs7Ozs7O0FBQUcsVUFBSSxLQUFVLEVBQUUsTUFBZTtJQUN6RCxJQUFHLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFDO1FBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztLQUNsRTtJQUNELE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2h1ZmZsZSB9IGZyb20gJy4vc2h1ZmZsZSc7XG5cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBzdWJzZXQgb2YgYW4gYXJyYXkgaW4gYSByYW5kb20gb3JkZXIuXG4gKiBAcGFyYW0gYXJyYXkgXG4gKiBAcGFyYW0gbGVuZ3RoIFxuICovXG5leHBvcnQgY29uc3QgcmFuZG9tU3Vic2V0ID0gPFQ+KGFycmF5OiBUW10sIGxlbmd0aD8gOm51bWJlcik6IFRbXSA9PiB7XG4gIGlmKGxlbmd0aCA+IGFycmF5Lmxlbmd0aCl7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0ZWQgbGVuZ3RoIGlzIGxvbmdlciB0aGFuIGFycmF5IGxlbmd0aC4nKTtcbiAgfVxuICBsZW5ndGggPSBsZW5ndGggPyBsZW5ndGggOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpO1xuICByZXR1cm4gc2h1ZmZsZShhcnJheSkuc2xpY2UoMCwgbGVuZ3RoKTtcbn1cbiJdfQ==