import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'callout-text-alignment',
  templateUrl: './callout-text-alignment.component.html',
  styleUrls: ['./callout-text-alignment.component.scss'],
})
export class CalloutTextAlignmentComponent {
  faMobile = faMobile;
  textAlignControl: FormControl = new FormControl('');

  options = [
    { value: '', label: 'Default' },
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
    { value: 'right', label: 'Right' },
  ];
}
