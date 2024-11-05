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

import { DAFF_LOADING_ICON_COMPONENTS } from '@daffodil/design/loading-icon';

import {
  DaffLabelPosition,
  DaffLabelPositionEnum,
} from './label-position';
import { DaffSwitchErrorMessage } from './switch-errors';

let switchUniqueId = 0;

@Component({
  selector: 'daff-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  standalone: true,
  imports: [
    DAFF_LOADING_ICON_COMPONENTS,
  ],
})
export class DaffSwitchComponent {
  @Input() checked = false;
  @Input() loading = false;
  @Input() labelPosition: DaffLabelPosition = DaffLabelPositionEnum.LEFT;
  @Input() error = false;

  _disabled = false;

  @HostBinding('attr.tabindex')
  get tabindex(): number {
    return this.disabled ? -1 : 0;
  }

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

  @Output() toggle = new EventEmitter<boolean>();

  onToggle() {
    if (!this.disabled && !this.error) {
      this.checked = !this.checked;
      this.toggle.emit(this.checked);
    } else if (this.error) {
      throw new Error(DaffSwitchErrorMessage);
    }
  }

  @Input() get disabled() {
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

}
