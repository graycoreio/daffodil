import { signal } from '@angular/core';

import {
  DaffSidebarComponent,
  DaffSidebarMode,
  DaffSidebarModeEnum,
} from '@daffodil/design/sidebar';

import { getDaffViewportSidebarAnimationState } from './get-viewport-sidebar-animation-state';

describe('@daffodil/design/viewport | getDaffViewportSidebarAnimationState', () => {
  const createSidebar = (mode: DaffSidebarMode, open: boolean): DaffSidebarComponent =>
    <DaffSidebarComponent><unknown>{
      mode,
      open: signal(open),
    };

  it('should return `none` when there are no sidebars', () => {
    expect(getDaffViewportSidebarAnimationState([])).toEqual('none');
  });

  it('should return `under-open` when a sidebar in `under` mode is open', () => {
    expect(getDaffViewportSidebarAnimationState([createSidebar(DaffSidebarModeEnum.Under, true)])).toEqual('under-open');
  });

  it('should return `none` when a sidebar in `under` mode is closed', () => {
    expect(getDaffViewportSidebarAnimationState([createSidebar(DaffSidebarModeEnum.Under, false)])).toEqual('none');
  });

  it('should return `none` when open sidebars are not in `under` mode', () => {
    expect(getDaffViewportSidebarAnimationState([
      createSidebar(DaffSidebarModeEnum.Side, true),
      createSidebar(DaffSidebarModeEnum.SideFixed, true),
    ])).toEqual('none');
  });

  it('should return `under-open` when any of the sidebars is an open `under` sidebar', () => {
    expect(getDaffViewportSidebarAnimationState([
      createSidebar(DaffSidebarModeEnum.Over, true),
      createSidebar(DaffSidebarModeEnum.Under, true),
    ])).toEqual('under-open');
  });
});
