import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'disabled-quantity-field',
  templateUrl: './disabled-quantity-field.component.html',
  styleUrls: ['./disabled-quantity-field.component.scss'],
})
export class DisabledQuantityFieldComponent {
  control = new FormControl({ value : '' , disabled: true });
}
