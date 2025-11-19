import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';
import { DaffTextareaComponent } from '@daffodil/design/textarea';

@Component({
  selector: 'basic-textarea-example',
  templateUrl: './basic-textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffTextareaComponent,
    DAFF_FORM_FIELD_COMPONENTS,
  ],
})
export class BasicTextareaExampleComponent {

}
