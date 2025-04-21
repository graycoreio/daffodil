import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { DaffioSafeHtmlPipe } from 'apps/daffio/src/app/core/html-sanitizer/safe.pipe';

import { DaffDocsApiTypeMethod } from '@daffodil/docs-utils';

import { DaffioDocsMemberHeadingNameDirective } from '../../../components/member-heading/member-heading-name/member-heading-name.directive';
import { DaffioDocsMemberHeadingComponent } from '../../../components/member-heading/member-heading.component';

@Component({
  selector: 'daffio-docs-api-method-block',
  templateUrl: './method-block.component.html',
  styleUrl: './method-block.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    DaffioSafeHtmlPipe,
    DaffioDocsMemberHeadingComponent,
    DaffioDocsMemberHeadingNameDirective,
    FaIconComponent,
  ],
})
export class DaffioDocsApiMethodBlockComponent {
  faCode = faCode;
  @Input() method: DaffDocsApiTypeMethod;
  @Input() child = false;
}
