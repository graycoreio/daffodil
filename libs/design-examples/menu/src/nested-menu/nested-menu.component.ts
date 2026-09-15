import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_MENU_COMPONENTS } from '@daffodil/design/menu';

import { NestedMenuContentExampleComponent } from './menu-content/menu-content.component';

@Component({
  selector: 'nested-menu-example',
  templateUrl: './nested-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffButtonComponent,
    DAFF_MENU_COMPONENTS,
  ],
})
export class NestedMenuExampleComponent {
  public menu = NestedMenuContentExampleComponent;
}
