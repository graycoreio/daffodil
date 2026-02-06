import {
  OverlayRef,
  Overlay,
  GlobalPositionStrategy,
  PositionStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Injectable,
  Type,
  ComponentRef,
  Injector,
} from '@angular/core';
import { take } from 'rxjs/operators';

import {
  DaffModal,
  DaffModalRef,
} from '../modal/interfaces/modal';
import {
  DaffModalConfiguration,
  DaffModalPosition,
} from '../modal/modal-config';
import { DaffModalComponent } from '../modal/modal.component';

@Injectable()
export class DaffModalService {
  private _modals: Map<DaffModalComponent, DaffModal> = new Map();

  constructor(private overlay: Overlay) { }

  private defaultConfiguration: DaffModalConfiguration = {};

  private _attachModal(
    overlayRef: OverlayRef,
  ): ComponentRef<DaffModalComponent> {
    const modal = overlayRef.attach(
      new ComponentPortal(
        DaffModalComponent,
        undefined,
        Injector.create({
          providers: [{
            provide: DaffModalService,
            useValue: this,
          }],
        }),
      ),
    );
    modal.instance.reveal();
    return modal;
  }

  private _attachModalContent(
    component: Type<any>,
    modal: ComponentRef<DaffModalComponent>,
  ): void {
    modal.instance.attachContent(new ComponentPortal(component));
  }

  private _createPositionStrategy(position?: DaffModalPosition): PositionStrategy {
    // Horizontal position is always center
    const strategy = new GlobalPositionStrategy().centerHorizontally();

    // Handle vertical positioning
    if (position?.vertical === 'top') {
      strategy.top(position.offsetTop ?? '15vh');
    } else {
      // Default to center
      strategy.centerVertically();
    }

    return strategy;
  }

  private _createOverlayRef(config?: Partial<DaffModalConfiguration>): OverlayRef {
    const positionStrategy = this._createPositionStrategy(config?.position);

    return this.overlay.create({
      hasBackdrop: true,
      positionStrategy,
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

  private _closeAllModals(): void {
    const modals = Array.from(this._modals.values());
    modals.forEach((modal) => this.close(modal.modal.instance));
  }

  open(
    component: Type<any>,
    configuration?: Partial<DaffModalConfiguration>,
  ): DaffModalRef {
    this._closeAllModals();
    const config = { ...this.defaultConfiguration, ...configuration };
    const _ref = this._createOverlayRef(config);
    const _modal = this._attachModal(_ref);
    const _attachedModal = this._attachModalContent(component, _modal);

    if (configuration?.ariaLabelledBy) {
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

    return {
      close: () => this.close(modal.modal.instance),
      afterClosed: modal.modal.instance.closedAnimationCompleted$,
    };
  }

  close(component: DaffModalComponent): void {
    const modal = this._modals.get(component);

    modal.overlay.detachBackdrop();
    component.closedAnimationCompleted$.pipe(
      take(1),
    ).subscribe(
      () => this._removeModal(modal),
    );

    component.hide();

  }
}
