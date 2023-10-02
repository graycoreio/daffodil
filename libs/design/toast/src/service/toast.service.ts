import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Overlay,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ComponentRef,
  Inject,
  Injectable,
  OnDestroy,
  Optional,
  SkipSelf,
} from '@angular/core';
import {
  Subject,
  Subscription,
} from 'rxjs';
import {
  filter,
  map,
  tap,
} from 'rxjs/operators';

import {
  DaffBreakpoints,
  DaffFocusStackService,
} from '@daffodil/design';

import {
  DAFF_TOAST_OPTIONS,
  DaffToastOptions,
} from '../options/daff-toast-options';
import {
  DaffToast,
  DaffToastActionEvent,
  DaffToastData,
} from '../toast';
import { DaffToastModule } from '../toast.module';
import {
  daffDefaultToastConfiguration,
  DaffToastConfiguration,
} from '../toast/toast-config';
import { DaffToastTemplateComponent } from '../toast/toast-template.component';
import { createPositionStrategy } from './position-strategy';
import { DaffToastPositionService } from './position.service';

@Injectable({ providedIn: DaffToastModule })
export class DaffToastService implements OnDestroy {

  private _sub: Subscription;

  private _toasts: DaffToast[] = [];

  private _overlayRef: OverlayRef | undefined;

  private _template: ComponentRef<DaffToastTemplateComponent> | undefined;

  constructor(
    private overlay: Overlay,
    @Inject(DAFF_TOAST_OPTIONS) private options: DaffToastOptions,
    @Optional() @SkipSelf() private _parentToast: DaffToastService,
    private mediaQuery: BreakpointObserver,
    private toastPosition: DaffToastPositionService,
    private focusStack: DaffFocusStackService,
  ) {
    this._sub = this.mediaQuery.observe(DaffBreakpoints.MOBILE).pipe(
      filter(() => this._overlayRef !== undefined),
      map((position) => createPositionStrategy(this.toastPosition.config)),
      tap((strategy) => this._overlayRef.updatePositionStrategy(strategy)),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
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
	    scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: createPositionStrategy(this.toastPosition.config),
	  });

  }

  open(
	  toast: DaffToastData,
	  configuration?: Partial<DaffToastConfiguration>,
  ): DaffToast {
    if(this._parentToast && this.options.useParent) {
      return this._parentToast.open(toast, configuration);
    }

	  const config = { ...daffDefaultToastConfiguration, ...configuration };
    if(this._toasts.length === 0) {
      this._overlayRef = this._createOverlayRef();
      this._template = this._attachToastTemplate(this._overlayRef);
    }
    const _toastPlus: DaffToast = {
      dismissible: true,
      ...toast,
      dismiss: () => {},
      actions$: new Subject(),
    };

    _toastPlus.dismiss = () => {
      this.close(_toastPlus);
      this.focusStack.pop();
    };

	  this._toasts = [
      _toastPlus,
      ...this._toasts,
    ];

    if(config.duration) {
      setTimeout(() => {
        _toastPlus.dismiss();
      }, configuration.duration);
    }

    this._template.instance.items = this._toasts;

	  return _toastPlus;
  }

  close(toast: DaffToast): void {
    if(this._parentToast && this.options.useParent) {
      this._parentToast.close(toast);
      return;
    }

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
