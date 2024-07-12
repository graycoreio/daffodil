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
import { DaffImageModule } from '@daffodil/design/image';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'raised-card',
  templateUrl: './raised-card.component.html',
  styleUrls: ['./raised-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffCardModule,
    DaffImageModule,
    ReactiveFormsModule,
    NgFor,
  ],
})
export class RaisedCardComponent {
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
