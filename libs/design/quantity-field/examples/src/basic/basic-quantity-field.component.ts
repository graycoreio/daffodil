import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-quantity-field',
  templateUrl: './basic-quantity-field.component.html',
  styleUrls: ['./basic-quantity-field.component.scss'],
})
export class BasicQuantityFieldComponent {
  control = new FormControl(1);
}
