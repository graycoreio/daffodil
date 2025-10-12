import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffTextSnippetComponent } from '@daffodil/design/text-snippet';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-text-snippet',
  templateUrl: './basic-text-snippet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffTextSnippetComponent,
  ],
})
export class BasicTextSnippetComponent {}
