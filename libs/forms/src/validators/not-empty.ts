import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

/**
 * A validator for a form group that returns an error if all of its immediate children don't have a truthy value.
 * Empty strings are considered falsy.
 */
// TODO: handle nested form groups
export const daffFormNotEmptyValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>
  (
    control instanceof FormGroup
      ? Object.values(control.controls).reduce((acc, { value }) => acc || !!value, false)
      : !!control.value
  )
    ? null
    : {
      empty: true,
    };
