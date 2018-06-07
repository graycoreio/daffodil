import { Component, OnInit, Input } from '@angular/core';

import { Product } from '@daffodil/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;

  // only here to provide stubbed imgUrls
  imgUrls = [
    "/assets/mh04-green_alt1.jpg",
    "/assets/mh04-green_alt1.jpg",
    "/assets/many_shirts.jpg",
    "/assets/mh04-green_alt1.jpg"
  ]
}
