import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

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
  faInfoCircle = faInfoCircle;

  selectedTab = 'tab-3';

  @ViewChild(DaffTabsComponent) _tab: DaffTabsComponent;

  selectTabThree() {
    this._tab.select('tab-3');
  }

  selectTabFive() {
    this._tab.select('tab-5');
  }
}
