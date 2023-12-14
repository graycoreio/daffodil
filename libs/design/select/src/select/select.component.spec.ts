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
import { DaffSelectModule } from '../select.module';

@Component ({
  template: `
    <daff-select
      [tabIndex]="tabIndexValue"
      [disabled]="disabledValue"
      [skeleton]="skeletonValue"
      [options]="optionsValue"
      [formControl]="controlValue"
    >
      <ng-template daffSelectOption let-isSelected="isSelected" let-option="option" let-isHighlighted="isHighlighted">
        <div class="test-option" [attr.data-value]="option" [attr.data-is-selected]="isSelected" [attr.data-is-highlighted]="isHighlighted">
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
    let optionsListElement: HTMLElement;

    beforeEach(() => {
      component.open();
      fixture.detectChanges();
      optionsListElement = fixture.debugElement.query(By.css('.daff-select__options')).nativeElement;
    });

    describe('and when an option is highlighted', () => {
      let optionEl: HTMLElement;

      beforeEach(() => {
        optionEl = fixture.debugElement.query(By.css('.test-option[data-value="2"]')).nativeElement;
        component.highlighted = 2;
        fixture.detectChanges();
      });

      it('should update the is highlighted value in the option slot', () => {
        expect(optionEl.getAttribute('data-is-highlighted')).toEqual('true');
      });
    });

    describe('and when the enter key is pressed', () => {
      beforeEach(() => {
        optionsListElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        fixture.detectChanges();
      });

      it('should close the select', () => {
        expect(component.isOpen).toBeFalse();
      });

      it('should select the highlighted option', () => {
        expect(wrapper.controlValue.value).toEqual(0);
      });
    });

    describe('and when the space key is pressed', () => {
      beforeEach(() => {
        optionsListElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Space' }));
        fixture.detectChanges();
      });

      it('should close the select', () => {
        expect(component.isOpen).toBeFalse();
      });

      it('should select the highlighted option', () => {
        expect(wrapper.controlValue.value).toEqual(0);
      });
    });

    describe('and when the arrow down key is pressed', () => {
      beforeEach(() => {
        optionsListElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
        fixture.detectChanges();
      });

      it('should highlight the next option', () => {
        expect(component.highlighted).toEqual(1);
      });
    });

    describe('and when the arrow up key is pressed', () => {
      beforeEach(() => {
        component.highlighted = 2;
        fixture.detectChanges();
        optionsListElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
        fixture.detectChanges();
      });

      it('should highlight the previous option', () => {
        expect(component.highlighted).toEqual(1);
      });
    });

    describe('and when the escape key is pressed', () => {
      beforeEach(() => {
        component.highlighted = 2;
        fixture.detectChanges();
        optionsListElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
        fixture.detectChanges();
      });

      it('should close the select', () => {
        expect(component.isOpen).toBeFalse();
      });

      it('should not select the highlighted option', () => {
        expect(component.value).not.toEqual(2);
      });
    });

    describe('and when the tab key is pressed', () => {
      beforeEach(() => {
        TestBed.inject(DOCUMENT).dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }));
        fixture.detectChanges();
      });

      xit('should not remove focus from the options list', () => {
        expect(TestBed.inject(DOCUMENT).activeElement).toEqual(optionsListElement);
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

  describe('when the arrow down key is pressed', () => {
    beforeEach(() => {
      wrapper.controlValue.patchValue(0);
      fixture.detectChanges();
      buttonElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
      fixture.detectChanges();
    });

    it('should select the next option', () => {
      expect(component.value).toEqual(1);
    });
  });

  describe('when the arrow up key is pressed', () => {
    beforeEach(() => {
      wrapper.controlValue.patchValue(2);
      fixture.detectChanges();
      buttonElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp' }));
      fixture.detectChanges();
    });

    it('should select the previous option', () => {
      expect(component.value).toEqual(1);
    });
  });

  describe('when the select is closed', () => {
    beforeEach(() => {
      component.close();
      fixture.detectChanges();
    });

    it('should not render the options', () => {
      expect(TestBed.inject(DOCUMENT).querySelector('.daff-select__options')).toBeFalsy();
    });
  });
});
