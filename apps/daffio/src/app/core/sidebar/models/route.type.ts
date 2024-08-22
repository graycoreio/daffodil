import { Route } from '@angular/router';

import {
  DaffSidebarModeEnum,
  DaffSidebarRegistration,
} from '@daffodil/design/sidebar';

export interface DaffioRouteWithSidebars extends Route {
  data?: Route['data'] & {
    /**
     * A collection of sidebars available on the current page.
     */
    daffioSidebars?: Record<DaffSidebarRegistration['id'], DaffSidebarRegistration>;
    /**
     * The sidebar that should be shown automatically (if any) when the viewport enters big tablet.
     */
    daffioDockedSidebar?: DaffSidebarRegistration['id'];
    sidebarMode?: DaffSidebarModeEnum;
  };
}
