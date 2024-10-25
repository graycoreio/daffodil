import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

import { DAFF_LOADING_ICON_COMPONENTS } from '@daffodil/design/loading-icon';

import {
  DaffLabelPosition,
  DaffLabelPositionEnum,
} from './label-position';
import { DaffSwitchErrorMessage } from './switch-errors';

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

  @Output() toggle = new EventEmitter<boolean>();

  onToggle() {
    try {
      this.checked = !this.checked;
      this.toggle.emit(this.checked);
    } catch (error) {
      throw new Error(DaffSwitchErrorMessage);
    }
  }

  _disabled = false;

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
