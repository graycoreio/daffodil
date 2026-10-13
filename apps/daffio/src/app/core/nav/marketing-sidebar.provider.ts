import { DaffSidebarSideEnum } from '@daffodil/design/sidebar';

import { DAFFIO_NAV_SIDEBAR_ID } from './header/sidebar-id';
import { DaffioNavSidebarBodyComponent } from './sidebar-body/component';
import { DaffioMarketingSidebarFooterComponent } from '../sidebar/components/marketing/footer/footer.component';
import { DaffioSidebarRegistration } from '../sidebar/interfaces/registration.type';

export const DAFF_MARKETING_NAV_SIDEBAR_REGISTRATION: DaffioSidebarRegistration = {
  id: DAFFIO_NAV_SIDEBAR_ID,
  body: DaffioNavSidebarBodyComponent,
  footer: DaffioMarketingSidebarFooterComponent,
  side: DaffSidebarSideEnum.Right,
};
