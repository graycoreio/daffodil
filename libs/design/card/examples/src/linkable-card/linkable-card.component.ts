import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'linkable-card',
  templateUrl: './linkable-card.component.html',
  styleUrls: ['./linkable-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkableCardComponent {
  basicColorControl: UntypedFormControl = new UntypedFormControl('');
  raisedColorControl: UntypedFormControl = new UntypedFormControl('');
  strokedColorControl: UntypedFormControl = new UntypedFormControl('');

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
