import { FocusableOption } from '@angular/cdk/a11y';
import { InjectionToken } from '@angular/core';

/**
 * Injection token used to identify menu items.
 *
 * `DaffMenuComponent` uses `@ContentChildren(DAFF_MENU_ITEM_TOKEN)` to discover
 * its menu items. Providing this token allows custom directives and components
 * to be treated as menu items alongside native `daff-menu-item` elements.
 */
export const DAFF_MENU_ITEM_TOKEN = new InjectionToken<FocusableOption>('DAFF_MENU_ITEM_TOKEN');
