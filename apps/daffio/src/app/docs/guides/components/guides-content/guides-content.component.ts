import {
  Component,
  ChangeDetectionStrategy,
  input,
  effect,
  inject,
  ElementRef,
  afterRenderEffect,
  ViewContainerRef,
} from '@angular/core';

import { DaffDocsCodeBlockCopyButtonService } from '@daffodil/docs';
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
  providers: [DaffDocsCodeBlockCopyButtonService],
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
    private copyButtonService: DaffDocsCodeBlockCopyButtonService,
  ) {
    const elementRef = inject(ElementRef<HTMLElement>);
    const viewContainerRef = inject(ViewContainerRef);

    effect((onCleanup) => {
      this.tocRegistry.set(this.doc().tableOfContents);
      onCleanup(() => {
        this.tocRegistry.set([]);
      });
    });

    afterRenderEffect({
      write: (onCleanup) => {
        this.doc();
        this.copyButtonService.addCopyButtonsToCodeBlocks(elementRef.nativeElement, viewContainerRef);

        onCleanup(() => {
          this.copyButtonService.cleanup();
        });
      },
    });
  }
}
