import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffContainerModule } from '@daffodil/design/container';
import { DaffNavbarModule } from '@daffodil/design/navbar';

import { DaffioHeaderItemDirective } from '../header-item/header-item.directive';

@Component({
  selector: 'daffio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    DaffNavbarModule,
    DaffContainerModule,
    DaffioHeaderItemDirective,
  ],
})

export class DaffioHeaderComponent {
  @HostBinding('class.daffio-header') class = true;
  @Input() @HostBinding('class.bordered') bordered = false;
}
