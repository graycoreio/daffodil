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
  selector: 'menu-with-id-content',
  templateUrl: './menu-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_MENU_COMPONENTS,
    FaIconComponent,
  ],
})
export class MenuWithIdContentExampleComponent {
  faUser = faUser;
  faInfo = faInfo;
  faEnvelope = faEnvelope;
}
