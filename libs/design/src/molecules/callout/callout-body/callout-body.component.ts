import { Component, ChangeDetectionStrategy } from '@angular/core';

 @Component({
  // tslint:disable-next-line: component-selector
  selector: '[daff-callout-body]',
  host: {
    'class': 'daff-callout__body'
  },
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffCalloutBodyComponent {}
