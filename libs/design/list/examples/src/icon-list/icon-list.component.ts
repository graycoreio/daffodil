import { Component } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'icon-list',
  templateUrl: './icon-list.component.html',
})
export class IconListComponent {
  faInfoCircle = faInfoCircle;
}