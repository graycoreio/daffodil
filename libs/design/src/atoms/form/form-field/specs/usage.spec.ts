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

import {
  DAFF_FORM_FIELD_COMPONENTS,
  DaffFormFieldComponent,
  DaffFormFieldControl,
} from '@daffodil/design';
import { DaffInputComponent } from '@daffodil/design/input';

import { DaffFormFieldApperanace } from '../form-field/form-field.component';

@Component({ template: `
  <daff-form-field [id]="id" [appearance]="appearance">
    <input daff-input [formControl]="formControl">
    <daff-hint></daff-hint>
    <daff-error-message></daff-error-message>
  </daff-form-field>`,
imports: [
  DAFF_FORM_FIELD_COMPONENTS,
  DaffInputComponent,
  ReactiveFormsModule,
]})

class WrapperComponent {
  formControl = new UntypedFormControl('', Validators.required);
  id: string;
  appearance: DaffFormFieldApperanace = 'fixed';
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

  it('should allow a custom id to be set', () => {
    expect(component.id).toEqual(wrapper.id);
  });

  describe('setting the appearance of a form field', () => {
    it('should take appearance as an input', () => {
      expect(component.appearance).toEqual(wrapper.appearance);
    });

    it('should add a class of "fluid" to the host element when appearance="fluid"', () => {
      wrapper.appearance = 'fluid';
      fixture.detectChanges();

      expect(de.classes['fluid']).toBeTrue();
    });

    it('should add a class of "fixed" to the host element when appearance="fixed"', () => {
      wrapper.appearance = 'fixed';
      fixture.detectChanges();

      expect(de.classes['fixed']).toBeTrue();
    });
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

  it('should not add the `has-prefix` class to the host element if prefix is not used', () => {
    expect(de.nativeElement.classList.contains('has-prefix')).toEqual(false);
  });

  it('should not add the `has-suffix` class to the host element if suffix or action is not used', () => {
    expect(de.nativeElement.classList.contains('has-suffix')).toEqual(false);
  });
});

@Component({ template: `
  <daff-form-field>
    <div daffPrefix></div>
    <input daff-input>
    <div daffSuffix></div>
    <div daffFormFieldAction></div>
  </daff-form-field>`,
imports: [
  DAFF_FORM_FIELD_COMPONENTS,
  DaffInputComponent,
  ReactiveFormsModule,
]})

class WithPrefixSuffixComponent {
}

describe('@daffodil/design | DaffFormFieldComponent | Usage - Prefix, Suffix, & Action', () => {
  let wrapper: WithPrefixSuffixComponent;
  let component: DaffFormFieldComponent;
  let fixture: ComponentFixture<WithPrefixSuffixComponent>;
  let control: DaffFormFieldControl<unknown>;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WithPrefixSuffixComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithPrefixSuffixComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('daff-form-field'));
    component = de.componentInstance;
    control = component._control;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the `has-prefix` class to the host element when [daffPrefix] is used', () => {
    expect(de.nativeElement.classList.contains('has-prefix')).toEqual(true);
  });

  it('should add the `has-suffix` class to the host element when [daffSuffix] is used', () => {
    expect(de.nativeElement.classList.contains('has-suffix')).toEqual(true);
  });

  it('should add the `has-suffix` class to the host element when [daffFormFieldAction] is used', () => {
    expect(de.nativeElement.classList.contains('has-suffix')).toEqual(true);
  });
});
