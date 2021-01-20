/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var DaffConfigurableProductActionTypes = {
    ConfigurableProductApplyAttributeAction: '[Configurable Product] Configurable Product Apply Attribute Action',
    ConfigurableProductRemoveAttributeAction: '[Configurable Product] Configurable Product Remove Attribute Action',
    ConfigurableProductToggleAttributeAction: '[Configurable Product] Configurable Product Toggle Attribute Action',
};
export { DaffConfigurableProductActionTypes };
/**
 * Applies an attribute to a particular configurable product.
 *
 * @param id - Id of the Configurable Product
 * @param attributeId - Id of the attribute to be applied
 * @param attributeValue - Value of the attribute to be applied
 * @template T
 */
var /**
 * Applies an attribute to a particular configurable product.
 *
 * @param id - Id of the Configurable Product
 * @param attributeId - Id of the attribute to be applied
 * @param attributeValue - Value of the attribute to be applied
 * @template T
 */
DaffConfigurableProductApplyAttribute = /** @class */ (function () {
    function DaffConfigurableProductApplyAttribute(id, attributeId, attributeValue) {
        this.id = id;
        this.attributeId = attributeId;
        this.attributeValue = attributeValue;
        this.type = DaffConfigurableProductActionTypes.ConfigurableProductApplyAttributeAction;
    }
    return DaffConfigurableProductApplyAttribute;
}());
/**
 * Applies an attribute to a particular configurable product.
 *
 * @param id - Id of the Configurable Product
 * @param attributeId - Id of the attribute to be applied
 * @param attributeValue - Value of the attribute to be applied
 * @template T
 */
export { DaffConfigurableProductApplyAttribute };
if (false) {
    /** @type {?} */
    DaffConfigurableProductApplyAttribute.prototype.type;
    /** @type {?} */
    DaffConfigurableProductApplyAttribute.prototype.id;
    /** @type {?} */
    DaffConfigurableProductApplyAttribute.prototype.attributeId;
    /** @type {?} */
    DaffConfigurableProductApplyAttribute.prototype.attributeValue;
}
/**
 * Removes an applied attribute from a particular configurable product.
 *
 * @param id - Id of the Configurable Product
 * @param attributeId - Id of the attribute to be removed
 * @template T
 */
var /**
 * Removes an applied attribute from a particular configurable product.
 *
 * @param id - Id of the Configurable Product
 * @param attributeId - Id of the attribute to be removed
 * @template T
 */
DaffConfigurableProductRemoveAttribute = /** @class */ (function () {
    function DaffConfigurableProductRemoveAttribute(id, attributeId) {
        this.id = id;
        this.attributeId = attributeId;
        this.type = DaffConfigurableProductActionTypes.ConfigurableProductRemoveAttributeAction;
    }
    return DaffConfigurableProductRemoveAttribute;
}());
/**
 * Removes an applied attribute from a particular configurable product.
 *
 * @param id - Id of the Configurable Product
 * @param attributeId - Id of the attribute to be removed
 * @template T
 */
export { DaffConfigurableProductRemoveAttribute };
if (false) {
    /** @type {?} */
    DaffConfigurableProductRemoveAttribute.prototype.type;
    /** @type {?} */
    DaffConfigurableProductRemoveAttribute.prototype.id;
    /** @type {?} */
    DaffConfigurableProductRemoveAttribute.prototype.attributeId;
}
/**
 * Toggles an attribute of a particular configurable product. If the attribute type of the configurable product already has
 * a different value than the one provided in the action, the attribute value in state will be overwritten by the value provided
 * in the action.
 *
 * @param id - Id of the Configurable Product
 * @param attributeId - Id of the attribute to be toggled
 * @param attributeValue - Value of the attribute to be toggled
 * @template T
 */
var /**
 * Toggles an attribute of a particular configurable product. If the attribute type of the configurable product already has
 * a different value than the one provided in the action, the attribute value in state will be overwritten by the value provided
 * in the action.
 *
 * @param id - Id of the Configurable Product
 * @param attributeId - Id of the attribute to be toggled
 * @param attributeValue - Value of the attribute to be toggled
 * @template T
 */
DaffConfigurableProductToggleAttribute = /** @class */ (function () {
    function DaffConfigurableProductToggleAttribute(id, attributeId, attributeValue) {
        this.id = id;
        this.attributeId = attributeId;
        this.attributeValue = attributeValue;
        this.type = DaffConfigurableProductActionTypes.ConfigurableProductToggleAttributeAction;
    }
    return DaffConfigurableProductToggleAttribute;
}());
/**
 * Toggles an attribute of a particular configurable product. If the attribute type of the configurable product already has
 * a different value than the one provided in the action, the attribute value in state will be overwritten by the value provided
 * in the action.
 *
 * @param id - Id of the Configurable Product
 * @param attributeId - Id of the attribute to be toggled
 * @param attributeValue - Value of the attribute to be toggled
 * @template T
 */
