import {
  Component,
  Input,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

import { DaffioApiReference } from '../../models/api-reference';

@Component({
  selector: 'daffio-api-list-section',
  templateUrl: './api-list-section.component.html',
  styleUrls: ['./api-list-section.component.scss'],
  hostDirectives: [{
    directive: DaffArticleEncapsulatedDirective,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterLink,
  ],
})
export class DaffioApiListSectionComponent {
  @HostBinding('class.daffio-api-list-section') class = true;

  /**
   * A list of references for API documents.
   */
  @Input() children: Array<DaffioApiReference>;
}
