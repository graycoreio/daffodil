import {
  Component,
  ChangeDetectionStrategy,
  input,
  effect,
  inject,
  ElementRef,
  afterRenderEffect,
  DestroyRef,
  ViewContainerRef,
} from '@angular/core';

import { CodeBlockCopyButtonService } from '@daffodil/docs';
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
  providers: [CodeBlockCopyButtonService],
  imports: [
    DaffioDocViewerComponent,
    DaffioSafeHtmlPipe,
  ],
})
export class DaffioDocsGuidesContentComponent implements DaffioDocsDynamicContent<DaffDoc> {
  static readonly kind = DaffDocKind.GUIDE;

  doc = input<DaffDoc>();

  private elementRef = inject(ElementRef<HTMLElement>);
  private destroyRef = inject(DestroyRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor(
    private tocRegistry: DaffioDocsTocService,
    private copyButtonService: CodeBlockCopyButtonService,
  ) {
    this.destroyRef.onDestroy(() => {
      this.copyButtonService.cleanup();
    });

    effect((onCleanup) => {
      this.tocRegistry.set(this.doc().tableOfContents);
      onCleanup(() => {
        this.tocRegistry.set([]);
      });
    });

    afterRenderEffect({
      write: () => {
        this.doc();
        this.copyButtonService.addCopyButtonsToCodeBlocks(this.elementRef.nativeElement, this.viewContainerRef);
      },
    });
  }
}
