import { TestBed } from '@angular/core/testing';
import {
  UntypedFormControl,
  UntypedFormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import { daffFormNotEmptyValidator } from './not-empty';

describe('@daffodil/design | daffFormNotEmptyValidator | integration', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
    });
  });

  describe('when the control is a form group', () => {
    let formGroup: UntypedFormGroup;

    describe('when the form group is empty', () => {
      beforeEach(() => {
        formGroup = new UntypedFormGroup({
          control1: new UntypedFormControl(null),
          control2: new UntypedFormControl(''),
        }, daffFormNotEmptyValidator);
      });

      it('should invalidate the form group', () => {
        expect(formGroup.valid).toBeFalse();
      });

      it('should add an empty error to the form group', () => {
        expect(formGroup.errors?.['empty']).toBeTrue();
      });
    });

    describe('when the form group is not empty', () => {
      beforeEach(() => {
        formGroup = new UntypedFormGroup({
          control1: new UntypedFormControl(null),
          control2: new UntypedFormControl('a value'),
        }, daffFormNotEmptyValidator);
      });

      it('should not invalidate the form group', () => {
        expect(formGroup.valid).toBeTrue();
      });

      it('should not add an empty error to the form group', () => {
        expect(formGroup.errors?.['empty']).toBeFalsy();
      });
    });
  });

  describe('when the control is a control', () => {
    let control: UntypedFormControl;

    describe('when the form group is empty', () => {
      beforeEach(() => {
        control = new UntypedFormControl('', daffFormNotEmptyValidator);
      });

      it('should invalidate the form group', () => {
        expect(control.valid).toBeFalse();
      });

      it('should add an empty error to the form group', () => {
        expect(control.errors?.['empty']).toBeTrue();
      });
    });

    describe('when the form group is not empty', () => {
      beforeEach(() => {
        control = new UntypedFormControl('a value', daffFormNotEmptyValidator);
      });

      it('should not invalidate the form group', () => {
        expect(control.valid).toBeTrue();
      });

      it('should not add an empty error to the form group', () => {
        expect(control.errors?.['empty']).toBeFalsy();
      });
    });
  });
});
