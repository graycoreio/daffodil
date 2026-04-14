import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_CALLOUT_COMPONENTS } from '@daffodil/design/callout';

@Component({
  selector: 'basic-callout-example',
  templateUrl: './basic-callout.component.html',
  styleUrl: './basic-callout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FaIconComponent,
    DAFF_CALLOUT_COMPONENTS,
    DaffButtonComponent,
  ],
})
export class BasicCalloutExampleComponent {
  faTag = faTag;
}
