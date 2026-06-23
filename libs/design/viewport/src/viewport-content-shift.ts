import {
  DaffSidebarComponent,
  DaffSidebarModeEnum,
} from '@daffodil/design/sidebar';

/**
 * Given a list of sidebars, compute the associated content shift in pixels.
 *
 * A left `under` sidebar shifts content right by its width, a right `under`
 * sidebar shifts content left by its width.
 */
export const viewportContentShift = (sidebars: readonly DaffSidebarComponent[]): number =>
  sidebars
    // read every sidebar's open signal unconditionally so they are all tracked as dependencies
    .map((sidebar) => ({ sidebar, shifted: sidebar.open() && sidebar.mode === DaffSidebarModeEnum.Under }))
    .reduce((acc: number, { sidebar, shifted }) => {
      if(!shifted) {
        return acc;
      }

      if(sidebar.side === 'left'){
        return sidebar.width;
      } else if (sidebar.side === 'right' && acc === 0) {
        return -1 * sidebar.width;
      } else {
        // It's possible to have two open `under` sidebars.
        // As such, we defer to `left` being open by default.
        return acc;
      }
    }, 0);
