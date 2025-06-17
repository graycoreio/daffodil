import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import {
  DAFF_FORM_FIELD_COMPONENTS,
  DaffNativeSelectModule,
} from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-native-select',
  templateUrl: './basic-native-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    daff-form-field {
      max-width: 25rem;
    }
  `,
  imports: [
    DaffNativeSelectModule,
    DAFF_FORM_FIELD_COMPONENTS,
    FaIconComponent,
  ],
})
export class BasicNativeSelectComponent {
  faUser = faUser;
}
