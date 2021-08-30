import { Component } from '@angular/core';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'decorative-icon-theming',
  templateUrl: './decorative-icon-theming.component.html',
  styleUrls: ['./decorative-icon-theming.component.scss'],
})
export class DecorativeIconThemingComponent {
  faMobile = faMobile;
}
