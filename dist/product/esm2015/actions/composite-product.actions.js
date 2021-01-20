/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DaffCompositeProductActionTypes = {
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
export class DaffCompositeProductApplyOption {
    /**
     * @param {?} id
     * @param {?} itemId
     * @param {?} optionId
     * @param {?=} qty
     */
    constructor(id, itemId, optionId, qty) {
        this.id = id;
        this.itemId = itemId;
        this.optionId = optionId;
        this.qty = qty;
        this.type = DaffCompositeProductActionTypes.CompositeProductApplyOptionAction;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRlLXByb2R1Y3QuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsiYWN0aW9ucy9jb21wb3NpdGUtcHJvZHVjdC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQVNDLG1DQUFvQywyREFBMkQ7Ozs7Ozs7Ozs7O0FBVWhHLE1BQU0sT0FBTywrQkFBK0I7Ozs7Ozs7SUFHMUMsWUFBbUIsRUFBVyxFQUFTLE1BQXNDLEVBQVMsUUFBOEMsRUFBUyxHQUFZO1FBQXRJLE9BQUUsR0FBRixFQUFFLENBQVM7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFnQztRQUFTLGFBQVEsR0FBUixRQUFRLENBQXNDO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBUztRQUZoSixTQUFJLEdBQUcsK0JBQStCLENBQUMsaUNBQWlDLENBQUM7SUFFMEUsQ0FBQztDQUM5Sjs7O0lBSEMsK0NBQWtGOztJQUV0RSw2Q0FBa0I7O0lBQUUsaURBQTZDOztJQUFFLG1EQUFxRDs7SUFBRSw4Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IERhZmZDb21wb3NpdGVQcm9kdWN0IH0gZnJvbSAnLi4vbW9kZWxzL2NvbXBvc2l0ZS1wcm9kdWN0JztcbmltcG9ydCB7IERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbSwgRGFmZkNvbXBvc2l0ZVByb2R1Y3RJdGVtT3B0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2NvbXBvc2l0ZS1wcm9kdWN0LWl0ZW0nO1xuXG4vKipcbiAqIEFjdGlvbiB0eXBlcyBmb3IgQ29tcG9zaXRlIFByb2R1Y3QgQWN0aW9ucy5cbiAqL1xuZXhwb3J0IGVudW0gRGFmZkNvbXBvc2l0ZVByb2R1Y3RBY3Rpb25UeXBlcyB7XG5cdENvbXBvc2l0ZVByb2R1Y3RBcHBseU9wdGlvbkFjdGlvbiA9ICdbQ29tcG9zaXRlIFByb2R1Y3RdIENvbXBvc2l0ZSBQcm9kdWN0IEFwcGx5IE9wdGlvbiBBY3Rpb24nXG59XG5cbi8qKlxuICogQXBwbGllcyBhIHByb2R1Y3Qgb3B0aW9uIHRvIGEgcGFydGljdWxhciBjb21wb3NpdGUgcHJvZHVjdC5cbiAqIFxuICogQHBhcmFtIGlkIC0gSWQgb2YgdGhlIENvbXBvc2l0ZSBQcm9kdWN0XG4gKiBAcGFyYW0gaXRlbUlkIC0gSWQgb2YgdGhlIHByb2R1Y3QgaXRlbS5cbiAqIEBwYXJhbSBvcHRpb25JZCAtIElkIG9mIHRoZSBvcHRpb24gb2YgdGhlIHByb2R1Y3QgaXRlbSB0aGF0IGlzIGNob3Nlbi5cbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDb21wb3NpdGVQcm9kdWN0QXBwbHlPcHRpb248VCBleHRlbmRzIERhZmZDb21wb3NpdGVQcm9kdWN0PiBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBEYWZmQ29tcG9zaXRlUHJvZHVjdEFjdGlvblR5cGVzLkNvbXBvc2l0ZVByb2R1Y3RBcHBseU9wdGlvbkFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IFRbJ2lkJ10sIHB1YmxpYyBpdGVtSWQ6IERhZmZDb21wb3NpdGVQcm9kdWN0SXRlbVsnaWQnXSwgcHVibGljIG9wdGlvbklkOiBEYWZmQ29tcG9zaXRlUHJvZHVjdEl0ZW1PcHRpb25bJ2lkJ10sIHB1YmxpYyBxdHk/OiBudW1iZXIpIHt9XG59XG5cbmV4cG9ydCB0eXBlIERhZmZDb21wb3NpdGVQcm9kdWN0QWN0aW9uczxUIGV4dGVuZHMgRGFmZkNvbXBvc2l0ZVByb2R1Y3QgPSBEYWZmQ29tcG9zaXRlUHJvZHVjdD4gPSBcblx0fCBEYWZmQ29tcG9zaXRlUHJvZHVjdEFwcGx5T3B0aW9uPFQ+O1xuIl19