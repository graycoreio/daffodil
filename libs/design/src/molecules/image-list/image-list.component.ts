import { Component, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'daff-image-list',
  template: '<ng-content></ng-content>',
  styleUrls: ['./image-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DaffImageListComponent {

  @HostBinding('class.daff-image-list') class = true;
}
