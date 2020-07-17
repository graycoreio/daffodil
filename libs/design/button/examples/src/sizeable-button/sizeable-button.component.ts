import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sizeable-button',
  templateUrl: './sizeable-button.component.html',
  styles: [`
    button {
      margin-right: 8px;
    } 
  `]
})
export class SizeableButtonComponent {
  faPlus = faPlus;
}