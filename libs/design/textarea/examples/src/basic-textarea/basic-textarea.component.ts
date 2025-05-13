import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import {
  DAFF_FORM_FIELD_COMPONENTS,
  DaffTextareaComponent,
} from '@daffodil/design';

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
