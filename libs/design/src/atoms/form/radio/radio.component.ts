import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'input[daff-radio]',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  host: { 'class': 'daff-radio' },
  encapsulation: ViewEncapsulation.None,
})
export class DaffRadioComponent {}
