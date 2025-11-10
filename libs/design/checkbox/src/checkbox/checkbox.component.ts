import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  ContentChild,
  Optional,
  Inject,
  ViewEncapsulation,
  booleanAttribute,
} from '@angular/core';
import {
  NgControl,
  Validators,
} from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { DaffDisableableDirective } from '@daffodil/design';
import {
  DaffErrorMessageComponent,
  DaffHintComponent,
} from '@daffodil/design/form-field';

import { DAFF_CHECKBOX_SET } from '../helpers/checkbox-set-token';

let uniqueCheckboxId = 0;

@Component({
  selector: 'daff-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  hostDirectives: [
    {
      directive: DaffDisableableDirective,
      inputs: ['disabled'],
    },
  ],
  host: {
    class: 'daff-checkbox',
    role: 'checkbox',
    '[class.focused]': 'focused',
    '[class.checked]': 'checked',
  },
  imports: [
    FaIconComponent,
  ],
})
export class DaffCheckboxComponent {
  /**
   * @docs-private
   */
  readonly faCheck = faCheck;

  /**
   * @docs-private
   */
  @ViewChild('inputElement', { static: true, read: ElementRef }) nativeCheckbox: ElementRef<HTMLInputElement>;

  constructor(
    private _cdRef: ChangeDetectorRef,
    private disabledDirective: DaffDisableableDirective,
    @Optional() @Inject(DAFF_CHECKBOX_SET) private checkboxSet: unknown,
    @Optional() private ngControl: NgControl,
  ) {
    uniqueCheckboxId++;
  }

  /**
   * The name of the checkbox.
   */
  @Input() name: string;

  /**
   * The value of the checkbox.
   */
  @Input() value: any;

  private _required = false;

  /**
   * Whether the checkbox is required. When used with Angular forms, this will automatically
   * be set if the form control has the `Validators.required` validator.
   */
  @Input({ transform: booleanAttribute })
  get required(): boolean {
    return this.ngControl?.control?.hasValidator(Validators.required) ?? this._required;
  }
  set required(value: boolean) {
    this._required = value;
  }

  private _checked = false;

  /**
   * Whether the checkbox is checked.
   */
  @Input()
  get checked() {
    return this._checked;
  }
  set checked(value: boolean) {
    if (this._checked === value) {
      return;
    }
    if (value === true) {
      this.nativeCheckbox.nativeElement.checked = true;
      this.becameChecked.emit(this._checked);
    } else {
      this.nativeCheckbox.nativeElement.checked = false;
      this.becameUnchecked.emit();
    }

    this._checked = value;
  }

  /**
   * The id of the checkbox. Must be unique. If not entered by a user then it is generated.
   */
  @Input() id: string = 'daff-checkbox-' + uniqueCheckboxId;

  /**
   * Event fired when a checkbox has been checked.
   */
  @Output() becameChecked: EventEmitter<boolean> = new EventEmitter();

  /**
   * Event fired when a checkbox has been unchecked.
   */
  @Output() becameUnchecked: EventEmitter<void> = new EventEmitter();

  /**
   * The disabled state of the checkbox. When used with Angular forms, this will automatically
   * be set if the form control is disabled.
   */
  get disabled() {
    return this.ngControl?.disabled ?? this.disabledDirective.disabled;
  }
  set disabled(value: any) {
    this.disabledDirective.disabled = coerceBooleanProperty(value);
  }

  /**
   * @docs-private
   */
  _onChange(evt: Event) {
    if ((<HTMLInputElement>evt.target).checked) {
      this.select();
    } else {
      this.deselect();
    }
  };

  /**
   * @docs-private
   *
   * Whether the checkbox is focused.
   */
  focused = false;

  /**
   * Sets focused to false.
   */
  onBlur() {
    this.focused = false;
  }

  /**
   * Sets focused to true.
   */
  onFocus() {
    this.focused = true;
  }

  /**
   * @docs-private
   */
  get hasCheckboxSet() {
    return !!this.checkboxSet;
  }

  /**
   * Sets checked to true.
   */
  select() {
    this.checked = true;
    this._cdRef.markForCheck();
  }

  /**
   * Sets checked to false.
   */
  deselect() {
    this.checked = false;
    this._cdRef.markForCheck();
  }

  /**
   * @docs-private
   */
  @ContentChild(DaffHintComponent) private _hint: DaffHintComponent;

  /**
   * @docs-private
   */
  hasHint() {
    return this._hint ? true : false;
  }

  /**
   * @docs-private
   */
  hintId = this.id + '-hint';

  /**
   * @docs-private
   */
  @ContentChild(DaffErrorMessageComponent) private _error: DaffErrorMessageComponent;

  /**
   * @docs-private
   */
  hasErrorMessage() {
    return this._error ? true : false;
  }

  /**
   * @docs-private
   */
  errorMessageId = this.id + '-error';

  /**
   * @docs-private
   */
  get ariaDescribedBy() {
    if(this.hasErrorMessage()) {
      return this.errorMessageId;
    } else if(this.hasHint()) {
      return this.hintId;
    } else {
      return null;
    }
  }
}
