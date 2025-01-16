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

@Component({
  template: `
    <div class="sidebar-content-wrapper">
      <daff-sidebar-viewport (backdropClicked)="incrementBackdropClicked()" [navPlacement]="navPlacement">
      </daff-sidebar-viewport>
    </div>`,
  imports: [
    DaffSidebarViewportComponent,
    DaffSidebarComponent,
  ],
})
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
        WrapperComponent,
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

  it('should add a class of "daff-sidebar-viewport" to the host element', () => {
    expect(de.nativeElement.classList.contains('daff-sidebar-viewport')).toBeTruthy();
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
});
