import { Component } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'stroked-button',
  templateUrl: './stroked-button.component.html',
  styles: [`
    button[daff-stroked-button],
    a[daff-stroked-button] {
      margin: 4px;
    }
  `],
})
export class StrokedButtonComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}
