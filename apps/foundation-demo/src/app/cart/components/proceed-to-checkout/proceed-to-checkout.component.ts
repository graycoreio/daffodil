import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'proceed-to-checkout',
  templateUrl: './proceed-to-checkout.component.html',
  styleUrls: ['./proceed-to-checkout.component.scss']
})
export class ProceedToCheckoutComponent {

  constructor(
    private router: Router
  ) { }

  navigateToCheckout() {
    this.router.navigateByUrl('/checkout');
  }
}