export { DaffConfigurableProductToggleAttribute };
if (false) {
    /** @type {?} */
    DaffConfigurableProductToggleAttribute.prototype.type;
    /** @type {?} */
    DaffConfigurableProductToggleAttribute.prototype.id;
    /** @type {?} */
    DaffConfigurableProductToggleAttribute.prototype.attributeId;
    /** @type {?} */
    DaffConfigurableProductToggleAttribute.prototype.attributeValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXByb2R1Y3QuYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9wcm9kdWN0LyIsInNvdXJjZXMiOlsiYWN0aW9ucy9jb25maWd1cmFibGUtcHJvZHVjdC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQVFDLHlDQUEwQyxvRUFBb0U7SUFDOUcsMENBQTJDLHFFQUFxRTtJQUNoSCwwQ0FBMkMscUVBQXFFOzs7Ozs7Ozs7OztBQVVqSDs7Ozs7Ozs7O0lBR0UsK0NBQW1CLEVBQVcsRUFBUyxXQUFtQixFQUFTLGNBQXNCO1FBQXRFLE9BQUUsR0FBRixFQUFFLENBQVM7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBRmhGLFNBQUksR0FBRyxrQ0FBa0MsQ0FBQyx1Q0FBdUMsQ0FBQztJQUVDLENBQUM7SUFDL0YsNENBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7Ozs7Ozs7O0lBSEMscURBQTJGOztJQUUvRSxtREFBa0I7O0lBQUUsNERBQTBCOztJQUFFLCtEQUE2Qjs7Ozs7Ozs7O0FBUzNGOzs7Ozs7OztJQUdFLGdEQUFtQixFQUFXLEVBQVMsV0FBbUI7UUFBdkMsT0FBRSxHQUFGLEVBQUUsQ0FBUztRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBRmpELFNBQUksR0FBRyxrQ0FBa0MsQ0FBQyx3Q0FBd0MsQ0FBQztJQUUvQixDQUFDO0lBQ2hFLDZDQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7Ozs7Ozs7O0lBSEMsc0RBQTRGOztJQUVoRixvREFBa0I7O0lBQUUsNkRBQTBCOzs7Ozs7Ozs7Ozs7QUFZNUQ7Ozs7Ozs7Ozs7O0lBR0UsZ0RBQW1CLEVBQVcsRUFBUyxXQUFtQixFQUFTLGNBQXNCO1FBQXRFLE9BQUUsR0FBRixFQUFFLENBQVM7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUFRO1FBRmhGLFNBQUksR0FBRyxrQ0FBa0MsQ0FBQyx3Q0FBd0MsQ0FBQztJQUVBLENBQUM7SUFDL0YsNkNBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7Ozs7Ozs7Ozs7Ozs7SUFIQyxzREFBNEY7O0lBRWhGLG9EQUFrQjs7SUFBRSw2REFBMEI7O0lBQUUsZ0VBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdCB9IGZyb20gJy4uL21vZGVscy9jb25maWd1cmFibGUtcHJvZHVjdCc7XG5cbi8qKlxuICogQWN0aW9uIHR5cGVzIGZvciBDb25maWd1cmFibGUgUHJvZHVjdCBBY3Rpb25zLlxuICovXG5leHBvcnQgZW51bSBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEFjdGlvblR5cGVzIHtcblx0Q29uZmlndXJhYmxlUHJvZHVjdEFwcGx5QXR0cmlidXRlQWN0aW9uID0gJ1tDb25maWd1cmFibGUgUHJvZHVjdF0gQ29uZmlndXJhYmxlIFByb2R1Y3QgQXBwbHkgQXR0cmlidXRlIEFjdGlvbicsXG5cdENvbmZpZ3VyYWJsZVByb2R1Y3RSZW1vdmVBdHRyaWJ1dGVBY3Rpb24gPSAnW0NvbmZpZ3VyYWJsZSBQcm9kdWN0XSBDb25maWd1cmFibGUgUHJvZHVjdCBSZW1vdmUgQXR0cmlidXRlIEFjdGlvbicsXG5cdENvbmZpZ3VyYWJsZVByb2R1Y3RUb2dnbGVBdHRyaWJ1dGVBY3Rpb24gPSAnW0NvbmZpZ3VyYWJsZSBQcm9kdWN0XSBDb25maWd1cmFibGUgUHJvZHVjdCBUb2dnbGUgQXR0cmlidXRlIEFjdGlvbicsXG59XG5cbi8qKlxuICogQXBwbGllcyBhbiBhdHRyaWJ1dGUgdG8gYSBwYXJ0aWN1bGFyIGNvbmZpZ3VyYWJsZSBwcm9kdWN0LlxuICogXG4gKiBAcGFyYW0gaWQgLSBJZCBvZiB0aGUgQ29uZmlndXJhYmxlIFByb2R1Y3RcbiAqIEBwYXJhbSBhdHRyaWJ1dGVJZCAtIElkIG9mIHRoZSBhdHRyaWJ1dGUgdG8gYmUgYXBwbGllZFxuICogQHBhcmFtIGF0dHJpYnV0ZVZhbHVlIC0gVmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSB0byBiZSBhcHBsaWVkXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEFwcGx5QXR0cmlidXRlPFQgZXh0ZW5kcyBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RBY3Rpb25UeXBlcy5Db25maWd1cmFibGVQcm9kdWN0QXBwbHlBdHRyaWJ1dGVBY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHVibGljIGlkOiBUWydpZCddLCBwdWJsaWMgYXR0cmlidXRlSWQ6IHN0cmluZywgcHVibGljIGF0dHJpYnV0ZVZhbHVlOiBzdHJpbmcpIHt9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbiBhcHBsaWVkIGF0dHJpYnV0ZSBmcm9tIGEgcGFydGljdWxhciBjb25maWd1cmFibGUgcHJvZHVjdC5cbiAqIFxuICogQHBhcmFtIGlkIC0gSWQgb2YgdGhlIENvbmZpZ3VyYWJsZSBQcm9kdWN0XG4gKiBAcGFyYW0gYXR0cmlidXRlSWQgLSBJZCBvZiB0aGUgYXR0cmlidXRlIHRvIGJlIHJlbW92ZWRcbiAqL1xuZXhwb3J0IGNsYXNzIERhZmZDb25maWd1cmFibGVQcm9kdWN0UmVtb3ZlQXR0cmlidXRlPFQgZXh0ZW5kcyBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdD4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RBY3Rpb25UeXBlcy5Db25maWd1cmFibGVQcm9kdWN0UmVtb3ZlQXR0cmlidXRlQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogVFsnaWQnXSwgcHVibGljIGF0dHJpYnV0ZUlkOiBzdHJpbmcpIHt9XG59XG5cbi8qKlxuICogVG9nZ2xlcyBhbiBhdHRyaWJ1dGUgb2YgYSBwYXJ0aWN1bGFyIGNvbmZpZ3VyYWJsZSBwcm9kdWN0LiBJZiB0aGUgYXR0cmlidXRlIHR5cGUgb2YgdGhlIGNvbmZpZ3VyYWJsZSBwcm9kdWN0IGFscmVhZHkgaGFzIFxuICogYSBkaWZmZXJlbnQgdmFsdWUgdGhhbiB0aGUgb25lIHByb3ZpZGVkIGluIHRoZSBhY3Rpb24sIHRoZSBhdHRyaWJ1dGUgdmFsdWUgaW4gc3RhdGUgd2lsbCBiZSBvdmVyd3JpdHRlbiBieSB0aGUgdmFsdWUgcHJvdmlkZWQgXG4gKiBpbiB0aGUgYWN0aW9uLlxuICogXG4gKiBAcGFyYW0gaWQgLSBJZCBvZiB0aGUgQ29uZmlndXJhYmxlIFByb2R1Y3RcbiAqIEBwYXJhbSBhdHRyaWJ1dGVJZCAtIElkIG9mIHRoZSBhdHRyaWJ1dGUgdG8gYmUgdG9nZ2xlZFxuICogQHBhcmFtIGF0dHJpYnV0ZVZhbHVlIC0gVmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSB0byBiZSB0b2dnbGVkXG4gKi9cbmV4cG9ydCBjbGFzcyBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdFRvZ2dsZUF0dHJpYnV0ZTxUIGV4dGVuZHMgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3Q+IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IERhZmZDb25maWd1cmFibGVQcm9kdWN0QWN0aW9uVHlwZXMuQ29uZmlndXJhYmxlUHJvZHVjdFRvZ2dsZUF0dHJpYnV0ZUFjdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IFRbJ2lkJ10sIHB1YmxpYyBhdHRyaWJ1dGVJZDogc3RyaW5nLCBwdWJsaWMgYXR0cmlidXRlVmFsdWU6IHN0cmluZykge31cbn1cblxuZXhwb3J0IHR5cGUgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RBY3Rpb25zPFQgZXh0ZW5kcyBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdCA9IERhZmZDb25maWd1cmFibGVQcm9kdWN0PiA9IFxuICAgIHwgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RBcHBseUF0dHJpYnV0ZTxUPlxuICAgIHwgRGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RSZW1vdmVBdHRyaWJ1dGU8VD5cbiAgICB8IERhZmZDb25maWd1cmFibGVQcm9kdWN0VG9nZ2xlQXR0cmlidXRlPFQ+OyJdfQ==