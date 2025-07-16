import { DaffPrefixDirective } from '@daffodil/design';

import { DaffListComponent } from './list/list.component';
import { DaffListItemComponent } from './list-item/list-item.component';
import { DaffListItemTitleDirective } from './list-item-title/list-item-title.directive';
import { DaffNavListComponent } from './nav-list/nav-list.component';

/**
 * @docs-private
 */
export const DAFF_LIST_COMPONENTS = <const> [
  DaffListComponent,
  DaffListItemComponent,
  DaffListItemTitleDirective,
  DaffPrefixDirective,
];

/**
 * @docs-private
 */
export const DAFF_NAV_LIST_COMPONENTS = <const> [
  DaffNavListComponent,
  DaffListItemComponent,
  DaffListItemTitleDirective,
  DaffPrefixDirective,
];
