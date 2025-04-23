import {
  Component,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';

import {
  DaffApiDocBase,
  DaffApiType,
} from '@daffodil/docs-utils';

import { DaffioSafeHtmlPipe } from '../../../../../core/html-sanitizer/safe.pipe';
import { DaffioDocsApiDynamicContent } from '../../../dynamic-content/dynamic-content.type';
import { DaffioDocsApiItemLabelComponent } from '../../api-item-label/api-item-label.component';

@Component({
  selector: 'daffio-docs-api-base-content',
  templateUrl: './api-base-content.component.html',
  styleUrl: './api-base-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioSafeHtmlPipe,
    DaffioDocsApiItemLabelComponent,
  ],
})
export class DaffioDocsApiBaseContentComponent implements DaffioDocsApiDynamicContent<DaffApiDocBase> {
  static role;

  doc = input<DaffApiType>();
  child = input(false);
}
