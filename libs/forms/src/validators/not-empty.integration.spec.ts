import { TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
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
    let formGroup: FormGroup;

    describe('when the form group is empty', () => {
      beforeEach(() => {
        formGroup = new FormGroup({
          control1: new FormControl(null),
          control2: new FormControl(''),
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
        formGroup = new FormGroup({
          control1: new FormControl(null),
          control2: new FormControl('a value'),
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
    let control: FormControl;

    describe('when the form group is empty', () => {
      beforeEach(() => {
        control = new FormControl('', daffFormNotEmptyValidator);
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
        control = new FormControl('a value', daffFormNotEmptyValidator);
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
