import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
} from '@angular/core';

import { DaffColorableDirective } from '@daffodil/design';

/**
 * @inheritdoc
 */
@Component({
  selector: 'daff-loading-icon',
  templateUrl: './loading-icon.component.html',
  styleUrls: ['./loading-icon.component.scss'],
  hostDirectives: [
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DaffLoadingIconComponent {

  /**
   * The (pixel) diameter of the animation
   */
  @Input() diameter = 60;

  /**
   * @docs-private
   */
  @HostBinding('class.daff-loading-icon') class = true;
  /**
   * @docs-private
   */
  @HostBinding('style.max-width') get maxWidth() {
    return this.diameter + 'px';
  }
}
