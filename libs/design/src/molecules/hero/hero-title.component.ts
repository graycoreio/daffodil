import { Component } from '@angular/core';

@Component({
  selector: '[daff-hero-title]',
  template: '<ng-content></ng-content>',
  host: {'class': 'daff-hero__title'}
})
export class DaffHeroTitleComponent {

  constructor() { }

}
