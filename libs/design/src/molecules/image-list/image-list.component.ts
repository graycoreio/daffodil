import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'daff-image-list',
  template: '<ng-content></ng-content>',
  styleUrls: ['./image-list.component.scss'],
  host: {
    'class': 'daff-image-list'
  },
  encapsulation: ViewEncapsulation.None
})
export class DaffImageListComponent {}
