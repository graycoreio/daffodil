import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'image-list',
  template: '<ng-content></ng-content>',
  host: { 'class' : 'image-list' },
  styleUrls: ['./image-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageListComponent {}
