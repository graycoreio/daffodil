/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, ContentChild, ChangeDetectorRef } from '@angular/core';
import { daffSidebarAnimations } from '../animation/sidebar-animation';
import { getAnimationState } from '../animation/sidebar-animation-state';
import { DaffSidebarComponent } from '../sidebar/sidebar.component';
var DaffSidebarViewportComponent = /** @class */ (function () {
    function DaffSidebarViewportComponent(ref) {
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
    Object.defineProperty(DaffSidebarViewportComponent.prototype, "mode", {
        /**
         * The mode to put the sidebar in
         */
        get: /**
         * The mode to put the sidebar in
         * @return {?}
         */
        function () { return this._mode; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mode = value;
            this._animationState = getAnimationState(this.opened, this.animationsEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffSidebarViewportComponent.prototype, "opened", {
        /**
         * Property for the "opened" state of the sidebar
         */
        get: /**
         * Property for the "opened" state of the sidebar
         * @return {?}
         */
        function () { return this._opened; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._opened = value;
            this._animationState = getAnimationState(value, this.animationsEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaffSidebarViewportComponent.prototype, "animationsEnabled", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return (this.mode === 'over' || this.mode === 'push') ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffSidebarViewportComponent.prototype.ngOnInit = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this._animationState = getAnimationState(this.opened, this.animationsEnabled);
    };
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffSidebarViewportComponent.prototype.ngAfterViewInit = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.sidebar) {
            this.sidebar.escapePressed.subscribe((/**
             * @return {?}
             */
            function () {
                _this.onEscape();
            }));
        }
    };
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffSidebarViewportComponent.prototype._backdropClicked = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        this.backdropClicked.emit();
    };
    Object.defineProperty(DaffSidebarViewportComponent.prototype, "hasBackdrop", {
        /**
         * @docs-private
         */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return (this.mode === 'over' || this.mode === 'push');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @docs-private
     */
    /**
     * \@docs-private
     * @return {?}
     */
    DaffSidebarViewportComponent.prototype.onEscape = /**
     * \@docs-private
     * @return {?}
     */
    function () {
        if (this.hasBackdrop) {
            this.opened = false;
            this.ref.markForCheck();
        }
    };
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
    DaffSidebarViewportComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    DaffSidebarViewportComponent.propDecorators = {
        sidebar: [{ type: ContentChild, args: [DaffSidebarComponent, { static: false },] }],
        mode: [{ type: Input }],
        backdropIsVisible: [{ type: Input }],
        opened: [{ type: Input }],
        backdropClicked: [{ type: Output }]
    };
    return DaffSidebarViewportComponent;
}());
export { DaffSidebarViewportComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci12aWV3cG9ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZGVzaWduLyIsInNvdXJjZXMiOlsibW9sZWN1bGVzL3NpZGViYXIvc2lkZWJhci12aWV3cG9ydC9zaWRlYmFyLXZpZXdwb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBVSxZQUFZLEVBQUUsaUJBQWlCLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3hKLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXBFO0lBWUUsc0NBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1COzs7OztRQWUxQyxZQUFPLEdBQUcsS0FBSyxDQUFDOzs7O1FBS2hCLFVBQUssR0FBb0IsTUFBTSxDQUFDOzs7Ozs7UUFpQnZCLHNCQUFpQixHQUFZLElBQUksQ0FBQzs7Ozs7UUFlakMsb0JBQWUsR0FBdUIsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQW5EMUUsQ0FBQztJQXdCQSxzQkFDSSw4Q0FBSTtRQUpSOztXQUVHOzs7OztRQUNILGNBQzhCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7O1FBQ2xELFVBQVMsS0FBc0I7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hGLENBQUM7OztPQUppRDtJQWdCbkQsc0JBQ0ksZ0RBQU07UUFKVjs7V0FFRzs7Ozs7UUFDSCxjQUN3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7OztRQUM5QyxVQUFXLEtBQWM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDekUsQ0FBQzs7O09BSjZDO0lBYzlDLHNCQUFJLDJEQUFpQjtRQUhyQjs7V0FFRzs7Ozs7UUFDSDtZQUNHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2RSxDQUFDOzs7T0FBQTtJQUVGOztPQUVHOzs7OztJQUNGLCtDQUFROzs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNGLHNEQUFlOzs7O0lBQWY7UUFBQSxpQkFNQztRQUxDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7WUFBQztnQkFDbkMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLENBQUMsRUFBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUY7O09BRUc7Ozs7O0lBQ0YsdURBQWdCOzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBS0Qsc0JBQUkscURBQVc7UUFIaEI7O1dBRUc7Ozs7O1FBQ0Y7WUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQztRQUN6RCxDQUFDOzs7T0FBQTtJQUVEOztPQUVHOzs7OztJQUNGLCtDQUFROzs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7O2dCQWpIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsd3BCQUFnRDtvQkFFaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFVBQVUsRUFBRTt3QkFDVixxQkFBcUIsQ0FBQyxnQkFBZ0I7d0JBQ3RDLHFCQUFxQixDQUFDLGdCQUFnQjtxQkFDdkM7O2lCQUNGOzs7O2dCQWhCK0YsaUJBQWlCOzs7MEJBNkI5RyxZQUFZLFNBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3VCQWVwRCxLQUFLO29DQVlMLEtBQUs7eUJBS04sS0FBSztrQ0FVSixNQUFNOztJQWtEVCxtQ0FBQztDQUFBLEFBbEhELElBa0hDO1NBeEdZLDRCQUE0Qjs7Ozs7O0lBT3ZDLHVEQUF3Qjs7Ozs7SUFLeEIsK0NBQXFGOzs7Ozs7SUFLckYsK0NBQWdCOzs7OztJQUtoQiw2Q0FBZ0M7Ozs7OztJQWlCaEMseURBQTJDOzs7Ozs7SUFlM0MsdURBQXlFOzs7OztJQXBEN0QsMkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQsIENvbnRlbnRDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGFmZlNpZGViYXJNb2RlIH0gZnJvbSAnLi4vaGVscGVyL3NpZGViYXItbW9kZSc7XG5pbXBvcnQgeyBkYWZmU2lkZWJhckFuaW1hdGlvbnMgfSBmcm9tICcuLi9hbmltYXRpb24vc2lkZWJhci1hbmltYXRpb24nO1xuaW1wb3J0IHsgZ2V0QW5pbWF0aW9uU3RhdGUgfSBmcm9tICcuLi9hbmltYXRpb24vc2lkZWJhci1hbmltYXRpb24tc3RhdGUnO1xuaW1wb3J0IHsgRGFmZlNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuLi9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGFmZi1zaWRlYmFyLXZpZXdwb3J0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NpZGViYXItdmlld3BvcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaWRlYmFyLXZpZXdwb3J0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgZGFmZlNpZGViYXJBbmltYXRpb25zLnRyYW5zZm9ybVNpZGViYXIsXG4gICAgZGFmZlNpZGViYXJBbmltYXRpb25zLnRyYW5zZm9ybUNvbnRlbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYWZmU2lkZWJhclZpZXdwb3J0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblx0fVxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgX2FuaW1hdGlvblN0YXRlOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG4gIEBDb250ZW50Q2hpbGQoRGFmZlNpZGViYXJDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KSBzaWRlYmFyOiBEYWZmU2lkZWJhckNvbXBvbmVudDtcbiAgLyoqXG4gICAqIEludGVybmFsIHRyYWNraW5nIHZhcmlhYmxlIGZvciB0aGUgc3RhdGUgb2Ygc2lkZWJhciB2aWV3cG9ydC5cblx0ICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgX29wZW5lZCA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBfbW9kZTogRGFmZlNpZGViYXJNb2RlID0gJ3NpZGUnO1xuXG4gIC8qKlxuICAgKiBUaGUgbW9kZSB0byBwdXQgdGhlIHNpZGViYXIgaW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIGdldCBtb2RlKCk6IERhZmZTaWRlYmFyTW9kZSB7IHJldHVybiB0aGlzLl9tb2RlOyB9XG4gIHNldCBtb2RlKHZhbHVlOiBEYWZmU2lkZWJhck1vZGUpIHtcbiAgICB0aGlzLl9tb2RlID0gdmFsdWU7XG4gICAgdGhpcy5fYW5pbWF0aW9uU3RhdGUgPSBnZXRBbmltYXRpb25TdGF0ZSh0aGlzLm9wZW5lZCwgdGhpcy5hbmltYXRpb25zRW5hYmxlZCk7XG4gIH1cblxuICAvKipcbiAgICogSW5wdXQgc3RhdGUgZm9yIHdoZXRoZXIgb3Igbm90IHRoZSBiYWNrZHJvcCBpcyBcbiAgICogXCJ2aXNpYmxlXCIgdG8gdGhlIGh1bWFuIGV5ZVxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbmZlcnJhYmxlLXR5cGVzXG4gIEBJbnB1dCgpIGJhY2tkcm9wSXNWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcblx0XG5cdC8qKlxuXHQgKiBQcm9wZXJ0eSBmb3IgdGhlIFwib3BlbmVkXCIgc3RhdGUgb2YgdGhlIHNpZGViYXJcblx0ICovXG5cdEBJbnB1dCgpXG5cdGdldCBvcGVuZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9vcGVuZWQ7IH1cblx0c2V0IG9wZW5lZCh2YWx1ZTogYm9vbGVhbikge1xuXHRcdHRoaXMuX29wZW5lZCA9IHZhbHVlO1xuXHRcdHRoaXMuX2FuaW1hdGlvblN0YXRlID0gZ2V0QW5pbWF0aW9uU3RhdGUodmFsdWUsIHRoaXMuYW5pbWF0aW9uc0VuYWJsZWQpO1xuXHR9XG4gIC8qKlxuICAgKiBFdmVudCBmaXJlZCB3aGVuIHRoZSBiYWNrZHJvcCBpcyBjbGlja2VkXG4gICAqIFRoaXMgaXMgb2Z0ZW4gdXNlZCB0byBjbG9zZSB0aGUgc2lkZWJhclxuICAgKi9cbiAgQE91dHB1dCgpIGJhY2tkcm9wQ2xpY2tlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuXHRnZXQgYW5pbWF0aW9uc0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICh0aGlzLm1vZGUgPT09ICdvdmVyJyB8fCB0aGlzLm1vZGUgPT09ICdwdXNoJykgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fYW5pbWF0aW9uU3RhdGUgPSBnZXRBbmltYXRpb25TdGF0ZSh0aGlzLm9wZW5lZCwgdGhpcy5hbmltYXRpb25zRW5hYmxlZCk7XG5cdH1cblx0XG5cdC8qKlxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuc2lkZWJhcikge1xuICAgICAgdGhpcy5zaWRlYmFyLmVzY2FwZVByZXNzZWQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5vbkVzY2FwZSgpO1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgX2JhY2tkcm9wQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tlZC5lbWl0KCk7XG4gIH1cblxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgZ2V0IGhhc0JhY2tkcm9wKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5tb2RlID09PSAnb3ZlcicgfHwgdGhpcy5tb2RlID09PSAncHVzaCcpO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQGRvY3MtcHJpdmF0ZVxuXHQgKi9cbiAgb25Fc2NhcGUoKSB7XG4gICAgaWYgKHRoaXMuaGFzQmFja2Ryb3ApIHtcbiAgICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cbn0iXX0=