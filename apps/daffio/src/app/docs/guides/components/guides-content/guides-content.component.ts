import {
  Component,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';

import {
  DaffGuideDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioSafeHtmlPipe } from '../../../../core/html-sanitizer/safe.pipe';
import { DaffioDocArticleModule } from '../../../components/doc-article/module';
import { DaffioDocsDynamicallyRenderableContent } from '../../../dynamically-renderable-content/type';

@Component({
  selector: 'daffio-docs-guides-content',
  templateUrl: './guides-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffioDocArticleModule,
    DaffioSafeHtmlPipe,
  ],
})
export class DaffioDocsGuidesContentComponent implements DaffioDocsDynamicallyRenderableContent<DaffGuideDoc> {
  static readonly kind = DaffDocKind.GUIDE;

  doc = input<DaffGuideDoc>();
}
