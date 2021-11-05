import {
  Component,
  ViewEncapsulation,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'daff-image-list',
  template: '<ng-content></ng-content>',
  styleUrls: ['./image-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffImageListComponent {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-image-list') class = true;
}
