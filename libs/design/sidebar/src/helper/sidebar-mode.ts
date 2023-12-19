/**
 * The various modes that a DaffSidebar can be in.
 *
 * * `side` is a mode that allows you to place the sidebar alongside
 *    the content.
 *
 * * `side-fixed` is a mode that allows you want to place the sidebar
 *    alongside the content, however the sidebar will scroll separately
 *    from the content.
 *
 * * `over` is a mode which allows the sidebar to slide *over* the rest of
 *    the content in the viewport.
 *
 * * `under` is a mode that freezes the sidebar in place and allows the content
 *   slide above it.
 */
export type DaffSidebarMode = 'side' | 'over' | 'under' | 'side-fixed';

/**
 * A enum representing the different sidebar modes.
 * See {@link DaffSidebarMode}
 */
export const enum DaffSidebarModeEnum  {
  Side = 'side',
  SideFixed = 'side-fixed',
  Over = 'over',
  Under = 'under',
}
