import { Component, Input, Output, EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffSidebarViewportComponent } from './sidebar-viewport.component';
import { DaffSidebarComponent } from '../sidebar/sidebar.component';
import { DaffSidebarMode } from '../helper/sidebar-mode';

@Component({template: `
  <div class="sidebar-content-wrapper">
    <daff-sidebar-viewport
      [backdropIsVisible]="backdropIsVisible"
      [mode]="mode"
      [opened]="open" 
      (onBackdropClicked)="incrementBackdropClicked()"></daff-sidebar-viewport>
  </div>
`})
class TestSidebarViewportWrapper {
  open: boolean = false;

  backdropIsVisible : boolean = false;

  mode: DaffSidebarMode = "side";
  
  backdropClickedCounter: number = 0;

  incrementBackdropClicked() {
    this.backdropClickedCounter++;
  }

  reset() {
    this.backdropClickedCounter = 0;
  }
}

@Component({selector: 'backdrop', template: ''})
class MockBackDropComponent {
  @Input() show: boolean;
  @Input() backdropIsVisible: boolean;
  @Output() backdropClicked: EventEmitter<any> = new EventEmitter();
}

describe('DaffSidebarViewportComponent', () => {
  let component: TestSidebarViewportWrapper;
  let fixture: ComponentFixture<TestSidebarViewportWrapper>;
  let sidebarViewport: DaffSidebarViewportComponent;
  let backdrop: MockBackDropComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [
        TestSidebarViewportWrapper,
        DaffSidebarViewportComponent,
        DaffSidebarComponent,
        MockBackDropComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSidebarViewportWrapper);
    component = fixture.componentInstance;

    sidebarViewport = fixture.debugElement.query(By.css('daff-sidebar-viewport')).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the _animationState should be `open` by default', () => {
    expect(sidebarViewport._animationState).toEqual("open");
  });

  it('should not have the backdrop by default', () => {
    expect(sidebarViewport.hasBackdrop).toBe(false);
    expect(fixture.debugElement.query(By.css('backdrop'))).toBeNull();
  });

  it('should be `side` mode by default', () => {
    expect(sidebarViewport.mode).toBe('side');
  });

  describe('on <backdrop>', () => {

    beforeEach(() => {
      component.mode = 'over';
      fixture.detectChanges();

      backdrop = fixture.debugElement.query(By.css('backdrop')).componentInstance;
    });
    
    it('should set show to sidebarViewport.open', () => {
      expect(backdrop.show).toEqual(sidebarViewport.opened);
    });

    it('should set backdropIsVisible', () => {
      expect(backdrop.backdropIsVisible).toEqual(sidebarViewport.backdropIsVisible);
    });
  });

  describe('when <backdrop> emits backdropClicked', () => {

    beforeEach(() => {
      component.mode = 'over';
      fixture.detectChanges();
      backdrop = fixture.debugElement.query(By.css('backdrop')).componentInstance;
      spyOn(sidebarViewport.onBackdropClicked, 'emit');

      backdrop.backdropClicked.emit();
    });
    
    it('should call sidebarViewport.backdropClicked.emit', () => {
      expect(sidebarViewport.onBackdropClicked.emit).toHaveBeenCalled();
    });
  });

  describe('over mode' , () => {
    beforeEach(() => {
      component.mode = "over";
      fixture.detectChanges();
    });

    it('should render backdrop', () => {
      expect(backdrop).not.toBeNull();
    });
  });
  
  describe('push mode', () => {
    beforeEach(() => {
      component.mode = "push";
      fixture.detectChanges();
    });

    it('should render backdrop', () => {
      expect(backdrop).not.toBeNull();
    });
  });

  describe('side mode', () => {

    let backdrop;

    beforeEach(() => {
      component.mode = "side";
      fixture.detectChanges();

      backdrop = fixture.debugElement.query(By.css('backdrop'));
    });

    it('should not render backdrop', () => {
      expect(backdrop).toBeNull();
    });

    it('should be `open` and and not change animation states regardless of `opened` state changes', () => {
      component.open = false;
      fixture.detectChanges();

      expect(sidebarViewport._animationState).toEqual("open");

      component.open = true;
      fixture.detectChanges();

      expect(sidebarViewport._animationState).toEqual("open");
    });
  });
});