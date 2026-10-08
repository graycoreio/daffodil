import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_MENU_COMPONENTS } from '@daffodil/design/menu';

import { NestedMenuWithClickContentExampleComponent } from './menu-content/menu-content.component';

@Component({
  selector: 'nested-menu-with-click-example',
  templateUrl: './nested-menu-with-click.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffButtonComponent,
    DAFF_MENU_COMPONENTS,
  ],
})
export class NestedMenuWithClickExampleComponent {
  public menu = NestedMenuWithClickContentExampleComponent;
}
