import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';

import {
  DaffCartItemInput,
  DaffCartItemInputType,
} from '@daffodil/cart';
import { DaffButtonComponent } from '@daffodil/design/button';

@Component({
  selector: 'demo-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    DaffButtonComponent,
  ],
})
export class AddToCartComponent {
  @HostBinding('class.demo-add-to-cart') class = true;
  @Input() additive: any;
  @Input() qty: number;
  @Output() addToCart: EventEmitter<DaffCartItemInput> = new EventEmitter();

  onAddToCart() {
    this.emitAddToCart();
  }

  emitAddToCart() {
    this.addToCart.emit({ productId: this.additive.id, qty: this.qty, type: DaffCartItemInputType.Simple });
  }
}
