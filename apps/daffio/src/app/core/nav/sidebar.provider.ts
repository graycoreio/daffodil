import { DaffSidebarRegistration } from '@daffodil/design/sidebar';

import { DaffioNavLinksSidebarBodyComponent } from './sidebar-body/component';
import { DaffioSidebarFooterComponent } from '../sidebar/components/sidebar-footer/sidebar-footer.component';
import { DaffioSidebarHeaderComponent } from '../sidebar/components/sidebar-header/sidebar-header.component';

export const DAFFIO_NAV_LINKS_SIDEBAR_ID = 'daffioNavLinks';

export const DAFF_NAV_LINKS_SIDEBAR_REGISTRATION: DaffSidebarRegistration = {
  id: DAFFIO_NAV_LINKS_SIDEBAR_ID,
  header: DaffioSidebarHeaderComponent,
  body: DaffioNavLinksSidebarBodyComponent,
  footer: DaffioSidebarFooterComponent,
};
