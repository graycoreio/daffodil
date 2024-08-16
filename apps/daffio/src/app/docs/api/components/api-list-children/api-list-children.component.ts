import {
  Component,
  Input,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { DaffioApiReference } from '../../models/api-reference';

@Component({
  selector: 'daffio-api-list-children',
  templateUrl: './api-list-children.component.html',
  styleUrls: ['./api-list-children.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterLink,
  ],
})
export class DaffioApiListChildrenComponent {
  @HostBinding('class.daffio-api-list-children') class = true;

  /**
   * A list of references for API documents.
   */
  @Input() children: Array<DaffioApiReference>;
}
