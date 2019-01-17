import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[demo-continue-shopping]',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContinueShoppingComponent {

  @HostListener('click') onClick() {
    this.navigateToShopping()
  }
  
  constructor(
    private router: Router
  ) { }

  private navigateToShopping() {
    this.router.navigateByUrl('/product-grid');
  }
}
