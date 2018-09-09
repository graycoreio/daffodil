import { Component } from '@angular/core';

@Component({
  selector: '[daff-list-title]',
  template: '<ng-content></ng-content>',
  host: {'class': 'daff-list__title'}
})
export class DaffListTitleComponent {}
