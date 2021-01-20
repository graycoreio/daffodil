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
export class DaffFormFieldControl {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jb250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbImF0b21zL2Zvcm0vZm9ybS1maWVsZC9mb3JtLWZpZWxkLWNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQWFBLE1BQU0sT0FBZ0Isb0JBQW9CO0NBUXpDOzs7SUFQQyx5Q0FBcUM7O0lBRXJDLDJDQUEyQjs7SUFFM0IsdUNBQTBCOzs7Ozs7SUFFMUIsNERBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqXG4gKiBUaGUgY2xhc3MgdGhhdCBhIGZvcm0gY29udHJvbCBtdXN0ICoqaW1wbGVtZW50KiogaW4gb3JkZXIgdG8gYmVcbiAqIHVzZWQgd2l0aCB0aGUgRGFmZkZvcm1GaWVsZENvbXBvbmVudC5cbiAqXG4gKiBZb3UgbWF5IGFzazogXCJXaHkgYXJlIHlvdSBpbXBsZW1lbnRpbmcgYW4gYWJzdHJhY3QgY2xhc3MsIG5vdCBleHRlbmRpbmcgaXQ/XCJcbiAqIFdlIGRvIHRoaXMgc28gdGhhdCB0aGUgQW5ndWxhciBESSBjb250YWluZXIgY2FuIG1hdGNoIHRoZSBjbGFzcyB0b2tlbi4gQSB0eXBpY2FsXG4gKiBpbnRlcmZhY2Ugd291bGQgYmUgXCJtb3JlIGFjY3VyYXRlXCIgaGVyZSwgYnV0IHNpbmNlIGludGVyZmFjZXMgZG9uJ3QgZXhpc3RcbiAqIGluIGphdmFzY3JpcHQsIHRoZXkgZ2V0IHRocm93biBvdXQgYnkgdGhlIHR5cGVzY3JpcHQgY29tcGlsZXIgYW5kIGNhbm5vdFxuICogYmUgdXNlZCBmb3IgdGhlIG5lY2Vzc2FyeSBkZXBlbmRlbmN5IGluamVjdGlvbi5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERhZmZGb3JtRmllbGRDb250cm9sIHtcbiAgcmVhZG9ubHkgbmdDb250cm9sOiBOZ0NvbnRyb2wgfCBudWxsO1xuXG4gIHJlYWRvbmx5IGNvbnRyb2xUeXBlPzogYW55O1xuXG4gIHJlYWRvbmx5IGZvY3VzZWQ6IGJvb2xlYW47XG5cbiAgYWJzdHJhY3QgZm9jdXMoZXZlbnQ/OiBNb3VzZUV2ZW50KTogdm9pZDtcbn1cbiJdfQ==