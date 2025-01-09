import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';
import { DaffioSafeHtmlPipe } from 'apps/daffio/src/app/core/html-sanitizer/safe.pipe';

import {
  DaffApiDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioDocArticleModule } from '../../../components/doc-article/module';
import { DaffioDocComponent } from '../../../components/doc-renderer/component.type';
import { DaffioApiPackageComponent } from '../api-package/api-package.component';

@Component({
  selector: 'daffio-api-doc',
  templateUrl: './component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffioDocArticleModule,
    DaffioApiPackageComponent,
    DaffioSafeHtmlPipe,
  ],
})
export class DaffioDocApiComponent implements DaffioDocComponent<DaffApiDoc> {
  static readonly kind = DaffDocKind.API;

  readonly isApiPackage = computed(() => this.doc().docType === 'package');

  doc = input<DaffApiDoc>();
}
