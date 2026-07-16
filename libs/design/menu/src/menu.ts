import { DaffPrefixDirective } from '@daffodil/design';

import { DaffMenuComponent } from './menu/menu.component';
import { DaffMenuActivatorDirective } from './menu-activator/menu-activator.component';
import { DaffMenuItemComponent } from './menu-item/menu-item.component';

/**
 * @docs-private
 */
export const DAFF_MENU_COMPONENTS = <const> [
  DaffMenuComponent,
  DaffMenuActivatorDirective,
  DaffMenuItemComponent,
  DaffPrefixDirective,
];
