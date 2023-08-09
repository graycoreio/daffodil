import {
  GlobalPositionStrategy,
  Overlay,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Injectable,
} from '@angular/core';
import { Subject } from 'rxjs';

import {
  DaffToast,
  DaffToastActionEvent,
  DaffToastData,
} from '../toast';
import { DaffToastTemplateComponent } from '../toast-template/toast-template.component';
import { DaffToastModule } from '../toast.module';
import {
  daffDefaultToastConfiguration,
  DaffToastConfiguration,
} from '../toast/toast-config';

@Injectable({ providedIn: DaffToastModule })
export class DaffToastService {

  private _toasts: DaffToast[] = [];

  private _overlayRef: OverlayRef | undefined;

  private _template: ComponentRef<DaffToastTemplateComponent> | undefined;

  constructor(private overlay: Overlay) {

  }

  private _attachToastTemplate(
	  overlayRef: OverlayRef,
  ): ComponentRef<DaffToastTemplateComponent> {
	  const template = overlayRef.attach(new ComponentPortal(DaffToastTemplateComponent));
	  return template;
  }

  private _createOverlayRef(): OverlayRef {
	  return this.overlay.create({
	    hasBackdrop: false,
	    positionStrategy: new GlobalPositionStrategy()
	      .top('128px')
        .right('24px'),
	    scrollStrategy: this.overlay.scrollStrategies.noop(),
	  });
  }

  open(
	  toast: DaffToastData,
	  configuration?: Partial<DaffToastConfiguration>,
  ): DaffToast {
	  const config = { ...daffDefaultToastConfiguration, ...configuration };
    if(this._toasts.length === 0) {
      this._overlayRef = this._createOverlayRef();
      this._template = this._attachToastTemplate(this._overlayRef);
    }
    const _toastPlus: DaffToast = {
      ...toast,
      dismiss: () => {},
      actions$: new Subject(),
    };

    _toastPlus.dismiss = () => {
      this.close(_toastPlus);
    };

	  this._toasts.push(_toastPlus);

    if(config.durationInMs) {
      setTimeout(() => {
        _toastPlus.dismiss();
      }, configuration.durationInMs);
    }

    if(this._toasts.length > 3) {
      this._toasts.shift();
    }

    this._template.instance.items = [...this._toasts];

	  return _toastPlus;
  }

  close(toast: DaffToast): void {
	  const index = this._toasts.indexOf(toast);
	  if (index === -1) {
	    throw new Error(
	      'The Toast that you are trying to remove does not exist.',
	    );
	  }

    (<Subject<DaffToastActionEvent>>toast.actions$).complete();

	  this._toasts = this._toasts.filter(m => m !== toast);
    this._template.instance.items = [...this._toasts];

    // This currently overrides the ":leave" animation as we currently
    // remove the animating element immediately after there are no more toasts,
    // without waiting for the animation to complete.
    if(this._toasts.length === 0) {
      this._overlayRef.dispose();
      this._template.destroy();
      this._overlayRef = undefined;
      this._template = undefined;
    }
  }
}

//todo: support anchor links as actions
