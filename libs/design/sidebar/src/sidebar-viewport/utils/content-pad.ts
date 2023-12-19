import { QueryList } from '@angular/core';

import { DaffSidebarModeEnum } from '../../helper/sidebar-mode';
import { DaffSidebarSide } from '../../helper/sidebar-side';
import { DaffSidebarComponent } from '../../sidebar/sidebar.component';

/**
 * Given a list of sidebars, compute the associated content shift.
 */
export const sidebarViewportContentPadding = (sidebars: QueryList<DaffSidebarComponent>, side: DaffSidebarSide): number =>
  sidebars.reduce((acc: number, sidebar) => {
    if(!(sidebar.mode === DaffSidebarModeEnum.SideFixed && sidebar.open)) {
      return acc;
    }

    if(sidebar.side === side){
      return sidebar.width;
    } else {
      // This component is "stateless", its possible to have two open "under" sidebars.
      // As such, we defer to "left" being open by default.
      return acc;
    }
  }, 0);
