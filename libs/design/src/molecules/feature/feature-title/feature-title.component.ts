import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[daff-feature-title]',
  host: {
    'class': 'daff-feature__title'
  },
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffFeatureTitleComponent {}
