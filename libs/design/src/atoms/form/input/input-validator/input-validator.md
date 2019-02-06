# Input Validator Directive

`[daff-input-validator]`  is a form validation element that can be used in forms on input elements. It sets classes and styles for errored and validated inputs.

## Inputs
- formSubmitted: boolean of whether the form has been submitted.
- formControl: angular FormControl object for the input.
- errorStateMatcher: ErrorStateMatcher object for determining error state of the input.

## Usage
```
<input daff-input-validator 
  [formSubmitted]="ngForm.submitted"
  [formControl]="formGroup.controls['inputType']"
  [errorStateMatcher]="customErrorStateMatcher"/>
```