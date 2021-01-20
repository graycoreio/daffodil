/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, HostBinding, ChangeDetectionStrategy, ViewChild, HostListener, } from '@angular/core';
import { daffFadeAnimations } from '../animations/modal-animation';
import { getAnimationState } from '../animations/modal-animation-state';
import { CdkPortalOutlet } from '@angular/cdk/portal';
export class DaffModalComponent {
    constructor() {
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
     * @param {?} portal
     * @return {?}
     */
    attachContent(portal) {
        this._portalOutlet.attachComponentPortal(portal);
    }
    /**
     * Animation hook that controls the entrance and exit animations
     * of the modal
     * @return {?}
     */
    get fadeState() {
        return getAnimationState(this.open);
    }
    /**
     * Animation event that can used to hook into when
     * animations are fully completed. We use this in the DaffModalService
     * to determine when to actually remove the dynamically rendered element from the DOM
     * so that the animation does not clip as the element is removed.
     * @param {?} e
     * @return {?}
     */
    animationDone(e) {
        this.animationCompleted.emit(e);
        if (e.toState === 'closed') {
            this.closedAnimationCompleted.emit(e);
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRhZmZvZGlsL2Rlc2lnbi8iLCJzb3VyY2VzIjpbIm1vbGVjdWxlcy9tb2RhbC9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFDTCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGVBQWUsRUFBbUIsTUFBTSxxQkFBcUIsQ0FBQztBQVd2RSxNQUFNLE9BQU8sa0JBQWtCO0lBUC9COzs7O1FBV1UsU0FBSSxHQUFHLEtBQUssQ0FBQzs7OztRQVV0Qix1QkFBa0IsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7OztRQUtoRSw2QkFBd0IsR0FBc0IsSUFBSSxZQUFZLEVBRTNELENBQUM7Ozs7O1FBTUosU0FBSSxHQUF1QixJQUFJLFlBQVksRUFBUSxDQUFDOzs7OztRQU1uQixlQUFVLEdBQUcsSUFBSSxDQUFDO0lBOEJwRCxDQUFDOzs7Ozs7SUF6QkEsYUFBYSxDQUFDLE1BQTRCO1FBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBTUQsSUFBMEIsU0FBUztRQUNsQyxPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7Ozs7SUFTRCxhQUFhLENBQUMsQ0FBaUI7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEM7SUFDRixDQUFDOzs7WUFyRUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxZQUFZO2dCQUN0Qix5REFBcUM7Z0JBRXJDLFVBQVUsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQztnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQy9DOzs7bUJBS0MsS0FBSzs0QkFLTCxTQUFTLFNBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt5QkF3QjNDLFdBQVcsU0FBQyxrQkFBa0I7d0JBYTlCLFdBQVcsU0FBQyxPQUFPOzRCQVVuQixZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBcER0QyxrQ0FBc0I7Ozs7OztJQUt0QiwyQ0FBcUY7Ozs7O0lBS3JGLGdEQUFnRTs7Ozs7SUFLaEUsc0RBRUk7Ozs7OztJQU1KLGtDQUFvRDs7Ozs7O0lBTXBELHdDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENvbXBvbmVudCxcblx0T3V0cHV0LFxuXHRFdmVudEVtaXR0ZXIsXG5cdElucHV0LFxuXHRIb3N0QmluZGluZyxcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdFZpZXdDaGlsZCxcblx0SG9zdExpc3RlbmVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZGFmZkZhZGVBbmltYXRpb25zIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9tb2RhbC1hbmltYXRpb24nO1xuaW1wb3J0IHsgZ2V0QW5pbWF0aW9uU3RhdGUgfSBmcm9tICcuLi9hbmltYXRpb25zL21vZGFsLWFuaW1hdGlvbi1zdGF0ZSc7XG5pbXBvcnQgeyBDZGtQb3J0YWxPdXRsZXQsIENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG5pbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkYWZmLW1vZGFsJyxcblx0dGVtcGxhdGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbW9kYWwuY29tcG9uZW50LnNjc3MnXSxcblx0YW5pbWF0aW9uczogW2RhZmZGYWRlQW5pbWF0aW9ucy5mYWRlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIERhZmZNb2RhbENvbXBvbmVudCB7XG5cdC8qKlxuXHQgKiBEaWN0YXRlcyB3aGV0aGVyIG9yIG5vdCBhIG1vZGFsIGlzIG9wZW4gb3IgY2xvc2VkLlxuXHQgKi9cblx0QElucHV0KCkgb3BlbiA9IGZhbHNlO1xuXG5cdC8qKlxuXHQgKiBUaGUgQ0RLIFBvcnRhbCBvdXRsZXQgdXNlZCB0byBwb3J0YWwgY29udGVudCBpbnRvIHRoZSBtb2RhbC5cblx0ICovXG5cdEBWaWV3Q2hpbGQoQ2RrUG9ydGFsT3V0bGV0LCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIF9wb3J0YWxPdXRsZXQ6IENka1BvcnRhbE91dGxldDtcblxuXHQvKipcblx0ICogRXZlbnQgZmlyZWQgd2hlbiB0aGUgY2xvc2UgYW5pbWF0aW9uIGlzIGNvbXBsZXRlZC5cblx0ICovXG5cdGFuaW1hdGlvbkNvbXBsZXRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXHQvKipcblx0ICogRXZlbnQgZmlyZWQgd2hlbiB0aGUgY2xvc2UgYW5pbWF0aW9uIGlzIGNvbXBsZXRlZC5cblx0ICovXG5cdGNsb3NlZEFuaW1hdGlvbkNvbXBsZXRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPFxuXHRcdGFueVxuXHQ+KCk7XG5cblx0LyoqXG5cdCAqIEV2ZW50IGZpcmVkIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWRcblx0ICogVGhpcyBpcyBvZnRlbiB1c2VkIHRvIGNsb3NlIHRoZSBtb2RhbFxuXHQgKi9cblx0aGlkZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdC8qKlxuXHQgKiBIb3N0YmluZGluZyB0byBzZXQgdGhlIGRlZmF1bHQgbW9kYWwgY2xhc3Mgb24gdGhlIGhvc3QgZWxlbWVudFxuXHQgKiBAZG9jcy1wcml2YXRlXG5cdCAqL1xuXHRASG9zdEJpbmRpbmcoJ2NsYXNzLmRhZmYtbW9kYWwnKSBtb2RhbENsYXNzID0gdHJ1ZTtcblxuXHQvKipcblx0ICogSGVscGVyIG1ldGhvZCB0byBhdHRhY2ggcG9ydGFibGUgY29udGVudCB0byBtb2RhbFxuXHQgKi9cblx0YXR0YWNoQ29udGVudChwb3J0YWw6IENvbXBvbmVudFBvcnRhbDxhbnk+KTogYW55IHtcblx0XHR0aGlzLl9wb3J0YWxPdXRsZXQuYXR0YWNoQ29tcG9uZW50UG9ydGFsKHBvcnRhbCk7XG5cdH1cblxuXHQvKipcblx0ICogQW5pbWF0aW9uIGhvb2sgdGhhdCBjb250cm9scyB0aGUgZW50cmFuY2UgYW5kIGV4aXQgYW5pbWF0aW9uc1xuXHQgKiBvZiB0aGUgbW9kYWxcblx0ICovXG5cdEBIb3N0QmluZGluZygnQGZhZGUnKSBnZXQgZmFkZVN0YXRlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGdldEFuaW1hdGlvblN0YXRlKHRoaXMub3Blbik7XG5cdH1cblxuXHQvKipcblx0ICogQW5pbWF0aW9uIGV2ZW50IHRoYXQgY2FuIHVzZWQgdG8gaG9vayBpbnRvIHdoZW5cblx0ICogYW5pbWF0aW9ucyBhcmUgZnVsbHkgY29tcGxldGVkLiBXZSB1c2UgdGhpcyBpbiB0aGUgRGFmZk1vZGFsU2VydmljZVxuXHQgKiB0byBkZXRlcm1pbmUgd2hlbiB0byBhY3R1YWxseSByZW1vdmUgdGhlIGR5bmFtaWNhbGx5IHJlbmRlcmVkIGVsZW1lbnQgZnJvbSB0aGUgRE9NXG5cdCAqIHNvIHRoYXQgdGhlIGFuaW1hdGlvbiBkb2VzIG5vdCBjbGlwIGFzIHRoZSBlbGVtZW50IGlzIHJlbW92ZWQuXG5cdCAqL1xuXHRASG9zdExpc3RlbmVyKCdAZmFkZS5kb25lJywgWyckZXZlbnQnXSlcblx0YW5pbWF0aW9uRG9uZShlOiBBbmltYXRpb25FdmVudCkge1xuXHRcdHRoaXMuYW5pbWF0aW9uQ29tcGxldGVkLmVtaXQoZSk7XG5cdFx0aWYgKGUudG9TdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcblx0XHRcdHRoaXMuY2xvc2VkQW5pbWF0aW9uQ29tcGxldGVkLmVtaXQoZSk7XG5cdFx0fVxuXHR9XG59XG4iXX0=