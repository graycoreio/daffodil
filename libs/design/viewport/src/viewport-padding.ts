import {
  DaffSidebarComponent,
  DaffSidebarModeEnum,
  DaffSidebarSide,
} from '@daffodil/design/sidebar';

/**
 * Given a list of sidebars, compute whether or not the viewport content is padded on the given side.
 */
export const viewportContentPadding = (sidebars: readonly DaffSidebarComponent[], side: DaffSidebarSide): boolean =>
  sidebars
    // read every sidebar's open signal unconditionally so they are all tracked as dependencies
    .map((sidebar) => sidebar.open() && sidebar.mode === DaffSidebarModeEnum.SideFixed && sidebar.side === side)
    .some(Boolean);
