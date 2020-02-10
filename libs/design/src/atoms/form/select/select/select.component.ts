import { Component, ViewEncapsulation, Optional, Self, Input, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

import { DaffFormFieldControl } from '../../form-field/form-field-control';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'select[daff-native-select]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./select.component.scss'],
  host: {
    'class': 'daff-native-select'
  },
  encapsulation: ViewEncapsulation.None,
  providers: [{provide: DaffFormFieldControl, useExisting: DaffNativeSelectComponent}],
})

export class DaffNativeSelectComponent implements DaffFormFieldControl {
  controlType = 'native-select';
  focused = false;

  /**
   * Has the form been submitted.
   */
  @Input() formSubmitted: boolean;

  @HostListener('focus') onFocus() {
    this.focused = true;
  }

  @HostListener('blur') onBlur() {
    this.focused = false;
  }

  constructor(@Optional() @Self() public ngControl: NgControl, private _elementRef: ElementRef<HTMLInputElement>) {}

  focus() {
    this._elementRef.nativeElement.focus();
  }

}
