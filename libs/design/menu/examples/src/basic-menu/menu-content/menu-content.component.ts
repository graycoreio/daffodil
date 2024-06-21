import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import {
  faEnvelope,
  faInfo,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import {
  DaffComponentWithMenu,
  DaffMenuComponent,
} from '@daffodil/design/menu';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'menu-content',
  templateUrl: './menu-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuContentComponent implements DaffComponentWithMenu {
  faUser = faUser;
  faInfo = faInfo;
  faEnvelope = faEnvelope;

  @ViewChild(DaffMenuComponent, { read: DaffMenuComponent, static: true }) menu;
}
