import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

@Component({
  selector: 'basic-article-encapsulated-example',
  templateUrl: './basic-article-encapsulated.component.html',
  styleUrl: './basic-article-encapsulated.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffArticleEncapsulatedDirective,
  ],
})
export class BasicArticleEncapsulatedExampleComponent {}
