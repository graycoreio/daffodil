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

import { DaffButtonComponent } from '@daffodil/design/button';
import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'form-field-with-action',
  templateUrl: './form-field-with-action.component.html',
  styleUrl: './form-field-with-action.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
    DaffInputComponent,
    FaIconComponent,
    FormsModule,
    DaffButtonComponent,
  ],
})
export class FormFieldWithActionComponent {
  faUser = faUser;
  faCircleXmark = faCircleXmark;

  inputValue = '';

  clearInput(): void {
    this.inputValue = ''; // or this.inputValue = null;
  }
}
