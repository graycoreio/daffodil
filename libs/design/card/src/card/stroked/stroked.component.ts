import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

import { DaffCardBaseDirective } from '../../card-base.directive';

@Component({
  selector:
    'daff-stroked-card' + ',' +
    'a[daff-stroked-card]',
  templateUrl: '../../card-base.component.html',
  styleUrls: ['./stroked.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffStrokedCardComponent extends DaffCardBaseDirective {
  @HostBinding('class.daff-stroked-card') class = true;
}
