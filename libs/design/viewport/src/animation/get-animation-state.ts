import {
  DaffSidebarComponent,
  DaffSidebarModeEnum,
} from '@daffodil/design/sidebar';

export const getAnimationState = (sidebars: readonly DaffSidebarComponent[]) =>
  sidebars
    // read every sidebar's open signal unconditionally so they are all tracked as dependencies
    .map((sidebar) => sidebar.open() && sidebar.mode === DaffSidebarModeEnum.Under)
    .some(Boolean) ? 'under-open' : 'none';
