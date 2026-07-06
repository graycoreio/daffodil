import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DAFF_TAG_COMPONENTS } from '@daffodil/design/tag';

@Component({
  selector: 'colorable-tag-example',
  templateUrl: './colorable-tag.component.html',
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_TAG_COMPONENTS,
  ],
})
export class ColorableTagExampleComponent {
}
