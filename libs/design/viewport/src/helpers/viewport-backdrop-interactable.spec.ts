import { signal } from '@angular/core';

import {
  DaffSidebarComponent,
  DaffSidebarMode,
  DaffSidebarSide,
} from '@daffodil/design/sidebar';

import { daffViewportBackdropInteractable } from './viewport-backdrop-interactable';

describe('@daffodil/design/viewport | daffViewportBackdropInteractable', () => {
  const createSidebar = (mode: DaffSidebarMode, side: DaffSidebarSide, open: boolean): DaffSidebarComponent =>
    <DaffSidebarComponent><unknown>{
      mode,
      side,
      open: signal(open),
    };

  it('should not be interactable when there are no sidebars', () => {
    expect(daffViewportBackdropInteractable([])).toEqual(false);
  });

  it('should not be interactable when there are only `side` or `side-fixed` sidebars', () => {
    expect(daffViewportBackdropInteractable([
      createSidebar('side', 'left', true),
      createSidebar('side-fixed', 'right', true),
    ])).toEqual(false);
  });

  it('should not be interactable when `over` and `under` sidebars are closed', () => {
    expect(daffViewportBackdropInteractable([
      createSidebar('over', 'left', false),
      createSidebar('under', 'right', false),
    ])).toEqual(false);
  });

  it('should be interactable when there is at least one open `over` sidebar', () => {
    expect(daffViewportBackdropInteractable([
      createSidebar('over', 'left', true),
      createSidebar('side', 'right', false),
    ])).toEqual(true);
  });

  it('should be interactable when there is at least one open `under` sidebar', () => {
    expect(daffViewportBackdropInteractable([
      createSidebar('under', 'left', true),
      createSidebar('side', 'right', false),
    ])).toEqual(true);
  });
});
