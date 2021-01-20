/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
/** @enum {string} */
const DaffFeatureModeEnum = {
    Compact: 'compact',
    Normal: 'normal',
};
export { DaffFeatureModeEnum };
export class DaffFeatureComponent {
    constructor() {
        /**
         * \@docs-private
         */
        this.class = true;
        this.mode = DaffFeatureModeEnum.Normal;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get compact() {
        return this.mode === DaffFeatureModeEnum.Compact;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get normal() {
        return this.mode === DaffFeatureModeEnum.Normal;
    }
}
DaffFeatureComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-feature',
                template: "<ng-content select=\"[daffFeatureIcon]\"></ng-content>\n<div class=\"daff-feature__content\">\n  <ng-content select=\"[daffFeatureSubheader]\"></ng-content>\n  <ng-content select=\"[daffFeatureTitle]\"></ng-content>\n  <ng-content select=\"[daffFeatureSubtitle]\"></ng-content>\n  <ng-content></ng-content>\n</div>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".daff-feature{border-radius:10px;display:flex}.daff-feature__icon{display:inline-block;max-width:30px}.daff-feature__subheader{text-transform:uppercase;font-size:.75rem;letter-spacing:.075rem;line-height:1rem}@media (min-width:480px){.daff-feature__icon{max-width:50px}.daff-feature__subheader{font-size:.75rem}}.daff-feature__title{font-weight:700;margin:0 0 15px;padding:0}.daff-feature__subtitle{font-size:1rem;margin:0;padding:0}.daff-feature--normal{align-items:flex-start;flex-direction:column;padding:25px}.daff-feature--normal .daff-feature__icon{margin:0 0 15px}@media (min-width:480px){.daff-feature--normal{align-items:center;flex-direction:row;padding:50px}.daff-feature--normal .daff-feature__icon{margin:0 25px 0 0}}.daff-feature--normal .daff-feature__subheader{margin:0 0 15px}.daff-feature--normal .daff-feature__title{font-size:1.25rem;line-height:1.25rem}@media (min-width:480px){.daff-feature--normal .daff-feature__subheader{margin:0 0 30px}.daff-feature--normal .daff-feature__title{font-size:2rem;line-height:2rem}}.daff-feature--compact{align-items:flex-start;flex-direction:column;padding:25px}.daff-feature--compact .daff-feature__icon{margin:0 0 15px}.daff-feature--compact .daff-feature__subheader{margin:0 0 5px}.daff-feature--compact .daff-feature__title{font-size:1.25rem;line-height:1.25rem}@media (min-width:480px){.daff-feature--compact .daff-feature__title{font-size:1.5rem;line-height:1.5rem}}"]
            }] }
];
DaffFeatureComponent.propDecorators = {
    class: [{ type: HostBinding, args: ['class.daff-feature',] }],
    mode: [{ type: Input }],
    compact: [{ type: HostBinding, args: ['class.daff-feature--compact',] }],
    normal: [{ type: HostBinding, args: ['class.daff-feature--normal',] }]
};
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffFeatureComponent.prototype.class;
    /** @type {?} */
    DaffFeatureComponent.prototype.mode;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsibW9sZWN1bGVzL2ZlYXR1cmUvZmVhdHVyZS9mZWF0dXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7SUFJeEcsU0FBVSxTQUFTO0lBQ25CLFFBQVMsUUFBUTs7O0FBV25CLE1BQU0sT0FBTyxvQkFBb0I7SUFSakM7Ozs7UUFhcUMsVUFBSyxHQUFHLElBQUksQ0FBQztRQUV2QyxTQUFJLEdBQW9CLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztJQWU5RCxDQUFDOzs7OztJQVZDLElBQWdELE9BQU87UUFDckQsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztJQUNuRCxDQUFDOzs7OztJQUtELElBQStDLE1BQU07UUFDbkQsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztJQUNsRCxDQUFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixzVUFBdUM7Z0JBRXZDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7OztvQkFPRSxXQUFXLFNBQUMsb0JBQW9CO21CQUVoQyxLQUFLO3NCQUtMLFdBQVcsU0FBQyw2QkFBNkI7cUJBT3pDLFdBQVcsU0FBQyw0QkFBNEI7Ozs7Ozs7SUFkekMscUNBQWdEOztJQUVoRCxvQ0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIERhZmZGZWF0dXJlTW9kZSA9ICdjb21wYWN0JyB8ICdub3JtYWwnIHwgdW5kZWZpbmVkO1xuZXhwb3J0IGVudW0gRGFmZkZlYXR1cmVNb2RlRW51bSB7XG4gIENvbXBhY3QgPSAnY29tcGFjdCcsXG4gIE5vcm1hbCA9ICdub3JtYWwnXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhZmYtZmVhdHVyZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9mZWF0dXJlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmVhdHVyZS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIERhZmZGZWF0dXJlQ29tcG9uZW50IHtcblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kYWZmLWZlYXR1cmUnKSBjbGFzcyA9IHRydWU7XG5cbiAgQElucHV0KCkgbW9kZTogRGFmZkZlYXR1cmVNb2RlID0gRGFmZkZlYXR1cmVNb2RlRW51bS5Ob3JtYWw7XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1mZWF0dXJlLS1jb21wYWN0JykgZ2V0IGNvbXBhY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gRGFmZkZlYXR1cmVNb2RlRW51bS5Db21wYWN0O1xuICB9XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1mZWF0dXJlLS1ub3JtYWwnKSBnZXQgbm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09IERhZmZGZWF0dXJlTW9kZUVudW0uTm9ybWFsO1xuICB9XG59XG4iXX0=