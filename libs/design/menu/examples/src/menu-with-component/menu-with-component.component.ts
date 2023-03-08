import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { MenuContentComponent } from './menu-content/menu-content.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'menu-with-component',
  templateUrl: './menu-with-component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuWithComponentComponent {
  public menu = MenuContentComponent;
}
