import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

import {
  DaffDocsApiClassProperty,
  DaffDocsApiTypeProperty,
} from '@daffodil/docs-utils';

import { DaffioSafeHtmlPipe } from '../../../../core/html-sanitizer/safe.pipe';
import { DaffioInterceptNavigationDirective } from '../../../../core/router/intercept-navigation.directive';
import { DAFFIO_DOCS_MEMBER_HEADING_COMPONENTS } from '../../../components/member-heading/member-heading';

@Component({
  selector: 'daffio-docs-api-interface-block',
  templateUrl: './interface-block.component.html',
  styleUrl: './interface-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioSafeHtmlPipe,
    DAFFIO_DOCS_MEMBER_HEADING_COMPONENTS,
    DaffioInterceptNavigationDirective,
  ],
})
export class DaffioDocsApiInterfaceBlockComponent {
  @Input() prop: DaffDocsApiTypeProperty | DaffDocsApiClassProperty;
  @Input() child = false;

  @HostBinding('id')
  get id(): string {
    return this.prop.anchor;
  }
}
