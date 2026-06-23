import {
  DaffSidebarComponent,
  DaffSidebarModeEnum,
} from '@daffodil/design/sidebar';

/**
 * Given a list of sidebars, determines whether or not the backdrop is interactable (typically clickable).
 */
export const viewportBackdropInteractable = (sidebars: readonly DaffSidebarComponent[]): boolean =>
  sidebars
    // read every sidebar's open signal unconditionally so they are all tracked as dependencies
    .map((sidebar) => sidebar.open() && (sidebar.mode === DaffSidebarModeEnum.Over || sidebar.mode === DaffSidebarModeEnum.Under))
    .some(Boolean);
