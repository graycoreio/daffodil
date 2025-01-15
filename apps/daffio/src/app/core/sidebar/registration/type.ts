import { DaffSidebarRegistration } from '@daffodil/design/sidebar';

export interface DaffioSidebarRegistration extends DaffSidebarRegistration {
  /**
   * Whether to show the sidebar header regardless of sidebar mode.
   */
  alwaysShowHeader?: boolean;
  /**
   * Whether to show the sidebar footer regardless of sidebar mode.
   */
  alwaysShowFooter?: boolean;
}
