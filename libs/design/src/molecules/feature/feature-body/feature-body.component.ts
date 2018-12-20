import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[daff-feature-body]',
  template: '<ng-content></ng-content>',
  host: {'class': 'daff-feature__body'},
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffFeatureBodyComponent {

}
