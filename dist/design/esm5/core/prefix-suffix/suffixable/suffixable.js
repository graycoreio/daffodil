/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ContentChild } from '@angular/core';
import { DaffSuffixDirective } from '../suffix.directive';
/**
 * A mixin for giving a component the ability to place content after another piece of content.
 * @template T
 * @param {?} Base
 * @return {?}
 */
export function daffSuffixableMixin(Base) {
    var Suffixable = /** @class */ (function (_super) {
        tslib_1.__extends(Suffixable, _super);
        function Suffixable() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return _super.apply(this, tslib_1.__spread(args)) || this;
        }
        Suffixable.propDecorators = {
            _suffix: [{ type: ContentChild, args: [DaffSuffixDirective, { static: true },] }]
        };
        return Suffixable;
    }(Base));
    if (false) {
        /** @type {?} */
        Suffixable.prototype._suffix;
    }
    return Suffixable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VmZml4YWJsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9kZXNpZ24vIiwic291cmNlcyI6WyJjb3JlL3ByZWZpeC1zdWZmaXgvc3VmZml4YWJsZS9zdWZmaXhhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQU0xRCxNQUFNLFVBQVUsbUJBQW1CLENBQXdCLElBQU87SUFDaEU7UUFBeUIsc0NBQUk7UUFJM0I7WUFBWSxjQUFjO2lCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7Z0JBQWQseUJBQWM7O3VEQUNmLElBQUk7UUFDZixDQUFDOzs4QkFKQSxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDOztRQUtwRCxpQkFBQztLQUFBLEFBUEQsQ0FBeUIsSUFBSSxHQU81Qjs7O1FBTEMsNkJBQWlGOztJQU9uRixPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYWZmU3VmZml4RGlyZWN0aXZlIH0gZnJvbSAnLi4vc3VmZml4LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvcHVibGljX2FwaSc7XG5cbi8qKlxuICogQSBtaXhpbiBmb3IgZ2l2aW5nIGEgY29tcG9uZW50IHRoZSBhYmlsaXR5IHRvIHBsYWNlIGNvbnRlbnQgYWZ0ZXIgYW5vdGhlciBwaWVjZSBvZiBjb250ZW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGFmZlN1ZmZpeGFibGVNaXhpbjxUIGV4dGVuZHMgQ29uc3RydWN0b3I+KEJhc2U6IFQpIHtcbiAgY2xhc3MgU3VmZml4YWJsZSBleHRlbmRzIEJhc2Uge1xuXG4gICAgQENvbnRlbnRDaGlsZChEYWZmU3VmZml4RGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZX0pIF9zdWZmaXg6IERhZmZTdWZmaXhEaXJlY3RpdmU7XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFN1ZmZpeGFibGU7XG59XG4iXX0=