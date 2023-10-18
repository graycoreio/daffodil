import { TestBed } from '@angular/core/testing';
import {
  UntypedFormControl,
  UntypedFormGroup,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';

import { daffFormNotEmptyValidator } from './not-empty';

describe('@daffodil/design | daffFormNotEmptyValidator | unit', () => {
  let result: ReturnType<typeof daffFormNotEmptyValidator>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
    });
  });

  describe('when the control is a form group', () => {
    let formGroup: UntypedFormGroup;

    describe('and when the form group is empty', () => {
      beforeEach(() => {
        formGroup = new UntypedFormGroup({
          control1: new UntypedFormControl(null),
          control2: new UntypedFormControl(''),
        });
        result = daffFormNotEmptyValidator(formGroup);
      });

      it('should return an empty error', () => {
        expect(result?.['empty']).toBeTrue();
      });
    });

    describe('and when the form group is not empty', () => {
      beforeEach(() => {
        formGroup = new UntypedFormGroup({
          control1: new UntypedFormControl(null),
          control2: new UntypedFormControl('a value'),
        });
        result = daffFormNotEmptyValidator(formGroup);
      });

      it('should return null', () => {
        expect(formGroup.errors).toBeNull();
      });
    });
  });

  describe('when the control is a control', () => {
    let control: UntypedFormControl;

    describe('and when the form group is empty', () => {
      beforeEach(() => {
        control = new UntypedFormControl(null);
        result = daffFormNotEmptyValidator(control);
      });

      it('should return an empty error', () => {
        expect(result?.['empty']).toBeTrue();
      });
    });

    describe('and when the form group is not empty', () => {
      beforeEach(() => {
        control = new UntypedFormControl('a value');
        result = daffFormNotEmptyValidator(control);
      });

      it('should return null', () => {
        expect(control.errors).toBeNull();
      });
    });
  });
});
