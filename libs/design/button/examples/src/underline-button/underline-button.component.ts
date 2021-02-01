import { Component } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'underline-button',
  templateUrl: './underline-button.component.html',
  styles: [`
    button[daff-underline-button],
    a[daff-underline-button] {
      margin-right: 8px;
    }
  `],
})
export class UnderlineButtonComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}
