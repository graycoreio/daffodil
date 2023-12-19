import { QueryList } from '@angular/core';
import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { sidebarViewportHeight } from './viewport-height';
import { DaffSidebarComponent } from '../../sidebar/sidebar.component';

describe('@daffodil/design | sidebar-viewport | viewport-height', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
      ],
      declarations: [
        DaffSidebarComponent,
      ],
    }).compileComponents();
  }));

  it('should not set a height on the viewport if there are no sidebars', () => {
    expect(sidebarViewportHeight(new QueryList())).toEqual(false);
  });

  it('should not set a height on the viewport if there are no open sidebars', () => {
    const list = new QueryList<DaffSidebarComponent>();
    list.reset([
      TestBed.createComponent(DaffSidebarComponent).componentInstance,
    ]);
    expect(sidebarViewportHeight(list)).toEqual(false);
  });

  it('should not set a height on the viewport if there are only "side" or "side-fixed" sidebars', () => {
    const sideLeft = TestBed.createComponent(DaffSidebarComponent).componentInstance;
    sideLeft.mode = 'side';
    sideLeft.side = 'left';
    const sideFixedLeft = TestBed.createComponent(DaffSidebarComponent).componentInstance;
    sideFixedLeft.mode = 'side-fixed';
    sideFixedLeft.side = 'left';
    const sideRight = TestBed.createComponent(DaffSidebarComponent).componentInstance;
    sideRight.mode = 'side';
    sideRight.side = 'right';
    const sideFixedRight = TestBed.createComponent(DaffSidebarComponent).componentInstance;
    sideFixedRight.mode = 'side-fixed';
    sideFixedRight.side = 'right';

    const list = new QueryList<DaffSidebarComponent>();
    list.reset([
      sideLeft,
      sideFixedLeft,
      sideRight,
      sideFixedRight,
    ]);
    expect(sidebarViewportHeight(list)).toEqual(false);
  });

  it('should set height on the viewport if there is at least one open "over" sidebar', () => {
    const leftSidebar = TestBed.createComponent(DaffSidebarComponent).componentInstance;
    leftSidebar.mode = 'side';
    leftSidebar.side = 'left';
    const rightSidebar = TestBed.createComponent(DaffSidebarComponent).componentInstance;
    rightSidebar.mode = 'over';
    rightSidebar.side = 'right';
    rightSidebar.open = true;

    const list = new QueryList<DaffSidebarComponent>();
    list.reset([
      leftSidebar,
      rightSidebar,
    ]);
    expect(sidebarViewportHeight(list)).toEqual(true);

  });

  it('should set height on the viewport if there is at least one open "under" sidebar', () => {
    const leftSidebar = TestBed.createComponent(DaffSidebarComponent).componentInstance;
    leftSidebar.mode = 'side';
    leftSidebar.side = 'left';
    const rightSidebar = TestBed.createComponent(DaffSidebarComponent).componentInstance;
    rightSidebar.mode = 'under';
    rightSidebar.side = 'right';
    rightSidebar.open = true;

    const list = new QueryList<DaffSidebarComponent>();
    list.reset([
      leftSidebar,
      rightSidebar,
    ]);
    expect(sidebarViewportHeight(list)).toEqual(true);
  });
});
