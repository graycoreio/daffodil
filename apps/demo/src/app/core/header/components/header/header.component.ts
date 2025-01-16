import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'demo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class DemoHeaderComponent {

  constructor(
    private router: Router,
  ) {}

  navigateToCart() {
    this.router.navigateByUrl('/cart');
  }
}
