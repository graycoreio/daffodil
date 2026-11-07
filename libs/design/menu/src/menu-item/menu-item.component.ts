import { InputModalityDetector } from '@angular/cdk/a11y';
import {
  Component,
  ChangeDetectionStrategy,
  ContentChild,
  ElementRef,
  Optional,
  Self,
  SkipSelf,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { DaffPrefixDirective } from '@daffodil/design';

import { provideDaffMenuItemToken } from './menu-item.token';
import { DaffMenuActivatorDirective } from '../menu-activator/menu-activator.component';
import { DaffMenuService } from '../services/menu.service';

/**
 * Individual clickable items within the menu. Applied to `<button>` or `<a>` elements.
 *
 * Add `daffMenuActivator` to make an item the parent of a nested submenu.
 *
 * @example
 * ```
 * <a daff-menu-item href="/">Settings</a>
 * <button daff-menu-item href="/">Settings</button>
 * ```
 */
@Component({
  selector:
    'a[daff-menu-item]' + ',' +
    'button[daff-menu-item]',
  templateUrl: './menu-item.component.html',
  host: {
    class: 'daff-menu-item',
    role: 'menuitem',
    '(click)': 'onClick()',
    '(keydown)': 'handleKeydown($event)',
    '(mouseenter)': 'onMouseEnter()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideDaffMenuItemToken(DaffMenuItemComponent)],
  imports: [
    FaIconComponent,
  ],
})

export class DaffMenuItemComponent {
  /**
   * @docs-private
   */
  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;

  /**
   * @docs-private
   */
  faChevronRight = faChevronRight;

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private _inputModalityDetector: InputModalityDetector,

    /**
     * @docs-private
     *
     * The menu that contains a menu item.
     */
    @SkipSelf() private _parentMenu: DaffMenuService,

    /**
     * @docs-private
     *
     * The submenu a menu item opens. Present only when a menu item has an activator,
     * which is what provides the submenu's service on this element.
     */
    @Optional() @Self() private _submenu: DaffMenuService | null,

    /**
     * @docs-private
     *
     * Present when a menu item is the parent of a nested submenu.
     */
    @Optional() @Self() private _activator: DaffMenuActivatorDirective | null,
  ) {}

  /**
   * Whether a menu item has a nested submenu.
   */
  get hasSubmenu(): boolean {
    return !!this._activator;
  }

  /**
   * @docs-private
   *
   * The submenu a menu item opens, if it has one.
   * The menu panel uses it to tell which of its items a closing submenu belonged to.
   */
  get submenu(): DaffMenuService | null {
    return this._submenu;
  }

  /**
   * @docs-private
   *
   * Opens a menu item's submenu.
   */
  openSubmenu() {
    this._activator?.open();
  }

  /**
   * @docs-private
   */
  onClick() {
    if (this._activator) {
      return;
    }
    this._parentMenu.closeAll();
  }

  /**
   * @docs-private
   *
   * Moving the pointer onto an item that has no submenu of its own closes whichever submenu of this menu is open, so a menu never shows two submenus at once.
   */
  onMouseEnter() {
    const menuStack = this._parentMenu.menuStack;

    if (
      !this.hasSubmenu &&
      this._inputModalityDetector.mostRecentModality !== 'touch' &&
      !menuStack.isEmpty()
    ) {
      menuStack.closeSubMenuOf(this._parentMenu);
    }
  }

  /**
   * @docs-private
   *
   * Steps back out of a submenu, returning focus to the item that opened it.
   */
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft' && this._parentMenu.isNested) {
      event.preventDefault();
      this._parentMenu.close();
    }
  }

  /**
   * Focus the menu item.
   */
  focus() {
    this._elementRef.nativeElement.focus();
  }
}
