import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';
import { DAFF_SELECT_COMPONENTS } from '@daffodil/design/select';

@Component({
  selector: 'hero-theming-example',
  templateUrl: './hero-theming.component.html',
  styleUrl: './hero-theming.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_HERO_COMPONENTS,
    DAFF_FORM_FIELD_COMPONENTS,
    DAFF_SELECT_COMPONENTS,
    FaIconComponent,
    DaffButtonComponent,
    ReactiveFormsModule,
  ],
})
export class HeroThemingExampleComponent {
  faBagShopping = faBagShopping;

  options = [
    { value: '', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'tertiary', label: 'Tertiary' },
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'theme', label: 'Theme' },
    { value: 'theme-contrast', label: 'Theme Contrast' },
  ];

  colorControl: UntypedFormControl = new UntypedFormControl(this.options[0]);
}
