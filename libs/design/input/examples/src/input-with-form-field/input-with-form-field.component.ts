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
  DaffInputModule,
} from '@daffodil/design';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'input-with-form-field',
  templateUrl: './input-with-form-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffFormFieldModule, DaffInputModule, FontAwesomeModule],
})
export class InputWithFormFieldComponent {
  faUser = faUser;
  faCircleXmark = faCircleXmark;
}
