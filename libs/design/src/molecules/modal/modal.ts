import { ComponentRef } from '@angular/core';
import { DaffModalComponent } from './modal/modal.component';
import { OverlayRef } from '@angular/cdk/overlay';

export class DaffModal<T> {

	constructor(modal: ComponentRef<DaffModalComponent>, overlay: OverlayRef, ){
		this.modal = modal;
		this.overlay = overlay;
	}
	/**
	 * The reference to the modal in question
	 */
	modal: ComponentRef<DaffModalComponent>;

	/**
	 * The overlay associated with a given modal.
	 */
	overlay: OverlayRef;
}
