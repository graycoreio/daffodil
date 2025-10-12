import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DaffTextareaComponent } from '@daffodil/design/textarea';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-textarea',
  templateUrl: './basic-textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffTextareaComponent,
    DAFF_FORM_FIELD_COMPONENTS,
  ],
})
export class BasicTextareaComponent {

}
