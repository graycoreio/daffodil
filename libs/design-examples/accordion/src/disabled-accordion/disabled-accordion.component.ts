import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_ACCORDION_COMPONENTS } from '@daffodil/design/accordion';

@Component({
  selector: 'disabled-accordion-example',
  templateUrl: './disabled-accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_ACCORDION_COMPONENTS,
  ],
})
export class DisabledAccordionExampleComponent {}
