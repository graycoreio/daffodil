import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DAFF_MENU_COMPONENTS } from '@daffodil/design/menu';
import { DAFF_SELECT_COMPONENTS } from '@daffodil/design/select';

import { MenuWithPositionContentExampleComponent } from './menu-content/menu-content.component';

@Component({
  selector: 'menu-with-position-example',
  templateUrl: './menu-with-position.component.html',
  styleUrl: './menu-with-position.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffButtonComponent,
    DAFF_FORM_FIELD_COMPONENTS,
    DAFF_SELECT_COMPONENTS,
    DAFF_MENU_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class MenuWithPositionExampleComponent {
  public menu = MenuWithPositionContentExampleComponent;

  xPositions = [
    { value: 'after', label: 'After' },
    { value: 'before', label: 'Before' },
  ];

  yPositions = [
    { value: 'below', label: 'Below' },
    { value: 'above', label: 'Above' },
  ];

  xPositionControl: UntypedFormControl = new UntypedFormControl(this.xPositions[0]);
  yPositionControl: UntypedFormControl = new UntypedFormControl(this.yPositions[0]);
}
