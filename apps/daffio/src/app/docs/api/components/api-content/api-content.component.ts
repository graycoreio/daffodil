import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';

import {
  DaffApiDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioSafeHtmlPipe } from '../../../../core/html-sanitizer/safe.pipe';
import { DaffioDocArticleModule } from '../../../components/doc-article/module';
import { DaffioDocsDynamicContent } from '../../../dynamic-content/dynamic-content.type';
import { DaffioApiPackageComponent } from '../api-package/api-package.component';

@Component({
  selector: 'daffio-docs-api-content',
  templateUrl: './api-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffioDocArticleModule,
    DaffioApiPackageComponent,
    DaffioSafeHtmlPipe,
  ],
})
export class DaffioDocsApiContentComponent implements DaffioDocsDynamicContent<DaffApiDoc> {
  static readonly kind = DaffDocKind.API;

  readonly isApiPackage = computed(() => this.doc().docType === 'package');

  doc = input<DaffApiDoc>();
}
