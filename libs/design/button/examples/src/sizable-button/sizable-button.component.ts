import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'sizable-button',
  templateUrl: './sizable-button.component.html',
  styles: [`
    button {
      margin: 4px;
    }
  `],
})
export class SizableButtonComponent {
  faPlus = faPlus;
}
