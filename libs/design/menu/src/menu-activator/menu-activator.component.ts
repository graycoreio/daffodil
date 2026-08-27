import {
  FocusOrigin,
  InputModalityDetector,
} from '@angular/cdk/a11y';
import {
  ChangeDetectorRef,
  computed,
  Directive,
  Injector,
  input,
  OnDestroy,
  signal,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';
import {
  filter,
  Subject,
  takeUntil,
} from 'rxjs';

import { daffNextMenuId } from '../config/menu-id';
import {
  DaffMenuXPosition,
  DaffMenuYPosition,
} from '../helpers/menu-position';
import { DAFF_MENU_ITEM_TOKEN } from '../menu-item/menu-item.token';
import { DAFF_PARENT_OR_NEW_MENU_STACK_PROVIDER } from '../services/menu-stack';
import { DaffMenuService } from '../services/menu.service';

/**
 * How a submenu opens. Keyboard opening (Enter / Right Arrow) always works regardless of the trigger.
 *
 * - `hover` opens the submenu on mouse hover of the parent menu item.
 * This is the default for nested submenus.
 *
 * - `click` opens the submenu when the parent item is clicked.
 * This is the default for top-level menus.
 */
export type DaffMenuTrigger = 'hover' | 'click';

/**
 * Directive that triggers the menu to open/close. Applied to the button that activates the menu. The selector doubles as an input for the menu content to display.
 *
 * Placing it on a `daff-menu-item` turns that item into the parent of a nested submenu.
 *
 * @example
 * ```html
 * <button [daffMenuActivator]="menu">
 *   Open Menu
 * </button>
 * ```
 */
@Directive({
  selector: '[daffMenuActivator]',
  host: {
    '(click)': 'onClick($event)',
    '(keydown)': 'handleKeydown($event)',
    '(mouseenter)': 'onMouseEnter()',
    '(focusin)': 'setHasFocus(true)',
    '(focusout)': 'setHasFocus(false)',
    'aria-haspopup': 'menu',
    '[attr.aria-expanded]': 'ariaExpanded',
    '[attr.aria-controls]': '_open ? menuId() : null',
  },
  exportAs: 'daffMenuActivator',
  providers: [
    DaffMenuService,
    DAFF_PARENT_OR_NEW_MENU_STACK_PROVIDER,
  ],
})
export class DaffMenuActivatorDirective implements OnDestroy {

  private _destroyed$ = new Subject<boolean>();
  private _defaultMenuId = daffNextMenuId();
  protected _open: boolean;
  readonly isOpen = signal(false);

  private _nestedCache?: boolean;

  /**
   * The menu content to display when activated.
   */
  daffMenuActivator = input<Type<unknown> | TemplateRef<unknown>>();

  /**
   * An optional ID for the activator.
   * When set, the menu's ID is derived as `${id}-menu`.
   */
  id = input<string>();

  /**
   * The horizontal alignment of the menu relative to the activator. Defaults to `after`.
   */
  xPosition = input<DaffMenuXPosition>('after');

  /**
   * The vertical position of the menu relative to the activator. Defaults to `below`.
   */
  yPosition = input<DaffMenuYPosition>('below');

  /**
   * How the menu opens in response to the pointer. Defaults to `hover` for nested submenus and
   * `click` for top-level menus.
   */
  trigger = input<DaffMenuTrigger>();

  /**
   * The resolved pointer trigger, defaulting by nesting when unset.
   */
  protected resolvedTrigger = computed<DaffMenuTrigger>(() =>
    this.trigger() ?? (this._nested ? 'hover' : 'click'),
  );

  /**
   * The resolved menu ID.
   */
  protected menuId = computed(() => {
    const id = this.id();
    return id ? `${id}-menu` : this._defaultMenuId;
  });

  /**
   * @docs-private
   */
  get ariaExpanded() {
    return this._open ? 'true' : 'false';
  }

  /**
   * Whether this activator is nested inside a menu.
   */
  private get _nested() {
    if (this._nestedCache === undefined) {
      this._nestedCache = !!this.injector.get(DAFF_MENU_ITEM_TOKEN, null, { self: true, optional: true });
    }
    return this._nestedCache;
  }

  constructor(
    private service: DaffMenuService,
    private viewContainerRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef,
    private injector: Injector,
    private inputModalityDetector: InputModalityDetector,
  ) {
    this.service.open$.pipe(
      takeUntil(this._destroyed$),
    ).subscribe((val: boolean) => {
      this._open = val;
      this.isOpen.set(this._open);
      this.cdRef.markForCheck();
    });

    this.service.menuStack.hasFocus.pipe(
      filter((hasFocus) => !hasFocus && !this._nested && !this.service.menuStack.isEmpty()),
      takeUntil(this._destroyed$),
    ).subscribe(() => this.service.closeAll());
  }

  /**
   * @docs-private
   */
  ngOnDestroy(): void {
    this._destroyed$.next(true);
    this._destroyed$.complete();
  }

  /**
   * @docs-private
   */
  focus() {
    this.viewContainerRef.element.nativeElement.focus();
  }

  /**
   * @docs-private
   *
   * Whether or not this activator holds focus.
   */
  setHasFocus(hasFocus: boolean) {
    if (!this._nested) {
      this.service.menuStack.setHasFocus(hasFocus);
    }
  }

  private _config() {
    return { menuId: this.menuId(), xPosition: this.xPosition(), yPosition: this.yPosition() };
  }

  /**
   * Opens the menu.
   */
  open() {
    this.service.open(this.viewContainerRef, this.daffMenuActivator(), this._config());
    this.service.focusFirstItem('program');
  }

  /**
   * Toggles the menu open or closed.
   */
  toggle() {
    this.service.toggle(this.viewContainerRef, this.daffMenuActivator(), this._config());

    if (this._open) {
      this.service.focusFirstItem('program');
    }
  }

  /**
   * @docs-private
   */
  onClick(event: MouseEvent) {
    event.preventDefault();
    if (this._nested) {
      this.toggle();
    } else {
      this.open();
    }
  }

  /**
   * @docs-private
   *
   * Opens a submenu when the pointer reaches its parent item, leaving focus where it is.
   */
  onMouseEnter() {
    if (
      this.resolvedTrigger() === 'hover' &&
      this.inputModalityDetector.mostRecentModality !== 'touch' &&
      !this.service.menuStack.isEmpty() &&
      !this._open
    ) {
      this.service.open(this.viewContainerRef, this.daffMenuActivator(), this._config());
    }
  }

  /**
   * @docs-private
   *
   * Opens the activator's submenu and moves focus into it.
   */
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' && this._nested) {
      event.preventDefault();

      if (this._open) {
        this.service.focusFirstItem('keyboard');
      } else {
        this._openWithFocus('keyboard');
      }
    }
  }

  private _openWithFocus(origin: FocusOrigin) {
    this.service.open(this.viewContainerRef, this.daffMenuActivator(), this._config());
    this.service.focusFirstItem(origin);
  }
}
