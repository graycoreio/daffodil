import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

import {
  DaffButtonComponent,
  DaffUnderlineButtonComponent,
} from '@daffodil/design/button';
import { DAFF_CALLOUT_COMPONENTS } from '@daffodil/design/callout';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'callout-with-grid',
  templateUrl: './callout-with-grid.component.html',
  styleUrls: ['./callout-with-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DAFF_CALLOUT_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    FaIconComponent,
    DaffButtonComponent,
    DaffUnderlineButtonComponent,
  ],
})
export class CalloutWithGridComponent {
  faMobile = faMobile;
}
