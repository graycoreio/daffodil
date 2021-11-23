import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'linkable-card',
  templateUrl: './linkable-card.component.html',
  styleUrls: ['./linkable-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkableCardComponent {
  basicColorControl: FormControl = new FormControl('');
  raisedColorControl: FormControl = new FormControl('');
  strokedColorControl: FormControl = new FormControl('');

  options = [
    { value: '', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'tertiary', label: 'Tertiary' },
    { value: 'theme', label: 'Theme' },
    { value: 'theme-contrast', label: 'Theme Contrast' },
    { value: 'black', label: 'Black' },
    { value: 'white', label: 'White' },
  ];
}
