import {
  Component,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';
import { DaffioSafeHtmlPipe } from 'apps/daffio/src/app/core/html-sanitizer/safe.pipe';

import {
  DaffGuideDoc,
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
export class DaffioDocGuideComponent implements DaffioDocComponent<DaffGuideDoc> {
  static readonly kind = DaffDocKind.GUIDE;

  doc = input<DaffGuideDoc>();
}
