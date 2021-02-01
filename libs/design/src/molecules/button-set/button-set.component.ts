import {
  Component,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'daff-button-set',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button-set.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DaffButtonSetComponent {
  /**
   * @docs-private
   */
  @HostBinding('class.daff-button-set') class = true;
}
