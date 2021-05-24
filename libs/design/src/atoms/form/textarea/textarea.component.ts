import {
  Component,
  Input,
  Optional,
  Self,
  ChangeDetectionStrategy,
  HostListener,
  ElementRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';

import { DaffFormFieldControl } from '../form-field/form-field-control';

/**
 * A component for standardizing textarea form fields.
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'textarea[daff-textarea]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
		 { provide: DaffFormFieldControl, useExisting: DaffTextareaComponent },
  ],
})
export class DaffTextareaComponent implements DaffFormFieldControl {

  focused = false;

  get disabled() {
    return this.ngControl.disabled;
  }

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
