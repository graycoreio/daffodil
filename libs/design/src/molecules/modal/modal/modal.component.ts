import {
	Component,
	Output,
	EventEmitter,
	Input,
	HostBinding,
	ChangeDetectionStrategy,
	ViewChild,
	HostListener,
} from '@angular/core';

import { daffFadeAnimations } from '../animations/modal-animation';
import { getAnimationState } from '../animations/modal-animation-state';
import { CdkPortalOutlet, ComponentPortal } from '@angular/cdk/portal';

import { AnimationEvent } from '@angular/animations';
import { map } from 'rxjs/operators';

export type DaffModalVerticalPosition = 'top' | 'center' | 'bottom';
export type DaffModalHorizontalPosition = 'left' | 'center' | 'right';

@Component({
	selector: 'daff-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
	animations: [daffFadeAnimations.fade],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffModalComponent {
	/**
	 * Dictates whether or not a modal is open or closed.
	 */
	@Input() open = false;

	/**
	 * The CDK Portal outlet used to portal content into the modal.
	 */
	@ViewChild(CdkPortalOutlet, { static: true }) _portalOutlet: CdkPortalOutlet;

	/**
	 * Event fired when the close animation is completed.
	 */
	@Output() animationCompleted: EventEmitter<any> = new EventEmitter<any>();

	/**
	 * Event fired when the close animation is completed.
	 */
	@Output() closedAnimationCompleted: EventEmitter<any> = new EventEmitter<
		any
	>();

	/**
	 * Event fired when the backdrop is clicked
	 * This is often used to close the modal
	 */
	@Output() hide: EventEmitter<void> = new EventEmitter<void>();

	/**
	 * Hostbinding to set the default modal class on the host element
	 */
	@HostBinding('class.daff-modal') modalClass = true;

	/**
	 * Helper method to attach portable content to modal
	 */
	attachContent(portal: ComponentPortal<any>): any {
		this._portalOutlet.attachComponentPortal(portal);
	}

	/**
	 * Animation hook that controls the entrance and exit animations
	 * of the modal
	 */
	@HostBinding('@fade') get fadeState(): string {
		return getAnimationState(this.open);
	}

	/**
	 * Animation event that can used to hook into when
	 * animations are fully completed. We use this in the DaffModalService
	 * to determine when to actually remove the dynamically rendered element from the DOM
	 * so that the animation does not clip as the element is removed.
	 */
	@HostListener('@fade.done', ['$event'])
	animationDone(e: AnimationEvent) {
		this.animationCompleted.emit(e);
		if (e.toState === 'closed') {
			this.closedAnimationCompleted.emit(e);
		}
	}
}
