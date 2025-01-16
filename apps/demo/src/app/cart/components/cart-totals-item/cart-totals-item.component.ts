import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'demo-cart-totals-item',
  templateUrl: './cart-totals-item.component.html',
  styleUrls: ['./cart-totals-item.component.scss'],
  standalone: false,
})
export class CartTotalsItemComponent {

  @Input() emphasize: boolean;

}
