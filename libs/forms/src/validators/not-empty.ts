import {
  AbstractControl,
  UntypedFormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

/**
 * A form validator that passes validation when the Form control or
 * at least one of the immediate children of a Form group have a value.
 * Empty strings are considered falsy.
 */
// TODO: handle nested form groups
export const daffFormNotEmptyValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>
  (
    control instanceof UntypedFormGroup
      ? Object.values(control.controls).reduce((acc, { value }) => acc || !!value, false)
      : !!control.value
  )
    ? null
    : {
      empty: true,
    };
