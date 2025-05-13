import {
  Component,
  Optional,
  Self,
  ElementRef,
  HostListener,
  ChangeDetectionStrategy,
  HostBinding,
  OnInit,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import {
  map,
  merge,
  of,
} from 'rxjs';

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
export class DaffTextareaComponent extends DaffFormFieldControl<string> implements DaffFormFieldControl<string>, OnInit {

  /** @docs-private */
  controlType = 'native-textarea';

  /**
   * @docs-private
   */
  @HostBinding('class.daff-textarea') class = true;

  /**
   * @docs-private
   */
  focused = false;

  /**
   * @docs-private
   */
  @HostListener('focus') focus() {
    this.focused = true;
    this.emitState();
  }

  /**
   * @docs-private
   */
  @HostListener('blur') blur() {
    this.focused = false;
    this.emitState();
  }

  constructor(
    /**
     * @docs-private
     */
    @Optional() @Self() public ngControl: NgControl,
    private _elementRef: ElementRef<HTMLInputElement>,
  ) {
    super(ngControl);
  }

  /** @docs-private */
  ngOnInit() {
    this.stateChanges = merge(
      this._stateChanges.asObservable(),
      this.ngControl ? this.ngControl.statusChanges : of(undefined),
    ).pipe(
      map(() => this.state),
    );
  }

  /**
   * @docs-private
   */
  onFocus() {
    this._elementRef.nativeElement.focus();
  }

  /**
   * @docs-private
   */
  get value() {
    return this._elementRef.nativeElement.value;
  }
}
