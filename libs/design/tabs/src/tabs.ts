import { DaffPrefixSuffixModule } from '@daffodil/design';

import { DaffTabComponent } from './tabs/tab/tab.component';
import { DaffTabLabelComponent } from './tabs/tab-label/tab-label.component';
import { DaffTabPanelComponent } from './tabs/tab-panel/tab-panel.component';
import { DaffTabsComponent } from './tabs/tabs.component';

export const DAFF_TABS_COMPONENTS = <const>[
  DaffTabsComponent,
  DaffTabLabelComponent,
  DaffTabPanelComponent,
  DaffPrefixSuffixModule,
  DaffTabComponent,
];
