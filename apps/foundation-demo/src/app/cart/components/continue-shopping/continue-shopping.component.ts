import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'continue-shopping',
  templateUrl: './continue-shopping.component.html'
})
export class ContinueShoppingComponent {

  constructor(
    private router: Router
  ) { }

  navigateToShopping() {
    this.router.navigateByUrl('/product-grid');
  }
}
