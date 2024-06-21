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

import { DaffLazyComponent } from '@daffodil/design';

import { DaffComponentWithMenu } from '../component-with-menu';
import { daffMenuCreateOverlay } from '../helpers/public_api';
import { DaffMenuActivatorDirective } from '../menu-activator/menu-activator.directive';

export interface DaffActivatedMenu {
  el: ElementRef;
  component: Type<unknown>;
}

export type DaffMenuSlot = TemplateRef<unknown> | DaffLazyComponent | Type<unknown>;

@Injectable()
export class DaffMenuService {
  protected _overlay: OverlayRef | null;
  private _activator: DaffMenuActivatorDirective;

  private _open$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public open$: Observable<boolean> = this._open$.asObservable();

  constructor(protected overlay: Overlay) {}

  protected async _createOverlay(activatorElement: DaffMenuActivatorDirective, component: DaffMenuSlot) {
    if (!this._overlay) {
      this._overlay = daffMenuCreateOverlay(this.overlay, activatorElement.viewContainerRef.element);
      if(typeof component === 'object' && (<DaffLazyComponent>component)?.import) {
        component = await (<DaffLazyComponent>component).import();
      }

      if(component instanceof Type) {
        const portal = new ComponentPortal(<Type<DaffComponentWithMenu>>component);
        const attach = this._overlay.attach(portal);

        activatorElement.ariaControls = attach.instance.menu.uniqueId;

      } else if (component instanceof TemplateRef) {
        const portal = new TemplatePortal(component, activatorElement.viewContainerRef);
        const attach = this._overlay.attach(portal);

        console.log(component);
        console.log(attach);
        console.log(portal);
      }


      this._overlay.backdropClick().pipe(
        map(() => this.close()),
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
	  this._open$.next(false);
    this._activator.viewContainerRef.element.nativeElement.focus();
    this._activator.ariaControls = null;
  }

  open(activator: DaffMenuActivatorDirective, component: DaffMenuSlot) {
	  this._createOverlay(activator, component);
    this._activator = activator;
    this._open$.next(true);
  }
}
