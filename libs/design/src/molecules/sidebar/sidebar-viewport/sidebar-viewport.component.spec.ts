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
      (backdropClicked)="incrementBackdropClicked()"></daff-sidebar-viewport>
  </div>
`})
class WrapperComponent {
  open = false;

  backdropIsVisible = false;

  mode: DaffSidebarMode = "side";
  
  backdropClickedCounter = 0;

  incrementBackdropClicked() {
    this.backdropClickedCounter++;
  }

  reset() {
    this.backdropClickedCounter = 0;
  }
}

@Component({selector: 'daff-backdrop', template: ''})
class MockDaffBackDropComponent {
  @Input() show: boolean;
  @Input() backdropIsVisible: boolean;
  @Output() backdropClicked: EventEmitter<any> = new EventEmitter();
}

describe('DaffSidebarViewportComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffSidebarViewportComponent;
  let backdrop: MockDaffBackDropComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [
        WrapperComponent,
        DaffSidebarViewportComponent,
        DaffSidebarComponent,
        MockDaffBackDropComponent
      ]
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

  it('should have the _animationState should be `open` by default', () => {
    expect(component._animationState).toEqual("open");
  });

  it('should not have the backdrop by default', () => {
    expect(component.hasBackdrop).toBe(false);
    expect(fixture.debugElement.query(By.css('daff-backdrop'))).toBeNull();
  });

  it('should be `side` mode by default', () => {
    expect(component.mode).toBe('side');
  });

  describe('on <backdrop>', () => {

    beforeEach(() => {
      wrapper.mode = 'over';
      fixture.detectChanges();

      backdrop = fixture.debugElement.query(By.css('daff-backdrop')).componentInstance;
    });
    
    it('should set show to component.open', () => {
      expect(backdrop.show).toEqual(component.opened);
    });

    it('should set backdropIsVisible', () => {
      expect(backdrop.backdropIsVisible).toEqual(component.backdropIsVisible);
    });
  });

  describe('when <backdrop> emits backdropClicked', () => {

    beforeEach(() => {
      wrapper.mode = 'over';
      fixture.detectChanges();
      backdrop = fixture.debugElement.query(By.css('daff-backdrop')).componentInstance;
      spyOn(component.backdropClicked, 'emit');

      backdrop.backdropClicked.emit();
    });
    
    it('should call component.backdropClicked.emit', () => {
      expect(component.backdropClicked.emit).toHaveBeenCalled();
    });
  });

  describe('over mode' , () => {
    beforeEach(() => {
      wrapper.mode = "over";
      fixture.detectChanges();
    });

    it('should render backdrop', () => {
      expect(backdrop).not.toBeNull();
    });
  });
  
  describe('push mode', () => {
    beforeEach(() => {
      wrapper.mode = "push";
      fixture.detectChanges();
    });

    it('should render backdrop', () => {
      expect(backdrop).not.toBeNull();
    });
  });

  describe('side mode', () => {

    let backdropElement;

    beforeEach(() => {
      wrapper.mode = "side";
      fixture.detectChanges();

      backdropElement = fixture.debugElement.query(By.css('daff-backdrop'));
    });

    it('should not render backdrop', () => {
      expect(backdropElement).toBeNull();
    });

    it('should be `open` and and not change animation states regardless of `opened` state changes', () => {
      wrapper.open = false;
      fixture.detectChanges();

      expect(component._animationState).toEqual("open");

      wrapper.open = true;
      fixture.detectChanges();

      expect(component._animationState).toEqual("open");
    });
  });
});