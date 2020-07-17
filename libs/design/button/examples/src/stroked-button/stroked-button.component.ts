import { Component } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'stroked-button',
  templateUrl: './stroked-button.component.html',
  styles: [`
    button[daff-stroked-button],
    a[daff-stroked-button] {
      margin-right: 8px;
    } 
  `]
})
export class StrokedButtonComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}