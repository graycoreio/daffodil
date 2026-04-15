import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  DAFF_CARD_COMPONENTS,
  DAFF_STROKED_CARD_COMPONENTS,
} from '@daffodil/design/card';
import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DAFF_SELECT_COMPONENTS } from '@daffodil/design/select';

@Component({
  selector: 'card-theming-example',
  templateUrl: './card-theming.component.html',
  styleUrl: './card-theming.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CARD_COMPONENTS,
    DAFF_STROKED_CARD_COMPONENTS,
    DAFF_FORM_FIELD_COMPONENTS,
    DAFF_SELECT_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class CardThemingExampleComponent {
  options = [
    { value: '', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'tertiary', label: 'Tertiary' },
    { value: 'theme', label: 'Theme' },
    { value: 'theme-contrast', label: 'Theme Contrast' },
    { value: 'dark', label: 'Dark' },
    { value: 'light', label: 'Light' },
  ];

  cardControl: UntypedFormControl = new UntypedFormControl(this.options[0]);
  strokedCardControl: UntypedFormControl = new UntypedFormControl(this.options[0]);
}
