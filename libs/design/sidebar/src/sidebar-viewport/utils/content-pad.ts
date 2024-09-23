import { QueryList } from '@angular/core';

import { DaffSidebarModeEnum } from '../../helper/sidebar-mode';
import { DaffSidebarSide } from '../../helper/sidebar-side';
import { DaffSidebarComponent } from '../../sidebar/sidebar.component';

/**
 * Given a list of sidebars, compute the whether or not the content is padded.
 */
export const isSidebarViewportContentPadded = (sidebars: QueryList<DaffSidebarComponent>, side: DaffSidebarSide): boolean =>
  sidebars.reduce((acc: boolean, sidebar) => {
    if(!(sidebar.mode === DaffSidebarModeEnum.SideFixed && sidebar.open)) {
      return acc || false;
    }

    if(sidebar.side === side){
      return true;
    } else {
      // This component is "stateless", its possible to have two open "under" sidebars.
      // As such, we defer to "left" being open by default.
      return acc;
    }
  }, false);

