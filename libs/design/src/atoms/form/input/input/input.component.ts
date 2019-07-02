import { Component, ViewEncapsulation, Optional, Self, Input, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

import { DaffFormFieldControl } from '../../form-field/form-field-control';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'input[daff-input]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./input.component.scss'],
  host: {
    'class': 'daff-input'
  },
  encapsulation: ViewEncapsulation.None,
  providers: [{provide: DaffFormFieldControl, useExisting: DaffInputComponent}],
})

export class DaffInputComponent implements DaffFormFieldControl<any> {
  @Input() formSubmitted: boolean;

  focused = false;

  focus() {
    this.focused = true;
    this._elementRef.nativeElement.focus();
  }

  @HostListener('focus') onFocus() {
    this.focused = true;
  }

  @HostListener('blur') onBlur() {
    this.focused = false;
  }
  
  constructor(
    @Optional() @Self() public ngControl: NgControl, 
    private _elementRef: ElementRef<HTMLInputElement>
  ) {}

}