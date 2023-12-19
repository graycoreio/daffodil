import { QueryList } from '@angular/core';

import { DaffSidebarMode } from '../../helper/sidebar-mode';
import { DaffSidebarComponent } from '../../sidebar/sidebar.component';

export const isViewportContentShifted = (mode: DaffSidebarMode, open: boolean): boolean => (mode === 'under' && open);

/**
 * Given a list of sidebars, compute the associated content shift.
 */
export const sidebarViewportContentShift = (sidebars: QueryList<DaffSidebarComponent>): number =>
  sidebars.reduce((acc: number, sidebar) => {
    if(!isViewportContentShifted(sidebar.mode, sidebar.open)) {
      return acc;
    }

    if(sidebar.side === 'left'){
      return sidebar.width;
    } else if (sidebar.side === 'right' && acc === 0) {
      return -1 * sidebar.width;
    } else {
      // This component is "stateless", its possible to have two open "under" sidebars.
      // As such, we defer to "left" being open by default.
      return acc;
    }
  }, 0);


