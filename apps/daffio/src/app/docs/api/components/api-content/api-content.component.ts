import { NgComponentOutlet } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
  signal,
  effect,
} from '@angular/core';

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
  ) {
    effect((onCleanup) => {
      this.tocRegistry.set(this.toc());
      onCleanup(() => this.tocRegistry.set([]));
    });
  }
}
