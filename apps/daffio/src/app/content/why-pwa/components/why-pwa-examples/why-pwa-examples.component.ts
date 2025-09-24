import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';

import { DaffCalloutModule } from '@daffodil/design/callout';
import { DaffCardModule } from '@daffodil/design/card';
import { DaffContainerModule } from '@daffodil/design/container';

@Component({
  selector: 'daffio-why-pwa-examples',
  templateUrl: './why-pwa-examples.component.html',
  styleUrls: ['./why-pwa-examples.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffContainerModule,
    DaffCalloutModule,
    DaffCardModule,
  ],
})

export class DaffioWhyPwaExamplesComponent {
  @HostBinding('class.daffio-why-pwa-examples') class = true;
}
