import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DaffMenuModule } from '@daffodil/design/menu';

import { MenuContentComponent } from './menu-content/menu-content.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-menu',
  templateUrl: './basic-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DAFF_BUTTON_COMPONENTS,
    DaffMenuModule,
  ],
})
export class BasicMenuComponent {
  public menu = MenuContentComponent;
}
