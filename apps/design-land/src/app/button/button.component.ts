import { Component } from '@angular/core';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'design-land-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  faPlus = faPlus;
}