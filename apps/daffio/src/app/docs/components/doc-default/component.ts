import {
  Component,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';

import { DaffDoc } from '@daffodil/docs-utils';

import { DaffioSafeHtmlPipe } from '../../../core/html-sanitizer/safe.pipe';
import { DaffioDocArticleModule } from '../doc-article/module';
import { DaffioDocComponent } from '../doc-renderer/component.type';

@Component({
  selector: 'daffio-doc-default',
  templateUrl: './component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    DaffioDocArticleModule,
    DaffioSafeHtmlPipe,
  ],
})
export class DaffioDocDefaultComponent<T extends DaffDoc = DaffDoc> implements DaffioDocComponent<T> {
  doc = input<T>();
}
