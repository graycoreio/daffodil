import { CommonModule } from '@angular/common';
import {
  Component,
  signal,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffSidebarViewportComponent } from './../sidebar-viewport.component';
import { DaffSidebarComponent } from '../../sidebar/sidebar.component';

@Component({
  template: `
		<daff-sidebar-viewport>
		  @for (sidebar of sidebars(); track sidebar) {
		    <daff-sidebar [side]="sidebar[1]" [mode]="sidebar[0]"></daff-sidebar>
		  }
		</daff-sidebar-viewport>
		`,
  imports: [
    DaffSidebarComponent,
    DaffSidebarViewportComponent,
  ],
})
class IterableWrapperComponent{
  sidebars = signal<any[]>([]);
}

describe('@daffodil/design/sidebar | DaffSidebarViewportComponent | Multiple Sidebars', () => {
  let fixture: ComponentFixture<IterableWrapperComponent>;
  let component: IterableWrapperComponent;

  beforeEach(waitForAsync(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NoopAnimationsModule,
        IterableWrapperComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IterableWrapperComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should allow the following combinations of sidebars', () => {
    const iterableFixture = TestBed.createComponent(IterableWrapperComponent);
    const iterableWrapper = iterableFixture.componentInstance;

    iterableFixture.detectChanges();

    const allowedSidebarCombinations = [
      [['side', 'left']],
      [['side', 'right']],
      [['side', 'left'],['side', 'left']], // We allow it, even though it looks dumb
      [['side', 'right'],['side', 'right']], // We allow it, even though it looks dumb
      [['side', 'left'],['side', 'right']], // We allow it, even though it looks dumb
      [['side', 'left'],['side', 'left'],['side', 'right'],['side', 'right']], // We allow it, even though it looks dumb
      [['over', 'left']],
      [['over', 'right']],
      [['over', 'left'], ['over', 'right']],
      [['under', 'left']],
      [['under', 'right']],
      [['under', 'left'], ['under', 'right']],
    ];

    allowedSidebarCombinations.forEach((el) => {
      iterableWrapper.sidebars.set(el);
      expect(() => iterableFixture.detectChanges()).not.toThrowError();
    });
  });
});
