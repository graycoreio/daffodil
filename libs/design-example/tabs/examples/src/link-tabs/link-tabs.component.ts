import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { DaffPrefixSuffixModule } from '@daffodil/design';
import { DAFF_TABS_COMPONENTS } from '@daffodil/design/tabs';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'link-tabs',
  templateUrl: './link-tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_TABS_COMPONENTS,
    FaIconComponent,
    DaffPrefixSuffixModule,
  ],
})
export class LinkTabsComponent {
  faInfoCircle = faInfoCircle;
}
