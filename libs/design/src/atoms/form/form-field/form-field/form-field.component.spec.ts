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
  ReactiveFormsModule,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffInputComponent } from '@daffodil/design/input';

import { DaffFormFieldComponent } from './form-field.component';
import { DAFF_FORM_FIELD_COMPONENTS } from '../form-field';
import { DaffFormFieldControl } from '../form-field-control';
import { DaffFormFieldMissingControlMessage } from '../form-field-errors';

@Component({ template: `
  <daff-form-field>
    <input daff-input [formControl]="formControl">
    <daff-error-message></daff-error-message>
  </daff-form-field>`,
imports: [
  DaffFormFieldComponent,
  DaffInputComponent,
  ReactiveFormsModule,
]})

class WrapperComponent {
  formControl = new UntypedFormControl('', Validators.required);
}

describe('@daffodil/design | DaffFormFieldComponent | Usage', () => {
  let wrapper: WrapperComponent;
  let component: DaffFormFieldComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let control: DaffFormFieldControl<unknown>;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('daff-form-field'));
    component = de.componentInstance;
    control = component._control;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daff-form-field" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-form-field': true,
    }));
  });

  describe('error state', () => {
    it('should set the `daff-error` class on the host element when the child control has an error', () => {
      wrapper.formControl.markAsTouched();
      wrapper.formControl.setValue('');
      fixture.detectChanges();

      expect(wrapper.formControl.errors).toBeTruthy();
      expect(de.nativeElement.classList.contains('daff-error')).toEqual(true);
    });

    it('should NOT set the `daff-error` class on the host element when the child control does not have an error', () => {
      wrapper.formControl.markAsTouched();
      wrapper.formControl.setValue('Something Valid');
      fixture.detectChanges();

      expect(wrapper.formControl.errors).toBeFalsy();
      expect(de.nativeElement.classList.contains('daff-error')).toEqual(false);
    });
  });

  describe('valid state', () => {
    it('should set the `daff-valid` class on the host element when the child control is valid', () => {
      wrapper.formControl.markAsTouched();
      wrapper.formControl.setValue('Something Valid');
      fixture.detectChanges();

      expect(wrapper.formControl.valid).toBeTruthy();
      expect(de.nativeElement.classList.contains('daff-valid')).toEqual(true);
    });

    it('should NOT set the `daff-valid` class on the host element when the child control is not valid', () => {
      wrapper.formControl.markAsTouched();
      wrapper.formControl.setValue('');
      fixture.detectChanges();

      expect(wrapper.formControl.valid).toBeFalsy();
      expect(de.nativeElement.classList.contains('daff-valid')).toEqual(false);
    });
  });

  describe('disabled state', () => {
    it('should set the `daff-disabled` class on the host element when the child control is disabled', () => {
      wrapper.formControl.disable();
      fixture.detectChanges();

      expect(wrapper.formControl.disabled).toBeTruthy();
      expect(de.nativeElement.classList.contains('daff-disabled')).toEqual(true);
    });

    it('should not set the `daff-disabled` class on the host element when the child control is not disabled', () => {
      control.state.disabled = false;
      fixture.detectChanges();

      expect(wrapper.formControl.disabled).toBeFalsy();
      expect(de.nativeElement.classList.contains('daff-disabled')).toEqual(false);
    });
  });
});

@Component({ template: `
  <daff-form-field>
    <daff-error-message></daff-error-message>
  </daff-form-field>`,
imports: [
  DAFF_FORM_FIELD_COMPONENTS,
]})

class WrapperWithoutControlComponent {}

describe('@daffodil/design | DaffFormFieldComponent | Usage Without Control', () => {
  let fixture: ComponentFixture<WrapperWithoutControlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperWithoutControlComponent,
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
