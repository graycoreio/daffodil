import {
  Overlay,
  OverlayRef,
} from '@angular/cdk/overlay';
import {
  ComponentPortal,
  TemplatePortal,
} from '@angular/cdk/portal';
import {
  ElementRef,
  Injectable,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';
import {
  BehaviorSubject,
  map,
  Observable,
} from 'rxjs';

import { DaffLazyComponent } from '../../../core/lazy/public_api';
import { daffMenuCreateOverlay } from '../helpers/public_api';

export interface DaffActivatedMenu {
  el: ElementRef;
  component: Type<unknown>;
}

export type DaffMenuSlot = TemplateRef<unknown> | DaffLazyComponent | Type<unknown>;

@Injectable()
export class DaffMenuService {
  protected _overlay: OverlayRef | null;
  private _activator: ViewContainerRef;

  private $_open: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public open$: Observable<boolean> = this.$_open.asObservable();

  constructor(protected overlay: Overlay) {}

  protected async _createOverlay(activatorElement: ViewContainerRef, component: DaffMenuSlot) {
    if (!this._overlay) {
      this._overlay = daffMenuCreateOverlay(this.overlay, activatorElement.element);
      if(typeof component === 'object' && (<DaffLazyComponent>component)?.import) {
        component = await (<DaffLazyComponent>component).import();
      }

      if(component instanceof Type) {
        this._overlay.attach(new ComponentPortal(<Type<unknown>>component));
      } else if (component instanceof TemplateRef) {
        this._overlay.attach(new TemplatePortal(component, activatorElement));
      }

      this._overlay.backdropClick().pipe(
        map(() => this._destroyOverlay()),
      ).subscribe();
    }
  }

  protected _destroyOverlay() {
    if (this._overlay) {
      this._overlay.detach();
      this._overlay.dispose();
      this._overlay = null;
    }
  }

  close() {
    this._destroyOverlay();
	  this.$_open.next(false);
    this._activator.element.nativeElement.focus();
  }

  open(activator: ViewContainerRef, component: DaffMenuSlot) {
	  this._createOverlay(activator, component);
    this._activator = activator;
    this.$_open.next(true);
  }
}
