import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffTextareaModule } from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-textarea',
  templateUrl: './basic-textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffTextareaModule],
})
export class BasicTextareaComponent {

}
