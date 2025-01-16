import {
  Directive,
  HostListener,
} from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[demoProceedToCheckout]',
  standalone: false,
})

export class ProceedToCheckoutDirective {

  @HostListener('click') onClick() {
    this.navigateToCheckout();
  }

  constructor(
    private router: Router,
  ) { }

  private navigateToCheckout() {
    this.router.navigateByUrl('/checkout');
  }
}
