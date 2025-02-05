import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

import { DaffCardBaseDirective } from '../../card-base.directive';

@Component({
  selector:
    'daff-card' + ',' +
    'a[daff-card]',
  templateUrl: '../../card-base.component.html',
  styleUrls: ['./basic.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffCardComponent extends DaffCardBaseDirective {
  @HostBinding('class.daff-card') class = true;
}
