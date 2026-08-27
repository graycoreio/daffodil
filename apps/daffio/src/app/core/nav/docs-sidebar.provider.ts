import { DaffSidebarSideEnum } from '@daffodil/design/sidebar';

import { DAFFIO_NAV_SIDEBAR_ID } from './header/sidebar-id';
import { DaffioNavSidebarBodyComponent } from './sidebar-body/component';
import { DaffioSidebarRegistration } from '../sidebar/interfaces/registration.type';

export const DAFF_DOCS_NAV_SIDEBAR_REGISTRATION: DaffioSidebarRegistration = {
  id: DAFFIO_NAV_SIDEBAR_ID,
  body: DaffioNavSidebarBodyComponent,
  side: DaffSidebarSideEnum.Right,
};
