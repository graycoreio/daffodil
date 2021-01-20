/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation, HostBinding } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { daffAccordionAnimations } from '../animation/accordion-animation';
import { getAnimationState } from '../animation/accordion-animation-state';
var DaffAccordionItemComponent = /** @class */ (function () {
    function DaffAccordionItemComponent() {
        /**
         * \@docs-private
         */
        this.faChevronDown = faChevronDown;
        /**
         * \@docs-private
         */
        this.faChevronUp = faChevronUp;
        /**
         * \@docs-private
         */
        this.class = true;
        /**
         * \@docs-private
         */
        this._open = false;
    }
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffAccordionItemComponent.prototype.ngOnInit = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this._open = this.initiallyActive ? this.initiallyActive : this._open;
        this._animationState = getAnimationState(this._open);
    };
    /**
     * @return {?}
     */
    DaffAccordionItemComponent.prototype.toggleActive = /**
     * @return {?}
     */
    function () {
        this._open = !this._open;
        this._animationState = getAnimationState(this._open);
    };
    DaffAccordionItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-accordion-item',
                    template: "<div class=\"daff-accordion-item__header\" (click)=\"toggleActive()\">\n  <ng-content select=\"[daffAccordionItemTitle]\"></ng-content>\n  <span [hidden]=\"_open\" daffSuffix>\n    <fa-icon [icon]=\"faChevronDown\"></fa-icon>\n  </span>\n  <span [hidden]=\"!_open\" daffSuffix>\n    <fa-icon [icon]=\"faChevronUp\"></fa-icon>\n  </span>\n</div>\n<div [@openAccordion]=\"_animationState\">\n  <ng-content></ng-content>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    animations: [
                        daffAccordionAnimations.openAccordion
                    ],
                    styles: [".daff-accordion-item{display:block;padding:15px 0;width:100%}@media (min-width:768px){.daff-accordion-item{padding:30px 0}}.daff-accordion-item__header{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;align-items:center;justify-content:space-between;width:100%}.daff-accordion-item__header .daff-suffix{margin:0 10px}.daff-accordion-item__title{font-weight:700;text-transform:uppercase;font-size:1rem;margin:0}.daff-accordion-item__content{padding-top:15px}@media (min-width:768px){.daff-accordion-item__content{padding-top:30px}}"]
                }] }
    ];
    DaffAccordionItemComponent.propDecorators = {
        class: [{ type: HostBinding, args: ['class.daff-accordion-item',] }],
        initiallyActive: [{ type: Input }]
    };
    return DaffAccordionItemComponent;
}());
export { DaffAccordionItemComponent };
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffAccordionItemComponent.prototype.faChevronDown;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffAccordionItemComponent.prototype.faChevronUp;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffAccordionItemComponent.prototype.class;
    /** @type {?} */
    DaffAccordionItemComponent.prototype.initiallyActive;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffAccordionItemComponent.prototype._open;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffAccordionItemComponent.prototype._animationState;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbIm1vbGVjdWxlcy9hY2NvcmRpb24vYWNjb3JkaW9uLWl0ZW0vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekYsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUzRTtJQUFBOzs7O1FBYUMsa0JBQWEsR0FBRyxhQUFhLENBQUM7Ozs7UUFJN0IsZ0JBQVcsR0FBRyxXQUFXLENBQUM7Ozs7UUFLZ0IsVUFBSyxHQUFHLElBQUksQ0FBQzs7OztRQU14RCxVQUFLLEdBQUcsS0FBSyxDQUFDO0lBa0JmLENBQUM7SUFaQTs7T0FFRzs7Ozs7SUFDRiw2Q0FBUTs7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCxpREFBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDOztnQkE3Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHFiQUE4QztvQkFFOUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFVBQVUsRUFBRTt3QkFDVix1QkFBdUIsQ0FBQyxhQUFhO3FCQUN0Qzs7aUJBQ0Y7Ozt3QkFjRSxXQUFXLFNBQUMsMkJBQTJCO2tDQUV4QyxLQUFLOztJQXNCUCxpQ0FBQztDQUFBLEFBOUNELElBOENDO1NBckNZLDBCQUEwQjs7Ozs7O0lBSXRDLG1EQUE4Qjs7Ozs7SUFJN0IsaURBQTBCOzs7OztJQUsxQiwyQ0FBdUQ7O0lBRXhELHFEQUFrQzs7Ozs7SUFJbEMsMkNBQWM7Ozs7O0lBSWIscURBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZmFDaGV2cm9uRG93biwgZmFDaGV2cm9uVXAgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5pbXBvcnQgeyBkYWZmQWNjb3JkaW9uQW5pbWF0aW9ucyB9IGZyb20gJy4uL2FuaW1hdGlvbi9hY2NvcmRpb24tYW5pbWF0aW9uJztcbmltcG9ydCB7IGdldEFuaW1hdGlvblN0YXRlIH0gZnJvbSAnLi4vYW5pbWF0aW9uL2FjY29yZGlvbi1hbmltYXRpb24tc3RhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYWZmLWFjY29yZGlvbi1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWNjb3JkaW9uLWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgYW5pbWF0aW9uczogW1xuICAgIGRhZmZBY2NvcmRpb25BbmltYXRpb25zLm9wZW5BY2NvcmRpb25cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmQWNjb3JkaW9uSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuXHRmYUNoZXZyb25Eb3duID0gZmFDaGV2cm9uRG93bjtcblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIGZhQ2hldnJvblVwID0gZmFDaGV2cm9uVXA7XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1hY2NvcmRpb24taXRlbScpIGNsYXNzID0gdHJ1ZTtcblxuXHRASW5wdXQoKSBpbml0aWFsbHlBY3RpdmU6IGJvb2xlYW47XG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuXHRfb3BlbiA9IGZhbHNlO1xuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgX2FuaW1hdGlvblN0YXRlOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX29wZW4gPSB0aGlzLmluaXRpYWxseUFjdGl2ZSA/IHRoaXMuaW5pdGlhbGx5QWN0aXZlIDogdGhpcy5fb3BlbjtcbiAgICB0aGlzLl9hbmltYXRpb25TdGF0ZSA9IGdldEFuaW1hdGlvblN0YXRlKHRoaXMuX29wZW4pO1xuICB9XG5cbiAgdG9nZ2xlQWN0aXZlKCkge1xuICAgIHRoaXMuX29wZW4gPSAhdGhpcy5fb3BlbjsgIFxuICAgIHRoaXMuX2FuaW1hdGlvblN0YXRlID0gZ2V0QW5pbWF0aW9uU3RhdGUodGhpcy5fb3Blbik7XG4gIH1cbn1cbiJdfQ==