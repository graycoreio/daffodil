import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'design-land-quantity-field',
  templateUrl: './quantity-field.component.html',
  styleUrls: ['./quantity-field.component.scss'],
})
export class DesignLandQuantityFieldComponent {
  control = new FormControl(1);
  selectMaxCustom = new FormControl(1);
  customRange = new FormControl(1);
  disabled = new FormControl({ value : '' , disabled: true });
}
