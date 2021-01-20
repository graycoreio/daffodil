/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffCompositeProductActionTypes = {
    CompositeProductApplyOptionAction: '[Composite Product] Composite Product Apply Option Action',
};
export { DaffCompositeProductActionTypes };
/**
 * Applies a product option to a particular composite product.
 *
 * @param id - Id of the Composite Product
 * @param itemId - Id of the product item.
 * @param optionId - Id of the option of the product item that is chosen.
 * @template T
 */
var /**
 * Applies a product option to a particular composite product.
 *
 * @param id - Id of the Composite Product
 * @param itemId - Id of the product item.
 * @param optionId - Id of the option of the product item that is chosen.
 * @template T
 */
DaffCompositeProductApplyOption = /** @class */ (function () {
    function DaffCompositeProductApplyOption(id, itemId, optionId, qty) {
        this.id = id;
        this.itemId = itemId;
        this.optionId = optionId;
        this.qty = qty;
        this.type = DaffCompositeProductActionTypes.CompositeProductApplyOptionAction;
    }
    return DaffCompositeProductApplyOption;
}());
/**
 * Applies a product option to a particular composite product.
 *
 * @param id - Id of the Composite Product
 * @param itemId - Id of the product item.
 * @param optionId - Id of the option of the product item that is chosen.
 * @template T
 */
export { DaffCompositeProductApplyOption };
if (false) {
    /** @type {?} */
    DaffCompositeProductApplyOption.prototype.type;
    /** @type {?} */
    DaffCompositeProductApplyOption.prototype.id;
    /** @type {?} */
    DaffCompositeProductApplyOption.prototype.itemId;
    /** @type {?} */
    DaffCompositeProductApplyOption.prototype.optionId;
    /** @type {?} */
    DaffCompositeProductApplyOption.prototype.qty;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXByb2R1Y3QuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsiYWN0aW9ucy9jb21wb3NpdGUtcHJvZHVjdC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQVNDLG1DQUFvQywyREFBMkQ7Ozs7Ozs7Ozs7O0FBVWhHOzs7Ozs7Ozs7SUFHRSx5Q0FBbUIsRUFBVyxFQUFTLE1BQXNDLEVBQVMsUUFBOEMsRUFBUyxHQUFZO1FBQXRJLE9BQUUsR0FBRixFQUFFLENBQVM7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFnQztRQUFTLGFBQVEsR0FBUixRQUFRLENBQXNDO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBUztRQUZoSixTQUFJLEdBQUcsK0JBQStCLENBQUMsaUNBQWlDLENBQUM7SUFFMEUsQ0FBQztJQUMvSixzQ0FBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7Ozs7Ozs7SUFIQywrQ0FBa0Y7O0lBRXRFLDZDQUFrQjs7SUFBRSxpREFBNkM7O0lBQUUsbURBQXFEOztJQUFFLDhDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgRGFmZkNvbXBvc2l0ZVByb2R1Y3QgfSBmcm9tICcuLi9tb2RlbHMvY29tcG9zaXRlLXByb2R1Y3QnO1xuaW1wb3J0IHsgRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtLCBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1PcHRpb24gfSBmcm9tICcuLi9tb2RlbHMvY29tcG9zaXRlLXByb2R1Y3QtaXRlbSc7XG5cbi8qKlxuICogQWN0aW9uIHR5cGVzIGZvciBDb21wb3NpdGUgUHJvZHVjdCBBY3Rpb25zLlxuICovXG5leHBvcnQgZW51bSBEYWZmQ29tcG9zaXRlUHJvZHVjdEFjdGlvblR5cGVzIHtcblx0Q29tcG9zaXRlUHJvZHVjdEFwcGx5T3B0aW9uQWN0aW9uID0gJ1tDb21wb3NpdGUgUHJvZHVjdF0gQ29tcG9zaXRlIFByb2R1Y3QgQXBwbHkgT3B0aW9uIEFjdGlvbidcbn1cblxuLyoqXG4gKiBBcHBsaWVzIGEgcHJvZHVjdCBvcHRpb24gdG8gYSBwYXJ0aWN1bGFyIGNvbXBvc2l0ZSBwcm9kdWN0LlxuICogXG4gKiBAcGFyYW0gaWQgLSBJZCBvZiB0aGUgQ29tcG9zaXRlIFByb2R1Y3RcbiAqIEBwYXJhbSBpdGVtSWQgLSBJZCBvZiB0aGUgcHJvZHVjdCBpdGVtLlxuICogQHBhcmFtIG9wdGlvbklkIC0gSWQgb2YgdGhlIG9wdGlvbiBvZiB0aGUgcHJvZHVjdCBpdGVtIHRoYXQgaXMgY2hvc2VuLlxuICovXG5leHBvcnQgY2xhc3MgRGFmZkNvbXBvc2l0ZVByb2R1Y3RBcHBseU9wdGlvbjxUIGV4dGVuZHMgRGFmZkNvbXBvc2l0ZVByb2R1Y3Q+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDb21wb3NpdGVQcm9kdWN0QWN0aW9uVHlwZXMuQ29tcG9zaXRlUHJvZHVjdEFwcGx5T3B0aW9uQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogVFsnaWQnXSwgcHVibGljIGl0ZW1JZDogRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtWydpZCddLCBwdWJsaWMgb3B0aW9uSWQ6IERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbU9wdGlvblsnaWQnXSwgcHVibGljIHF0eT86IG51bWJlcikge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZkNvbXBvc2l0ZVByb2R1Y3RBY3Rpb25zPFQgZXh0ZW5kcyBEYWZmQ29tcG9zaXRlUHJvZHVjdCA9IERhZmZDb21wb3NpdGVQcm9kdWN0PiA9IFxuXHR8IERhZmZDb21wb3NpdGVQcm9kdWN0QXBwbHlPcHRpb248VD47XG4iXX0=