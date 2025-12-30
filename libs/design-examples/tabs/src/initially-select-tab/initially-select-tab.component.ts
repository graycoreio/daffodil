import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { DAFF_PREFIX_SUFFIX_DIRECTIVES } from '@daffodil/design';
import { DAFF_TABS_COMPONENTS } from '@daffodil/design/tabs';

@Component({
  selector: 'initially-select-tab-example',
  templateUrl: './initially-select-tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_TABS_COMPONENTS,
    FaIconComponent,
    DAFF_PREFIX_SUFFIX_DIRECTIVES,
  ],
})
export class InitiallySelectTabExampleComponent {
  faInfoCircle = faInfoCircle;
}
