import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faArrowRightFromBracket,
  faGear,
  faPenToSquare,
  faShareNodes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_MENU_COMPONENTS } from '@daffodil/design/menu';

@Component({
  selector: 'nested-menu-content',
  templateUrl: './menu-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_MENU_COMPONENTS,
    FaIconComponent,
  ],
})
export class NestedMenuContentExampleComponent {
  faUser = faUser;
  faPenToSquare = faPenToSquare;
  faGear = faGear;
  faShareNodes = faShareNodes;
  faArrowRightFromBracket = faArrowRightFromBracket;
}
