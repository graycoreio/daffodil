import { signal } from '@angular/core';

import {
  DaffSidebarComponent,
  DaffSidebarMode,
  DaffSidebarModeEnum,
} from '@daffodil/design/sidebar';

import { getAnimationState } from './get-animation-state';

describe('@daffodil/design/viewport | getAnimationState', () => {
  const createSidebar = (mode: DaffSidebarMode, open: boolean): DaffSidebarComponent =>
    <DaffSidebarComponent><unknown>{
      mode,
      open: signal(open),
    };

  it('should return `none` when there are no sidebars', () => {
    expect(getAnimationState([])).toEqual('none');
  });

  it('should return `under-open` when a sidebar in `under` mode is open', () => {
    expect(getAnimationState([createSidebar(DaffSidebarModeEnum.Under, true)])).toEqual('under-open');
  });

  it('should return `none` when a sidebar in `under` mode is closed', () => {
    expect(getAnimationState([createSidebar(DaffSidebarModeEnum.Under, false)])).toEqual('none');
  });

  it('should return `none` when open sidebars are not in `under` mode', () => {
    expect(getAnimationState([
      createSidebar(DaffSidebarModeEnum.Side, true),
      createSidebar(DaffSidebarModeEnum.SideFixed, true),
    ])).toEqual('none');
  });

  it('should return `under-open` when any of the sidebars is an open `under` sidebar', () => {
    expect(getAnimationState([
      createSidebar(DaffSidebarModeEnum.Over, true),
      createSidebar(DaffSidebarModeEnum.Under, true),
    ])).toEqual('under-open');
  });
});
