import { CommonModule } from '@angular/common';
import {
  Component,
  DebugElement,
  Input,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffNavPlacement } from './nav-placement';
import { DaffSidebarViewportComponent } from './sidebar-viewport.component';
import { DaffSidebarComponent } from '../sidebar/sidebar.component';
import { DaffSidebarViewportBackdropComponent } from '../sidebar-viewport-backdrop/sidebar-viewport-backdrop.component';

@Component({ template: `
  <div class="sidebar-content-wrapper">
    <daff-sidebar-viewport (backdropClicked)="incrementBackdropClicked()" [navPlacement]="navPlacement">
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
  navPlacement: DaffNavPlacement = 'above';
}

describe('@daffodil/design/sidebar | DaffSidebarViewportComponent | Usage', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffSidebarViewportComponent;
  let backdrop: DaffSidebarViewportBackdropComponent;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
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

    de = fixture.debugElement.query(By.css('daff-sidebar-viewport'));

    component = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-sidebar-viewport>', () => {
    it('should add a class of "daff-sidebar-viewport" to the host element', () => {
      expect(de.nativeElement.classList.contains('daff-sidebar-viewport')).toBeTruthy();
    });
  });

  describe('navPlacement', () => {
    it('should be able to take `navPlacement` as an input', () => {
      expect(component.navPlacement).toEqual(wrapper.navPlacement);
    });

    it('should set the default navPlacement to above', () => {
      expect(component.navPlacement).toEqual('above');
    });

    it('should add a class of `.beside` if navPlacement="beside"', () => {
      wrapper.navPlacement = 'beside';
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('beside')).toBeTruthy();
    });
  });

  describe('when <daff-sidebar-viewport-backdrop> emits backdropClicked', () => {
    beforeEach(() => {
      fixture.detectChanges();
      backdrop = fixture.debugElement.query(By.css('daff-sidebar-viewport-backdrop')).componentInstance;
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
