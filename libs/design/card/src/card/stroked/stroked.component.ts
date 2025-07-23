/* eslint-disable quote-props */
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffCardBaseDirective } from '../../card-base.directive';

@Component({
  selector:
    'daff-stroked-card' + ',' +
    'a[daff-stroked-card]',
  templateUrl: '../../card-base.component.html',
  styleUrls: ['./stroked.component.scss'],
  host: {
    'class': 'daff-stroked-card',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffStrokedCardComponent extends DaffCardBaseDirective {}
