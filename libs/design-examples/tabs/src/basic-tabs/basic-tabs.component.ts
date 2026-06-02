import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faAlignLeft,
  faListUl,
  faTruck,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_PREFIX_SUFFIX_DIRECTIVES } from '@daffodil/design';
import { DAFF_TABS_COMPONENTS } from '@daffodil/design/tabs';

@Component({
  selector: 'basic-tabs-example',
  templateUrl: './basic-tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_TABS_COMPONENTS,
    FaIconComponent,
    DAFF_PREFIX_SUFFIX_DIRECTIVES,
  ],
})
export class BasicTabsExampleComponent {
  faAlignLeft = faAlignLeft;
  faListUl = faListUl;
  faTruck = faTruck;
  faStar = faStar;
}
