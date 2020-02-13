import { ComponentRef } from '@angular/core';
import { DaffModalComponent } from './modal/modal.component';
import { OverlayRef } from '@angular/cdk/overlay';

export interface DaffModal {
	/**
	 * The reference to the modal in question
	 */
	modal: ComponentRef<DaffModalComponent>;

	/**
	 * The overlay associated with a given modal.
	 */
	overlay: OverlayRef;
}
