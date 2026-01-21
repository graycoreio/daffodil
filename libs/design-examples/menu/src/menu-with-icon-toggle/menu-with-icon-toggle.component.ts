import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_BASIC_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DaffMenuModule } from '@daffodil/design/menu';

import { MenuContentExampleComponent } from './menu-content/menu-content.component';

@Component({
  selector: 'menu-with-icon-toggle-example',
  templateUrl: './menu-with-icon-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_BASIC_BUTTON_COMPONENTS,
    DaffMenuModule,
    FaIconComponent,
  ],
})
export class MenuWithIconToggleExampleComponent {
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  public menuContent = MenuContentExampleComponent;
}
