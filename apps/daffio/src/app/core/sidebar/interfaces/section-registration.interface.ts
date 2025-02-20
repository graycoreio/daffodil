import { DaffSidebarRegistration } from '@daffodil/design/sidebar';

import { DaffioSidebarSectionVisibilityStrategy } from './section-visibility-strategy.type';

export interface DaffioSidebarSectionRegistration extends DaffSidebarRegistration {
  /**
   * Determines when to show the header.
   */
  headerStrategy?: DaffioSidebarSectionVisibilityStrategy;

  /**
   * Determines when to show the footer.
   */
  footerStrategy?: DaffioSidebarSectionVisibilityStrategy;
}
