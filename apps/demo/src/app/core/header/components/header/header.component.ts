import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DaffNavbarComponent } from '@daffodil/design/navbar';

@Component({
  selector: 'demo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    DaffNavbarComponent,
  ],
})
export class DemoHeaderComponent {

  constructor(
    private router: Router,
  ) {}

  navigateToCart() {
    this.router.navigateByUrl('/cart');
  }
}
