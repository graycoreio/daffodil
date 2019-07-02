import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'design-land-qty-dropdown',
  templateUrl: './qty-dropdown.component.html',
  styleUrls: ['./qty-dropdown.component.scss']
})
export class QtyDropdownComponent {
  control1 = new FormControl(1);
}
