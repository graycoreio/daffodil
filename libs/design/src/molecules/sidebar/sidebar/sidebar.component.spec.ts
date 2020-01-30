import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffSidebarComponent } from './sidebar.component';

describe('DaffSidebarComponent', () => {
  let component: DaffSidebarComponent;
  let fixture: ComponentFixture<DaffSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [
        DaffSidebarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('user interactions', () => {
    it('should emit `escapedPressed` when the `ESC` key is pressed', () => {
      spyOn(component.escapePressed, 'emit');

      fixture.nativeElement.dispatchEvent(new KeyboardEvent('keydown', {
          key: 'Escape'
      }));

      fixture.detectChanges();

      expect(component.escapePressed.emit).toHaveBeenCalled();
    });

    it('should not emit `escapedPressed` if the event is not triggered ON the `daff-sidebar`', () => {
      spyOn(component.escapePressed, 'emit');

      document.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Escape'
      }));

      fixture.detectChanges();

      expect(component.escapePressed.emit).not.toHaveBeenCalled();
    });
  });
});

@Component({template: `
  <div class="host-element">
    <daff-sidebar [opened]="openedValue" [mode]="modeValue" (escapePressed)="pressed()"></daff-sidebar>
  </div>
`})

class WrapperComponent {
  openedValue = false;
  modeValue = 'push';
  escapePressedCount = 0;

  pressed(): void {
    this.escapePressedCount++;
  }
}

describe('DaffSidebarComponent | usage', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let component: DaffSidebarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [
        WrapperComponent,
        DaffSidebarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-sidebar'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should be able to bind to the Output `escapePressed`', () => {
    component.escapePressed.emit();

    fixture.detectChanges();

    expect(wrapper.escapePressedCount).toEqual(1);
  });

  it('should take an input of opened', () => {
    expect(component.opened).toEqual(wrapper.openedValue);
  });

  it('should take an input of mode', () => {
    expect(component.mode).toEqual(wrapper.modeValue);
  });

  describe('when opened changes', () => {

    it('should update the _animationState', () => {
      component._animationState = 'void';
      wrapper.openedValue = true;
      fixture.detectChanges();

      expect(component._animationState).toEqual('open');
    });
  });

  describe('when mode changes', () => {

    it('should update the _animationState', () => {
      component._animationState = 'void';
      wrapper.modeValue = 'side';
      fixture.detectChanges();

      expect(component._animationState).toEqual('open');
    });
  });

  describe('side mode', () => {

    beforeEach(() => {
      wrapper.modeValue = 'side';
      fixture.detectChanges();
    });

    it('should keep the _animationState to `open` even if the opened state is closed', () => {
      wrapper.openedValue = false;
      fixture.detectChanges();

      expect(component._animationState).toEqual('open');
    });

    it('should set a side class on the host', () => {
      const host = fixture.debugElement.query(By.css('.daff-sidebar')).nativeElement;

      expect(host.classList.contains('side')).toBeTruthy();
    });
  });

  describe('over mode', () => {

    beforeEach(() => {
      wrapper.modeValue = 'over';
      fixture.detectChanges();
    });

    it('should change the _animationState to `open` when the sidebar is opened', () => {
      component._animationState = 'void';
      wrapper.openedValue = true;
      fixture.detectChanges();

      expect(component._animationState).toEqual('open');
    });

    it('should set an over class on the host', () => {
      const host = fixture.debugElement.query(By.css('.daff-sidebar')).nativeElement;

      expect(host.classList.contains('over')).toBeTruthy();
    });
  });

  describe('push mode', () => {

    beforeEach(() => {
      wrapper.modeValue = 'push';
      fixture.detectChanges();
    });

    it('should change the _animationState to `open` when the sidebar is opened', () => {
      wrapper.openedValue = true;
      fixture.detectChanges();

      expect(component._animationState).toEqual('open');
    });

    it('should set a push class on the host', () => {
      const host = fixture.debugElement.query(By.css('.daff-sidebar')).nativeElement;

      expect(host.classList.contains('push')).toBeTruthy();
    });
  });
});
