import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[demo-proceed-to-checkout]',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProceedToCheckoutComponent {

  @HostListener('click') onClick() {
    this.navigateToCheckout()
  }

  constructor(
    private router: Router
  ) { }

  private navigateToCheckout() {
    this.router.navigateByUrl('/checkout');
  }
}