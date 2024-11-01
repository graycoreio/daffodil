import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DaffMenuModule } from '@daffodil/design/menu';

import { MenuContentComponent } from './menu-content/menu-content.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-menu',
  templateUrl: './basic-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffButtonComponent,
    DaffMenuModule,
  ],
})
export class BasicMenuComponent {
  public menu = MenuContentComponent;
}
