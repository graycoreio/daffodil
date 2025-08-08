import {
  ChangeDetectionStrategy,
  Component,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

@Component({
  selector: 'daffio-docs-heading-link',
  templateUrl: './heading-link.component.html',
  styleUrl: './heading-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
  ],
  imports: [
    RouterLink,
    FaIconComponent,
  ],
})
export class DaffioDocsHeadingLinkComponent {
  faLink = faLink;

  fragment = input.required<string>();
}
