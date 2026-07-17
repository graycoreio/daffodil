import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faArrowRightFromBracket,
  faBox,
  faEnvelope,
  faGear,
  faInfo,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_MENU_COMPONENTS } from '@daffodil/design/menu';

@Component({
  selector: 'menu-content',
  templateUrl: './menu-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_MENU_COMPONENTS,
    FaIconComponent,
  ],
})
export class MenuContentExampleComponent {
  faUser = faUser;
  faBox = faBox;
  faGear = faGear;
  faInfo = faInfo;
  faEnvelope = faEnvelope;
  faArrowRightFromBracket = faArrowRightFromBracket;
}
