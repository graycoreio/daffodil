import {
  Component,
  ChangeDetectionStrategy,
  input,
  effect,
} from '@angular/core';

import {
  DaffDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioSafeHtmlPipe } from '../../../../core/html-sanitizer/safe.pipe';
import { DaffioDocViewerComponent } from '../../../components/doc-viewer/doc-viewer.component';
import { DaffioDocsDynamicContent } from '../../../dynamic-content/dynamic-content.type';
import { DaffioDocsTocService } from '../../../toc/toc.service';

@Component({
  selector: 'daffio-docs-guides-content',
  templateUrl: './guides-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioDocViewerComponent,
    DaffioSafeHtmlPipe,
  ],
})
export class DaffioDocsGuidesContentComponent implements DaffioDocsDynamicContent<DaffDoc> {
  static readonly kind = DaffDocKind.GUIDE;

  doc = input<DaffDoc>();

  constructor(
    private tocRegistry: DaffioDocsTocService,
  ) {
    effect((onCleanup) => {
      this.tocRegistry.set(this.doc().tableOfContents);
      onCleanup(() => this.tocRegistry.set([]));
    });
  }
}
