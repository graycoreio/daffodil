import { Component } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'icon-list',
  templateUrl: './icon-list.component.html',
})
export class IconListComponent {
  faInfoCircle = faInfoCircle;
}