import { Component } from '@angular/core';

@Component({
  selector: '[daff-list-subheader]',
  template: '<ng-content></ng-content>',
  host: {'class': 'daff-list__subheader'}
})
export class DaffListSubheaderComponent {}
