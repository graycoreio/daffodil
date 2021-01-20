/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, ContentChild, ChangeDetectorRef } from '@angular/core';
import { daffSidebarAnimations } from '../animation/sidebar-animation';
import { getAnimationState } from '../animation/sidebar-animation-state';
import { DaffSidebarComponent } from '../sidebar/sidebar.component';
export class DaffSidebarViewportComponent {
    /**
     * @param {?} ref
     */
    constructor(ref) {
        this.ref = ref;
        /**
         * Internal tracking variable for the state of sidebar viewport.
         * \@docs-private
         */
        this._opened = false;
        /**
         * \@docs-private
         */
        this._mode = 'side';
        /**
         * Input state for whether or not the backdrop is
         * "visible" to the human eye
         */
        // tslint:disable-next-line: no-inferrable-types
        this.backdropIsVisible = true;
        /**
         * Event fired when the backdrop is clicked
         * This is often used to close the sidebar
         */
        this.backdropClicked = new EventEmitter();
    }
    /**
     * The mode to put the sidebar in
     * @return {?}
     */
    get mode() { return this._mode; }
    /**
     * @param {?} value
     * @return {?}
     */
    set mode(value) {
        this._mode = value;
        this._animationState = getAnimationState(this.opened, this.animationsEnabled);
    }
    /**
     * Property for the "opened" state of the sidebar
     * @return {?}
     */
    get opened() { return this._opened; }
    /**
     * @param {?} value
     * @return {?}
     */
    set opened(value) {
        this._opened = value;
        this._animationState = getAnimationState(value, this.animationsEnabled);
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get animationsEnabled() {
        return (this.mode === 'over' || this.mode === 'push') ? true : false;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    ngOnInit() {
        this._animationState = getAnimationState(this.opened, this.animationsEnabled);
    }
    /**
     * \@docs-private
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.sidebar) {
            this.sidebar.escapePressed.subscribe((/**
             * @return {?}
             */
            () => {
                this.onEscape();
            }));
        }
    }
    /**
     * \@docs-private
     * @return {?}
     */
    _backdropClicked() {
        this.backdropClicked.emit();
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get hasBackdrop() {
        return (this.mode === 'over' || this.mode === 'push');
    }
    /**
     * \@docs-private
     * @return {?}
     */
    onEscape() {
        if (this.hasBackdrop) {
            this.opened = false;
            this.ref.markForCheck();
        }
    }
}
DaffSidebarViewportComponent.decorators = [
    { type: Component, args: [{
                selector: 'daff-sidebar-viewport',
                template: "<div class=\"daff-sidebar-viewport {{ mode }}\">\n  <div class=\"daff-sidebar-viewport__sidebar\" [@transformSidebar]=\"_animationState\" [cdkTrapFocus]=\"opened && (mode === 'over' || mode === 'push')\">\n    <ng-content select=\"daff-sidebar\" (escapePressed)=\"onEscape($event)\"></ng-content>\n  </div>\n\n  <daff-backdrop \n  class=\"daff-sidebar-viewport__backdrop\" \n  *ngIf=\"hasBackdrop && _opened\"\n  [transparent]=\"!backdropIsVisible\" \n  (backdropClicked)=\"_backdropClicked()\"></daff-backdrop>\n\n  <div class=\"daff-sidebar-viewport__content\" [@transformContent]=\"_animationState\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    daffSidebarAnimations.transformSidebar,
                    daffSidebarAnimations.transformContent
                ],
                styles: [".daff-sidebar-viewport{display:flex;min-height:100%;position:relative;width:100%;z-index:1}.daff-sidebar-viewport__content{flex:0 1 auto;width:100%;will-change:transform;z-index:2}.daff-sidebar-viewport__sidebar{flex-shrink:0;width:250px;will-change:transform,visibility;z-index:4}.daff-sidebar-viewport__backdrop{cursor:pointer;height:100%;position:absolute;width:100%;z-index:3}.daff-sidebar-viewport.push>.daff-sidebar-viewport__sidebar{bottom:0;height:100%;left:0;position:absolute;top:0;transform:translate3d(-250px,0,0);visibility:hidden}.daff-sidebar-viewport.push>.daff-sidebar-viewport__content{transform:translate3d(250px,0,0)}.daff-sidebar-viewport.over>.daff-sidebar-viewport__sidebar{bottom:0;height:100%;left:0;position:absolute;top:0;transform:translate3d(-250px,0,0);visibility:hidden}"]
            }] }
];
/** @nocollapse */
DaffSidebarViewportComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
DaffSidebarViewportComponent.propDecorators = {
    sidebar: [{ type: ContentChild, args: [DaffSidebarComponent, { static: false },] }],
    mode: [{ type: Input }],
    backdropIsVisible: [{ type: Input }],
    opened: [{ type: Input }],
    backdropClicked: [{ type: Output }]
};
if (false) {
    /**
     * \@docs-private
     * @type {?}
     */
    DaffSidebarViewportComponent.prototype._animationState;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffSidebarViewportComponent.prototype.sidebar;
    /**
     * Internal tracking variable for the state of sidebar viewport.
     * \@docs-private
     * @type {?}
     */
    DaffSidebarViewportComponent.prototype._opened;
    /**
     * \@docs-private
     * @type {?}
     */
    DaffSidebarViewportComponent.prototype._mode;
    /**
     * Input state for whether or not the backdrop is
     * "visible" to the human eye
     * @type {?}
     */
    DaffSidebarViewportComponent.prototype.backdropIsVisible;
    /**
     * Event fired when the backdrop is clicked
     * This is often used to close the sidebar
     * @type {?}
     */
    DaffSidebarViewportComponent.prototype.backdropClicked;
    /**
     * @type {?}
     * @private
     */
    DaffSidebarViewportComponent.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci12aWV3cG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsibW9sZWN1bGVzL3NpZGViYXIvc2lkZWJhci12aWV3cG9ydC9zaWRlYmFyLXZpZXdwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBVSxZQUFZLEVBQUUsaUJBQWlCLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3hKLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBWXBFLE1BQU0sT0FBTyw0QkFBNEI7Ozs7SUFFdkMsWUFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7Ozs7O1FBZTFDLFlBQU8sR0FBRyxLQUFLLENBQUM7Ozs7UUFLaEIsVUFBSyxHQUFvQixNQUFNLENBQUM7Ozs7OztRQWlCdkIsc0JBQWlCLEdBQVksSUFBSSxDQUFDOzs7OztRQWVqQyxvQkFBZSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDO0lBbkQxRSxDQUFDOzs7OztJQXdCQSxJQUNJLElBQUksS0FBc0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDbEQsSUFBSSxJQUFJLENBQUMsS0FBc0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7O0lBWUYsSUFDSSxNQUFNLEtBQWMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDOUMsSUFBSSxNQUFNLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLGlCQUFpQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7OztJQVVELElBQUksaUJBQWlCO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN2RSxDQUFDOzs7OztJQUtELFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDakYsQ0FBQzs7Ozs7SUFLQSxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVM7OztZQUFDLEdBQUcsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLENBQUMsRUFBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUtELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFLRCxJQUFJLFdBQVc7UUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUtBLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7OztZQWpIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsd3BCQUFnRDtnQkFFaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFVBQVUsRUFBRTtvQkFDVixxQkFBcUIsQ0FBQyxnQkFBZ0I7b0JBQ3RDLHFCQUFxQixDQUFDLGdCQUFnQjtpQkFDdkM7O2FBQ0Y7Ozs7WUFoQitGLGlCQUFpQjs7O3NCQTZCOUcsWUFBWSxTQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTttQkFlcEQsS0FBSztnQ0FZTCxLQUFLO3FCQUtOLEtBQUs7OEJBVUosTUFBTTs7Ozs7OztJQS9DUCx1REFBd0I7Ozs7O0lBS3hCLCtDQUFxRjs7Ozs7O0lBS3JGLCtDQUFnQjs7Ozs7SUFLaEIsNkNBQWdDOzs7Ozs7SUFpQmhDLHlEQUEyQzs7Ozs7O0lBZTNDLHVEQUF5RTs7Ozs7SUFwRDdELDJDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25Jbml0LCBDb250ZW50Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhZmZTaWRlYmFyTW9kZSB9IGZyb20gJy4uL2hlbHBlci9zaWRlYmFyLW1vZGUnO1xuaW1wb3J0IHsgZGFmZlNpZGViYXJBbmltYXRpb25zIH0gZnJvbSAnLi4vYW5pbWF0aW9uL3NpZGViYXItYW5pbWF0aW9uJztcbmltcG9ydCB7IGdldEFuaW1hdGlvblN0YXRlIH0gZnJvbSAnLi4vYW5pbWF0aW9uL3NpZGViYXItYW5pbWF0aW9uLXN0YXRlJztcbmltcG9ydCB7IERhZmZTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhZmYtc2lkZWJhci12aWV3cG9ydCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLXZpZXdwb3J0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZWJhci12aWV3cG9ydC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIGRhZmZTaWRlYmFyQW5pbWF0aW9ucy50cmFuc2Zvcm1TaWRlYmFyLFxuICAgIGRhZmZTaWRlYmFyQW5pbWF0aW9ucy50cmFuc2Zvcm1Db250ZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRGFmZlNpZGViYXJWaWV3cG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cdH1cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIF9hbmltYXRpb25TdGF0ZTogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBAQ29udGVudENoaWxkKERhZmZTaWRlYmFyQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgc2lkZWJhcjogRGFmZlNpZGViYXJDb21wb25lbnQ7XG4gIC8qKlxuICAgKiBJbnRlcm5hbCB0cmFja2luZyB2YXJpYWJsZSBmb3IgdGhlIHN0YXRlIG9mIHNpZGViYXIgdmlld3BvcnQuXG5cdCAqIEBkb2NzLXByaXZhdGVcbiAgICovXG4gIF9vcGVuZWQgPSBmYWxzZTtcblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgX21vZGU6IERhZmZTaWRlYmFyTW9kZSA9ICdzaWRlJztcblxuICAvKipcbiAgICogVGhlIG1vZGUgdG8gcHV0IHRoZSBzaWRlYmFyIGluXG4gICAqL1xuICBASW5wdXQoKVxuICBnZXQgbW9kZSgpOiBEYWZmU2lkZWJhck1vZGUgeyByZXR1cm4gdGhpcy5fbW9kZTsgfVxuICBzZXQgbW9kZSh2YWx1ZTogRGFmZlNpZGViYXJNb2RlKSB7XG4gICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICAgIHRoaXMuX2FuaW1hdGlvblN0YXRlID0gZ2V0QW5pbWF0aW9uU3RhdGUodGhpcy5vcGVuZWQsIHRoaXMuYW5pbWF0aW9uc0VuYWJsZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIElucHV0IHN0YXRlIGZvciB3aGV0aGVyIG9yIG5vdCB0aGUgYmFja2Ryb3AgaXMgXG4gICAqIFwidmlzaWJsZVwiIHRvIHRoZSBodW1hbiBleWVcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW5mZXJyYWJsZS10eXBlc1xuICBASW5wdXQoKSBiYWNrZHJvcElzVmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG5cdFxuXHQvKipcblx0ICogUHJvcGVydHkgZm9yIHRoZSBcIm9wZW5lZFwiIHN0YXRlIG9mIHRoZSBzaWRlYmFyXG5cdCAqL1xuXHRASW5wdXQoKVxuXHRnZXQgb3BlbmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fb3BlbmVkOyB9XG5cdHNldCBvcGVuZWQodmFsdWU6IGJvb2xlYW4pIHtcblx0XHR0aGlzLl9vcGVuZWQgPSB2YWx1ZTtcblx0XHR0aGlzLl9hbmltYXRpb25TdGF0ZSA9IGdldEFuaW1hdGlvblN0YXRlKHZhbHVlLCB0aGlzLmFuaW1hdGlvbnNFbmFibGVkKTtcblx0fVxuICAvKipcbiAgICogRXZlbnQgZmlyZWQgd2hlbiB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZFxuICAgKiBUaGlzIGlzIG9mdGVuIHVzZWQgdG8gY2xvc2UgdGhlIHNpZGViYXJcbiAgICovXG4gIEBPdXRwdXQoKSBiYWNrZHJvcENsaWNrZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cblx0Z2V0IGFuaW1hdGlvbnNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5tb2RlID09PSAnb3ZlcicgfHwgdGhpcy5tb2RlID09PSAncHVzaCcpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX2FuaW1hdGlvblN0YXRlID0gZ2V0QW5pbWF0aW9uU3RhdGUodGhpcy5vcGVuZWQsIHRoaXMuYW5pbWF0aW9uc0VuYWJsZWQpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLnNpZGViYXIpIHtcbiAgICAgIHRoaXMuc2lkZWJhci5lc2NhcGVQcmVzc2VkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMub25Fc2NhcGUoKTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIF9iYWNrZHJvcENsaWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5iYWNrZHJvcENsaWNrZWQuZW1pdCgpO1xuICB9XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIGdldCBoYXNCYWNrZHJvcCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMubW9kZSA9PT0gJ292ZXInIHx8IHRoaXMubW9kZSA9PT0gJ3B1c2gnKTtcblx0fVxuXHRcblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIG9uRXNjYXBlKCkge1xuICAgIGlmICh0aGlzLmhhc0JhY2tkcm9wKSB7XG4gICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG59Il19