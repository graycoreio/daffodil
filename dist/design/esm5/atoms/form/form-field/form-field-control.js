/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 *
 * The class that a form control must **implement** in order to be
 * used with the DaffFormFieldComponent.
 *
 * You may ask: "Why are you implementing an abstract class, not extending it?"
 * We do this so that the Angular DI container can match the class token. A typical
 * interface would be "more accurate" here, but since interfaces don't exist
 * in javascript, they get thrown out by the typescript compiler and cannot
 * be used for the necessary dependency injection.
 * @abstract
 */
var /**
 *
 * The class that a form control must **implement** in order to be
 * used with the DaffFormFieldComponent.
 *
 * You may ask: "Why are you implementing an abstract class, not extending it?"
 * We do this so that the Angular DI container can match the class token. A typical
 * interface would be "more accurate" here, but since interfaces don't exist
 * in javascript, they get thrown out by the typescript compiler and cannot
 * be used for the necessary dependency injection.
 * @abstract
 */
DaffFormFieldControl = /** @class */ (function () {
    function DaffFormFieldControl() {
    }
    return DaffFormFieldControl;
}());
/**
 *
 * The class that a form control must **implement** in order to be
 * used with the DaffFormFieldComponent.
 *
 * You may ask: "Why are you implementing an abstract class, not extending it?"
 * We do this so that the Angular DI container can match the class token. A typical
 * interface would be "more accurate" here, but since interfaces don't exist
 * in javascript, they get thrown out by the typescript compiler and cannot
 * be used for the necessary dependency injection.
 * @abstract
 */
export { DaffFormFieldControl };
if (false) {
    /** @type {?} */
    DaffFormFieldControl.prototype.ngControl;
    /** @type {?} */
    DaffFormFieldControl.prototype.controlType;
    /** @type {?} */
    DaffFormFieldControl.prototype.focused;
    /**
     * @abstract
     * @param {?=} event
     * @return {?}
     */
    DaffFormFieldControl.prototype.focus = function (event) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jb250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbImF0b21zL2Zvcm0vZm9ybS1maWVsZC9mb3JtLWZpZWxkLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7Ozs7O0lBQUE7SUFRQSxDQUFDO0lBQUQsMkJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7Ozs7Ozs7Ozs7Ozs7OztJQVBDLHlDQUFxQzs7SUFFckMsMkNBQTJCOztJQUUzQix1Q0FBMEI7Ozs7OztJQUUxQiw0REFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICpcbiAqIFRoZSBjbGFzcyB0aGF0IGEgZm9ybSBjb250cm9sIG11c3QgKippbXBsZW1lbnQqKiBpbiBvcmRlciB0byBiZVxuICogdXNlZCB3aXRoIHRoZSBEYWZmRm9ybUZpZWxkQ29tcG9uZW50LlxuICpcbiAqIFlvdSBtYXkgYXNrOiBcIldoeSBhcmUgeW91IGltcGxlbWVudGluZyBhbiBhYnN0cmFjdCBjbGFzcywgbm90IGV4dGVuZGluZyBpdD9cIlxuICogV2UgZG8gdGhpcyBzbyB0aGF0IHRoZSBBbmd1bGFyIERJIGNvbnRhaW5lciBjYW4gbWF0Y2ggdGhlIGNsYXNzIHRva2VuLiBBIHR5cGljYWxcbiAqIGludGVyZmFjZSB3b3VsZCBiZSBcIm1vcmUgYWNjdXJhdGVcIiBoZXJlLCBidXQgc2luY2UgaW50ZXJmYWNlcyBkb24ndCBleGlzdFxuICogaW4gamF2YXNjcmlwdCwgdGhleSBnZXQgdGhyb3duIG91dCBieSB0aGUgdHlwZXNjcmlwdCBjb21waWxlciBhbmQgY2Fubm90XG4gKiBiZSB1c2VkIGZvciB0aGUgbmVjZXNzYXJ5IGRlcGVuZGVuY3kgaW5qZWN0aW9uLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGFmZkZvcm1GaWVsZENvbnRyb2wge1xuICByZWFkb25seSBuZ0NvbnRyb2w6IE5nQ29udHJvbCB8IG51bGw7XG5cbiAgcmVhZG9ubHkgY29udHJvbFR5cGU/OiBhbnk7XG5cbiAgcmVhZG9ubHkgZm9jdXNlZDogYm9vbGVhbjtcblxuICBhYnN0cmFjdCBmb2N1cyhldmVudD86IE1vdXNlRXZlbnQpOiB2b2lkO1xufVxuIl19