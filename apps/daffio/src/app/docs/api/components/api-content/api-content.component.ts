import { NgComponentOutlet } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
  signal,
  effect,
  inject,
  ViewContainerRef,
  ElementRef,
  afterRenderEffect,
} from '@angular/core';

import { DaffDocsCodeBlockCopyButtonService } from '@daffodil/docs';
import {
  DaffApiDoc,
  DaffDocKind,
  DaffDocTableOfContents,
} from '@daffodil/docs-utils';

import { DaffioDocViewerComponent } from '../../../components/doc-viewer/doc-viewer.component';
import { DaffioDocsDynamicContent } from '../../../dynamic-content/dynamic-content.type';
import { DaffioDocsTocService } from '../../../toc/toc.service';
import { DaffioDocsApiDynamicContentFragmentService } from '../../dynamic-content/fragment.service';

@Component({
  selector: 'daffio-docs-api-content',
  templateUrl: './api-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DaffDocsCodeBlockCopyButtonService],
  imports: [
    DaffioDocViewerComponent,
    NgComponentOutlet,
  ],
})
export class DaffioDocsApiContentComponent implements DaffioDocsDynamicContent<DaffApiDoc> {
  static readonly kind = DaffDocKind.API;

  doc = input<DaffApiDoc>();
  fragments = computed(() => this.fragmentsService.get(this.doc()));
  fragmentTocs = computed(() => this.fragments().components.map(() => signal<DaffDocTableOfContents>([])));
  toc = computed(() => this.fragmentTocs().reduce((acc, fragmentToc) => acc.concat(fragmentToc()), []));

  constructor(
    private fragmentsService: DaffioDocsApiDynamicContentFragmentService,
    private tocRegistry: DaffioDocsTocService,
    private copyButtonService: DaffDocsCodeBlockCopyButtonService,
  ) {
    const elementRef = inject(ElementRef<HTMLElement>);
    const viewContainerRef = inject(ViewContainerRef);

    effect((onCleanup) => {
      this.tocRegistry.set(this.toc());
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
