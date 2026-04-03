import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { DaffIconButtonComponent } from '@daffodil/design/button';
import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';

@Component({
  selector: 'daffio-docs-search-field',
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FaIconComponent,
    DaffIconButtonComponent,
    DAFF_FORM_FIELD_COMPONENTS,
    ReactiveFormsModule,
  ],
  host: {
    class: 'daffio-docs-search-field',
  },
})
export class DaffioDocsSearchFieldComponent {
  readonly faTimes = faTimes;
  readonly inputValue = input.required<FormControl<string>>();

  clearField() {
    this.inputValue().patchValue('');
  }
}
