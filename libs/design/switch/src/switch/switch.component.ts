/* eslint-disable quote-props */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  DaffDisableableDirective,
  DaffSizableDirective,
  DaffSizeSmallType,
} from '@daffodil/design';

import {
  DaffSwitchLabelPosition,
  DaffSwitchLabelPositionEnum,
} from './label-position';

let switchUniqueLabelId = 0;
let switchUniqueToggleId = 0;

export type DaffSwitchSize = DaffSizeSmallType;

/**
 * The switch component provides a way to toggle between two settings.
 *
 * ```html
 * <daff-switch>Label</daff-switch>
 * ```
 */
@Component({
  selector: 'daff-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  hostDirectives: [
    {
      directive: DaffSizableDirective,
      inputs: ['size'],
    },
    {
      directive: DaffDisableableDirective,
      inputs: ['disabled'],
    },
  ],
  host: {
    'class': 'daff-switch',
    '[class.checked]': 'checked',
    '[class.left]': 'labelPosition === "left"',
    '[class.right]': 'labelPosition === "right"',
    '[class.top]': 'labelPosition === "top"',
    '[class.bottom]': 'labelPosition === "bottom"',
    '(keydown)': 'handleKeydown($event)',
  },
})
export class DaffSwitchComponent extends DaffSizableDirective<DaffSwitchSize> {
  /**
   * The position of the label relative to the switch.
   */
  @Input() labelPosition: DaffSwitchLabelPosition = DaffSwitchLabelPositionEnum.LEFT;

  constructor(private disabledDirective: DaffDisableableDirective) {
    super();
  }

  /**
   * Whether the switch is disabled.
   */
  @Input() get disabled() {
    return this.disabledDirective.disabled;
  }
  set disabled(value: any) {
    this.disabledDirective.disabled = coerceBooleanProperty(value);
  }

  /**
   * Current state of switch (on/off).
   */
  @Input() checked = false;

  /**
   * @docs-private
   */
  labelId: string = 'daff-switch-' + switchUniqueLabelId++ + '-label';

  /**
   * @docs-private
   */
  toggleId: string = 'daff-switch-' + switchUniqueToggleId++;

  /**
   * Output event triggered when the switch has been toggled.
   */
  @Output() toggled = new EventEmitter<boolean>();

  /**
   * @docs-private
   */
  onToggle() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.toggled.emit(this.checked);
    }
  }

  private handleKeydown(event: KeyboardEvent) {
    if (event.code === 'Space') {
      event.preventDefault();
      this.onToggle();
    }
  }
}
