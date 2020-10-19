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
	/**
	 * @docs-private
	 */
  controlType = 'native-select';
	
  /**
	 * Has the form been submitted.
   */
	@Input() formSubmitted: boolean;
	focused = false;

	/**
	 * @docs-private
	 */
  @HostListener('focus') focus() {
    this.focused = true;
  }

	/**
	 * @docs-private
	 */
  @HostListener('blur') blur() {
    this.focused = false;
  }

  constructor(
		/**
		 * @docs-private
		 */
		@Optional() @Self() public ngControl: NgControl, 
		private _elementRef: ElementRef<HTMLInputElement>
	) {}

  onFocus() {
    this._elementRef.nativeElement.focus();
  }

}
