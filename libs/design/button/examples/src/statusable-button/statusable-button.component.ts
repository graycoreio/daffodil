import { Component } from '@angular/core';
import {
  faExclamation,
  faExclamationTriangle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'statusable-button',
  templateUrl: './statusable-button.component.html',
  styles: [`
    button[daff-button],
    button[daff-stroked-button],
    button[daff-raised-button],
    button[daff-underline-button],
    button[daff-icon-button] {
      margin: 4px;
    }
  `],
})
export class StatusableButtonComponent {
  faExclamation = faExclamation;
  faExclamationTriangle = faExclamationTriangle;
  faCheckCircle = faCheckCircle;
}
