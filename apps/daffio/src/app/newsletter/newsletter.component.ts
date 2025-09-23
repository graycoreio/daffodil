import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffFormFieldModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffInputModule } from '@daffodil/design/input';

@Component({
  selector: 'daffio-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffInputModule,
    DaffButtonModule,
    DaffContainerModule,
    DaffFormFieldModule,
  ],
})
export class DaffioNewsletterComponent {}
