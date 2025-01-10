import {
  Component,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';

import { DaffDoc } from '@daffodil/docs-utils';

import { DaffioSafeHtmlPipe } from '../../../core/html-sanitizer/safe.pipe';
import { DaffioDocsDynamicallyRenderableContent } from '../../dynamically-renderable-content/type';
import { DaffioDocArticleModule } from '../doc-article/module';

@Component({
  selector: 'daffio-doc-default-content',
  templateUrl: './default-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffioDocArticleModule,
    DaffioSafeHtmlPipe,
  ],
})
export class DaffioDocsDefaultContentComponent<T extends DaffDoc = DaffDoc> implements DaffioDocsDynamicallyRenderableContent<T> {
  doc = input<T>();
}
