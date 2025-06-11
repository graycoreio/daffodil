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
import { DaffButtonComponent } from '@daffodil/design/button';
import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'form-field-with-outer-action',
  templateUrl: './form-field-with-outer-action.component.html',
  styles: [`
    daff-form-field {
      max-width: 480px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffInputComponent,
    FaIconComponent,
    FormsModule,
    DaffButtonComponent,
  ],
})
export class FormFieldWithOuterActionComponent {
  faUser = faUser;
  faCircleXmark = faCircleXmark;

  inputValue = '';

  clearInput(): void {
    this.inputValue = ''; // or this.inputValue = null;
  }
}
