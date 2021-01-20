/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
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
DaffInheritableError = /** @class */ (function (_super) {
    tslib_1.__extends(DaffInheritableError, _super);
    function DaffInheritableError(message) {
        var _newTarget = this.constructor;
        var _this = this;
        /** @type {?} */
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, trueProto);
        return _this;
    }
    return DaffInheritableError;
}(Error));
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
export { DaffInheritableError };
if (false) {
    /** @type {?} */
    DaffInheritableError.prototype.__proto__;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5oZXJpdGFibGUtZXJyb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvY29yZS8iLCJzb3VyY2VzIjpbImVycm9ycy9pbmhlcml0YWJsZS1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBMEMsZ0RBQUs7SUFHOUMsOEJBQVksT0FBZ0I7O1FBQTVCLGlCQUtDOztZQUpNLFNBQVMsR0FBRyxXQUFXLFNBQVM7UUFDdEMsUUFBQSxrQkFBTSxPQUFPLENBQUMsU0FBQztRQUVmLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDOztJQUN4QyxDQUFDO0lBQ0YsMkJBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBMEMsS0FBSyxHQVM5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUkEseUNBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIGNsYXNzIHdoaWNoIGFsbG93cyB5b3UgdG8gYXBwcm9wcmlhdGVseSBjaGVjayB0aGUgaW5oZXJpdGFuY2Ugb2YgYW4gZXJyb3IuXG4gKiBcbiAqIEluIHR5cGVzY3JpcHQsIHdoZW4geW91IHRyeSB0byBleHRlbmQgYW4gZXJyb3Igd2l0aCBhIHNwZWNpYWxpemVkIGVycm9yIGNsYXNzLFxuICogaWYgeW91IHRyeSB0byBjYWxsIHNvbWV0aGluZyBsaWtlOlxuICogXG4gKiBgYGB0c1xuICogY2xhc3MgTXlFcnJvciBleHRlbmRzIEVycm9yIHt9XG4gKiBcbiAqIGxldCBteUVycm9yID0gbmV3IE15RXJyb3IoKTtcbiAqIFxuICogbXlFcnJvciBpbnN0YW5jZW9mIE15RXJyb3I7IC8vIHJldHVybnMgZmFsc2VcbiAqIGBgYFxuICogXG4gKiBZb3Ugd2lsbCBzZWUgdW5leHBlY3RlZCB0aGluZ3MuIFRoaXMgY2xhc3MgZml4ZXMgdGhhdCBpc3N1ZSBhcyBkZXNjcmliZWQgaGVyZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xMzk2NVxuICovXG5leHBvcnQgY2xhc3MgRGFmZkluaGVyaXRhYmxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdF9fcHJvdG9fXzogRXJyb3I7XG5cblx0Y29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xuXHRcdGNvbnN0IHRydWVQcm90byA9IG5ldy50YXJnZXQucHJvdG90eXBlO1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXG5cdFx0T2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIHRydWVQcm90byk7XG5cdH1cbn1cbiJdfQ==