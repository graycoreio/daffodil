import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DaffCalloutModule } from '@daffodil/design/callout';
import { DaffContainerModule } from '@daffodil/design/container';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'callout-with-grid',
  templateUrl: './callout-with-grid.component.html',
  styleUrls: ['./callout-with-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffCalloutModule,
    DaffContainerModule,
    FaIconComponent,
    DAFF_BUTTON_COMPONENTS,
  ],
})
export class CalloutWithGridComponent {
  faMobile = faMobile;
}
