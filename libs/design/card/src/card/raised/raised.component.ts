import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

import { DaffCardBaseDirective } from '../../card-base.directive';

@Component({
  selector:
    'daff-raised-card' + ',' +
    'a[daff-raised-card]',
  templateUrl: '../../card-base.component.html',
  styleUrls: ['./raised.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffRaisedCardComponent extends DaffCardBaseDirective {
  @HostBinding('class.daff-raised-card') class = true;
}
