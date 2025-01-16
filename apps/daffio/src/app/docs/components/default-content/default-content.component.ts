import {
  Component,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';

import { DaffDoc } from '@daffodil/docs-utils';

import { DaffioSafeHtmlPipe } from '../../../core/html-sanitizer/safe.pipe';
import { DaffioDocsDynamicContent } from '../../dynamic-content/dynamic-content.type';
import { DaffioDocArticleModule } from '../doc-article/module';

@Component({
  selector: 'daffio-doc-default-content',
  templateUrl: './default-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioDocArticleModule,
    DaffioSafeHtmlPipe,
  ],
})
export class DaffioDocsDefaultContentComponent<T extends DaffDoc = DaffDoc> implements DaffioDocsDynamicContent<T> {
  doc = input<T>();
}
