import { DaffPrefixSuffixModule } from '@daffodil/design';

import { DaffTabLabelDirective } from './tabs/tab-label/tab-label.directive';
import { DaffTabPanelComponent } from './tabs/tab-panel/tab-panel.component';
import { DaffTabsComponent } from './tabs/tabs.component';

export const DAFF_TABS_COMPONENTS = <const>[
  DaffTabsComponent,
  DaffTabLabelDirective,
  DaffTabPanelComponent,
  DaffPrefixSuffixModule,
];
