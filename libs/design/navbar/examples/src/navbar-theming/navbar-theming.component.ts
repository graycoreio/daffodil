import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_NAVBAR_COMPONENTS } from '@daffodil/design/navbar';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'navbar-theming',
  templateUrl: './navbar-theming.component.html',
  styleUrls: ['./navbar-theming.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DAFF_NAVBAR_COMPONENTS,
    DaffButtonComponent,
    ReactiveFormsModule,
    NgFor,
  ],
})
export class NavbarThemingComponent {
  colorControl: UntypedFormControl = new UntypedFormControl('');

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
