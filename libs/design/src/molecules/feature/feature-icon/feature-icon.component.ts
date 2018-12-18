import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component ({
  selector: '[daff-feature-icon]',
  template: '<ng-content></ng-content>',
  host: {'class': 'daff-feature__icon'},
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffFeatureIconComponent {
  
}
