import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'select-max-quantity-field',
  templateUrl: './select-max-quantity-field.component.html',
  styleUrls: ['./select-max-quantity-field.component.scss'],
})
export class SelectMaxQuantityFieldComponent {
  control = new FormControl(1);
}
