import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DaffioSafeHtmlPipe } from 'apps/daffio/src/app/core/html-sanitizer/safe.pipe';

import {
  DaffPackageGuideDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioDocArticleModule } from '../../../components/doc-article/module';
import { DaffioDocComponent } from '../../../components/doc-renderer/component.type';

@Component({
  selector: 'daffio-api-doc',
  templateUrl: './component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffioDocArticleModule,
    DaffioSafeHtmlPipe,
  ],
})
export class DaffioDocPackageComponent implements DaffioDocComponent<DaffPackageGuideDoc> {
  static readonly kind = DaffDocKind.PACKAGE;

  doc = input<DaffPackageGuideDoc>();
}
