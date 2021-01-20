/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { range } from '@daffodil/core';
/**
 * @record
 * @template T
 */
function ArglessConstructable() { }
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
DaffModelFactory = /** @class */ (function () {
    function DaffModelFactory(type) {
        this.type = type;
    }
    /**
     * @param {?=} partial
     * @return {?}
     */
    DaffModelFactory.prototype.create = /**
     * @param {?=} partial
     * @return {?}
     */
    function (partial) {
        if (partial === void 0) { partial = {}; }
        return tslib_1.__assign({}, (/** @type {?} */ (new this.type())), partial);
    };
    /**
     * @param {?=} qty
     * @param {?=} partial
     * @return {?}
     */
    DaffModelFactory.prototype.createMany = /**
     * @param {?=} qty
     * @param {?=} partial
     * @return {?}
     */
    function (qty, partial) {
        var _this = this;
        if (qty === void 0) { qty = 1; }
        if (partial === void 0) { partial = {}; }
        return range(0, qty - 1).map((/**
         * @return {?}
         */
        function () { return _this.create(partial); }));
    };
    return DaffModelFactory;
}());
/**
 * @abstract
 * @template T
 */
export { DaffModelFactory };
if (false) {
    /** @type {?} */
    DaffModelFactory.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9jb3JlL3Rlc3RpbmcvIiwic291cmNlcyI6WyJmYWN0b3JpZXMvZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFdkMsbUNBRUM7Ozs7O0FBR0Q7Ozs7O0lBQ0ksMEJBQW1CLElBQTZCO1FBQTdCLFNBQUksR0FBSixJQUFJLENBQXlCO0lBRWhELENBQUM7Ozs7O0lBRUQsaUNBQU07Ozs7SUFBTixVQUFPLE9BQVk7UUFBWix3QkFBQSxFQUFBLFlBQVk7UUFDZiw0QkFDTyxtQkFBQSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBTyxFQUN0QixPQUFPLEVBQ2I7SUFDTCxDQUFDOzs7Ozs7SUFFRCxxQ0FBVTs7Ozs7SUFBVixVQUFXLEdBQU8sRUFBRSxPQUFZO1FBQWhDLGlCQUVDO1FBRlUsb0JBQUEsRUFBQSxPQUFPO1FBQUUsd0JBQUEsRUFBQSxZQUFZO1FBQzVCLE9BQU8sS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQXBCLENBQW9CLEVBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQzs7Ozs7Ozs7SUFkZSxnQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRGFmZk1vZGVsRmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tICdAZGFmZm9kaWwvY29yZSc7XG5cbmludGVyZmFjZSBBcmdsZXNzQ29uc3RydWN0YWJsZTxUPiB7XG4gICAgbmV3KCkgOiBUO1xufVxuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEYWZmTW9kZWxGYWN0b3J5PFQgZXh0ZW5kcyBPYmplY3Q+IGltcGxlbWVudHMgSURhZmZNb2RlbEZhY3Rvcnk8VD4ge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0eXBlOiBBcmdsZXNzQ29uc3RydWN0YWJsZTxUPil7XG5cbiAgICB9XG5cbiAgICBjcmVhdGUocGFydGlhbCA9IHt9KSA6IFQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ubmV3IHRoaXMudHlwZSgpIGFzIGFueSwgLy8gVE9ETzogcmVtb3ZlIGluIFRTIDMuM1xuICAgICAgICAgICAgLi4ucGFydGlhbFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNyZWF0ZU1hbnkocXR5ID0gMSwgcGFydGlhbCA9IHt9KSA6IFRbXSB7XG4gICAgICAgIHJldHVybiByYW5nZSgwLCBxdHkgLSAxKS5tYXAoKCkgPT4gdGhpcy5jcmVhdGUocGFydGlhbCkpO1xuICAgIH1cbn0iXX0=