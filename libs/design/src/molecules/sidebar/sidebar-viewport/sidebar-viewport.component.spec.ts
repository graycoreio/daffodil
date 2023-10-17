import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffSidebarViewportComponent } from './sidebar-viewport.component';
import {
  DaffBackdropComponent,
  DaffBackdropModule,
} from '../../backdrop/public_api';
import { DaffSidebarComponent } from '../sidebar/sidebar.component';

@Component({ template: `
  <div class="sidebar-content-wrapper">
    <daff-sidebar-viewport (backdropClicked)="incrementBackdropClicked()">
    </daff-sidebar-viewport>
  </div>
` })
class WrapperComponent {
  backdropClickedCounter = 0;

  incrementBackdropClicked() {
    this.backdropClickedCounter++;
  }

  reset() {
    this.backdropClickedCounter = 0;
  }
}

describe('DaffSidebarViewportComponent | Usage', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffSidebarViewportComponent;
  let backdrop: DaffBackdropComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DaffBackdropModule,
      ],
      declarations: [
        WrapperComponent,
        DaffSidebarViewportComponent,
        DaffSidebarComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    component = fixture.debugElement.query(By.css('daff-sidebar-viewport')).componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('when <backdrop> emits backdropClicked', () => {
    beforeEach(() => {
      fixture.detectChanges();
      backdrop = fixture.debugElement.query(By.css('daff-backdrop')).componentInstance;
      spyOn(component.backdropClicked, 'emit');

      backdrop.backdropClicked.emit();
    });

    it('should call component.backdropClicked.emit', () => {
      expect(component.backdropClicked.emit).toHaveBeenCalledWith();
    });
  });

  describe('multiple sidebars', () => {
    it('should allow the following combinations of sidebars', () => {
      @Component({
        template: `
        <daff-sidebar-viewport>
          <daff-sidebar *ngFor="let sidebar of sidebars" [side]="sidebar[1]" [mode]="sidebar[0]"></daff-sidebar>
        </daff-sidebar-viewport>
        `,
      })
      class IterableWrapperComponent{
        @Input() sidebars: any[] = [];
      }

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          NoopAnimationsModule,
          DaffBackdropModule,
        ],
        declarations: [
          DaffSidebarComponent,
          DaffSidebarViewportComponent,
          IterableWrapperComponent,
        ],
      }).compileComponents();

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
        iterableWrapper.sidebars = el;
        expect(() => iterableFixture.detectChanges()).not.toThrowError();
      });
    });
  });
});
