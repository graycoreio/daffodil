/**
 * The available display modes for the `DaffSidebarComponent`.
 *
 * | Mode | Description |
 * | -- | -- |
 * | `side` | Displays the sidebar alongside the main content. |
 * | `side-fixed` | Displays the sidebar alongside the content, but the sidebar remains fixed in place and scrolls independently from the content. |
 * | `over` | The sidebar slides over the main content when open, temporarily covering part of the content when active. |
 * | `under` | The sidebar remains fixed in place while the main content slides over it when the sidebar is closed. |
 */
export type DaffSidebarMode = 'side' | 'over' | 'under' | 'side-fixed';

/**
 * Enum for representing the available sidebar display modes.
 * See {@link DaffSidebarMode} for descriptions of each mode.
 */
export const enum DaffSidebarModeEnum  {
  Side = 'side',
  SideFixed = 'side-fixed',
  Over = 'over',
  Under = 'under',
}
