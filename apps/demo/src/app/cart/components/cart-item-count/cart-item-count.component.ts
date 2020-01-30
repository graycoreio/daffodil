import { Component, Input } from '@angular/core';

@Component({
  selector: 'demo-cart-item-count',
  templateUrl: './cart-item-count.component.html',
  styleUrls: ['./cart-item-count.component.scss']
})
export class CartItemCountComponent {

  @Input() itemCount: number;
}
