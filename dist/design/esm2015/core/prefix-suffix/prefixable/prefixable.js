/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentChild } from '@angular/core';
import { DaffPrefixDirective } from '../prefix.directive';
/**
 * A mixin for giving a component the ability to place content before another piece of content.
 * @template T
 * @param {?} Base
 * @return {?}
 */
export function daffPrefixableMixin(Base) {
    class Prefixable extends Base {
        /**
         * @param {...?} args
         */
        constructor(...args) {
            super(...args);
        }
    }
    Prefixable.propDecorators = {
        _prefix: [{ type: ContentChild, args: [DaffPrefixDirective, { static: true },] }]
    };
    if (false) {
        /** @type {?} */
        Prefixable.prototype._prefix;
    }
    return Prefixable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZml4YWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJjb3JlL3ByZWZpeC1zdWZmaXgvcHJlZml4YWJsZS9wcmVmaXhhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0FBTTFELE1BQU0sVUFBVSxtQkFBbUIsQ0FBd0IsSUFBTztJQUNoRSxNQUFNLFVBQVcsU0FBUSxJQUFJOzs7O1FBSTNCLFlBQVksR0FBRyxJQUFXO1lBQ3hCLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2pCLENBQUM7OzswQkFKQSxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDOzs7O1FBQWxELDZCQUFpRjs7SUFPbkYsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGFmZlByZWZpeERpcmVjdGl2ZSB9IGZyb20gJy4uL3ByZWZpeC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3B1YmxpY19hcGknO1xuXG4vKipcbiAqIEEgbWl4aW4gZm9yIGdpdmluZyBhIGNvbXBvbmVudCB0aGUgYWJpbGl0eSB0byBwbGFjZSBjb250ZW50IGJlZm9yZSBhbm90aGVyIHBpZWNlIG9mIGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkYWZmUHJlZml4YWJsZU1peGluPFQgZXh0ZW5kcyBDb25zdHJ1Y3Rvcj4oQmFzZTogVCkge1xuICBjbGFzcyBQcmVmaXhhYmxlIGV4dGVuZHMgQmFzZSB7XG5cbiAgICBAQ29udGVudENoaWxkKERhZmZQcmVmaXhEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlfSkgX3ByZWZpeDogRGFmZlByZWZpeERpcmVjdGl2ZTtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gUHJlZml4YWJsZTtcbn1cbiJdfQ==