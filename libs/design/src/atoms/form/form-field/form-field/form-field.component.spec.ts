import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgControl, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

import { DaffFormFieldComponent } from './form-field.component';
import { DaffErrorMessageComponent } from '../error-message/error-message.component';
import { DaffFormFieldMissingControlMessage } from '../form-field-errors';
import { DaffFormFieldControl } from '../form-field-control';
import { DaffInputModule } from '../../input/public_api';

@Component({template: `
  <daff-form-field [formSubmitted]="formSubmittedValue">
    <input daff-input [formControl]="formControl">
    <daff-error-message></daff-error-message>
  </daff-form-field>`
})
class WrapperComponent {
  formSubmittedValue: boolean;
  formControl = new FormControl('', Validators.required)
}

describe('DaffFormFieldComponent | Usage', () => {
  let wrapper: WrapperComponent;
  let component: DaffFormFieldComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let formFieldControlElement: HTMLElement;
  let control: DaffFormFieldControl<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DaffInputModule
      ],
      declarations: [ 
        WrapperComponent,
        DaffFormFieldComponent,
        DaffErrorMessageComponent
      ]
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
      wrapper.formControl.setValue("");
      fixture.detectChanges();

      expect(wrapper.formControl.errors).toBeTruthy();
      expect(formFieldControlElement.classList.contains("daff-error")).toEqual(true);
    });
  });

  describe('when the control is not an in error state', () => {
    it('should NOT set the `daff-error` class on the `daff-form-field__control`', () => {
      wrapper.formControl.markAsTouched();
      wrapper.formControl.setValue("Something Valid");
      fixture.detectChanges();

      expect(wrapper.formControl.errors).toBeFalsy();
      expect(formFieldControlElement.classList.contains("daff-error")).toEqual(false);
    });
  });

  describe('when the child control is in a valid state', () => {
    it('should set the `daff-valid` class on the `daff-form-field__control`', () => {
      wrapper.formControl.markAsTouched();
      wrapper.formControl.setValue("Something Valid");
      fixture.detectChanges();

      expect(wrapper.formControl.valid).toBeTruthy();
      expect(formFieldControlElement.classList.contains("daff-valid")).toEqual(true);
    });
  });

  describe('when the control is not in a valid state', () => {
    it('should NOT set the `daff-valid` class on the `daff-form-field__control`', () => {
      wrapper.formControl.markAsTouched();
      wrapper.formControl.setValue("");
      fixture.detectChanges();

      expect(wrapper.formControl.valid).toBeFalsy();
      expect(formFieldControlElement.classList.contains("daff-valid")).toEqual(false);
    });
  });

});

@Component({template: `
  <daff-form-field [formSubmitted]="formSubmittedValue">
    <daff-error-message></daff-error-message>
  </daff-form-field>`
})

class WrapperWithoutControlComponent {
  formSubmittedValue: boolean;
}
describe('DaffFormFieldComponent | Usage Without Control', () => {
  let fixture: ComponentFixture<WrapperWithoutControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperWithoutControlComponent,
        DaffFormFieldComponent,
        DaffErrorMessageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperWithoutControlComponent);
  });

  it('should throw an error when there is no control present', () => {
    expect(() => fixture.detectChanges()).toThrowError(DaffFormFieldMissingControlMessage);
  });
})