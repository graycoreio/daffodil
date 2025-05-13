import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faUser,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

import {
  DAFF_FORM_FIELD_COMPONENTS,
  DaffPrefixSuffixModule,
} from '@daffodil/design';
import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input-with-form-field',
  templateUrl: './input-with-form-field.component.html',
  styles: [`
    daff-form-field {
      max-width: 320px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffInputComponent,
    FaIconComponent,
    DaffPrefixSuffixModule,
  ],
})
export class InputWithFormFieldComponent {
  faUser = faUser;
  faCircleXmark = faCircleXmark;
}
