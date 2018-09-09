import { Component } from '@angular/core';

@Component({
  selector: '[daff-footer-icons]',
  template: '<ng-content></ng-content>',
  host: {'class': 'daff-footer__icons'}
})
export class DaffFooterIconsComponent {}
