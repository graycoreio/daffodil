import { signal } from '@angular/core';

import {
  DaffSidebarComponent,
  DaffSidebarMode,
  DaffSidebarSide,
} from '@daffodil/design/sidebar';

import { daffViewportContentShift } from './viewport-content-shift';

describe('@daffodil/design/viewport | daffViewportContentShift', () => {
  const createSidebar = (mode: DaffSidebarMode, side: DaffSidebarSide, open: boolean): DaffSidebarComponent =>
    <DaffSidebarComponent><unknown>{
      mode,
      side,
      open: signal(open),
      width: 240,
    };

  it('should correctly shift sidebars', () => {
    const sidebarCombinations: { sidebars: DaffSidebarComponent[]; shift: number }[] = [
      { sidebars: [], shift: 0 },
      { sidebars: [createSidebar('side', 'left', false)], shift: 0 },
      { sidebars: [createSidebar('side', 'left', true)], shift: 0 },
      { sidebars: [createSidebar('side', 'left', true), createSidebar('side', 'right', true)], shift: 0 },
      { sidebars: [createSidebar('over', 'left', false), createSidebar('over', 'right', false)], shift: 0 },
      { sidebars: [createSidebar('over', 'left', true), createSidebar('over', 'right', true)], shift: 0 },
      { sidebars: [createSidebar('side-fixed', 'left', false), createSidebar('side-fixed', 'right', false)], shift: 0 },
      { sidebars: [createSidebar('side-fixed', 'left', true), createSidebar('side-fixed', 'right', false)], shift: 0 },
      { sidebars: [createSidebar('under', 'left', false), createSidebar('under', 'right', false)], shift: 0 },
      { sidebars: [createSidebar('under', 'left', false), createSidebar('under', 'right', true)], shift: -240 },
      { sidebars: [createSidebar('under', 'left', true), createSidebar('under', 'right', false)], shift: 240 },
      { sidebars: [createSidebar('under', 'left', true), createSidebar('under', 'right', true)], shift: 240 },
    ];

    sidebarCombinations.forEach((el) => {
      expect(daffViewportContentShift(el.sidebars)).toEqual(el.shift);
    });
  });
});
