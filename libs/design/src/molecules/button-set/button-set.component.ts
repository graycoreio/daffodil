import {
  Component,
  ViewEncapsulation,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

/**
 * @deprecated in v1.0.0
 */
@Component({
  selector: 'daff-button-set',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button-set.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffButtonSetComponent {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-button-set') class = true;
}
