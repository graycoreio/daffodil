import { Component } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'default-message-bar',
  templateUrl: './default-message-bar.component.html',
  styles: [`
    daff-message-bar {
      max-width: 600px;
    } 
  `]
})
export class DefaultMessageBarComponent {
  faInfoCircle = faInfoCircle;
}