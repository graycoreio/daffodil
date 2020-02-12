import { Component, Input, Optional, Self, ElementRef, HostListener } from '@angular/core';
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

  focused = false;

  /**
   * Has the form been submitted.
   */
  @Input() formSubmitted: boolean;

  @HostListener('focus') focus() {
    this.focused = true;
  }

  @HostListener('blur') blur() {
    this.focused = false;
  }

  constructor(@Optional() @Self() public ngControl: NgControl, private _elementRef: ElementRef<HTMLInputElement>) {}

  onFocus() {
    this._elementRef.nativeElement.focus();
  }
}