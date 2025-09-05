/* eslint-disable quote-props */
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffCardBaseDirective } from '../../card-base.directive';

/**
 * @deprecated Deprecated in version 0.88.0. Will be removed in version 0.91.0.
 */
@Component({
  selector:
    'daff-raised-card' + ',' +
    'a[daff-raised-card]',
  templateUrl: '../../card-base.component.html',
  styleUrls: ['./raised.component.scss'],
  host: {
    'class': 'daff-raised-card',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffRaisedCardComponent extends DaffCardBaseDirective {}
