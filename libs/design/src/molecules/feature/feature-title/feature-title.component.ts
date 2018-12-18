import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[daff-feature-title]',
  template: '<ng-content></ng-content>',
  host: {'class': 'daff-feature__title'},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffFeatureTitleComponent {

}
