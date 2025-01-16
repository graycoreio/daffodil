import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  UntypedFormControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { DAFF_LOADING_ICON_COMPONENTS } from '@daffodil/design/loading-icon';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'loading-icon-color',
  templateUrl: './loading-icon-color.component.html',
  styles: [`
    select {
      margin-top: 16px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_LOADING_ICON_COMPONENTS,
    ReactiveFormsModule,
    NgFor,
  ],
})
export class LoadingIconColorComponent {
  colorControl: UntypedFormControl = new UntypedFormControl('primary');

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
