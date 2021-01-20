/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A class which allows you to appropriately check the inheritance of an error.
 *
 * In typescript, when you try to extend an error with a specialized error class,
 * if you try to call something like:
 *
 * ```ts
 * class MyError extends Error {}
 *
 * let myError = new MyError();
 *
 * myError instanceof MyError; // returns false
 * ```
 *
 * You will see unexpected things. This class fixes that issue as described here
 * https://github.com/microsoft/TypeScript/issues/13965
 */
export class DaffInheritableError extends Error {
    /**
     * @param {?=} message
     */
    constructor(message) {
        /** @type {?} */
        const trueProto = new.target.prototype;
        super(message);
        Object.setPrototypeOf(this, trueProto);
    }
}
if (false) {
    /** @type {?} */
    DaffInheritableError.prototype.__proto__;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5oZXJpdGFibGUtZXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY29yZS8iLCJzb3VyY2VzIjpbImVycm9ycy9pbmhlcml0YWJsZS1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsTUFBTSxPQUFPLG9CQUFxQixTQUFRLEtBQUs7Ozs7SUFHOUMsWUFBWSxPQUFnQjs7Y0FDckIsU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUztRQUN0QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFZixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0Q7OztJQVJBLHlDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBjbGFzcyB3aGljaCBhbGxvd3MgeW91IHRvIGFwcHJvcHJpYXRlbHkgY2hlY2sgdGhlIGluaGVyaXRhbmNlIG9mIGFuIGVycm9yLlxuICogXG4gKiBJbiB0eXBlc2NyaXB0LCB3aGVuIHlvdSB0cnkgdG8gZXh0ZW5kIGFuIGVycm9yIHdpdGggYSBzcGVjaWFsaXplZCBlcnJvciBjbGFzcyxcbiAqIGlmIHlvdSB0cnkgdG8gY2FsbCBzb21ldGhpbmcgbGlrZTpcbiAqIFxuICogYGBgdHNcbiAqIGNsYXNzIE15RXJyb3IgZXh0ZW5kcyBFcnJvciB7fVxuICogXG4gKiBsZXQgbXlFcnJvciA9IG5ldyBNeUVycm9yKCk7XG4gKiBcbiAqIG15RXJyb3IgaW5zdGFuY2VvZiBNeUVycm9yOyAvLyByZXR1cm5zIGZhbHNlXG4gKiBgYGBcbiAqIFxuICogWW91IHdpbGwgc2VlIHVuZXhwZWN0ZWQgdGhpbmdzLiBUaGlzIGNsYXNzIGZpeGVzIHRoYXQgaXNzdWUgYXMgZGVzY3JpYmVkIGhlcmVcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMTM5NjVcbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZJbmhlcml0YWJsZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRfX3Byb3RvX186IEVycm9yO1xuXG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcblx0XHRjb25zdCB0cnVlUHJvdG8gPSBuZXcudGFyZ2V0LnByb3RvdHlwZTtcblx0XHRzdXBlcihtZXNzYWdlKTtcblxuXHRcdE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCB0cnVlUHJvdG8pO1xuXHR9XG59XG4iXX0=