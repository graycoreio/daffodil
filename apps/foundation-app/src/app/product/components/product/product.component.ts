import { Component, OnInit, Input } from '@angular/core';

import { Product } from '@daffodil/core';
import { Router } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.product) {
      this.router.navigateByUrl('/404');
    }
  }

  // only here to provide stubbed imgUrls
  imgUrls = [
    "/assets/mh04-green_alt1.jpg",
    "/assets/mh04-green_alt1.jpg",
    "/assets/many_shirts.jpg",
    "/assets/mh04-green_alt1.jpg"
  ]
}
