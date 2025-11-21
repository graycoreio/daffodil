import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffTextSnippetComponent } from '@daffodil/design/text-snippet';

@Component({
  selector: 'basic-text-snippet-example',
  templateUrl: './basic-text-snippet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffTextSnippetComponent,
  ],
})
export class BasicTextSnippetExampleComponent {}
