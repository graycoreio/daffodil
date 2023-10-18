import { UntypedFormControl } from '@angular/forms';

export class DaffErrorStateMatcher {

  isErrorState(control: UntypedFormControl, formSubmitted: boolean): boolean {
    return control.errors && (control.touched || formSubmitted);
  }
}
