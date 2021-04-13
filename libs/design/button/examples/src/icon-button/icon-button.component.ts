import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'icon-button',
  templateUrl: './icon-button.component.html',
  styles: [`
    button[daff-button],
    a[daff-button] {
      margin: 4px;
    }
  `],
})
export class IconButtonComponent {
  faPlus = faPlus;
}
