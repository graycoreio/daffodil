import { Component, ViewEncapsulation, Optional, Self, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

import { DaffFormFieldControl } from '../form-field/form-field-control';

/**
 * DaffInputComponent provides the same functionality as a native `<input>` and contains custom styling and functionality.
 */
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'input[daff-input]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./input.component.scss'],
  providers: [
    {provide: DaffFormFieldControl, useExisting: DaffInputComponent}
  ],
})
export class DaffInputComponent implements DaffFormFieldControl {

  @Input() formSubmitted: boolean;
  
  constructor(@Optional() @Self() public ngControl: NgControl) {}

}