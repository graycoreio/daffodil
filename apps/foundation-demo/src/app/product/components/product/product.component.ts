import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Product } from '@daffodil/core';
import { Router } from '@angular/router';
import { Image } from '../../../design/interfaces/image';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<any> = new EventEmitter();
  
  qty: number;
  
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.qty = 1;

    if (!this.product) {
      this.router.navigateByUrl('/404');
    }
  }

  images: Image[] = [
    {url : '/assets/mh01-black_main.jpg', label: 'Image 1'},
    {url : '/assets/mh01-gray_alt1.jpg', label: 'Image 2'},
    {url : '/assets/mh01-gray_back.jpg', label: 'Image 3'},
    {url : '/assets/mh01-gray_main.jpg',   label: 'Image 4'},
    {url : '/assets/mh01-orange_main.jpg', label: 'Image 5'}
  ]

  addProductToCart() {
    this.addToCart.emit({productId: this.product.id, qty: this.qty});
  }

  updateQty(qty: number) {
    this.qty = qty;
  }
}
