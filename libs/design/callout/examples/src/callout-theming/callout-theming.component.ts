import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'callout-theming',
  templateUrl: './callout-theming.component.html',
  styleUrls: ['./callout-theming.component.scss'],
})
export class CalloutThemingComponent {
  faMobile = faMobile;
  colorControl: FormControl = new FormControl('');

  options = [
    { value: '', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'tertiary', label: 'Tertiary' },
    { value: 'white', label: 'White' },
    { value: 'black', label: 'Black' },
    { value: 'theme', label: 'Theme' },
    { value: 'theme-contrast', label: 'Theme Contrast' },
  ];
}
