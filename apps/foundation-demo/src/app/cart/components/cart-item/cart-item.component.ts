import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from '@daffodil/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fd-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item: CartItem;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  redirectToProduct() {
    this.router.navigateByUrl('/product/' + this.item.product_id);
  }
}
