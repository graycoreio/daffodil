import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'continue-shopping',
  templateUrl: './continue-shopping.component.html',
  styleUrls: ['./continue-shopping.component.scss']
})
export class ContinueShoppingComponent {

  constructor(
    private router: Router
  ) { }

  navigateToShopping() {
    this.router.navigateByUrl('/product-grid');
  }
}
