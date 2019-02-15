import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'daff-form-field',
  templateUrl: './form-field.component.html',
  host: {
    'class': 'daff-form-field'
  },
  encapsulation: ViewEncapsulation.None
})
export class DaffFormFieldComponent {}
