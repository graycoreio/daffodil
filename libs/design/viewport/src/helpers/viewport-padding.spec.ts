import { signal } from '@angular/core';

import {
  DaffSidebarComponent,
  DaffSidebarMode,
  DaffSidebarSide,
} from '@daffodil/design/sidebar';

import { daffViewportContentPadding } from './viewport-padding';

describe('@daffodil/design/viewport | daffViewportContentPadding', () => {
  const createSidebar = (mode: DaffSidebarMode, side: DaffSidebarSide, open: boolean): DaffSidebarComponent =>
    <DaffSidebarComponent><unknown>{
      mode,
      side,
      open: signal(open),
    };

  it('should correctly pad sidebars', () => {
    const sidebarCombinations: { sidebars: DaffSidebarComponent[]; left: boolean; right: boolean }[] = [
      { sidebars: [], left: false, right: false },
      { sidebars: [createSidebar('side', 'left', false)], left: false, right: false },
      { sidebars: [createSidebar('side', 'left', true)], left: false, right: false },
      { sidebars: [createSidebar('side', 'left', true), createSidebar('side', 'right', true)], left: false, right: false },
      { sidebars: [createSidebar('over', 'left', false), createSidebar('over', 'right', false)], left: false, right: false },
      { sidebars: [createSidebar('over', 'left', true), createSidebar('over', 'right', true)], left: false, right: false },
      { sidebars: [createSidebar('under', 'left', false), createSidebar('under', 'right', false)], left: false, right: false },
      { sidebars: [createSidebar('under', 'left', true), createSidebar('under', 'right', true)], left: false, right: false },
      { sidebars: [createSidebar('side-fixed', 'left', false), createSidebar('under', 'right', false)], left: false, right: false },
      { sidebars: [createSidebar('side-fixed', 'left', true), createSidebar('under', 'right', false)], left: true, right: false },
      { sidebars: [createSidebar('under', 'left', false), createSidebar('side-fixed', 'right', false)], left: false, right: false },
      { sidebars: [createSidebar('under', 'left', false), createSidebar('side-fixed', 'right', true)], left: false, right: true },
      { sidebars: [createSidebar('side-fixed', 'left', true), createSidebar('side-fixed', 'right', true)], left: true, right: true },
    ];

    sidebarCombinations.forEach((el) => {
      expect(daffViewportContentPadding(el.sidebars, 'left')).toEqual(el.left);
      expect(daffViewportContentPadding(el.sidebars, 'right')).toEqual(el.right);
    });
  });
});
