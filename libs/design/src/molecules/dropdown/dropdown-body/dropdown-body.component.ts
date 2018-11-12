import { Component } from '@angular/core';

@Component({
  selector: '[daff-dropdown-body]',
  host: { 'class': 'daff-dropdown__body' },
  template: '<ng-content></ng-content>'
})
export class DaffDropdownBodyComponent {}
