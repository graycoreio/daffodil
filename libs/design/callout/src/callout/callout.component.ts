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

/**
 * @inheritdoc
 */
@Component({
  selector: 'daff-callout',
  template: '<ng-content></ng-content>',
  styleUrls: ['./callout.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffCalloutComponent {
  constructor(private textAlignable: DaffTextAlignableDirective) {
    this.textAlignable.textAlignment = 'left';
  }

  /**
   * @docs-private
   */
  @HostBinding('class.daff-callout') class = true;
}
