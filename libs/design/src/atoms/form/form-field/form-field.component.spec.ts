import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

import { DaffFormFieldComponent } from './form-field.component';

import {
  DaffFormFieldMissingControlMessage,
  DaffFormFieldMissingNgControlMessage,
  DaffFormFieldMissingLabelMessage } from './form-field-errors';

import { DaffFormFieldControl } from './form-field-control';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DaffInputModule } from '../input/input.module';
import { DaffFormLabelDirective } from '../form-label/form-label.directive';


@Component({template: `
  <daff-form-field [formSubmitted]="formSubmittedValue">
    <label daffFormLabel>Label</label>
    <input daff-input [formControl]="formControl">
    <daff-error-message></daff-error-message>
  </daff-form-field>`
})
class WrapperComponent {
  formSubmittedValue: boolean;
  formControl = new FormControl('', Validators.required);
}

describe('DaffFormFieldComponent | Usage', () => {
  let wrapper: WrapperComponent;
  let component: DaffFormFieldComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let formFieldControlElement: HTMLElement;
  let control: DaffFormFieldControl;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DaffInputModule,
        FontAwesomeModule
      ],
      declarations: [
        WrapperComponent,
        DaffFormFieldComponent,
        DaffFormLabelDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('daff-form-field'));
    component = de.componentInstance;
    formFieldControlElement = fixture.debugElement.query(By.css('.daff-form-field__control')).nativeElement;
    control = component._control;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('<daff-form-field', () => {
    it('should add a class of "daff-form-field" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-form-field': true,
      }));
    });
  });

  describe('when the child control is in an error state', () => {
    it('should set the "daff-error" class on the "daff-form-field__control"', () => {
      wrapper.formControl.markAsTouched();
      wrapper.formControl.setValue('');
      fixture.detectChanges();

      expect(wrapper.formControl.errors).toBeTruthy();
      expect(formFieldControlElement.classList.contains('daff-error')).toEqual(true);
    });
  });

  describe('when the control is not an in error state', () => {
    it('should NOT set the "daff-error" class on the "daff-form-field__control"', () => {
      wrapper.formControl.markAsTouched();
      wrapper.formControl.setValue('Something Valid');
      fixture.detectChanges();

      expect(wrapper.formControl.errors).toBeFalsy();
      expect(formFieldControlElement.classList.contains('daff-error')).toEqual(false);
    });
  });

  describe('when the child control is in a valid state', () => {
    it('should set the "daff-valid" class on the "daff-form-field__control"', () => {
      wrapper.formControl.markAsTouched();
      wrapper.formControl.setValue('Something Valid');
      fixture.detectChanges();

      expect(wrapper.formControl.valid).toBeTruthy();
      expect(formFieldControlElement.classList.contains('daff-valid')).toEqual(true);
    });
  });

  describe('when the control is not in a valid state', () => {
    it('should NOT set the "daff-valid" class on the "daff-form-field__control"', () => {
      wrapper.formControl.markAsTouched();
      wrapper.formControl.setValue('');
      fixture.detectChanges();

      expect(wrapper.formControl.valid).toBeFalsy();
      expect(formFieldControlElement.classList.contains('daff-valid')).toEqual(false);
    });
  });

});

@Component({template: `
  <daff-form-field [formSubmitted]="formSubmittedValue">
    <label daffFormLabel>Label</label>
    <input daff-input type="text" />
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
      imports: [
        FontAwesomeModule
      ],
      declarations: [
        WrapperWithoutControlComponent,
        DaffFormFieldComponent,
        DaffFormLabelDirective
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
});

@Component({template: `
  <daff-form-field [formSubmitted]="formSubmittedValue">
    <label daffFormLabel>Label</label>
    <input daff-input type="text" />
    <daff-error-message></daff-error-message>
  </daff-form-field>`
})

class WrapperWithoutNgControlComponent {
  formSubmittedValue: boolean;
}

describe('DaffFormFieldComponent | Usage Without ngControl', () => {
  let fixture: ComponentFixture<WrapperWithoutNgControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffInputModule,
        FontAwesomeModule
      ],
      declarations: [
        WrapperWithoutNgControlComponent,
        DaffFormFieldComponent,
        DaffFormLabelDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperWithoutNgControlComponent);
  });

  it('should throw an error when there is no ngControl present', () => {
    expect(() => fixture.detectChanges()).toThrowError(DaffFormFieldMissingNgControlMessage);
  });
});

@Component({template: `
  <daff-form-field>
    <input daff-input [formControl]="formControl">
    <daff-error-message></daff-error-message>
  </daff-form-field>`
})
class WrapperWithoutLabelComponent {
  formControl = new FormControl('', Validators.required);
}

describe('DaffFormFieldComponent | Usage without label', () => {
  let fixture: ComponentFixture<WrapperWithoutLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DaffInputModule,
        FontAwesomeModule,
      ],
      declarations: [
        WrapperWithoutLabelComponent,
        DaffFormFieldComponent,
        DaffFormLabelDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperWithoutLabelComponent);
  });

  it('should throw an error when there is no label present', () => {
    expect(() => fixture.detectChanges()).toThrowError(DaffFormFieldMissingLabelMessage);
  });

});
