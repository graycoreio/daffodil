import { AnimationEvent } from '@angular/animations';
import {
  OverlayRef,
  Overlay,
  GlobalPositionStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Injectable,
  Type,
  ComponentRef,
  Injector,
} from '@angular/core';

import { DaffModal } from '../modal/modal';
import { DaffModalConfiguration } from '../modal/modal-config';
import { DaffModalComponent } from '../modal/modal.component';

@Injectable()
export class DaffModalService {
  private _modals: Map<DaffModalComponent, DaffModal> = new Map();

  constructor(private overlay: Overlay) {}

  private defaultConfiguration: DaffModalConfiguration = {};

  private _attachModal(
	  overlayRef: OverlayRef,
  ): ComponentRef<DaffModalComponent> {
	  const modal = overlayRef.attach(
      new ComponentPortal(
        DaffModalComponent,
        undefined,
        Injector.create({ providers: [{
          provide: DaffModalService,
          useValue: this,
        }]}),
      ),
    );
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
	    scrollStrategy: this.overlay.scrollStrategies.block(),
	  });
  }

  private _removeModal(modal: DaffModal) {
    if (!this._modals.has(modal.modal.instance)) {
      throw new Error(
	      'The Modal that you are trying to remove does not exist.',
	    );
    }

	  this._modals.delete(modal.modal.instance);

	  modal.overlay.dispose();
  }

  open(
	  component: Type<any>,
	  configuration?: Partial<DaffModalConfiguration>,
  ): DaffModalComponent {
	  const config = { ...this.defaultConfiguration, ...configuration };
	  const _ref = this._createOverlayRef();
	  const _modal = this._attachModal(_ref);
	  const _attachedModal = this._attachModalContent(component, _modal);

    if(configuration?.ariaLabelledBy) {
      _modal.instance.ariaLabelledBy = configuration.ariaLabelledBy;
    }

	  const modal: DaffModal = {
	    modal: _modal,
	    overlay: _ref,
	  };

	  this._modals.set(modal.modal.instance, modal);

	  _ref
	    .backdropClick()
	    .subscribe(() =>
	      config.onBackdropClicked
	        ? config.onBackdropClicked()
	        : this.close(modal.modal.instance),
	    );
	  return modal.modal.instance;
  }

  close(component: DaffModalComponent): void {
	  component.open = false;
    const modal = this._modals.get(component);

	  modal.overlay.detachBackdrop();
	  component.closedAnimationCompleted.subscribe(
	    (e: AnimationEvent) => this._removeModal(modal),
	  );
  }
}
