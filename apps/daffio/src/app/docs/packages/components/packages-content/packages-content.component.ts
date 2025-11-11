import {
  Component,
  ChangeDetectionStrategy,
  input,
  effect,
  afterRenderEffect,
  inject,
  ViewContainerRef,
  ElementRef,
} from '@angular/core';

import { DaffDocsCodeBlockCopyButtonService } from '@daffodil/docs';
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
  providers: [DaffDocsCodeBlockCopyButtonService],
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
    private copyButtonService: DaffDocsCodeBlockCopyButtonService,
  ) {
    const elementRef = inject(ElementRef<HTMLElement>);
    const viewContainerRef = inject(ViewContainerRef);

    effect((onCleanup) => {
      this.tocRegistry.set(this.doc().tableOfContents);
      onCleanup(() => this.tocRegistry.set([]));
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
