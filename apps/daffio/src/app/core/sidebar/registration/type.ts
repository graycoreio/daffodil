import {
  DaffSidebarMode,
  DaffSidebarRegistration,
} from '@daffodil/design/sidebar';

/**
 * A strategy that determines whether a section of the sidebar should be visible based on the screen breakpoint and sidebar mode.
 */
export type DaffioSidebarSectionStrategy = (isBigTablet: boolean, mode: DaffSidebarMode) => boolean;

export interface DaffioSidebarRegistration extends DaffSidebarRegistration {
  /**
   * Determines when to show the header.
   */
  headerStrategy?: DaffioSidebarSectionStrategy;

  /**
   * Determines when to show the footer.
   */
  footerStrategy?: DaffioSidebarSectionStrategy;
}
