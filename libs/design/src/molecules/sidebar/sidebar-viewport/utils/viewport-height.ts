import { QueryList } from '@angular/core';

import { DaffSidebarComponent } from '../../sidebar/sidebar.component';

/**
 * Determines whether or not the sidebar viewport should have a pre-defined height, give na list of sidebars.
 */
export const sidebarViewportHeight = (sidebars: QueryList<DaffSidebarComponent>): boolean => sidebars.reduce(
  (acc: boolean, sidebar) => ((sidebar.mode === 'over' || sidebar.mode === 'under') && sidebar.open) || acc,
  false);
