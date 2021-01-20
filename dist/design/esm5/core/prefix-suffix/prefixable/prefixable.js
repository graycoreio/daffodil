/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ContentChild } from '@angular/core';
import { DaffPrefixDirective } from '../prefix.directive';
/**
 * A mixin for giving a component the ability to place content before another piece of content.
 * @template T
 * @param {?} Base
 * @return {?}
 */
export function daffPrefixableMixin(Base) {
    var Prefixable = /** @class */ (function (_super) {
        tslib_1.__extends(Prefixable, _super);
        function Prefixable() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, tslib_1.__spread(args)) || this;
        }
        Prefixable.propDecorators = {
            _prefix: [{ type: ContentChild, args: [DaffPrefixDirective, { static: true },] }]
        };
        return Prefixable;
    }(Base));
    if (false) {
        /** @type {?} */
        Prefixable.prototype._prefix;
    }
    return Prefixable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZml4YWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJjb3JlL3ByZWZpeC1zdWZmaXgvcHJlZml4YWJsZS9wcmVmaXhhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQU0xRCxNQUFNLFVBQVUsbUJBQW1CLENBQXdCLElBQU87SUFDaEU7UUFBeUIsc0NBQUk7UUFJM0I7WUFBWSxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O3VEQUNmLElBQUk7UUFDZixDQUFDOzs4QkFKQSxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDOztRQUtwRCxpQkFBQztLQUFBLEFBUEQsQ0FBeUIsSUFBSSxHQU81Qjs7O1FBTEMsNkJBQWlGOztJQU9uRixPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYWZmUHJlZml4RGlyZWN0aXZlIH0gZnJvbSAnLi4vcHJlZml4LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvcHVibGljX2FwaSc7XG5cbi8qKlxuICogQSBtaXhpbiBmb3IgZ2l2aW5nIGEgY29tcG9uZW50IHRoZSBhYmlsaXR5IHRvIHBsYWNlIGNvbnRlbnQgYmVmb3JlIGFub3RoZXIgcGllY2Ugb2YgY29udGVudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhZmZQcmVmaXhhYmxlTWl4aW48VCBleHRlbmRzIENvbnN0cnVjdG9yPihCYXNlOiBUKSB7XG4gIGNsYXNzIFByZWZpeGFibGUgZXh0ZW5kcyBCYXNlIHtcblxuICAgIEBDb250ZW50Q2hpbGQoRGFmZlByZWZpeERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWV9KSBfcHJlZml4OiBEYWZmUHJlZml4RGlyZWN0aXZlO1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJnczogYW55W10pIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBQcmVmaXhhYmxlO1xufVxuIl19