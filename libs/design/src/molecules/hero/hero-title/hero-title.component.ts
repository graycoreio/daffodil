import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[daff-hero-title]',
  host: {
    'class': 'daff-hero__title'
  },
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffHeroTitleComponent {}
