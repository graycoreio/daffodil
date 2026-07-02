import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';

import {
  DaffColorableDirective,
  DaffSizableDirective,
  DaffSizeAllType,
  DaffStatusableDirective,
} from '@daffodil/design';

import { DaffBeaconSpeed } from './helpers/beacon-speed';

/**
 * DaffBeaconComponent is a small indicator that draws visual attention to a specific location or element.
 */
@Component({
  selector: 'daff-beacon',
  template: '<ng-content></ng-content>',
  styleUrl: './beacon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
    {
      directive: DaffStatusableDirective,
      inputs: ['status'],
    },
    {
      directive: DaffSizableDirective,
      inputs: ['size'],
    },
  ],
  host: {
    class: 'daff-beacon',
    '[class.slow]': 'speed() === "slow"',
    '[class.normal]': 'speed() === "normal"',
    '[class.fast]': 'speed() === "fast"',
  },
})
export class DaffBeaconComponent {
  /**
   * How fast the beacon pulses.
   */
  speed = input<DaffBeaconSpeed>('normal');

  constructor() {
    inject<DaffSizableDirective<DaffSizeAllType>>(DaffSizableDirective).defaultSize = 'sm';
  }
}
