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
import { DaffioDocsDynamicContent } from '../../../dynamic-content/dynamic-content.type';

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
export class DaffioDocsGuidesContentComponent implements DaffioDocsDynamicContent<DaffGuideDoc> {
  static readonly kind = DaffDocKind.GUIDE;

  doc = input<DaffGuideDoc>();
}
