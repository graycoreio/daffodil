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
  @Input() @HostBinding('class.disabled') get disabled() {
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
    return {
      'daff-switch': true,
      [this.labelPosition]: true,
    };
  };

  @Input() @HostBinding('class.loading') loading = false;

  @Input() checked = false;
  @Input() labelPosition: DaffLabelPosition = DaffLabelPositionEnum.LEFT;
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

  @Output() toggle = new EventEmitter<boolean>();

  onToggle() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.toggle.emit(this.checked);
    }
  }
}
