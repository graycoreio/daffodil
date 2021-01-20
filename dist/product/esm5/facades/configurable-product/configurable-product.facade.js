/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DaffProductModule } from '../../product.module';
import { getDaffProductSelectors } from '../../selectors/public_api';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../product.module";
/**
 * A facade for interacting with the configurable product state.
 * Exposes many parts of the state for easy access and allows dispatching of actions.
 *
 * See the <a href="docs/api/product/DaffConfigurableProductFacadeInterface">DaffConfigurableProductFacadeInterface docs</a> for more details.
 * @template T
 */
var DaffConfigurableProductFacade = /** @class */ (function () {
    function DaffConfigurableProductFacade(store) {
        this.store = store;
        this.selectors = getDaffProductSelectors();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    DaffConfigurableProductFacade.prototype.getAllAttributes = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectAllConfigurableProductAttributes, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffConfigurableProductFacade.prototype.getAllVariants = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectAllConfigurableProductVariants, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffConfigurableProductFacade.prototype.getAppliedAttributes = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectConfigurableProductAppliedAttributesAsDictionary, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffConfigurableProductFacade.prototype.getMinimumPrice = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectConfigurableProductMinimumPrice, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffConfigurableProductFacade.prototype.getMaximumPrice = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectConfigurableProductMaximumPrice, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffConfigurableProductFacade.prototype.getMinimumDiscountedPrice = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectConfigurableProductMinimumDiscountedPrice, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffConfigurableProductFacade.prototype.getMaximumDiscountedPrice = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectConfigurableProductMaximumDiscountedPrice, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffConfigurableProductFacade.prototype.getMinimumPercentDiscount = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectConfigurableProductMinimumPercentDiscount, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffConfigurableProductFacade.prototype.getMaximumPercentDiscount = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectConfigurableProductMaximumPercentDiscount, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffConfigurableProductFacade.prototype.isPriceRanged = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.isConfigurablePriceRanged, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffConfigurableProductFacade.prototype.hasDiscount = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectConfigurableProductHasDiscount, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffConfigurableProductFacade.prototype.getSelectableAttributes = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectSelectableConfigurableProductAttributes, { id: id }));
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DaffConfigurableProductFacade.prototype.getMatchingVariants = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.store.pipe(select(this.selectors.selectMatchingConfigurableProductVariants, { id: id }));
    };
    /**
     * Dispatches an action to the rxjs action stream.
     */
    /**
     * Dispatches an action to the rxjs action stream.
     * @param {?} action
     * @return {?}
     */
    DaffConfigurableProductFacade.prototype.dispatch = /**
     * Dispatches an action to the rxjs action stream.
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.store.dispatch(action);
    };
    DaffConfigurableProductFacade.decorators = [
        { type: Injectable, args: [{
                    providedIn: DaffProductModule
                },] }
    ];
    /** @nocollapse */
    DaffConfigurableProductFacade.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ DaffConfigurableProductFacade.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DaffConfigurableProductFacade_Factory() { return new DaffConfigurableProductFacade(i0.ɵɵinject(i1.Store)); }, token: DaffConfigurableProductFacade, providedIn: i2.DaffProductModule });
    return DaffConfigurableProductFacade;
}());
export { DaffConfigurableProductFacade };
if (false) {
    /** @type {?} */
    DaffConfigurableProductFacade.prototype.selectors;
    /**
     * @type {?}
     * @private
     */
    DaffConfigurableProductFacade.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXByb2R1Y3QuZmFjYWRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL3Byb2R1Y3QvIiwic291cmNlcyI6WyJmYWNhZGVzL2NvbmZpZ3VyYWJsZS1wcm9kdWN0L2NvbmZpZ3VyYWJsZS1wcm9kdWN0LmZhY2FkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVSxNQUFNLGFBQWEsQ0FBQztBQUdwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd6RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7Ozs7QUFVckU7SUFPQyx1Q0FBb0IsS0FBeUM7UUFBekMsVUFBSyxHQUFMLEtBQUssQ0FBb0M7UUFGN0QsY0FBUyxHQUFHLHVCQUF1QixFQUFLLENBQUM7SUFFdUIsQ0FBQzs7Ozs7SUFFakUsd0RBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQVU7UUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxzQ0FBc0MsRUFBRSxFQUFFLEVBQUUsSUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7Ozs7O0lBRUQsc0RBQWM7Ozs7SUFBZCxVQUFlLEVBQVU7UUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQ0FBb0MsRUFBRSxFQUFFLEVBQUUsSUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7Ozs7O0lBRUQsNERBQW9COzs7O0lBQXBCLFVBQXFCLEVBQVU7UUFDOUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxD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QUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBbEVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsaUJBQWlCO2lCQUM5Qjs7OztnQkFsQlEsS0FBSzs7O3dDQUZkO0NBcUZDLEFBbkVELElBbUVDO1NBaEVZLDZCQUE2Qjs7O0lBRXpDLGtEQUF5Qzs7Ozs7SUFFN0IsOENBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3RvcmUsIHNlbGVjdCwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gJ0BuZ3J4L2VudGl0eSc7XG5cbmltcG9ydCB7IERhZmZQcm9kdWN0TW9kdWxlIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC5tb2R1bGUnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3RSZWR1Y2Vyc1N0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcHJvZHVjdC1yZWR1Y2Vycy1zdGF0ZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGFmZlByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvcHJvZHVjdCc7XG5pbXBvcnQgeyBnZXREYWZmUHJvZHVjdFNlbGVjdG9ycyB9IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9wdWJsaWNfYXBpJztcbmltcG9ydCB7IERhZmZDb25maWd1cmFibGVQcm9kdWN0RmFjYWRlSW50ZXJmYWNlIH0gZnJvbSAnLi9jb25maWd1cmFibGUtcHJvZHVjdC1mYWNhZGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IERhZmZDb25maWd1cmFibGVQcm9kdWN0VmFyaWFudCB9IGZyb20gJy4uLy4uL21vZGVscy9jb25maWd1cmFibGUtcHJvZHVjdCc7XG5cbi8qKlxuICogQSBmYWNhZGUgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIGNvbmZpZ3VyYWJsZSBwcm9kdWN0IHN0YXRlLlxuICogRXhwb3NlcyBtYW55IHBhcnRzIG9mIHRoZSBzdGF0ZSBmb3IgZWFzeSBhY2Nlc3MgYW5kIGFsbG93cyBkaXNwYXRjaGluZyBvZiBhY3Rpb25zLlxuICogXG4gKiBTZWUgdGhlIDxhIGhyZWY9XCJkb2NzL2FwaS9wcm9kdWN0L0RhZmZDb25maWd1cmFibGVQcm9kdWN0RmFjYWRlSW50ZXJmYWNlXCI+RGFmZkNvbmZpZ3VyYWJsZVByb2R1Y3RGYWNhZGVJbnRlcmZhY2UgZG9jczwvYT4gZm9yIG1vcmUgZGV0YWlscy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBEYWZmUHJvZHVjdE1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEZhY2FkZTxUIGV4dGVuZHMgRGFmZlByb2R1Y3QgPSBEYWZmUHJvZHVjdD4gaW1wbGVtZW50cyBEYWZmQ29uZmlndXJhYmxlUHJvZHVjdEZhY2FkZUludGVyZmFjZSB7XG5cblx0c2VsZWN0b3JzID0gZ2V0RGFmZlByb2R1Y3RTZWxlY3RvcnM8VD4oKTtcblx0XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IFN0b3JlPERhZmZQcm9kdWN0UmVkdWNlcnNTdGF0ZTxUPj4pIHt9XG5cdFxuXHRnZXRBbGxBdHRyaWJ1dGVzKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERpY3Rpb25hcnk8c3RyaW5nW10+PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5zZWxlY3RvcnMuc2VsZWN0QWxsQ29uZmlndXJhYmxlUHJvZHVjdEF0dHJpYnV0ZXMsIHsgaWQgfSkpO1xuXHR9XG5cdFxuXHRnZXRBbGxWYXJpYW50cyhpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEYWZmQ29uZmlndXJhYmxlUHJvZHVjdFZhcmlhbnRbXT4ge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuc2VsZWN0b3JzLnNlbGVjdEFsbENvbmZpZ3VyYWJsZVByb2R1Y3RWYXJpYW50cywgeyBpZCB9KSk7XG5cdH1cblx0XG5cdGdldEFwcGxpZWRBdHRyaWJ1dGVzKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERpY3Rpb25hcnk8c3RyaW5nPj4ge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuc2VsZWN0b3JzLnNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RBcHBsaWVkQXR0cmlidXRlc0FzRGljdGlvbmFyeSwgeyBpZCB9KSk7XG5cdH1cblxuXHRnZXRNaW5pbXVtUHJpY2UoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5zZWxlY3RvcnMuc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1pbmltdW1QcmljZSwgeyBpZCB9KSk7XG5cdH1cblxuXHRnZXRNYXhpbXVtUHJpY2UoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5zZWxlY3RvcnMuc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1heGltdW1QcmljZSwgeyBpZCB9KSk7XG5cdH1cblxuXHRnZXRNaW5pbXVtRGlzY291bnRlZFByaWNlKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuc2VsZWN0b3JzLnNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNaW5pbXVtRGlzY291bnRlZFByaWNlLCB7IGlkIH0pKTtcblx0fVxuXG5cdGdldE1heGltdW1EaXNjb3VudGVkUHJpY2UoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5zZWxlY3RvcnMuc2VsZWN0Q29uZmlndXJhYmxlUHJvZHVjdE1heGltdW1EaXNjb3VudGVkUHJpY2UsIHsgaWQgfSkpO1xuXHR9XG5cblx0Z2V0TWluaW11bVBlcmNlbnREaXNjb3VudChpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdCh0aGlzLnNlbGVjdG9ycy5zZWxlY3RDb25maWd1cmFibGVQcm9kdWN0TWluaW11bVBlcmNlbnREaXNjb3VudCwgeyBpZCB9KSk7XG5cdH1cblxuXHRnZXRNYXhpbXVtUGVyY2VudERpc2NvdW50KGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuc2VsZWN0b3JzLnNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RNYXhpbXVtUGVyY2VudERpc2NvdW50LCB7IGlkIH0pKTtcblx0fVxuXG5cdGlzUHJpY2VSYW5nZWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuc2VsZWN0b3JzLmlzQ29uZmlndXJhYmxlUHJpY2VSYW5nZWQsIHsgaWQgfSkpO1xuXHR9XG5cblx0aGFzRGlzY291bnQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuc2VsZWN0b3JzLnNlbGVjdENvbmZpZ3VyYWJsZVByb2R1Y3RIYXNEaXNjb3VudCwgeyBpZCB9KSk7XG5cdH1cblxuXHRnZXRTZWxlY3RhYmxlQXR0cmlidXRlcyhpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxEaWN0aW9uYXJ5PHN0cmluZ1tdPj4ge1xuXHRcdHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KHRoaXMuc2VsZWN0b3JzLnNlbGVjdFNlbGVjdGFibGVDb25maWd1cmFibGVQcm9kdWN0QXR0cmlidXRlcywgeyBpZCB9KSk7XG5cdH1cblxuXHRnZXRNYXRjaGluZ1ZhcmlhbnRzKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPERhZmZDb25maWd1cmFibGVQcm9kdWN0VmFyaWFudFtdPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QodGhpcy5zZWxlY3RvcnMuc2VsZWN0TWF0Y2hpbmdDb25maWd1cmFibGVQcm9kdWN0VmFyaWFudHMsIHsgaWQgfSkpO1xuXHR9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uIHRvIHRoZSByeGpzIGFjdGlvbiBzdHJlYW0uXG4gICAqL1xuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgfVxufVxuIl19