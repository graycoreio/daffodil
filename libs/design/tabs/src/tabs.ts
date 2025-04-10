import { DaffTabComponent } from './tabs/tab/tab.component';
import { DaffTabLabelComponent } from './tabs/tab-label/tab-label.component';
import { DaffTabPanelComponent } from './tabs/tab-panel/tab-panel.component';
import { DaffTabsComponent } from './tabs/tabs.component';

/**
 * @docs-private
 *
 * ```ts
 * import { DAFF_TABS_COMPONENTS } from '@daffodil/design/tabs';
 * ```
 */
export const DAFF_TABS_COMPONENTS = <const> [
  DaffTabsComponent,
  DaffTabLabelComponent,
  DaffTabPanelComponent,
  DaffTabComponent,
];
