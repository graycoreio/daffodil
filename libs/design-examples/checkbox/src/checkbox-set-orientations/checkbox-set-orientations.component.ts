import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_CHECKBOX_COMPONENTS } from '@daffodil/design/checkbox';

@Component({
  selector: 'checkbox-set-orientations',
  templateUrl: './checkbox-set-orientations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    DaffButtonComponent,
    DAFF_CHECKBOX_COMPONENTS,
  ],
})
export class CheckboxSetOrientationsExampleComponent {
  orientationControl: UntypedFormControl = new UntypedFormControl('');

  options = [
    { value: '', label: 'Default' },
    { value: 'vertical', label: 'Vertical' },
    { value: 'horizontal', label: 'Horizontal' },
  ];
}
