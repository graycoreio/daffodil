import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

/* eslint-disable quote-props */
@Component({
  selector: 'daff-nav-list',
  template: '<ng-content></ng-content>',
  styleUrl: './nav-list.component.scss',
  host: {
    'class': 'daff-nav-list',
    'role': 'navigation',
  },
  hostDirectives: [
    {
      directive: DaffArticleEncapsulatedDirective,
    },
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffNavListComponent {}
