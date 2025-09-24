import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffHeroModule } from '@daffodil/design/hero';

@Component({
  selector: 'daffio-why-pwa-hero',
  templateUrl: './why-pwa-hero.component.html',
  styleUrls: ['./why-pwa-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffContainerModule,
    DaffHeroModule,
    DaffButtonModule,
  ],
})

export class DaffioWhyPwaHeroComponent {
  @HostBinding('class.daffio-why-pwa-hero') class = true;
}
