import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DaffMenuModule } from '@daffodil/design/menu';

import { MenuWithIdContentExampleComponent } from './menu-content/menu-content.component';

@Component({
  selector: 'menu-with-id-example',
  templateUrl: './menu-with-id.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffButtonComponent,
    DaffMenuModule,
  ],
})
export class MenuWithIdExampleComponent {
  public menu = MenuWithIdContentExampleComponent;
}
