import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {
  faUser,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  selector: 'form-field-appearances-example',
  templateUrl: './form-field-appearances.component.html',
  styleUrl: './form-field-appearances.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffInputComponent,
  ],
})
export class FormFieldAppearancesExampleComponent {
  faUser = faUser;
  faEye = faEye;
}
