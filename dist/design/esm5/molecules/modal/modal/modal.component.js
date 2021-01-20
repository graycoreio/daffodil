/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, HostBinding, ChangeDetectionStrategy, ViewChild, HostListener, } from '@angular/core';
import { daffFadeAnimations } from '../animations/modal-animation';
import { getAnimationState } from '../animations/modal-animation-state';
import { CdkPortalOutlet } from '@angular/cdk/portal';
var DaffModalComponent = /** @class */ (function () {
    function DaffModalComponent() {
        /**
         * Dictates whether or not a modal is open or closed.
         */
        this.open = false;
        /**
         * Event fired when the close animation is completed.
         */
        this.animationCompleted = new EventEmitter();
        /**
         * Event fired when the close animation is completed.
         */
        this.closedAnimationCompleted = new EventEmitter();
        /**
         * Event fired when the backdrop is clicked
         * This is often used to close the modal
         */
        this.hide = new EventEmitter();
        /**
         * Hostbinding to set the default modal class on the host element
         * \@docs-private
         */
        this.modalClass = true;
    }
    /**
     * Helper method to attach portable content to modal
     */
    /**
     * Helper method to attach portable content to modal
     * @param {?} portal
     * @return {?}
     */
    DaffModalComponent.prototype.attachContent = /**
     * Helper method to attach portable content to modal
     * @param {?} portal
     * @return {?}
     */
    function (portal) {
        this._portalOutlet.attachComponentPortal(portal);
    };
    Object.defineProperty(DaffModalComponent.prototype, "fadeState", {
        /**
         * Animation hook that controls the entrance and exit animations
         * of the modal
         */
        get: /**
         * Animation hook that controls the entrance and exit animations
         * of the modal
         * @return {?}
         */
        function () {
            return getAnimationState(this.open);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Animation event that can used to hook into when
     * animations are fully completed. We use this in the DaffModalService
     * to determine when to actually remove the dynamically rendered element from the DOM
     * so that the animation does not clip as the element is removed.
     */
    /**
     * Animation event that can used to hook into when
     * animations are fully completed. We use this in the DaffModalService
     * to determine when to actually remove the dynamically rendered element from the DOM
     * so that the animation does not clip as the element is removed.
     * @param {?} e
     * @return {?}
     */
    DaffModalComponent.prototype.animationDone = /**
     * Animation event that can used to hook into when
     * animations are fully completed. We use this in the DaffModalService
     * to determine when to actually remove the dynamically rendered element from the DOM
     * so that the animation does not clip as the element is removed.
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.animationCompleted.emit(e);
        if (e.toState === 'closed') {
            this.closedAnimationCompleted.emit(e);
        }
    };
    DaffModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'daff-modal',
                    template: "<ng-template cdkPortalOutlet></ng-template>\n",
                    animations: [daffFadeAnimations.fade],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;border-radius:4px;height:100%;max-width:80vw;overflow:hidden;padding:24px;z-index:3}@media (min-width:480px){:host{height:auto}}"]
                }] }
    ];
    DaffModalComponent.propDecorators = {
        open: [{ type: Input }],
        _portalOutlet: [{ type: ViewChild, args: [CdkPortalOutlet, { static: true },] }],
        modalClass: [{ type: HostBinding, args: ['class.daff-modal',] }],
        fadeState: [{ type: HostBinding, args: ['@fade',] }],
        animationDone: [{ type: HostListener, args: ['@fade.done', ['$event'],] }]
    };
    return DaffModalComponent;
}());
export { DaffModalComponent };
if (false) {
    /**
     * Dictates whether or not a modal is open or closed.
     * @type {?}
     */
    DaffModalComponent.prototype.open;
    /**
     * The CDK Portal outlet used to portal content into the modal.
     * @type {?}
     * @private
     */
    DaffModalComponent.prototype._portalOutlet;
    /**
     * Event fired when the close animation is completed.
     * @type {?}
     */
    DaffModalComponent.prototype.animationCompleted;
    /**
     * Event fired when the close animation is completed.
     * @type {?}
     */
    DaffModalComponent.prototype.closedAnimationCompleted;
    /**
     * Event fired when the backdrop is clicked
     * This is often used to close the modal
     * @type {?}
     */
    DaffModalComponent.prototype.hide;
    /**
     * Hostbinding to set the default modal class on the host element
     * \@docs-private
     * @type {?}
     */
    DaffModalComponent.prototype.modalClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbIm1vbGVjdWxlcy9tb2RhbC9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFDTCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBbUIsTUFBTSxxQkFBcUIsQ0FBQztBQUl2RTtJQUFBOzs7O1FBV1UsU0FBSSxHQUFHLEtBQUssQ0FBQzs7OztRQVV0Qix1QkFBa0IsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7OztRQUtoRSw2QkFBd0IsR0FBc0IsSUFBSSxZQUFZLEVBRTNELENBQUM7Ozs7O1FBTUosU0FBSSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDOzs7OztRQU1uQixlQUFVLEdBQUcsSUFBSSxDQUFDO0lBOEJwRCxDQUFDO0lBNUJBOztPQUVHOzs7Ozs7SUFDSCwwQ0FBYTs7Ozs7SUFBYixVQUFjLE1BQTRCO1FBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQU1ELHNCQUEwQix5Q0FBUztRQUpuQzs7O1dBR0c7Ozs7OztRQUNIO1lBQ0MsT0FBTyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7O0lBRUgsMENBQWE7Ozs7Ozs7O0lBRGIsVUFDYyxDQUFpQjtRQUM5QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztJQUNGLENBQUM7O2dCQXJFRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLHlEQUFxQztvQkFFckMsVUFBVSxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQy9DOzs7dUJBS0MsS0FBSztnQ0FLTCxTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs2QkF3QjNDLFdBQVcsU0FBQyxrQkFBa0I7NEJBYTlCLFdBQVcsU0FBQyxPQUFPO2dDQVVuQixZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDOztJQU92Qyx5QkFBQztDQUFBLEFBdEVELElBc0VDO1NBL0RZLGtCQUFrQjs7Ozs7O0lBSTlCLGtDQUFzQjs7Ozs7O0lBS3RCLDJDQUFxRjs7Ozs7SUFLckYsZ0RBQWdFOzs7OztJQUtoRSxzREFFSTs7Ozs7O0lBTUosa0NBQW9EOzs7Ozs7SUFNcEQsd0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LFxuXHRPdXRwdXQsXG5cdEV2ZW50RW1pdHRlcixcblx0SW5wdXQsXG5cdEhvc3RCaW5kaW5nLFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Vmlld0NoaWxkLFxuXHRIb3N0TGlzdGVuZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBkYWZmRmFkZUFuaW1hdGlvbnMgfSBmcm9tICcuLi9hbmltYXRpb25zL21vZGFsLWFuaW1hdGlvbic7XG5pbXBvcnQgeyBnZXRBbmltYXRpb25TdGF0ZSB9IGZyb20gJy4uL2FuaW1hdGlvbnMvbW9kYWwtYW5pbWF0aW9uLXN0YXRlJztcbmltcG9ydCB7IENka1BvcnRhbE91dGxldCwgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5cbmltcG9ydCB7IEFuaW1hdGlvbkV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RhZmYtbW9kYWwnLFxuXHR0ZW1wbGF0ZVVybDogJy4vbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9tb2RhbC5jb21wb25lbnQuc2NzcyddLFxuXHRhbmltYXRpb25zOiBbZGFmZkZhZGVBbmltYXRpb25zLmZhZGVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRGFmZk1vZGFsQ29tcG9uZW50IHtcblx0LyoqXG5cdCAqIERpY3RhdGVzIHdoZXRoZXIgb3Igbm90IGEgbW9kYWwgaXMgb3BlbiBvciBjbG9zZWQuXG5cdCAqL1xuXHRASW5wdXQoKSBvcGVuID0gZmFsc2U7XG5cblx0LyoqXG5cdCAqIFRoZSBDREsgUG9ydGFsIG91dGxldCB1c2VkIHRvIHBvcnRhbCBjb250ZW50IGludG8gdGhlIG1vZGFsLlxuXHQgKi9cblx0QFZpZXdDaGlsZChDZGtQb3J0YWxPdXRsZXQsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgX3BvcnRhbE91dGxldDogQ2RrUG9ydGFsT3V0bGV0O1xuXG5cdC8qKlxuXHQgKiBFdmVudCBmaXJlZCB3aGVuIHRoZSBjbG9zZSBhbmltYXRpb24gaXMgY29tcGxldGVkLlxuXHQgKi9cblx0YW5pbWF0aW9uQ29tcGxldGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cdC8qKlxuXHQgKiBFdmVudCBmaXJlZCB3aGVuIHRoZSBjbG9zZSBhbmltYXRpb24gaXMgY29tcGxldGVkLlxuXHQgKi9cblx0Y2xvc2VkQW5pbWF0aW9uQ29tcGxldGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8XG5cdFx0YW55XG5cdD4oKTtcblxuXHQvKipcblx0ICogRXZlbnQgZmlyZWQgd2hlbiB0aGUgYmFja2Ryb3AgaXMgY2xpY2tlZFxuXHQgKiBUaGlzIGlzIG9mdGVuIHVzZWQgdG8gY2xvc2UgdGhlIG1vZGFsXG5cdCAqL1xuXHRoaWRlOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0LyoqXG5cdCAqIEhvc3RiaW5kaW5nIHRvIHNldCB0aGUgZGVmYXVsdCBtb2RhbCBjbGFzcyBvbiB0aGUgaG9zdCBlbGVtZW50XG5cdCAqIEBkb2NzLXByaXZhdGVcblx0ICovXG5cdEBIb3N0QmluZGluZygnY2xhc3MuZGFmZi1tb2RhbCcpIG1vZGFsQ2xhc3MgPSB0cnVlO1xuXG5cdC8qKlxuXHQgKiBIZWxwZXIgbWV0aG9kIHRvIGF0dGFjaCBwb3J0YWJsZSBjb250ZW50IHRvIG1vZGFsXG5cdCAqL1xuXHRhdHRhY2hDb250ZW50KHBvcnRhbDogQ29tcG9uZW50UG9ydGFsPGFueT4pOiBhbnkge1xuXHRcdHRoaXMuX3BvcnRhbE91dGxldC5hdHRhY2hDb21wb25lbnRQb3J0YWwocG9ydGFsKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBbmltYXRpb24gaG9vayB0aGF0IGNvbnRyb2xzIHRoZSBlbnRyYW5jZSBhbmQgZXhpdCBhbmltYXRpb25zXG5cdCAqIG9mIHRoZSBtb2RhbFxuXHQgKi9cblx0QEhvc3RCaW5kaW5nKCdAZmFkZScpIGdldCBmYWRlU3RhdGUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gZ2V0QW5pbWF0aW9uU3RhdGUodGhpcy5vcGVuKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBbmltYXRpb24gZXZlbnQgdGhhdCBjYW4gdXNlZCB0byBob29rIGludG8gd2hlblxuXHQgKiBhbmltYXRpb25zIGFyZSBmdWxseSBjb21wbGV0ZWQuIFdlIHVzZSB0aGlzIGluIHRoZSBEYWZmTW9kYWxTZXJ2aWNlXG5cdCAqIHRvIGRldGVybWluZSB3aGVuIHRvIGFjdHVhbGx5IHJlbW92ZSB0aGUgZHluYW1pY2FsbHkgcmVuZGVyZWQgZWxlbWVudCBmcm9tIHRoZSBET01cblx0ICogc28gdGhhdCB0aGUgYW5pbWF0aW9uIGRvZXMgbm90IGNsaXAgYXMgdGhlIGVsZW1lbnQgaXMgcmVtb3ZlZC5cblx0ICovXG5cdEBIb3N0TGlzdGVuZXIoJ0BmYWRlLmRvbmUnLCBbJyRldmVudCddKVxuXHRhbmltYXRpb25Eb25lKGU6IEFuaW1hdGlvbkV2ZW50KSB7XG5cdFx0dGhpcy5hbmltYXRpb25Db21wbGV0ZWQuZW1pdChlKTtcblx0XHRpZiAoZS50b1N0YXRlID09PSAnY2xvc2VkJykge1xuXHRcdFx0dGhpcy5jbG9zZWRBbmltYXRpb25Db21wbGV0ZWQuZW1pdChlKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==