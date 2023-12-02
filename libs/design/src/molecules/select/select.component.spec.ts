import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import {
  CommonModule,
  DOCUMENT,
} from '@angular/common';
import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffPrefixSuffixModule } from '@daffodil/design';

import { DaffSelectComponent } from './select.component';
import { DaffSelectModule } from './select.module';

@Component ({
  template: `
    <daff-select
      [tabIndex]="tabIndexValue"
      [disabled]="disabledValue"
      [skeleton]="skeletonValue"
      [options]="optionsValue"
      [formControl]="controlValue"
    >
      <ng-template daffSelectOption let-isSelected="isSelected" let-option="option">
        <div class="test-option" [attr.data-value]="option" [attr.data-is-selected]="isSelected">
          <div>{{option}}</div>
        </div>
      </ng-template>
    </daff-select>
  `,
})
class WrapperComponent {
  tabIndexValue: number;
  disabledValue: boolean;
  skeletonValue: boolean;
  optionsValue = [0, 1, 2, 3, 4, 5];
  controlValue = new FormControl(0);
}

describe('DaffSelectComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffSelectComponent;
  let buttonElement: HTMLButtonElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        CommonModule,
        FontAwesomeModule,
        OverlayModule,
        PortalModule,
        DaffPrefixSuffixModule,
        ReactiveFormsModule,
        DaffSelectModule,
      ],
      declarations: [
        DaffSelectComponent,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-select'));
    component = de.componentInstance;

    wrapper.tabIndexValue = 5;
    wrapper.disabledValue = false;
    wrapper.skeletonValue = false;

    fixture.detectChanges();

    buttonElement = fixture.debugElement.query(By.css('.daff-select__field')).nativeElement;
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

  it('should take options as an input', () => {
    expect(component.options).toEqual(wrapper.optionsValue);
  });

  describe('when the component is disabled', () => {
    beforeEach(() => {
      wrapper.disabledValue = true;
      fixture.detectChanges();
    });

    it('should add the disabled class', () => {
      expect(de.classes['daff-select--disabled']).toBeTruthy();
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

    describe('and when the tab key is pressed', () => {
      beforeEach(() => {
        TestBed.inject(DOCUMENT).dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }));
        fixture.detectChanges();
      });

      it('should not remove focus from the select', () => {
        expect(TestBed.inject(DOCUMENT).activeElement).toEqual(buttonElement);
      });
    });

    describe('and when the backdrop is clicked', () => {
      beforeEach(() => {
        TestBed.inject(DOCUMENT).querySelector('.cdk-overlay-transparent-backdrop').dispatchEvent(new MouseEvent('click'));
        fixture.detectChanges();
      });

      it('should close the select', () => {
        expect(component.isOpen).toBeFalse();
      });
    });

    describe('and when an option is selected', () => {
      let optionEl: HTMLElement;

      beforeEach(() => {
        optionEl = fixture.debugElement.query(By.css('.test-option[data-value="1"]')).nativeElement;
        optionEl.click();
        fixture.detectChanges();
      });

      it('should update the form control', () => {
        expect(wrapper.controlValue.value).toEqual(1);
      });

      it('should update the is selected value in the option slot', () => {
        expect(optionEl.getAttribute('data-is-selected')).toEqual('true');
      });
    });

    describe('and when the form control value is changed', () => {
      let optionEl: HTMLElement;
      let value: number;

      beforeEach(() => {
        optionEl = fixture.debugElement.query(By.css('.test-option[data-value="1"]')).nativeElement;
        value = 1;
        wrapper.controlValue.patchValue(value);
        fixture.detectChanges();
      });

      it('should update the is selected value in the option slot', () => {
        expect(optionEl.getAttribute('data-is-selected')).toEqual('true');
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

    it('should toggle the select', () => {
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

    it('should toggle the select', () => {
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

    it('should toggle the select', () => {
      expect(component.isOpen).toEqual(!open);
    });
  });

  describe('when the dropdown is closed', () => {
    beforeEach(() => {
      if (component.isOpen) {
        component.toggle();
      }
      fixture.detectChanges();
    });

    it('should not render the options', () => {
      expect(TestBed.inject(DOCUMENT).querySelector('.daff-select__options')).toBeFalsy();
    });
  });
});
