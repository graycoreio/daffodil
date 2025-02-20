import { Route } from '@angular/router';

import { DaffSidebarModeEnum } from '@daffodil/design/sidebar';

import { DaffioSidebarSectionRegistration } from '../interfaces/section-registration.interface';

export interface DaffioRouteWithSidebars extends Route {
  data?: Route['data'] & {
    /**
     * A collection of sidebars available on the current page.
     */
    daffioSidebars?: Record<DaffioSidebarSectionRegistration['id'], DaffioSidebarSectionRegistration>;
    /**
     * The sidebar that should be shown automatically (if any) when the viewport enters big tablet.
     */
    daffioDockedSidebar?: DaffioSidebarSectionRegistration['id'];
    sidebarMode?: DaffSidebarModeEnum;
  };
}
