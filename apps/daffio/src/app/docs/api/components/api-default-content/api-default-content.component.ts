import {
  Component,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';

import { DaffApiDoc } from '@daffodil/docs-utils';

import { DaffioDocsApiDynamicContent } from '../../dynamic-content/dynamic-content.type';
import { DaffioDocsApiBaseContentComponent } from '../fragments/api-base-content/api-base-content.component';

@Component({
  selector: 'daffio-docs-api-default-content',
  templateUrl: './api-default-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioDocsApiBaseContentComponent,
  ],
})
export class DaffioDocsApiDefaultContentComponent<T extends DaffApiDoc = DaffApiDoc> implements DaffioDocsApiDynamicContent<T> {
  doc = input<T>();
  child = input(false);
}
