import { Injectable, Type, ComponentRef } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import {
	OverlayRef,
	Overlay,
	GlobalPositionStrategy,
} from '@angular/cdk/overlay';

import { DaffModalComponent } from '../modal/modal.component';
import { DaffModalConfiguration } from '../modal/modal-config';
import { DaffModal } from '../modal';
import { AnimationEvent } from '@angular/animations';
import { DaffModalModule } from '../modal.module';

@Injectable({
	providedIn: DaffModalModule,
})
export class DaffModalService {
	private _modals: DaffModal[] = [];

	constructor(private overlay: Overlay) {}

	private defaultConfiguration: DaffModalConfiguration = {};

	private _attachModal(
		overlayRef: OverlayRef,
	): ComponentRef<DaffModalComponent> {
		const modal = overlayRef.attach(new ComponentPortal(DaffModalComponent));
		modal.instance.open = true;
		return modal;
	}

	private _attachModalContent(
		component: Type<any>,
		modal: ComponentRef<DaffModalComponent>,
	): void {
		modal.instance.attachContent(new ComponentPortal(component));
	}

	private _createOverlayRef(): OverlayRef {
		return this.overlay.create({
			hasBackdrop: true,
			positionStrategy: new GlobalPositionStrategy()
				.centerHorizontally()
				.centerVertically(),
		});
	}

	private _removeModal(modal: DaffModal) {
		const index = this._modals.indexOf(modal);
		if (index === -1) {
			throw new Error(
				'The Modal that you are trying to remove does not exist.',
			);
		}

		modal.overlay.dispose();

		this._modals = this._modals.filter(m => m !== modal);
	}

	open(
		component: Type<any>,
		configuration?: Partial<DaffModalConfiguration>,
	): DaffModal {
		const config = { ...this.defaultConfiguration, ...configuration };
		const _ref = this._createOverlayRef();
		const _modal = this._attachModal(_ref);
		const _attachedModal = this._attachModalContent(component, _modal);

		const modal: DaffModal = {
			modal: _modal,
			overlay: _ref,
		};

		this._modals.push(modal);

		_ref
			.backdropClick()
			.subscribe(() =>
				config.onBackdropClicked
					? config.onBackdropClicked()
					: this.close(modal),
			);
		return modal;
	}

	close(modal: DaffModal): void {
		modal.modal.instance.open = false;
		modal.overlay.detachBackdrop();
		modal.modal.instance.closedAnimationCompleted.subscribe(
			(e: AnimationEvent) => this._removeModal(modal),
		);
	}
}
