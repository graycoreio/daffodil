import { FormControl } from "@angular/forms";

export class ErrorStateMatcher {
  
  isErrorState(control: FormControl, formSubmitted: boolean): boolean {
    return control.errors && (control.touched || formSubmitted);
  }
}
