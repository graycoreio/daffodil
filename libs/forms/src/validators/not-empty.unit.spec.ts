import { TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
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
    let formGroup: FormGroup;

    describe('and when the form group is empty', () => {
      beforeEach(() => {
        formGroup = new FormGroup({
          control1: new FormControl(null),
          control2: new FormControl(''),
        });
        result = daffFormNotEmptyValidator(formGroup);
      });

      it('should return an empty error', () => {
        expect(result?.['empty']).toBeTrue();
      });
    });

    describe('and when the form group is not empty', () => {
      beforeEach(() => {
        formGroup = new FormGroup({
          control1: new FormControl(null),
          control2: new FormControl('a value'),
        });
        result = daffFormNotEmptyValidator(formGroup);
      });

      it('should return null', () => {
        expect(formGroup.errors).toBeNull();
      });
    });
  });

  describe('when the control is a control', () => {
    let control: FormControl;

    describe('and when the form group is empty', () => {
      beforeEach(() => {
        control = new FormControl(null);
        result = daffFormNotEmptyValidator(control);
      });

      it('should return an empty error', () => {
        expect(result?.['empty']).toBeTrue();
      });
    });

    describe('and when the form group is not empty', () => {
      beforeEach(() => {
        control = new FormControl('a value');
        result = daffFormNotEmptyValidator(control);
      });

      it('should return null', () => {
        expect(control.errors).toBeNull();
      });
    });
  });
});
