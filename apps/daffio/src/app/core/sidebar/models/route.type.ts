import { Route } from '@angular/router';

import { DaffSidebarModeEnum } from '@daffodil/design/sidebar';

import { DaffioSidebarRegistration } from '../registration/type';

export interface DaffioRouteWithSidebars extends Route {
  data?: Route['data'] & {
    /**
     * A collection of sidebars available on the current page.
     */
    daffioSidebars?: Record<DaffioSidebarRegistration['id'], DaffioSidebarRegistration>;
    /**
     * The sidebar that should be shown automatically (if any) when the viewport enters big tablet.
     */
    daffioDockedSidebar?: DaffioSidebarRegistration['id'];
    sidebarMode?: DaffSidebarModeEnum;
  };
}
