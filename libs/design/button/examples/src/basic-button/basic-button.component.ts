import { Component } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'basic-button',
  templateUrl: './basic-button.component.html',
  styles: [`
    button[daff-button],
    a[daff-button] {
      margin-right: 8px;
    } 
  `]
})
export class BasicButtonComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}