import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

import {
  DaffColorableDirective,
  DaffCompactableDirective,
} from '@daffodil/design';
import {
  DaffArticleEncapsulatedDirective,
  DaffManageContainerLayoutDirective,
  DaffTextAlignableDirective,
} from '@daffodil/design';

@Component({
  selector: 'daff-hero',
  template: '<ng-content></ng-content>',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    { directive: DaffManageContainerLayoutDirective },
    {
      directive: DaffTextAlignableDirective,
      inputs: ['textAlignment'],
    },
    {
      directive: DaffCompactableDirective,
      inputs: ['compact'],
    },
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
  ],
  standalone: true,
})
export class DaffHeroComponent {
  constructor(private textAlignable: DaffTextAlignableDirective) {
    this.textAlignable.defaultAlignment = 'left';
  }

  /**
   * @docs-private
   */
  @HostBinding('class.daff-hero') class = true;
}
