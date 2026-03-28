import { FocusableOption } from '@angular/cdk/a11y';

import { createSingletonInjectionToken } from '@daffodil/core';

/**
 * Injection token/provider pair used to identify menu items.
 *
 * `DaffMenuComponent` uses `@ContentChildren(DAFF_MENU_ITEM_TOKEN)` to discover
 * its menu items. Use `provideDaffMenuItemToken` in component providers to register
 * custom directives and components as menu items alongside native `daff-menu-item` elements.
 */
export const {
  token: DAFF_MENU_ITEM_TOKEN,
  provider: provideDaffMenuItemToken,
} = createSingletonInjectionToken<FocusableOption>('DAFF_MENU_ITEM_TOKEN');
