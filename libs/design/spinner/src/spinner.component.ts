import {
  Component,
  ChangeDetectionStrategy,
  input,
  ContentChild,
} from '@angular/core';

import {
  DaffColorableDirective,
  DaffSizableDirective,
  DaffSizeAllType,
} from '@daffodil/design';

import { DaffSpinnerLabelDirective } from './spinner-label/spinner-label.directive';

/**
 * DaffSpinnerComponent is an animated indicator that lets users know content or action is being loaded.
 */
@Component({
  selector: 'daff-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  host: {
    class: 'daff-spinner',
    role: 'status',
    '[attr.aria-label]': 'ariaLabel',
  },
  hostDirectives: [
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
    {
      directive: DaffSizableDirective,
      inputs: ['size'],
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffSpinnerComponent {
  /**
   * @docs-private
   */
  @ContentChild(DaffSpinnerLabelDirective) _label: DaffSpinnerLabelDirective;

  private static readonly SIZE_MAP: Record<DaffSizeAllType, number> = {
    xs: 12,
    sm: 16,
    md: 32,
    lg: 40,
    xl: 48,
  };

  /**
   * The `aria-label` for the spinner. Defaults to "loading".
   */
  'aria-label' = input('loading');

  /**
   * @docs-private
   */
  get ariaLabel() {
    if (!this._label) {
      return this['aria-label']();
    }
  }

  /**
   * @docs-private
   *
   * The dimension (width/height) based on the size.
   */
  get dimension() {
    return DaffSpinnerComponent.SIZE_MAP[this.sizable.size];
  }

  constructor(
    private sizable: DaffSizableDirective<DaffSizeAllType>,
  ) {
    this.sizable.defaultSize = 'md';
  }
}
