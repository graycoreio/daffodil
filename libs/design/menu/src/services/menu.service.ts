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
  Injector,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';
import {
  BehaviorSubject,
  map,
  Observable,
} from 'rxjs';

import { DaffLazyComponent } from '@daffodil/design';

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

  constructor(
    protected overlay: Overlay,
    private injector: Injector,
  ) {}

  protected async _createOverlay(activatorElement: ViewContainerRef, component: DaffMenuSlot) {
    if (!this._overlay) {
      this._overlay = daffMenuCreateOverlay(this.overlay, activatorElement.element);
      if(typeof component === 'object' && (<DaffLazyComponent>component)?.import) {
        component = await (<DaffLazyComponent>component).import();
      }

      if(component instanceof Type) {
        this._overlay.attach(new ComponentPortal(<Type<unknown>>component, null, this.injector));
      } else if (component instanceof TemplateRef) {
        this._overlay.attach(new TemplatePortal(component, activatorElement, null, this.injector));
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
