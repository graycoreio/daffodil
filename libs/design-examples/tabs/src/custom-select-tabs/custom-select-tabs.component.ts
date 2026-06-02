import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faAlignLeft,
  faListUl,
  faTruck,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_PREFIX_SUFFIX_DIRECTIVES } from '@daffodil/design';
import { DaffButtonComponent } from '@daffodil/design/button';
import {
  DAFF_TABS_COMPONENTS,
  DaffTabsComponent,
} from '@daffodil/design/tabs';

@Component({
  selector: 'custom-select-tabs-example',
  templateUrl: './custom-select-tabs.component.html',
  styleUrl: './custom-select-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_TABS_COMPONENTS,
    DaffButtonComponent,
    FaIconComponent,
    DAFF_PREFIX_SUFFIX_DIRECTIVES,
  ],
})
export class CustomSelectTabsExampleComponent {
  faAlignLeft = faAlignLeft;
  faListUl = faListUl;
  faTruck = faTruck;
  faStar = faStar;

  @ViewChild(DaffTabsComponent) _tab: DaffTabsComponent;

  selectShipping() {
    this._tab.select('shipping');
  }

  selectReviews() {
    this._tab.select('reviews');
  }
}
