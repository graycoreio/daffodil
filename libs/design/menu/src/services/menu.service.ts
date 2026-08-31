import { FocusOrigin } from '@angular/cdk/a11y';
import {
  Overlay,
  OverlayRef,
} from '@angular/cdk/overlay';
import {
  ComponentPortal,
  TemplatePortal,
} from '@angular/cdk/portal';
import {
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

import {
  DAFF_MENU_CONFIG,
  DaffMenuConfig,
} from '../config/menu-config';
import { daffMenuCreateOverlay } from '../helpers/create-overlay';

export type DaffMenuSlot = TemplateRef<unknown> | DaffLazyComponent | Type<unknown>;

@Injectable()
export class DaffMenuService {
  protected _overlay: OverlayRef | null;
  private _activator: ViewContainerRef;
  private _origin: FocusOrigin = 'program';

  private $_open: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public open$: Observable<boolean> = this.$_open.asObservable();

  /**
   * What opened the menu. The menu focuses its first item either way, but items
   * only take on keyboard focus styling when the menu was opened from the keyboard.
   */
  get origin(): FocusOrigin {
    return this._origin;
  }

  constructor(
    protected overlay: Overlay,
    private injector: Injector,
  ) {}

  /**
   * @docs-private
   */
  protected async _createOverlay(activatorElement: ViewContainerRef, component: DaffMenuSlot, config?: DaffMenuConfig) {
    if (!this._overlay) {
      this._overlay = daffMenuCreateOverlay(this.overlay, activatorElement.element, config?.xPosition, config?.yPosition);
      if(typeof component === 'object' && (<DaffLazyComponent>component)?.import) {
        component = await (<DaffLazyComponent>component).import();
      }

      const injector = Injector.create({
        providers: [{ provide: DAFF_MENU_CONFIG, useValue: config }],
        parent: this.injector,
      });

      if(component instanceof Type) {
        this._overlay.attach(new ComponentPortal(<Type<unknown>>component, null, injector));
      } else if (component instanceof TemplateRef) {
        this._overlay.attach(new TemplatePortal(component, activatorElement, null, injector));
      }

      this._overlay.backdropClick().pipe(
        map(() => this.close()),
      ).subscribe();
    }
  }

  /**
   * @docs-private
   */
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

  open(activator: ViewContainerRef, component: DaffMenuSlot, config?: DaffMenuConfig, origin: FocusOrigin = 'program') {
    if (this._overlay) {
      this._destroyOverlay();
    }

    this._origin = origin;
    this._createOverlay(activator, component, config);
    this._activator = activator;
    this.$_open.next(true);
  }
}
