import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faEnvelope,
  faInfo,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_MENU_COMPONENTS } from '@daffodil/design/menu';

@Component({
  selector: 'menu-with-position-content',
  templateUrl: './menu-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_MENU_COMPONENTS,
    FaIconComponent,
  ],
})
export class MenuWithPositionContentExampleComponent {
  faUser = faUser;
  faInfo = faInfo;
  faEnvelope = faEnvelope;
}
