import {
  Component,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';

import { DaffDocsDocRendererComponent } from '@daffodil/docs';
import { DaffDoc } from '@daffodil/docs-utils';

import { DaffioDocsDynamicContent } from '../../dynamic-content/dynamic-content.type';
import { DaffioDocViewerComponent } from '../doc-viewer/doc-viewer.component';

@Component({
  selector: 'daffio-doc-default-content',
  templateUrl: './default-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioDocViewerComponent,
    DaffDocsDocRendererComponent,
  ],
})
export class DaffioDocsDefaultContentComponent<T extends DaffDoc = DaffDoc> implements DaffioDocsDynamicContent<T> {
  doc = input<T>();
}
