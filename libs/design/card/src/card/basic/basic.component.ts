/* eslint-disable quote-props */
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffCardBaseDirective } from '../../card-base.directive';

@Component({
  selector:
    'daff-card' + ',' +
    'a[daff-card]',
  templateUrl: '../../card-base.component.html',
  styleUrls: ['./basic.component.scss'],
  host: {
    'class': 'daff-card',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffCardComponent extends DaffCardBaseDirective {}
