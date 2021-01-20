/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentChild } from '@angular/core';
import { DaffSuffixDirective } from '../suffix.directive';
/**
 * A mixin for giving a component the ability to place content after another piece of content.
 * @template T
 * @param {?} Base
 * @return {?}
 */
export function daffSuffixableMixin(Base) {
    class Suffixable extends Base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
        }
    }
    Suffixable.propDecorators = {
        _suffix: [{ type: ContentChild, args: [DaffSuffixDirective, { static: true },] }]
    };
    if (false) {
        /** @type {?} */
        Suffixable.prototype._suffix;
    }
    return Suffixable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VmZml4YWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJjb3JlL3ByZWZpeC1zdWZmaXgvc3VmZml4YWJsZS9zdWZmaXhhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0FBTTFELE1BQU0sVUFBVSxtQkFBbUIsQ0FBd0IsSUFBTztJQUNoRSxNQUFNLFVBQVcsU0FBUSxJQUFJOzs7O1FBSTNCLFlBQVksR0FBRyxJQUFXO1lBQ3hCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2pCLENBQUM7OzswQkFKQSxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDOzs7O1FBQWxELDZCQUFpRjs7SUFPbkYsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGFmZlN1ZmZpeERpcmVjdGl2ZSB9IGZyb20gJy4uL3N1ZmZpeC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3B1YmxpY19hcGknO1xuXG4vKipcbiAqIEEgbWl4aW4gZm9yIGdpdmluZyBhIGNvbXBvbmVudCB0aGUgYWJpbGl0eSB0byBwbGFjZSBjb250ZW50IGFmdGVyIGFub3RoZXIgcGllY2Ugb2YgY29udGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhZmZTdWZmaXhhYmxlTWl4aW48VCBleHRlbmRzIENvbnN0cnVjdG9yPihCYXNlOiBUKSB7XG4gIGNsYXNzIFN1ZmZpeGFibGUgZXh0ZW5kcyBCYXNlIHtcblxuICAgIEBDb250ZW50Q2hpbGQoRGFmZlN1ZmZpeERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWV9KSBfc3VmZml4OiBEYWZmU3VmZml4RGlyZWN0aXZlO1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBTdWZmaXhhYmxlO1xufVxuIl19