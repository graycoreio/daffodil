import { DaffSidebarRegistration } from '@daffodil/design/sidebar';

import { DAFFIO_NAV_SIDEBAR_ID } from './header/sidebar-id';
import { DaffioNavSidebarBodyComponent } from './sidebar-body/component';
import { DaffioSidebarFooterComponent } from '../sidebar/components/sidebar-footer/sidebar-footer.component';
import { DaffioSidebarHeaderComponent } from '../sidebar/components/sidebar-header/sidebar-header.component';

export const DAFF_NAV_SIDEBAR_REGISTRATION: DaffSidebarRegistration = {
  id: DAFFIO_NAV_SIDEBAR_ID,
  header: DaffioSidebarHeaderComponent,
  body: DaffioNavSidebarBodyComponent,
  footer: DaffioSidebarFooterComponent,
};
