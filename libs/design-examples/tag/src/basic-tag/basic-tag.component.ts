import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_TAG_COMPONENTS } from '@daffodil/design/tag';

@Component({
  selector: 'basic-tag-example',
  templateUrl: './basic-tag.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_TAG_COMPONENTS,
  ],
})
export class BasicTagExampleComponent {}
