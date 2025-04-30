import { NgFor } from '@angular/common';
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

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'card-theming',
  templateUrl: './card-theming.component.html',
  styles: [`
    daff-card, daff-stroked-card {
      max-width: 480px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_CARD_COMPONENTS,
    DAFF_STROKED_CARD_COMPONENTS,
    ReactiveFormsModule,
    NgFor,
  ],
})
export class CardThemingComponent {
  cardControl: UntypedFormControl = new UntypedFormControl('');
  strokedCardControl: UntypedFormControl = new UntypedFormControl('');

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
}
