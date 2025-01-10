import {
  Component,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';
import { DaffioSafeHtmlPipe } from 'apps/daffio/src/app/core/html-sanitizer/safe.pipe';

import {
  DaffPackageGuideDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioDocArticleModule } from '../../../components/doc-article/module';
import { DaffioDocsDynamicallyRenderable } from '../../../dynamically-renderable/type';

@Component({
  selector: 'daffio-docs-packages-content',
  templateUrl: './component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffioDocArticleModule,
    DaffioSafeHtmlPipe,
  ],
})
export class DaffioDocPackagesContentComponent implements DaffioDocsDynamicallyRenderable<DaffPackageGuideDoc> {
  static readonly kind = DaffDocKind.PACKAGE;

  doc = input<DaffPackageGuideDoc>();
}
