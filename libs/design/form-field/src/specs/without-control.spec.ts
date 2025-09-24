import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { DAFF_FORM_FIELD_COMPONENTS } from '../form-field';
import { DaffFormFieldMissingControlMessage } from '../form-field/form-field.component';

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
