import { Component } from '@angular/core';
import { faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'design-land-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.scss']
})
export class DesignLandMessageBarComponent {
  faInfoCircle = faInfoCircle;
  faTimes = faTimes;
}