import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component ({
  // tslint:disable-next-line: component-selector
  selector: '[daff-feature-icon]',
  host: {
    'class': 'daff-feature__icon'
  },
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffFeatureIconComponent {}
