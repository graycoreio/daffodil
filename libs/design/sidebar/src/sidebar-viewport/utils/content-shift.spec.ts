import { NgFor } from '@angular/common';
import {
  Component,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { sidebarViewportContentShift } from './content-shift';
import { DaffSidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  template: `
    <daff-sidebar *ngFor="let sidebar of sidebars" [side]="sidebar.side" [mode]="sidebar.mode" [open]="sidebar.open"></daff-sidebar>
  `,
  imports: [
    NgFor,
    DaffSidebarComponent,
  ],
})
class IterableWrapperComponent{
  @Input() sidebars: { side: any; mode: any; open: boolean }[] = [];

  @ViewChildren(DaffSidebarComponent) sidebarComponents: QueryList<DaffSidebarComponent>;
}

describe('@daffodil/design | sidebar-viewport | sidebarViewportContentShift', () => {
  let fixture: ComponentFixture<IterableWrapperComponent>;
  let wrapper: IterableWrapperComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        IterableWrapperComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IterableWrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should correctly shift sidebars', () => {
    const sidebarCombinations = [
      { sidebars: [], shift: 0 },
      { sidebars: [{ mode: 'side', side: 'left', open: false }], shift: 0 },
      { sidebars: [{ mode: 'side', side: 'left', open: true }], shift: 0 },
      { sidebars: [{ mode: 'side', side: 'left', open: true }, { mode: 'side', side: 'right', open: true }], shift: 0 },
      { sidebars: [{ mode: 'over', side: 'left', open: false }, { mode: 'over', side: 'right', open: false }], shift: 0 },
      { sidebars: [{ mode: 'over', side: 'left', open: true }, { mode: 'over', side: 'right', open: true }], shift: 0 },
      { sidebars: [{ mode: 'side-fixed', side: 'left', open: false }, { mode: 'side-fixed', side: 'right', open: false }], shift: 0 },
      { sidebars: [{ mode: 'side-fixed', side: 'left', open: true }, { mode: 'side-fixed', side: 'right', open: false }], shift: 0 },
      { sidebars: [{ mode: 'under', side: 'left', open: false }, { mode: 'under', side: 'right', open: false }], shift: 0 },
      { sidebars: [{ mode: 'under', side: 'left', open: false }, { mode: 'under', side: 'right', open: true }], shift: -240 },
      { sidebars: [{ mode: 'under', side: 'left', open: true }, { mode: 'under', side: 'right', open: false }], shift: 240 },
      { sidebars: [{ mode: 'under', side: 'left', open: true }, { mode: 'under', side: 'right', open: true }], shift: 240 },
    ];

    sidebarCombinations.forEach((el) => {
      wrapper.sidebars = el.sidebars;
      fixture.detectChanges();
      console.log('test');
      expect(sidebarViewportContentShift(wrapper.sidebarComponents)).toEqual(el.shift);
    });
  });
});
