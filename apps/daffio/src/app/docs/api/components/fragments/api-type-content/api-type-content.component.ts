import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';

import {
  DaffApiType,
  DaffDocsApiRole,
  DaffDocsApiType,
} from '@daffodil/docs-utils';

import { DaffioDocsApiDynamicContent } from '../../../dynamic-content/dynamic-content.type';
import { DaffioDocsApiInterfaceBlockComponent } from '../../interface-block/interface-block.component';
import { DaffioDocsApiMethodBlockComponent } from '../../method-block/method-block.component';
import { DaffioDocsApiPropertyBlockComponent } from '../../property-block/property-block.component';
import { DaffioDocsApiBaseContentComponent } from '../api-base-content/api-base-content.component';

@Component({
  selector: 'daffio-docs-api-type-content',
  templateUrl: './api-type-content.component.html',
  styleUrl: './api-type-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioDocsApiBaseContentComponent,
    DaffioDocsApiPropertyBlockComponent,
    DaffioDocsApiMethodBlockComponent,
    DaffioDocsApiInterfaceBlockComponent,
  ],
})
export class DaffioDocsApiTypeContentComponent implements DaffioDocsApiDynamicContent<DaffApiType> {
  static role = DaffDocsApiRole.TYPE;

  doc = input<DaffApiType>();
  child = input(false);

  readonly isConcrete = computed(() => this.doc().docType !== DaffDocsApiType.INTERFACE && this.doc().docType !== DaffDocsApiType.ENUM);
  readonly hasPropsWithDocs = computed(() => this.doc().props.filter((prop) => prop.description).length > 0);
}
