import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

import { DAFF_LOADING_ICON_COMPONENTS } from '@daffodil/design/loading-icon';
import { DaffToastService } from '@daffodil/design/toast';

@Component({
  selector: 'daff-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DAFF_LOADING_ICON_COMPONENTS,
  ],
})
export class DaffSwitchComponent {
  @Input() checked = false;
  @Input() loading = false;
  @Input() position: 'left' | 'right' | 'top' | 'bottom' = 'left';

  @Output() toggle = new EventEmitter<boolean>();

  constructor(private toastService: DaffToastService) {}

  onToggle() {
    try {
      this.checked = !this.checked;
      this.toggle.emit(this.checked);

    } catch (error) {
      this.toastService.open({
        title: 'Toggle Error',
        message: error.message,
        status: 'danger',
      },
      {
        duration: 5000,
      });
    }
  }

  @HostBinding('class.daff-switch--position-left') get isLeftPosition() {
    return this.position === 'left';
  }

  @HostBinding('class.daff-switch--position-right') get isRightPosition() {
    return this.position === 'right';
  }

  @HostBinding('class.daff-switch--position-top') get isTopPosition() {
    return this.position === 'top';
  }

  @HostBinding('class.daff-switch--position-bottom') get isBottomPosition() {
    return this.position === 'bottom';
  }

  @HostBinding('class.daff-switch--disabled') get disabledClass() {
    return this.disabled;
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
