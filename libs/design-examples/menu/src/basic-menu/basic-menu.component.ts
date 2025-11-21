import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DaffMenuModule } from '@daffodil/design/menu';

import { MenuContentExampleComponent } from './menu-content/menu-content.component';

@Component({
  selector: 'basic-menu-example',
  templateUrl: './basic-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffButtonComponent,
    DaffMenuModule,
  ],
})
export class BasicMenuExampleComponent {
  public menu = MenuContentExampleComponent;
}
