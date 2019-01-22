import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[daff-list-subheader]',
  host: {
    'class': 'daff-list__subheader'
  },
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffListSubheaderComponent {}
