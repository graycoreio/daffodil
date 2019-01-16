import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[demoContinueShopping]'
})

export class ContinueShoppingDirective {

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
