import { Component } from '@angular/core';

@Component({
  selector: '[daff-hero-subtitle]',
  template: '<ng-content></ng-content>',
  host: {'class': 'daff-hero__subtitle'}
})
export class DaffHeroSubtitleComponent {

  constructor() { }

}
