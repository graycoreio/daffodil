import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffSidebarViewportComponent } from './sidebar-viewport.component';
import { DaffSidebarComponent } from '../sidebar/sidebar.component';
import { DaffSidebarMode } from '../helper/sidebar-mode';
import { DaffBackdropComponent } from '../../backdrop/backdrop/backdrop.component';
import { DaffBackdropModule } from '../../backdrop/backdrop.module';



@Component({
  template: `
    <div class="sidebar-content-wrapper">
      <daff-sidebar-viewport
        [fullscreen]="fullscreen"
        [forceBackdrop]="forceBackdrop"
        [backdropIsVisible]="backdropIsVisible"
        (backdropClicked)="incrementBackdropClicked()"
      >
        <daff-sidebar [opened]="open" [mode]="mode"></daff-sidebar>
      </daff-sidebar-viewport>
    </div>
  `,
})
class WrapperComponent {
  open = false;

  fullscreen = false;

  forceBackdrop = false;

  backdropIsVisible = false;

  mode: DaffSidebarMode = 'side';

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
  let componentDe: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DaffBackdropModule
      ],
      declarations: [
        WrapperComponent,
        DaffSidebarViewportComponent,
        DaffSidebarComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    componentDe = fixture.debugElement.query(By.css('daff-sidebar-viewport'));
    component = componentDe.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('on <daff-backdrop>', () => {
    beforeEach(() => {
      wrapper.mode = 'over';
      wrapper.open = true;
      fixture.detectChanges();

      backdrop = fixture.debugElement.query(By.css('daff-backdrop'))
        .componentInstance;
    });

    it('should set transparent', () => {
      expect(backdrop.transparent).toEqual(!component.backdropIsVisible);
    });
  });

  describe('when a sidebar with a push mode is opened', () => {
    it('should add a "push" class to the daff-sidebar-viewport', () => {
      wrapper.open = true;
      wrapper.mode = 'push';
      fixture.detectChanges();

      const sidebarViewport = fixture.debugElement.query(By.css('daff-sidebar-viewport')).nativeElement;

      expect(sidebarViewport.classList.contains('push')).toBeTruthy();
    });
  });

  describe('when <backdrop> emits backdropClicked', () => {
    beforeEach(() => {
      wrapper.mode = 'over';
      wrapper.open = true;
      fixture.detectChanges();
      backdrop = fixture.debugElement.query(By.css('daff-backdrop'))
        .componentInstance;
      spyOn(component.backdropClicked, 'emit');

      backdrop.backdropClicked.emit();
    });

    it('should call component.backdropClicked.emit', () => {
      expect(component.backdropClicked.emit).toHaveBeenCalled();
    });
  });

  describe('when the sidebar is in over mode', () => {
    beforeEach(() => {
      wrapper.mode = 'over';
      fixture.detectChanges();
    });

    it('should render the backdrop', () => {
      expect(backdrop).not.toBeNull();
    });
  });

  describe('when a sidebar is in push mode', () => {
    beforeEach(() => {
      wrapper.mode = 'push';
      fixture.detectChanges();
    });

    it('should render backdrop', () => {
      expect(backdrop).not.toBeNull();
    });

    it('should set the mode to "push"', () => {
      expect(component._mode).toEqual('push');
    });
  });

  describe('when the sidebar is in side mode', () => {
    let backdropElement;

    beforeEach(() => {
      wrapper.mode = 'side';
      fixture.detectChanges();

      backdropElement = fixture.debugElement.query(By.css('daff-backdrop'));
    });

    it('should not render backdrop', () => {
      expect(backdropElement).toBeNull();
    });

    it('should set _animationState to `closed` and not change regardless of `opened` state changes', () => {
      wrapper.open = false;
      fixture.detectChanges();

      expect(component._animationState).toEqual('closed');

      wrapper.open = true;
      fixture.detectChanges();

      expect(component._animationState).toEqual('closed');
    });
  });

  it('should add a fullscreen class to the viewport when `fullscreen` is true', () => {
    expect(component.fullscreen).toEqual(false);
    expect(componentDe.nativeElement).not.toHaveClass('fullscreen');
    wrapper.fullscreen = true;
    fixture.detectChanges();
    expect(component.fullscreen).toEqual(true);
    expect(componentDe.nativeElement).toHaveClass('fullscreen');
  });
});

describe('DaffSidebarViewportComponent | Defaults', () => {
  let fixture: ComponentFixture<DaffSidebarViewportComponent>;
  let component: DaffSidebarViewportComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DaffBackdropModule
      ],
      declarations: [
        DaffSidebarViewportComponent, DaffSidebarComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffSidebarViewportComponent);
    component = fixture.componentInstance;

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have the backdrop by default', () => {
    expect(component.hasBackdrop).toBe(false);
    expect(fixture.debugElement.query(By.css('golf-backdrop'))).toBeNull();
  });

  it('should not be fullscreen by default', () => {
    expect(component.fullscreen).toBe(false);
  });
});
