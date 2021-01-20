/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Immutable Fisher-Yates Shuffle
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @type {?}
 */
export var shuffle = (/**
 * @template T
 * @param {?} array
 * @return {?}
 */
function (array) {
    /** @type {?} */
    var result = [];
    array.forEach((/**
     * @param {?} el
     * @param {?} i
     * @return {?}
     */
    function (el, i) {
        /** @type {?} */
        var s = Math.floor(Math.random() * i);
        if (s !== i) {
            result[i] = result[s];
        }
        result[s] = el;
    }));
    return result;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2h1ZmZsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbHMvc2h1ZmZsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFJQSxNQUFNLEtBQU8sT0FBTzs7Ozs7QUFBRyxVQUFJLEtBQVU7O1FBQzdCLE1BQU0sR0FBRyxFQUFFO0lBQ2pCLEtBQUssQ0FBQyxPQUFPOzs7OztJQUFDLFVBQUMsRUFBRSxFQUFFLENBQUM7O1lBQ1osQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDWCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDLEVBQUMsQ0FBQztJQUNILE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW1tdXRhYmxlIEZpc2hlci1ZYXRlcyBTaHVmZmxlXG4gKiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9GaXNoZXIlRTIlODAlOTNZYXRlc19zaHVmZmxlXG4gKi9cbmV4cG9ydCBjb25zdCBzaHVmZmxlID0gPFQ+KGFycmF5OiBUW10pOiBUW10gPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgYXJyYXkuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICBjb25zdCBzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaSk7XG4gICAgaWYoIHMgIT09IGkgKXtcbiAgICAgIHJlc3VsdFtpXSA9IHJlc3VsdFtzXTtcbiAgICB9XG4gICAgcmVzdWx0W3NdID0gZWw7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuIl19