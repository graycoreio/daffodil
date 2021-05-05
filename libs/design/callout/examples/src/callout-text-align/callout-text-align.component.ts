import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'callout-text-align',
  templateUrl: './callout-text-align.component.html',
})
export class CalloutTextAlignComponent {
  textAlignControl: FormControl = new FormControl('');

  options = [
    { value: '', label: 'Default' },
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
    { value: 'right', label: 'Right' },
  ];
}
