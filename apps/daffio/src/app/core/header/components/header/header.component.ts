import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import { DaffNavbarModule } from '@daffodil/design/navbar';

@Component({
  selector: 'daffio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffNavbarModule,
  ],
})

export class DaffioHeaderComponent {
  @HostBinding('class.daffio-header') class = true;
  @Input() @HostBinding('class.bordered') bordered = false;
}
