import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import {
  DAFF_FORM_FIELD_COMPONENTS,
  DaffFormFieldComponent,
  DaffFormFieldControl,
} from '@daffodil/design';
import { DaffInputComponent } from '@daffodil/design/input';

@Component({ template: `
  <daff-form-field>
    <input daff-input [formControl]="formControl">
    <daff-hint>Hint></daff-hint>
    <daff-error-message>Error</daff-error-message>
  </daff-form-field>`,
imports: [
  DAFF_FORM_FIELD_COMPONENTS,
  DaffInputComponent,
  ReactiveFormsModule,
]})

class WrapperComponent {
  formControl = new UntypedFormControl();
}

describe('@daffodil/design/form-field | DaffFormFieldComponent | Defaults', () => {
  let wrapper: WrapperComponent;
  let component: DaffFormFieldComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let control: DaffFormFieldControl<unknown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-form-field'));
    component = de.componentInstance;
    control = component._control;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daff-form-field" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-form-field': true,
    }));
  });


  it('should have a generated id', () => {
    expect(component.id).toMatch('daff-form-field-[0-9]*');
  });

  it('should have a generated id for the hint', () => {
    const hint = fixture.debugElement.query(By.css('.daff-form-field__hint-wrapper'));

    expect(hint.nativeElement.id).toMatch('daff-form-field-[0-9]*-hint');
  });

  it('should have a generated id for the error message', () => {
    const error = fixture.debugElement.query(By.css('.daff-form-field__error-wrapper'));

    expect(error.nativeElement.id).toMatch('daff-form-field-[0-9]*-error');
  });

  it('should set fluid as the default appearance', () => {
    expect(component.appearance).toEqual('fluid');
  });
});
