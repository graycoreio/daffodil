import { DOCUMENT } from '@angular/common';
import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffDropdownComponent } from './dropdown.component';

@Component ({
  template: `
    <daff-dropdown
      [tabIndex]="tabIndexValue"
      [disabled]="disabledValue"
      [skeleton]="skeletonValue"
    ></daff-dropdown>
  `,
})
class WrapperComponent {
  tabIndexValue: number;
  disabledValue: boolean;
  skeletonValue: boolean;
}

describe('DaffDropdownComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffDropdownComponent;
  let buttonElement: HTMLButtonElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
      ],
      declarations: [
        DaffDropdownComponent,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-dropdown'));
    component = de.componentInstance;

    wrapper.tabIndexValue = 5;
    wrapper.disabledValue = false;
    wrapper.skeletonValue = false;

    fixture.detectChanges();

    buttonElement = fixture.debugElement.query(By.css('.daff-dropdown__header')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should take tabIndex as an input', () => {
    expect(component.tabIndex).toEqual(wrapper.tabIndexValue);
  });

  it('should take disabled as an input', () => {
    expect(component.disabled).toEqual(wrapper.disabledValue);
  });

  it('should take skeleton as an input', () => {
    expect(component.skeleton).toEqual(wrapper.skeletonValue);
  });

  describe('when the component is disabled', () => {
    beforeEach(() => {
      wrapper.disabledValue = true;
      fixture.detectChanges();
    });

    it('should add the disabled class', () => {
      expect(de.classes.disabled).toBeTruthy();
    });

    it('should disable the button', () => {
      expect(buttonElement.disabled).toBeTrue();
    });
  });

  describe('when the component is open', () => {
    beforeEach(() => {
      if (!component.isOpen) {
        component.toggle();
      }
      fixture.detectChanges();
    });

    describe('and when the page is clicked', () => {
      beforeEach(() => {
        TestBed.inject(DOCUMENT).dispatchEvent(new MouseEvent('click'));
        fixture.detectChanges();
      });

      it('should close the dropdown', () => {
        expect(component.isOpen).toBeFalse();
      });
    });

    it('should add the aria-expanded attribute to the button', () => {
      expect(buttonElement.attributes['aria-expanded']).toBeTruthy();
    });
  });

  describe('when the button is clicked', () => {
    let open: boolean;

    beforeEach(() => {
      open = component.isOpen;
      buttonElement.click();
      fixture.detectChanges();
    });

    it('should toggle the dropdown', () => {
      expect(component.isOpen).toEqual(!open);
    });
  });

  describe('when the button emits an enter keydown event', () => {
    let open: boolean;

    beforeEach(() => {
      open = component.isOpen;
      buttonElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
      fixture.detectChanges();
    });

    it('should toggle the dropdown', () => {
      expect(component.isOpen).toEqual(!open);
    });
  });

  describe('when the button emits a space keydown event', () => {
    let open: boolean;

    beforeEach(() => {
      open = component.isOpen;
      buttonElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Space' }));
      fixture.detectChanges();
    });

    it('should toggle the dropdown', () => {
      expect(component.isOpen).toEqual(!open);
    });
  });
});
