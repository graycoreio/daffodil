import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffFormFieldComponent } from './form-field.component';
import { DaffErrorMessageComponent } from '../../error-message/error-message.component';
import { DaffInputModule } from '../../input/public_api';
import { DaffFormFieldControl } from '../form-field-control';
import { DaffFormFieldMissingControlMessage } from '../form-field-errors';

@Component({
  template: `
  <daff-form-field [formSubmitted]="formSubmittedValue">
    <input daff-input [formControl]="formControl">
    <daff-error-message></daff-error-message>
  </daff-form-field>`,
  standalone: false,
})
class WrapperComponent {
  formSubmittedValue: boolean;
  formControl = new UntypedFormControl('', Validators.required);
}

describe('@daffodil/design | DaffFormFieldComponent | Usage', () => {
  let wrapper: WrapperComponent;
  let component: DaffFormFieldComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let formFieldControlElement: HTMLElement;
  let control: DaffFormFieldControl;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DaffInputModule,
        FontAwesomeModule,
      ],
      declarations: [
        WrapperComponent,
        DaffFormFieldComponent,
        DaffErrorMessageComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('daff-form-field')).componentInstance;
    formFieldControlElement = fixture.debugElement.query(By.css('.daff-form-field__control')).nativeElement;
    control = component._control;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set .daff-form-field on host element', () => {
    const hostElement = fixture.debugElement.query(By.css('daff-form-field')).nativeElement;

    expect(hostElement.classList.contains('daff-form-field')).toBeTruthy();
  });

  describe('when the child control is in an error state', () => {
    it('should set the `daff-error` class on the `daff-form-field__control`', () => {
      wrapper.formControl.markAsTouched();
      wrapper.formControl.setValue('');
      fixture.detectChanges();

      expect(wrapper.formControl.errors).toBeTruthy();
      expect(formFieldControlElement.classList.contains('daff-error')).toEqual(true);
    });
  });

  describe('when the control is not an in error state', () => {
    it('should NOT set the `daff-error` class on the `daff-form-field__control`', () => {
      wrapper.formControl.markAsTouched();
      wrapper.formControl.setValue('Something Valid');
      fixture.detectChanges();

      expect(wrapper.formControl.errors).toBeFalsy();
      expect(formFieldControlElement.classList.contains('daff-error')).toEqual(false);
    });
  });

  describe('when the child control is in a valid state', () => {
    it('should set the `daff-valid` class on the `daff-form-field__control`', () => {
      wrapper.formControl.markAsTouched();
      wrapper.formControl.setValue('Something Valid');
      fixture.detectChanges();

      expect(wrapper.formControl.valid).toBeTruthy();
      expect(formFieldControlElement.classList.contains('daff-valid')).toEqual(true);
    });
  });

  describe('when the control is not in a valid state', () => {
    it('should NOT set the `daff-valid` class on the `daff-form-field__control`', () => {
      wrapper.formControl.markAsTouched();
      wrapper.formControl.setValue('');
      fixture.detectChanges();

      expect(wrapper.formControl.valid).toBeFalsy();
      expect(formFieldControlElement.classList.contains('daff-valid')).toEqual(false);
    });
  });

});

@Component({
  template: `
  <daff-form-field [formSubmitted]="formSubmittedValue">
    <daff-error-message></daff-error-message>
  </daff-form-field>`,
  standalone: false,
})

class WrapperWithoutControlComponent {
  formSubmittedValue: boolean;
}
describe('@daffodil/design | DaffFormFieldComponent | Usage Without Control', () => {
  let fixture: ComponentFixture<WrapperWithoutControlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
      ],
      declarations: [
        WrapperWithoutControlComponent,
        DaffFormFieldComponent,
        DaffErrorMessageComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperWithoutControlComponent);
  });

  it('should throw an error when there is no control present', () => {
    expect(() => fixture.detectChanges()).toThrowError(DaffFormFieldMissingControlMessage);
  });
});
