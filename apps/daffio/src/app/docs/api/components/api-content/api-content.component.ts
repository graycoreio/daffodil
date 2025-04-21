import { NgComponentOutlet } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';

import {
  DaffApiDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioDocViewerComponent } from '../../../components/doc-viewer/doc-viewer.component';
import { DaffioDocsDynamicContent } from '../../../dynamic-content/dynamic-content.type';
import { DaffioDocsApiDynamicContentComponentService } from '../../dynamic-content/dynamic-content-component.service';
import { DaffioApiPackageComponent } from '../api-package/api-package.component';

@Component({
  selector: 'daffio-docs-api-content',
  templateUrl: './api-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioDocViewerComponent,
    DaffioApiPackageComponent,
    NgComponentOutlet,
  ],
})
export class DaffioDocsApiContentComponent implements DaffioDocsDynamicContent<DaffApiDoc> {
  static readonly kind = DaffDocKind.API;

  readonly isApiPackage = computed(() => this.doc().docType === 'package');

  doc = input<DaffApiDoc>();
  component = computed(() => this.componentService.getComponent(this.doc()));

  constructor(
    private componentService: DaffioDocsApiDynamicContentComponentService,
  ) {}
}
