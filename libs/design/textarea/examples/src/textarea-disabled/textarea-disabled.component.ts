import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import {
  DaffFormFieldModule,
  DaffTextareaModule,
} from '@daffodil/design';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'textarea-disabled',
  templateUrl: './textarea-disabled.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [DaffFormFieldModule, DaffTextareaModule],
})
export class TextareaDisabledComponent {
  isDisabled = true;
}
