import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faUser,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

import {
  DaffFormFieldModule,
  DaffTextareaModule,
} from '@daffodil/design';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'textarea-with-form-field',
  templateUrl: './textarea-with-form-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffFormFieldModule, DaffTextareaModule, FontAwesomeModule],
})
export class TextareaWithFormFieldComponent {
  faUser = faUser;
  faCircleXmark = faCircleXmark;
}
