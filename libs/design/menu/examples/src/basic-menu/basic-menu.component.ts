import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { MenuContentComponent } from './menu-content/menu-content.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-menu',
  templateUrl: './basic-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicMenuComponent {
  public menu = MenuContentComponent;
}
