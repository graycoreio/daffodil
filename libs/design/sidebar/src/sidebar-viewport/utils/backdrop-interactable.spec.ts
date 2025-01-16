import {
  Component,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { sidebarViewportBackdropInteractable } from './backdrop-interactable';
import { DaffSidebarMode } from '../../helper/sidebar-mode';
import { DaffSidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  template: `
    <daff-sidebar side="left" mode="side"></daff-sidebar>
    <daff-sidebar side="right" [mode]="mode" [open]="true"></daff-sidebar>
  `,
  imports: [
    DaffSidebarComponent,
  ],
})
class WrapperComponent {
  @Input() mode: DaffSidebarMode;
  @ViewChildren(DaffSidebarComponent) sidebarComponents: QueryList<DaffSidebarComponent>;
}

describe('@daffodil/design | sidebar-viewport | backdrop-interactable', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        WrapperComponent,
      ],
    }).compileComponents();
  }));

  it('should not be interactable if there are no sidebars', () => {
    expect(sidebarViewportBackdropInteractable(new QueryList())).toEqual(false);
  });

  it('should not be interactable if there are no open sidebars', () => {
    const list = new QueryList<DaffSidebarComponent>();
    list.reset([
      TestBed.createComponent(DaffSidebarComponent).componentInstance,
    ]);
    expect(sidebarViewportBackdropInteractable(list)).toEqual(false);
  });

  it('should not be interactable if there are only "side" sidebars', () => {
    const leftSidebar = TestBed.createComponent(DaffSidebarComponent).componentInstance;
    leftSidebar.mode = 'side';
    leftSidebar.side = 'left';
    const rightSidebar = TestBed.createComponent(DaffSidebarComponent).componentInstance;
    rightSidebar.mode = 'side';
    rightSidebar.side = 'right';

    const list = new QueryList<DaffSidebarComponent>();
    list.reset([
      leftSidebar,
      rightSidebar,
    ]);
    expect(sidebarViewportBackdropInteractable(list)).toEqual(false);
  });

  it('should be interactable if there is at least one open "over" sidebar', () => {
    const fixture = TestBed.createComponent(WrapperComponent);
    fixture.componentInstance.mode = 'over';

    fixture.detectChanges();

    expect(sidebarViewportBackdropInteractable(fixture.componentInstance.sidebarComponents)).toEqual(true);
  });

  it('should be interactable if there is at least one open "under" sidebar', () => {
    const fixture = TestBed.createComponent(WrapperComponent);
    fixture.componentInstance.mode = 'under';

    fixture.detectChanges();

    expect(sidebarViewportBackdropInteractable(fixture.componentInstance.sidebarComponents)).toEqual(true);
  });
});
