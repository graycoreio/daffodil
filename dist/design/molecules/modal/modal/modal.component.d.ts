import { EventEmitter } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { AnimationEvent } from '@angular/animations';
export declare class DaffModalComponent {
    /**
     * Dictates whether or not a modal is open or closed.
     */
    open: boolean;
    /**
     * The CDK Portal outlet used to portal content into the modal.
     */
    private _portalOutlet;
    /**
     * Event fired when the close animation is completed.
     */
    animationCompleted: EventEmitter<any>;
    /**
     * Event fired when the close animation is completed.
     */
    closedAnimationCompleted: EventEmitter<any>;
    /**
     * Event fired when the backdrop is clicked
     * This is often used to close the modal
     */
    hide: EventEmitter<void>;
    /**
     * Hostbinding to set the default modal class on the host element
     * @docs-private
     */
    modalClass: boolean;
    /**
     * Helper method to attach portable content to modal
     */
    attachContent(portal: ComponentPortal<any>): any;
    /**
     * Animation hook that controls the entrance and exit animations
     * of the modal
     */
    readonly fadeState: string;
    /**
     * Animation event that can used to hook into when
     * animations are fully completed. We use this in the DaffModalService
     * to determine when to actually remove the dynamically rendered element from the DOM
     * so that the animation does not clip as the element is removed.
     */
    animationDone(e: AnimationEvent): void;
}
