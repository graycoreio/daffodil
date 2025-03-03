import {
  DaffSidebarRegistration,
  DaffSidebarSide,
} from '@daffodil/design/sidebar';

import { DaffioSidebarSectionVisibilityStrategy } from './section-visibility-strategy.type';

export interface DaffioSidebarRegistration extends DaffSidebarRegistration {
  /**
   * Determines when to show the header.
   */
  headerStrategy?: DaffioSidebarSectionVisibilityStrategy;

  /**
   * Determines when to show the footer.
   */
  footerStrategy?: DaffioSidebarSectionVisibilityStrategy;

  /**
   * The side of the screen on which to show this sidebar.
   */
  side?: DaffSidebarSide;
}
