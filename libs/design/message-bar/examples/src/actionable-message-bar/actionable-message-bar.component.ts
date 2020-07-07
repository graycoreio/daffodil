import { Component } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'actionable-message-bar',
  templateUrl: './actionable-message-bar.component.html',
  styles: [`
    daff-message-bar {
      max-width: 600px;
    } 
  `]
})
export class ActionableMessageBarComponent {
  faInfoCircle = faInfoCircle;
}