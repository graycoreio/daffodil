import { DaffSidebarMode } from '@daffodil/design/sidebar';

/**
 * A strategy that determines whether a section of the sidebar should be visible based on the screen breakpoint and sidebar mode.
 */
export type DaffioSidebarSectionVisibilityStrategy = (isBigTablet: boolean, mode: DaffSidebarMode) => boolean;
