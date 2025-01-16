import {
  Component,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';

import {
  DaffPackageGuideDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioSafeHtmlPipe } from '../../../../core/html-sanitizer/safe.pipe';
import { DaffioDocArticleModule } from '../../../components/doc-article/module';
import { DaffioDocsDynamicContent } from '../../../dynamic-content/dynamic-content.type';

@Component({
  selector: 'daffio-docs-packages-content',
  templateUrl: './packages-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioDocArticleModule,
    DaffioSafeHtmlPipe,
  ],
})
export class DaffioDocsPackagesContentComponent implements DaffioDocsDynamicContent<DaffPackageGuideDoc> {
  static readonly kind = DaffDocKind.PACKAGE;

  doc = input<DaffPackageGuideDoc>();
}
