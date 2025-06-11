import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faUser,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design';
import { DaffIconButtonComponent } from '@daffodil/design/button';
import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'form-field-with-inner-action',
  templateUrl: './form-field-with-inner-action.component.html',
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
    FormsModule,
    DaffIconButtonComponent,
  ],
})
export class FormFieldWithInnerActionComponent {
  faUser = faUser;
  faCircleXmark = faCircleXmark;

  inputValue = '';

  clearInput() {
    this.inputValue = '';
  }
}
