import {
  Component,
  ChangeDetectionStrategy,
  input,
  effect,
} from '@angular/core';

import {
  DaffPackageGuideDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioSafeHtmlPipe } from '../../../../core/html-sanitizer/safe.pipe';
import { DaffioDocViewerComponent } from '../../../components/doc-viewer/doc-viewer.component';
import { DaffioDocsDynamicContent } from '../../../dynamic-content/dynamic-content.type';
import { DaffioDocsTocService } from '../../../toc/toc.service';

@Component({
  selector: 'daffio-docs-packages-content',
  templateUrl: './packages-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioDocViewerComponent,
    DaffioSafeHtmlPipe,
  ],
})
export class DaffioDocsPackagesContentComponent implements DaffioDocsDynamicContent<DaffPackageGuideDoc> {
  static readonly kind = DaffDocKind.PACKAGE;

  doc = input<DaffPackageGuideDoc>();

  constructor(
    private tocRegistry: DaffioDocsTocService,
  ) {
    effect((onCleanup) => {
      this.tocRegistry.set(this.doc().tableOfContents);
      onCleanup(() => this.tocRegistry.set([]));
    });
  }
}
