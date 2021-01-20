var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { getDaffOrderEntitySelectors } from './order-entities.selector';
import { getOrderSelectors } from './order.selector';
import { getDaffOrderReducersStateSelector } from './order-feature.selector';
/**
 * @record
 * @template T
 */
export function DaffOrderAllSelectors() { }
var ɵ0 = /**
 * @return {?}
 */
function () {
    /** @type {?} */
    var cache;
    return (/**
     * @template T
     * @return {?}
     */
    function () {
        return cache = cache || __assign({}, getOrderSelectors(), getDaffOrderEntitySelectors(), getDaffOrderReducersStateSelector());
    });
};
/** @type {?} */
export var getDaffOrderSelectors = ((ɵ0))();
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItYWxsLnNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL29yZGVyL3N0YXRlLyIsInNvdXJjZXMiOlsic2VsZWN0b3JzL29yZGVyLWFsbC5zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSxPQUFPLEVBQTRCLDJCQUEyQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEcsT0FBTyxFQUFzQixpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pFLE9BQU8sRUFBNEIsaUNBQWlDLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFFdkcsMkNBR2dDOzs7O0FBRU07O1FBQ2hDLEtBQUs7SUFDVDs7OztJQUFPO1FBQ0wsT0FBQSxLQUFLLEdBQUcsS0FBSyxpQkFDUixpQkFBaUIsRUFBSyxFQUN0QiwyQkFBMkIsRUFBSyxFQUNoQyxpQ0FBaUMsRUFBSyxDQUMxQztJQUpELENBSUMsRUFBQTtBQUNMLENBQUM7O0FBUkQsTUFBTSxLQUFPLHFCQUFxQixHQUFHLE1BUW5DLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYWZmT3JkZXIgfSBmcm9tICdAZGFmZm9kaWwvb3JkZXInO1xuXG5pbXBvcnQgeyBEYWZmT3JkZXJFbnRpdHlTZWxlY3RvcnMsIGdldERhZmZPcmRlckVudGl0eVNlbGVjdG9ycyB9IGZyb20gJy4vb3JkZXItZW50aXRpZXMuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZk9yZGVyU2VsZWN0b3JzLCBnZXRPcmRlclNlbGVjdG9ycyB9IGZyb20gJy4vb3JkZXIuc2VsZWN0b3InO1xuaW1wb3J0IHsgRGFmZk9yZGVyRmVhdHVyZVNlbGVjdG9yLCBnZXREYWZmT3JkZXJSZWR1Y2Vyc1N0YXRlU2VsZWN0b3IgfSBmcm9tICcuL29yZGVyLWZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhZmZPcmRlckFsbFNlbGVjdG9yczxUIGV4dGVuZHMgRGFmZk9yZGVyID0gRGFmZk9yZGVyPiBleHRlbmRzXG4gIERhZmZPcmRlckVudGl0eVNlbGVjdG9yczxUPixcbiAgRGFmZk9yZGVyU2VsZWN0b3JzLFxuICBEYWZmT3JkZXJGZWF0dXJlU2VsZWN0b3I8VD4ge31cblxuZXhwb3J0IGNvbnN0IGdldERhZmZPcmRlclNlbGVjdG9ycyA9ICgoKSA9PiB7XG4gIGxldCBjYWNoZTtcbiAgcmV0dXJuIDxUIGV4dGVuZHMgRGFmZk9yZGVyID0gRGFmZk9yZGVyPigpOiBEYWZmT3JkZXJBbGxTZWxlY3RvcnM8VD4gPT5cbiAgICBjYWNoZSA9IGNhY2hlIHx8IHtcbiAgICAgIC4uLmdldE9yZGVyU2VsZWN0b3JzPFQ+KCksXG4gICAgICAuLi5nZXREYWZmT3JkZXJFbnRpdHlTZWxlY3RvcnM8VD4oKSxcbiAgICAgIC4uLmdldERhZmZPcmRlclJlZHVjZXJzU3RhdGVTZWxlY3RvcjxUPigpXG4gICAgfVxufSkoKTtcbiJdfQ==