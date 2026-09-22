import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'demo-cart-totals-item',
  templateUrl: './cart-totals-item.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./cart-totals-item.component.scss'],
})
export class CartTotalsItemComponent {

  @Input() emphasize: boolean;

}
