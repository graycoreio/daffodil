import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design';
import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'form-field-with-suffix',
  templateUrl: './form-field-with-suffix.component.html',
  styleUrl: './form-field-with-suffix.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffInputComponent,
    FaIconComponent,
  ],
})
export class FormFieldWithSuffixComponent {
  faPencil = faPencil;
}
