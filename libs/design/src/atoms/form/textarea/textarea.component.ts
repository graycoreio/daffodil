import {
  Component,
  Input,
  Optional,
  Self,
  ElementRef,
  HostListener,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';
import { NgControl } from '@angular/forms';

import { DaffFormFieldControl } from '../form-field/form-field-control';

/**
 * DaffTextareaComponent provides the same functionality as a native `<textarea>` and contains custom styling and functionality.
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
export class DaffTextareaComponent implements DaffFormFieldControl<string> {

  @HostBinding('class.daff-textarea') class = true;

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
    private _elementRef: ElementRef<HTMLInputElement>,
  ) {}

  onFocus() {
    this._elementRef.nativeElement.focus();
  }

  get value() {
    return this._elementRef.nativeElement.value;
  }
}
