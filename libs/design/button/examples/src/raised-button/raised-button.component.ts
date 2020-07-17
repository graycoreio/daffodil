import { Component } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'raised-button',
  templateUrl: './raised-button.component.html',
  styles: [`
    button[daff-raised-button],
    a[daff-raised-button] {
      margin-right: 8px;
    } 
  `]
})
export class RaisedButtonComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
}