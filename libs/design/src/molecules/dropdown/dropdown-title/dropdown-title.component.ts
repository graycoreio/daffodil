import { Component } from '@angular/core';

@Component({
  selector: '[daff-dropdown-title]',
  host: { 'class': 'daff-dropdown__title' },
  template: '<ng-content></ng-content>',
})
export class DaffDropdownTitleComponent {}
