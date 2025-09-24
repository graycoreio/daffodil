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
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'form-field-appearances',
  templateUrl: './form-field-appearances.component.html',
  styleUrl: './form-field-appearances.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffInputComponent,
  ],
})
export class FormFieldAppearancesComponent {
  faUser = faUser;
  faEye = faEye;
}
