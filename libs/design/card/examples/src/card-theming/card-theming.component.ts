import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DaffCardModule } from '@daffodil/design/card';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'card-theming',
  templateUrl: './card-theming.component.html',
  styles: [`
    daff-card {
      max-width: 480px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffCardModule,
    ReactiveFormsModule,
    NgFor,
  ],
})
export class CardThemingComponent {
  colorControl: UntypedFormControl = new UntypedFormControl('');

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
