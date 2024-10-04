import { DaffPrefixSuffixModule } from '@daffodil/design';

import { DaffTabComponent } from './tabs/tab/tab.component';
import { DaffTabLabelDirective } from './tabs/tab-label/tab-label.component';
import { DaffTabPanelComponent } from './tabs/tab-panel/tab-panel.component';
import { DaffTabsComponent } from './tabs/tabs.component';

export const DAFF_TABS_COMPONENTS = <const>[
  DaffTabsComponent,
  DaffTabLabelDirective,
  DaffTabPanelComponent,
  DaffPrefixSuffixModule,
  DaffTabComponent,
];
