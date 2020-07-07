import { Component } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dismissable-message-bar',
  templateUrl: './dismissable-message-bar.component.html',
  styles: [`
    daff-message-bar {
      max-width: 600px;
    } 
  `]
})
export class DismissableMessageBarComponent {
    faInfoCircle = faInfoCircle;
}