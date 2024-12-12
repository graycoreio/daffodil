import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

import { DaffErrorMessageModule } from '@daffodil/design';
import { DAFF_LOADING_ICON_COMPONENTS } from '@daffodil/design/loading-icon';

import {
  DaffLabelPosition,
  DaffLabelPositionEnum,
} from './label-position';

let switchUniqueId = 0;

/**
 * The switch component provides a way to toggle between two settings.
 *
 * ## Usage
 * <daff-switch [checked]="checked" loading="loading" [error]="true" [labelPosition]="daff-left">
 *    Label
 *    <daff-error-message>Error message</daff-error-message>
 * </daff-switch>
 */
@Component({
  selector: 'daff-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  standalone: true,
  imports: [
    DAFF_LOADING_ICON_COMPONENTS,
    DaffErrorMessageModule,
  ],
})
export class DaffSwitchComponent {
  /**
   * Whether the switch is disabled and/or loading.
   */
  @Input() @HostBinding('class.daff-disabled') get disabled() {
    return this._disabled || this.loading;
  }
  set disabled(value: any) {
    this._disabled = coerceBooleanProperty(value);
  }

  @HostBinding('attr.disabled') get disabledAttribute() {
    return this.disabled ? true : null;
  }

  @HostBinding('attr.aria-disabled') get ariaDisabled() {
    return this.disabled ? true : null;
  }

  @HostBinding('class') get classes() {
    return `daff-switch ${this.labelPosition}`;
  }

  /**
   * Whether the switch is loading.
   */
  @Input() @HostBinding('class.daff-loading') loading = false;

  /**
   * Current state of switch (on/off).
   */
  @Input() checked = false;

  /**
   * The position of the label relative to the switch. Defaults to 'daff-left'.
   */
  @Input() labelPosition: DaffLabelPosition = DaffLabelPositionEnum.LEFT;

  /**
   * Whether the switch shows an error.
   */
  @Input() error = false;

  _disabled = false;

  @HostListener('keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.code === 'Space') {
      event.preventDefault();
      this.onToggle();
    }
  }

  /**
   * @docs-private
   */
  @HostBinding('attr.aria-label') private externalAriaLabel = null;

  /**
   * aria-label for the switch.
   */
  @Input('aria-label') ariaLabel = '';

  @Input() id: string = 'daff-switch-' + switchUniqueId++;

  @Output() toggled = new EventEmitter<boolean>();

  onToggle() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.toggled.emit(this.checked);
    }
  }
}
