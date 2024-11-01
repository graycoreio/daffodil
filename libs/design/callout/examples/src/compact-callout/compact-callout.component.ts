import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_CALLOUT_COMPONENTS } from '@daffodil/design/callout';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'compact-callout',
  templateUrl: './compact-callout.component.html',
  styleUrls: ['./compact-callout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DAFF_CALLOUT_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    FaIconComponent,
    DaffButtonComponent,
  ],
})
export class CompactCalloutComponent {
  faMobile = faMobile;
}
