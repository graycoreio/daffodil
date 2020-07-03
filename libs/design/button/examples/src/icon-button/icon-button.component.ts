import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'icon-button',
  templateUrl: './icon-button.component.html'
})
export class IconButtonComponent {
  faPlus = faPlus;
}