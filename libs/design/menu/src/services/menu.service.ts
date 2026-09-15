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
  Inject,
  Injectable,
  Injector,
  OnDestroy,
  Optional,
  SkipSelf,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';
import {
  BehaviorSubject,
  map,
  Observable,
  Subscription,
} from 'rxjs';

import { DaffLazyComponent } from '@daffodil/design';

import {
  DAFF_MENU_STACK,
  DaffMenuStack,
  DaffMenuStackItem,
} from './menu-stack';
import {
  DAFF_MENU_CONFIG,
  DaffMenuConfig,
} from '../config/menu-config';
import { daffMenuCreateOverlay } from '../helpers/create-overlay';
import { DaffMenuPanel } from '../menu/menu-panel';

export type DaffMenuSlot = TemplateRef<unknown> | DaffLazyComponent | Type<unknown>;

@Injectable()
export class DaffMenuService implements DaffMenuStackItem, OnDestroy {
  protected _overlay: OverlayRef | null;
  private _activator: ViewContainerRef;
  private _nested = false;
  private _panel: DaffMenuPanel | null = null;
  private _pendingFocusOrigin: FocusOrigin | null = null;
  private _closedSubscription: Subscription;

  /**
   * @docs-private
   *
   * The stack of open menus this menu belongs to, shared with the menu
   * it opened from and any submenus it opens.
   */
  readonly menuStack: DaffMenuStack;

  private $_open: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public open$: Observable<boolean> = this.$_open.asObservable();

  constructor(
    protected overlay: Overlay,
    private injector: Injector,

    /**
     * @docs-private
     *
     * The service of the menu that contains this menu's activator, if this menu is nested.
     */
    @Optional() @SkipSelf() private _parent: DaffMenuService | null,

    @Optional() @Inject(DAFF_MENU_STACK) menuStack: DaffMenuStack | null,
  ) {
    this.menuStack = menuStack || new DaffMenuStack();

    this._closedSubscription = this.menuStack.closed.subscribe(({ item, focusParentTrigger }) => {
      if (item === this) {
        this._destroyOverlay();
        this.$_open.next(false);

        if (focusParentTrigger) {
          this._activator?.element.nativeElement.focus();
        }
      }
    });
  }

  /**
   * @docs-private
   */
  ngOnDestroy() {
    this._closedSubscription.unsubscribe();
  }

  /**
   * Whether this menu is a nested submenu.
   */
  get isNested(): boolean {
    return this._nested;
  }

  /**
   * @docs-private
   *
   * Registers the panel this menu opened. Called by the panel itself, since it's created inside the
   * overlay rather than by the service.
   */
  registerPanel(panel: DaffMenuPanel) {
    this._panel = panel;

    if (this._pendingFocusOrigin) {
      panel.focusFirstItem(this._pendingFocusOrigin);
      this._pendingFocusOrigin = null;
    }
  }

  /**
   * @docs-private
   *
   * Moves focus to the first item of this menu. A lazily imported menu isn't rendered by the time
   * `open` returns, so the request is held until the panel registers itself.
   */
  focusFirstItem(origin: FocusOrigin = 'program') {
    if (this._panel) {
      this._panel.focusFirstItem(origin);
    } else {
      this._pendingFocusOrigin = origin;
    }
  }

  /**
   * @docs-private
   */
  protected async _createOverlay(activatorElement: ViewContainerRef, component: DaffMenuSlot, config: DaffMenuConfig | undefined, nested: boolean) {
    if (!this._overlay) {
      this._overlay = daffMenuCreateOverlay(this.overlay, activatorElement.element, config?.xPosition, config?.yPosition, nested);

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

      // Only the root overlay has a backdrop; clicking it closes every open menu.
      this._overlay.backdropClick().pipe(
        map(() => this.closeAll()),
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
      this._panel = null;
      this._pendingFocusOrigin = null;
    }
  }

  /**
   * Closes this menu, along with any submenus opened from it, and returns focus to this menu's
   * activator.
   */
  close(focusActivator = true) {
    this.menuStack.close(this, { focusParentTrigger: focusActivator });
  }

  /**
   * Closes every open menu, returning focus to the activator of the outermost one.
   */
  closeAll() {
    this.menuStack.closeAll({ focusParentTrigger: true });
  }

  open(activator: ViewContainerRef, component: DaffMenuSlot, config?: DaffMenuConfig) {
    // A menu is nested when the menu that contains its activator is currently open.
    const nested = !!(this._parent && this._parent._overlay);

    // Opening replaces whatever is already open at this level: the sibling submenu of the same
    // menu, or every open menu when this menu is the outermost one.
    if (nested && this._parent) {
      this.menuStack.closeSubMenuOf(this._parent);
    } else {
      this.menuStack.closeAll();
    }

    if (this._overlay) {
      this._destroyOverlay();
    }

    this._nested = nested;
    this._activator = activator;
    this._createOverlay(activator, component, config, nested);
    this.menuStack.push(this);
    this.$_open.next(true);
  }

  /**
   * Opens the menu if it's closed, or closes it if it's already open.
   */
  toggle(activator: ViewContainerRef, component: DaffMenuSlot, config?: DaffMenuConfig) {
    if (this._overlay) {
      this.close();
    } else {
      this.open(activator, component, config);
    }
  }
}
