import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { DaffButtonComponent } from '@daffodil/design/button';
import {
  DAFF_TABS_COMPONENTS,
  DaffTabsComponent,
} from '@daffodil/design/tabs';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'custom-select-tabs',
  templateUrl: './custom-select-tabs.component.html',
  styleUrl: './custom-select-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_TABS_COMPONENTS,
    DaffButtonComponent,
    FaIconComponent,
  ],
})
export class CustomSelectTabsComponent {
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
