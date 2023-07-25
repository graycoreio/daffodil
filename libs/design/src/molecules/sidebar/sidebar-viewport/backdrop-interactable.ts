import { QueryList } from '@angular/core';

import { DaffSidebarComponent } from '../sidebar/sidebar.component';

/**
 * Determines, given a list of sidebars, whether or not the backdrop is interactable (typically clickable).
 */
export const sidebarViewportBackdropInteractable = (sidebars: QueryList<DaffSidebarComponent>): boolean => sidebars.reduce(
  (acc: boolean, sidebar) => ((sidebar.mode === 'over' || sidebar.mode === 'under') && sidebar.open) || acc,
  false);
