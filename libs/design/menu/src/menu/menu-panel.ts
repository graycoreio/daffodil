import {
  FocusableOption,
  FocusOrigin,
} from '@angular/cdk/a11y';

/**
 * @docs-private
 *
 * The panel a menu's content renders. `DaffMenuService` holds the panel of the menu it opened so
 * that whatever opened it can decide whether opening should take focus, which keeps the panel from
 * having to guess. Declared apart from `DaffMenuComponent` so the service can refer to a panel
 * without importing the component.
 */
export interface DaffMenuPanel {
  /**
   * Moves focus to the first item in the menu.
   */
  focusFirstItem(origin?: FocusOrigin): void;

  /**
   * Points the menu's keyboard navigation at the given item without moving focus.
   */
  setActiveMenuItem(item: FocusableOption): void;
}
